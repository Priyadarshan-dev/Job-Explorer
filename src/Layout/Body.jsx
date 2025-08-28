import React from "react";
import Card from "../Components/Card";

function Body({ jobs, onDeleteJob, onUpdateJob }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center gap-6 mt-10 px-4 sm:px-6 lg:px-8 xl:px-15 sm:w-full pb-10">
            {jobs.map((job, index) => (
                <Card
                    key={index}
                    index={index}
                    logo={job.logo} 
                    posted={job.posted}
                    title={job.title}
                    experience={job.experience || "1-3 yr Exp"}
                    location={job.location}
                    salary={job.salary}
                    description={job.description}
                    onDeleteJob={onDeleteJob}
                    onUpdateJob={onUpdateJob}
                />
            ))}
        </div>
    );
}

export default Body;