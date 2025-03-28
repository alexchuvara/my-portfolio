function Hero() {
    return (
        <section className="flex flex-col items-center justify-center h-screen text-center px-6">
            <h1 className="text-5xl font-bold">Hi, I'm Alex Chuvara</h1>
            <p className="text-lg text-gray-400 mt-4">
                Front-End Developer | Passionate about Web Technologies 🚀
            </p>
            <a
                href="#projects"
                className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition"
            >
                View My Work
            </a>
        </section>
    );
}

export default Hero;
