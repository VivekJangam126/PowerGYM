import { Clock } from "lucide-react";

function TimingsPreview() {
  return (
    <section className="bg-[#0b0b0b] text-white py-14 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="flex items-center justify-center gap-3 mb-6 sm:mb-8">
          <Clock className="text-red-600" />
          <h2 className="text-2xl sm:text-3xl font-bold tracking-wide">
            Gym Timings
          </h2>
        </div>

        {/* Description */}
        <p className="text-white/70 max-w-2xl mx-auto text-center mb-10 sm:mb-12 text-sm sm:text-base">
          Train at a time that fits your routine. We offer flexible morning
          and evening sessions throughout the week.
        </p>

        {/* Timing Cards */}
        <div
          className="
            grid grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6
            justify-items-center
          "
        >
          <div className="timing-card animate-float delay-0 w-full max-w-xs">
            <h4>Morning</h4>
            <p>5:30 AM – 11:00 AM</p>
          </div>

          <div className="timing-card animate-float delay-200 w-full max-w-xs">
            <h4>Evening</h4>
            <p>4:30 PM – 10:30 PM</p>
          </div>

          <div className="timing-card animate-float delay-400 w-full max-w-xs">
            <h4>Open Days</h4>
            <p>Mon – Sat</p>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-10 sm:mt-12 flex justify-center">
          <a
            href="/timetable"
            className="bg-red-600 px-8 py-3 rounded font-semibold
                       hover:bg-red-700 transition text-center"
          >
            View Full Timetable
          </a>
        </div>

      </div>
    </section>
  );
}

export default TimingsPreview;
