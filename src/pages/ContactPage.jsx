import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";

function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Enquiry submitted successfully. Our team will contact you soon.");
    setName("");
    setPhone("");
    setMessage("");
  };

  return (
    <section className="bg-black py-20 px-6 select-none">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Power-GYM
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Have questions about memberships, programs, or personal training?
            Reach out to us — we’re here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* LEFT: Contact Info */}
          <div className="space-y-8">

            <div className="flex items-start gap-4">
              <Phone className="text-red-600 mt-1" />
              <div>
                <h3 className="text-white font-semibold">Phone</h3>
                <p className="text-white/70 text-sm">+91 9XXXXXXXXX</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-red-600 mt-1" />
              <div>
                <h3 className="text-white font-semibold">Email</h3>
                <p className="text-white/70 text-sm">powergym@email.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="text-red-600 mt-1" />
              <div>
                <h3 className="text-white font-semibold">Location</h3>
                <p className="text-white/70 text-sm">
                  Power-GYM, Main Road, Your City
                </p>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="https://wa.me/919XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700
                           text-white font-semibold px-6 py-3 rounded transition"
              >
                <MessageCircle />
                Chat on WhatsApp
              </a>
              <p className="text-xs text-white/50 mt-2">
                Fastest way to reach us
              </p>
            </div>

          </div>

          {/* RIGHT: Enquiry Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-[#0b0b0b] border border-white/10 rounded-xl p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              Send an Enquiry
            </h2>

            <label className="block text-white/70 text-sm mb-2">
              Full Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-full mb-4 px-4 py-3 rounded bg-black border border-white/20
                         text-white placeholder-white/40 focus:outline-none focus:border-red-600"
            />

            <label className="block text-white/70 text-sm mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="10-digit phone number"
              className="w-full mb-4 px-4 py-3 rounded bg-black border border-white/20
                         text-white placeholder-white/40 focus:outline-none focus:border-red-600"
            />

            <label className="block text-white/70 text-sm mb-2">
              Message (optional)
            </label>
            <textarea
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us what you are looking for"
              className="w-full mb-6 px-4 py-3 rounded bg-black border border-white/20
                         text-white placeholder-white/40 focus:outline-none focus:border-red-600 resize-none"
            />

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white
                         font-semibold py-3 rounded transition"
            >
              Submit Enquiry
            </button>

            <p className="text-xs text-white/50 mt-4 text-center">
              We usually respond within working hours.
            </p>
          </form>

        </div>

      </div>
    </section>
  );
}

export default ContactPage;
