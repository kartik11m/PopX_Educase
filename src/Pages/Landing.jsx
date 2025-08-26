import React from 'react'
import { Link } from "react-router-dom";

const Landing = () => {
  return (
        <div className="flex h-screen items-center justify-center bg-white">
            <div className="relative flex h-[812px] w-[375px] flex-col rounded-lg border-gray-600 bg-[#F7F8F9] shadow-sm p-6">
                <div className="flex flex-col items-start justify-end h-full w-full">
                    <div>
                        <h1 className="text-[28px] font-medium leading-[17px] text-[#1D2226] mb-2.5">
                            Welcome to PopX
                        </h1>
                        <p className='mb-6 text-[#919191] font-normal text-[18px] leading-[26px] '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. reprehenderit?</p>
                        <div>
                            <Link to="/signup">
                                <button className="w-full rounded-lg bg-[#6C25FF] py-2 text-[#FFFFFF] text-[16px] font-medium hover:bg-violet-800 transition mb-3">
                                    Create Account
                                </button>
                            </Link>
                            <Link to="/login">
                                <button className="w-full rounded-lg bg-[#6C25FF4B] py-2 text-violet-900 font-medium text-[16px] hover:bg-blue-100 transition">
                                    Already Registered?Login
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Landing