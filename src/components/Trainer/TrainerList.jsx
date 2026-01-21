import trainersData from "./trainers.json";
import TrainerCard from "./TrainerCard";
import { useState } from "react";

function Trainers() {
  const [filter, setFilter] = useState("All");

 const filters = ["All", "2+ Years", "4+ Years", "6+ Years"];


  return (
    <section className="bg-black py-24 px-6 select-none">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <span className="text-red-600 font-semibold tracking-widest">
            TRAINERS
          </span>
          <h1 className="text-4xl font-bold text-white mt-4 mb-6">
            Meet Our Trainers
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Certified professionals focused on disciplined and result-driven training.
          </p>
        </div>

        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {filters.map(item => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`px-5 py-2 rounded border text-sm font-semibold transition
                ${
                  filter === item
                    ? "bg-red-600 border-red-600 text-white"
                    : "border-white/20 text-white/70 hover:border-red-600 hover:text-white"
                }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainersData
  .filter(trainer => {
    if (filter === "All") return true;
    if (filter === "2+ Years") return trainer.experienceYears >= 2;
    if (filter === "4+ Years") return trainer.experienceYears >= 4;
    if (filter === "6+ Years") return trainer.experienceYears >= 6;
    return true;
  })
  .map(trainer => (
    <TrainerCard key={trainer.id} trainer={trainer} />
))}

        </div>

      </div>
    </section>
  );
}

export default Trainers;
