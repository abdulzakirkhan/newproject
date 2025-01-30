"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react'
import { FaInfoCircle } from 'react-icons/fa'; 
const page = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    // Function to open the modal
    const openModal = () => setIsModalOpen(true);
  
    // Function to close the modal
    const closeModal = () => setIsModalOpen(false);
  return (
    <>
        <section className="absolute top-[94] w-full">
            <div className="container mx-auto px-6 mt-8">
                <div className="grid md:grid-cols-12">
                    <div className="w-full md:col-span-12">
                        <div className="flex justify-end">
                        <button onClick={openModal} className="btnText bg-primary px-6 py-3 text-white rounded-lg">Top-Up Wallet</button>
                        </div>
                    </div>
                    <div className="w-full md:col-span-12">
                    {isModalOpen && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                        <motion.div
                            className="bg-white px-8 rounded-lg shadow-xl w-full max-w-lg"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Modal Content */}
                            <div className="flex justify-center items-center mb-4 py-2 relative">
                                <button onClick={closeModal} className="text-gray-500 absolute top-0 right-0 ">
                                    <span className="text-4xl">×</span>
                                </button>
                                <h2 className="text-xl font-semibold text-center">Top-Up Wallet</h2>
                            </div>
                            <div className="text-center p-3 flex flex-col justify-center items-center">
                                <h3>How do You want to top-up wallet?</h3>
                                <div className="flex justify-between items-center py-3 gap-3">
                                    <Link href={"/bank-transfer"} className="bg-primary text-white px-3 py-2 rounded-lg">With Bank Transfer</Link>
                                    <button className="bg-primary text-white px-3 py-2 rounded-lg">With Payment Gateway</button>
                                </div>
                            </div>
                        </motion.div>
                        </div>
                    )}
                    </div>
                </div>
                <div className="grid md:grid-cols-12 mt-10">
                    <div className="w-full md:col-span-5">
                        <div className="p-6 border-2 rounded-2xl shadow-xl">
                            <h1>Available Credit</h1>
                            <p className="p3 py-2">Rewards Amount: USD 0.05</p>
                            <p className="p3 py-2">Wallet Amount: USD 0.00</p>
                            <p>Total Credit (Rewards + Wallet): USD 0.05</p>
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-12 mt-10">
                    <div className="w-full md:col-span-12">
                        <div className="p-6 bg-[#d4d3e4] md:h-[240] flex justify-center items-center rounded-2xl shadow-xl">
                           <div className="flex gap-3 items-start">
                            <FaInfoCircle className="-mt-2" style={{fontSize:"45px"}} />
                            <p className="text-xl m-0"> With Bank Transfer Pay,You Will Receive The Wallet amount after a 4% deduction as a services fee, while with Payment Gateway, you will receive the wallet amount after a 24% deduction ,which includes a 4% service s fee and s 20% VAT.</p>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default page
