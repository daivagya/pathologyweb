import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import { getCategory, getCategorySlugs } from "@/data/products";

export function generateStaticParams() {
  return getCategorySlugs();
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return {
    title: `${category.title} | Spectrum Pathology`,
    description: category.description,
  };
}

const blueprintPattern = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 60H0V0h60v60zM1 59h58V1H1v58z' fill='%23000' fill-rule='evenodd'/%3E%3C/svg%3E")`;

const CategoryPage = async ({ params }) => {
  const { category: slug } = await params;
  const category = getCategory(slug);

  if (!category) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-navy-950">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 60H0V0h60v60zM1 59h58V1H1v58z' fill='%23fff' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
            <Link href="/" className="hover:text-teal-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/products"
              className="hover:text-teal-400 transition-colors"
            >
              Products
            </Link>
            <span>/</span>
            <span className="text-white font-semibold">{category.title}</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="flex h-2 w-2 rounded-full bg-teal-500 animate-pulse"></span>
            {category.count}
          </div>
          <h1 className="text-6xl lg:text-8xl font-bold text-white tracking-tighter leading-[0.9] mb-8">
            {category.title}
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl font-medium">
            {category.blurb}
          </p>
        </div>
      </section>

      {/* Model Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight">
                Model <span className="text-teal-600">Lineup.</span>
              </h2>
              <p className="text-slate-500 mt-4 text-lg">
                {category.models.length} systems engineered for reliability,
                throughput and clinical accuracy.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.models.map((model) => (
              <article
                key={model.id}
                className="group flex flex-col rounded-3xl bg-white border border-slate-200 hover:border-teal-500/30 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 overflow-hidden"
              >
                <div className="relative aspect-[4/3] bg-slate-50 border-b border-slate-100 flex items-center justify-center p-6">
                  <img
                    src={model.image}
                    alt={model.name}
                    loading="lazy"
                    className="w-full h-full object-contain rounded-2xl"
                  />
                  {model.featured && (
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-teal-500 text-white text-[10px] font-black uppercase tracking-widest">
                      Flagship
                    </span>
                  )}
                </div>

                <div className="flex flex-col flex-1 p-8">
                  <h3 className="text-navy-900 font-bold text-xl uppercase tracking-widest">
                    {model.name}
                  </h3>
                  <p className="text-slate-400 text-sm mt-2 mb-5">
                    {model.tagline}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-slate-400 text-[10px] font-black uppercase tracking-tighter">
                        Throughput
                      </span>
                      <p className="text-xl font-bold text-navy-950">
                        {model.throughput}
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-slate-400 text-[10px] font-black uppercase tracking-tighter">
                        Menu
                      </span>
                      <p className="text-xl font-bold text-navy-950">
                        {model.parameters}
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-500 leading-relaxed mb-6">
                    {model.description}
                  </p>

                  <ul className="space-y-2.5 mb-8">
                    {model.specs.map((spec) => (
                      <li
                        key={spec}
                        className="flex items-start gap-2.5 text-sm text-slate-600"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 flex-none"></span>
                        {spec}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex items-center gap-2 text-navy-950 font-bold border-b-2 border-navy-950 pb-1 hover:text-teal-600 hover:border-teal-600 transition-all w-fit">
                    <Link href="/catalogs">Spec Sheet</Link>
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-slate-400 text-xs font-black uppercase tracking-widest mb-2">
                Want the full spec sheet?
              </p>
              <p className="text-navy-950 font-bold text-xl">
                Browse downloadable {category.title.toLowerCase()} catalogs.
              </p>
            </div>
            <Link
              href="/catalogs"
              className="group flex items-center gap-2 text-navy-950 font-bold border-b-2 border-navy-950 pb-1 hover:text-teal-600 hover:border-teal-600 transition-all flex-none"
            >
              View Catalogs
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Blueprint accent band */}
      <section className="py-20 bg-slate-50 overflow-hidden relative">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: blueprintPattern }}
        ></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-navy-950 tracking-tighter mb-6">
            Have the full range in one place?
          </h2>
          <p className="text-slate-500 text-lg mb-10 max-w-2xl mx-auto">
            Browse the complete diagnostic lineup and download literature for
            every product line.
          </p>
          <Link
            href="/products"
            className="inline-flex bg-navy-950 text-white px-10 py-5 rounded-full font-bold hover:bg-teal-600 transition-all shadow-xl shadow-navy-950/20"
          >
            View All Products
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CategoryPage;