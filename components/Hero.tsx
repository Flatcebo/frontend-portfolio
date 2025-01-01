"use client";

export default function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-b flex items-center justify-center text-center text-white relative">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Hi, I'm [Your Name]
        </h1>
        <p className="text-lg md:text-xl mb-8">
          I’m a passionate frontend developer who creates modern, responsive,
          and user-friendly websites.
        </p>
        <button className="bg-[#efeff3] px-6 py-3 rounded-md text-lg font-semibold hover:bg-[#5c5c5c] transition">
          See My Work
        </button>
      </div>
    </div>
  );
}
