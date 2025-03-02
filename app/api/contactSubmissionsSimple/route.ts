import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

// Создаём клиент для работы с Prisma
const prisma = new PrismaClient();

// Метод GET для получения всех записей ContactSubmissionSimple
export async function GET() {
  try {
    // Получаем все записи
    const submissions = await prisma.contactSubmissionSimple.findMany();
    // Возвращаем записи в формате JSON
    return NextResponse.json(submissions, { status: 200 });
  } catch (error) {
    // Если что-то пошло не так, возвращаем ошибку
    return NextResponse.json(
      { error: "Ошибка при получении записей" },
      { status: 500 }
    );
  }
}

// Метод POST для создания новой записи ContactSubmissionSimple
export async function POST(request: Request) {
  try {
    // Извлекаем данные из запроса
    const body = await request.json();

    // Создаём новую запись
    const newSubmission = await prisma.contactSubmissionSimple.create({
      data: {
        // Комментарий: ниже маппим поля из формы
        name: body.name,
        email: body.email,
        phone: body.phone,
        city: body.city,
        // Комментарий: budget — это enum BudgetRange, нужно передавать одно из значений
        // "B200", "B200_300", "B300_500", "B500_plus"
        budget: body.budget,
        service: body.service,
        company: body.company,
        website: body.website,
        message: body.message
      }
    });

    // Возвращаем созданную запись
    return NextResponse.json(newSubmission, { status: 201 });
  } catch (error) {
    // Если что-то пошло не так, возвращаем ошибку
    return NextResponse.json(
      { error: "Ошибка при создании записи" },
      { status: 500 }
    );
  }
}
