import React from "react";

function Card({ logo, posted, title, experience, location, salary, description }) {
    return (
        <div className="bg-white shadow-md rounded-xl p-4 w-full max-w-[316px] mx-auto">
            <div className="flex justify-between items-start">
                <img
                    src={logo}
                    alt="Company Logo"
                    className="h-12 w-12 rounded-md"
                />
                <span className="bg-[#F0F5FA] text-blue-600 text-xs font-medium px-3 py-1 rounded-lg">
                    {posted}
                </span>
            </div>
            <h2 className="text-lg font-semibold mt-3">{title}</h2>
            <div className="flex flex-wrap gap-2 text-gray-600 text-sm mt-2">
                <img src="/assets/images/1.png" alt="Icon" />
                <span>{experience}</span>
                <img src="/assets/images/2.png" alt="Icon" />
                <span>{location}</span>
                <img src="/assets/images/3.png" alt="Icon" />
                <span>{salary}</span>
            </div>
            <ul className="text-gray-500 text-sm mt-3 list-disc pl-4">
                {description.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <button className="w-full bg-[#00AAFF] text-white font-medium py-2 mt-4 rounded-lg">
                Apply Now
            </button>
        </div>
    );
}

export default Card;
