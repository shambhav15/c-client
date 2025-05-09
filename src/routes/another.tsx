import {
  QueryClient,
  queryOptions,
  useQuery,
  useSuspenseQuery,
} from "@tanstack/react-query";
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

const relatedPosts = () =>
  queryOptions({
    queryKey: ["posts"],
    queryFn: () => loaderFn(),
  });

export const Route = createFileRoute("/another")({
  component: RouteComponent,
  loader: ({ context }) => {
    context.queryClient.prefetchQuery(relatedPosts());
  },
});

const DynamicComponent = () => {
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

function RouteComponent() {
  return (
    <div className="flex min-h-screen">
      <div className="w-1/3 p-8 ">
        <h2 className="text-2xl font-bold mb-4">Static Content</h2>
        <p className="mb-4">
          This is some static content that will render immediately on the left
          side. You can see this content while the data is still loading.
        </p>
        <p className="mb-4">
          The data from the API call will appear in a box on the right side of
          the screen. This demonstrates the loading sequence of static vs
          dynamic content.
        </p>
        <p>
          Notice how this text appears instantly while the right side shows a
          loading state before displaying the fetched data.
        </p>
      </div>
      <Suspense
        fallback={
          <div className="w-2/3 p-8 flex items-center justify-center">
            Loading data...
          </div>
        }
      >
        <DynamicComponent />
      </Suspense>
    </div>
  );
}
