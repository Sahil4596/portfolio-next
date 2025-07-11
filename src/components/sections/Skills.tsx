"use client";

import Animate from "@/components/ui/Animate";

const skills = [
  "Python",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Express.js",
  "MySQL",
  "PostgreSQL",
  "Git",
  "Docker",
  "AWS",
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <Animate>
          <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        </Animate>

        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <Animate
              key={skill}
              delay={0.05 * index}
              whileHover={{ scale: 1.1 }}
              className="origin-center"
            >
              <div className="bg-blue-600 text-white px-5 py-2.5 rounded-full font-medium shadow-md transition-all duration-300 hover:bg-blue-700 hover:shadow-lg">
                {skill}
              </div>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
