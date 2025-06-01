import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { Suspense } from "react";

const loaderFn = createServerFn().handler(async () => {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  ).then((res) => res.json());
  return response;
});

export const relatedPosts = () =>
  queryOptions({
    queryKey: ["posts"],
    queryFn: () => loaderFn(),
  });

export const DynamicComponent = () => {
  const { data } = useSuspenseQuery(relatedPosts());
  return (
    <div className="w-2/3 p-8">
      <div className="border rounded-lg p-6  shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Fetched Data</h3>
        <div className="overflow-auto max-h-[600px]">
          <pre className="whitespace-pre-wrap">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
};
