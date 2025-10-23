import { NextResponse } from "next/server";

export async function POST(req, { params }) {
  const { id } = params;
  const body = await req.json();

  // In real apps, you'd save this to a DB
  console.log("Application received for job:", id, body);

  return NextResponse.json({
    message: `Application submitted for job ${id}`,
    applicant: body,
  });
}
