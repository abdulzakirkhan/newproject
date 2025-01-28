"use client"


import React, { useState } from 'react';
import { ordersData } from '../../data'
import Image from 'next/image';
import Link from 'next/link';
const OrderDetail = ({ params }) => {
    const { orderId } =  React.use(params);  // Acc
    const order = ordersData.find((o) => o.id === parseInt(orderId));
    
  
  const [islive, setIslive] = useState(true)
  const [liv, setLiv] = useState(true)
  
  return (
    <>
    <section className={` lg:px-28 py-10 w-[320] md:w-full lg:w-[97vw] justify-center items-center`}>
      <div className="container mx-auto px-6">
        <div className="grid wrap md:grid-cols-12 gap-5">
          <div className="w-[320] md:w-full md:col-span-8 shadow-custom rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
            <div className="bg-no-repeat bg-center w-[330] md:w-full bg-cover  flex justify-center items-center rounded-tl-2xl rounded-tr-2xl" style={{backgroundImage:`url(${order.status ==="paid" ? "/orders/banner.svg" : order.status === "remaining" ? "/orders/yellobanner.svg" :"/orders/red.svg"})`}}>
                <div className="grid md:grid-cols-12 justify-between items-center">
                  {
                    order.status === "paid" || order.status === "remaining" ?
                    <>
                    <div className="w-full md:col-span-6 mt-5 md:mt-0">
                      <h2>Completed</h2>
                      <p className="fs-25">Your Order has been Completed!</p>
                    </div>
                    <div className="w-full md:col-span-6 flex justify-end">
                      {/* progressbarr */}

                      <div className="relative size-36 md:size-60">
                          <svg className="size-full -rotate-90" viewBox="2 0 37 37" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="21" cy="22" r="13" fill="none" className="stroke-current text-grey dark:text-neutral-700" strokeWidth="2.7"></circle>
                              <circle cx="21" cy="22" r="13" fill="none" className={`stroke-current ${order.status=== "paid" ? "text-[#3BB537]": order.status === "remaining" ? "text-yellow" : order.status === "unpaid" ? "text-grey" : "" } dark:text-blue-500`} strokeWidth="2.7" strokeDasharray="100" strokeDashoffset={order.remaining} strokeLinecap="round"></circle>
                          </svg>

                          <div className="absolute top-1/2 right-0 md:right-10 transform -translate-y-1/2 -translate-x-1/2">
                              <span className="text-center text-2xl font-bold text-black dark:text-blue-500">{order.success}%</span>
                          </div>
                      </div>
                    </div>
                    </>
                  : <p className="w-full md:col-span-12 flex gap-2">
                    <span>Note:</span>
                     Please complete the payment to proceed with your order. Work on your order will only begin once the payment is confirmed.</p>
                  }
                </div>
              {/* <div className="container px-10 py-6 mx-auto">
              </div> */}
            </div>
            {islive && (
            <div className="container mx-auto mt-2">
              <div className="bg-primary  w-[330] md:w-full p-3">
                <p className="text-white text-center">Meeting Scheduled on 18/09 at 9:00 - 10:00pm</p>
              </div>
            </div>
            )}

            <div className="flex wrap w-[330] md:w-full lg:flex-nowrap px-3 justify-between items-start py-3">
              <div className="flex p3 items-center gap-3">
                <span className="font-bold">Order ID:</span> <span className="font-semibold">{order.orderId}</span>
              </div>
              <div className="flex wrap items-center gap-5">
                <div className="flex p3 items-center gap-3">
                    <span>Order placed:</span> <span>{order.orderPlace}</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="p2">Deadline:</span>
                    <span className='p3'>30/12/2024</span>
                </div>
              </div>
            </div>

            <div className="flex w-[320] md:w-full wrap flex-col gap-4 mt-5 px-3 pb-6">
              <div className="flex wrap  items-center gap-2">
                  <span className='fs-18'>Topic:</span>
                  <p className="p3 wrap w-1/2">{order.topic}</p>
              </div>
              <div className="flex wrap w-[320] md:w-full gap-10 items-center">
                  <div className="flex items-center gap-2">
                      <span className='fs-18'>Paper Type:</span>
                      <p className="p3">{order.paperType}</p>
                  </div>
                  <div className="flex items-center gap-2">
                      <span className='fs-18'>Level:</span>
                      <p className="p3">{order.level}</p>
                  </div>
                  <div className="flex items-center gap-2">
                      <span className='fs-18'>Category:</span>
                      <p className="p3">{order.category}</p>
                  </div>
                  <div className="flex items-center gap-2">
                      <span className='fs-18'>Pages:</span>
                      <p className="p3">{order.pages}</p>
                  </div>
              </div>

              <div className="flex w-[320] md:w-full wrap flex-col gap-4">
                <p className="custp">Description:</p>
                <p className="">Lorem ipsum dolor sit amet consectetur. Vestibulum morbi tempor nunc id. Non diam feugiat neque tortor malesuada purus sit ipsum. Nec lobortis sit euismod sagittis bibendum senectus habitasse ut. Nec urna quam magna non mauris morbi.</p>
                {/* <div className="w-full h-[2] bg-[#0000004D]"></div> */}
              </div>
              <div className="flex justify-between items-center mt-5">
                <div className="flex wrap gap-3 items-center">
                    {order.status === "paid" ?
                    <div className="">
                    <button className="btnTex bg-primary flex justify-center rounded-md gap-4 text-white items-center w-219 w-[219] h-[40]">
                      <Image src={"/orders/download.svg"} width={12} height={12} alt="download" />
                      Download File
                    </button>
                  </div>:""
                    
                  }
                    {order.status==="paid" ? 
                    <button className="btnText mx-2 text-white bg-primary flex justify-center items-center gap-3 rounded-md w-[219] h-[40]">
                      <Image src={"/orders/meeting.svg"} width={13} height={16} alt="" />
                      Schedule Meeting
                    </button>
                    : 
                    <Link href={`/orders/${order.id}/proceed-payment`}>
                      <p className="btnText text-white flex justify-center items-center bg-primary rounded-md w-[219] h-[40]">
                        Proceed to Pay
                      </p>
                    </Link>
                    }
                </div>
                
              </div>
            </div>
            
          </div>

          <div className="w-[320] md:w-full md:col-span-4">
             <div className="wrap">
                <h1 className="font-normal">Payements Details</h1>
                  <div className="flex wrap flex-col items-center gap-3 mt-5">
                    <div className="flex wrap w-[320] md:w-full justify-between items-center">
                      <h3>Total price:</h3>
                      <span>{order.totalPrice}</span>
                    </div>
                    <div className="flex wrap justify-between items-center w-full">
                      <h3>Status:</h3>
                      <span>{order.status}</span>
                    </div>
                    <div className="flex wrap justify-between items-center w-full">
                      <h3>Payement Method:</h3>
                      <span>Debit Card</span>
                    </div>
                  </div>
              </div>
            {order.status === "paid" ?
                <div className="py-4 w-[320] md:w-full mt-4 flex justify-between items-start">
                  <div className="flex  gap-3">
                    <button className="text-white btnText rounded-md w-[111] w-111 h-[40] bg-green">Marks</button>
                    <button className="text-white btnText rounded-md w-[190] w-190 h-[40] bg-orange">Tip your writer</button>
                  </div>
              </div> 
            : ""
            }
            <div className="w-[320] md:w-full wrap h-[2] bg-grey rounded-lg mt-4"></div>
            <h1 className="mt-20">Join Live</h1>
            <div className="w-full hover:scale-105 transition-all duration-300 ease-in-out flex flex-col justify-center items-center h-200 h-[200] bg-[#A3DCA1] mt-2 rounded-lg">
              { liv && (
                <button className="btn-group-button">
                  <Image src="/orders/btnGroup.svg" width={90} height={90} alt="Button Group Image" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default OrderDetail
