"use client";

import { useState, useEffect } from "react";
import JobCard from "@/components/JobCard";
import JobFilter from "@/components/JobFilter";

export default function JobsPage() {

  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({ title: "", location: "" });
  const [submitTrigger, setSubmitTrigger] = useState(0); // to trigger fetch

  useEffect(() => {
    const query = new URLSearchParams(filters).toString();

    fetch(`/api/jobs?${query}`)
      .then((res) => res.json())
      .then(setJobs);
  }, [submitTrigger]); // fetch runs only when submitTrigger changes

  const handleFilterSubmit = () => {
    setSubmitTrigger((prev) => prev + 1); // trigger useEffect fetch
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-700">
          Job Listings
        </h1>

        {/* JobFilter passes filters and submit handler */}
        <JobFilter
          filters={filters}
          setFilters={setFilters}
          onSubmit={handleFilterSubmit}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {jobs.length === 0 ? (
            <p className="col-span-full text-center text-gray-500">
              No jobs found.
            </p>
          ) : (
            jobs.map((job) => <JobCard key={job.id} job={job} />)
          )}
        </div>
      </div>
    </div>
  );
}