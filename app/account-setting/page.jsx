"use client"
import { motion } from 'framer-motion'; // Import framer-motion
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
      <section className="absolute top-[94] w-full h-[87vh] bg-[#F5F7FA]">
        <div className="container mt-12 mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-4">
            {/* Card 1 - Personal Information */}
            <motion.div
              className="w-full md:col-span-4 bg-[#FFFFFF] shadow-2xl rounded-xl"
              initial={{ opacity: 0, x: -100 }} // Start off-screen
              animate={{ opacity: 1, x: 0 }} // Move to its final position
              transition={{ duration: 0.6, ease: 'easeOut' }} // Add smooth transition
            >
              <Link href="/profile-update">
                <div className="p-8">
                  <div className="flex justify-between items-center">
                    <p className='p1 text-grey'>Personal Information</p>
                    <div className="bg-[#E8E8FF] h-[80] w-[80] flex flex-col justify-center items-center rounded-xl">
                      <Image src={"/account/user.png"} width={50} height={40} alt="user information" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Card 2 - Update Password */}
            <motion.div
              className="w-full md:col-span-4 bg-[#FFFFFF] shadow-2xl rounded-xl"
              initial={{ opacity: 0, x: -100 }} // Start off-screen
              animate={{ opacity: 1, x: 0 }} // Move to its final position
              transition={{ duration: 0.8, ease: 'easeOut' }} // Add smooth transition
            >
              <Link href="/update-password">
                <div className="p-8">
                  <div className="flex justify-between items-center">
                    <p className='p1 text-grey'>Update Password</p>
                    <div className="bg-[#E8E8FF] h-[80] w-[80] flex flex-col justify-center items-center rounded-xl">
                      <Image src={"/account/key.png"} width={50} height={40} alt="user information" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Card 3 - Delete Account */}
            <motion.div
              className="w-full md:col-span-4 bg-[#FFFFFF] shadow-2xl rounded-xl"
              initial={{ opacity: 0, x: -100 }} // Start off-screen
              animate={{ opacity: 1, x: 0 }} // Move to its final position
              transition={{ duration: 1, ease: 'easeOut' }} // Add smooth transition
            >
              <Link href="https://www.hybridresearchcenter.com/profileupdate">
                <div className="p-8">
                  <div className="flex justify-between items-center">
                    <p className='p1 text-grey'>Delete Account</p>
                    <div className="bg-[#E8E8FF] h-[80] w-[80] flex flex-col justify-center items-center rounded-xl">
                      <Image src={"/account/bin.png"} width={50} height={40} alt="user information" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  )
}

export default page;
