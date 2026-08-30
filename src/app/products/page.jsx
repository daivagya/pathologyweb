import Link from "next/link";
import Footer from "@/components/Footer";
import { categories } from "@/data/products";

export const metadata = {
  title: "Products | Spectrum Pathology",
  description:
    "Explore the Spectrum catalog of precision-engineered diagnostic analyzers — Hematology, Biochemistry, Immunology, Urinalysis and POCT systems.",
};

const blueprintPattern = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 60H0V0h60v60zM1 59h58V1H1v58z' fill='%23000' fill-rule='evenodd'/%3E%3C/svg%3E")`;

const totalModels = categories.reduce(
  (sum, category) => sum + category.models.length,
  0
);

const flagship = categories[0].models.find((model) => model.featured);

const ProductsPage = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-slate-50">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: blueprintPattern }}
        ></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 text-teal-600 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="flex h-2 w-2 rounded-full bg-teal-500 animate-pulse"></span>
            Diagnostic Catalog
          </div>
          <h1 className="text-6xl lg:text-8xl font-bold text-navy-950 tracking-tighter leading-[0.9] mb-8">
            Product <br />
            <span className="text-teal-500">Lines.</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-xl font-medium">
            {totalModels} precision-engineered analyzers across 5 clinical
            specialties — designed, manufactured and validated for modern
            laboratories.
          </p>
        </div>
      </section>

      {/* Category Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight">
                Browse by <span className="text-teal-600">Specialty.</span>
              </h2>
              <p className="text-slate-500 mt-4 text-lg">
                Select a diagnostic discipline to explore the full model
                lineup, specifications and output levels.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/products/${cat.slug}`}
                className="group relative overflow-hidden rounded-3xl bg-slate-50 border border-slate-100 p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/10 hover:-translate-y-1 min-h-[280px] flex flex-col"
              >
                <span className="absolute -right-4 -bottom-10 text-[160px] font-black text-slate-200/40 select-none group-hover:text-teal-500/10 transition-colors">
                  {cat.models.length}
                </span>
                <div className="relative z-10 flex flex-col h-full">
                  <span className="text-teal-600 font-bold text-sm tracking-widest uppercase mb-4">
                    {cat.count}
                  </span>
                  <h3 className="text-3xl font-bold text-navy-950 mb-4">
                    {cat.title}
                  </h3>
                  <p className="text-slate-600 max-w-sm leading-relaxed mb-6">
                    {cat.description}
                  </p>
                  <div className="mt-auto flex items-center gap-2 text-navy-950 font-bold opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                    Explore Systems <span className="text-teal-600">→</span>
                  </div>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-teal-500/20 rounded-3xl transition-all"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship Feature */}
      <section className="py-24 bg-slate-50 overflow-hidden relative">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: blueprintPattern }}
        ></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-teal-600 font-bold text-sm tracking-[0.3em] uppercase mb-4 block">
                Flagship System
              </span>
              <h2 className="text-4xl lg:text-6xl font-bold text-navy-950 tracking-tighter mb-8">
                SPX-H3000
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
                80 samples per hour. 29 parameters. Timing-gated flow cytometry
                that sets the benchmark for hematology throughput and
                precision.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "CBC + 5-Part DIFF + NRBC",
                  "Closed & open tube sampling",
                  "Auto reticulocyte mode",
                  "29 parameters with WDF scattergram",
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-teal-500 flex-none"></span>
                    <span className="text-slate-700 font-medium">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href="/products/hematology"
                className="group inline-flex items-center gap-4 py-2 text-navy-950 font-bold border-b-2 border-navy-950 hover:text-teal-600 hover:border-teal-600 transition-all"
              >
                View the Hematology Line
                <span className="group-hover:translate-x-2 transition-transform">
                  →
                </span>
              </Link>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white rounded-3xl p-8 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-slate-100">
                <div className="aspect-square bg-slate-50 rounded-2xl flex items-center justify-center p-6">
                  <img
                    src={flagship.image}
                    alt={flagship.name}
                    className="w-full h-full object-contain rounded-xl"
                  />
                </div>
                <h3 className="text-navy-900 font-bold text-xl uppercase tracking-widest mt-6 text-center">
                  {flagship.name}
                </h3>
                <p className="text-slate-400 text-sm mt-2 text-center">
                  {flagship.tagline}
                </p>
              </div>
              <div className="absolute -right-8 top-1/4 bg-white p-5 rounded-2xl shadow-xl border border-slate-50">
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
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ProductsPage;