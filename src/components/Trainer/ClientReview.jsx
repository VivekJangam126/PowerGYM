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
       review:"Working with Trainer Alex has been a game-changer! His personalized approach and unwavering support helped me achieve my fitness goals faster than I ever thought possible.",
       title: "Emily R.",
       desc: "Client since 2022",
       btn: "Book a Session",
       img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      review:"Trainer Sarah's expertise and motivation pushed me beyond my limits. Her tailored workouts and nutritional advice transformed my body and mindset. Highly recommend!",
      title: "Michael T.",
      desc: "Client since 2021",
      btn: "Book a Session",
      img: "https://randomuser.me/api/portraits/men/35.jpg",  

    }
    ,
    {
      review:"I can't thank Trainer David enough for his dedication and knowledge. His training programs are effective, and his encouragement kept me going even on tough days. I've never felt better!",
      title: "Sophia L.",
      desc: "Client since 2023",
      btn: "Book a Session",
      img: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",

    }
    ,
    {
      review:"Trainer Mark's commitment to fitness and support is truly inspiring. His personalized approach and progress tracking have made a significant difference in my health and confidence.",
      title: "David W.",
      desc: "Client since 2020",
      btn: "Book a Session",
      img: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",

    }
    ,
    {
      review:"I've seen incredible results with Trainer Emily. Her personalized training and support have helped me reach my fitness goals faster than I ever thought possible.",
      title: "Olivia M.",
      desc: "Client since 2022",
      btn: "Book a Session",
      img: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",

    }
  ];

  return (
    <section className="bg-[#EEEEEE] w-full py-20 select-none overflow-x-hidden ">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#222831]">
        What our Clients Say About Our Trainers 
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
                         px-6 md:px-16 space-y-6 md:space-y-0 md:space-x-12"
            >
              <div className="w-full md:w-1/2 space-y-2">
                <h3 className="text-3xl font-semibold text-[#222831]">
                  {card.title}
                </h3>

                <p className="text-[#393E46] text-sm font-bold leading-relaxed mb-5">
                  {card.desc}
                </p>
                 <p className="text-[#393E46] text-lg leading-relaxed">
                  "{card.review}"
                </p>
                <a
                  href="/login"
                  className="inline-block bg-[#00ADB5] text-[#222831]
                             px-6 py-3 rounded-lg font-semibold
                             hover:bg-[#222831] hover:text-[#EEEEEE]
                             transition-colors duration-300"
                >
                 View Profile
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
