function Intro() {
  return (
    <section className="bg-[#222831] relative w-full h-screen overflow-hidden select-none">

      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://www.pexels.com/download/video/5319099/"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute inset-0 bg-[#222831]/60" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#EEEEEE] mb-6">
          Unleash Your Power
        </h1>

        <p className="max-w-2xl text-[#EEEEEE]/80 mb-8 text-base sm:text-lg">
          Power GYM is where discipline meets strength. Train smart, stay consistent,
          and build real power with us.
        </p>

        <a
          href="/login"
          className="bg-[#00ADB5] text-[#222831] px-8 py-3 rounded-lg font-semibold
                     hover:bg-[#EEEEEE] transition-colors duration-300"
        >
          Explore Now
        </a>
      </div>

    </section>
  );
}

export default Intro;
