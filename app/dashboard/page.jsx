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
  const [showFilter, setShowFilter] = useState(false)
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

            <div className="flex items-center wrap gap-4 mt-4 mb-2 lg:gap-12">
              {/* Add Order Button */}
              <motion.div
                className="w-219 flex justify-center items-center cursor-pointer w-h40 bg-primary hover:bg-primary-dark transition-colors rounded-md btnText text-white h-[40]"
                initial={{ opacity: 0, scale: 0.8 }}  // Starts smaller and transparent
                whileInView={{ opacity: 1, scale: 1 }}  // Fades in and scales to full size
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}  // Delay for staggered effect
              >
                <Link href={"/initiate-order"}>
                  Add Order
                </Link>
              </motion.div>

              {/* Filter Button */}
              <div className="relative">
                <motion.button onClick={() => setShowFilter(true)}
                  className="bg-orange w-219 btnText text-white rounded-md w-h104 w-[104] hover:bg-primary-dark transition-colors h-[40] flex justify-center items-center gap-2"
                  initial={{ opacity: 0, scale: 0.8 }}  // Starts smaller and transparent
                  whileInView={{ opacity: 1, scale: 1 }}  // Fades in and scales to full size
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}  // Delay for staggered effect
                >
                  <Image src={"/icons/home/filter.svg"} width={12} height={5} alt="" />
                  Filter
                </motion.button>
                {showFilter && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute left-0 mt-2 w-48 bg-white border-2 shadow-lg rounded-lg p-4"
                    >
                      <div className="flex items-start gap-3">
                        <span
                          onClick={() => setShowFilter(false)}
                          className="text-primary text-2xl -mt-1 -ms-3 cursor-pointer"
                        >
                            &lt;
                        </span>
                        <h3 className="text-center pb-2 border-b-2">Apply Filters</h3>
                      </div>
                      <div className="py-3 space-y-2">
                        <div className="flex justify-between items-center gap-2">
                          <label htmlFor="progress">Progress</label>
                          <input type="checkbox" id="progress" name="progress" />
                        </div>
                        <div className="flex justify-between items-center gap-2">
                          <label htmlFor="completed">Completed</label>
                          <input type="checkbox" id="completed" name="completed" />
                        </div>
                        <div className="flex justify-between items-center gap-2">
                          <label htmlFor="Paid">Paid</label>
                          <input type="checkbox" id="Paid" name="Paid" />
                        </div>
                        <div className="flex justify-between items-center gap-2">
                          <label htmlFor="Unpaid">Unpaid</label>
                          <input type="checkbox" id="Unpaid" name="Unpaid" />
                        </div>
                        <div className="flex justify-between items-center gap-2">
                          <label htmlFor="ppaid">Partially Paid</label>
                          <input type="checkbox" id="ppaid" name="ppaid" />
                        </div>
                      </div>
                    </motion.div>
                )}
              </div>
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
