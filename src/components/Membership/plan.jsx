function MembershipPlans() {
  const plans = [
    {
      title: "Monthly Plan",
      duration: "1 Month",
      bestFor: "Beginners & trial members",
      benefits: [
        "Full gym access",
        "Trainer guidance",
        "Flexible timings",
        "Clean & safe facility",
      ],
    },
    {
      title: "Quarterly Plan",
      duration: "3 Months",
      bestFor: "Consistent trainees",
      benefits: [
        "Structured workout plan",
        "Progress tracking",
        "Trainer support",
        "Better value pricing",
      ],
      highlight: true,
    },
    {
      title: "Yearly Plan",
      duration: "12 Months",
      bestFor: "Serious fitness goals",
      benefits: [
        "Long-term transformation",
        "Priority trainer access",
        "Maximum cost savings",
        "Complete fitness support",
      ],
    },
  ];

  return (
    <section className="bg-black py-24 select-none h-screen">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-red-600 font-semibold tracking-widest">
            MEMBERSHIP
          </span>
          <h2 className="text-4xl font-bold text-white mt-4">
            Choose Your Plan
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {plans.map((plan, index) => (
            <div
              key={index}
              className={`
                relative group border border-white/10 rounded-xl p-8
                transition-all duration-500 overflow-hidden
                hover:border-red-600 hover:-translate-y-2
                ${plan.highlight ? "bg-[#0b0b0b] border-red-600" : "bg-[#0b0b0b]"}
              `}
            >
              <h3 className="text-2xl font-bold text-white mb-2">
                {plan.title}
              </h3>

              <p className="text-white/60 mb-6">
                {plan.duration}
              </p>

              <p className="text-white/70 mb-8">
                {plan.bestFor}
              </p>

              <div
                className="
                  max-h-0 opacity-0
                  group-hover:max-h-60 group-hover:opacity-100
                  transition-all duration-500
                "
              >
                <ul className="space-y-3 mb-6 mt-4">
                  {plan.benefits.map((benefit, i) => (
                    <li key={i} className="text-white/70 text-sm">
                      • {benefit}
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className="block text-center bg-red-600 text-white py-3 rounded font-semibold
                             hover:bg-red-700 transition"
                >
                  Enquire Now
                </a>
              </div>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-white/40 group-hover:hidden">
                Hover to view details
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default MembershipPlans;
