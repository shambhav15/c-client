import { RippleButton } from "@/components/ui/buttons/ripple";
import { createFileRoute, Link } from "@tanstack/react-router";
import { IconButton } from "@/components/ui/buttons/icon-button";
import { Sparkles, LogIn, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const [active, setActive] = useState(false);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Telegram-Inspired Chat App
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Welcome to our chat application project! Experience our beautiful neon
          login design.
        </p>

        {/* Main Login CTA */}
        <Link to="/login">
          <Button size="lg" className="mb-8">
            <LogIn className="h-5 w-5 mr-2" />
            Try Login Screen
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </Link>
      </div>

      {/* Login Design Showcase */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-foreground mb-6">
          🎨 Neon Login Design
        </h2>

        <div className="max-w-2xl mx-auto">
          <Link to="/login">
            <div className="group p-8 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20 border border-border rounded-2xl hover:shadow-2xl transition-all duration-300 cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 group-hover:from-purple-500/20 group-hover:to-pink-500/20 transition-all duration-300" />

              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-xl mr-4">
                    <Sparkles className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-card-foreground mb-1">
                      Futuristic Neon Design
                    </h3>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300 text-sm font-medium rounded-full">
                      Main Login
                    </span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Experience our sleek login interface with animated video
                  background, glassmorphism effects, and seamless authentication
                  flow. Perfect for modern chat applications.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Animated video background with enhanced blur
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Compact glassmorphism design
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Tab-based Sign In/Sign Up navigation
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Social login with Google & Apple
                  </div>
                </div>

                <div className="flex items-center text-purple-600 dark:text-purple-400 font-medium group-hover:translate-x-1 transition-transform">
                  Launch Login Screen <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-foreground mb-6">
          ✨ Features
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-center p-4 bg-muted rounded-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
            <span className="text-foreground">
              Toggle between Sign In/Sign Up
            </span>
          </div>
          <div className="flex items-center p-4 bg-muted rounded-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
            <span className="text-foreground">
              Google & Apple OAuth integration
            </span>
          </div>
          <div className="flex items-center p-4 bg-muted rounded-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
            <span className="text-foreground">
              Fully responsive & compact design
            </span>
          </div>
          <div className="flex items-center p-4 bg-muted rounded-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
            <span className="text-foreground">
              Enhanced video background with blur
            </span>
          </div>
          <div className="flex items-center p-4 bg-muted rounded-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
            <span className="text-foreground">
              Form validation & accessibility
            </span>
          </div>
          <div className="flex items-center p-4 bg-muted rounded-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
            <span className="text-foreground">
              Smooth animations & transitions
            </span>
          </div>
        </div>
      </div>

      {/* Demo Components */}
      <div className="border-t border-border pt-8">
        <h2 className="text-2xl font-semibold text-foreground mb-6">
          🎨 UI Components Demo
        </h2>

        <div className="flex flex-wrap gap-4 items-center">
          <RippleButton size="sm">Ripple Button</RippleButton>
          <Button>Standard Button</Button>
          <Button variant="outline">Outline Button</Button>
          <IconButton
            icon={Sparkles}
            active={active}
            onClick={() => setActive(!active)}
          />
        </div>

        <p className="text-muted-foreground text-sm mt-4">
          These are some of the UI components used in our login screen.
        </p>
      </div>
    </div>
  );
}
