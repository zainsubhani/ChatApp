// src/types/auth.types.ts

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  // add other fields returned by your API
}
export interface SignupData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  profilePic?: File | null | string; // ✅ allow File or null
}
export interface AuthStore {
  authUser: AuthUser | null;
  isSignUp: boolean;
  isUpdatingProfile: boolean;
  isCheckingAuth: boolean;
  checkAuth: () => Promise<void>;
  signup: (
    data: SignupData
  ) => Promise<{ success: boolean; user?: AuthUser; message?: string }>;
}
