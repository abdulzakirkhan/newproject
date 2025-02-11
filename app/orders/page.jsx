"use client"
import React from 'react'
import Orders from '@/components/Orders'

const page = () => {
  return (
    <>
    <section className="mt-12">

      <div className="container mx-auto">
        <h1 className="md:px-4 py-8">Orders</h1>
        <div className="grid md:grid-cols-12 gap-1 md:gap-6 lg:gap-8 lg:w-full">
          <Orders />
        </div>
      </div>
    </section>
    </>
  )
}

export default page
