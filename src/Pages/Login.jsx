import React from 'react'
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex h-[812px] items-center justify-center bg-white">
            <div className="relative flex h-[812px] w-[375px] flex-col rounded-lg border-gray-600 bg-[#F7F8F9] shadow-sm p-6">
                <div className="flex flex-col justify-between  h-full w-full">
                    <div>
                        <h1 className="text-[28px] font-medium text-[#1D2226] mb-[14px]">
                            Signin to your PopX Account
                        </h1>
                         <p className='mb-[33px] font-normal text-[18px] text-[#1D2226]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, reprehenderit?</p>
                            <div >
                                <div class="relative w-full mb-[23px]">
                                    <input id="email-input" type="email" placeholder='Email' class="w-full px-4 py-3 border border-[#CBCBCB] rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500" required/>
                                    <label for="full-name-input" class="absolute left-3 -top-2.5 px-1 text-[13px] bg-[#F7F8F9]">
                                        <span class="text-[#6C25FF]">Email Address</span>
                                        <span class="text-[#DD4A3D]">*</span>
                                    </label>
                                </div>
                                <div class="relative w-full mb-[14px]">
                                    <input id="pass-input" type="password" placeholder='Password' class="w-full px-4 py-3 border border-[#CBCBCB] rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500" required/>
                                    <label for="full-name-input" class="absolute left-3 -top-2.5 px-1 text-[13px] bg-[#F7F8F9]">
                                        <span class="text-[#6C25FF]">Password</span>
                                        <span class="text-[#DD4A3D]">*</span>
                                    </label>
                                </div>
                                <Link to="/profile">
                                    <button className="w-full rounded-lg bg-[#CBCBCB] py-2 text-[16px] text-white font-medium hover:bg-violet-500 transition mb-3">
                                        Login
                                    </button> 
                                </Link>
                            </div>
                    </div>
                    
                </div>
            </div>
    </div>
  )
}

export default Login