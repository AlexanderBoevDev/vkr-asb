import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const prisma = new PrismaClient();
const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET_KEY || "";

/**
 * Метод GET — доступен только ADMIN
 * (Если хотите, чтобы любой мог читать, уберите проверку.)
 */
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

    // 1) Извлекаем reCAPTCHA token
    const recaptchaToken = body.recaptchaToken;
    if (!recaptchaToken) {
      return NextResponse.json(
        { error: "No reCAPTCHA token" },
        { status: 400 }
      );
    }

    // 2) Проверяем reCAPTCHA на сервере
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
    console.log("DEBUG reCAPTCHA verifyData =", verifyData);

    // verifyData.success = true/false
    // verifyData.score в диапазоне 0..1
    if (!verifyData.success || verifyData.score < 0.5) {
      return NextResponse.json(
        { error: "reCAPTCHA check failed" },
        { status: 400 }
      );
    }

    // 3) Создаём новую запись, если reCAPTCHA ok
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

    return NextResponse.json(newSubmission, { status: 201 });
  } catch (error) {
    console.error("Ошибка POST /contactSubmissionsSimple:", error);
    return NextResponse.json(
      { error: "Ошибка при создании записи" },
      { status: 500 }
    );
  }
}
