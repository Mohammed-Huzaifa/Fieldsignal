"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import ApproachPage from "../Approach";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState("/");

  useEffect(() => {
    // Basic path tracking for demo purposes
    const path = window.location.pathname;
    setActivePath(path);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      label: "Services",
      href: "/services",
      children: [
        { label: "Services Overview", href: "/services" },
        { label: "AI Readiness", href: "/services/ai-readiness" },
        { label: "AI Enablement", href: "/services/ai-enablement" },
      ],
    },
    { label: "Approach", href: "/approach" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Insights", href: "/insights" },
    { label: "Resources", href: "/resources" },
    { label: "Company", href: "/company" },
  ];

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    if (href.startsWith("/")) {
      e.preventDefault();
      window.history.pushState({}, "", href);
      window.dispatchEvent(new PopStateEvent("popstate"));
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md border-b border-gray-100 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <a 
            href="/" 
            onClick={(e) => handleNavClick(e, "/")}
            className="text-2xl font-bold tracking-tighter text-[#1F2328]"
          >
            FieldSignal
          </a>
          
          <nav className="hidden lg:flex items-center gap-8">
  {navItems.map((item) => {
    const isActive =
      activePath === item.href ||
      (item.children?.some((c) => c.href === activePath) ?? false);

    if (item.children?.length) {
      return (
        <div key={item.label} className="relative group">
          <a
            href={item.href}
            onClick={(e) => handleNavClick(e, item.href)}
            className={`text-sm font-medium transition-colors ${
              isActive ? "text-[#14B8A6]" : "text-[#6B7280] hover:text-[#1F2328]"
            }`}
          >
            {item.label}
          </a>

          <div className="absolute left-0 top-full pt-3 opacity-0 translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-150">
            <div className="w-64 rounded-xl border border-gray-100 bg-white shadow-lg p-2">
              {item.children.map((child) => (
                <a
                  key={child.href}
                  href={child.href}
                  onClick={(e) => handleNavClick(e, child.href)}
                  className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    activePath === child.href
                      ? "bg-[#14B8A6]/10 text-[#14B8A6]"
                      : "text-[#1F2328] hover:bg-gray-50"
                  }`}
                >
                  {child.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      );
    }

    return (
      <a
        key={item.label}
        href={item.href}
        onClick={(e) => handleNavClick(e, item.href)}
        className={`text-sm font-medium transition-colors ${
          isActive ? "text-[#14B8A6]" : "text-[#6B7280] hover:text-[#1F2328]"
        }`}
      >
        {item.label}
      </a>
    );
  })}
</nav>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <button className="text-sm font-semibold text-[#1F2328] hover:text-[#14B8A6] transition-colors">
            Contact
          </button>
          <button className="px-5 py-2.5 bg-[#1F2328] text-white text-sm font-bold rounded-lg hover:bg-black transition-colors">
            Run AI Readiness
          </button>
        </div>

        <button 
          className="lg:hidden p-2 text-[#1F2328]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-6 lg:hidden"
          >
            <nav className="flex flex-col gap-6">
            {navItems.map((item) => (
  <div key={item.label} className="flex flex-col gap-2">
    <a
      href={item.href}
      className="text-lg font-medium text-[#1F2328]"
      onClick={(e) => handleNavClick(e as any, item.href)}
    >
      {item.label}
    </a>

    {item.children?.length ? (
      <div className="pl-4 flex flex-col gap-2">
        {item.children.map((child) => (
          <a
            key={child.href}
            href={child.href}
            className="text-sm font-medium text-[#6B7280]"
            onClick={(e) => handleNavClick(e as any, child.href)}
          >
            {child.label}
          </a>
        ))}
      </div>
    ) : null}
  </div>
))}
              <div className="pt-6 border-t border-gray-100 flex flex-col gap-4">
                <button className="w-full py-4 text-center font-bold text-[#1F2328] border border-gray-200 rounded-lg">
                  Book a Call
                </button>
                <button className="w-full py-4 text-center font-bold text-white bg-[#14B8A6] rounded-lg">
                  Run AI Readiness
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
