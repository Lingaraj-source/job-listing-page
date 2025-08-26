// src/app/layout.jsx
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Job Portal",
  description: "Find your dream job",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
