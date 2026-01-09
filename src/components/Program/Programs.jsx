import React, { useState } from "react";
import Card from "./ProgramCard.jsx";
function Program() {

  const [filter, setFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

    const openCard = () => {
        setShowAll(true);
    };
  
  return (
    <section className=" bg-[#424b58] text-white py-15 select-none items-center w-full px-5">
      <h2 className="text-4xl font-bold text-center mb-12 text-[#ecf1f8]">
        Program Overview
      </h2>
      <div className="text-center mb-12 px-6 max-w-3xl mx-auto text-lg text-black flex gap-1 md:gap-1 justify-center flex-wrap items-center ">
         <button onClick={() => setFilter("All")} className="bg-white border-2 border-black px-4 py-2 rounded-sm font-semibold hover:bg-[#00ADB5] hover:text-[#EEEEEE] transition-colors duration-300 ">
         All
       </button>
        <button onClick={() => setFilter("Intermediate")} className="bg-white border-2 border-black px-4 py-2 rounded-sm font-semibold hover:bg-[#00ADB5] hover:text-[#EEEEEE] transition-colors duration-300 ">
          Intermediate
       </button>
         <button onClick={() => setFilter("Expert")} className="bg-white border-2 border-black px-4 py-2 rounded-sm font-semibold hover:bg-[#00ADB5] hover:text-[#EEEEEE] transition-colors duration-300 ">
         Expert
       </button>
        <button onClick={() => setFilter("Beginner")} className="bg-white border-2 border-black px-4 py-2 rounded-sm font-semibold hover:bg-[#00ADB5] hover:text-[#EEEEEE] transition-colors duration-300 ">
          Beginer
       </button>
      </div>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {[
          {
            title: "Strength Training",
            desc: "Build muscle and increase overall strength with structured weight training programs.",
            level: "Beginner",
          },
          {
            title: "Weight Loss Program",
            desc: "Burn fat effectively through cardio, HIIT, and personalized workout plans.",
            level: "Intermediate",
          },
          {
            title: "Personal Training",
            desc: "One-on-one training sessions focused on your personal fitness goals.",
            level: "Expert",
          },
          {
            title: "Functional Training",
            desc: "Improve mobility, balance, and real-life strength with functional workouts.",
            level: "Intermediate",
          },
          {
            title: "Cardio & HIIT",
            desc: "High-intensity workouts designed to boost stamina and burn calories fast.",
            level: "Intermediate",
          },
          {
            title: "Body Transformation",
            desc: "Complete physique transformation with guided workouts and nutrition support.",
            level: "Beginner",
          },
       ].map((program, index) => {
  if (filter !== "All" && program.level !== filter) {
    return null;
  }
  return (
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

      <button onClick={openCard}
        className="inline-block bg-[#00ADB5] text-[#222831] px-4 py-2 rounded hover:bg-[#222831] hover:text-[#EEEEEE] font-semibold transition-colors duration-300"
      >
        View Program →
      </button>
    </div>
     );
     })
        }

      </div>

        <Card
        showAll={showAll}
        onClose={() => {
          setShowAll(false);
        }} 
      />
    </section>
  );
}

export default Program;
