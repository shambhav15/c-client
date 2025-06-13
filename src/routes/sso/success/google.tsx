import { useEffect, useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { axiosInstance } from "@/services/api-client";

export const Route = createFileRoute("/sso/success/google")({
  component: RouteComponent,
});

function RouteComponent() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<any>(null);
  const navigate = useNavigate();

  const fetchUser = async () => {
    const response = await axiosInstance.get("/v1/users/profile", {
      withCredentials: true,
    });
    return response.data;
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
  return <div>{data}</div>;
}
