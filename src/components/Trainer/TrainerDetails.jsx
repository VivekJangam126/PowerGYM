import logo from "../../assets/logo2.png";
import { useState } from "react";
import Form from "./TrainerForm.jsx";
function Modal({ showAll, onClose, trainer }) {
  if (!showAll || !trainer) return null;
    const [view, setView] = useState("profile"); // "profile" | "form"

   
    
      
  return (
    // Overlay
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
      onClick={onClose}
    >
        <div
    className="bg-[#d0d7e2] text-black rounded-xl shadow-xl w-full max-w-md p-6 relative"
    onClick={(e) => e.stopPropagation()}
  >
      {/* Modal box */}
      {view === "profile" && (
        
  <div className="flex flex-col items-center text-center bg-[#d0d7e2] text-[#000000] rounded-xl shadow-xl w-full max-w-md p-6 relative">
    <h1 className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center cursor-pointer absolute top-2 right-2" onClick={onClose} title="Close">X</h1>
    <img
      src={trainer.profileImage}
      alt={trainer.fullName}
      className="w-32 h-40 object-cover rounded-lg mb-4"
    />

    <h2 className="text-2xl font-bold mb-1">{trainer.fullName}</h2>

    <p className="text-sm text-gray-700 mb-3">
      {trainer.experienceYears}+ years experience
    </p>

    <p className="text-sm text-gray-700 mb-4">{trainer.bio}</p>

    <div className="w-full text-ceonter mb-4">
      <h3 className="font-semibold text-lg mb-2">Specializations</h3>
      <ul className="text-sm space-y-1">
        {trainer.specializations.map((spec, i) => (
          <li key={i}>• {spec}</li>
        ))}
      </ul>
    </div>

    <div className="w-full text-center mb-4">
      <h3 className="font-semibold text-lg mb-2">Availability</h3>
      <p className="text-sm">{trainer.availability.days.join(", ")}</p>
      <p className="text-sm">{trainer.availability.timeSlots.join(" | ")}</p>
    </div>

    <button
      onClick={() => setView("form")}
      className="mt-3 bg-[#00ADB5] text-white px-6 py-2 rounded hover:bg-[#008e94]"
    >
      Book Trainer
    </button>
  </div>
)}
 {view === "form" && (
  <Form trainer={trainer} onBack={() => setView("profile")} />
)}
  </div>
    </div>
  );
}

export default Modal;
