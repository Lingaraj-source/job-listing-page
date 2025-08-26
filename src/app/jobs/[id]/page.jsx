// src/app/jobs/[id]/page.jsx
import { jobsData } from "@/lib/jobs";
import JobApplicationForm from "@/components/JobApplicationForm";

export default function JobDetailPage({ params }) {
  const job = jobsData.find((j) => j.id === parseInt(params.id));

  if (!job) return <p>Job not found</p>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold">{job.title}</h1>
      <p className="text-gray-600">{job.location}</p>
      <p className="mt-2">{job.description}</p>
      <JobApplicationForm />
    </div>
  );
}
