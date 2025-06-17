import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { X } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import AuthBackground from "./AuthBackground";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

export default function Login() {
  const {
    formData,
    isGoogleLoading,
    isMagicLinkLoading,
    handleInputChange,
    handleSubmit,
    handleGoogleLogin,
    handleMagicLinkLogin,
  } = useAuth();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <AuthBackground />

      {/* Close button */}
      {/* <button className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all duration-200">
        <X className="h-4 w-4" />
      </button> */}

      {/* Login Card */}
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
              <SignInForm
                formData={formData}
                onInputChange={handleInputChange}
                onSubmit={handleSubmit}
                onGoogleLogin={handleGoogleLogin}
                onMagicLinkLogin={handleMagicLinkLogin}
                isGoogleLoading={isGoogleLoading}
                isMagicLinkLoading={isMagicLinkLoading}
              />
            </TabsContent>

            {/* Sign Up Tab */}
            <TabsContent value="signup">
              <SignUpForm
                formData={formData}
                onInputChange={handleInputChange}
                onSubmit={handleSubmit}
                onGoogleLogin={handleGoogleLogin}
                onMagicLinkLogin={handleMagicLinkLogin}
                isGoogleLoading={isGoogleLoading}
                isMagicLinkLoading={isMagicLinkLoading}
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
