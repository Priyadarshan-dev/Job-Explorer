import React from 'react'

function Navbar() {
    return (
        <>
            <nav className="h-[214px] shadow-md bg-[#FCFCFC]  pt-6">
                {/* Top Row */}
                <div className="flex justify-center">
                    <div className="bg-[#FFFFFF] flex items-center justify-evenly  shadow-md rounded-[122px] h-[80px] w-[890px]">
                        <img
                            src="/assets/images/Frame 54.png"
                            alt="Logo"
                            className="h-10"
                        />
                        <h3>Home</h3>
                        <h3>Find Jobs</h3>
                        <h3>Find Talents</h3>
                        <h3>About Us</h3>
                        <h3>Testimonials</h3>
                        <button className="h-[38px] w-[123px] bg-[#A128FF] rounded-3xl shadow-md text-white font-bold">
                            Create Jobs
                        </button>
                    </div>
                </div>
                {/* Bottom Row */}
                <div className="pt-12 flex justify-around">
                    <div className='flex gap-7'>
                        <img src="/assets/images/Vector.png" alt="Icon" className='h-5' />
                        <h3>Search By Job Title, Role</h3>
                    </div>
                    <img src="/assets/images/Vector 1.png" alt="Icon" className='h-8' />
                    <div className='flex gap-7'>
                        <img src="/assets/images/Location.png" alt="Icon" className='h-5'/>
                        <h3>Preferred Location</h3>
                    </div>
                    <img src="/assets/images/Vector 1.png" alt="Icon" className='h-8'/>
                    <div className='flex gap-7'>
                        <img src="/assets/images/Vector - Copy.png" alt="Icon" className='h-5'/>
                        <h3>Job Type</h3>
                    </div>
                    <img src="/assets/images/Vector 1.png" alt="Icon" className='h-8'/>
                    <div className='flex gap-7'>
                        <img src="/assets/images/Vector.png" alt="Icon" className='h-5' />
                        <h3>Salary Per Month 50k - 80k</h3>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
