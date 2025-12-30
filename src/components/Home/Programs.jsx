function Program() {
  return (
    <section className="bg-white py-20 select-none">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#222831]">
        Program Overview
      </h2>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {[
          {
            title: "Strength Training",
            desc: "Build muscle and increase overall strength with structured weight training programs.",
          },
          {
            title: "Weight Loss Program",
            desc: "Burn fat effectively through cardio, HIIT, and personalized workout plans.",
          },
          {
            title: "Personal Training",
            desc: "One-on-one training sessions focused on your personal fitness goals.",
          },
          {
            title: "Functional Training",
            desc: "Improve mobility, balance, and real-life strength with functional workouts.",
          },
          {
            title: "Cardio & HIIT",
            desc: "High-intensity workouts designed to boost stamina and burn calories fast.",
          },
          {
            title: "Body Transformation",
            desc: "Complete physique transformation with guided workouts and nutrition support.",
          },
        ].map((program, index) => (
          <div
            key={index}
            className="bg-[#EEEEEE] rounded-xl shadow-md p-6
                       hover:shadow-xl hover:scale-105
                       transition-all duration-300"
          >
            <img
              src="https://th.bing.com/th/id/OIP.s8grxXgiXvDnCe0ciFQKewHaE8"
              alt={program.title}
              className="mb-4 w-full h-48 object-cover rounded-lg"
            />

            <h3 className="text-xl font-semibold mb-3 text-[#222831]">
              {program.title}
            </h3>

            <p className="text-[#393E46] mb-4">
              {program.desc}
            </p>

            <a
              href="#"
              className="inline-block text-[#00ADB5] font-semibold
                         hover:text-[#222831] transition-colors"
            >
              View Program →
            </a>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Program;
