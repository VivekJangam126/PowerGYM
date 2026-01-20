function Intro() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black select-none">

      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://www.pexels.com/download/video/5319099/"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute inset-0 bg-black/50" />

     
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-wide">
          Unleash Your Power
        </h1>

        <p className="max-w-2xl text-white/70 mb-10 text-base sm:text-lg leading-relaxed">
          Power GYM is where discipline meets strength. Train with purpose,
          stay consistent, and build real power in a focused environment.
        </p>

        <a
          href="/contact"
          className="bg-red-600 text-white px-10 py-3 rounded font-semibold
                     hover:bg-red-700 transition duration-300"
        >
          Enquire Now
        </a>

      </div>

    </section>
  );
}

export default Intro;
