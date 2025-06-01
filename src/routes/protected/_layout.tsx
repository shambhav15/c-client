import { createFileRoute, Outlet } from "@tanstack/react-router";
import { RadixSidebarDemo } from "@/components/Sidebar-Demo";
import {
  SidebarProvider,
  SidebarTrigger,
} from "@/components/animate-ui/radix/sidebar";
export const Route = createFileRoute("/protected/_layout")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <SidebarProvider>
        <RadixSidebarDemo />
      </SidebarProvider>
    </>
  );
}
