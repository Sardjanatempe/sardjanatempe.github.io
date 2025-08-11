import TypeWriter from "./TypeWriter";

function Hero() {
  return (
    <div className="mt-10">
      <section className="relative h-[calc(100vh)] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?auto=format&fit=crop&q=80"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-blue-900/80 to-purple-900/90"></div>
        </div>

        <div className="flex flex-col items-center justify-center text-center w-full h-full relative z-10 text-white">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80"
              alt="Profile"
              className="relative rounded-full w-24 h-24 sm:w-32 sm:h-32 mb-4 border-2 border-white/50 shadow-lg transform hover:scale-105 transition-all duration-300 object-cover"
            />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 tracking-tight">
            Emil Abdul N
          </h1>
          <div className="h-8 mb-4">
            <TypeWriter
              texts={[
                "Full Stack Developer",
                "React Specialist",
                "TypeScript Enthusiast",
                "UI/UX Designer",
              ]}
              className="text-lg sm:text-xl opacity-90"
            />
          </div>
          <div className="flex gap-6">
            <a
              href="#"
              className="hover:text-blue-200 dark:hover:text-blue-300 transition-colors hover:scale-110 transform"
            >
              <i className="fab fa-github text-xl sm:text-2xl"></i>
            </a>
            <a
              href="#"
              className="hover:text-blue-200 dark:hover:text-blue-300 transition-colors hover:scale-110 transform"
            >
              <i className="fab fa-linkedin text-xl sm:text-2xl"></i>
            </a>
            <a
              href="#"
              className="hover:text-blue-200 dark:hover:text-blue-300 transition-colors hover:scale-110 transform"
            >
              <i className="fab fa-twitter text-xl sm:text-2xl"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
