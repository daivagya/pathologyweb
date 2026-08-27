import React from "react";

const FinalCTA = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative bg-slate-50 rounded-[3rem] p-12 md:p-20 border border-slate-100 overflow-hidden text-center">
          {/* Subtle Technical Pattern */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%23000' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            }}
          ></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-navy-950 tracking-tighter leading-tight mb-8">
              Ready to Upgrade Your{" "}
              <span className="text-teal-600">Lab Infrastructure?</span>
            </h2>
            <p className="text-xl text-slate-500 mb-12 leading-relaxed">
              Consult with our technical experts to find the right diagnostic
              machinery for your workload and clinical requirements.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="w-full sm:w-auto bg-navy-950 text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-teal-600 transition-all shadow-xl shadow-navy-950/20">
                Request a Custom Quote
              </button>
              <button className="w-full sm:w-auto bg-white text-navy-950 border border-slate-200 px-12 py-5 rounded-full font-bold text-lg hover:bg-slate-50 transition-colors">
                Download Full Catalog
              </button>
            </div>

            <p className="mt-10 text-sm text-slate-400 font-medium">
              Average response time:{" "}
              <span className="text-navy-950 font-bold">Within 24 Hours</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
