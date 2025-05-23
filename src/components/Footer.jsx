import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 py-8">
            <div className="max-w-6xl mx-auto px-4 flex flex-col items-center space-y-4 text-center text-sm">
                {/* Logo */}
                <Link to="/">
                    <img
                        src={logo}
                        alt="Oleksandr Chuvara Logo"
                        className="w-14 h-14 hover:opacity-80 transition"
                    />
                </Link>

                {/* Copyright */}
                <p>© {new Date().getFullYear()} Oleksandr Chuvara.  All rights reserved.</p>

                {/* Built With */}
                <p className="mt-2">
                    Built with <span className="text-blue-500">React</span> & <span className="text-blue-500">Tailwind CSS</span>
                </p>
            </div>
        </footer>
    );
}

export default Footer;