import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

const prisma = new PrismaClient();

// Метод GET для получения одной записи по её ID
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  // Получаем сессию, передавая req
  const session = await getServerSession(authOptions);

  // Проверяем, есть ли сессия и является ли пользователь ADMIN
  if (!session || session.user.role !== "ADMIN") {
    return NextResponse.json({ error: "Недостаточно прав" }, { status: 403 });
  }

  try {
    const id = parseInt(params.id, 10);

    const submission = await prisma.contactSubmissionSimple.findUnique({
      where: { id }
    });

    if (!submission) {
      return NextResponse.json({ error: "Запись не найдена" }, { status: 404 });
    }

    return NextResponse.json(submission, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Ошибка при получении записи" },
      { status: 500 }
    );
  }
}

// Метод PATCH для частичного обновления записи
export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "ADMIN") {
    return NextResponse.json({ error: "Недостаточно прав" }, { status: 403 });
  }

  try {
    const id = parseInt(params.id, 10);
    const body = await req.json();

    const updatedSubmission = await prisma.contactSubmissionSimple.update({
      where: { id },
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

    return NextResponse.json(updatedSubmission, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Ошибка при обновлении записи" },
      { status: 500 }
    );
  }
}

// Метод DELETE для удаления записи
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "ADMIN") {
    return NextResponse.json({ error: "Недостаточно прав" }, { status: 403 });
  }

  try {
    const id = parseInt(params.id, 10);

    await prisma.contactSubmissionSimple.delete({
      where: { id }
    });

    // Возвращаем статус 204 (без тела)
    return NextResponse.json({}, { status: 204 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Ошибка при удалении записи" },
      { status: 500 }
    );
  }
}
