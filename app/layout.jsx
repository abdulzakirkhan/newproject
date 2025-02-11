"use client";

import { useEffect, useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/SideNav";
import Header from "@/components/Header";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import { HiEye, HiEyeOff } from "react-icons/hi";
import Link from "next/link";
import { useRouter } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  // All hooks must be called unconditionally at the top level
  const [isAuth, setIsAuth] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false); // Moved to top level
  const router = useRouter();
  const [isSignUp, setIsSignUp] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsAuth(!!token);
  }, []);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    rememberMe: Yup.boolean(),
  });

  const handleLogin = async (values) => {
    setIsSubmitting(true);
    try {
      // Simulated API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      localStorage.setItem("authToken", "fake_jwt_token");
      setIsAuth(true);
      router.push("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsAuth(false);
    router.push("/");
  };

  // Render login form or main layout based on auth state
  return (
    <html lang="en">
      <body className={isAuth ? "antialiased" : ""}>
        {!isAuth ? (
          // Login Page
          <section className="bg-[#FFFFFF]">
          <div className="container mx-auto py-14">
            <div className="grid md:grid-cols-2 justify-center items-center">
              <div className="w-full animate-slowBounce">
                <Image src={"/login/login.svg"} width={600} height={589} alt="" />
              </div>
              <div className="w-full px-8 border-2 shadow-2xl rounded-xl py-12 flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                  <div className="bg-no-repeat bg-center w-[133] h-[133] flex justify-center items-center bg-cover" style={{backgroundImage:`url(/login/bg.svg)`}}>
                  <Image src={"/login/logo.svg"} width={107} height={107} alt="" />
                </div>
                <h1 className="text-primary py-8 text-center">Hybrid Research Center </h1>
    
                {/* Formik Form */}
                <Formik
                  initialValues={{ email: "", password: "", rememberMe: false }}
                  validationSchema={validationSchema}
                  onSubmit={handleLogin}
                >
                  {({ isSubmitting }) => (
                    <Form className="w-full">
                      {/* Email Field */}
                      <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                          Email
                        </label>
                        <Field
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Enter your email"
                          className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                      </div>
    
                      {/* Password Field */}
                      <div className="mb-4 relative">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                          Password
                        </label>
                        <Field
                          type={passwordVisible ? "text" : "password"} // Toggle password visibility
                          id="password"
                          name="password"
                          placeholder="Enter your password"
                          className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
    
                        {/* Eye Icon for Password */}
                        <button
                          type="button"
                          onClick={() => setPasswordVisible(!passwordVisible)} // Toggle visibility
                          className="absolute right-3 top-11 transform -translate-y-1/2 text-gray-500"
                        >
                          {passwordVisible ? (
                            <HiEyeOff size={24} />
                          ) : (
                            <HiEye size={24} />
                          )}
                        </button>
                      </div>

                      {isSignUp && (
                        <div className="mb-4 relative">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                          Confirm Password
                        </label>
                        <Field
                          type={passwordVisible ? "text" : "password"} // Toggle password visibility
                          id="confirmPassword"
                          name="confirmPassword"
                          placeholder="Enter your password"
                          className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm" />
    
                        {/* Eye Icon for Password */}
                        <button
                          type="button"
                          onClick={() => setConfirmPassword(!confirmPassword)} // Toggle visibility
                          className="absolute right-3 top-11 transform -translate-y-1/2 text-gray-500"
                        >
                          {passwordVisible ? (
                            <HiEyeOff size={24} />
                          ) : (
                            <HiEye size={24} />
                          )}
                        </button>
                      </div>
                      )}
    
                      {/* Remember Me Checkbox */}
                      <div className="mb-4 flex items-center">
                        <Field
                          type="checkbox"
                          id="rememberMe"
                          name="rememberMe"
                          className="h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-700">
                          Remember Me
                        </label>
                      </div>
    
                      {/* Submit Button */}
    
                        <div className="flex flex-col justify-center items-center py-10">
                          <button type="submit" disabled={isSubmitting} className="bg-primary w-[219] h-40 text-white px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                            {isSubmitting ? `${isSignUp ? "creating acoount..." :"Logging in..."}`: "Login"}
                          </button>
                        </div>
                        <div className="py-3 flex justify-between gap-4">
                          <p className="text-grey p3 text-center">Create New Account  <button onClick={setIsSignUp(!isSignUp)} className="text-primary font-bold md:ms-2" href={""}> Signup</button></p>
                          <p className="text-grey p3 text-center">Forgot Password ?</p>
                        </div>
                    </Form>
                  )}
                </Formik>
                </div>
              </div>
            </div>
          </div>
        </section>
        ) : (
          // Authenticated Layout
          <>
            <Header onLogout={handleLogout} />
            <div className="flex">
              <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
              <div
                className={`transition-all duration-300 px-2 md:p-6 w-full ${
                  isCollapsed ? "ml-10 lg:ml-16" : "lg:ml-52"
                }`}
              >
                {children}
              </div>
            </div>
          </>
        )}
      </body>
    </html>
  );
}