import React, { useState } from "react";
import Navbar from "./Layout/Navbar";
import Body from "./Layout/Body";

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

  return (
    <>
      <Navbar setJobs={setJobs} allJobs={allJobs} />
      <Body jobs={jobs} />
    </>
  );
}

export default App;
