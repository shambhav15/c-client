import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/protected/")({
  component: ProtectedHome,
});

function ProtectedHome() {
  return (
    <div className="p-2">
      <h3>Welcome Home!!!</h3>
      <div className="mt-4">
        <Link to="/protected/example" className="text-blue-500 hover:underline">
          Go to Example Page
        </Link>
      </div>
    </div>
  );
}
