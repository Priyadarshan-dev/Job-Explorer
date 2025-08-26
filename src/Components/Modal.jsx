import React, { useState } from "react";

function Modal({ onClose, setJobs }) {
    const [form, setForm] = useState({
        jobTitle: "",
        company: "",
        location: "",
        jobType: "",
        minSalary: "",
        maxSalary: "",
        deadline: "",
        description: "",
    });

    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};

        if (!form.jobTitle.trim()) newErrors.jobTitle = "Job Title is required";
        if (!form.company.trim()) newErrors.company = "Company Name is required";
        if (!form.location.trim()) newErrors.location = "Location is required";
        if (!form.jobType.trim()) newErrors.jobType = "Job Type is required";
        if (!form.minSalary.trim()) newErrors.minSalary = "Min salary is required";
        if (!form.maxSalary.trim()) newErrors.maxSalary = "Max salary is required";
        if (!form.deadline) newErrors.deadline = "Deadline is required";
        if (!form.description.trim()) newErrors.description = "Description is required";

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            const newJob = {
                title: form.jobTitle,
                company: form.company,
                location: form.location,
                jobType: form.jobType,
                salary: `${form.minSalary}L - ${form.maxSalary}L PA`,
                description: form.description,
                posted: "Just now"
            };

            setJobs(prevJobs => [...prevJobs, newJob]);
            
            onClose();
        }
    };

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.id]: e.target.value
        });
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center p-4 bg-black/30 overflow-y-auto">
            <div className="bg-white rounded-lg p-4 md:p-6 w-full max-w-[848px] max-h-[90vh] overflow-y-auto shadow-2xl relative">

                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl"
                >
                    ✕
                </button>

                <form onSubmit={handleSubmit}>
                    <div className="flex justify-center">
                        <h1 className="font-semibold text-xl">Create Job Opening</h1>
                    </div>

                    <div className="flex flex-col md:flex-row md:justify-between mt-5">
                        <div className="w-full md:w-[48%]">
                            <label htmlFor="jobTitle">Job Title</label>
                            <input
                                id="jobTitle"
                                type="text"
                                placeholder="Job Title"
                                value={form.jobTitle}
                                onChange={handleChange}
                                className="rounded-xl border h-[48px] w-full px-3 mt-2"
                            />
                            {errors.jobTitle && (
                                <p className="text-red-500 text-sm">{errors.jobTitle}</p>
                            )}
                        </div>
                        <div className="w-full md:w-[48%] mt-4 md:mt-0">
                            <label htmlFor="company">Company Name</label>
                            <input
                                id="company"
                                type="text"
                                placeholder="Amazon, Microsoft, Swiggy"
                                value={form.company}
                                onChange={handleChange}
                                className="rounded-xl border h-[48px] w-full px-3 mt-2"
                            />
                            {errors.company && (
                                <p className="text-red-500 text-sm">{errors.company}</p>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:justify-between mt-4">
                        <div className="w-full md:w-[48%]">
                            <label htmlFor="location">Location</label>
                            <select
                                id="location"
                                value={form.location}
                                onChange={handleChange}
                                className="rounded-xl border h-[48px] w-full px-3 mt-2"
                            >
                                <option value="">Choose Location</option>
                                <option value="Chennai">Chennai</option>
                                <option value="Bangalore">Bangalore</option>
                                <option value="Kerala">Kerala</option>
                                <option value="Delhi">Delhi</option>
                            </select>
                            {errors.location && (
                                <p className="text-red-500 text-sm">{errors.location}</p>
                            )}
                        </div>
                        <div className="w-full md:w-[48%] mt-4 md:mt-0">
                            <label htmlFor="jobType">Job Type</label>
                            <select
                                id="jobType"
                                value={form.jobType}
                                onChange={handleChange}
                                className="rounded-xl border h-[48px] w-full px-3 mt-2"
                            >
                                <option value="">Select Job Type</option>
                                <option value="Full Time">Full Time</option>
                                <option value="Part Time">Part Time</option>
                                <option value="Contract">Contract</option>
                                <option value="Internship">Internship</option>
                            </select>
                            {errors.jobType && (
                                <p className="text-red-500 text-sm">{errors.jobType}</p>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:justify-between mt-4">
                        <div className="w-full md:w-[48%]">
                            <label>Salary Range</label>
                            <div className="flex gap-4 mt-2">
                                <div className="w-1/2">
                                    <input
                                        id="minSalary"
                                        type="number"
                                        placeholder="0"
                                        value={form.minSalary}
                                        onChange={handleChange}
                                        className="rounded-xl border h-[48px] w-full px-3"
                                    />
                                    {errors.minSalary && (
                                        <p className="text-red-500 text-sm">{errors.minSalary}</p>
                                    )}
                                </div>
                                <div className="w-1/2">
                                    <input
                                        id="maxSalary"
                                        type="number"
                                        placeholder="10000000"
                                        value={form.maxSalary}
                                        onChange={handleChange}
                                        className="rounded-xl border h-[48px] w-full px-3"
                                    />
                                    {errors.maxSalary && (
                                        <p className="text-red-500 text-sm">{errors.maxSalary}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-[48%] mt-4 md:mt-0">
                            <label htmlFor="deadline">Application Deadline</label>
                            <input
                                id="deadline"
                                type="date"
                                value={form.deadline}
                                onChange={handleChange}
                                className="rounded-xl border h-[48px] w-full px-3 mt-2"
                            />
                            {errors.deadline && (
                                <p className="text-red-500 text-sm">{errors.deadline}</p>
                            )}
                        </div>
                    </div>

                    <div className="mt-4">
                        <label htmlFor="description">Job Description</label>
                        <textarea
                            id="description"
                            placeholder="Please share a description to let candidates know more about the job"
                            value={form.description}
                            onChange={handleChange}
                            className="rounded-xl border h-[109px] w-full p-3 mt-2"
                        />
                        {errors.description && (
                            <p className="text-red-500 text-sm">{errors.description}</p>
                        )}
                    </div>

                    <div className="mt-5 flex flex-col-reverse sm:flex-row justify-between gap-3">
                        <button type="button" className="h-[48px] w-full sm:w-[150px] rounded-xl border">
                            Save Draft
                        </button>
                        <button
                            type="submit"
                            className="h-[48px] w-full sm:w-[150px] bg-[#00AAFF] text-white rounded-xl"
                        >
                            Publish
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Modal;