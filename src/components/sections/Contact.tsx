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
    link: "https://www.linkedin.com/in/sahilraj-3966",
    icon: "👔",
  },
  {
    label: "GitHub",
    value: "Sahil4596",
    link: "https://github.com/Sahil4596",
    icon: "💻",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <Animate>
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
        </Animate>

        <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <ul className="space-y-6">
            {contactInfo.map((item, index) => (
              <Animate key={index} delay={0.1 * index} direction="right">
                <li className="flex items-center">
                  <span className="text-2xl mr-4">{item.icon}</span>
                  <div>
                    <p className="font-medium text-gray-600 dark:text-gray-300">
                      {item.label}
                    </p>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {item.value}
                    </a>
                  </div>
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
