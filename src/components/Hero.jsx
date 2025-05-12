import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import profile from "../assets/profile.jpg";

function Hero() {
    return (
        <section className="min-h-[100vh] flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-6 md:px-16 py-20 bg-white dark:bg-gray-900 transition-colors">
            {/* Left: Text */}
            <motion.div
                className="text-center md:text-left max-w-xl"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                    Hi, I'm Oleksandr Chuvara
                </h1>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-6">
                    Front-End Developer | Passionate about building modern, elegant web apps
                </p>
                <Link
                    to="/projects"
                    className="inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition"
                >
                    View My Projects
                </Link>
            </motion.div>

            {/* Right: Image */}
            <motion.div
                className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg border-4 border-blue-500"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
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