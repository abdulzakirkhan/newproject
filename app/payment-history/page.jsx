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
    <section className="mt-20">
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



        <div className="container mx-auto md:px-6 mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {paymentHistory.map((payment, index) => (
                <motion.div
                  className="border-2 p-6 rounded-lg shadow-sm bg-white min-h-[180px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                  key={index}
                >
                  {/* Order ID & Price */}
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-sm text-gray-600">Order ID: <span className="font-semibold">{payment.orderId}</span></p>
                    <h2 className="font-bold text-lg">{payment.price}</h2>
                  </div>

                  {/* Payment Source */}
                  <p className="text-gray-700 text-sm mb-3">
                    Payment Source: <b>{payment.paySource}</b>
                  </p>

                  {/* Payment Method Section */}
                  <div className="bg-gray-100 p-4 rounded-lg space-y-2">
                    <h3 className="font-semibold text-gray-800">Wallet</h3>
                    <p className="text-sm">
                      Includes Reward Amount: <span className="font-semibold">{payment.includeRewards}</span>
                    </p>
                    <p className="text-sm">
                      Wallet Amount: <span className="font-semibold">{payment.walletAmount}</span>
                    </p>
                  </div>

                  {/* Debit or Credit Card Section */}
                  <div className="bg-gray-100 p-4 rounded-lg mt-4 space-y-2">
                    <h3 className="font-semibold text-gray-800">Debit or Credit Card</h3>
                    <p className="text-sm">
                      Includes Service Charges: <span className="font-semibold">0.00</span>
                    </p>
                    <p className="text-sm">
                      VAT: <span className="font-semibold">0.00</span>
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

        </div>

    </section>
      
    </>
  )
}

export default page
