import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";

const loaderFn = createServerFn().handler(async () => {
  const response = await fetch("http://localhost:9000/api/v1/users/profile", {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
  return response;
});

export const Route = createFileRoute("/sso/success/google")({
  component: RouteComponent,
});

function RouteComponent() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  const fetchUser = async () => {
    const response = await fetch("http://localhost:9000/api/v1/users/profile", {
      credentials: "include",
    });
    return response.json();
  };

  useEffect(() => {
    fetchUser()
      .then((res) => {
        setData(res);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return <div>{JSON.stringify(data)}</div>;
}