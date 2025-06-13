import { redirect } from "@tanstack/react-router";
import { authClient } from "./auth-client";

// Middleware for protected routes - redirects to login if not authenticated
export const requireAuth = async () => {
  try {
    const session = await authClient.getSession();
    if (!session?.data?.user) {
      throw redirect({
        to: "/login",
      });
    }
  } catch (error) {
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
    if (session?.data?.user) {
      throw redirect({
        to: "/",
      });
    }
  } catch (error) {
    // If there's an error, let them stay on the auth page
    console.error("Error checking session:", error);
  }
};
