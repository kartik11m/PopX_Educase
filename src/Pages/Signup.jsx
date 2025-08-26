import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
        <div className="flex h-[812px] items-center justify-center bg-white">
            <div className="relative flex h-[812px] w-[375px] flex-col rounded-lg border-gray-600 bg-[#F7F8F9] shadow-sm p-6">
                <div className="flex flex-col justify-between  h-full w-full">
                    <div>
                        <h1 className="text-3xl font-medium text-[28px] text-[#1D2226] mb-[31px]">
                            Create your PopX Account
                        </h1>
                        <div>
                            <div class="relative h-[40px] w-full mb-[29px]">
                                <input id="full-name" type="text" placeholder='Full Name' class="w-full px-4 py-3 border border-[#CBCBCB] rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500" />
                                <label for="full-name-input" class="absolute left-3 -top-2.5 px-1 text-[13px] bg-[#F7F8F9]">
                                    <span class="text-[#6C25FF]">Full Name</span>
                                    <span class="text-[#DD4A3D]">*</span>
                                </label>
                            </div>
                            <div class="relative h-[40px] w-full mb-[29px]">
                                <input id="phone-number" type='number' placeholder='Phone number' class="w-full px-4 py-3 border border-[#CBCBCB] rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500" />
                                <label for="full-name-input" class="absolute left-3 -top-2.5 px-1 text-[13px] bg-[#F7F8F9]">
                                    <span class="text-[#6C25FF]">Phone Number</span>
                                    <span class="text-[#DD4A3D]">*</span>
                                </label>
                            </div>
                            <div class="relative h-[40px] w-full mb-[29px]">
                                <input id="email" type="email" placeholder='Email' class="w-full px-4 py-3 border border-[#CBCBCB] rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500" />
                                <label for="full-name-input" class="absolute left-3 -top-2.5 px-1 text-[13px] bg-[#F7F8F9]">
                                    <span class="text-[#6C25FF]">Email address</span>
                                    <span class="text-[#DD4A3D]">*</span>
                                </label>
                            </div>
                            <div class="relative h-[40px] w-full mb-[29px]">
                                <input id="pass" type="password" placeholder='Password' class="w-full px-4 py-3 border border-[#CBCBCB] rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500" />
                                <label for="full-name-input" class="absolute left-3 -top-2.5 px-1 text-[13px] bg-[#F7F8F9]">
                                    <span class="text-[#6C25FF]">Password</span>
                                    <span class="text-[#DD4A3D]">*</span>
                                </label>
                            </div>
                            <div class="relative h-[40px] w-full mb-[18px]">
                                <input id="company-name" type="text" placeholder='Company Name' class="w-full px-4 py-3 border border-[#CBCBCB] rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500" />
                                <label for="full-name" class="absolute left-3 -top-2.5 px-1 text-[13px] bg-[#F7F8F9]">
                                    <span class="text-[#6C25FF]">Company Name</span>
                                </label>
                            </div>
                            <div>
                                <p className='text-[13px]'>Are you an Agency? <span class="text-[#DD4A3D]">*</span></p>
                                <div className='flex'>
                                    <div class="flex items-center me-4">
                                        <input type="radio" value="Yes" name="agency" class="w-4 h-4" />
                                        <label for="radio" class="ms-2 text-[14px] font-normal">Yes</label>
                                    </div>
                                    <div class="flex items-center me-4">
                                        <input type="radio" value="No" name="agency" class="w-4 h-4" />
                                        <label for="radio" class="ms-2 text-[14px] font-normal">No</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to="/profile">
                        <button className="w-full text-[16px] rounded-lg bg-[#6C25FF] py-2 text-white font-medium hover:bg-violet-800 transition mb-3">
                            Create Account
                        </button> </Link>
                </div>
            </div>
        </div>
  )
}

export default Signup