import { useEffect, useState } from "react";

function Why() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = 5;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalCards);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const cards = [
    {
      title: "Certified Personal Trainers",
      desc: "Train under certified and experienced fitness professionals who prioritize correct form, injury prevention, and sustainable progress. Our trainers guide every movement to ensure safe, effective, and long-term results.",
      btn: "Book a Free Session",
      img: "https://th.bing.com/th/id/OIP.s8grxXgiXvDnCe0ciFQKewHaE8",
    },
    {
      title: "Personalized Workout Plans",
      desc: "We design customized workout programs based on your body type, fitness level, and goals. Whether it’s fat loss, muscle gain, or strength training, your plan is tailored for measurable progress.",
      btn: "Start Your Free Plan",
      img: "https://th.bing.com/th/id/OIP.s8grxXgiXvDnCe0ciFQKewHaE8",
    },
    {
      title: "Modern Equipment & Facility",
      desc: "Our gym features modern machines, free weights, and functional training zones in a clean, organized, and hygienic environment built for high-performance workouts.",
      btn: "Visit the Gym",
      img: "https://th.bing.com/th/id/OIP.s8grxXgiXvDnCe0ciFQKewHaE8",
    },
    {
      title: "Motivating Training Environment",
      desc: "Train in a disciplined and motivating atmosphere that encourages consistency and focus. Power GYM helps you stay mentally strong and physically driven every day.",
      btn: "Train With Us",
      img: "https://th.bing.com/th/id/OIP.s8grxXgiXvDnCe0ciFQKewHaE8",
    },
    {
      title: "Flexible Timings & Affordable Plans",
      desc: "We offer flexible training schedules and affordable membership plans designed for students, professionals, and athletes, making fitness convenient and sustainable.",
      btn: "Check Availability",
      img: "https://th.bing.com/th/id/OIP.s8grxXgiXvDnCe0ciFQKewHaE8",
    },
  ];

  return (
    <section className="bg-[#EEEEEE] w-full py-20 select-none">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#222831]">
        Why Choose Power GYM?
      </h2>

      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-full shrink-0 flex flex-col md:flex-row items-center
                         px-6 md:px-16 space-y-8 md:space-y-0 md:space-x-12"
            >
              <div className="w-full md:w-1/2 space-y-5">
                <h3 className="text-3xl font-semibold text-[#222831]">
                  {card.title}
                </h3>

                <p className="text-[#393E46] text-lg leading-relaxed">
                  {card.desc}
                </p>

                <a
                  href="/login"
                  className="inline-block bg-[#00ADB5] text-[#222831]
                             px-6 py-3 rounded-lg font-semibold
                             hover:bg-[#222831] hover:text-[#EEEEEE]
                             transition-colors duration-300"
                >
                  {card.btn}
                </a>
              </div>

              <div className="w-full md:w-1/2">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-64 md:h-72 object-cover rounded-xl
                             shadow-md hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Why;
