import React, { useState } from "react";

function Modal({ onClose, onCreateJob }) {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newJob = {
      logo: "/assets/images/amazon.png",
      posted: "Just now",
      title: form.jobTitle,
      experience: "1-3 yr Exp",
      location: form.location,
      salary: `${form.minSalary}L - ${form.maxSalary}L PA`,
      description: [form.description],
    };

    onCreateJob(newJob);
    onClose();
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
                required
              />
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
                required
              />
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
                required
              >
                <option value="">Choose Location</option>
                <option value="Chennai">Chennai</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Kerala">Kerala</option>
                <option value="Delhi">Delhi</option>
              </select>
            </div>
            <div className="w-full md:w-[48%] mt-4 md:mt-0">
              <label htmlFor="jobType">Job Type</label>
              <select
                id="jobType"
                value={form.jobType}
                onChange={handleChange}
                className="rounded-xl border h-[48px] w-full px-3 mt-2"
                required
              >
                <option value="">Select Job Type</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
              </select>
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
                    required
                  />
                </div>
                <div className="w-1/2">
                  <input
                    id="maxSalary"
                    type="number"
                    placeholder="10000000"
                    value={form.maxSalary}
                    onChange={handleChange}
                    className="rounded-xl border h-[48px] w-full px-3"
                    required
                  />
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
                required
              />
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
              required
            />
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