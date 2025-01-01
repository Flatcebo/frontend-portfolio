"use client";

export default function Timeline() {
  const events = [
    {
      year: "2022",
      title: "Frontend Developer at ABC Corp",
      description: "Developed modern web applications.",
    },
    {
      year: "2021",
      title: "Graduated from XYZ University",
      description: "Bachelor’s in Computer Science.",
    },
    {
      year: "2020",
      title: "Intern at DEF Company",
      description: "Worked on responsive UI design.",
    },
  ];

  return (
    <div className="py-20 bg-gray-none">
      <h2 className="text-3xl font-bold text-center mb-10">My Journey</h2>
      <div className="relative max-w-3xl mx-auto px-6">
        {events.map((event, index) => (
          <div key={index} className="flex items-center mb-10">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex-shrink-0"></div>
            <div className="ml-6">
              <h3 className="text-xl font-bold">{event.title}</h3>
              <span className="text-gray-500">{event.year}</span>
              <p className="text-gray-700">{event.description}</p>
            </div>
          </div>
        ))}
        <div className="absolute left-4 top-0 bottom-0 w-1 bg-blue-500"></div>
      </div>
    </div>
  );
}
