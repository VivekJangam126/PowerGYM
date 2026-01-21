function Hero() {
  const programIntro = [
    {
      title: "Structured Training",
      desc: "Well-planned workout programs with proper progression for safe and effective results.",
    },
    {
      title: "Goal-Oriented Programs",
      desc: "Focused programs for fat loss, muscle gain, strength building, and transformation.",
    },
    {
      title: "All Fitness Levels",
      desc: "Programs designed for beginners as well as advanced-level trainees.",
    },
    {
      title: "Expert Guidance",
      desc: "Designed by experienced trainers with emphasis on form, safety, and long-term growth.",
    },
  ];

  return (
    <section className="bg-black py-24 px-6 select-none">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <span className="text-red-600 font-semibold tracking-widest">
          PROGRAMS
        </span>
        <h2 className="text-4xl font-bold text-white mt-4 mb-6">
          How Our Programs Work
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto text-lg">
          Our training programs are structured to deliver real, measurable
          results while maintaining safety and consistency.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {programIntro.map((item, index) => (
          <div
            key={index}
            className="bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-6
                       hover:border-red-600 hover:-translate-y-2
                       transition-all duration-300 text-center cursor-default"
          >
            <h3 className="text-xl font-semibold text-white mb-3">
              {item.title}
            </h3>

            <p className="text-white/70 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hero;
