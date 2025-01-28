"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const DashboardPage = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    // Check login status (this can be a session check)
    const userLoggedIn = localStorage.getItem("isLoggedIn");
    if (!userLoggedIn) {
      router.push("/login");
    } else {
      setIsLoggedIn(true);
    }
  }, [router]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {isLoggedIn ? (
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-bold mb-6">Welcome to the Dashboard</h2>
          <p>Here is your dashboard content!</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DashboardPage;
