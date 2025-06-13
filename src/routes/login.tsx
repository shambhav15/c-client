import { createFileRoute } from "@tanstack/react-router";
import Login from "@/components/auth/Login";
import { requireGuest } from "@/lib/auth-middleware";

export const Route = createFileRoute("/login")({
  beforeLoad: async () => {
    await requireGuest();
  },
  component: LoginPage,
});

function LoginPage() {
  return <Login />;
}
