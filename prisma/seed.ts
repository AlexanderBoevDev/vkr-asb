import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash(
    "~1i1vmlwnpfnQX?r#Bg0|7~}hfaa4yfSHyiOOLbjsvbKZ4Xjcm9b9bN}lzG7jFW@a",
    10
  );

  await prisma.user.upsert({
    where: { email: "alexander@asb-studio.ru" },
    update: {},
    create: {
      email: "alexander@asb-studio.ru",
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
