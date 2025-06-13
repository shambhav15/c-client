import { useState } from "react";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { X, Loader2 } from "lucide-react";
import { signIn } from "@/lib/auth-client";

export default function Login() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleGoogleLogin = async () => {
    if (isGoogleLoading) return;

    setIsGoogleLoading(true);
    try {
      const response = await signIn();
      console.log("res:", response);
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsGoogleLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Video with better fallback */}
      <div className="absolute inset-0 z-0">
        {/* Immediate background fallback */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900"></div>

        {/* Video layer */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            console.log("Video failed to load");
            e.currentTarget.style.display = "none";
          }}
        >
          <source src="/assets/videos/background.mp4" type="video/mp4" />
        </video>

        {/* Enhanced blur overlay - with better opacity */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md z-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-pink-900/30 z-20" />

        {/* Bottom to top gradient overlay - darker to bright */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent z-25" />
      </div>

      {/* Close button */}
      <button className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all duration-200">
        <X className="h-4 w-4" />
      </button>

      {/* Login Card - Fixed z-index and visibility */}
      <div className="relative z-30 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-sm">
          <Tabs defaultValue="signin" className="w-full">
            {/* Custom styled tabs list */}
            <TabsList className="grid w-full grid-cols-2 mb-6 bg-white/20 backdrop-blur-sm border border-white/30 shadow-lg">
              <TabsTrigger
                value="signin"
                className="text-xs font-medium data-[state=active]:bg-white! data-[state=active]:text-black! data-[state=active]:shadow-lg text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                Sign in
              </TabsTrigger>
              <TabsTrigger
                value="signup"
                className="text-xs font-medium data-[state=active]:bg-white! data-[state=active]:text-black! data-[state=active]:shadow-lg text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                Sign up
              </TabsTrigger>
            </TabsList>

            {/* Sign In Tab */}
            <TabsContent value="signin">
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
                    <form onSubmit={handleSubmit} className="space-y-4">
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
                          onChange={handleInputChange}
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
                          onChange={handleInputChange}
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
                      <div className="grid grid-cols-2 gap-3">
                        <Button
                          type="button"
                          variant="outline"
                          className="h-9 bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm text-xs"
                          onClick={handleGoogleLogin}
                          disabled={isGoogleLoading}
                        >
                          {isGoogleLoading ? (
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          ) : (
                            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                              <path
                                fill="currentColor"
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                              />
                              <path
                                fill="currentColor"
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                              />
                              <path
                                fill="currentColor"
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                              />
                              <path
                                fill="currentColor"
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                              />
                            </svg>
                          )}
                          {isGoogleLoading ? "Signing in..." : "Google"}
                        </Button>

                        {/* <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          
          <ChatUi />
          <Button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center gap-2 w-full max-w-sm mx-auto bg-white text-gray-800 border border-gray-300 hover:bg-gray-50 px-4 py-2 rounded-lg shadow-sm"
          >
            Sign in with Google
          </Button>
        </div> */}
                        <Button
                          type="button"
                          variant="outline"
                          className="h-9 bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm text-xs"
                        >
                          <svg
                            className="w-4 h-4 mr-2"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                          </svg>
                          Apple
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </div>
              </Card>
            </TabsContent>

            {/* Sign Up Tab */}
            <TabsContent value="signup">
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
                    <form onSubmit={handleSubmit} className="space-y-4">
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
                            onChange={handleInputChange}
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
                            onChange={handleInputChange}
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
                          onChange={handleInputChange}
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
                            onChange={handleInputChange}
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
                      <div className="grid grid-cols-2 gap-3">
                        <Button
                          type="button"
                          variant="outline"
                          className="h-9 bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm text-xs"
                          onClick={handleGoogleLogin}
                          disabled={isGoogleLoading}
                        >
                          {isGoogleLoading ? (
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          ) : (
                            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                              <path
                                fill="currentColor"
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                              />
                              <path
                                fill="currentColor"
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                              />
                              <path
                                fill="currentColor"
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                              />
                              <path
                                fill="currentColor"
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                              />
                            </svg>
                          )}
                          {isGoogleLoading ? "Signing in..." : "Google"}
                        </Button>
                        <Button
                          type="button"
                          variant="outline"
                          className="h-9 bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm text-xs"
                        >
                          <svg
                            className="w-4 h-4 mr-2"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                          </svg>
                          Apple
                        </Button>
                      </div>

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
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
