import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

// const prisma = new PrismaClient();
export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [GitHub],
  // adapter: PrismaAdapter(prisma),
});
