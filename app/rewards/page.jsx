"use client"
import React, { useState } from 'react'
import { rewardsData } from '../data'
import Image from 'next/image';

const Page = () => {
  const [showInviteForm, setShowInviteForm] = useState(false);

  // Function to handle button click
  const handleInviteClick = () => {
    setShowInviteForm(!showInviteForm); // Toggle the state
  }

  return (
    <section className="absolute top-[94] w-full bg-[#F4F6F9]" style={{ top: "94px" }}>
      <div className="container mt-6 mx-auto px-6">
        {!showInviteForm ? 
            <>
                <h1>Rewards</h1>
                <div className="grid md:grid-cols-12 mt-8">
                <div className="w-full md:col-span-7">
                    <div className="p-5 shadow-xl rounded-2xl bg-[#FFFFFF]">
                    <h1 className="text-primary">Invite a Friend and Earn Free Credit!</h1>
                    <p className='p3 text-2xl py-5'>Total Reward Amount: 0.05 USD</p>

                    <button
                        className="bg-primary btnText text-white px-6 py-3 rounded-lg"
                        onClick={handleInviteClick} // Toggle visibility
                    >
                        Invite A Friend
                    </button>
                    </div>
                </div>
                </div>
            </>
            :""
        }

        {showInviteForm ? (
          // Show invite form content when the state is true
          <div className="mt-12 py-8 flex justify-center items-center">
            <div className="grid md:grid-cols-12 py-7 w-full">
                <div className="w-full border bg-primary rounded-lg md:col-span-12 px-9 py-8">
                    <div className="p-4 flex flex-col justify-center items-center">
                        <Image src={"/invite.png"} width={200} height={120} alt="Invite your friend and earn" />
                        <h1 className="text-white py-3">INVITE AND GET Rs10</h1>
                        <div className="w-full flex gap-2">
                            <input className="py-3 px-2 w-full outline-none rounded-lg " type="text" value={"link here"} readOnly />
                            <button className="text-white border-2 px-6 py-2 rounded-lg">Copy</button>
                        </div>
                        <div className="flex py-6 items-center gap-4">
                            <a className="bg-white px-3 py-3 rounded-full" href="https://api.whatsapp.com/send?text=https://hybridresearchcenter.app.link/u0Ck3qhUNOb" target="_blank">
                                <img src="https://cdn-icons-png.flaticon.com/512/124/124034.png" width={26} alt="WhatsApp" />
                            </a>
                            <a className="bg-white px-3 py-3 rounded-full" href="https://www.instagram.com/sharer.php?u=https://hybridresearchcenter.app.link/u0Ck3qhUNOb" target="_blank">
                                <img src="https://cdn-icons-png.flaticon.com/512/1400/1400829.png" width={29} alt="Instagram" />
                            </a>
                            <a className="bg-white px-3 py-3 rounded-full" href="https://www.facebook.com/sharer/sharer.php?u=https://hybridresearchcenter.app.link/u0Ck3qhUNOb" target="_blank">
                                <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" width={26} alt="Facebook" />
                            </a>
                            <a className="bg-white px-3 py-3 rounded-full" href="https://twitter.com/intent/tweet?url=https://hybridresearchcenter.app.link/u0Ck3qhUNOb" target="_blank">
                                <img src="https://cdn-icons-png.flaticon.com/512/134/134914.png" width={28} alt="Twitter" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="w-full md:col-span-12 mt-12 shadow-2xl px-6 py-8 shadowc rounded-lg ">
                    <div className="flex items-center gap-2">
                        <Image src={"/check.png"} width={20} height={20} alt="" />
                        <p className="text-xl">They get a free 5 credit in their native currency when they sign up using your referral link and place their first order.</p>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                        <Image src={"/check.png"} width={20} height={20} alt="" />
                        <p className="text-xl">You get a free Rs10 credit when they sign up using your referral link and place their first order.</p>
                    </div>
                </div>

                <div className="w-full md:col-span-12 mt-12 shadow-2xl px-6 py-8 shadowc rounded-lg ">
                   <button onClick={handleInviteClick} className="bg-primary px-7 btnText text-white rounded-lg py-3">Back</button>
                </div>
            </div>
          </div>
        ) : (
          // Default content when the invite form is hidden (Rewards History)
          <div className="ms" style={{ overflow: "scroll" }}>
            <div className="grid md:grid-cols-12 mt-8 justify-center sm">
              <div className="w-full md:col-span-12">
                <div className="bg-primary w-full py-6 px-5 rounded-tl-3xl rounded-tr-3xl" style={{ width: "100%" }}>
                  <h1 className="text-white">Rewards History</h1>
                </div>
                <table className="bg-white w-full border border-gray-300 rounded-lg">
                  <thead>
                    <tr className="bg-gray-100 text-left">
                      <th className="px-6 py-3 border-b text-xl">Date</th>
                      <th className="px-6 py-3 border-b text-xl">Description</th>
                      <th className="px-6 py-3 border-b text-xl">Amount</th>
                    </tr>
                  </thead>
                  <tbody className='res'>
                    {rewardsData.map((reward, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="md:px-6 py-3 border-b text-lg text-gray-800">{reward.date}</td>
                        <td className="md:px-6 py-3 border-b text-lg text-gray-800">{reward.description}</td>
                        <td className="md:px-6 py-3 border-b text-lg text-gray-800">{reward.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Page;
