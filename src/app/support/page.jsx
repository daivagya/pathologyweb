import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Support | Spectrum Pathology",
  description:
    "Spectrum service network — technical support, AMC & maintenance, training, spare parts and a 24/7 support hotline for diagnostic analyzers.",
};

const blueprintPattern = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 60H0V0h60v60zM1 59h58V1H1v58z' fill='%23000' fill-rule='evenodd'/%3E%3C/svg%3E")`;

const stats = [
  { label: "Support Response", value: "<2hr", sub: "Technical Standby" },
  { label: "Hotline", value: "24/7", sub: "Always Available" },
  { label: "Countries", value: "15+", sub: "Service Network" },
  { label: "Parts Warranty", value: "90 Day", sub: "On Replacements" },
];

const services = [
  {
    title: "Technical Support",
    description:
      "On-call engineers available for real-time troubleshooting and diagnostics.",
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
  {
    title: "Spare Parts",
    description:
      "Genuine, factory-tested components dispatched with warranty-backed support.",
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
          d="M5 8h11M5 12h11M5 16h6m10.618 1.523a6 6 0 01-3.618-8.59 6 6 0 10-9.19 5.776M3 3h.01M21 21h.01"
        />
      </svg>
    ),
  },
];

const amcTiers = [
  {
    name: "Essential",
    tagline: "For low-usage satellite labs",
    features: [
      "2 preventive maintenance visits / year",
      "Remote troubleshooting support",
      "Priority phone & email access",
      "Standard response SLA (24 hrs)",
    ],
  },
  {
    name: "Standard",
    tagline: "For routine clinical workloads",
    features: [
      "4 preventive maintenance visits / year",
      "Priority spare part dispatch",
      "Remote calibration assist",
      "Fast response SLA (8 hrs)",
    ],
    highlighted: true,
  },
  {
    name: "Comprehensive",
    tagline: "For high-throughput core labs",
    features: [
      "Unlimited on-call engineer visits",
      "Genuine spare parts included",
      "Quarterly performance audits",
      "Premium response SLA (<2 hrs)",
    ],
  },
];

const regions = [
  {
    region: "South Asia",
    presence:
      "India, Nepal, Bangladesh, Sri Lanka — regional hubs, local engineers.",
  },
  {
    region: "Middle East & Africa",
    presence:
      "UAE, Saudi Arabia, Kenya, Nigeria, Egypt — partner service centers.",
  },
  {
    region: "Southeast Asia",
    presence:
      "Indonesia, Vietnam, Philippines — distributor-supported coverage.",
  },
  {
    region: "Latin America",
    presence:
      "Colombia, Mexico, Peru — certified service partners on standby.",
  },
];

const faqs = [
  {
    question: "How do I register my analyzer for an AMC?",
    answer:
      "Share your machine serial number and installation address with our service desk — our team activates your coverage plan within one business day.",
  },
  {
    question: "What is covered under the out-of-box warranty?",
    answer:
      "Every Spectrum analyzer ships with a 12-month manufacturer warranty covering parts and labour. Extended coverage is available through annual maintenance contracts.",
  },
  {
    question: "How fast is emergency on-site support?",
    answer:
      "Comprehensive plan holders receive engineer dispatch within 2 hours of a confirmed critical fault in covered regions, with a 24-hour standard for remote assistance.",
  },
  {
    question: "Can I order spare parts directly?",
    answer:
      "Yes — genuine spare parts are ordered through the service desk or the regional engineer. Parts dispatched during business hours ship the same day with a 90-day warranty.",
  },
  {
    question: "Do you provide operator training after installation?",
    answer:
      "Every installation includes hands-on onboarding for your technicians, with refresher training and proficiency certification available on request.",
  },
];

