import React, { useState } from 'react';
import Modal from '../Components/Modal';

function Navbar({ setJobs, allJobs }) {
    const [showModal, setShowModal] = useState(false);
    const [showJobTypeDropdown, setShowJobTypeDropdown] = useState(false);

    const handleFilter = (type) => {
        if (type === "All") {
            setJobs(allJobs);
        } else {
            setJobs(allJobs.filter(job => job.location.toLowerCase() === type.toLowerCase()));
        }
        setShowJobTypeDropdown(false);
    };

    return (
        <>
            <nav className="lg:h-[214px] shadow-md bg-[#FCFCFC] pt-6 relative">
                <div className="flex justify-center">
                    <div className="bg-[#FFFFFF] flex items-center justify-between shadow-md rounded-[122px] h-auto py-4 md:py-0 md:h-[80px] w-full max-w-[890px] mx-4 md:mx-auto px-6">
                        <div className="flex items-center gap-4 md:gap-6">
                            <img
                                src="/assets/images/Frame 54.png"
                                alt="Logo"
                                className="h-10"
                            />
                            <h3 className="block">Home</h3>
                        </div>
                        <button
                            onClick={() => setShowModal(true)}
                            className="h-[38px] w-[123px] bg-[#A128FF] rounded-3xl shadow-md text-white font-bold"
                        >
                            Create Jobs
                        </button>
                    </div>
                </div>
                <div className="pt-6 md:pt-12 flex flex-col md:flex-row flex-wrap justify-center gap-4 md:gap-0 md:justify-around">
                    <div className='flex gap-2 md:gap-7 justify-center md:justify-start'>
                        <img src="/assets/images/Vector.png" alt="Icon" className='h-5' />
                        <h3 className="text-sm md:text-base">Search By Job Title, Role</h3>
                    </div>
                    <img src="/assets/images/Vector 1.png" alt="Icon" className='h-8 hidden md:block' />
                    <div className='flex gap-2 md:gap-7 justify-center md:justify-start'>
                        <img src="/assets/images/Location.png" alt="Icon" className='h-5' />
                        <h3 className="text-sm md:text-base">Preferred Location</h3>
                    </div>
                    <img src="/assets/images/Vector 1.png" alt="Icon" className='h-8 hidden md:block' />
                    {/* Job Type with dropdown */}
                    <div className="relative flex justify-center md:justify-start">
                        <div
                            className='flex gap-2 md:gap-7 cursor-pointer justify-center md:justify-start'
                            onClick={() => setShowJobTypeDropdown(!showJobTypeDropdown)}
                        >
                            <img src="/assets/images/Vector - Copy.png" alt="Icon" className='h-5' />
                            <h3 className="text-sm md:text-base">Job Type</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>

                        {showJobTypeDropdown && (
                            <div className="absolute top-full mt-2 bg-white border rounded-md shadow-lg z-10 w-32">
                                <p
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                    onClick={() => handleFilter("Onsite")}
                                >
                                    Onsite
                                </p>
                                <p
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                    onClick={() => handleFilter("Remote")}
                                >
                                    Remote
                                </p>
                                <p
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                    onClick={() => handleFilter("All")}
                                >
                                    All
                                </p>
                            </div>
                        )}
                    </div>

                    <img src="/assets/images/Vector 1.png" alt="Icon" className='h-8 hidden md:block' />
                    <div className='flex gap-2 md:gap-7 justify-center md:justify-start'>
                        <h3 className="text-sm md:text-base">Salary Per Month 50k - 80k</h3>
                    </div>
                </div>
            </nav>

            {showModal && <Modal onClose={() => setShowModal(false)} setJobs={setJobs} />}
        </>
    )
}

export default Navbar;