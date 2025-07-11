"use client";

import Animate from "@/components/ui/Animate";

const projects = [
  {
    title: "Swatchh Bharat Abhiyaan DevOps Support",
    description:
      "Configured CI/CD pipelines using Jenkins and Docker, automating AWS deployments. Managed large-scale data (100,000+ records, 10M files) with PostgreSQL and implemented robust security measures.",
    tech: ["Linux", "Docker", "Jenkins", "AWS", "PostgreSQL"],
    link: "#",
  },
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
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <Animate>
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        </Animate>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Animate key={index} delay={0.1 * index} direction="up">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="mb-4 flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    className="text-blue-600 dark:text-blue-400 hover:underline mt-auto inline-block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project →
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
