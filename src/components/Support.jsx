import React from "react";

const Support = () => {
  const supportCards = [
    {
      title: "Technical Support",
      description:
        "On-call engineers available for real-time troubleshooting and diagnostics.",
      cta: "Contact Helpdesk",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      title: "AMC & Maintenance",
      description:
        "Annual Maintenance Contracts to ensure your machinery runs at peak performance.",
      cta: "Service Plans",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: "Training & Onboarding",
      description:
        "Comprehensive training for lab technicians on machine operation and safety.",
      cta: "Book Training",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 bg-white border-t border-slate-100 relative overflow-hidden">
      {/* Background Accent - Soft Radial Gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/5 blur-[100px] -z-10 rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Heading & Global Reach */}
          <div className="lg:col-span-4 sticky top-32">
            <div className="inline-flex items-center gap-2 text-teal-600 font-bold text-xs uppercase tracking-widest mb-6">
              <span className="w-8 h-[1px] bg-teal-600"></span>
              Service Excellence
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-navy-950 tracking-tighter leading-tight mb-6">
              Post-Sale <br />
              <span className="text-teal-600 italic">Stability.</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              At Spectrum, the purchase is only the beginning. Our dedicated
              service network ensures that your laboratory operations remain
              uninterrupted.
            </p>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Support Hotline
                </p>
                <p className="text-lg font-bold text-navy-950">
                  +91 (800) SPECTRUM
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Grid */}
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
            {supportCards.map((card, i) => (
              <div
                key={i}
                className="group p-8 rounded-3xl bg-white border border-slate-200 hover:border-teal-500/30 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-navy-900 group-hover:bg-teal-500 group-hover:text-white transition-colors duration-500 mb-6">
                  {card.icon}
                </div>
                <h4 className="text-2xl font-bold text-navy-950 mb-3">
                  {card.title}
                </h4>
                <p className="text-slate-500 leading-relaxed mb-6">
                  {card.description}
                </p>
                <button className="text-sm font-black uppercase tracking-widest text-navy-950 group-hover:text-teal-600 flex items-center gap-2 transition-colors">
                  {card.cta}{" "}
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </button>
              </div>
            ))}

            {/* The "Unique" Technical Card (WhatsApp/Instant) */}
            <div className="p-8 rounded-3xl bg-teal-600 text-white flex flex-col justify-between">
              <div>
                <h4 className="text-2xl font-bold mb-2 tracking-tight">
                  Direct Engineer Access
                </h4>
                <p className="text-teal-50 /80 leading-relaxed">
                  Connect via WhatsApp for instant spare part inquiries or
                  remote calibration.
                </p>
              </div>
              <div className="mt-8 flex items-center justify-between bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                <span className="text-sm font-bold tracking-widest">
                  WHATSAPP LIVE
                </span>
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-teal-600 shadow-lg">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.942-.001-3.841-.48-5.538-1.391l-6.459 1.69zm6.305-3.664l.33.196c1.51.899 3.25 1.374 5.023 1.375 5.282 0 9.58-4.298 9.582-9.583.001-2.559-1.001-4.966-2.822-6.787-1.82-1.821-4.227-2.823-6.786-2.823-5.282 0-9.58 4.298-9.582 9.583-.001 2.046.521 4.031 1.508 5.799l.216.388-1.01 3.693 3.781-.992z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
