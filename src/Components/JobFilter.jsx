"use client";

export default function JobFilter({ filters, setFilters, onSubmit }) {
  const handleChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="bg-white p-4 rounded-xl shadow-md flex flex-col md:flex-row gap-4 mb-6 items-center justify-center"
    >
      <select
        value={filters.title}
        onChange={(e) => handleChange("title", e.target.value)}
        className="border p-2 rounded focus:ring-2 focus:ring-blue-400"
      >
        <option value="">Select Title</option>
        <option value="Frontend Developer">Frontend Developer</option>
        <option value="Backend Developer">Backend Developer</option>
        <option value="Fullstack Developer">Fullstack Developer</option>
        <option value="UI/UX Designer">UI/UX Designer</option>
        <option value="DevOps Engineer">DevOps Engineer</option>
      </select>

      <select
        value={filters.location}
        onChange={(e) => handleChange("location", e.target.value)}
        className="border p-2 rounded focus:ring-2 focus:ring-blue-400"
      >
        <option value="">Select Location</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Delhi">Delhi</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Pune">Pune</option>
      </select>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Filter
      </button>
    </form>
  );
}
