import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

// Создаём клиент для работы с Prisma
const prisma = new PrismaClient();

// Метод GET для получения одной записи по её ID
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    // Комментарий: получаем id из params
    const id = parseInt(params.id, 10);

    // Ищем запись в базе
    const submission = await prisma.contactSubmissionSimple.findUnique({
      where: { id }
    });

    // Если не нашли, вернём 404
    if (!submission) {
      return NextResponse.json({ error: "Запись не найдена" }, { status: 404 });
    }

    // Возвращаем запись
    return NextResponse.json(submission, { status: 200 });
  } catch (error) {
    // Если что-то пошло не так, возвращаем ошибку
    return NextResponse.json(
      { error: "Ошибка при получении записи" },
      { status: 500 }
    );
  }
}

// Метод PATCH для частичного обновления записи
export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    // Извлекаем id
    const id = parseInt(params.id, 10);
    // Парсим тело запроса
    const body = await request.json();

    // Обновляем запись, передавая только те поля, которые пришли
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

    // Возвращаем обновлённую запись
    return NextResponse.json(updatedSubmission, { status: 200 });
  } catch (error) {
    // Если запись не найдена или другая ошибка — вернём 400/500
    return NextResponse.json(
      { error: "Ошибка при обновлении записи" },
      { status: 500 }
    );
  }
}

// Метод DELETE для удаления записи
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    // Парсим id
    const id = parseInt(params.id, 10);

    // Удаляем запись
    await prisma.contactSubmissionSimple.delete({
      where: { id }
    });

    // Возвращаем статус 204 (без тела)
    return NextResponse.json({}, { status: 204 });
  } catch (error) {
    // Если запись не найдена или другая ошибка
    return NextResponse.json(
      { error: "Ошибка при удалении записи" },
      { status: 500 }
    );
  }
}
