import React, { useState } from "react";
import { FaFilter, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import thumbnail from "../assets/thumbnail.jpg";

const projectsData = [
  {
    id: 1,
    title: "Task Management App",
    category: "Web Apps",
    techStack: ["React", "Tailwind", "Firebase"],
    description:
      "Full-stack task management application with real-time collaboration features.",
    thumbnail: "/api/placeholder/400/300",
    demoLink: "https://task-app-demo.vercel.app",
    githubLink: "https://github.com/yourusername/task-app",
  },
  {
    id: 2,
    title: "Weather Forecast Dashboard",
    category: "Personal Projects",
    techStack: ["React", "OpenWeatherAPI", "ChartJS"],
    description:
      "Interactive weather dashboard with detailed forecasts and data visualization.",
    thumbnail: "/api/placeholder/400/300",
    demoLink: "https://weather-dashboard.netlify.app",
    githubLink: "https://github.com/yourusername/weather-dashboard",
  },
  {
    id: 3,
    title: "Portfolio Website",
    category: "Web Apps",
    techStack: ["React", "Tailwind", "Framer Motion"],
    description:
      "Responsive personal portfolio with smooth animations and modern design.",
    thumbnail: "/api/placeholder/400/300",
    demoLink: "https://yourportfolio.vercel.app",
    githubLink: "https://github.com/yourusername/portfolio",
  },
];

const App = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-teal-500 to-gray-500">
      <ProjectsSection />
    </div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105">
      <img
        src={thumbnail}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6 bg-gradient-to-br from-teal-100 via-white to-blue-100">
        <h3 className="text-2xl font-bold mb-2 text-blue-700">
          {project.title}
        </h3>
        <p className="text-gray-700 mb-4">{project.description}</p>

        <div className="flex items-center flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="bg-teal-200 text-teal-900 text-sm px-3 py-1 rounded-full shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-teal-400 text-black font-semibold rounded-lg hover:bg-teal-500 transition-transform transform hover:scale-105"
          >
            <FaExternalLinkAlt className="mr-2" /> Live Demo
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition-transform transform hover:scale-105"
          >
            <FaGithub className="mr-2" /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTechStack, setSelectedTechStack] = useState("All");

  const categories = ["All", ...new Set(projectsData.map((p) => p.category))];
  const techStacks = [
    "All",
    ...new Set(projectsData.flatMap((p) => p.techStack)),
  ];

  const filteredProjects = projectsData.filter(
    (project) =>
      (selectedCategory === "All" || project.category === selectedCategory) &&
      (selectedTechStack === "All" ||
        project.techStack.includes(selectedTechStack))
  );

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          My Projects
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
          <div className="flex items-center gap-2">
          <h2 className="text-gray-100">Type</h2>
            <FaFilter className="w-5 h-5 text-white" />
            
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-teal-300 text-teal-900 border-none rounded-lg px-4 py-2 focus:outline-none"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2">
          <h2 className="text-gray-100">Technologies</h2>

            <FaFilter className="w-5 h-5 text-white" />
            <select
              value={selectedTechStack}
              onChange={(e) => setSelectedTechStack(e.target.value)}
              className="bg-blue-300 text-blue-900 border-none rounded-lg px-4 py-2 focus:outline-none"
            >
              {techStacks.map((tech) => (
                <option key={tech} value={tech}>
                  {tech}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default App;
