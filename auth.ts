import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import LinkedIn from "next-auth/providers/linkedin";

import { client } from "@/sanity/lib/client";
import { writeClient } from "@/sanity/lib/write-client";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GitHub,
    Google,
    LinkedIn({
      clientId: process.env.LINKEDIN_CLIENT_ID!,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET!,
    }),
  ],

  callbacks: {
    async signIn({ user }) {
      const { name, email, image } = user;
      if (!email) return false;

      const existingAuthor = await client
        .withConfig({ useCdn: false })
        .fetch(`*[_type == "author" && email == $email][0]`, { email });

      if (!existingAuthor) {
        await writeClient.create({
          _type: "author",
          name: name || email.split("@")[0],
          email,
          image,
          username: email.split("@")[0],
          bio: "",
        });
      }

      return true;
    },

    async jwt({ token }) {
      if (token.email) {
        const author = await client
          .withConfig({ useCdn: false })
          .fetch(`*[_type == "author" && email == $email][0]`, {
            email: token.email,
          });

        token.id = author?._id;
      }

      return token;
    },

    async session({ session, token }) {
      Object.assign(session, { id: token.id });
      return session;
    },
  },
});
