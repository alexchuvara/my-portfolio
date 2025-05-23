import { Link, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"

function Navbar() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const links = [
        { to: "/", label: "Home" },
        { to: "/about", label: "About" },
        { to: "/projects", label: "Projects" },
        { to: "/skills", label: "Skills" },
        { to: "/contact", label: "Contact" },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 text-black dark:text-white shadow-md transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 flex justify-between items-center h-20">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-2">
                    <img src="/src/assets/logo.png" alt="Logo" className="w-12 h-12 md:w-14 md:h-14" />
                </Link>

                {/* Desktop Nav */}
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

                {/* Theme toggle & Burger */}
                <div className="flex items-center space-x-4">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition md:ml-6"
                        aria-label="Toggle Theme"
                    >
                        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                    </button>

                    {/* Burger icon */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.nav
                        className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 px-4 py-6 space-y-4 text-center"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {links.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                onClick={() => setIsMenuOpen(false)}
                                className={`block text-lg font-medium hover:text-blue-500 transition ${location.pathname === link.to ? "text-blue-500" : ""}`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </motion.nav>
                )}
            </AnimatePresence>

        </header>
    );
}

export default Navbar;
