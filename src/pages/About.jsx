import { section } from "framer-motion/client";
import aboutImg from "../assets/about.jpg";
import { motion } from "framer-motion";


function About() {
    return (
        <section className="min-h-screen px-6 py-20 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md text-black dark:text-white">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
                { /* Image */}
                <motion.div
                    className="w-full md:w-1/2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <img
                        src={aboutImg}
                        alt="Oleksandr Chuvara"
                        className="rounded-lg shadow-lg object-cover w-full h-auto"
                    />
                </motion.div>

                {/* Text */}
                <motion.div
                    className="w-full md:w-1/2 space-y-4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                    <p>Hello! I'm <span className="font-semibold">Oleksandr Chuvara</span> — a Software Engineer with a strong foundation in JavaScript, React, and modern web technologies.</p>
                    <p>I come from a leadership background in the hospitality industry, where I developed high-level skills in communication, decision-making, and team management — all of which I now apply to software development.</p>
                    <p>My technical journey is backed by formal Software Development education, as well as hands-on project building and continuous learning.</p>
                    <p>My long-term goal is to work remotely in a high-impact team, building scalable digital products and eventually creating my own tech-driven business.</p>
                    <p>When I&apos;m not coding, you&apos;ll find me training at the gym, exploring new tools, or refining my personal workflow systems.</p>
                </motion.div>
            </div>
        </section>
    );
}

export default About;