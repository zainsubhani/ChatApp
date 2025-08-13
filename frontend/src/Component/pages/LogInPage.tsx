import React, { useState } from "react";
import { useAuthStore } from "../../store/useAuthStore";

const LoginPage: React.FC = () => {
  const { authUser } = useAuthStore();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = () => {
    console.log("Login submitted:", { ...formData, rememberMe });
  };

  return (
    <div className="min-h-screen bg-base-300 flex flex-col lg:flex-row">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-sm sm:max-w-md">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-orange-500 rounded flex items-center justify-center">
                <span className="text-white text-xs sm:text-sm font-bold">
                  💬
                </span>
              </div>
              <span className="text-orange-500 font-semibold text-sm sm:text-base">
                Chatty
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
              /login
            </h1>
          </div>

          {/* Login Card */}
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body p-4 sm:p-6 lg:p-8">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-orange-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs">🔐</span>
                </div>
                <h2 className="card-title text-lg sm:text-xl">Welcome Back</h2>
              </div>

              <p className="text-base-content/70 mb-4 sm:mb-6 text-sm sm:text-base">
                Sign in to your account
              </p>

              <div>
                {/* Email */}
                <div className="form-control mb-3 sm:mb-4">
                  <label className="label">
                    <span className="label-text text-sm sm:text-base">
                      Email
                    </span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      className="input input-bordered w-full bg-base-300 pl-8 sm:pl-10 text-sm sm:text-base h-10 sm:h-12"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    <div className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2">
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 text-base-content/50"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Password */}
                <div className="form-control mb-3 sm:mb-4">
                  <div className="flex justify-between items-center mb-1">
                    <label className="label">
                      <span className="label-text text-sm sm:text-base">
                        Password
                      </span>
                    </label>
                    <a
                      href="#"
                      className="link link-primary text-orange-500 text-xs sm:text-sm hover:text-orange-400"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="••••••••"
                      className="input input-bordered w-full bg-base-300 pl-8 sm:pl-10 pr-8 sm:pr-10 text-sm sm:text-base h-10 sm:h-12"
                      value={formData.password}
                      onChange={handleInputChange}
                    />
                    <div className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2">
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 text-base-content/50"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <button
                      type="button"
                      className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 text-base-content/50"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        {showPassword ? (
                          <path
                            fillRule="evenodd"
                            d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                            clipRule="evenodd"
                          />
                        ) : (
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        )}
                        <path
                          fillRule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Remember Me Checkbox */}
                <div className="form-control mb-4 sm:mb-6">
                  <label className="cursor-pointer label justify-start gap-2 sm:gap-3">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="checkbox checkbox-primary checkbox-sm sm:checkbox-md bg-base-300 border-base-content/20"
                    />
                    <span className="label-text text-sm sm:text-base">
                      Remember me
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="btn btn-primary w-full bg-orange-500 hover:bg-orange-600 border-orange-500 hover:border-orange-600 h-10 sm:h-12 text-sm sm:text-base mb-4"
                >
                  Sign In
                </button>

                {/* Divider */}
                <div className="divider text-xs sm:text-sm">OR</div>

                {/* Social Login Buttons */}
                <div className="space-y-2 sm:space-y-3 mb-4">
                  <button className="btn btn-outline w-full h-10 sm:h-12 text-sm sm:text-base">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
                      viewBox="0 0 24 24"
                    >
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
                    Continue with Google
                  </button>
                  <button className="btn btn-outline w-full h-10 sm:h-12 text-sm sm:text-base">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                    Continue with Twitter
                  </button>
                </div>
              </div>

              {/* Sign Up Link */}
              <div className="text-center mt-3 sm:mt-4">
                <span className="text-base-content/70 text-sm sm:text-base">
                  Don't have an account?{" "}
                </span>
                <a
                  href="#"
                  className="link link-primary text-orange-500 text-sm sm:text-base"
                >
                  Sign up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Welcome Section */}
      <div className="hidden lg:flex flex-1 bg-base-100 items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-xs xl:max-w-lg">
          {/* Settings Icon */}
          <div className="flex justify-end mb-4 lg:mb-6 xl:mb-8">
            <button className="btn btn-ghost btn-circle btn-sm lg:btn-md">
              <svg
                className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </button>
          </div>

          {/* Welcome Illustration */}
          <div className="flex justify-center mb-6 lg:mb-8 xl:mb-12">
            <div className="relative">
              {/* Main Circle */}
              <div className="w-32 h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-20 h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 bg-white rounded-full flex items-center justify-center">
                  <svg
                    className="w-10 h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 text-orange-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-2 -right-2 w-6 h-6 lg:w-8 lg:h-8 bg-blue-500 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 lg:w-6 lg:h-6 bg-green-500 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 -left-6 lg:-left-8 w-3 h-3 lg:w-4 lg:h-4 bg-purple-500 rounded-full animate-ping"></div>
            </div>
          </div>

          {/* Welcome Text */}
          <div className="text-center">
            <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-white mb-3 lg:mb-4">
              Welcome Back!
            </h3>
            <p className="text-xs lg:text-sm xl:text-base text-base-content/70 mb-6 lg:mb-8">
              Sign in to access your conversations, catch up with friends, and
              continue where you left off.
            </p>

            {/* Feature List */}
            <div className="space-y-2 lg:space-y-3 text-left">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 lg:w-6 lg:h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-2.5 h-2.5 lg:w-3 lg:h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-xs lg:text-sm text-base-content/80">
                  Access all your conversations
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 lg:w-6 lg:h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-2.5 h-2.5 lg:w-3 lg:h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-xs lg:text-sm text-base-content/80">
                  Sync across all devices
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 lg:w-6 lg:h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-2.5 h-2.5 lg:w-3 lg:h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-xs lg:text-sm text-base-content/80">
                  Stay connected with friends
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Welcome Section */}
      <div className="lg:hidden bg-base-100 p-4 sm:p-6">
        <div className="text-center">
          <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
            <svg
              className="w-8 h-8 sm:w-10 sm:h-10 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
            Welcome Back!
          </h3>
          <p className="text-sm sm:text-base text-base-content/70">
            Sign in to continue your conversations and stay connected.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
