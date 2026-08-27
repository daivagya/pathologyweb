import React from "react";

const metrics = [
  { label: "Global Installations", value: "500+", sub: "Hospitals & Labs" },
  { label: "Diagnostic Accuracy", value: "99.9%", sub: "Verified Precision" },
  { label: "Countries Served", value: "15+", sub: "Global Presence" },
  { label: "Support Response", value: "<2hr", sub: "Technical Standby" },
];

const MetricsBar = () => {
  return (
    <section className="relative z-20 -mt-10 mx-6">
      <div className="max-w-7xl mx-auto bg-navy-950 rounded-2xl shadow-2xl overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-800">
          {metrics.map((item, index) => (
            <div
              key={index}
              className="p-8 lg:p-10 hover:bg-slate-900 transition-colors group"
            >
              <p className="text-teal-500 text-xs font-black uppercase tracking-[0.2em] mb-2">
                {item.label}
              </p>
              <div className="flex items-baseline gap-1">
                <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tighter">
                  {item.value}
                </h2>
              </div>
              <p className="text-slate-500 text-sm mt-1 font-medium group-hover:text-slate-300 transition-colors">
                {item.sub}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle "Trust Badge" row below the metrics */}
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-8 lg:gap-16 py-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
        <span className="font-black text-slate-400 tracking-widest text-sm">
          ISO 13485
        </span>
        <span className="font-black text-slate-400 tracking-widest text-sm">
          CE MARKED
        </span>
        <span className="font-black text-slate-400 tracking-widest text-sm">
          GMP COMPLIANT
        </span>
        <span className="font-black text-slate-400 tracking-widest text-sm">
          FDA 510(K)
        </span>
      </div>
    </section>
  );
};

export default MetricsBar;
