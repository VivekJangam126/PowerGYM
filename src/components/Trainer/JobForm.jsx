import { useState } from "react";

function JobForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert("Application submitted successfully!");
    setName("");
    setEmail("");
    setPhone("");
  }

  return (
    <section className="bg-black min-h-screen py-24 px-6 select-none">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}
        <div className="hidden md:flex justify-center">
          <img
            src="https://tse3.mm.bing.net/th/id/OIP.3yYbXvuLFhVj1jmc1glbjAHaHa?pid=ImgDetMain"
            alt="Trainer Application"
            className="w-full max-w-md rounded-xl
                       border border-white/10 shadow-xl opacity-90"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="border border-white/10 rounded-xl p-8 shadow-xl">
          <span className="text-red-600 font-semibold tracking-widest block mb-2">
            CAREERS
          </span>

          <h2 className="text-3xl font-bold text-white mb-6">
            Apply as a Trainer
          </h2>

          <p className="text-white/70 mb-8">
            Join Power GYM as a certified trainer and help members achieve real,
            sustainable fitness results through disciplined training.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">

            <div>
              <label className="block text-sm text-white/80 mb-2">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                required
                className="w-full p-3 rounded bg-black border border-white/20
                           text-white focus:outline-none focus:border-red-600"
              />
            </div>

            <div>
              <label className="block text-sm text-white/80 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="w-full p-3 rounded bg-black border border-white/20
                           text-white focus:outline-none focus:border-red-600"
              />
            </div>

            <div>
              <label className="block text-sm text-white/80 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                required
                className="w-full p-3 rounded bg-black border border-white/20
                           text-white focus:outline-none focus:border-red-600"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white font-semibold py-3 rounded
                         hover:bg-red-700 transition"
            >
              Submit Application
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}

export default JobForm;
