import { useState } from "react";
import { signIn, signInWithMagicLink } from "@/lib/auth-client";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
}

export function useAuth() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [isMagicLinkLoading, setIsMagicLinkLoading] = useState(false);

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

  const handleMagicLinkLogin = async () => {
    if (isMagicLinkLoading || !formData.email) return;

    setIsMagicLinkLoading(true);
    try {
      const response = await signInWithMagicLink(formData.email);
      console.log("res:", response);
    } catch (error) {
      console.error("Magic link error:", error);
    } finally {
      setIsMagicLinkLoading(false);
    }
  };

  return {
    formData,
    isGoogleLoading,
    isMagicLinkLoading,
    handleInputChange,
    handleSubmit,
    handleGoogleLogin,
    handleMagicLinkLogin,
  };
}
