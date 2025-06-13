import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: "http://localhost:9000/api/auth",
});

export const signIn = async () => {
  return await authClient.signIn.social({
    provider: "google",
    callbackURL: "http://localhost:3000/sso/success/google",
  });
};

// Export commonly used auth methods
export const { useSession, getSession, signOut } = authClient;
