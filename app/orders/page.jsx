"use client"
import React from 'react'
import Orders from '@/components/Orders'

const page = () => {
  return (
    <>
    <section className="mt-12">

      <div className="container mx-auto">
        <h1 className="md:px-4 py-8">Orders</h1>
        <div className="grid md:grid-cols-12 lg:w-full gap-12">
          <Orders />
        </div>
      </div>
    </section>
    </>
  )
}

export default page
