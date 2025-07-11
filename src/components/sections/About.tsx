"use client";

import Animate from "@/components/ui/Animate";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center pt-16"
    >
      <div className="container mx-auto text-center px-4">
        <Animate delay={0.1}>
          <h2 className="text-4xl font-bold mb-4">Hi, I'm Sahil Jhajharia</h2>
        </Animate>

        <Animate delay={0.2}>
          <p className="text-xl mb-8 text-blue-600 font-medium">
            Software Developer | Full-Stack Specialist
          </p>
        </Animate>

        <Animate delay={0.3}>
          <p className="max-w-2xl mx-auto text-lg">
            I'm a passionate software developer specializing in full-stack
            development, with expertise in building scalable web applications
            using modern frameworks like Next.js and Express.js. Based in India,
            I thrive on collaborating with teams to deliver innovative
            solutions.
          </p>
        </Animate>
      </div>
    </section>
  );
};

export default About;
