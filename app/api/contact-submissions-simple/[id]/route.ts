// app/api/contact-submissions-simple/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  // Пример: /api/contact-submissions-simple/123
  // Извлекаем "123" как последний сегмент пути
  const { pathname } = new URL(req.url);
  const segments = pathname.split("/");
  const lastSegment = segments[segments.length - 1];
  const id = parseInt(lastSegment, 10);

  // Получаем сессию
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== "ADMIN") {
    return NextResponse.json({ error: "Недостаточно прав" }, { status: 403 });
  }

  try {
    const submission = await prisma.contactSubmissionSimple.findUnique({
      where: { id }
    });

    if (!submission) {
      return NextResponse.json({ error: "Запись не найдена" }, { status: 404 });
    }

    return NextResponse.json(submission);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Ошибка при получении записи" },
      { status: 500 }
    );
  }
}

export async function PATCH(req: NextRequest) {
  const { pathname } = new URL(req.url);
  const segments = pathname.split("/");
  const lastSegment = segments[segments.length - 1];
  const id = parseInt(lastSegment, 10);

  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== "ADMIN") {
    return NextResponse.json({ error: "Недостаточно прав" }, { status: 403 });
  }

  try {
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

    return NextResponse.json(updatedSubmission);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Ошибка при обновлении записи" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  const { pathname } = new URL(req.url);
  const segments = pathname.split("/");
  const lastSegment = segments[segments.length - 1];
  const id = parseInt(lastSegment, 10);

  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== "ADMIN") {
    return NextResponse.json({ error: "Недостаточно прав" }, { status: 403 });
  }

  try {
    await prisma.contactSubmissionSimple.delete({ where: { id } });
    return NextResponse.json({}, { status: 204 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Ошибка при удалении записи" },
      { status: 500 }
    );
  }
}
