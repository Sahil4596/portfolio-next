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
    <section id="skills" className="py-20 sm:py-28 md:py-32 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Animate>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-thin text-center mb-10 sm:mb-16 md:mb-20 text-white tracking-tight">
            Skills
          </h2>
        </Animate>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <Animate
              key={skill}
              delay={0.05 * index}
              whileHover={{ scale: 1.05 }}
              className="origin-center"
            >
              <div className="bg-[#0f0f0f] text-[#a2a2a5] px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-light tracking-wide border border-[#2a2a2a] shadow-[0_0_15px_-5px_rgba(161,116,255,0.1)] hover:border-[#3a3a3a] hover:text-white hover:shadow-[0_0_20px_-5px_rgba(161,116,255,0.3)] transition-all duration-500 text-base sm:text-lg">
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