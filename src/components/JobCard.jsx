"use client";

import { useState } from "react";
import JobApplicationForm from "./JobApplicationForm";

export default function JobCard({ job }) {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="bg-gradient-to-br from-white to-blue-50 border border-blue-200 rounded-xl p-6 shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 duration-300">
      <h2 className="text-xl font-bold text-blue-800 mb-1">{job.title}</h2>
      <p className="text-gray-600 mb-1">
        <span className="font-semibold">Company:</span> {job.company}
      </p>
      <p className="text-gray-600 mb-1">
        <span className="font-semibold">Location:</span> {job.location}
      </p>
      <p className="text-gray-600 mb-3">
        <span className="font-semibold">Salary:</span> {job.salary}/year
      </p>
      <p className="text-gray-700 mb-3">{job.description}</p>

      <div className="flex gap-2">
        <a
          href={`/jobs/${job.id}`}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          View Details
        </a>

        <button
          onClick={() => setShowForm((prev) => !prev)}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
        >
          {showForm ? "Cancel" : "Apply"}
        </button>
      </div>

      {showForm && (
        <div className="mt-4 border-t pt-4">
          <JobApplicationForm jobId={job.id} />
        </div>
      )}
    </div>
  );
}
