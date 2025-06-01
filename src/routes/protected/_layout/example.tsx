import { DynamicComponent, relatedPosts } from "@/components/pages/example-page";
import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";

export const Route = createFileRoute("/protected/_layout/example")({
  component: RouteComponent,
  loader: ({ context }) => {
    context.queryClient.prefetchQuery(relatedPosts());
  },
});

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
