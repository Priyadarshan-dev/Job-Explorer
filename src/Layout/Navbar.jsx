import React, { useState } from 'react';
import Modal from '../Components/Modal';

function Navbar({ setJobs, allJobs }) {
    const [showModal, setShowModal] = useState(false);
    const [showJobTypeDropdown, setShowJobTypeDropdown] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // ✅ for hamburger

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
                {/* 1st Row */}
                <div className="flex justify-center">
                    <div className="bg-[#FFFFFF] flex items-center justify-between shadow-md rounded-[122px] h-auto py-4 md:py-0 md:h-[80px] w-full max-w-[890px] mx-4 md:mx-auto px-6">
                        <div className="flex items-center gap-4 md:gap-6">
                            <img
                                src="/assets/images/Frame 54.png"
                                alt="Logo"
                                className="h-10"
                            />
                            <h3 className="hidden md:block">Home</h3>
                        </div>
                        <button
                            onClick={() => setShowModal(true)}
                            className="hidden md:block h-[38px] w-[123px] bg-[#A128FF] rounded-3xl shadow-md text-white font-bold"
                        >
                            Create Jobs
                        </button>
                        <button
                            className="md:hidden text-2xl"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            ☰
                        </button>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="md:hidden bg-white shadow-md rounded-md mx-auto mt-2 p-4 space-y-3 w-[200px]">
                        <p className="cursor-pointer pl-15">Home</p>
                        <button
                            onClick={() => setShowModal(true)}
                            className="h-[38px] w-full bg-[#A128FF] rounded-3xl shadow-md text-white font-bold"
                        >
                            Create Jobs
                        </button>
                    </div>
                )}
                <div className="pt-6 md:pt-12 flex flex-col md:flex-row justify-center md:justify-around items-center gap-6">
                    <div className="flex items-center gap-2 pr-0 md:pr-10 md:border-r">
                        <img src="/assets/images/Vector.png" alt="Icon" className="h-5" />
                        <h3 className="text-sm md:text-base">Search By Job Title, Role</h3>
                    </div>
                    <div className="flex items-center gap-2 pr-0 md:pr-6 md:border-r">
                        <img src="/assets/images/Location.png" alt="Icon" className="h-5" />
                        <h3 className="text-sm md:text-base">Preferred Location</h3>
                    </div>

                    <div
                        className="relative flex items-center gap-2 pr-0 md:pr-6 md:border-r cursor-pointer"
                        onClick={() => setShowJobTypeDropdown(!showJobTypeDropdown)} >
                        <img src="/assets/images/Vector - Copy.png" alt="Icon" className="h-5" />
                        <h3 className="text-sm md:text-base">Job Type</h3>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mt-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
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
                    <div className="flex flex-col items-center gap-2">
                        <div className="flex justify-between w-full text-sm md:text-base">
                            <span>Salary Per Month</span>
                            <span>₹50k - ₹80k</span>
                        </div>
                        <input type="range" min="50000" max="80000" step="5000" className="w-[200px]" />
                    </div>
                </div>

            </nav>

            {showModal && <Modal onClose={() => setShowModal(false)} setJobs={setJobs} />}
        </>
    )
}

export default Navbar;

