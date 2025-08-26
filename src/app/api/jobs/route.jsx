// src/app/api/jobs/route.jsx
import { NextResponse } from "next/server";
import { jobsData } from "@/lib/jobs";

export async function GET(req) {
  const { searchParams } = new URL(req.url);

  const title = searchParams.get("title")?.toLowerCase() || "";
  const location = searchParams.get("location")?.toLowerCase() || "";

  const filteredJobs = jobsData.filter(
    (job) =>
      job.title.toLowerCase().includes(title) &&
      job.location.toLowerCase().includes(location)
  );

  return NextResponse.json(filteredJobs);
}
