// src/store/authStore.ts
import { create } from "zustand";
import { axiosInstance } from "../Component/lib/axios";
import type { AuthUser, AuthStore, SignupData } from "../types/auth.types"; // Make sure SignupData is defined
import { AxiosError } from "axios";

export const useAuthStore = create<AuthStore>((set) => ({
  authUser: null,
  isSignUp: false,
  isUpdatingProfile: false,
  isCheckingAuth: true,

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get<AuthUser>("/auth/check");
      set({ authUser: res.data });
    } catch (error) {
      console.error("Error in checkAuth", error);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  signup: async (data: SignupData) => {
    set({ isSignUp: true });
    try {
      const res = await axiosInstance.post<AuthUser>("/auth/signup", data);
      set({ authUser: res.data });
      return { success: true, user: res.data };
    } catch (error: unknown) {
      console.error("Error in signup", error);

      if (error instanceof AxiosError) {
        return {
          success: false,
          message: error.response?.data?.message || "Signup failed",
        };
      }

      return {
        success: false,
        message: "Signup failed",
      };
    }
  },
}));
