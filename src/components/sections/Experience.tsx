"use client";

import Animate from "@/components/ui/Animate";

const experience = {
  company: "TripJack",
  role: "Software Developer Intern",
  period: "July 2025 - Present ",
  achievements: [
    "Sharpen my knowledge in avaiation industry and changes it faces.",
   
  ],
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 md:py-32 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Animate>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-thin text-center mb-10 sm:mb-16 md:mb-20 text-white tracking-tight">
            Work Experience
          </h2>
        </Animate>

        <div className="max-w-full sm:max-w-3xl md:max-w-5xl mx-auto">
          <Animate delay={0.2}>
            <div className="relative bg-gradient-to-br from-[#1e1e1e] to-[#0a0a0a] p-4 sm:p-8 md:p-12 rounded-xl sm:rounded-2xl shadow-[0_0_60px_-15px_rgba(161,116,255,0.2)] border border-[#2a2a2a]">
              <div className="absolute -left-1 top-6 h-[calc(100%-3rem)] w-1 rounded-full bg-gradient-to-b from-[#a174ff] via-[#5b42f3] to-[#00d1ff] hidden sm:block"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 sm:mb-10 pl-0 sm:pl-8">
                <div>
                  <h3 className="text-xl sm:text-2xl font-light text-white tracking-tight">
                    {experience.role}
                  </h3>
                  <p className="text-lg sm:text-xl text-[#a174ff] mt-1">
                    {experience.company}
                  </p>
                </div>
                <span className="text-base sm:text-lg text-[#a2a2a5] font-light mt-4 md:mt-0">
                  {experience.period}
                </span>
              </div>

              <ul className="space-y-4 sm:space-y-5 pl-4 sm:pl-8">
                {experience.achievements.map((item, index) => (
                  <Animate key={index} delay={0.3 + index * 0.1} direction="left">
                    <li className="flex items-start">
                      <span className="mr-3 sm:mr-4 mt-1.5 w-2 h-2 rounded-full bg-[#a174ff]"></span>
                      <p className="text-base sm:text-lg text-[#a2a2a5] tracking-wide">{item}</p>
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
