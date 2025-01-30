"use client"

import React from 'react'
import { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'; // For validation
import { motion } from 'framer-motion';
import { paymentHistory } from '../data';
const page = () => {
    const [showFilters, setShowFilters] = useState(false);

    const validationSchema = Yup.object({
        searchId: Yup.string().required('Search ID is required'),
        startDate: Yup.date().required('Start Date is required'),
        endDate: Yup.date()
          .required('End Date is required')
          .min(Yup.ref('startDate'), 'End Date must be later than Start Date'),
      });
    
  return (
    <>
    <section className="absolute w-full top-[94] py-8">
        <div className="container mx-auto px-6">
            <h1 className=" text-center py-3 md:py-0 md:text-start">Payment History</h1>

            <div className="grid grid-cols-12">
              <div className="w-full flex justify-center md:justify-end col-span-12">
                <button
                  className="bg-[#312E81] text-white text-btnText w-[219px] h-[40px] rounded-lg"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  {showFilters ? 'Hide Filters' : 'Show Filters'}
                </button>
              </div>
            </div>

            {/* Filter Form */}
            {showFilters && (
              <div className="mt-4">
                <Formik
                  initialValues={{
                    searchId: '',
                    startDate: '',
                    endDate: '',
                  }}
                  validationSchema={validationSchema}
                  onSubmit={(values) => {
                    console.log(values);
                    // handle form submission logic here
                  }}
                >
                  <div className="px-0">

                  <Form className="space-y-4 grid md:grid-cols-9 justify-center gap-10">
                    {/* Search ID */}
                    <div className="w-full md:col-span-2 mt-4">
                      <label htmlFor="searchId" className="block text-sm font-semibold">
                        Search ID
                      </label>
                      <Field
                        type="text"
                        id="searchId"
                        name="searchId"
                        className="mt-1 p-2 border rounded-md w-full"
                      />
                      <ErrorMessage
                        name="searchId"
                        component="div"
                        className="text-red-600 text-xs"
                      />
                    </div>

                    {/* Start Date */}
                    <div className="w-full md:col-span-2">
                      <label htmlFor="startDate" className="block text-sm font-semibold">
                        Start Date
                      </label>
                      <Field
                        type="date"
                        id="startDate"
                        name="startDate"
                        className="mt-1 p-2 border rounded-md w-full"
                      />
                      <ErrorMessage
                        name="startDate"
                        component="div"
                        className="text-red-600 text-xs"
                      />
                    </div>

                    {/* End Date */}
                    <div className="w-full md:col-span-2">
                      <label htmlFor="endDate" className="block text-sm font-semibold">
                        End Date
                      </label>
                      <Field
                        type="date"
                        id="endDate"
                        name="endDate"
                        className="mt-1 p-2 border rounded-md w-full"
                      />
                      <ErrorMessage
                        name="endDate"
                        component="div"
                        className="text-red-600 text-xs"
                      />
                    </div>

                    {/* Submit Button */}
                    {/* <div className="flex justify-end mt-4">
                      <button
                        type="submit"
                        className="bg-[#312E81] text-white text-btnText w-[219px] h-[40px] rounded-lg"
                      >
                        Apply Filters
                      </button>
                    </div> */}
                  </Form>
                  </div>
                </Formik>
              </div>
            )}
        </div>



        <div className="container mx-auto px-6 mt-10">
            <div className="grid md:grid-cols-12 gap-4">

                {paymentHistory.map((payment,index) => (

                    <motion.div
                        className="w-full md:col-span-4 border-2 p-5 rounded-lg"
                        initial={{ opacity: 0, y: 20 }} // Initial state of the component (invisible and slightly below)
                        animate={{ opacity: 1, y: 0 }}   // Final state (visible and in its normal position)
                        exit={{ opacity: 0, y: 20 }}     // When exiting, it'll slide down and fade out
                        transition={{ duration: 0.5 }} 
                        key={index}  // Duration of the animation
                        >
                        <div className="flex justify-between items-center">
                            <p className="p1">Order Id: {payment.orderId}</p>
                            <h2>{payment.price}</h2>
                        </div>

                        <div className="">
                            <p>
                            Payment Source: <b>{payment.paySource}</b>
                            </p>
                        </div>

                        <div className="py-3">
                            <h2>Payment Method:</h2>
                        </div>

                        {/* Wallet Section with Hover animation */}
                        <motion.div
                            className="bg-[#E8EBEB] px-6 py-7 rounded-lg mt-5"
                            initial={{ opacity: 0, y: 10 }} // Start slightly below and invisible
                            animate={{ opacity: 1, y: 0 }}   // Final state: visible and normal position
                            whileHover={{ scale: 1.05 }}      // Slightly scale up on hover
                            transition={{ duration: 0.5 }}    // Duration of animation
                        >
                            <h2>Wallet</h2>
                            <p>
                            <span>Includes Reward Amount:</span>{payment.includeRewards}
                            </p>
                            <span>& Wallet Amount</span>
                            <br />
                            <span>{payment.walletAmount}</span>

                            <div className="flex justify-end">
                            <span>
                                <b>0</b>
                            </span>
                            </div>
                        </motion.div>

                        {/* Debit or Credit Card Section with Hover animation */}
                        <motion.div
                            className="bg-[#E8EBEB] px-6 py-7 rounded-lg mt-5"
                            initial={{ opacity: 0, y: 10 }} // Start slightly below and invisible
                            animate={{ opacity: 1, y: 0 }}   // Final state: visible and normal position
                            whileHover={{ scale: 1.05 }}      // Slightly scale up on hover
                            transition={{ duration: 0.5 }}    // Duration of animation
                        >
                            <h2>Debit or Credit Card</h2>
                            <p>
                            <span>Includes Service Charges: </span>0.00
                            </p>
                            <span>& VAT:</span>
                            <span>0.00</span>

                            <div className="flex justify-end">
                            <span>
                                <b>0</b>
                            </span>
                            </div>
                        </motion.div>
                    </motion.div>
                ))}

            
            </div>
        </div>

    </section>
      
    </>
  )
}

export default page
