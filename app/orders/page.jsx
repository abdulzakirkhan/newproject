"use client"
import React from 'react'
import Orders from '@/components/Orders'

const page = () => {
  return (
    <>
    <section className=" w-full absolute top-[94]">

      <div className="container mx-auto md:px-6">
        <h1 className="px-4 py-8">Orders</h1>
        <div className="grid px-2 md:grid-cols-12 gap-1 lg:gap-4 lg:w-full">
          <Orders />
        </div>
      </div>
    </section>
    </>
  )
}

export default page
