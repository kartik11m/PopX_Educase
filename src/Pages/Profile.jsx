import React from 'react'


const Profile = () => {
  return (
        <div className="flex flex-col h-[812px] items-center justify-center bg-white">
            <div className='flex items-center bg-white w-[375px] h-20 border border-[#0000001e]'>
                <p className='ms-3 font-medium text-[18px] text-[#1D2226]'>Account Setting</p>
            </div>
            <div className="flex h-screen w-[375px] flex-col gap-6 border border-[#0000000b] bg-[#F7F8F9] shadow-sm p-6">
                <div className="relative flex items-start gap-5">
                    <img className='h-20 w-20 rounded-full' src="/girl.png" alt="picture" />
                    <img src="/Group1.svg" alt="" className='absolute h-[23px] top-13 left-[62px]'/>
                    <div>
                        <p className='text-[#1D2226] font-semibold text-[15px]'>Marry Doe</p>
                        <p className='text-[#1D2226] text-[14px]'>Marry@Gmail.com</p>
                    </div>

                </div>
                <div>
                    <p className=' text-[#1D2226] text-[14px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id cum ducimus cupiditate beatae quos, in quaerat tenetur vel.</p>
                </div>
                <div className="-mx-6 border-t border-dashed border-gray-400"></div>
            </div>
        </div>
  )
}

export default Profile