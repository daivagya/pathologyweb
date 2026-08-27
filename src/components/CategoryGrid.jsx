import React from "react";
import Link from "next/link";

const categories = [
  {
    title: "Hematology",
    description:
      "Advanced 3-part and 5-part differential analyzers for high-throughput labs.",
    count: "08 Models",
    link: "/products/hematology",
    size: "large", // Takes up more space for visual weight
  },
  {
    title: "Biochemistry",
    description:
      "Fully automated clinical chemistry systems with precise reagent handling.",
    count: "05 Models",
    link: "/products/biochemistry",
    size: "small",
  },
  {
    title: "Immunology",
    description: "High-sensitivity chemiluminescence systems.",
    count: "03 Models",
    link: "/products/immunology",
    size: "small",
  },
  {
    title: "Urinalysis",
    description: "Integrated strip reading and sediment microscopy.",
    count: "04 Models",
    link: "/products/urinalysis",
    size: "medium",
  },
];

const CategoryGrid = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight">
              Diagnostic <span className="text-teal-600">Specialties.</span>
            </h2>
            <p className="text-slate-500 mt-4 text-lg">
              Explore our diverse range of precision-engineered diagnostic
              solutions tailored for modern clinical requirements.
            </p>
          </div>
          <Link
            href="/products"
            className="text-navy-950 font-bold border-b-2 border-navy-950 pb-1 hover:text-teal-600 hover:border-teal-600 transition-all"
          >
            View All Categories
          </Link>
        </div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {categories.map((cat, idx) => (
            <Link
              key={idx}
              href={cat.link}
              className={`group relative overflow-hidden rounded-3xl bg-slate-50 border border-slate-100 p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/10 hover:-translate-y-1 ${
                cat.size === "large"
                  ? "md:col-span-8 h-[400px]"
                  : cat.size === "medium"
                    ? "md:col-span-7 h-[350px]"
                    : "md:col-span-4 h-[350px]"
              }`}
            >
              {/* Decorative Background Icon/Number */}
              <span className="absolute -right-4 -bottom-10 text-[180px] font-black text-slate-200/40 select-none group-hover:text-teal-500/10 transition-colors">
                {idx + 1}
              </span>

              <div className="relative z-10 flex flex-col h-full">
                <span className="text-teal-600 font-bold text-sm tracking-widest uppercase mb-4">
                  {cat.count}
                </span>
                <h3 className="text-3xl font-bold text-navy-950 mb-4">
                  {cat.title}
                </h3>
                <p className="text-slate-600 max-w-xs leading-relaxed">
                  {cat.description}
                </p>

                <div className="mt-auto flex items-center gap-2 text-navy-950 font-bold opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                  Explore Systems <span className="text-teal-600">→</span>
                </div>
              </div>

              {/* Hover blueprint effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-teal-500/20 rounded-3xl transition-all"></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
