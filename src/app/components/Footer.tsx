"use client";

import React from "react";
import { Linkedin, Twitter, ArrowUpRight } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white pt-24 pb-12 border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-12 mb-20">
          <div className="col-span-2 md:col-span-4">
            <a href="/" className="text-2xl font-bold tracking-tighter text-[#1F2328] block mb-6">
              FieldSignal
            </a>
            <p className="text-[#6B7280] leading-relaxed max-w-xs mb-8">
              AI, deployed as an operating layer. Structured, governed, and built for real work.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-[#1F2328] hover:bg-[#F8F9FB] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-[#1F2328] hover:bg-[#F8F9FB] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h4 className="font-bold text-[#1F2328] mb-6">Services</h4>
            <ul className="space-y-4">
              {["AI Readiness", "AI Enablement", "Fractional AI", "KnowledgeStack", "AI Agents"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-[#6B7280] hover:text-[#1F2328] transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h4 className="font-bold text-[#1F2328] mb-6">Approach</h4>
            <ul className="space-y-4">
              {["The Framework", "Operating Layer", "Governance", "Training", "Case Studies"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-[#6B7280] hover:text-[#1F2328] transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h4 className="font-bold text-[#1F2328] mb-6">Resources</h4>
            <ul className="space-y-4">
              {["Insights", "Playbook", "Assessment", "Newsletter", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-[#6B7280] hover:text-[#1F2328] transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h4 className="font-bold text-[#1F2328] mb-6">Company</h4>
            <ul className="space-y-4">
              {["About", "Careers", "Toronto Roots", "Privacy", "Terms"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-[#6B7280] hover:text-[#1F2328] transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs text-[#6B7280] font-medium tracking-widest uppercase">
            Toronto-rooted. Globally wired.
          </div>
          <div className="text-xs text-[#6B7280]">
            © {currentYear} FieldSignal. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
