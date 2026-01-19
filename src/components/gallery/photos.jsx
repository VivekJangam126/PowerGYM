
import data from "./photos.json";
import { useState } from "react";

function GalleryPhotos() {
  const [filter, setFilter] = useState("1");
  const [modalImg, setModalImg] = useState(null);

  // Category mapping for filter logic
  const categories = [
    { key: "1", label: "All" },
    { key: "2", label: "Trainers" },
    { key: "3", label: "Events" },
    { key: "4", label: "Workouts" },
    { key: "5", label: "Facilities" },
  ];

  // Helper for filter logic
  const getCategory = (key) => {
    switch (key) {
      case "2": return "trainers";
      case "3": return "events";
      case "4": return "workouts";
      case "5": return "facilities";
      default: return null;
    }
  };

  return (
    <div className="py-10 px-2 select-none rounded-none shadow-xl w-full bg-linear-to-br from-[#232526] to-[#414345]">
     
      <h1 className="text-4xl font-extrabold text-center mb-2 mt-5 text-[#00ADB5] tracking-tight drop-shadow-lg">
        PowerGYM Gallery
      </h1>
      <p className="text-center text-lg text-[#EEEEEE] mb-8 max-w-3xl mx-auto">
        Explore our vibrant community, state-of-the-art facilities, and unforgettable moments. Click any photo to enlarge!
      </p>
      <div className="flex flex-wrap justify-center gap-3 mb-2">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setFilter(cat.key)}
            className={`px-5 py-2 rounded-full font-semibold shadow-md transition-all duration-300 border-2 border-[#00ADB5] mx-1 mb-2
              ${filter === cat.key
                ? 'bg-[#00ADB5] text-white scale-105'
                : 'bg-white text-[#00ADB5] hover:bg-[#393E46] hover:text-white'}`}
          >
            {cat.label}
          </button>
        ))}
       
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 bg-linear-to-br from-[#232526] to-[#414345] p-2 rounded-lg shadow-inner w-full">
        {data.images.filter(img =>
          filter === "1" || img.category === getCategory(filter)
        ).map((img) => (
          <div key={img.id} className="relative group cursor-pointer rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 hover-scale-120">
            <img
              src={img.url}
              alt={img.alt || "Gallery Image"}
              className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 group-hover:scale-105 group-hover:brightness-90 border-white border-2 " 
            />
            
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default GalleryPhotos;
