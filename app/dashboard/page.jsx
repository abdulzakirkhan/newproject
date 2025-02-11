"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Cards from "@/components/Cards";
import { motion } from 'framer-motion';
import { cardsData } from "../data";
import Link from "next/link";
const DashboardPage = () => {
  // const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // useEffect(() => {
  //   // Check login status (this can be a session check)
  //   const userLoggedIn = localStorage.getItem("isLoggedIn");
  //   if (!userLoggedIn) {
  //     // setIsLoggedIn(false)
  //     router.push("/dashboard")
  //   } else {
  //     router.push("/");
  //     // setIsLoggedIn(true);
  //   }
  // }, [router]);

  return (
    <section className={`mt-20`}>
        <div className="container mx-auto py-8">
          <motion.div
            className="lg:w-full flex flex-wrap justify-center sm:justify-between items-center"
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

            <div className="flex items-center wrap gap-2 lg:gap-20">
              {/* Add Order Button */}
              <motion.div
                className="w-[120] md:w-[219] flex justify-center items-center cursor-pointer w-h40 bg-primary rounded-md btnText text-white h-[40]"
                initial={{ opacity: 0, scale: 0.8 }}  // Starts smaller and transparent
                whileInView={{ opacity: 1, scale: 1 }}  // Fades in and scales to full size
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}  // Delay for staggered effect
              >
                <Link href={"/initiate-order"}>
                  Add Order
                </Link>
              </motion.div>

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


          <div className="grid md:grid-cols-12 gap-5 py-8">
            {/* Cards */}
            <Cards cardsData={cardsData} />
          </div>
         
        </div>
    </section>
  );
};

export default DashboardPage;
