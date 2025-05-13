import { Github, Linkedin } from "lucide-react";

function Contact() {
    return (
        <section className="min-h-screen px-6 py-20 bg-white dark:bg-gray-900 text-black dark:text-white">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Me</h2>
                <p className="mb-10 text-gray-700 dark:text-gray-300">
                    Want to work together, ask something or just say hi? Drop a message below 👇
                </p>

                {/* Contact Form */}
                <form className="grid grid-cols-1 gap-6 max-w-2xl mx-auto">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-white"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-white"
                    />
                    <textarea
                        rows="5"
                        placeholder="Your Message"
                        className="p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-white"
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white font-semibold py-3 rounded hover:bg-blue-600 transition"
                    >
                        Send Message
                    </button>
                </form>

                {/* Social Links */}
                <div className="mt-12 flex justify-center space-x-6">
                    <a
                        href="https://github.com/alexchuvara"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-500 transition"
                        aria-label="GitHub"
                    >
                        <Github size={28} />
                    </a>
                    <a
                        href="https://linkedin.com/in/oleksandrchuvara"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-500 transition"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={28} />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;
