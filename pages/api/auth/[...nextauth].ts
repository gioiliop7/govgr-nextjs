// IMPORTANT!!!!!
// Note: This section has not been tested.
// Make changes and contribute

import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import { OAuthConfig, OAuthUserConfig } from "next-auth/providers";
import { getUserProfile } from "@/utils/taxis-auth";

// Custom OAuth Provider for TaxisNet
const TaxisProvider = (options: OAuthUserConfig<any>): OAuthConfig<any> => {
  return {
    id: "taxis",
    name: "TaxisNet",
    type: "oauth",
    version: "2.0",
    scope: "read",
    params: { grant_type: "authorization_code" },
    accessTokenUrl: `${process.env.TAXIS_BASE_URL}/oauth/token`,
    requestTokenUrl: `${process.env.TAXIS_BASE_URL}/oauth/authorize`,
    authorizationUrl: `${process.env.TAXIS_BASE_URL}/oauth/authorize?response_type=code`,
    profileUrl: `${process.env.TAXIS_BASE_URL}/userinfo?format=xml`,
    //@ts-ignore
    profile: async (profile) => {
      const token = profile.access_token;
      const userProfile = await getUserProfile(token);
      return {
        id: userProfile?.userid,
        name: `${userProfile?.firstname} ${userProfile?.lastname}`,
        email: userProfile?.taxid, // If TaxisNet provides email, replace this with the actual field.
        ...userProfile, // Include all other user profile fields.
      };
    },
    ...options,
  };
};

// NextAuth configuration for example
const authOptions: NextAuthOptions = {
  providers: [
    TaxisProvider({
      clientId: process.env.TAXIS_CLIENT_ID || "",
      clientSecret: process.env.TAXIS_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account?.accessToken) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
