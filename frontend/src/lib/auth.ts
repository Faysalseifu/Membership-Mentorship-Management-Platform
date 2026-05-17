import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // This is a stub. Integrate with actual backend later.
        if (credentials?.email === "superadmin@example.com" && credentials?.password === "password") {
          return { id: "0", name: "Super Admin User", email: "superadmin@example.com", role: "super_admin" };
        }
        if (credentials?.email === "admin@example.com" && credentials?.password === "password") {
          return { id: "1", name: "Admin User", email: "admin@example.com", role: "admin" };
        }
        if (credentials?.email === "mentor@example.com" && credentials?.password === "password") {
          return { id: "2", name: "Mentor User", email: "mentor@example.com", role: "mentor" };
        }
        if (credentials?.email === "member@example.com" && credentials?.password === "password") {
          return { id: "3", name: "Member User", email: "member@example.com", role: "member" };
        }
        return null;
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).role = token.role;
        (session.user as any).id = token.id;
      }
      return session;
    }
  },
  pages: {
    signIn: "/auth/login",
  },
  session: {
    strategy: "jwt",
  },
};
