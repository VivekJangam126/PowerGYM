import { useEffect, useRef, useState } from "react";

function AnimatedCard({ direction, title, desc, img, reverse }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`group flex flex-col lg:flex-row ${reverse ? "lg:flex-row-reverse" : ""}
      items-center gap-8 bg-white rounded-2xl shadow-md overflow-hidden
      transition-all duration-700 hover:-translate-y-2 hover:shadow-xl
      ${visible ? "opacity-100 translate-x-0" : `opacity-0 ${direction}`}
      `}
    >
      <div className="flex-1 p-8 text-center lg:text-left">
        <h2 className="text-2xl font-bold text-[#222831] mb-3">
          {title}
        </h2>
        <p className="text-[#393E46] leading-relaxed">
          {desc}
        </p>
      </div>

      <div className="w-full lg:w-80 h-56 overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
    </div>
  );
}

function Membership() {
  return (
    <section className="bg-[#EEEEEE] w-full py-20 select-none">
      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-20">

        <AnimatedCard
          direction="-translate-x-24"
          title="Premium Support"
          desc="Get expert guidance, constant motivation, and hands-on trainer support to stay consistent and injury-free throughout your fitness journey."
          img="https://i.pinimg.com/originals/5e/76/41/5e7641130548fefe973a8c460b347ee0.jpg"
        />

        <AnimatedCard
          direction="translate-x-24"
          reverse
          title="Structured Training"
          desc="Scientifically planned workout routines designed for strength, endurance, fat loss, and long-term physical performance."
          img="https://canadianfitness.net/wp-content/uploads/2021/11/group-of-young-athletes-in-sportswear-doing-push-u-2021-08-29-10-47-11-utc-700x467.jpg"
        />

        <AnimatedCard
          direction="-translate-x-24"
          title="Modern Equipment"
          desc="Train with modern machines, free weights, and functional equipment built for safe, effective, and progressive workouts."
          img="https://thumbs.dreamstime.com/b/modern-gym-interior-sport-fitness-equipment-panoramic-windows-fitness-center-interior-interior-workout-gym-generative-272063936.jpg"
        />

        <AnimatedCard
          direction="translate-x-24"
          reverse
          title="Flexible Membership"
          desc="Affordable plans with flexible timings so fitness fits easily into your daily routine without pressure or compromise."
          img="https://image-tc.galaxy.tf/wipng-3v8r8ojz0rjxdcl5qc9zpadm0/2-1.png?width=1920https://fitness-nation.net/wp-content/uploads/2019/04/5-Things-to-Consider-When-Buying-a-Gym-Membership.jpg"
        />

      </div>
    </section>
  );
}

export default Membership;
