import Link from "next/link";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About | Spectrum Pathology",
  description:
    "Spectrum Pathology engineers precision diagnostic analyzers for global clinical excellence — ISO 13485 and CE certified.",
};

const blueprintPattern = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 60H0V0h60v60zM1 59h58V1H1v58z' fill='%23000' fill-rule='evenodd'/%3E%3C/svg%3E")`;

const stats = [
  { label: "Years in Diagnostics", value: "18+" },
  { label: "Global Installations", value: "500+" },
  { label: "Countries Served", value: "15+" },
  { label: "R&D Engineers", value: "140" },
];

const values = [
  {
    title: "Precision First",
    description:
      "Every component is engineered to a tolerance that meets or exceeds international reference standards.",
  },
  {
    title: "Reliability",
    description:
      "Machines designed for continuous, uninterrupted operation in demanding laboratory environments.",
  },
  {
    title: "Clinical Partnership",
    description:
      "We measure success by the accuracy of our customers' results — not just the units we ship.",
  },
];

const milestones = [
  {
    year: "2008",
    title: "Founded in Mumbai",
    description:
      "Spectrum begins with a single vision: build diagnostic instruments for the labs of tomorrow.",
  },
  {
    year: "2013",
    title: "First Hematology H3000",
    description:
      "Flagship 5-part analyzer launches and lands installs across Southern Asia and the Middle East.",
  },
  {
    year: "2017",
    title: "ISO 13485 & CE Marking",
    description:
      "Quality management system certified and all product lines CE marked for EU distribution.",
  },
  {
    year: "2021",
    title: "Global Service Network",
    description:
      "Reach 15+ countries with a regional engineer network and sub-2-hour response SLA.",
  },
  {
    year: "2025",
    title: "500th Installation",
    description:
      "Five hundred laboratories running Spectrum analyzers — and counting.",
  },
];

const team = [
  { name: "Dr. Aarav Mehta", role: "Founder & CEO", initials: "AM" },
  { name: "Priya Nair", role: "VP, Research & Development", initials: "PN" },
  { name: "Rohan Khanna", role: "Chief Quality Officer", initials: "RK" },
  { name: "Dr. Sana Iqbal", role: "Head, Clinical Affairs", initials: "SI" },
  { name: "Vikram Rao", role: "Director, Global Sales", initials: "VR" },
  { name: "Ananya Singh", role: "Director, Field Service", initials: "AS" },
];

const AboutPage = () => {
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
            Our Story
          </div>
          <h1 className="text-6xl lg:text-8xl font-bold text-navy-950 tracking-tighter leading-[0.9] mb-8">
            Building the labs <br />
            <span className="text-teal-500">of tomorrow.</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl font-medium">
            Spectrum Pathology designs and manufactures the diagnostic
            analyzers that power modern clinical laboratories — combining
            precision engineering with the speed modern medicine demands.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <h2 className="text-4xl lg:text-5xl font-bold text-navy-950 tracking-tighter">
                {stat.value}
              </h2>
              <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission / Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight mb-6">
              What <span className="text-teal-600">Drives Us.</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Our mission is simple: make world-class diagnostic precision
              accessible to every laboratory — from a rural clinic to a
              ​reference hospital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, idx) => (
              <div
                key={value.title}
                className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-teal-500/30 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500"
              >
                <span className="text-teal-600 font-bold text-sm tracking-widest uppercase mb-6 block">
                  0{idx + 1}
                </span>
                <h3 className="text-2xl font-bold text-navy-950 mb-4">
                  {value.title}
                </h3>
                <p className="text-slate-500 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-slate-50 overflow-hidden relative">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: blueprintPattern }}
        ></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight">
              Our <span className="text-teal-600">Milestones.</span>
            </h2>
          </div>

          <div className="relative border-l-2 border-slate-200 pl-10 md:pl-14 space-y-12">
            {milestones.map((milestone) => (
              <div key={milestone.year} className="relative">
                <span className="absolute -left-[3.35rem] md:-left-[4.35rem] top-1 w-4 h-4 rounded-full bg-teal-500 border-4 border-white shadow"></span>
                <span className="text-teal-600 font-black text-sm tracking-widest">
                  {milestone.year}
                </span>
                <h3 className="text-2xl font-bold text-navy-950 mt-2 mb-2">
                  {milestone.title}
                </h3>
                <p className="text-slate-500 leading-relaxed max-w-2xl">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight">
              Leadership <span className="text-teal-600">Team.</span>
            </h2>
            <p className="text-slate-500 mt-4 text-lg">
              The engineers, clinicians and operators behind every analyzer.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 flex items-center gap-6 hover:border-teal-500/30 transition-all duration-500"
              >
                <div className="w-16 h-16 flex-none rounded-2xl bg-navy-950 flex items-center justify-center text-white font-black text-lg">
                  {member.initials}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy-950">
                    {member.name}
                  </h3>
                  <p className="text-slate-400 text-sm font-medium">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing strip */}
      <section className="py-24 bg-navy-950 overflow-hidden relative">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 60H0V0h60v60zM1 59h58V1H1v58z' fill='%23fff' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-teal-400 font-bold text-sm tracking-[0.3em] uppercase mb-4 block">
                Built to Last
              </span>
              <h2 className="text-4xl lg:text-6xl font-bold text-white tracking-tighter leading-tight mb-6">
                ISO Class 7 <br />
                <span className="text-teal-500">Cleanrooms.</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Every analyzer is assembled, calibrated and stress-tested in a
                controlled manufacturing environment — matching the rigor of
                the instruments themselves.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                ["ISO 13485", "Quality System"],
                ["CE MARKED", "EU Compliance"],
                ["GMP", "Certified Facility"],
                ["FDA 510(K)", "De Novo Submissions"],
              ].map(([badge, sub]) => (
                <div
                  key={badge}
                  className="p-8 rounded-2xl bg-slate-900 border border-slate-800 text-center"
                >
                  <p className="text-white font-black tracking-widest">
                    {badge}
                  </p>
                  <p className="text-slate-500 text-sm mt-1 font-medium">
                    {sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </>
  );
};

export default AboutPage;