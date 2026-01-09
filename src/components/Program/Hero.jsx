function Hero(){
   const programIntro = [
  {
    title: "Structured Training",
    desc: "Well-planned workout programs designed with proper progression for safe and effective results.",
    icon: "📋",
  },
  {
    title: "Goal-Oriented Programs",
    desc: "Programs tailored for fat loss, muscle gain, strength building, and total body transformation.",
    icon: "🎯",
  },
  {
    title: "All Fitness Levels",
    desc: "Beginner-friendly to advanced-level programs so everyone can train with confidence.",
    icon: "💪",
  },
  {
    title: "Expert Guidance",
    desc: "Designed by experienced trainers focusing on correct form, safety, and long-term growth.",
    icon: "🧠",
  },
];

    return(
        <section className="bg-[#2f3742] py-20 px-6">
  <div className="max-w-7xl mx-auto text-center mb-14">
    <h2 className="text-4xl font-bold text-[#ecf1f8] mb-4">
      How Our Programs Work
    </h2>
    <p className="text-gray-300 max-w-2xl mx-auto">
      Our training programs are designed to deliver real, measurable results
      for every fitness level.
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
    {programIntro.map((item, index) => (
      <div
        key={index}
        className="bg-[#EEEEEE] rounded-xl p-6 text-left
                   transform transition-all duration-500
                   hover:-translate-y-3 hover:shadow-xl
                   animate-fadeUp"
        style={{ animationDelay: `${index * 150}ms` }}
      >
        <div className="text-4xl mb-4">{item.icon}</div>

        <h3 className="text-xl font-semibold text-[#222831] mb-3">
          {item.title}
        </h3>

        <p className="text-[#393E46]">
          {item.desc}
        </p>
      </div>
    ))}
  </div>
</section>

    )

}
export default Hero;