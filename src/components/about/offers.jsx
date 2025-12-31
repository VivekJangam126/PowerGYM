function Offers() {
  return (
    <section className="w-full bg-white py-20 select-none">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold text-[#222831] mb-4">
          Special Offers
        </h2>
        <p className="text-[#393E46] mb-12 max-w-2xl mx-auto">
          Take advantage of our limited-time offers designed to help you start
          strong, stay consistent, and save more on your fitness journey.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-[#00ADB5] text-[#EEEEEE] p-8 rounded-2xl shadow-md
                          transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-3">
              Summer Shred
            </h3>
            <p className="text-sm mb-6 opacity-90">
              Get 20% off on all annual memberships and kickstart your summer
              transformation.
            </p>
            <a
              href="/register"
              className="inline-block bg-[#222831] text-[#EEEEEE] px-5 py-2 rounded-lg
                         hover:bg-[#393E46] transition "
            >
              Claim Offer
            </a>
          </div>

          <div className="bg-[#00ADB5] text-[#EEEEEE] p-8 rounded-2xl shadow-md
                          transform transition duration-300 hover:-translate-y-2 hover:shadow-xl ">
            <h3 className="text-xl font-semibold mb-3">
              Bring a Friend
            </h3>
            <p className="text-sm mb-6 opacity-90">
              Join with a friend and both of you receive 15% off on memberships.
            </p>
            <a
              href="/register"
              className="inline-block bg-[#222831] text-[#EEEEEE] px-5 py-2 rounded-lg
                         hover:bg-[#393E46] transition mt-5"
            >
              Invite Now
            </a>
          </div>

          <div className="bg-[#00ADB5] text-[#EEEEEE] p-8 rounded-2xl shadow-md
                          transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-3">
              Student Special
            </h3>
            <p className="text-sm mb-6 opacity-90">
              Exclusive discounted plans for students to stay fit without
              stretching their budget.
            </p>
            <a
              href="/register"
              className="inline-block bg-[#222831] text-[#EEEEEE] px-5 py-2 rounded-lg
                         hover:bg-[#393E46] transition"
            >
              View Plan
            </a>
          </div>

          <div className="bg-[#00ADB5] text-[#EEEEEE] p-8 rounded-2xl shadow-md
                          transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-3">
              Free Trial Week
            </h3>
            <p className="text-sm mb-6 opacity-90">
              Try our gym for 7 days with expert guidance before choosing a plan.
            </p>
            <a
              href="/register"
              className="inline-block bg-[#222831] text-[#EEEEEE] px-5 py-2 rounded-lg
                         hover:bg-[#393E46] transition mt-4"
            >
              Start Trial
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Offers;
