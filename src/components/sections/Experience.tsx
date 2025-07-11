"use client";

import Animate from "@/components/ui/Animate";

const experience = {
  company: "SoftScript Technologies Pvt Ltd",
  role: "Software Developer",
  period: "July 2024 - Present",
  achievements: [
    "Developed a robust admin panel using Next.js with SSR and SSG, improving performance by 40%.",
    "Optimized MySQL database schema for faster query responses and better data organization.",
    "Built scalable RESTful APIs with Express.js, ensuring clear documentation for team collaboration.",
    "Collaborated with cross-functional teams for seamless integration and timely project delivery.",
  ],
};

const Experience = () => {
  return (
    <section id="experience" className="py-32 bg-black">
      <div className="container mx-auto px-4">
        <Animate>
          <h2 className="text-5xl font-thin text-center mb-20 text-white tracking-tight">
            Work Experience
          </h2>
        </Animate>

        <div className="max-w-5xl mx-auto">
          <Animate delay={0.2}>
            <div className="relative bg-gradient-to-br from-[#1e1e1e] to-[#0a0a0a] p-12 rounded-2xl shadow-[0_0_60px_-15px_rgba(161,116,255,0.2)] border border-[#2a2a2a]">
              <div className="absolute -left-1 top-6 h-[calc(100%-3rem)] w-1 rounded-full bg-gradient-to-b from-[#a174ff] via-[#5b42f3] to-[#00d1ff]"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 pl-8">
                <div>
                  <h3 className="text-2xl font-light text-white tracking-tight">
                    {experience.role}
                  </h3>
                  <p className="text-xl text-[#a174ff] mt-1">
                    {experience.company}
                  </p>
                </div>
                <span className="text-lg text-[#a2a2a5] font-light mt-4 md:mt-0">
                  {experience.period}
                </span>
              </div>

              <ul className="space-y-5 pl-8">
                {experience.achievements.map((item, index) => (
                  <Animate key={index} delay={0.3 + index * 0.1} direction="left">
                    <li className="flex items-start">
                      <span className="mr-4 mt-1.5 w-2 h-2 rounded-full bg-[#a174ff]"></span>
                      <p className="text-lg text-[#a2a2a5] tracking-wide">{item}</p>
                    </li>
                  </Animate>
                ))}
              </ul>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default Experience;