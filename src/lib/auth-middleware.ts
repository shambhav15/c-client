import { redirect } from "@tanstack/react-router";
import { authClient } from "./auth-client";

// Middleware for protected routes - redirects to login if not authenticated
export const requireAuth = async () => {
  try {
    const session = await authClient.getSession();
    console.log("RequireAuth - Session:", session); // Debug log

    if (!session?.data?.user) {
      console.log("RequireAuth - No user found, redirecting to login"); // Debug log
      throw redirect({
        to: "/login",
      });
    }
    console.log("RequireAuth - User authenticated:", session.data.user); // Debug log
  } catch (error) {
    console.error("RequireAuth - Error getting session:", error); // Debug log
    // If there's an error getting session, redirect to login
    throw redirect({
      to: "/login",
    });
  }
};

// Middleware for auth pages - redirects to home if already authenticated
export const requireGuest = async () => {
  try {
    const session = await authClient.getSession();
    console.log("RequireGuest - Session:", session); // Debug log

    if (session?.data?.user) {
      console.log("RequireGuest - User is authenticated, redirecting to home"); // Debug log
      throw redirect({
        to: "/",
      });
    }
  } catch (error) {
    // If there's an error, let them stay on the auth page
    console.error("RequireGuest - Error checking session:", error);
  }
};
