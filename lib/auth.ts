// lib/auth.ts
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt"
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email и пароль обязательны");
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email }
        });
        if (!user) {
          throw new Error("Пользователь не найден");
        }

        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!isValid) {
          throw new Error("Неверный пароль");
        }

        return {
          id: String(user.id),
          email: user.email
        };
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        // Тут можно добавить другие поля, например role
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
        // Если добавляли role в jwt, то можно session.user.role = token.role
      }
      return session;
    }
  }
};
