import React from "react";

const Manufacturing = () => {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Text Content */}
          <div>
            <span className="text-teal-600 font-bold text-sm tracking-[0.3em] uppercase mb-4 block">
              Our Infrastructure
            </span>
            <h2 className="text-4xl lg:text-6xl font-bold text-navy-950 tracking-tighter mb-8">
              Where Engineering <br /> Meets{" "}
              <span className="text-slate-400 font-light italic">
                Diagnostics.
              </span>
            </h2>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-none w-12 h-12 rounded-lg bg-white shadow-sm border border-slate-200 flex items-center justify-center text-navy-950 font-bold">
                  01
                </div>
                <div>
                  <h4 className="text-xl font-bold text-navy-950 mb-2">
                    R&D Centric Design
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    Every analyzer is born in our dedicated research facility,
                    ensuring hardware and software are perfectly synced for
                    accuracy.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-none w-12 h-12 rounded-lg bg-white shadow-sm border border-slate-200 flex items-center justify-center text-navy-950 font-bold">
                  02
                </div>
                <div>
                  <h4 className="text-xl font-bold text-navy-950 mb-2">
                    Quality Control Labs
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    Multi-stage stress testing and calibration against
                    international reference standards before any unit leaves our
                    floor.
                  </p>
                </div>
              </div>
            </div>

            <button className="mt-12 group flex items-center gap-4 py-2 text-navy-950 font-bold border-b-2 border-navy-950 hover:text-teal-600 hover:border-teal-600 transition-all">
              Learn about our Manufacturing
              <span className="group-hover:translate-x-2 transition-transform">
                →
              </span>
            </button>
          </div>

          {/* Right: Technical Visual */}
          <div className="relative">
            {/* The "Precision" Image Frame */}
            <div className="relative z-10 rounded-[2rem] overflow-hidden border-[12px] border-white shadow-2xl">
              <div className="aspect-video bg-navy-900 flex items-center justify-center overflow-hidden">
                {/* Visualizing a clean manufacturing environment */}
                <div className="absolute inset-0 opacity-20 grayscale">
                  {/* Add a subtle technical overlay pattern */}
                  <div
                    className="h-full w-full"
                    style={{
                      backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
                      backgroundSize: "30px 30px",
                    }}
                  ></div>
                </div>
                <div className="relative text-center p-12">
                  <div className="text-teal-500 font-mono text-xs mb-4 tracking-[0.5em] uppercase">
                    Status: Controlled Environment
                  </div>
                  <div className="w-16 h-1 bg-teal-500 mx-auto mb-6"></div>
                  <p className="text-white font-medium text-lg">
                    ISO Class 7 Cleanroom Certified
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-navy-950/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manufacturing;
