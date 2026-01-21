import { Link } from "react-router-dom";

function TrainerCard({ trainer }) {
  return (
    <div
      className="border border-white/10 rounded-xl overflow-hidden
                 hover:border-red-600 hover:-translate-y-2
                 transition-all duration-300"
    >
      <img
        src={trainer.photo}
        alt={trainer.name}
        className="w-full h-56 object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-1">
          {trainer.name}
        </h3>

        <p className="text-white/70 text-sm mb-2">
          {trainer.specialization}
        </p>

        <p className="text-white/60 text-sm mb-6">
          Experience: {trainer.experience}
        </p>

        <Link
          to={`/trainers/${trainer.id}`}
          className="inline-block bg-red-600 text-white px-5 py-2 rounded
                     font-semibold hover:bg-red-700 transition"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
}

export default TrainerCard;
