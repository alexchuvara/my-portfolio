import { motion } from "framer-motion";

const projects = [
    {
        title: "Portfolio Website",
        image: "/src/assets/projects/portfolio.jpg",
        description: "The site you're browsing now – built with React, Tailwind CSS, and Framer Motion.",
        tech: ["React", "Tailwind", "Framer Motion"],
        live: "#",
        github: "#",
    },
    {
        title: "Weather App",
        image: "/src/assets/projects/weather.jpg",
        description: "A responsive weather app with OpenWeatherMap API and dynamic backgrounds.",
        tech: ["HTML", "CSS", "JavaScript"],
        live: "#",
        github: "#",
    },
    {
        title: "To-Do List",
        image: "/src/assets/projects/todo.jpg",
        description: "Minimalistic to-do list with localStorage saving and dynamic filtering.",
        tech: ["React", "SCSS"],
        live: "#",
        github: "#",
    },
];

function Projects() {
    return (
        <section className="min-h-screen px-6 py-20 bg-white dark:bg-gray-900 text-black dark:text-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Projects</h2>

                <div className="grid gap-10 md:grid-cols-2">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="p-6 rounded-xl bg-gray-100 dark:bg-gray-800 shadow-lg flex flex-col justify-between transition hover:shadow-xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                        >
                            {/* Image */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="mb-4 rounded-lg object-cover w-full h-40 hover:scale-105 transition-transform duration-300"
                            />

                            {/* Text Content */}
                            <div>
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                                <ul className="flex flex-wrap gap-2 text-xs mb-4">
                                    {project.tech.map((tech, i) => (
                                        <li
                                            key={i}
                                            classname="bg-blue-500 text-white px-2 py-1 rounded"
                                        >
                                            {tech}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Buttons */}
                            <div className="flex space-x-4 mt-4">
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                                >
                                    Live
                                </a>
                                <a
                                    href="{project.github}"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
                                >
                                    GitHub
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;