import { section } from "framer-motion/client";
import aboutImg from "../assets/about.jpg";
import { motion } from "framer-motion";


function About() {
    return (
        <section className="min-h-screen px-6 py-20 bg-white dark:bg-gray-900 text-black dark:text-white">
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
                    <p>Hello! I'm <span className="font-semibold">Oleksandr Chuvara</span> — a self-taught Front-End Developer originally from Ukraine, now based in the UK.</p>
                    <p> After years of leadership in the hospitality industry, I realized my true passion lies in technology and creation. I'm currently transitioning into tech, building strong foundations with React, JavaScript, and modern tools like Tailwind CSS and Framer Motion.</p>
                    <p>My long-term goal is to work remotely as a developer, build a tech business, and create digital products that make a difference. I believe in <span className="italic">discipline, consistency, and growth</span> — both personally and professionally.</p>
                    When I’m not coding, you’ll find me training at the gym, setting goals in Notion, or learning something new.
                </motion.div>
            </div>
        </section>
    );
}

export default About;