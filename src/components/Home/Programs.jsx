function Program() {
  return (
    <section className="bg-black py-20 select-none">
      <h2 className="text-3xl font-bold text-center mb-12 text-white tracking-wide">
        Our Programs
      </h2>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "Strength Training",
            desc: "Build lean muscle and improve overall strength through structured and progressive training.",
          },
          {
            title: "Weight Loss Program",
            desc: "Effective fat loss programs combining cardio, HIIT, and guided workouts.",
          },
          {
            title: "Personal Training",
            desc: "One-on-one coaching focused on your goals, form, and long-term results.",
          },
        ].map((program, index) => (
          <div
            key={index}
            className="bg-[#0b0b0b] border border-white/10 rounded-xl p-6
                       hover:border-red-600 hover:-translate-y-1
                       transition-all duration-300"
          >
            <img
              src="https://media.istockphoto.com/id/1137123791/photo/muscular-man-doing-battle-ropes-exercise-at-the-cross-training-gym.jpg?s=612x612&w=0&k=20&c=hiBVJC3bghTJtWQieVVsEMN6GD6RhvXzqoUFXMyTNo4="
              alt={program.title}
              className="mb-4 w-full h-48 object-cover rounded-lg"
            />

            <h3 className="text-xl font-semibold mb-3 text-white">
              {program.title}
            </h3>

            <p className="text-white/70 mb-6">
              {program.desc}
            </p>

            <a
              href="/programs"
              className="inline-block bg-red-600 text-white px-6 py-2 rounded font-semibold
                         hover:bg-red-700 transition duration-300"
            >
              View Program
            </a>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-14">
        <a
          href="/programs"
          className="border border-red-600 text-red-500 px-8 py-3 rounded font-semibold
                     hover:bg-red-600 hover:text-white transition duration-300"
        >
          Explore All Programs
        </a>
      </div>
    </section>
  );
}

export default Program;
