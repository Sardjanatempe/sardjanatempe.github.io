import TypeWriter from "./TypeWriter";

function Hero() {
  return (
    <div className="mt-10">
      <section className="relative h-[calc(75vh)] lg:h-[calc(70vh)] flex items-end overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/gila.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "scroll",
          }}
        >
          <div
            className="absolute inset-0 bg-gradient-to-br from-red-500 via-red-600 to-amber-900/95 opacity-55
                backdrop-blur-sm shadow-[inset_0_50px_120px_rgba(255,72,0,0.25)]"
          ></div>
        </div>

        <div className="flex flex-col items-center justify-center text-center w-full h-full relative z-10 text-white">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-200 to-red-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <img
              src="/gila.jpeg"
              alt="Profile"
              className="relative rounded-full w-48 h-48 sm:w-40 sm:h-40 mb-4 border-2 border-white/50 shadow-lg transform hover:scale-105 transition-all duration-300 object-cover"
            />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-500 animate-gradient-x">
            Sardjana Tempe
          </h1>
          <div className="h-8 mb-4">
            <TypeWriter
              texts={[
                "Makanan Enak",
                "Makanan Halal",
                "Makanan Sehat",
                "Makanan Terjamin",
              ]}
              className="text-lg sm:text-xl opacity-90"
            />
          </div>
          <p className="max-w-md mx-auto text-lg sm:text-xl text-center">
            Kami menawarkan aneka makanan nusantara yang enak, sehat, halal, dan
            terjamin kualitasnya untuk Anda.
          </p>
          <div className="flex gap-6 mt-6">
            <a
              href="#"
              className="hover:text-white dark:hover:text-white transition-colors hover:scale-110 transform"
            >
              <i className="fab fa-whatsapp text-xl sm:text-2xl"></i>
            </a>
            <a
              href="#"
              className="hover:text-white dark:hover:text-white transition-colors hover:scale-110 transform"
            >
              <i className="fab fa-instagram text-xl sm:text-2xl"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
