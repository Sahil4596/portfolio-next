"use client";

import Animate from "@/components/ui/Animate";

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-16 bg-black">
      <div className="container mx-auto text-center px-4">
        <Animate delay={0.1}>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white tracking-tight">
            Hi, I&apos;m Sahil Jhajharia
          </h2>
          <div className="mx-auto w-48 h-0.5 mt-6 mb-8 bg-gradient-to-r from-transparent via-[#a174ff] to-transparent" />
        </Animate>

        <Animate delay={0.2}>
          <p className="text-2xl md:text-3xl mb-10 font-light text-[#a2a2a5] tracking-wide">
            Software Developer · Full-Stack Specialist
          </p>
        </Animate>

        <Animate delay={0.3}>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-[#a2a2a5] tracking-normal leading-relaxed">
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