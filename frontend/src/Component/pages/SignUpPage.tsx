import React, { useState } from "react";
import { useAuthStore } from "../../store/useAuthStore";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";

import {
  signUpSchema,
  type SignupFormValues,
} from "../../validation/signup.validation";
import toast from "react-hot-toast";
import type { SignupData } from "../../types/auth.types";
const SignupPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signUpSchema),
  });
  const { signup, isSignUp } = useAuthStore();
  const convertFileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };
  const onSubmit = async (data: SignupFormValues) => {
    let profilePicString: string | undefined;
    if (data.profilePic) {
      profilePicString = await convertFileToBase64(data.profilePic);
    }
    const signupData: SignupData = {
      ...data,
      profilePic: profilePicString, // now it's string | undefined
    };
    try {
      const result = await signup(signupData);
      if (!result.success) {
        toast.error(result.message ?? "Signup failed. Please try again.");
        return;
      }
      toast.success("Account created successfully!");
    } catch (error: unknown) {
      let message = "Something went wrong";

      // Check for Axios errors
      if (error instanceof AxiosError) {
        message = error.response?.data?.message ?? message;
      }
      // Check for normal JS Error
      else if (error instanceof Error) {
        message = error.message;
      }
      // Check if it's a string
      else if (typeof error === "string") {
        message = error;
      }

      toast.error(message);
    }
  };

  return (
    <div className="min-h-screen bg-base-300 flex flex-col lg:flex-row">
      <div className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-sm sm:max-w-md">
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
              /signup
            </h1>
          </div>

          <div className="card bg-base-200 shadow-xl">
            <div className="card-body p-4 sm:p-6 lg:p-8">
              <h2 className="card-title text-lg sm:text-xl mb-4">
                Create Account
              </h2>

              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Full Name */}
                <div className="form-control mb-3 sm:mb-4">
                  <label className="label">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    {...register("fullName")}
                    className="input input-bordered w-full bg-base-300"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="form-control mb-3 sm:mb-4">
                  <label className="label">Email</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    {...register("email")}
                    className="input input-bordered w-full bg-base-300"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Password */}
                <div className="form-control mb-4 sm:mb-6">
                  <label className="label">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      {...register("password")}
                      className="input input-bordered w-full bg-base-300 pr-10"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? "🙈" : "👁️"}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-red-500 text-sm">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSignUp}
                  className="btn btn-primary w-full bg-orange-500 hover:bg-orange-600 border-orange-500 hover:border-orange-600"
                >
                  {isSignUp ? "Creating..." : "Create Account"}
                </button>
              </form>

              <div className="text-center mt-3 sm:mt-4">
                <span className="text-base-content/70 text-sm sm:text-base">
                  Already have an account?{" "}
                </span>
                <a href="#" className="link link-primary text-orange-500">
                  Sign in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side could stay as is */}
    </div>
  );
};

export default SignupPage;
