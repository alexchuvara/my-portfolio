import { FaGithub, FaLinkedin, FaTelegram, FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

function Contact() {
    return (
        <section className="min-h-screen px-6 py-20 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md text-black dark:text-white">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Me</h2>
                <p className="mb-10 text-gray-700 dark:text-gray-300">
                    Want to work together, ask something or just say hi? Drop a message below 👇
                </p>

                {/* Contact Form */}
                <form action="https://formspree.io/f/mdkgpknj" method="POST" className="grid grid-cols-1 gap-6 max-w-2xl mx-auto">
                    <input
                        name="name"
                        type="text"
                        placeholder="Your Name"
                        required
                        className="p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-white"
                    />
                    <input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        required
                        className="p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-white"
                    />
                    <textarea
                        name="message"
                        rows="5"
                        placeholder="Your Message"
                        required
                        className="p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-white"
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white font-semibold py-3 rounded hover:bg-blue-600 transition"
                    >
                        Send Message
                    </button>
                </form>

                <div className="mt-16 space-y-2 text-center text-sm text-gray-600 dark:text-gray-400">
                    <p>Email: <a href="mailto:chuvara.dev@gmail.com" className="hover:text-blue-500">alex.chuvara@gmail.com</a></p>
                    <p>Location: Glasgow, United Kingdom</p>
                    <p>Phone: <a href="tel:+447912345678" className="hover:text-blue-500">+44 7393 411 835</a></p>
                </div>


                {/* Social Links */}
                <div className="mt-12 flex justify-center flex-wrap gap-6 text-3xl sm:text-4xl">
                    <a href="https://github.com/alexchuvara" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="hover:scale-110 hover:text-blue-500 transition-transform duration-200">
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com/in/oleksandrchuvara" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="hover:scale-110 hover:text-blue-500 transition-transform duration-200">
                        <FaLinkedin />
                    </a>
                    <a href="https://t.me/alexchuvara" aria-label="Telegram" target="_blank" rel="noopener noreferrer" className="hover:scale-110 hover:text-blue-500 transition-transform duration-200">
                        <FaTelegram />
                    </a>
                    <a href="https://instagram.com/alexchuvara" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="hover:scale-110 hover:text-pink-500 transition-transform duration-200">
                        <FaInstagram />
                    </a>
                    <a href="https://facebook.com/oleksandr.chuvara" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="hover:scale-110 hover:text-blue-600 transition-transform duration-200">
                        <FaFacebook />
                    </a>
                    <a href="https://wa.me/447393411835" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer" className="hover:scale-110 hover:text-green-500 transition-transform duration-200">
                        <FaWhatsapp />
                    </a>
                </div>

            </div>
        </section>
    );
}

export default Contact;
