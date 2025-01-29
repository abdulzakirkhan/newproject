"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Cards from "@/components/Cards";
import Orders from "@/components/Orders";
import { cardsData } from "./data";

const DashboardPage = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    // Check login status (this can be a session check)
    const userLoggedIn = localStorage.getItem("isLoggedIn");
    if (!userLoggedIn) {
      // setIsLoggedIn(false)
      router.push("/")
    } else {
      router.push("/");
      // setIsLoggedIn(true);
    }
  }, [router]);

  return (
    <section className={`${isLoggedIn? "lg:px-28":"px-0"} block justify-center items-center`}>
      {isLoggedIn ? (
        <div className="container mx-auto py-8">
          <div className="lg:w-full flex  flex-wrap justify-between sm:justify-between items-center">
            <h2 className="px-5 md:px-0">My Orders</h2>
            <div className="flex items-center flex-wrap gap-2 lg:gap-8">
              <button className="w-[120] md:w-[219] w-h40 bg-primary rounded-md btnText text-white h-[40]">Add Order</button>
              <button className="bg-orange btnText text-white rounded-md w-h104 w-[104] h-[40] flex justify-center items-center gap-2">
                <Image src={"/icons/home/filter.svg"} width={12} height={5} alt="" />
                Filter
              </button>
            </div>
          </div>


          <div className="flex flex-wrap gap-8 py-6">
            {/* Cards */}
            <Cards cardsData={cardsData} />
          </div>
          <div className="grid px-2 md:grid-cols-12 gap-1 lg:gap-4 lg:w-full">

            <Orders />
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
};

export default DashboardPage;
