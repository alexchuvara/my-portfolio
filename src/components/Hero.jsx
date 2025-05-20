import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import profile from "../assets/profile.jpg";
import { Typewriter } from "react-simple-typewriter";

const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, duration: 0.6 },
    }),
}

function Hero() {
    return (
        <section className="relative min-h-screen px-6 md:px-16 py-20 flex flex-col-reverse md:flex-row items-center justify-center gap-12 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md transition-colors">
            {/* Left: Text */}
            <motion.div
                className="text-center md:text-left max-w-xl space-y-4"
                initial="hidden"
                animate="visible"
                variants={textVariants}
            >
                <motion.h1
                    className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
                    variants={textVariants}
                    custom={1}
                >
                    Hi, I'm Oleksandr Chuvara
                </motion.h1>
                <motion.p
                    className="text-lg md:text-xl text-gray-600 dark:text-gray-400"
                    variants={textVariants}
                    custom={2}
                >
                    I'm a{" "}
                    <span className="text-blue-500 font-semibold">
                        <Typewriter
                            words={[
                                "Front-End Developer",
                                "React Enthusiast",
                                "CSS Architect",
                                "JavaScript Fan",
                                "Tech Dreamer"
                            ]}
                            loop={0}
                            cursor
                            cursorStyle="|"
                            typeSpeed={90}
                            deleteSpeed={70}
                            delaySpeed={1500}
                        />
                    </span>
                </motion.p>
                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-6"
                    variants={textVariants}
                    custom={3}
                >
                    <Link
                        to="/projects"
                        className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition"
                    >
                        View My Projects
                    </Link>
                    <a
                        href="/Oleksandr-Chuvara-CV.pdf"
                        download
                        className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg transition"
                    >
                        Download CV
                    </a>
                </motion.div>
            </motion.div>

            {/* Right: Image */}
            <motion.div
                className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl border-4 border-blue-500"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                <img
                    src={profile}
                    alt="Oleksandr Chuvara"
                    className="w-full h-full object-cover"
                />
            </motion.div>
        </section>
    );
}

export default Hero;