"use client";

import { useEffect, useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/SideNav";
import Header from "@/components/Header";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Provider } from "react-redux";
import store from "@/redux/store";



export default function RootLayout({ children }) {
  // State hooks

  const [isCollapsed, setIsCollapsed] = useState(false);
  

  // Logout handler
  const handleLogout = () => {
  };
  
  // useEffect(() => {
  //   const token = localStorage.getItem("authToken");
  //   setIsAuth(!!token);
  // }, []);

  // useEffect(() => {
  //   if (isAuth) {
  //     router.push("/dashboard");
  //     }
  // }, [])
  

  return (
    <html lang="en">
      <body >
        <Provider store={store}>
          
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
          </Provider>
      </body>
    </html>
  );
}