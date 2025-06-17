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

interface SignUpFormProps {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  onGoogleLogin: () => void;
  onMagicLinkLogin: () => void;
  isGoogleLoading: boolean;
  isMagicLinkLoading: boolean;
}

export default function SignUpForm({
  formData,
  onInputChange,
  onSubmit,
  onGoogleLogin,
  onMagicLinkLogin,
  isGoogleLoading,
  isMagicLinkLoading,
}: SignUpFormProps) {
  return (
    <Card className="relative bg-white/20 backdrop-blur-sm border-white/30 shadow-2xl overflow-hidden">
      {/* Gradient overlay for glass effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-white/10 rounded-2xl pointer-events-none"></div>
      <div className="relative z-10">
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-xl font-bold text-white drop-shadow-sm">
            Create an account
          </CardTitle>
          <CardDescription className="text-white/80 text-xs">
            Fill in your details to get started
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={onSubmit} className="space-y-4">
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label
                  htmlFor="signup-firstName"
                  className="text-white text-xs font-medium drop-shadow-sm"
                >
                  First name
                </Label>
                <Input
                  id="signup-firstName"
                  name="firstName"
                  type="text"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={onInputChange}
                  className="mt-1 bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-white/50 focus:ring-white/30 h-9 text-sm backdrop-blur-sm"
                  required
                />
              </div>
              <div>
                <Label
                  htmlFor="signup-lastName"
                  className="text-white text-xs font-medium drop-shadow-sm"
                >
                  Last name
                </Label>
                <Input
                  id="signup-lastName"
                  name="lastName"
                  type="text"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={onInputChange}
                  className="mt-1 bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-white/50 focus:ring-white/30 h-9 text-sm backdrop-blur-sm"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <Label
                htmlFor="signup-email"
                className="text-white text-xs font-medium drop-shadow-sm"
              >
                Email
              </Label>
              <Input
                id="signup-email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={onInputChange}
                className="mt-1 bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-white/50 focus:ring-white/30 h-9 text-sm backdrop-blur-sm"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <Label
                htmlFor="signup-phone"
                className="text-white text-xs font-medium drop-shadow-sm"
              >
                Phone number
              </Label>
              <div className="mt-1 flex">
                <select className="bg-white/20 border-white/30 text-white rounded-l-md px-2 py-2 border-r-0 focus:border-white/50 focus:ring-white/30 backdrop-blur-sm text-sm">
                  <option value="+1" className="bg-black text-white">
                    🇺🇸 +1
                  </option>
                  <option value="+44" className="bg-black text-white">
                    🇬🇧 +44
                  </option>
                  <option value="+91" className="bg-black text-white">
                    🇮🇳 +91
                  </option>
                </select>
                <Input
                  id="signup-phone"
                  name="phone"
                  type="tel"
                  placeholder="(775) 351-6501"
                  value={formData.phone}
                  onChange={onInputChange}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-white/50 focus:ring-white/30 h-9 rounded-l-none backdrop-blur-sm text-sm"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full h-9 bg-white text-black hover:bg-white/90 font-medium text-xs transition-all duration-200 shadow-lg"
            >
              Create an account
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
                  OR SIGN UP WITH
                </span>
              </div>
            </div>

            {/* Social Login Buttons */}
            <SocialLoginButtons
              onGoogleLogin={onGoogleLogin}
              isGoogleLoading={isGoogleLoading}
            />

            {/* Terms */}
            <p className="text-xs text-white/70 text-center leading-relaxed drop-shadow-sm">
              By creating an account, you agree to our{" "}
              <button className="text-white/90 hover:text-white underline">
                Terms & Service
              </button>
            </p>
          </form>
        </CardContent>
      </div>
    </Card>
  );
}
