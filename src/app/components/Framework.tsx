"use client";
import React from "react";
import { motion } from "motion/react";
import { 
  Compass, 
  Database, 
  Layers, 
  Zap, 
  Activity,
  ArrowRight
} from "lucide-react";

const steps = [
  {
    title: "Assess",
    icon: Compass,
    label: "Assess readiness and align leadership.",
    description: "We evaluate your organization across people, process, data, tools, and governance. Then we align leadership on use cases, risk, and a clear rollout path."
  },
  {
    title: "Capture",
    icon: Database,
    label: "Capture the knowledge AI needs.",
    description: "We gather the content, documents, policies, and operational knowledge AI must reference to produce reliable outputs."
  },
  {
    title: "Structure",
    icon: Layers,
    label: "Structure datasets and guardrails.",
    description: "We build the KnowledgeStack, define permissions, and establish quality controls so AI behaves consistently across teams."
  },
  {
    title: "Deploy",
    icon: Zap,
    label: "Deploy agents and workflows into real work.",
    description: "We implement AI systems that support tasks, decisions, and communication, with defined scope and measurable outcomes."
  },
  {
    title: "Maintain",
    icon: Activity,
    label: "Maintain accuracy and improve performance.",
    description: "We monitor, update, and evolve your AI systems, keeping them aligned as your organization grows."
  }
];

export const Framework = () => {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-xs font-bold text-[#14B8A6] tracking-widest uppercase mb-4">The Framework</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">The AI Operating Layer</h2>
          <p className="text-xl text-[#6B7280]">
            AI creates value when it’s structured into the way your organization runs. Our operating layer makes that structure practical.
          </p>
        </div>

        <div className="relative">
          {/* Horizontal line (desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gray-100 -translate-y-1/2 hidden md:block z-0"></div>
          
          <div className="grid md:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div 
                key={i} 
                className="group flex flex-col items-center text-center"
                whileHover={{ y: -5 }}
              >
                <div className="relative mb-8">
                  <div className="w-16 h-16 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center group-hover:border-[#14B8A6] group-hover:shadow-md transition-all duration-300 relative z-10">
                    <step.icon className="w-7 h-7 text-[#1F2328] group-hover:text-[#14B8A6] transition-colors" />
                  </div>
                  {/* Subtle pulse for current step idea */}
                  <motion.div 
                    className="absolute inset-0 rounded-full bg-[#14B8A6]/5"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 4, repeat: Infinity, delay: i * 0.8 }}
                  />
                </div>
                
                <h3 className="text-sm font-bold tracking-widest uppercase mb-4 text-[#1F2328]">{step.title}</h3>
                <h4 className="text-lg font-bold mb-3 leading-snug">{step.label}</h4>
                <p className="text-sm text-[#6B7280] leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <button className="inline-flex items-center gap-2 font-bold text-[#1F2328] hover:text-[#14B8A6] transition-colors group">
            Start with clarity. Run AI Readiness <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
