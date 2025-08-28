import React, { useState } from "react";

function Card({ logo, posted, title, experience, location, salary, description, index, onDeleteJob, onUpdateJob }) {
  const [showEditModal, setShowEditModal] = useState(false);
  const [editForm, setEditForm] = useState({
    title: title,
    location: location,
    salary: salary,
    description: description.join(", ")
  });

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this job?")) {
      onDeleteJob(index);
    }
  };

  const handleEdit = () => {
    setShowEditModal(true);
  };

  const handleSave = () => {
    const updatedJob = {
      logo: logo,
      posted: "Updated now",
      title: editForm.title,
      experience: experience,
      location: editForm.location,
      salary: editForm.salary,
      description: editForm.description.split(",").map(item => item.trim())
    };

    onUpdateJob(index, updatedJob);
    setShowEditModal(false);
  };

  return (
    <>
      <div className="bg-white shadow-md rounded-xl p-4 w-full h-full">

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
          {description.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>

        <div className="flex justify-end gap-5 pr-2 ">
          <button
            onClick={handleEdit}
            className="h-[40px] w-[40px] bg-gray-200 rounded"
          >
            <i class="fa-solid fa-pen"></i>
          </button>
          <button
            onClick={handleDelete}
            className="h-[40px] w-[40px] bg-gray-200 rounded"
          >
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
        <div className="mt-5">
          <button className="bg-[#00AAFF] w-full text-white font-medium py-2 rounded-lg">
            Apply Now
          </button>
        </div>
      </div >

      {/* Edit Modal */}
      {
        showEditModal && (
          <div className="fixed inset-0 flex items-center justify-center p-4 bg-black/30 z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <h2 className="text-lg font-semibold mb-4">Edit Job</h2>

              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium">Job Title</label>
                  <input
                    type="text"
                    value={editForm.title}
                    onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                    className="w-full border rounded p-2 mt-1"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium">Location</label>
                  <input
                    type="text"
                    value={editForm.location}
                    onChange={(e) => setEditForm({ ...editForm, location: e.target.value })}
                    className="w-full border rounded p-2 mt-1"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium">Salary</label>
                  <input
                    type="text"
                    value={editForm.salary}
                    onChange={(e) => setEditForm({ ...editForm, salary: e.target.value })}
                    className="w-full border rounded p-2 mt-1"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium">Description (comma separated)</label>
                  <textarea
                    value={editForm.description}
                    onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                    className="w-full border rounded p-2 mt-1 h-20"
                  />
                </div>
              </div>

              <div className="flex gap-2 mt-6">
                <button
                  onClick={() => setShowEditModal(false)}
                  className="flex-1 bg-gray-500 text-white py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="flex-1 bg-green-500 text-white py-2 rounded"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )
      }
    </>
  );
}

export default Card;