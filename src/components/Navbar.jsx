"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold hover:text-blue-200">
          JobPortal
        </Link>

        <ul className="flex gap-6">
          <li>
            <Link href="/" className="hover:text-blue-200 font-medium">
              Jobs
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-200 font-medium">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-200 font-medium">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
