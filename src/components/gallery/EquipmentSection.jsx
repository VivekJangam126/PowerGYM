import { useState, useEffect } from "react";

import equipmentData from "./Equipments.json";

const equipmentSections = equipmentData.equipmentSections;

export default function EquipmentSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const totalSections = equipmentSections.length;

  // Sample descriptions for each section (customize as needed)
  const sectionDescriptions = [
    "Our gym & facilities feature modern equipment, spacious workout zones, and a motivating environment for all fitness levels.",
    "State-of-the-art cardio equipment to boost your endurance and heart health.",
    "Upper body machines and free weights for strength and muscle building.",
    "Lower body equipment for powerful legs and functional movement.",
    "A full range of dumbbells and free weights for versatile training."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % totalSections);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalSections]);

  return (
    <section className="py-16 bg-linear-to-br from-[#232526] to-[#393E46] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Left: Section Title & Description */}
          <div className="flex-1 flex flex-col justify-center items-start lg:items-start text-left mb-8 lg:mb-0">
            <h2 className="text-3xl font-extrabold mb-4 text-[#00ADB5] drop-shadow-lg tracking-tight">
              {equipmentSections[activeIdx].title}
            </h2>
            <p className="text-lg text-[#EEEEEE] max-w-md mb-4">
              {sectionDescriptions[activeIdx]}
            </p>
          </div>
          {/* Right: 4 Images, aligned right */}
          <div className="flex-1 w-full">
            <div className="relative w-full overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${activeIdx * 100}%)` }}
              >
                {equipmentSections.map((section, idx) => (
                  <div
                    key={section.id}
                    className="w-full shrink-0"
                  >
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 justify-end">
                      {section.images.slice(0, 4).map((img, i) => (
                        <div
                          key={i}
                          className="relative aspect-4/3 overflow-hidden rounded-xl group shadow-lg bg-[#222831]"
                        >
                          <img
                            src={img}
                            alt=""
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300" />
                          <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-2 text-xs text-[#EEEEEE] font-semibold opacity-80">
                            PowerGYM
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}