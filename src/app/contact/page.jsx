// src/app/contact/page.jsx
export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 mt-10">
      <h1 className="text-4xl font-bold mb-4 text-blue-700">Contact Us</h1>
      <p className="text-gray-700 mb-4">
        Have any questions or need support? Reach out to us using the form
        below.
      </p>
      <form className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Your Name"
          className="border p-2 rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border p-2 rounded"
        />
        <textarea
          placeholder="Message"
          className="border p-2 rounded"
        ></textarea>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Send
        </button>
      </form>
    </div>
  );
}
