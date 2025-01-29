"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Cards from "@/components/Cards";
import Orders from "@/components/Orders";
import { cardsData } from "./data";
import { motion } from 'framer-motion';
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
          <motion.div
            className="lg:w-full flex flex-wrap justify-between sm:justify-between items-center"
            initial={{ opacity: 0, y: 20 }}  // Starts with opacity 0 and a slight upward offset
            whileInView={{ opacity: 1, y: 0 }}  // Fades in and slides to the original position
            transition={{ duration: 0.8, ease: "easeOut" }}
            >
            {/* Header */}
            <motion.h2
              className="px-5 md:px-0"
              initial={{ opacity: 0, y: -20 }}  // Starts with opacity 0 and slight offset from above
              whileInView={{ opacity: 1, y: 0 }}  // Fades in and moves to the original position
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}  // Delay for staggered effect
            >
              My Orders
            </motion.h2>

            <div className="flex items-center flex-wrap gap-2 lg:gap-8">
              {/* Add Order Button */}
              <motion.button
                className="w-[120] md:w-[219] w-h40 bg-primary rounded-md btnText text-white h-[40]"
                initial={{ opacity: 0, scale: 0.8 }}  // Starts smaller and transparent
                whileInView={{ opacity: 1, scale: 1 }}  // Fades in and scales to full size
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}  // Delay for staggered effect
              >
                Add Order
              </motion.button>

              {/* Filter Button */}
              <motion.button
                className="bg-orange btnText text-white rounded-md w-h104 w-[104] h-[40] flex justify-center items-center gap-2"
                initial={{ opacity: 0, scale: 0.8 }}  // Starts smaller and transparent
                whileInView={{ opacity: 1, scale: 1 }}  // Fades in and scales to full size
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}  // Delay for staggered effect
              >
                <Image src={"/icons/home/filter.svg"} width={12} height={5} alt="" />
                Filter
              </motion.button>
            </div>
            </motion.div>


          <div className="flex flex-wrap gap-8 py-8">
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
