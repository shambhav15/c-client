import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="p-2">
      <h3>Welcome Home!!!</h3>
      <Link to="/protected/socket" activeProps={{ className: "text-red-500" }} >
        Go to protected/socket
      </Link>
    </div>
  );
}
