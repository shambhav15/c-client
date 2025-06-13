import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";

export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

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
          style={{
            animationDuration: "20s",
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            animationName: "slowMotion",
            filter: "contrast(1.1) brightness(0.8)",
          }}
          onError={(e) => {
            console.log("Video failed to load");
            e.currentTarget.style.display = "none";
          }}
          onLoadedData={(e) => {
            // Slow down the video playback rate
            e.currentTarget.playbackRate = 0.5;
          }}
        >
          <source
            src="/assets/videos/15439679-hd_1280_720_30fps.mp4"
            type="video/mp4"
          />
        </video>

        {/* Black to light gradient overlay from bottom to top */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-800/70 to-transparent z-10" />

        {/* Enhanced blur overlay - with better opacity */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-md z-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 z-30" />
      </div>

      {/* Close button */}
      <button className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all duration-200">
        <X className="h-4 w-4" />
      </button>

      {/* Login Card - Fixed z-index and visibility */}
      <div className="relative z-40 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-sm">
          {/* Tab Navigation */}
          <div className="flex mb-6 bg-white/20 backdrop-blur-sm rounded-lg p-1 border border-white/30 shadow-lg">
            <button
              onClick={() => setIsSignUp(false)}
              className={`flex-1 py-2 px-3 text-xs font-medium rounded-md transition-all duration-200 ${
                !isSignUp
                  ? "bg-white text-black shadow-lg"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              Sign in
            </button>
            <button
              onClick={() => setIsSignUp(true)}
              className={`flex-1 py-2 px-3 text-xs font-medium rounded-md transition-all duration-200 ${
                isSignUp
                  ? "bg-white text-black shadow-lg"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              Sign up
            </button>
          </div>

          {/* Login Form Card - Enhanced visibility */}
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-2xl">
            <div className="text-center mb-6">
              <h1 className="text-xl font-bold text-white mb-2 drop-shadow-sm">
                {isSignUp ? "Create an account" : "Welcome back"}
              </h1>
              <p className="text-white/80 text-xs">
                {isSignUp
                  ? "Fill in your details to get started"
                  : "Sign in to continue"}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Fields */}
              {isSignUp && (
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label
                      htmlFor="firstName"
                      className="text-white text-xs font-medium drop-shadow-sm"
                    >
                      First name
                    </Label>
                    <Input
                      id="firstName"
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
                      htmlFor="lastName"
                      className="text-white text-xs font-medium drop-shadow-sm"
                    >
                      Last name
                    </Label>
                    <Input
                      id="lastName"
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
              )}

              {/* Email */}
              <div>
                <Label
                  htmlFor="email"
                  className="text-white text-xs font-medium drop-shadow-sm"
                >
                  Email
                </Label>
                <Input
                  id="email"
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
              {isSignUp && (
                <div>
                  <Label
                    htmlFor="phone"
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
                      id="phone"
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
              )}

              {/* Password field for sign in */}
              {!isSignUp && (
                <div>
                  <Label
                    htmlFor="password"
                    className="text-white text-xs font-medium drop-shadow-sm"
                  >
                    Password
                  </Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    className="mt-1 bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-white/50 focus:ring-white/30 h-9 text-sm backdrop-blur-sm"
                    required
                  />
                </div>
              )}

              {/* Forgot password for sign in */}
              {!isSignUp && (
                <div className="text-right">
                  <button
                    type="button"
                    className="text-xs text-white/80 hover:text-white transition-colors drop-shadow-sm"
                  >
                    Forgot password?
                  </button>
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full h-9 bg-white text-black hover:bg-white/90 font-medium text-xs transition-all duration-200 shadow-lg"
              >
                {isSignUp ? "Create an account" : "Sign in"}
              </Button>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/30"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-transparent px-2 text-white/70 text-xs drop-shadow-sm">
                    OR SIGN {isSignUp ? "UP" : "IN"} WITH
                  </span>
                </div>
              </div>

              {/* Social Login Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <Button
                  type="button"
                  variant="outline"
                  className="h-9 bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm text-xs"
                >
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
                  Google
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
              {isSignUp && (
                <p className="text-xs text-white/70 text-center leading-relaxed drop-shadow-sm">
                  By creating an account, you agree to our{" "}
                  <button className="text-white/90 hover:text-white underline">
                    Terms & Service
                  </button>
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
