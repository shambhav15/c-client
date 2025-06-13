import { Button } from "@/components/ui/button";
import { LogOut, Loader2 } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";

interface LogoutButtonProps {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  showIcon?: boolean;
  children?: React.ReactNode;
}

export function LogoutButton({
  variant = "outline",
  size = "default",
  className = "",
  showIcon = true,
  children,
}: LogoutButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    if (isLoading) return;

    setIsLoading(true);
    try {
      await authClient.signOut();
      // Better-auth will handle the redirect
      if (typeof window !== "undefined") {
        window.location.href = "/login";
      }
    } catch (error) {
      console.error("Logout error:", error);
      setIsLoading(false);
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleLogout}
      disabled={isLoading}
      className={className}
    >
      {isLoading ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        showIcon && <LogOut className="h-4 w-4" />
      )}
      {children || (isLoading ? "Signing out..." : "Sign out")}
    </Button>
  );
}
