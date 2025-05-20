import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 py-8 border-t border-gray-200 dark:border-gray-700 text-center text-sm">
            <div className="max-w-6xl mx-auto px-4 flex flex-col items-center space-y-3">
                <Link to="/">
                    <img
                        src={logo}
                        alt="Oleksandr Chuvara Logo"
                        className="w-12 h-12"
                    />
                </Link>

                <p>© {new Date().getFullYear()} Oleksandr Chuvara.  All rights reserved.</p>
                <p className="mt-2">
                    Built with <span className="text-blue-500">React</span> & <span className="text-blue-500">Tailwind CSS</span>
                </p>
            </div>
        </footer>
    );
}

export default Footer;