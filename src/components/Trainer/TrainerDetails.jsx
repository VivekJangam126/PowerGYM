import logo from "../../assets/logo2.png";

function Modal({ showAll, onClose, trainer }) {
  if (!showAll || !trainer) return null;

  return (
    // Overlay
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
      onClick={onClose}
    >
      {/* Modal box */}
      <div
        className="bg-[#d0d7e2] text-[#000000] rounded-xl shadow-xl
                   w-[90%] max-w-md p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col items-center text-center">
          
          {/* Trainer Image */}
          <img
            src={trainer.profileImage}
            alt={trainer.fullName}
            className="w-32 h-40 object-cover rounded-lg mb-4"
          />

          {/* Trainer Name */}
          <h2 className="text-2xl font-bold mb-1">
            {trainer.fullName}
          </h2>

          {/* Experience */}
          <p className="text-sm text-gray-700 mb-3">
            {trainer.experienceYears}+ years experience
          </p>

          {/* Bio */}
          <p className="text-sm text-gray-700 mb-4">
            {trainer.bio}
          </p>

          {/* Specializations */}
          <div className="w-full text-left mb-4">
            <h3 className="font-semibold text-lg mb-2">
              Specializations
            </h3>
            <ul className="text-sm space-y-1">
              {trainer.specializations.map((spec, index) => (
                <li key={index}>• {spec}</li>
              ))}
            </ul>
          </div>

          {/* Availability */}
          <div className="w-full text-left mb-4">
            <h3 className="font-semibold text-lg mb-2">
              Availability
            </h3>
            <p className="text-sm">
              {trainer.availability.days.join(", ")}
            </p>
            <p className="text-sm">
              {trainer.availability.timeSlots.join(" | ")}
            </p>
          </div>

          {/* CTA */}
          <button
            className="mt-3 bg-[#00ADB5] text-white px-6 py-2 rounded
                       hover:bg-[#008e94] transition-colors"
          >
            Book Trainer
          </button>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3
                     text-gray-500 p-2 rounded-lg
                     transition duration-200
                     hover:bg-gray-400 hover:text-white"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export default Modal;
