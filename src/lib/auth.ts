import { authClient } from "./auth-client";

// Better-auth handles user data via cookies, no localStorage needed
export const getUser = () => {
  // Better-auth automatically manages user session via cookies
  return authClient.getSession();
};

export const isAuthenticated = async (): Promise<boolean> => {
  try {
    const session = await authClient.getSession();
    return !!session?.data?.user;
  } catch (error) {
    console.error("Error checking authentication:", error);
    return false;
  }
};

export const logout = async (): Promise<void> => {
  try {
    await authClient.signOut();
    // Redirect will be handled by better-auth or the calling component
    if (typeof window !== "undefined") {
      window.location.href = "/login";
    }
  } catch (error) {
    console.error("Error during logout:", error);
  }
};
