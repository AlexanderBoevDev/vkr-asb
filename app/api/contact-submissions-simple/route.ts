import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const prisma = new PrismaClient();

/**
 * Метод GET — (по вашему коду) доступен только ADMIN.
 * Если хотите чтобы любой мог читать, уберите проверку на роль.
 */
export async function GET(request: NextRequest) {
  // Если хотите чтобы только админ мог читать:
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
 * Метод POST — «писать могут все» (нет проверки).
 * Создаёт новую запись ContactSubmissionSimple.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

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
