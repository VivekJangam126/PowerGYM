import { useState } from "react";
import programsData from "./programs.json";
import { Link } from "react-router-dom";

function Program() {
  const [filter, setFilter] = useState("All");

  const levels = ["All", "Beginner", "Intermediate", "Expert"];

  return (
    <section className="bg-black py-24 px-6 select-none">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-red-600 font-semibold tracking-widest">
            PROGRAMS
          </span>
          <h2 className="text-4xl font-bold text-white mt-4 mb-6">
            Program Overview
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Explore our structured training programs designed for different
            fitness levels and goals.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-3 flex-wrap mb-12">
          {levels.map(level => (
            <button
              key={level}
              onClick={() => setFilter(level)}
              className={`px-5 py-2 rounded border text-sm font-semibold transition
                ${
                  filter === level
                    ? "bg-red-600 border-red-600 text-white"
                    : "border-white/20 text-white/70 hover:border-red-600 hover:text-white"
                }`}
            >
              {level}
            </button>
          ))}
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {programsData
            .filter(
              program => filter === "All" || program.level === filter
            )
            .map(program => (
              <div
                key={program.id}
                className="border border-white/10 rounded-xl overflow-hidden
                           hover:border-red-600 hover:-translate-y-2
                           transition-all duration-300"
              >
                <img
                  src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61"
                  alt={program.title}
                  className="w-full h-48 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {program.title}
                  </h3>

                  <p className="text-white/70 text-sm mb-6">
                    {program.shortDesc}
                  </p>

                  <Link
                    to={`/programs/${program.id}`}
                    className="inline-block bg-red-600 text-white px-5 py-2 rounded
                               font-semibold hover:bg-red-700 transition"
                  >
                    View Program
                  </Link>
                </div>
              </div>
            ))}
        </div>

      </div>
    </section>
  );
}

export default Program;
