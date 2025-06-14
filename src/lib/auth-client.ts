import { createAuthClient } from "better-auth/react";
import { magicLinkClient } from "better-auth/client/plugins";

export const authClient = createAuthClient({
  baseURL: "http://localhost:9000/api/auth",
  plugins: [magicLinkClient()],
  });

export const signIn = async () => {
  return await authClient.signIn.social({
    provider: "google",
    callbackURL: "http://localhost:3000/",
  });
};

export const signInWithMagicLink = async (email: string) => {
  return await authClient.signIn.magicLink({
    email,
    callbackURL: "http://localhost:3000/",
  });
};

// Export commonly used auth methods
export const { useSession, getSession, signOut } = authClient;
