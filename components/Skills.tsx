"use client";

export default function Skills() {
  const skills = [
    {name: "HTML", level: "90%"},
    {name: "CSS", level: "85%"},
    {name: "JavaScript", level: "80%"},
    {name: "React", level: "75%"},
  ];

  return (
    <div className="py-20 bg-gradient-to-r from-purple-500 to-blue-500 text-white">
      <h2 className="text-3xl font-bold text-center mb-10">My Skills</h2>
      <div className="max-w-4xl mx-auto px-6">
        {skills.map((skill, index) => (
          <div key={index} className="mb-6">
            <div className="flex justify-between mb-1">
              <span>{skill.name}</span>
              <span>{skill.level}</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-4">
              <div
                className="bg-blue-600 h-4 rounded-full"
                style={{width: skill.level}}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
