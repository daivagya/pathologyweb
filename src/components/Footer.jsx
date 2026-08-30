import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-7 h-7 bg-navy-950 rounded-sm flex items-center justify-center">
                <span className="text-teal-400 font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-black tracking-tighter text-navy-950">
                SPECTRUM
              </span>
            </div>
            <p className="text-slate-500 max-w-xs leading-relaxed mb-6">
              Engineering precision diagnostic machinery for global clinical
              excellence. ISO 13485 & CE Certified.
            </p>
          </div>

          {/* Nav Columns */}
          <div>
            <h4 className="font-bold text-navy-950 mb-6 tracking-tight uppercase text-xs">
              Machinery
            </h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li>
                <Link
                  href="/products/hematology"
                  className="hover:text-teal-600"
                >
                  Hematology
                </Link>
              </li>
              <li>
                <Link
                  href="/products/biochemistry"
                  className="hover:text-teal-600"
                >
                  Biochemistry
                </Link>
              </li>
              <li>
                <Link
                  href="/products/immunology"
                  className="hover:text-teal-600"
                >
                  Immunology
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-navy-950 mb-6 tracking-tight uppercase text-xs">
              Company
            </h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li>
                <Link href="/about" className="hover:text-teal-600">
                  Manufacturing
                </Link>
              </li>
              <li>
                <Link href="/certifications" className="hover:text-teal-600">
                  Certifications
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-teal-600">
                  Service Network
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-teal-600">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-navy-950 mb-6 tracking-tight uppercase text-xs">
              Global
            </h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li>
                <Link href="#" className="hover:text-teal-600">
                  Partner Portal
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-teal-600">
                  Distributor Discovery
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-teal-600">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-400 font-medium tracking-wide">
            © {currentYear} SPECTRUM PATHOLOGY PVT. LTD. ALL RIGHTS RESERVED.
          </p>

          <div className="flex items-center gap-6 grayscale opacity-50">
            {/* Simple Text-based compliance badges for minimalist look */}
            <span className="text-[10px] font-black tracking-widest text-navy-950">
              ISO 13485
            </span>
            <span className="text-[10px] font-black tracking-widest text-navy-950">
              CE MARKED
            </span>
            <span className="text-[10px] font-black tracking-widest text-navy-950">
              GMP COMPLIANT
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
