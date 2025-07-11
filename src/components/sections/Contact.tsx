"use client";

import Animate from "@/components/ui/Animate";

const contactInfo = [
  {
    label: "Email",
    value: "sahiljhajhariaj@gmail.com",
    link: "mailto:sahiljhajhariaj@gmail.com",
    icon: "✉️",
  },
  {
    label: "Phone",
    value: "+91-8949541361",
    link: "tel:+918949541361",
    icon: "📱",
  },
  {
    label: "LinkedIn",
    value: "sahilraj-3966",
    link: "[invalid url, do not cite]",
    icon: "👔",
  },
  {
    label: "GitHub",
    value: "Sahil4596",
    link: "[invalid url, do not cite]",
    icon: "💻",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 sm:py-28 md:py-32 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Animate>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-thin text-center mb-10 sm:mb-16 md:mb-20 text-white tracking-tight">
            Get in Touch
          </h2>
        </Animate>

        <div className="max-w-full sm:max-w-2xl mx-auto bg-gradient-to-br from-[#1e1e1e] to-[#0a0a0a] rounded-xl sm:rounded-2xl shadow-[0_0_60px_-15px_rgba(161,116,255,0.2)] p-4 sm:p-8 md:p-12 border border-[#2a2a2a]">
          <ul className="space-y-6 sm:space-y-8">
            {contactInfo.map((item, index) => (
              <Animate key={index} delay={0.1 * index} direction="right">
                <li className="flex flex-col sm:flex-row items-start sm:items-center group py-3 sm:py-4 border-b border-[#2a2a2a]">
                  <span className="text-2xl sm:text-3xl mr-0 sm:mr-6 mb-2 sm:mb-0 transition-all duration-500 group-hover:text-[#a174ff]">
                    {item.icon}
                  </span>
                  <div className="flex-1">
                    <p className="font-light text-[#a2a2a5] tracking-wide mb-1 text-base sm:text-lg">
                      {item.label}
                    </p>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg sm:text-2xl font-light text-white hover:text-[#a174ff] transition-colors duration-500 tracking-tight break-all"
                    >
                      {item.value}
                    </a>
                  </div>
                  <span className="text-lg sm:text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ml-0 sm:ml-4 mt-2 sm:mt-0">→</span>
                </li>
              </Animate>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;