import React from 'react'
import { rewardsData } from '../data'

const page = () => {
  return (
    <section className="absolute top-[94] w-full bg-[#F4F6F9]">
        <div className="container mt-6 mx-auto px-6">
            <h1>Rewards</h1>

            <div className="grid md:grid-cols-12 mt-8">
                <div className="w-full md:col-span-7">
                    <div className="p-5 shadow-xl rounded-2xl bg-[#FFFFFF]">
                        <h1 className="text-primary">Invite a Friend and Earn Free Credit!</h1>
                        <p className='p3 text-2xl py-5'>Total Reward Amount: 0.05 USD</p>

                        <button className="bg-primary btnText text-white px-6 py-3 rounded-lg">Invite A Friend</button>
                    </div>
                </div>
            </div>

            <div className="flex w-full mt-8 justify-center">
                <div className="grid w-full md:grid-cols-12 mt-8 justify-center">
                    <div className="w-full md:col-span-12 ">
                        <div className="bg-primary w-full py-6 px-5 rounded-tl-3xl rounded-tr-3xl">
                            <h1 className="text-white">Rewards History</h1>
                        </div>
                        <table className="bg-white overflow-x-auto w-full border border-gray-300 rounded-lg">
                            <thead>
                            <tr className="bg-gray-100 text-left">
                                <th className="px-6 py-3 border-b text-xl">Date</th>
                                <th className="px-6 py-3 border-b text-xl">Description</th>
                                <th className="px-6 py-3 border-b text-xl">Amount</th>
                            </tr>
                            </thead>
                            <tbody>
                            {rewardsData.map((reward, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                <td className="px-6 py-3 border-b text-lg text-gray-800">{reward.date}</td>
                                <td className="px-6 py-3 border-b text-lg text-gray-800">{reward.description}</td>
                                <td className="px-6 py-3 border-b text-lg text-gray-800">{reward.amount}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default page
