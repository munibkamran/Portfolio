import { ArrowRight, ArrowUpRight } from "lucide-react";
import React from "react";
import { AnimatedBorderButton } from "../../components/AnimatedBorderButton";

const Projects = () => {
  const projects = [
    {
      title: "Nike Landing Page",
      description:
        "A modern and responsive e-commerce landing page featuring a dynamic product slider and clean UI/UX, built to showcase high-quality footwear collections.",
      image: "/projects/nike-pic-front.png",
      tags: ["React", "Tailwind CSS", "Vite"],
      link: "https://nike-app-khaki-one.vercel.app/",
      github: "https://github.com/munibkamran/Nike",
    },
    {
      title: "Chat - Application",
      description:
        "A full-featured e-commerce solution with inventory management, payment processing, and analytics dashboard.",
      image: "/projects/chat-app.png",
      tags: [ "React", "Vite", "Firebase"],
      link: "https://chattly-app.netlify.app/",
      github: "https://github.com/munibkamran/chat-app",
    },
    {
      title: "Weather App with Glassmorphism",
      description:
        "A real-time weather application that provides accurate weather data and forecasts with a modern glassmorphic user interface.",
      image: "/projects/weather-app.png",
      tags: ["React", "Vite", "OpenWeatherMap API"],
      link: "https://weather-react-munib.netlify.app/",
      github: "https://github.com/munibkamran/Weather_React_App",
    },
    {
      title: "Finexy - E-commerce Admin Dashboard",
      description:
        "A comprehensive E-commerce admin dashboard featuring real-time data visualization, transaction tracking, dynamic charts, and interactive user management with a modern dark-themed user interface.",
      image: "/projects/dashboard.png",
      tags: ["React", "Tailwind CSS", "Recharts"],
      link: "https://dashboard-app-mocha-eight.vercel.app/",
      github: "https://github.com/munibkamran/Dashboard-app",
    },
  ];

  return (
    <section id="projects" className="py-19 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
          font-medium  tracking-wider uppercase animate-fade-in"
          >
            Featured Work
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mt-4 animate-fade-in
          animation-delay-100 text-secondary-foreground"
          >
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              onClick={() => Link()}
              key={index}
              className="group glass rounded-2xl overflow-hidden animate-fade-in
            md:row-span-1"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform
                duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t
                from-card via-card/50 to-transparent opacity-60"
                />

                <div
                  className="absolute inset-0 flex justify-center items-center
               gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary-foreground transition-all"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary-foreground transition-all"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3
                    className="text-xl font-semibold
                  group-hover:text-primary transition-colors"
                  >
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-col space-y-2 sm:flex-row items-center sm:justify-between flex-wrap">
                  <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-4 py-1.5 rounded-full
                    bg-surface text-xs font-medium border border-border/50
                    text-muted-foreground hover:border-primary/50 hover:text-primary
                    transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row w-full sm:w-auto items-center justify-between gap-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-transparent border-gray-700 border hover:border-primary text-sm hover:text-primary px-4 py-2 rounded-full font-medium transition-all duration-300
                      w-full sm:w-auto text-center"
                    >
                      Live Demo
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-gray-700 text-sm hover:text-primary px-3 py-2 rounded-full transition-all 
                      duration-300 hover:border-primary w-full sm:w-auto text-center"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};

export default Projects;
