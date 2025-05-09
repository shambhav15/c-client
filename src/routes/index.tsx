import { RippleButton } from "@/components/ui/buttons/ripple";
import { createFileRoute } from "@tanstack/react-router";
import { IconButton } from "@/components/ui/buttons/icon-button";
import { Sparkles } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const [active, setActive] = useState(false);
  return (
    <div className="p-2">
      <h3>Welcome Home!!!</h3>
      <div>
        <RippleButton size="sm">Click me</RippleButton>
        <IconButton
          icon={Sparkles}
          active={active}
          onClick={() => setActive(!active)}
        />
      </div>
    </div>
  );
}