const SupportPage = () => {
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
            <span className="text-white font-semibold">Support</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="flex h-2 w-2 rounded-full bg-teal-500 animate-pulse"></span>
            Service & Support
          </div>
          <h1 className="text-6xl lg:text-8xl font-bold text-white tracking-tighter leading-[0.9] mb-8">
            Service <br />
            <span className="text-teal-500">Excellence.</span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl font-medium">
            The purchase is only the beginning. Our dedicated service network
            keeps your laboratory running — engineered support, genuine parts
            and training built to last.
          </p>
        </div>
      </section>

      {/* SLA Trust Bar */}
      <section className="relative z-20 -mt-10 mx-6">
        <div className="max-w-7xl mx-auto bg-navy-950 rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-800">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-8 lg:p-10 hover:bg-slate-900 transition-colors"
              >
                <p className="text-teal-500 text-xs font-black uppercase tracking-[0.2em] mb-2">
                  {stat.label}
                </p>
                <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tighter">
                  {stat.value}
                </h2>
                <p className="text-slate-500 text-sm mt-1 font-medium">
                  {stat.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Pillars */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight mb-6">
              Support <span className="text-teal-600">Pillars.</span>
            </h2>
            <p className="text-slate-500 text-lg">
              Everything you need to keep every Spectrum analyzer performing at
              its clinical best.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="group p-8 rounded-3xl bg-white border border-slate-200 hover:border-teal-500/30 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-navy-900 group-hover:bg-teal-500 group-hover:text-white transition-colors duration-500 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-navy-950 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-500 leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link
                  href="/contact"
                  className="text-sm font-black uppercase tracking-widest text-navy-950 group-hover:text-teal-600 flex items-center gap-2 transition-colors"
                >
                  Get Started
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AMC Tiers */}
      <section className="py-24 bg-slate-50 overflow-hidden relative">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: blueprintPattern }}
        ></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight mb-6">
              Maintenance <span className="text-teal-600">Plans.</span>
            </h2>
            <p className="text-slate-500 text-lg">
              Annual Maintenance Contracts built around your throughput and
              coverage needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {amcTiers.map((tier) => (
              <div
                key={tier.name}
                className={`p-8 rounded-3xl transition-all duration-500 ${
                  tier.highlighted
                    ? "bg-navy-950 text-white shadow-2xl shadow-navy-950/20 md:-mt-4 md:mb-4"
                    : "bg-white border border-slate-200"
                }`}
              >
                <h3
                  className={`text-2xl font-bold ${
                    tier.highlighted ? "text-teal-400" : "text-navy-950"
                  } mb-2`}
                >
                  {tier.name}
                </h3>
                <p
                  className={`text-sm mb-6 ${
                    tier.highlighted ? "text-slate-400" : "text-slate-400"
                  }`}
                >
                  {tier.tagline}
                </p>
                <ul className="space-y-3.5 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span
                        className={`w-1.5 h-1.5 rounded-full mt-2 flex-none ${
                          tier.highlighted
                            ? "bg-teal-400"
                            : "bg-teal-500"
                        }`}
                      ></span>
                      <span
                        className={`text-sm leading-relaxed ${
                          tier.highlighted
                            ? "text-slate-300"
                            : "text-slate-600"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`inline-flex items-center justify-center w-full px-6 py-3.5 rounded-full text-sm font-bold transition-all ${
                    tier.highlighted
                      ? "bg-teal-500 text-navy-950 hover:bg-teal-400"
                      : "bg-navy-950 text-white hover:bg-teal-600"
                  }`}
                >
                  Request Plan
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Network */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-teal-600 font-bold text-sm tracking-[0.3em] uppercase mb-4 block">
                Global Network
              </span>
              <h2 className="text-4xl lg:text-6xl font-bold text-navy-950 tracking-tighter mb-6">
                15+ Countries. <br />
                <span className="text-teal-600">Local Engineers.</span>
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-10">
                Regional hubs, distributor centers and direct engineers keep
                response times short no matter where your lab operates.
              </p>
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 flex-none">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {regions.map((region) => (
                <div
                  key={region.region}
                  className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-teal-500/30 transition-all duration-500"
                >
                  <h3 className="text-xl font-bold text-navy-950 mb-3">
                    {region.region}
                  </h3>
                  <p className="text-slate-500 leading-relaxed text-sm">
                    {region.presence}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-50 overflow-hidden relative">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: blueprintPattern }}
        ></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight">
              Frequently Asked <span className="text-teal-600">Questions.</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group bg-white border border-slate-200 rounded-2xl overflow-hidden open:border-teal-500/30"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-8 py-6 font-bold text-navy-950">
                  {faq.question}
                  <span className="text-teal-600 flex-none transition-transform duration-300 group-open:rotate-45 text-xl">
                    +
                  </span>
                </summary>
                <p className="px-8 pb-6 text-slate-500 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-500 mb-6">
              Still need help? Our engineers are one call away.
            </p>
            <Link
              href="/contact"
              className="inline-flex bg-navy-950 text-white px-10 py-5 rounded-full font-bold hover:bg-teal-600 transition-all shadow-xl shadow-navy-950/20"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default SupportPage;