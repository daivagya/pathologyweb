import React from "react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      {/* Blueprint Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 60H0V0h60v60zM1 59h58V1H1v58z' fill='%23000' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 text-teal-600 text-xs font-bold uppercase tracking-widest mb-6">
              <span className="flex h-2 w-2 rounded-full bg-teal-500 animate-pulse"></span>
              ISO 13485 Certified Manufacturing
            </div>

            <h1 className="text-6xl lg:text-8xl font-bold text-navy-950 tracking-tighter leading-[0.9] mb-8">
              Diagnostic <br />
              <span className="text-teal-500">Precision.</span>
            </h1>

            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-md font-medium">
              Spectrum engineers the next generation of pathology analyzers,
              delivering clinical accuracy at the speed of modern medicine.
            </p>

            <div className="flex items-center gap-6">
              <button className="bg-navy-950 text-white px-10 py-5 rounded-full font-bold hover:bg-teal-600 transition-all duration-300 shadow-2xl shadow-navy-950/20">
                Explore Catalog
              </button>
              <button className="group flex items-center gap-2 font-bold text-navy-950">
                Contact Sales
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
            </div>
          </div>

          {/* Unique Machinery Display */}
          <div className="relative">
            <div className="relative z-10 aspect-[4/5] bg-white rounded-3xl p-8 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-slate-100 transition-transform duration-700 hover:scale-[1.02]">
              <div className="w-full h-full bg-slate-50 rounded-2xl flex items-center justify-center p-8 text-center">
                {/* Product Image */}
                <img
                  src="/Screenshot%202026-08-27%20201140.png"
                  alt="SPX-H3000 Flagship Hematology Analyzer"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* The "Bounce Slow" Badge */}
              <div className="absolute -right-8 top-1/4 bg-white p-5 rounded-2xl shadow-xl border border-slate-50 animate-bounce-slow">
                <div className="flex flex-col">
                  <span className="text-slate-400 text-[10px] font-black uppercase tracking-tighter">
                    Throughput
                  </span>
                  <span className="text-2xl font-bold text-navy-950">
                    80 <span className="text-xs text-teal-500">S/H</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Decorative Shadow behind the product */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-teal-500/5 blur-[120px] rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
