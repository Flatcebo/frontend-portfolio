"use client";

export default function Contact() {
  return (
    <div className="py-20 bg-gray-800 text-white">
      <h2 className="text-3xl font-bold text-center mb-10">Get in Touch</h2>
      <form className="max-w-md mx-auto">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-4 mb-4 rounded bg-gray-700 text-white"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-4 mb-4 rounded bg-gray-700 text-white"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-4 mb-4 rounded bg-gray-700 text-white"
        ></textarea>
        <button className="w-full bg-blue-500 p-4 rounded hover:bg-blue-600 transition">
          Send Message
        </button>
      </form>
      <div className="text-center mt-8">
        <p>Or reach out via social media:</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-blue-400">
            Twitter
          </a>
          <a href="#" className="text-blue-400">
            LinkedIn
          </a>
          <a href="#" className="text-blue-400">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
