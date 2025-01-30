import React from 'react'

const page = () => {
  return (
    <>

        <section className="absolute top-[94] w-full" style={{top:"94px"}}>
            <div className="container mt-10 mx-auto px-6">
                <div className="grid md:grid-cols-12 gap-8">
                    <div className="w-full md:col-span-12">
                        <h1 className="text-3xl text-primary">Services</h1>
                        <p className="text-xl">Our services include Research and Development,Social Media Marketing and Content Marketing.</p>
                    </div>
                    <div className="w-full md:col-span-12">
                        <h1 className="text-3xl text-primary">Payment</h1>
                        <p className="text-xl">Client aagree to pay Fees as per our quote,without Payment we cannot start an order.</p>
                    </div>
                    <div className="w-full md:col-span-12">
                        <h1 className="text-3xl text-primary">Confidentiality</h1>
                        <p className="text-xl">Both parties will maintain the confidentiality of sensitive information.</p>
                    </div>
                    <div className="w-full md:col-span-12">
                        <h1 className="text-3xl text-primary">Liability</h1>
                        <p className="text-xl">We are not liable for unforeseen circumstance or losses.</p>
                    </div>
                    <div className="w-full md:col-span-12">
                        <h1 className="text-3xl text-primary">Refunds</h1>
                        <p className="text-xl">Client are eligible for a refund only when he we couldn't deliver on time.</p>
                    </div>
                    <div className="w-full md:col-span-12">
                        <h1 className="text-3xl text-primary">Dispute Resolution</h1>
                        <p className="text-xl">Clients are eligible for a refund only when he we couldn't deliver on time.</p>
                    </div>
                </div>
            </div>
            
        </section>
      
    </>
  )
}

export default page
