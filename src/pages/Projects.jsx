import React from 'react';
const projects = [
  {
    title: "AI Scam Detector",
    description: "Voice-based app detecting scam phrases using NLP.",
    tech: ["React Native", "Python", "Firebase"],
    github: "https://github.com/yourusername/scam-detector",
    live: "#",
  },
  {
    title: "RPG Creature Wiki",
    description: "Search-based creature encyclopedia using an external API.",
    tech: ["HTML", "JavaScript", "Fetch API"],
    github: "https://github.com/yourusername/rpg-creature-wiki",
    live: "#",
  },
  // Add more...
];

export default function Projects() {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-sm my-2">{project.description}</p>
            <div className="text-sm mb-2">
              {project.tech.map((tech, i) => (
                <span key={i} className="inline-block bg-blue-100 dark:bg-blue-900 px-2 py-1 mr-2 rounded">
                  {tech}
                </span>
              ))}
            </div>
            <a href={project.github} target="_blank" className="text-blue-600 dark:text-blue-400 underline">GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
}
