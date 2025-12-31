function Perks() {
  return (
    <section className="w-full bg-[#EEEEEE] py-20 px-6 md:px-20 select-none">
      
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#222831] mb-12">
        Gym Perks & Facilities
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300">
          <h3 className="text-2xl font-semibold text-[#222831] mb-4">
            Equipment
          </h3>
          <ul className="list-disc ml-5 space-y-2 text-[#393E46] text-base">
            <li>State-of-the-art cardio machines</li>
            <li>Free weights and resistance equipment</li>
            <li>Functional training zone with kettlebells and ropes</li>
            <li>Dedicated stretching and mobility area</li>
            <li>Locker rooms with showers and changing facilities</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300">
          <h3 className="text-2xl font-semibold text-[#222831] mb-4">
            Member Perks
          </h3>
          <ul className="list-disc ml-5 space-y-2 text-[#393E46] text-base">
            <li>Personalized fitness assessment & goal tracking</li>
            <li>Access to group fitness classes & workshops</li>
            <li>Nutrition guidance and meal planning support</li>
            <li>Exclusive member events and fitness challenges</li>
            <li>Special discounts on merchandise and partners</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300">
          <h3 className="text-2xl font-semibold text-[#222831] mb-4">
            Services
          </h3>
          <ul className="list-disc ml-5 space-y-2 text-[#393E46] text-base">
            <li>Certified personal trainers for 1-on-1 coaching</li>
            <li>Group classes: Yoga, HIIT, Strength Training</li>
            <li>Professional nutrition counseling</li>
            <li>Wellness workshops and educational seminars</li>
            <li>Online resources and virtual training support</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Perks;
