"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-40 overflow-hidden">
      {/* Background Abstract Pattern */}
      {/* Background Video */}
<video
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
>
  <source src="/videos/home-banner-1.mp4" type="video/mp4" />
</video>

{/* Optional overlay for readability */}
<div className="absolute inset-0 bg-black/20 pointer-events-none" />


      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 bg-[#E6F0FA] text-[#6366F1] text-xs font-bold tracking-widest uppercase rounded mb-6">
              AI Operating Layer
            </span>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-8 text-[#1F2328]">
              Turn AI into how <br className="hidden md:block" />work gets done.
            </h1>
            <p className="text-xl md:text-2xl text-[#6B7280] mb-12 leading-relaxed max-w-2xl">
              FieldSignal helps organizations move beyond AI pilots by deploying AI as an operating layer. Structured systems, governed workflows, and teams trained to use AI with confidence.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-16">
              <button className="w-full sm:w-auto px-8 py-4 bg-[#14B8A6] text-white font-bold rounded-lg hover:bg-[#0D9488] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#14B8A6]/20">
                Run the AI Readiness
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-[#1F2328] font-bold rounded-lg border border-gray-200 hover:border-[#1F2328] transition-all flex items-center justify-center gap-2 group">
                See the Operating Layer
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="flex items-center gap-4 text-sm font-medium text-[#6B7280]">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200"></div>
                ))}
              </div>
              <p>Built for real teams in real environments. Toronto-rooted, globally fluent.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
