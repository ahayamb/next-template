import NextAuth, { AuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    })
  ],
  secret: process.env.SECRET,
  session: {
    strategy: 'jwt'
  },
  jwt: {
    secret: process.env.SECRET
  },
  pages: {},
  callbacks: {},
  events: {},
 debug: false,
};

export default NextAuth(authOptions);
