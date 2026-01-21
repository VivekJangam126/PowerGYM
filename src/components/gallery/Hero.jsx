import data from "./photos.json";

function Hero() {
  const images = data.images;

  return (
    <section className="relative w-screen min-h-screen overflow-hidden select-none bg-black">
      
      {/* IMAGE GRID */}
      <div
        className="absolute inset-0 grid grid-cols-12 grid-rows-3"
        style={{ gap: 0 }}
      >
        {images.map((img, idx) => (
          <div
            key={idx}
            className="overflow-hidden"
            style={{ gridColumn: img.col }}
          >
            <img
              src={img.url}
              alt={img.title || `Gallery ${idx + 1}`}
              className="w-full h-full object-cover
                         transition-transform duration-700
                         hover:scale-110"
            />
          </div>
        ))}
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* CENTER CONTENT */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-center px-6">
        <span className="text-red-600 font-semibold tracking-widest mb-4">
          OUR SPACE
        </span>

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Inside Power GYM
        </h1>

        <p className="max-w-2xl text-white/70 text-lg md:text-xl leading-relaxed">
          A glimpse into our training environment, equipment, and disciplined
          atmosphere designed for serious fitness progress.
        </p>
      </div>

    </section>
  );
}

export default Hero;
