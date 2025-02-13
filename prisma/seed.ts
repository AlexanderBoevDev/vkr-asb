import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash("admin", 10);

  await prisma.user.upsert({
    where: { email: "admin@asb-studio.ru" },
    update: {},
    create: {
      email: "admin@asb-studio.ru",
      password: hashedPassword,
      role: "ADMIN"
    }
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
