"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight, 
  Compass, 
  Users, 
  ShieldCheck, 
  Zap, 
  Layers, 
  BarChart3, 
  ClipboardList, 
  LayoutList, 
  PieChart, 
  Map, 
  MessageSquare,
  Plus,
  Minus,
  Clock,
  Target,
  AlertTriangle,
  Lightbulb,
  Workflow,
  Database,
  Settings
} from "lucide-react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 py-6 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left group"
      >
        <span className="text-lg font-semibold text-[#1F2328] group-hover:text-[#14B8A6] transition-colors">{question}</span>
        {isOpen ? <Minus className="w-5 h-5 text-[#6B7280]" /> : <Plus className="w-5 h-5 text-[#6B7280]" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-[#6B7280] leading-relaxed max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function AIReadinessPage() {
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowStickyCTA(true);
      } else {
        setShowStickyCTA(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F9FB] text-[#1F2328] font-sans selection:bg-[#14B8A6]/20">
      <Header />

      {/* Sticky Side CTA (Desktop) */}
      <AnimatePresence>
        {showStickyCTA && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed bottom-10 right-10 z-50 hidden xl:flex flex-col gap-3 w-64 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100"
          >
            <p className="text-sm font-bold text-[#1F2328] mb-2 uppercase tracking-widest">Start here</p>
            <button className="w-full py-3 bg-[#14B8A6] text-white font-bold rounded-lg hover:bg-[#0D9488] transition-all text-sm">
              Take Assessment
            </button>
            <button className="w-full py-3 bg-white text-[#1F2328] font-bold rounded-lg border border-gray-200 hover:border-[#1F2328] transition-all text-sm">
              Book a Call
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden bg-white border-b border-gray-100">
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/graphy.png')" }}></div>
          
          <div className="max-w-[1200px] mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-xs font-bold text-[#14B8A6] tracking-[0.2em] uppercase mb-4 block">AI Readiness</span>
                <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-8">
                  Know where you stand. <br />Know what to do next.
                </h1>
                <p className="text-xl md:text-2xl text-[#6B7280] leading-relaxed mb-10 max-w-2xl">
                  AI Readiness is a structured assessment and leadership workshop that gives you a clear picture of your organization’s readiness to deploy AI as an operating layer.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <button className="px-10 py-5 bg-[#14B8A6] text-white font-bold rounded-lg hover:bg-[#0D9488] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#14B8A6]/20">
                    Take the AI Readiness Assessment
                  </button>
                  <button className="px-10 py-5 bg-white text-[#1F2328] font-bold rounded-lg border border-gray-200 hover:border-[#1F2328] transition-all">
                    Book a Readiness Call
                  </button>
                </div>
                <p className="text-sm font-medium text-[#6B7280] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6]"></span>
                  Built for leaders who want clarity, not pilots.
                </p>
              </motion.div>
            </div>

            <div className="lg:col-span-5 hidden lg:block relative">
              <div className="relative w-full aspect-square bg-[#F8F9FB] rounded-full flex items-center justify-center p-12 overflow-hidden border border-gray-100">
                {/* Abstract diagnostic visual */}
                <svg width="100%" height="100%" viewBox="0 0 400 400" className="opacity-40">
                  <circle cx="200" cy="200" r="180" stroke="#EEF4FF" strokeWidth="1" fill="none" />
                  <circle cx="200" cy="200" r="120" stroke="#EEF4FF" strokeWidth="1" fill="none" />
                  <circle cx="200" cy="200" r="60" stroke="#EEF4FF" strokeWidth="1" fill="none" />
                  <line x1="200" y1="20" x2="200" y2="380" stroke="#EEF4FF" strokeWidth="1" />
                  <line x1="20" y1="200" x2="380" y2="200" stroke="#EEF4FF" strokeWidth="1" />
                  <path d="M72.7 72.7L327.3 327.3" stroke="#EEF4FF" strokeWidth="1" />
                  <path d="M327.3 72.7L72.7 327.3" stroke="#EEF4FF" strokeWidth="1" />
                  
                  {/* Readiness path */}
                  <motion.path 
                    d="M200 80 L280 140 L300 260 L200 340 L100 280 L120 120 Z" 
                    fill="#14B8A6" fillOpacity="0.05" 
                    stroke="#14B8A6" strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                  
                  {/* Score markers */}
                  {[
                    { x: 200, y: 80 }, { x: 280, y: 140 }, { x: 300, y: 260 },
                    { x: 200, y: 340 }, { x: 100, y: 280 }, { x: 120, y: 120 }
                  ].map((p, i) => (
                    <motion.circle 
                      key={i} cx={p.x} cy={p.y} r="4" fill="#14B8A6"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1 + i * 0.1 }}
                    />
                  ))}
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-xs font-bold text-[#6B7280] uppercase tracking-widest block mb-1">Score</span>
                    <span className="text-4xl font-bold text-[#1F2328]">84%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Snapshot Section */}
        <section className="py-24 bg-white border-b border-gray-100">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-7">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12">What this delivers</h2>
                <div className="grid sm:grid-cols-2 gap-8">
                  {[
                    "Clear view of readiness across people, process, data, tools, and governance",
                    "Alignment on top use cases and what to prioritize first",
                    "Risks identified early, before deployment",
                    "A practical 90-day roadmap with owners, steps, and quick wins",
                    "A foundation to move confidently into the Operating Layer",
                    "Immediate clarity for leadership stakeholders"
                  ].map((outcome, i) => (
                    <div key={i} className="flex gap-4 items-start group">
                      <div className="w-6 h-6 rounded-full bg-[#14B8A6]/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#14B8A6] group-hover:text-white transition-all">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <p className="text-[#6B7280] leading-relaxed group-hover:text-[#1F2328] transition-colors">{outcome}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="bg-[#F8F9FB] p-8 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden">
                  <div className="flex justify-between items-center mb-8 border-b border-gray-200 pb-4">
                    <span className="text-sm font-bold uppercase tracking-widest text-[#1F2328]">Diagnostic Summary</span>
                    <BarChart3 className="w-5 h-5 text-[#14B8A6]" />
                  </div>
                  <div className="space-y-6">
                    {[
                      { label: "Governance & Risk", value: 82, color: "#14B8A6" },
                      { label: "Data & Knowledge", value: 64, color: "#6366F1" },
                      { label: "Process Maturity", value: 78, color: "#14B8A6" },
                      { label: "Team Readiness", value: 91, color: "#14B8A6" }
                    ].map((item, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="font-semibold">{item.label}</span>
                          <span className="text-[#6B7280]">{item.value}%</span>
                        </div>
                        <div className="h-2 bg-white rounded-full overflow-hidden border border-gray-200">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.value}%` }}
                            transition={{ duration: 1, delay: i * 0.1 }}
                            className="h-full rounded-full"
                            style={{ backgroundColor: item.color }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="mt-8 text-xs text-[#6B7280] italic">Sample snapshot from Readiness Report</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who it's For + Signs Section */}
        <section className="py-24 md:py-32">
          <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-12">
            {/* Who it's For */}
            <div className="bg-white p-10 md:p-12 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#EEF4FF] rounded-xl flex items-center justify-center mb-8">
                <Target className="w-6 h-6 text-[#6366F1]" />
              </div>
              <h2 className="text-3xl font-bold mb-8 tracking-tight">Who this is for</h2>
              <ul className="space-y-6">
                {[
                  "Leadership teams exploring AI adoption and unsure where to start",
                  "Organizations with scattered pilots and inconsistent usage",
                  "Teams that want AI benefits but need governance and structure",
                  "Departments under pressure to 'use AI' without clear direction",
                  "Organizations planning to deploy agents, automations, or content systems"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <div className="w-5 h-5 rounded-full bg-gray-50 flex items-center justify-center shrink-0 mt-1">
                      <ChevronRight className="w-3.5 h-3.5 text-[#6B7280]" />
                    </div>
                    <span className="text-[#6B7280] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Signs You Need This */}
            <div className="bg-white p-10 md:p-12 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#FEF2F2]/50 rounded-xl flex items-center justify-center mb-8">
                <AlertTriangle className="w-6 h-6 text-[#EF4444]" />
              </div>
              <h2 className="text-3xl font-bold mb-8 tracking-tight">Signs you should start here</h2>
              <ul className="space-y-6">
                {[
                  "AI activity is happening, but it is not coordinated",
                  "People are using tools inconsistently and outputs vary in quality",
                  "Data and knowledge are spread across systems with no clean foundation",
                  "Leadership wants results but also needs guardrails and control",
                  "You want to invest in AI, but you need a clear plan and measurable path"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <div className="w-5 h-5 rounded-full bg-gray-50 flex items-center justify-center shrink-0 mt-1">
                      <AlertTriangle className="w-3 h-3 text-amber-500" />
                    </div>
                    <span className="text-[#6B7280] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-24 md:py-32 bg-[#EEF4FF]/30 border-y border-gray-100">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="max-w-3xl mb-16">
              <span className="text-xs font-bold text-[#14B8A6] tracking-[0.2em] uppercase mb-4 block">Scope</span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 tracking-tight">What’s included in AI Readiness</h2>
              <p className="text-lg text-[#6B7280]">
                A three-part engagement designed to create absolute clarity and align your entire leadership team on a single path forward.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Part 1 */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col group hover:shadow-lg transition-all border-t-4 border-t-[#14B8A6]">
                <div className="p-8 grow">
                  <div className="text-sm font-bold text-[#14B8A6] uppercase tracking-widest mb-4">01</div>
                  <h3 className="text-2xl font-bold mb-4 tracking-tight">Readiness Assessment</h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed mb-8">
                    A structured assessment covering the core pillars that determine AI success across the organization.
                  </p>
                  <div className="space-y-4">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#1F2328]">We assess:</p>
                    {[
                      "Leadership alignment and operating model",
                      "People and adoption readiness",
                      "Processes and workflow maturity",
                      "Data, knowledge, and content foundations",
                      "Tools, stack, and security considerations",
                      "Governance, risk, and guardrails"
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3 items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-[#14B8A6] shrink-0 mt-0.5" />
                        <span className="text-[#6B7280]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-6 bg-[#F8F9FB] border-t border-gray-100">
                  <p className="text-xs font-bold text-[#1F2328] uppercase tracking-widest mb-2">Deliverable</p>
                  <p className="text-sm font-semibold">Diagnostic Report & Baseline Score</p>
                </div>
              </div>

              {/* Part 2 */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col group hover:shadow-lg transition-all border-t-4 border-t-[#6366F1]">
                <div className="p-8 grow">
                  <div className="text-sm font-bold text-[#6366F1] uppercase tracking-widest mb-4">02</div>
                  <h3 className="text-2xl font-bold mb-4 tracking-tight">Leadership Workshop</h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed mb-8">
                    A working session to align stakeholders, prioritize use cases, and agree on the path forward.
                  </p>
                  <div className="space-y-4">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#1F2328]">We do:</p>
                    {[
                      "Use-case mapping by department",
                      "Prioritization by impact and feasibility",
                      "Risk review and governance baseline",
                      "Success metrics and ownership",
                      "Stakeholder alignment and buy-in"
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3 items-start text-sm">
                        <Users className="w-4 h-4 text-[#6366F1] shrink-0 mt-0.5" />
                        <span className="text-[#6B7280]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-6 bg-[#F8F9FB] border-t border-gray-100">
                  <p className="text-xs font-bold text-[#1F2328] uppercase tracking-widest mb-2">Outcome</p>
                  <p className="text-sm font-semibold">Priority Map & Stakeholder Alignment</p>
                </div>
              </div>

              {/* Part 3 */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col group hover:shadow-lg transition-all border-t-4 border-t-[#1F2328]">
                <div className="p-8 grow">
                  <div className="text-sm font-bold text-[#1F2328] uppercase tracking-widest mb-4">03</div>
                  <h3 className="text-2xl font-bold mb-4 tracking-tight">Roadmap and Next Steps</h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed mb-8">
                    A practical plan that shows what to do first, what to sequence, and how to reduce risk.
                  </p>
                  <div className="space-y-4">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#1F2328]">You receive:</p>
                    {[
                      "Prioritized use-case list",
                      "Recommended stack and operating model",
                      "90-day roadmap with milestones",
                      "Quick wins and pilot-to-production plan",
                      "Governance and maintenance standards"
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3 items-start text-sm">
                        <Map className="w-4 h-4 text-[#1F2328] shrink-0 mt-0.5" />
                        <span className="text-[#6B7280]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-6 bg-[#F8F9FB] border-t border-gray-100">
                  <p className="text-xs font-bold text-[#1F2328] uppercase tracking-widest mb-2">Final Output</p>
                  <p className="text-sm font-semibold">The AI Operating Layer Roadmap</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Deliverables Checklist Section */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-5">
                <h2 className="text-4xl font-bold leading-tight mb-8 tracking-tight">What you get at the end</h2>
                <p className="text-lg text-[#6B7280] mb-12">
                  At the end of AI Readiness, you don't just get a report. You get the blueprint for your organization's future with AI.
                </p>
                <div className="space-y-4">
                  {[
                    "AI Readiness Scorecard",
                    "Use Case Priority Map",
                    "Risk and Governance Baseline",
                    "Knowledge and Data Gap Summary",
                    "90-Day AI Operating Layer Roadmap",
                    "Recommendations for deployment path"
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-center p-5 bg-[#F8F9FB] rounded-xl border border-gray-100 group hover:border-[#14B8A6] transition-colors">
                      <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center border border-gray-200 group-hover:bg-[#14B8A6] group-hover:border-[#14B8A6] transition-all">
                        <CheckCircle2 className="w-4 h-4 text-gray-300 group-hover:text-white" />
                      </div>
                      <span className="font-bold text-[#1F2328]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7 flex flex-col gap-6">
                <div className="bg-[#F8F9FB] p-8 rounded-2xl border border-gray-100 shadow-sm grid grid-cols-2 gap-8">
                  <div className="col-span-2 md:col-span-1">
                    <div className="w-full aspect-[4/3] bg-white rounded-lg border border-gray-200 p-4 relative overflow-hidden mb-4">
                      <div className="text-[10px] font-bold text-gray-300 uppercase mb-4 tracking-widest">Scorecard Preview</div>
                      <div className="flex items-center justify-center h-full -mt-4">
                        <PieChart className="w-16 h-16 text-[#14B8A6]/20" />
                      </div>
                    </div>
                    <h4 className="font-bold text-sm">AI Readiness Scorecard</h4>
                    <p className="text-xs text-[#6B7280]">Quantified baseline across 5 pillars.</p>
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <div className="w-full aspect-[4/3] bg-white rounded-lg border border-gray-200 p-4 relative overflow-hidden mb-4">
                      <div className="text-[10px] font-bold text-gray-300 uppercase mb-4 tracking-widest">Roadmap Preview</div>
                      <div className="space-y-2">
                        <div className="h-2 w-3/4 bg-[#14B8A6]/10 rounded-full" />
                        <div className="h-2 w-full bg-[#14B8A6]/5 rounded-full" />
                        <div className="h-2 w-1/2 bg-[#6366F1]/10 rounded-full" />
                      </div>
                    </div>
                    <h4 className="font-bold text-sm">90-Day Roadmap</h4>
                    <p className="text-xs text-[#6B7280]">Phase-by-phase execution plan.</p>
                  </div>
                  <div className="col-span-2">
                    <div className="w-full aspect-[2/1] bg-white rounded-lg border border-gray-200 p-6 relative overflow-hidden">
                      <div className="text-[10px] font-bold text-gray-300 uppercase mb-4 tracking-widest">Use Case Matrix</div>
                      <div className="grid grid-cols-4 gap-4 h-full">
                        <div className="bg-[#14B8A6]/10 rounded-lg p-2 flex flex-col justify-end">
                          <span className="text-[10px] font-bold">H:Impact</span>
                        </div>
                        <div className="bg-gray-50 rounded-lg" />
                        <div className="bg-[#6366F1]/10 rounded-lg" />
                        <div className="bg-gray-50 rounded-lg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Steps Section */}
        <section className="py-24 md:py-40 bg-[#EEF4FF]/30 border-y border-gray-100">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <span className="text-xs font-bold text-[#6366F1] tracking-[0.2em] uppercase mb-4 block">How it works</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">A simple, structured sequence</h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-0 relative">
              <div className="absolute left-[27px] top-8 bottom-8 w-[2px] bg-[#EEF4FF] hidden md:block" />
              
              {[
                { 
                  title: "Take the assessment", 
                  desc: "You complete the AI Readiness Assessment. It takes 5 to 8 minutes.",
                  duration: "5-8 mins"
                },
                { 
                  title: "Review call", 
                  desc: "We review your results and confirm your goals, constraints, and timeline.",
                  duration: "45 mins"
                },
                { 
                  title: "Leadership workshop", 
                  desc: "We run a focused workshop to align stakeholders and prioritize what matters.",
                  duration: "3-4 hours"
                },
                { 
                  title: "Roadmap delivery", 
                  desc: "We deliver your readiness report, scorecard, and 90-day roadmap.",
                  duration: "Final Pack"
                },
                { 
                  title: "Optional rollout support", 
                  desc: "If you want help executing, we move into KnowledgeStack, Enablement, Agents, and Governance.",
                  duration: "Next Steps"
                }
              ].map((step, i) => (
                <div key={i} className="relative pl-0 md:pl-20 pb-16 last:pb-0 group">
                  <div className="absolute left-0 top-0 w-14 h-14 rounded-full bg-white border-2 border-[#EEF4FF] flex items-center justify-center z-10 group-hover:border-[#14B8A6] group-hover:bg-[#14B8A6] group-hover:text-white transition-all hidden md:flex">
                    <span className="font-bold">{i + 1}</span>
                  </div>
                  <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm group-hover:shadow-md transition-shadow">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-4">
                      <h3 className="text-xl font-bold">{step.title}</h3>
                      <span className="text-xs font-bold text-[#6B7280] bg-[#F8F9FB] px-3 py-1 rounded-full uppercase tracking-widest">{step.duration}</span>
                    </div>
                    <p className="text-[#6B7280] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Where this Leads Section */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Where this leads</h2>
              <p className="text-lg text-[#6B7280]">
                AI Readiness is the front door to deploying an AI operating layer. Most organizations use the roadmap to guide a staged rollout.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {[
                { title: "KnowledgeStack", icon: Database, desc: "Build reliable datasets" },
                { title: "Governance", icon: ShieldCheck, desc: "Define policies & permissions" },
                { title: "Enablement", icon: Workflow, desc: "Embed AI into workflows" },
                { title: "Agents", icon: Zap, desc: "Deploy task-ready assistants" },
                { title: "Maintenance", icon: Settings, desc: "Keep systems accurate" }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-[#F8F9FB] border border-gray-100 rounded-2xl hover:bg-white hover:shadow-lg transition-all text-center group">
                  <div className="w-12 h-12 rounded-xl bg-white mx-auto mb-6 flex items-center justify-center shadow-sm group-hover:text-[#14B8A6] transition-colors">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold mb-2">{item.title}</h4>
                  <p className="text-xs text-[#6B7280] leading-relaxed mb-6">{item.desc}</p>
                  <button className="text-xs font-bold text-[#14B8A6] flex items-center gap-1 mx-auto hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 md:py-32 bg-[#F8F9FB] border-t border-gray-100">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-16">
              <div className="lg:col-span-4">
                <span className="text-xs font-bold text-[#14B8A6] tracking-[0.2em] uppercase mb-4 block">AEO / FAQ</span>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6 tracking-tight">AI Readiness FAQs</h2>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-gray-200 rounded text-[10px] font-bold text-[#6B7280]">
                  <CheckCircle2 className="w-3 h-3 text-[#14B8A6]" /> SCHEMA VERIFIED
                </div>
              </div>
              <div className="lg:col-span-8">
                <div className="divide-y divide-gray-100">
                  <FAQItem 
                    question="What is AI readiness?"
                    answer="AI readiness is the ability to deploy AI responsibly and effectively across teams. It includes leadership alignment, workflows, data and knowledge foundations, governance, and the ability to maintain systems over time."
                  />
                  <FAQItem 
                    question="How long does AI Readiness take?"
                    answer="The assessment takes 5 to 8 minutes. The full readiness process, including a leadership workshop and roadmap, is typically completed within a short sprint depending on stakeholder availability."
                  />
                  <FAQItem 
                    question="Do we need to have AI tools already in place?"
                    answer="No. AI Readiness is designed for teams at any stage. It helps you choose the right tools, prioritize use cases, and avoid costly missteps."
                  />
                  <FAQItem 
                    question="Is this technical or leadership-focused?"
                    answer="Both. We translate technical realities into operational decisions leadership can own, with clear implications for teams and governance."
                  />
                  <FAQItem 
                    question="What do we receive at the end?"
                    answer="You receive a readiness scorecard, prioritized use cases, a governance baseline, and a 90-day roadmap with clear steps and ownership."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Strip */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="bg-[#1F2328] p-12 md:p-20 rounded-[40px] shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 text-white">
              {/* Background abstract grid */}
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
              
              <div className="relative z-10 max-w-2xl text-center lg:text-left">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Get clarity. Then move fast.</h2>
                <p className="text-xl text-gray-400">
                  If you want a structured view of where you stand and a roadmap you can actually execute, start with AI Readiness.
                </p>
              </div>
              <div className="relative z-10 flex flex-col sm:flex-row gap-4 whitespace-nowrap">
                <button className="px-10 py-5 bg-[#14B8A6] text-white font-bold rounded-lg hover:bg-[#0D9488] transition-all shadow-lg shadow-[#14B8A6]/20">
                  Take the AI Readiness Assessment
                </button>
                <button className="px-10 py-5 bg-transparent text-white font-bold rounded-lg border border-white/20 hover:bg-white hover:text-[#1F2328] transition-all">
                  Talk to FieldSignal
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
