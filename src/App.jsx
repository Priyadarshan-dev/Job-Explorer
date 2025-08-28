import React, { useState } from "react";
import Navbar from "./Layout/Navbar";
import Body from "./Layout/Body";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [allJobs] = useState([
    {
      logo: "/assets/images/amazon.png",
      posted: "24h Ago",
      title: "Full Stack Developer",
      experience: "1-3 yr Exp",
      location: "Remote",
      salary: "12 LPA",
      description:
        [
          "A user-friendly interface lets you browse stunning photos",
          "Filter destinations based on interests and travel style"
        ]
    },
    {
      logo: "/assets/images/swiggy.png",
      posted: "24h Ago",
      title: "Node Js Developer",
      location: "Onsite",
      salary: "10 LPA",
      description: ["A user-friendly interface lets you browse stunning photos",
        "Filter destinations based on interests and travel style"]
    },
    {
      logo: "/assets/images/tesla.png",
      posted: "24h Ago",
      title: "Full Stack Developer",
      experience: "1-3 yr Exp",
      location: "Remote",
      salary: "12 LPA",
      description:
        [
          "A user-friendly interface lets you browse stunning photos",
          "Filter destinations based on interests and travel style"
        ]
    },
    {
      logo: "/assets/images/amazon.png",
      posted: "24h Ago",
      title: "Node Js Developer",
      location: "Onsite",
      salary: "10 LPA",
      description: ["A user-friendly interface lets you browse stunning photos",
        "Filter destinations based on interests and travel style"]
    },
    {
      logo: "/assets/images/tesla.png",
      posted: "24h Ago",
      title: "Full Stack Developer",
      experience: "1-3 yr Exp",
      location: "Remote",
      salary: "12 LPA",
      description:
        [
          "A user-friendly interface lets you browse stunning photos",
          "Filter destinations based on interests and travel style"
        ]
    },
    {
      logo: "/assets/images/swiggy.png",
      posted: "24h Ago",
      title: "Node Js Developer",
      location: "Onsite",
      salary: "10 LPA",
      description: ["A user-friendly interface lets you browse stunning photos",
        "Filter destinations based on interests and travel style"]
    },
    {
      logo: "/assets/images/tesla.png",
      posted: "24h Ago",
      title: "Full Stack Developer",
      experience: "1-3 yr Exp",
      location: "Remote",
      salary: "12 LPA",
      description:
        [
          "A user-friendly interface lets you browse stunning photos",
          "Filter destinations based on interests and travel style"
        ]
    },
    {
      logo: "/assets/images/amazon.png",
      posted: "24h Ago",
      title: "Node Js Developer",
      location: "Onsite",
      salary: "10 LPA",
      description: ["A user-friendly interface lets you browse stunning photos",
        "Filter destinations based on interests and travel style"]
    },
  ]);
  const [jobs, setJobs] = useState(allJobs);

  const handleCreateJob = (newJob) => {
    setJobs(prevJobs => [...prevJobs, newJob]);
    toast.success("Job created successfully!");
  };

  const handleDeleteJob = (jobIndex) => {
    setJobs(prevJobs => prevJobs.filter((_, index) => index !== jobIndex));
    toast.success("Job deleted successfully!");
  };

  const handleUpdateJob = (jobIndex, updatedJob) => {
    setJobs(prevJobs => prevJobs.map((job, index) => 
      index === jobIndex ? updatedJob : job
    ));
    toast.success("Job updated successfully!");
  };

  return (
    <>
      <Navbar setJobs={setJobs} allJobs={allJobs} onCreateJob={handleCreateJob} />
      <Body jobs={jobs} onDeleteJob={handleDeleteJob} onUpdateJob={handleUpdateJob} />
      <ToastContainer  autoClose={3000} />
    </>
  );
}

export default App;
