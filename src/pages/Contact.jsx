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
                        className="p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-white"
                    />
                    <input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        className="p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-white"
                    />
                    <textarea
                        name="message"
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

                <div className="mt-16 space-y-2 text-center text-sm text-gray-600 dark:text-gray-400">
                    <p>Email: <a href="mailto:chuvara.dev@gmail.com" className="hover:text-blue-500">alex.chuvara@gmail.com</a></p>
                    <p>Location: Glasgow, United Kingdom</p>
                    <p>Phone: <a href="tel:+447912345678" className="hover:text-blue-500">+44 7393 411 835</a></p>
                </div>

                <div className="mt-16 w-full max-w-2xl mx-auto ">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d143322.27652516408!2d-4.397267453499022!3d55.85554270787956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488815562056ceeb%3A0x71e683b805ef511e!2sGlasgow!5e0!3m2!1sen!2suk!4v1747562574561!5m2!1sen!2suk"
                        width="400"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Map location"
                    >
                    </iframe>
                </div>

                {/* Social Links */}
                <div className="mt-12 flex justify-center space-x-6 text-2xl">
                    <a href="https://github.com/alexchuvara" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com/in/oleksandrchuvara" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
                        <FaLinkedin />
                    </a>
                    <a href="https://t.me/@alexchuvara" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
                        <FaTelegram />
                    </a>
                    <a href="https://instagram.com/@alexchuvara" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
                        <FaInstagram />
                    </a>
                    <a href="https://facebook.com/oleksandr.chuvara" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
                        <FaFacebook />
                    </a>
                    <a href="https://wa.me/447393411835" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">
                        <FaWhatsapp />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;
