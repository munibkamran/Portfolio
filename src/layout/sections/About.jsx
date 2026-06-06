import React from "react";
import { FiCode, FiFigma } from "react-icons/fi";
import { IoRocketOutline } from "react-icons/io5";
import { MdDevices } from "react-icons/md";
const About = () => {
  const highlights = [
    {
      icon: FiCode,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable, and reusable code that stands the test of time and follows best practices.",
    },
    {
      icon: IoRocketOutline,
      title: "Performance",
      description:
        "Optimizing assets and code for lightning-fast loading speeds and smooth user interactions.",
    },
    {
      icon: FiFigma,
      title: "Pixel Perfection",
      description:
        "Converting Figma designs into functional code with 100% accuracy in spacing, typography, and layout.",
    },
    {
      icon: MdDevices,
      title: "Responsive UI",
      description:
        "Ensuring a seamless and consistent user experience across all devices, from mobile screens to large desktops.",
    },
  ];
  return (
    <section id="about" className="py-26 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span
                className="text-secondary-foreground
            text-sm font-medium tracking-wider uppercase"
              >
                About Me
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold leading-tight
          animate-fade-in animation-delay-100 text-secondary-foreground"
            >
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>
            <div
              className="space-y-4 text-muted-foreground animate-fade-in
          animation-delay-200"
            >
              <p>
                I’m a passionate Frontend Developer with a focus on creating
                interactive and scalable web applications. My journey started
                with a curiosity for how things work on the web, and it has
                evolved into a deep expertise in modern frontend technologies.
              </p>
              <p>
                I specialize in React.js and Tailwind CSS, turning complex
                designs into pixel-perfect, high-performance reality. I believe
                in writing clean, maintainable code that provides a seamless
                user experience.
              </p>
            </div>
            <div className="glass rounded-2xl p-6 glow-border animate-fade-in
            animationdelay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to create digital experiences that are not just
                functional, but truly delightful — products that users love to
                use and developers love to maintain."
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
             {
              highlights.map((item, index) => (
                <div 
                key={index}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{animationDelay: `${(index + 1) * 100}ms`}}>
                <div className="w-12 h-12 rounded-xl bg-primary/10
                flex items-center justify-center md4
                 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary"/>
                </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))
             }
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
