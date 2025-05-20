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
                    <p>Hello! I'm <span className="font-semibold">Oleksandr Chuvara</span> — a Front-End Developer originally from Ukraine, now based in the UK.</p>
                    <p> After years of leadership in the hospitality industry, I discovered my true passion lies in technology and creation. Backed by formal training in Software Development and strong self-driven learning, I'm building solid foundations with React, JavaScript, and modern tools like Tailwind CSS and Framer Motion.</p>
                    <p>My long-term goal is to work remotely as a developer, build a tech business, and create digital products that make a difference. I believe in <span className="italic">discipline, consistency, and growth</span> — both personally and professionally.</p>
                    <p>When I’m not coding, you’ll find me training at the gym, organizing systems in Notion, or learning something new.</p>
                    {/* Hello! I’m Oleksandr Chuvara — a Front-End Developer with a strong foundation in HTML, CSS, JavaScript, React, and modern UI frameworks like Tailwind CSS and Framer Motion.

                    I come from a leadership background in the hospitality industry, where I developed high-level skills in communication, decision-making, and team management — all of which now support my transition into tech.

                    My technical journey is backed by formal Software Developer education, as well as hands-on project building and continuous learning through platforms like freeCodeCamp. I value clean, scalable code and take pride in writing solutions that are thoughtful and user-focused.

                    My long-term goal is to work remotely in a high-impact dev team, eventually building my own tech business and digital products. I thrive on discipline, personal growth, and organized systems — which I track and refine daily in Notion.

                    When I’m not coding, I’m training at the gym, exploring new tools, or refining my personal workflow systems. */}
                </motion.div>
            </div>
        </section>
    );
}

export default About;