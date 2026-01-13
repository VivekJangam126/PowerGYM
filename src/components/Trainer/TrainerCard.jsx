import data from "./TrainerInfo.json";
import TrainerDetails from "./TrainerDetails.jsx";
import  { useState } from "react";
function TrainerCard() {
      const [showModal, setShowModal] = useState(false);
      const [selectedTrainer, setSelectedTrainer] = useState(null);
      const [filter, setFilter] = useState("1"); // "1" for All, "2" for 2 Years, etc.

  return (
    <div className=" py-10 px-4 select-none rounded-lg shadow-md mx-auto bg-[#EEEEEE]">

      <h1 className="text-3xl font-bold text-center mb-4 text-[#222831]">
        Our Trainers
      </h1>
        <div className="text-center mb-10 px-6">
        <button onClick={() => setFilter("1")} className="bg-white border-2 border-black px-4 py-2 m-1 rounded-sm font-semibold hover:bg-[#00ADB5] hover:text-[#EEEEEE] transition-colors duration-300 ">
         All
       </button>
        <button onClick={() => setFilter("2")} className="bg-white border-2 border-black m-1 px-4 py-2 rounded-sm font-semibold hover:bg-[#00ADB5] hover:text-[#EEEEEE] transition-colors duration-300 ">
          2+ Years
       </button>
         <button onClick={() => setFilter("3")} className="bg-white border-2 border-black px-4 m-1 py-2 rounded-sm font-semibold hover:bg-[#00ADB5] hover:text-[#EEEEEE] transition-colors duration-300 ">
          3+ Years
       </button>
        <button onClick={() => setFilter("4")} className="bg-white border-2 border-black px-4 m-1 py-2 rounded-sm font-semibold hover:bg-[#00ADB5] hover:text-[#EEEEEE] transition-colors duration-300 ">
          4+ Years
       </button>
       </div>
       
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
        {data.trainers.map((trainer) => (
          (filter === "1" ||
           (filter === "2" && trainer.experienceYears >= 2) ||
           (filter === "3" && trainer.experienceYears >= 3) ||
           (filter === "4" && trainer.experienceYears >= 4)) && (
          <div
            key={trainer.trainerId}
            className="flex flex-col items-center p-6 border rounded-xl shadow-sm hover:shadow-lg transition duration-300 hover:bg-[#f0f4f8] hover:scale-105"
          >
            {/* Trainer Image */}
            <img
              src={trainer.profileImage}
              alt={trainer.fullName}
              className="w-40 h-48 object-cover rounded-lg mb-4 hover:scale-105 transition-transform duration-300 rotate-0 hover:rotate-3"
            />

            {/* Trainer Info */}
            <h2 className="text-lg font-semibold text-gray-800 ">
              {trainer.fullName}
            </h2>

            <p className="text-sm text-gray-500">
              {trainer.experienceYears}+ years experience
            </p>

            <p className="text-sm mt-3 text-center text-gray-600">
              {trainer.bio}
            </p>

            {/* CTA */}
                <button onClick={() => {
            setSelectedTrainer(trainer);
            setShowModal(true);
  }} className="mt-4 px-4 py-2 bg-[#00ADB5] text-white rounded-md hover:bg-[#222831] transition">
              View Profile
            </button>
          </div>)
        ))}
         <TrainerDetails
        showAll={showModal}
        onClose={() => setShowModal(false)}
        trainer={selectedTrainer}
        
      />

      </div>
    </div>
  );
}

export default TrainerCard;
