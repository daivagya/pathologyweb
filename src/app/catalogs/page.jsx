import Link from "next/link";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { categories } from "@/data/products";

export const metadata = {
  title: "Catalogs | Spectrum Pathology",
  description:
    "Download Spectrum Pathology product catalogs, spec sheets and brochures for every diagnostic specialty.",
};

const catalogs = [
  {
    title: "Complete Product Catalog",
    pages: "64 Pages",
    size: "PDF · 8.4 MB",
    description:
      "Every analyzer across all five specialties in one comprehensive reference document.",
    href: "/products",
  },
  ...categories.map((category) => ({
    title: `${category.title} Catalog`,
    pages: `${8 + category.models.length * 3} Pages`,
    size: "PDF · 3.2 MB",
    description: category.blurb,
    href: `/products/${category.slug}`,
  })),
];

const CatalogsPage = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-slate-50">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 60H0V0h60v60zM1 59h58V1H1v58z' fill='%23000' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 text-teal-600 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="flex h-2 w-2 rounded-full bg-teal-500 animate-pulse"></span>
            Documentation
          </div>
          <h1 className="text-6xl lg:text-8xl font-bold text-navy-950 tracking-tighter leading-[0.9] mb-8">
            Product <br />
            <span className="text-teal-500">Catalogs.</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl font-medium">
            Detailed spec sheets, brochures and literature for every Spectrum
            diagnostic line — or browse the full range online.
          </p>
        </div>
      </section>

      {/* Catalog Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {catalogs.map((catalog) => (
              <article
                key={catalog.title}
                className="group flex flex-col rounded-3xl bg-white border border-slate-200 hover:border-teal-500/30 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 overflow-hidden"
              >
                <div className="relative aspect-[4/3] bg-slate-50 border-b border-slate-100 flex items-center justify-center p-8">
                  <div className="flex flex-col items-center">
                    <svg
                      className="w-16 h-16 text-slate-300 group-hover:text-teal-500 transition-colors duration-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2zM9 7h6M9 11h6M9 15h4"
                      />
                    </svg>
                    <span className="text-teal-600 font-bold text-sm tracking-widest uppercase mt-4">
                      {catalog.title}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-400 text-[10px] font-black uppercase tracking-widest">
                    {catalog.pages}
                  </div>
                </div>

                <div className="flex flex-col flex-1 p-8">
                  <p className="text-slate-500 leading-relaxed mb-8 flex-1">
                    {catalog.description}
                  </p>

                  <div className="flex flex-col gap-3">
                    <Link
                      href={catalog.href}
                      className="inline-flex items-center justify-center gap-2 bg-navy-950 text-white px-6 py-3.5 rounded-full text-sm font-bold hover:bg-teal-600 transition-all"
                    >
                      Browse Online
                      <span className="group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 border border-slate-200 text-navy-950 px-6 py-3 rounded-full text-sm font-bold hover:bg-slate-50 transition-colors"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                      Download PDF
                    </Link>
                    <p className="text-center text-xs text-slate-400 font-medium">
                      PDF sent by our team on request
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Note Band */}
          <div className="mt-16 p-10 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold text-navy-950 mb-2">
                Need literature for tender submissions?
              </h2>
              <p className="text-slate-500 leading-relaxed">
                Our commercial team can share full documentation packs —
                including IFU, compliance certificates and validated spec
                sheets — typically within 24 hours.
              </p>
            </div>
            <Link
              href="/contact"
              className="flex-none bg-navy-950 text-white px-8 py-4 rounded-full font-bold hover:bg-teal-600 transition-all shadow-lg shadow-navy-950/10"
            >
              Request Documentation
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </>
  );
};

export default CatalogsPage;