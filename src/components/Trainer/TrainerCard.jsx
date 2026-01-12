import data from "./TrainerInfo.json";
import TrainerDetails from "./TrainerDetails.jsx";
import  { useState } from "react";
function TrainerCard() {
      const [showModal, setShowModal] = useState(false);
      const [selectedTrainer, setSelectedTrainer] = useState(null);
      

  return (
    <div className="bg-white py-10 px-4 select-none rounded-lg shadow-md max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.trainers.map((trainer) => (
          <div
            key={trainer.trainerId}
            className="flex flex-col items-center p-6 border rounded-xl shadow-sm hover:shadow-lg transition"
          >
            {/* Trainer Image */}
            <img
              src={trainer.profileImage}
              alt={trainer.fullName}
              className="w-40 h-48 object-cover rounded-lg mb-4"
            />

            {/* Trainer Info */}
            <h2 className="text-lg font-semibold text-gray-800">
              {trainer.fullName}
            </h2>
(
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
          </div>
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
