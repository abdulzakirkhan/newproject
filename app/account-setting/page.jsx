"use client"
import { motion } from 'framer-motion'; // Import framer-motion
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
const page = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <section className="mt-20">
        <div className="container mt-12 mx-auto md:px-6">
          <div className="grid md:grid-cols-12 gap-4">
            {/* Card 1 - Personal Information */}
            <motion.div
              className="w-full md:col-span-4 bg-[#FFFFFF] shadowCustomClass rounded-xl"

              initial={{ opacity: 0, x: -100 }} // Start off-screen
              animate={{ opacity: 1, x: 0 }} // Move to its final position
              transition={{ duration: 0.6, ease: 'easeOut' }} // Add smooth transition
            >
              <Link href="/profile-update">
                <div className="p-8">
                  <div className="flex justify-between items-center">
                    <p className='p1 text-grey'>Personal Information</p>
                    <div className="bg-[#E8E8FF] h-[80] w-[80] flex flex-col justify-center items-center rounded-xl" style={{width:"80px",height:"80px"}}>
                      <Image src={"/account/user.png"} width={50} height={40} alt="user information" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Card 2 - Update Password */}
            <motion.div
              className="w-full md:col-span-4 bg-[#FFFFFF] shadowCustomClass rounded-xl"
              initial={{ opacity: 0, x: -100 }} // Start off-screen
              animate={{ opacity: 1, x: 0 }} // Move to its final position
              transition={{ duration: 0.8, ease: 'easeOut' }} // Add smooth transition
            >
              <Link href="/update-password">
                <div className="p-8">
                  <div className="flex justify-between items-center">
                    <p className='p1 text-grey'>Update Password</p>
                    <div className="bg-[#FFF1DB] h-[80] w-[80] flex flex-col justify-center items-center rounded-xl" style={{width:"80px",height:"80px"}}>
                      <Image src={"/account/key.png"} width={50} height={40} alt="user information" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Card 3 - Delete Account */}
            <motion.div
              className="w-full md:col-span-4 bg-[#FFFFFF] shadowCustomClass rounded-xl"
              initial={{ opacity: 0, x: -100 }} // Start off-screen
              animate={{ opacity: 1, x: 0 }} // Move to its final position
              transition={{ duration: 1, ease: 'easeOut' }} // Add smooth transition
            >
              <Link href="" onClick={() => setShowModal(!showModal)}>
                <div className="p-8">
                  <div className="flex justify-between items-center">
                    <p className='p1 text-grey'>Delete Account</p>
                    <div className="bg-[#FFDCDC] h-[80] w-[80] flex flex-col justify-center items-center rounded-xl" style={{width:"80px",height:"80px"}}>
                      {/* <Image src={"/account/bin_red.png"} width={50} height={40} alt="user information" /> */}
                      <MdDelete  size={55} className='text-red' />
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
