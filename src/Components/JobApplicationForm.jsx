// src/components/JobApplicationForm.jsx
"use client";
import { useState } from "react";

export default function JobApplicationForm({ jobId }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [resume, setResume] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Job ID:", jobId, { name, email, resume });
    // You can send data to /api/jobs/[id]/apply
    setSubmitted(true);
  };

  if (submitted) {
    return <p className="text-green-600 font-semibold">Application submitted!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded"
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 rounded"
        required
      />
      <input
        type="file"
        onChange={(e) => setResume(e.target.files[0])}
        className="border p-2 rounded"
      />
      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
      >
        Submit
      </button>
    </form>
  );
}
