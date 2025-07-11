"use client";

import Animate from "@/components/ui/Animate";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center pt-16 bg-black"
    >
      <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
        <Animate delay={0.1}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white tracking-tight">
            Hi, I&apos;m Sahil Jhajharia
          </h2>
          <div className="mx-auto w-32 sm:w-48 h-0.5 mt-6 mb-8 bg-gradient-to-r from-transparent via-[#a174ff] to-transparent" />
        </Animate>

        <Animate delay={0.2}>
          <p className="text-xl sm:text-2xl md:text-3xl mb-8 sm:mb-10 font-light text-[#a2a2a5] tracking-wide">
            Software Developer · Full-Stack Specialist
          </p>
        </Animate>

        <Animate delay={0.3}>
          <p className="max-w-md sm:max-w-xl md:max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-[#a2a2a5] tracking-normal leading-relaxed">
            I&apos;m a passionate software developer specializing in full-stack
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