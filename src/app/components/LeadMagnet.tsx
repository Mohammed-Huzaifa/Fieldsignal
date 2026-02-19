"use client";

import React from "react";
import { FileText, ClipboardList, ArrowRight } from "lucide-react";

export const LeadMagnet = () => {
  return (
    <section className="py-24 md:py-32 bg-[#E6F0FA]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-bold text-[#6366F1] tracking-widest uppercase mb-4">Featured Resources</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">Start here. Get clarity fast.</h2>
          <p className="text-lg text-[#6B7280]">
            Two simple ways to begin. Download the playbook to understand the full AI Operating Layer, or take the assessment to get a clear picture of your readiness.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Playbook Card */}
          <div className="bg-white p-10 md:p-12 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="relative z-10">
              <div className="w-12 h-12 bg-[#F8F9FB] rounded-lg flex items-center justify-center mb-8">
                <FileText className="w-6 h-6 text-[#14B8A6]" />
              </div>
              <h3 className="text-3xl font-bold mb-6 tracking-tight">Download the Playbook</h3>
              <p className="text-[#6B7280] text-lg leading-relaxed mb-8">
                A practical guide to deploying AI across teams with structure, governance, and a clear rollout path. Built for leaders who want results, not pilots.
              </p>
              <button className="w-full sm:w-auto px-8 py-4 bg-[#1F2328] text-white font-bold rounded-lg hover:bg-black transition-colors flex items-center justify-center gap-2">
                Download the Playbook <ArrowRight className="w-4 h-4" />
              </button>
              <p className="mt-4 text-xs font-medium text-[#6B7280] uppercase tracking-wider">
                Frameworks, examples, and next steps. No noise.
              </p>
            </div>
            {/* Subtle background element */}
            <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:scale-110 transition-transform duration-500">
              <FileText className="w-64 h-64 text-black" />
            </div>
          </div>

          {/* Assessment Card */}
          <div className="bg-white p-10 md:p-12 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="relative z-10">
              <div className="w-12 h-12 bg-[#F8F9FB] rounded-lg flex items-center justify-center mb-8">
                <ClipboardList className="w-6 h-6 text-[#6366F1]" />
              </div>
              <h3 className="text-3xl font-bold mb-6 tracking-tight">Take the AI Readiness Assessment</h3>
              <p className="text-[#6B7280] text-lg leading-relaxed mb-8">
                A structured assessment that highlights your strongest opportunities, key gaps, and what to do next across people, process, data, tools, and governance.
              </p>
              <button className="w-full sm:w-auto px-8 py-4 bg-[#6366F1] text-white font-bold rounded-lg hover:bg-[#4F46E5] transition-colors flex items-center justify-center gap-2">
                Take the Assessment <ArrowRight className="w-4 h-4" />
              </button>
              <p className="mt-4 text-xs font-medium text-[#6B7280] uppercase tracking-wider">
                Takes 5 to 8 minutes. Instant results.
              </p>
            </div>
            {/* Subtle background element */}
            <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:scale-110 transition-transform duration-500">
              <ClipboardList className="w-64 h-64 text-black" />
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-[#6B7280]">
            Not sure which to choose? Start with the <span className="text-[#1F2328] font-bold underline underline-offset-4 decoration-[#14B8A6]">assessment</span> if you want a direct roadmap, start with the <span className="text-[#1F2328] font-bold underline underline-offset-4 decoration-[#6366F1]">playbook</span> if you want the full framework first.
          </p>
        </div>
      </div>
    </section>
  );
};
