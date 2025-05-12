import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react";

function Navbar() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const location = useLocation();

    const links = [
        { to: "/", label: "Home" },
        { to: "/about", label: "About" },
        { to: "/projects", label: "Projects" },
        { to: "/skills", label: "Skills" },
        { to: "/contact", label: "Contact" },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 text-black dark:text-white shadow-md transition-colors">
            <div className="mmax-w-7xl mx-auto px-4 sm:px-8 flex justify-between items-center h-20">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-2">
                    <img src="/src/assets/my-logo.png" alt="Logo" className="w-10 h-10 md:w-12 md:h-12" />
                </Link>

                {/* Nav links */}
                <nav className="hidden md:flex space-x-6 text-lg font-medium">
                    {links.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className={`hover:text-blue-500 transition ${location.pathname === link.to ? "text-blue-500" : ""
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Theme toggle */}
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition md:ml-6"
                    aria-label="Toggle Theme"
                >
                    {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                </button>
            </div>
        </header>
    );
}

export default Navbar;
