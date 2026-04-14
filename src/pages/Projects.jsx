import { motion } from "framer-motion";
import portfolioImg from "../assets/portfolio-preview.png";
import weatherImg from "../assets/weather-app-preview.png";
import todoImg from "../assets/todo-list-preview.png";


const projects = [
    {
        title: "Portfolio Website",
        image: portfolioImg,
        description: "Developed a responsive personal portfolio using React, Tailwind CSS, and Framer Motion. Implemented component-based architecture, smooth animations, and dynamic routing. Focused on clean UI, performance, and scalable structure.",
        tech: ["React", "JavaScript", "Tailwind CSS", "Framer Motion", "React Router"],
        live: "https://www.alex-chuvara.com/",
        github: "https://github.com/alexchuvara/my-portfolio.git",
    },
    {
        title: "Weather App",
        image: weatherImg,
        description: "Built a weather application using OpenWeatherMap API with dynamic data fetching and state management. Implemented API integration, error handling, and responsive UI with dynamic background changes based on weather conditions.",
        tech: ["React", "TypeScript", "REST API Integration", "Framer Motion",],
        live: "https://weather-app-cyan-five-72.vercel.app/",
        github: "https://github.com/alexchuvara/weather-app.git",
    },
    {
        title: "To-Do List",
        image: todoImg,
        description: "Developed a task management application with localStorage persistence and dynamic filtering. Implemented state management, CRUD operations, and optimized user interactions for a smooth UX.",
        tech: ["React", "JavaScript", "localStorage", "State Management"],
        live: "https://todo-app-bay-nu-16.vercel.app/",
        github: "https://github.com/alexchuvara/todo-app.git",
    },
];

function Projects() {
    return (
        <section className="min-h-screen px-6 py-20 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md text-black dark:text-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Projects</h2>

                <div className="grid gap-10 md:grid-cols-2">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="flex flex-col justify-between bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all"
                        >
                            {/* Image */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="mb-4 rounded-lg object-cover w-full aspect-video hover:scale-105 transition-transform duration-300"
                            />

                            {/* Text Content */}
                            <div>
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                                <ul className="flex flex-wrap gap-2 text-xs mb-4">
                                    {project.tech.map((tech, i) => (
                                        <li
                                            key={i}
                                            className="bg-blue-500 text-white px-2 py-1 rounded"
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
                                    href={project.github}
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