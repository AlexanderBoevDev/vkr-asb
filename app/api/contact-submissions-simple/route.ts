import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const prisma = new PrismaClient();
const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET_KEY || "";

// Подтягиваем из .env
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || "";
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || "";

export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== "ADMIN") {
    return NextResponse.json({ error: "Недостаточно прав" }, { status: 403 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "10", 10);

    const skip = (page - 1) * limit;
    const take = limit;

    const [submissions, totalCount] = await Promise.all([
      prisma.contactSubmissionSimple.findMany({
        skip,
        take,
        orderBy: { createdAt: "desc" }
      }),
      prisma.contactSubmissionSimple.count()
    ]);

    return NextResponse.json({
      submissions,
      totalCount,
      page,
      limit
    });
  } catch (error) {
    console.error("Ошибка GET /contactSubmissionsSimple:", error);
    return NextResponse.json(
      { error: "Ошибка при получении записей" },
      { status: 500 }
    );
  }
}

/**
 * Метод POST — «писать могут все»
 * С валидацией reCAPTCHA v3
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const recaptchaToken = body.recaptchaToken;

    if (!recaptchaToken) {
      return NextResponse.json(
        { error: "No reCAPTCHA token" },
        { status: 400 }
      );
    }

    // 1) Проверяем reCAPTCHA
    const verifyRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: RECAPTCHA_SECRET,
          response: recaptchaToken
        })
      }
    );
    const verifyData = await verifyRes.json();
    if (!verifyData.success || verifyData.score < 0.5) {
      return NextResponse.json(
        { error: "reCAPTCHA check failed" },
        { status: 400 }
      );
    }

    // 2) Создаём новую запись в БД
    const newSubmission = await prisma.contactSubmissionSimple.create({
      data: {
        name: body.name,
        email: body.email,
        phone: body.phone,
        city: body.city,
        budget: body.budget,
        service: body.service,
        company: body.company,
        website: body.website,
        message: body.message
      }
    });

    // 3) Если нужно — отправляем сообщение в Telegram
    if (TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID) {
      const dateString = new Date(newSubmission.createdAt).toLocaleString(
        "ru-RU",
        {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit"
        }
      );

      const messageText = `
<b>🟠 Новая заявка #${newSubmission.id}</b>
🗓 <b>Дата:</b> ${dateString}

<b>Имя:</b> ${newSubmission.name}
<b>Email:</b> ${newSubmission.email}
<b>Телефон:</b> ${newSubmission.phone}
<b>Город:</b> ${newSubmission.city ?? "—"}
<b>Бюджет:</b> ${newSubmission.budget ?? "—"}
<b>Услуга:</b> ${newSubmission.service ?? "—"}
<b>Компания:</b> ${newSubmission.company ?? "—"}
<b>Сайт:</b> ${newSubmission.website ?? "—"}
<b>Сообщение:</b> ${newSubmission.message ?? "—"}
      `.trim();

      try {
        await fetch(
          `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              chat_id: TELEGRAM_CHAT_ID,
              text: messageText,
              parse_mode: "HTML"
            })
          }
        );
      } catch (err) {
        console.error("Ошибка при отправке в Telegram:", err);
      }
    } else {
      console.warn("TELEGRAM_BOT_TOKEN или TELEGRAM_CHAT_ID не заданы в .env");
    }

    // 4) Возвращаем результат
    return NextResponse.json(newSubmission, { status: 201 });
  } catch (error) {
    console.error("Ошибка POST /contactSubmissionsSimple:", error);
    return NextResponse.json(
      { error: "Ошибка при создании записи" },
      { status: 500 }
    );
  }
}
