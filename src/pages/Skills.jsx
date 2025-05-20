import { motion } from "framer-motion";
import { span } from "framer-motion/client";

const skills = [
    { name: "HTML5", icon: "devicon-html5-plain colored" },
    { name: "CSS3", icon: "devicon-css3-plain colored" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored" },
    { name: "React.js", icon: "devicon-react-original colored" },
    { name: "TypeScript", icon: "devicon-typescript-plain colored" },
    { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
    { name: "SCSS", icon: "devicon-sass-original colored" },
    { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
    { name: "Git", icon: "devicon-git-plain colored" },
    { name: "GitHub", icon: "devicon-github-original colored" },
    { name: "npm", icon: "devicon-npm-original-wordmark colored" },
    { name: "Vite", icon: "vite-local" },
];

function Skills() {
    return (
        <section className="min-h-screen px-6 py-20 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md text-black dark:text-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Skills</h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="text-center p-4 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-md hover:shadow-lg transition flex flex-col items-center gap-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                        >
                            {skill.icon === "vite-local" ? (
                                <img
                                    src="/src/assets/vite.svg"
                                    alt="Vite"
                                    className="w-10 h-10"
                                />
                            ) : (
                                <i className={`${skill.icon} text-4xl`}></i>
                            )}
                            <span className="font-medium">{skill.name}</span>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Skills;