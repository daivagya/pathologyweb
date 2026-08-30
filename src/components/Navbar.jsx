import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-navy-950 rounded-sm flex items-center justify-center">
            <span className="text-teal-400 font-bold text-xl">S</span>
          </div>
          <span className="text-2xl font-extrabold tracking-tighter text-navy-950">
            SPECTRUM
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link
            href="/products"
            className="hover:text-teal-600 transition-colors"
          >
            Products
          </Link>
          <Link href="/about" className="hover:text-teal-600 transition-colors">
            About
          </Link>
          <Link
            href="/certifications"
            className="hover:text-teal-600 transition-colors"
          >
            Certifications
          </Link>
          <Link
            href="/catalogs"
            className="hover:text-teal-600 transition-colors"
          >
            Catalogs
          </Link>
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-4">
          <Link
            href="/support"
            className="hidden sm:block text-sm font-semibold text-navy-950 hover:opacity-70"
          >
            Support
          </Link>
          <button className="bg-navy-950 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-teal-700 transition-all shadow-lg shadow-navy-950/10">
            Request Quote
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
