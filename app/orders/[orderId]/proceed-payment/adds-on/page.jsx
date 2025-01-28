"use client"

import MeetingForm from "@/components/MeetingForm"



const page = () => {
  
  return (
    <>
    <section className="px-0 lg:px-20 w-[95vw] border">

      <div className="container mx-auto flex flex-col justify-center py-8">

        <h1 className="px-1">Order Summary</h1>
        <div className="flex flex-col gap-5 p-8 mt-10 shadow-2xl rounded-lg border-2 shadow-gray-500/50">
          <div className="">
            <div className="flex justify-between items-center">
              <p className="p1">Payment  Method: </p>
              <p className="p1">Stripe</p>
            </div>
            <div className="w-full h-[1] rounded-lg bg-grey"></div>
          </div>
          <div className="">
            <div className="flex justify-between items-center">
              <p className="p1">Processing fee (4%): </p>
              <p className="p1">$4.00</p>
            </div>
            <div className="w-full h-[1] rounded-lg bg-grey"></div>
          </div>

          <div className="">
            <div className="flex justify-between items-center">
              <p className="p1">Price: </p>
              <p className="p1">$100</p>
            </div>
            <div className="w-full h-[1] rounded-lg bg-grey"></div>
          </div>

          <div className="">
            <div className="flex justify-between items-center">
              <p className="p1">VAT (5%): </p>
              <p className="p1">$5</p>
            </div>
            <div className="w-full h-[1] rounded-lg bg-grey"></div>
          </div>

          <div className="">
            <div className="flex justify-between items-center">
              <p className="p1">Wallet: </p>
              <p className="p1">-$50.00</p>
            </div>
            <div className="w-full h-[1] rounded-lg bg-grey"></div>
          </div>
          <div className="">
            <div className="flex justify-between items-center">
              <p className="p1">SubTotal: </p>
              <p className="p1">$59.00</p>
            </div>
            <div className="w-full h-[1] rounded-lg bg-grey"></div>
          </div>

          <div className="">
            <div className="flex justify-between items-center">
              <p className="p1 text-red">Discount: </p>
              <p className="p1 text-red">-$20.00</p>
            </div>
            <div className="w-full h-[1] rounded-lg bg-grey"></div>
          </div>
          <div className="">
            <div className="flex justify-between items-center">
              <p className="p1 text-green">Remaining amount: </p>
              <p className="p1 text-green">-$20.00</p>
            </div>
            <div className="w-full h-[1] rounded-lg bg-grey"></div>
          </div>

        </div>



        <div className="">
          <MeetingForm />
        </div>
      </div>
    </section>
    </>
  )
}

export default page
