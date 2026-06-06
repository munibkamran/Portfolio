import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaFigma } from "react-icons/fa";
import { RiFirebaseFill } from "react-icons/ri";
import { SiTailwindcss, SiJavascript, SiAxios, SiFramer } from "react-icons/si";
const Skills = () => {
  const skillList = [
    { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "Axios", icon: <SiAxios className="text-indigo-500" /> },
    { name: "Framer Motion", icon: <SiFramer className="text-pink-500" /> },
    { name: "Figma to Code", icon: <FaFigma className="text-purple-500" /> },
    { name: "Git & GitHub", icon: <FaGitAlt className="text-red-500" /> },
    { name: "Firebase", icon: <RiFirebaseFill className="text-yellow-500" /> },

  ];
  return (
    <section id="skills" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-primary">
          Technical <span className="font-serif italic text-white">Arsenal</span>
        </h2>
        <p className="text-muted-foreground">
          The tools and technologies I use to bring ideas to life.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {skillList.map((skill, index) => (
          <div
            key={index}
            className="glass p-6 rounded-2xl border border-white/5 flex flex-col items-center justify-center gap-4 
                       hover:border-primary/50   transition-all duration-300 group"
          >
            <div className="text-4xl group-hover:scale-110 transition-transform">
              {skill.icon}
            </div>
            <span className="font-medium text-sm text-gray-300">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
