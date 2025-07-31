"use client";

import Animate from "@/components/ui/Animate";

const projects = [
  
  {
    title: "Instant ML Deployment",
    description:
      "Developed a no-code platform for creating, training, and deploying ML models, integrating APIs for seamless data flow and real-time updates.",
    tech: ["React", "Node.js"],
    link: "#",
  },
  {
    title: "Nano Directional Antenna",
    description:
      "Researched and developed a nano-scale antenna during M.Tech thesis, optimizing signal directionality for next-gen communication.",
    tech: ["Research-based"],
    link: null,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 sm:py-28 md:py-32 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Animate>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-thin text-center mb-10 sm:mb-16 md:mb-20 text-white tracking-tight">
            Projects
          </h2>
        </Animate>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Animate key={index} delay={0.1 * index} direction="up">
              <div className="bg-gradient-to-br from-[#1e1e1e] to-[#0a0a0a] p-6 sm:p-8 rounded-2xl shadow-[0_0_40px_-10px_rgba(161,116,255,0.1)] border border-[#2a2a2a] h-full flex flex-col transition-all duration-500 hover:shadow-[0_0_60px_-15px_rgba(161,116,255,0.3)] hover:border-[#3a3a3a]">
                <h3 className="text-xl sm:text-2xl font-light mb-4 sm:mb-5 text-white tracking-tight">
                  {project.title}
                </h3>
                <p className="mb-4 sm:mb-6 flex-grow text-[#a2a2a5] tracking-wide leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1.5 rounded-full bg-[#1a1a1a] text-[#a2a2a5] border border-[#2a2a2a]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    className="text-white hover:text-[#a174ff] transition-colors duration-500 font-light text-lg inline-flex items-center group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                    <span className="ml-2 opacity-0 group-hover:opacity-100 group-hover:ml-3 transition-all duration-500">
                      →
                    </span>
                  </a>
                )}
              </div>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
