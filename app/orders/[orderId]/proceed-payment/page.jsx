"use client";

import React, { useState } from 'react';
import CheckBoxs from '@/components/CheckBoxs';
import Image from 'next/image';

const Page = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardSelect = (card) => {
    setSelectedCard(card); // Set the selected card
  };

  return (
    <section className="lg:px-20 w-full">
      <div className="container mx-auto px-2 md:px-6">
        <div className="flex mt-8 items-center justify-center w-[320] md:w-full h-[100px] bg-primary">
          <h1 className="text-white text-center">Proceed Payment</h1>
        </div>
        <div className="grid md:grid-cols-12 mt-20 gap-8">
          {/* Wallet Card */}
          <div
            onClick={() => handleCardSelect('wallet')}
            className={`w-[320] md:w-[400] h-[388px] md:col-span-4 bg-[#F0F0F0] shadow-lg rounded-lg transition-all duration-300 ${
              selectedCard === 'wallet' ? '' : 'filter blur-sm'
            }`}
          >
            <div className="bg-primary h-[64px] rounded-t-lg flex justify-center items-center text-center">
              <h3 className="text-white text-center">Wallet</h3>
            </div>
            <div className="p-4">
              <p>Recommended Methods (s)</p>
              <div className="flex flex-col gap-8">
                <div className="">
                  <div className="flex justify-between items-center mt-6">
                    <p>Wallet Amount:</p>
                    <p className="p2">$40.00</p>
                  </div>
                  <div className="bg-grey h-[1px] rounded-lg w-full"></div>
                </div>

                <div className="">
                  <div className="flex justify-between items-center mt-3">
                    <p>Reward Amount:</p>
                    <p className="p2">$10.00</p>
                  </div>
                  <div className="bg-grey h-[1px] rounded-lg w-full"></div>
                </div>
                <div className="">
                  <div className="flex justify-between items-center mt-3">
                    <p className="text-green">Available Amount:</p>
                    <p className="p2 text-green">$50.00</p>
                  </div>
                  <div className="bg-grey h-[1px] rounded-lg w-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Back Transfer Card */}
          <div
            onClick={() => handleCardSelect('backTransfer')}
            className={`w-[320] md:w-[400]  h-[388px] md:col-span-4 bg-[#F0F0F0] shadow-lg rounded-lg transition-all duration-300 ${
              selectedCard === 'backTransfer' ? '' : 'filter blur-sm'
            }`}
          >
            <div className="bg-primary h-[64px] rounded-t-lg flex justify-center items-center text-center">
              <h3 className="text-white text-end ms-8 w-[200px]">Back Transfer</h3>
              <Image src="/orders/i.svg" width={27} height={20} alt="" className="me-8" />
            </div>
            <div className="p-4">
              <div className="flex flex-col gap-8">
                <div className="">
                  <div className="flex justify-between items-center mt-6">
                    <p>Price:</p>
                    <p className="p2">$100.00</p>
                  </div>
                  <div className="bg-grey h-[1px] rounded-lg w-full"></div>
                </div>

                <div className="">
                  <div className="flex justify-between items-center mt-3">
                    <p>Processing Fee (4%):</p>
                    <p className="p2">%4.00</p>
                  </div>
                  <div className="bg-grey h-[1px] rounded-lg w-full"></div>
                </div>
                <div className="">
                  <div className="flex justify-between items-center mt-3">
                    <p className="text-green">VAT (5%):</p>
                    <p className="p2 text-green">%5.00</p>
                  </div>
                  <div className="bg-grey h-[1px] rounded-lg w-full"></div>
                </div>
                <div className="">
                  <div className="flex justify-between items-center mt-3">
                    <p className="text-green">Total</p>
                    <p className="p2 text-green">$104.00</p>
                  </div>
                  <div className="bg-grey h-[1px] rounded-lg w-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Gateway Card */}
          <div
            onClick={() => handleCardSelect('paymentGateway')}
            className={`w-[320] md:w-[400]  h-[388px] md:col-span-4 bg-[#F0F0F0] shadow-lg rounded-lg transition-all duration-300 ${
              selectedCard === 'paymentGateway' ? '' : 'filter blur-sm'
            }`}
          >
            <div className="bg-primary h-[64px] rounded-t-lg flex justify-center items-center text-center">
              <h3 className="text-white text-end ms-8 w-[200px]">Payment Gateway</h3>
              <Image src="/orders/i.svg" width={27} height={20} alt="" className="me-8" />
            </div>
            <div className="p-4">
              <div className="flex flex-col gap-8">
                <div className="">
                  <div className="flex justify-between items-center mt-6">
                    <p>Price:</p>
                    <p className="p2">$100.00</p>
                  </div>
                  <div className="bg-grey h-[1px] rounded-lg w-full"></div>
                </div>

                <div className="">
                  <div className="flex justify-between items-center mt-3">
                    <p>Processing Fee (4%):</p>
                    <p className="p2">%4.00</p>
                  </div>
                  <div className="bg-grey h-[1px] rounded-lg w-full"></div>
                </div>
                <div className="">
                  <div className="flex justify-between items-center mt-3">
                    <p className="text-green">VAT (5%):</p>
                    <p className="p2 text-green">%5.00</p>
                  </div>
                  <div className="bg-grey h-[1px] rounded-lg w-full"></div>
                </div>
                <div className="">
                  <div className="flex justify-between items-center mt-3">
                    <p className="text-green">Total</p>
                    <p className="p2 text-green">$104.00</p>
                  </div>
                  <div className="bg-grey h-[1px] rounded-lg w-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#F9F9F9] mt-12 p-8">
          <CheckBoxs />
        </div>
      </div>
    </section>
  );
};

export default Page;
