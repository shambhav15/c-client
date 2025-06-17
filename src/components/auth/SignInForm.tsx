import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Loader2, Mail } from "lucide-react";
import SocialLoginButtons from "./SocialLoginButtons";

interface SignInFormProps {
  formData: {
    email: string;
    password: string;
  };
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  onGoogleLogin: () => void;
  onMagicLinkLogin: () => void;
  isGoogleLoading: boolean;
  isMagicLinkLoading: boolean;
}

export default function SignInForm({
  formData,
  onInputChange,
  onSubmit,
  onGoogleLogin,
  onMagicLinkLogin,
  isGoogleLoading,
  isMagicLinkLoading,
}: SignInFormProps) {
  return (
    <Card className="relative bg-white/20 backdrop-blur-sm border-white/30 shadow-2xl overflow-hidden">
      {/* Gradient overlay for glass effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-white/10 rounded-2xl pointer-events-none"></div>
      <div className="relative z-10">
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-xl font-bold text-white drop-shadow-sm">
            Welcome back
          </CardTitle>
          <CardDescription className="text-white/80 text-xs">
            Sign in to continue
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={onSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <Label
                htmlFor="signin-email"
                className="text-white text-xs font-medium drop-shadow-sm"
              >
                Email
              </Label>
              <Input
                id="signin-email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={onInputChange}
                className="mt-1 bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-white/50 focus:ring-white/30 h-9 text-sm backdrop-blur-sm"
                required
              />
            </div>

            {/* Password */}
            <div>
              <Label
                htmlFor="signin-password"
                className="text-white text-xs font-medium drop-shadow-sm"
              >
                Password
              </Label>
              <Input
                id="signin-password"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={onInputChange}
                className="mt-1 bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-white/50 focus:ring-white/30 h-9 text-sm backdrop-blur-sm"
                required
              />
            </div>

            {/* Forgot password */}
            <div className="text-right">
              <button
                type="button"
                className="text-xs text-white/80 hover:text-white transition-colors drop-shadow-sm"
              >
                Forgot password?
              </button>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full h-9 bg-white text-black hover:bg-white/90 font-medium text-xs transition-all duration-200 shadow-lg"
            >
              Sign in
            </Button>

            {/* Magic Link Button */}
            <Button
              type="button"
              variant="outline"
              className="w-full h-9 bg-white/10 border-white/40 text-white hover:bg-white/20 backdrop-blur-sm text-xs"
              onClick={onMagicLinkLogin}
              disabled={isMagicLinkLoading || !formData.email}
            >
              {isMagicLinkLoading ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <Mail className="w-4 h-4 mr-2" />
              )}
              {isMagicLinkLoading ? "Sending link..." : "Send magic link"}
            </Button>

            {/* Divider */}
            <div className="relative">
              <Separator className="bg-white/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-transparent px-2 text-white/70 text-xs drop-shadow-sm">
                  OR SIGN IN WITH
                </span>
              </div>
            </div>

            {/* Social Login Buttons */}
            <SocialLoginButtons
              onGoogleLogin={onGoogleLogin}
              isGoogleLoading={isGoogleLoading}
            />
          </form>
        </CardContent>
      </div>
    </Card>
  );
}
