import logo from "../../assets/logo2.png";
function Modal({ showAll, onClose }) {
   if (!showAll) return null;

  return (
    // Overlay (click outside closes)
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
 

  <h2 className="text-2xl font-bold mb-2">
    Strength Training Program
  </h2>

  <p className="text-sm text-gray-700 mb-4">
    Build muscle strength, improve posture, and increase overall fitness
    with a structured and progressive training plan.
  </p>

  {/* Program Highlights */}
  <div className="w-full text-left mb-4">
    <h3 className="font-semibold text-lg mb-2">Program Highlights</h3>
    <ul className="text-sm space-y-1">
      <li>• Level: Beginner to Intermediate</li>
      <li>• Duration: 8 Weeks</li>
      <li>• Mode: Online & Offline</li>
      <li>• Sessions: 4–5 Days / Week</li>
    </ul>
  </div>

  {/* Benefits */}
  <div className="w-full text-left mb-4">
    <h3 className="font-semibold text-lg mb-2">Key Benefits</h3>
    <ul className="text-sm space-y-1">
      <li>✔ Increased muscle strength</li>
      <li>✔ Improved posture & balance</li>
      <li>✔ Better endurance & discipline</li>
    </ul>
  </div>

  {/* CTA */}
  <button
    className="mt-3 bg-[#00ADB5] text-white px-6 py-2 rounded
               hover:bg-[#008e94] transition-colors"
  >
    Join This Program
  </button>
</div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3
    text-gray-500
    p-2
    rounded-lg
    transition
    duration-200
    hover:bg-gray-400
    hover:text-white"
        >
          ✕
        </button>
        
       
      </div>
    </div>
  );
}

export default Modal;

