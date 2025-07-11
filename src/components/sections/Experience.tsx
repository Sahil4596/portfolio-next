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
    <section id="experience" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <Animate>
          <h2 className="text-3xl font-bold text-center mb-12">
            Work Experience
          </h2>
        </Animate>

        <Animate delay={0.2}>
          <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">
                {experience.role} - {experience.company}
              </h3>
              <span className="text-blue-600 dark:text-blue-400 font-medium mt-2 md:mt-0">
                {experience.period}
              </span>
            </div>

            <ul className="space-y-3">
              {experience.achievements.map((item, index) => (
                <Animate key={index} delay={0.3 + index * 0.1} direction="left">
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">
                      •
                    </span>
                    <p>{item}</p>
                  </li>
                </Animate>
              ))}
            </ul>
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default Experience;
