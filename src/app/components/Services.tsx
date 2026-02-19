"use client";

import React from "react";
import { motion } from "motion/react";
import { 
  Compass, 
  Workflow, 
  UserCog, 
  Database, 
  Bot, 
  ShieldCheck, 
  Settings, 
  PenTool, 
  Search, 
  Eye 
} from "lucide-react";

const services = [
  {
    title: "AI Readiness",
    icon: Compass,
    description: "Assessment + leadership workshop + roadmap to move from exploration to execution."
  },
  {
    title: "AI Enablement",
    icon: Workflow,
    description: "Hands-on support to embed AI into department workflows and daily operations."
  },
  {
    title: "AI Fractional Leadership",
    icon: UserCog,
    description: "Strategic AI leadership to guide adoption, governance, and delivery without hiring full-time."
  },
  {
    title: "AI KnowledgeStack",
    icon: Database,
    description: "Dataset creation and structuring so AI outputs stay accurate, grounded, and usable."
  },
  {
    title: "AI Agents (RAG + MCP)",
    icon: Bot,
    description: "Secure, governed agents that perform real tasks using your internal knowledge."
  },
  {
    title: "AI Governance + Guardrails",
    icon: ShieldCheck,
    description: "Policies, access controls, and operating rules leadership can trust."
  },
  {
    title: "AI Maintenance",
    icon: Settings,
    description: "Ongoing updates, monitoring, and improvement so systems stay reliable over time."
  },
  {
    title: "AI ContentEngine",
    icon: PenTool,
    description: "A brand-trained content system that produces consistent, reusable outputs at scale."
  },
  {
    title: "AEO",
    icon: Search,
    description: "Answer Engine Optimization to improve visibility across search and AI discovery systems."
  },
  {
    title: "VisualAI",
    icon: Eye,
    description: "High-quality AI-generated visuals, built with brand control and creative oversight."
  }
];

export const Services = () => {
  return (
    <section className="py-24 md:py-32 bg-[#F8F9FB]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-bold text-[#14B8A6] tracking-widest uppercase mb-4">Services</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">Pick a starting point. Build a full operating layer over time.</h2>
          <p className="text-xl text-[#6B7280]">
            Each service is designed to stand alone or connect into a complete AI operating layer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -4, backgroundColor: "#ffffff" }}
              onClick={() => {
                if (service.title === "AI Readiness") {
                  window.history.pushState({}, "", "/services/ai-readiness");
                  window.dispatchEvent(new PopStateEvent("popstate"));
                }
              }}
              className={`p-8 rounded-xl border border-gray-100 bg-white/50 hover:bg-white hover:shadow-sm transition-all duration-300 group ${service.title === "AI Readiness" ? "cursor-pointer" : ""}`}
            >
              <div className="w-12 h-12 rounded-lg bg-white border border-gray-100 flex items-center justify-center mb-6 group-hover:border-[#14B8A6]/30 group-hover:text-[#14B8A6] transition-colors shadow-sm">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 tracking-tight">{service.title}</h3>
              <p className="text-[#6B7280] leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
          
          <div 
            onClick={() => {
              window.history.pushState({}, "", "/services");
              window.dispatchEvent(new PopStateEvent("popstate"));
            }}
            className="lg:col-span-1 flex items-center justify-center p-8 rounded-xl border border-dashed border-gray-200 group cursor-pointer hover:border-[#1F2328] transition-colors"
          >
            <span className="font-bold text-[#1F2328] flex items-center gap-2">
              Explore all services <Workflow className="w-4 h-4" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
