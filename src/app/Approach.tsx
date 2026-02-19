"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  Plus, 
  Minus, 
  CheckCircle2, 
  AlertCircle,
  Compass,
  Database,
  Layers,
  Zap,
  Activity,
  ChevronRight
} from "lucide-react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const steps = [
  {
    id: "assess",
    number: "01",
    label: "Assess",
    icon: Compass,
    headline: "Assess readiness and align leadership.",
    copy: "We evaluate readiness across people, process, data, tools, and governance. Then we align stakeholders on what matters first, where AI fits, and what success looks like.",
    bullets: [
      "Readiness assessment and interviews",
      "Use-case mapping and prioritization",
      "Risk and governance baseline",
      "Tooling and stack review",
      "Success metrics and rollout plan"
    ],
    deliverable: "A clear readiness score, prioritized use cases, and a 90-day roadmap.",
    color: "#14B8A6"
  },
  {
    id: "capture",
    number: "02",
    label: "Capture",
    icon: Database,
    headline: "Capture the knowledge AI needs to perform.",
    copy: "AI is only as good as the knowledge it can reference. We gather the content, documents, policies, and internal expertise that AI systems need in order to produce accurate and useful outputs.",
    bullets: [
      "Knowledge audit and source mapping",
      "Content and document collection",
      "SME capture sessions",
      "Cleanup, deduplication, and normalization",
      "Access and sensitivity classification"
    ],
    deliverable: "A curated, organized knowledge library ready for structuring.",
    color: "#6366F1"
  },
  {
    id: "structure",
    number: "03",
    label: "Structure",
    icon: Layers,
    headline: "Structure datasets, permissions, and guardrails.",
    copy: "This is where AI becomes reliable. We organize information into a KnowledgeStack, set permissions, and define what AI can do, what it cannot do, and how quality is measured.",
    bullets: [
      "KnowledgeStack design and dataset creation",
      "Taxonomy, tagging, and versioning",
      "Roles, permissions, and access control",
      "Prompt and response standards",
      "Quality checks and evaluation methods"
    ],
    deliverable: "A governed KnowledgeStack that supports consistent outputs.",
    color: "#14B8A6"
  },
  {
    id: "deploy",
    number: "04",
    label: "Deploy",
    icon: Zap,
    headline: "Deploy agents and workflows into daily operations.",
    copy: "We implement AI where it creates real lift. That can mean agents for internal support, workflows for faster execution, or content systems for scalable production. Deployment is always scoped, measured, and governed.",
    bullets: [
      "Agent builds (RAG + MCP)",
      "Workflow integration into real teams",
      "ContentEngine setup for marketing and comms",
      "Measurement and feedback loops",
      "Documentation and enablement"
    ],
    deliverable: "Working AI systems in production with defined scope and ownership.",
    color: "#6366F1"
  },
  {
    id: "maintain",
    number: "05",
    label: "Maintain",
    icon: Activity,
    headline: "Maintain performance, accuracy, and alignment.",
    copy: "AI is not set-and-forget. Knowledge changes, teams evolve, and governance needs to stay current. Maintenance keeps systems useful, safe, and improving.",
    bullets: [
      "Dataset refresh cycles",
      "Monitoring and usage reviews",
      "Governance and access audits",
      "Performance improvements and iteration",
      "Ongoing team support"
    ],
    deliverable: "A maintained AI operating layer that improves over time.",
    color: "#14B8A6"
  }
];

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

export default function ApproachPage() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#F8F9FB] text-[#1F2328] font-sans">
      <Header />
      
      <main className="pt-32 pb-24">
        {/* Page Hero */}
        <section className="max-w-[1200px] mx-auto px-6 mb-24 md:mb-32">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold text-[#14B8A6] tracking-[0.2em] uppercase mb-4 block">The Framework</span>
              <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-8">
                The AI Operating Layer
              </h1>
              <p className="text-xl md:text-2xl text-[#6B7280] leading-relaxed mb-10 max-w-2xl">
                AI delivers results when it becomes part of how work gets done. The AI Operating Layer is our structured approach to moving from pilots to reliable, governed deployment across teams.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-[#14B8A6] text-white font-bold rounded-lg hover:bg-[#0D9488] transition-all">
                  Run AI Readiness
                </button>
                <button className="px-8 py-4 bg-white text-[#1F2328] font-bold rounded-lg border border-gray-200 hover:border-[#1F2328] transition-all">
                  Explore Services
                </button>
              </div>
            </div>
            
            {/* Hero Graphic */}
            <div className="lg:col-span-5 hidden lg:block relative">
              <svg width="400" height="400" viewBox="0 0 400 400" fill="none" className="mx-auto">
                <circle cx="200" cy="200" r="180" stroke="#EEF4FF" strokeWidth="1" />
                <circle cx="200" cy="200" r="120" stroke="#EEF4FF" strokeWidth="1" />
                
                {/* Connecting lines */}
                <motion.path 
                  d="M200 20 L380 200 L200 380 L20 200 Z" 
                  stroke="#14B8A6" strokeWidth="0.5" strokeDasharray="4 4" 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}
                />
                
                {/* 5 Points */}
                {[
                  { x: 200, y: 20 }, { x: 380, y: 200 }, { x: 200, y: 380 }, { x: 20, y: 200 }, { x: 200, y: 200 }
                ].map((p, i) => (
                  <motion.g 
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.2 }}
                  >
                    <circle cx={p.x} cy={p.y} r="6" fill="#14B8A6" />
                    <motion.circle 
                      cx={p.x} cy={p.y} r="6" 
                      stroke="#14B8A6" strokeWidth="1"
                      animate={{ r: [6, 12, 6], opacity: [1, 0, 1] }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                    />
                  </motion.g>
                ))}
              </svg>
            </div>
          </div>
        </section>

        {/* Tools vs Strategy Section */}
        <section className="max-w-[1200px] mx-auto px-6 py-24 border-t border-gray-100">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">Tools are not a strategy.</h2>
            </div>
            <div className="lg:col-span-7 space-y-8">
              <p className="text-lg text-[#6B7280] leading-relaxed">
                Most organizations adopt AI in fragments. A few people experiment, a few teams pilot, and the rest wait. That creates inconsistency, risk, and wasted effort.
              </p>
              <p className="text-lg text-[#1F2328] font-medium leading-relaxed">
                An operating layer solves that. It gives leadership a clear model for how AI is introduced, governed, and maintained, so teams can use AI confidently and responsibly.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
                {[
                  "Clear use cases tied to real work",
                  "Reliable outputs grounded in your knowledge",
                  "Guardrails leadership can trust",
                  "Trained teams with shared standards",
                  "Systems that improve over time"
                ].map((outcome, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-lg shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-[#14B8A6]" />
                    <span className="text-sm font-semibold">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Framework Overview (The Anchor visual) */}
        <section className="py-24 bg-white border-y border-gray-100">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-xs font-bold text-[#6366F1] tracking-[0.2em] uppercase mb-4 block">Five deliberate phases</span>
              <h2 className="text-4xl font-bold mb-6">Assess, Capture, Structure, Deploy, Maintain</h2>
              <p className="text-[#6B7280] text-lg">
                Each phase is designed to create momentum without cutting corners. You can start at the beginning or enter where you need the most support.
              </p>
            </div>

            {/* Horizontal Diagram */}
            <div className="relative mb-24 overflow-x-auto pb-8 scrollbar-hide">
              <div className="min-w-[1000px] flex justify-between relative px-12">
                {/* Background Connecting Line */}
                <div className="absolute top-1/2 left-12 right-12 h-[2px] bg-[#EEF4FF] -translate-y-1/2 z-0"></div>
                
                {steps.map((step, i) => (
                  <motion.div 
                    key={step.id}
                    onHoverStart={() => setActiveStep(i)}
                    onHoverEnd={() => setActiveStep(null)}
                    className="relative z-10 flex flex-col items-center group cursor-pointer"
                  >
                    <motion.div 
                      className={`w-20 h-20 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                        activeStep === i ? "bg-[#14B8A6] border-[#14B8A6] text-white shadow-xl scale-110" : "bg-white border-[#EEF4FF] text-[#1F2328]"
                      }`}
                    >
                      <step.icon className="w-8 h-8" />
                    </motion.div>
                    
                    <div className="mt-6 text-center">
                      <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#6B7280] mb-2 block">{step.number}</span>
                      <h3 className="font-bold text-lg">{step.label}</h3>
                    </div>
                    
                    {/* Teal Highlight line when hovered */}
                    {i < steps.length - 1 && activeStep === i && (
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        className="absolute top-10 left-20 w-[calc(100%-40px)] h-[2px] bg-[#14B8A6] z-0"
                        style={{ width: "calc((1200px - 24px * 2) / 4 - 80px)" }}
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Outcomes Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { label: "Clarity", metric: "100%" },
                { label: "Accuracy", metric: "98%+" },
                { label: "Governance", metric: "Locked" },
                { label: "Scale", metric: "Ready" }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-[#F8F9FB] rounded-xl text-center border border-gray-100">
                  <div className="text-2xl font-bold text-[#1F2328] mb-1 tracking-tight">{item.metric}</div>
                  <div className="text-xs font-bold text-[#6B7280] uppercase tracking-widest">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Step Detail Sections */}
        <div className="space-y-0">
          {steps.map((step, i) => (
            <section 
              key={step.id} 
              id={step.id}
              className={`py-24 md:py-32 relative overflow-hidden ${i % 2 !== 0 ? "bg-[#EEF4FF]/30" : "bg-white"}`}
            >
              {/* Optional Toronto Map Texture (Subtle) */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/graphy.png')" }}></div>
              
              <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-12 gap-16 items-start">
                  <div className="lg:col-span-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 rounded-full bg-[#14B8A6]/10 flex items-center justify-center text-[#14B8A6] font-bold text-xs">
                        {step.number}
                      </div>
                      <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#6B7280]">{step.label}</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8 tracking-tight">{step.headline}</h2>
                    <p className="text-xl text-[#6B7280] leading-relaxed mb-8">
                      {step.copy}
                    </p>
                  </div>
                  
                  <div className="lg:col-span-6">
                    <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-[#1F2328] mb-8 border-b border-gray-100 pb-4">What we do</h4>
                      <ul className="space-y-6 mb-12">
                        {step.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex gap-4 items-start">
                            <div className="w-5 h-5 rounded-full bg-[#14B8A6]/10 flex items-center justify-center shrink-0 mt-1">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#14B8A6]" />
                            </div>
                            <span className="text-lg text-[#1F2328] font-medium leading-snug">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="p-6 bg-[#F8F9FB] rounded-xl border-l-4 border-[#14B8A6]">
                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#6B7280] mb-2 block">Deliverable</span>
                        <p className="text-[#1F2328] font-bold">{step.deliverable}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* How to Start Section */}
        <section className="py-24 md:py-32 bg-[#EEF4FF]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 tracking-tight">Start with clarity.</h2>
              <p className="text-lg text-[#6B7280]">
                If you are not sure where to begin, start with AI Readiness. It gives you a structured view of what is working, what is missing, and what to do next.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all transform hover:-translate-y-1 group">
                <h3 className="text-2xl font-bold mb-4 tracking-tight">Run AI Readiness</h3>
                <p className="text-[#6B7280] mb-10 leading-relaxed">
                  A structured assessment that highlights your strongest opportunities, key gaps, and what to do next.
                </p>
                <button className="w-full py-5 bg-[#14B8A6] text-white font-bold rounded-lg hover:bg-[#0D9488] transition-all flex items-center justify-center gap-2 group">
                  Run Assessment <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all transform hover:-translate-y-1 group">
                <h3 className="text-2xl font-bold mb-4 tracking-tight">Talk to FieldSignal</h3>
                <p className="text-[#6B7280] mb-10 leading-relaxed">
                  Book a strategic briefing to discuss your specific goals and organizational structure.
                </p>
                <button className="w-full py-5 bg-white text-[#1F2328] font-bold rounded-lg border border-gray-200 hover:border-[#1F2328] transition-all flex items-center justify-center gap-2 group">
                  Book a Call <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-16">
              <div className="lg:col-span-4">
                <span className="text-xs font-bold text-[#14B8A6] tracking-[0.2em] uppercase mb-4 block">AEO / FAQ</span>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">Common questions</h2>
                <div className="flex items-center gap-2 px-3 py-1 bg-gray-50 border border-gray-100 rounded text-[10px] font-bold text-gray-400 w-fit">
                  <AlertCircle className="w-3 h-3" /> SCHEMA VERIFIED
                </div>
              </div>
              <div className="lg:col-span-8">
                <div className="divide-y divide-gray-100">
                  <FAQItem 
                    question="What is an AI operating layer?"
                    answer="An AI operating layer is a structured model for how AI is introduced, governed, and maintained across an organization. It turns AI from isolated tools into a coordinated system that supports real work."
                  />
                  <FAQItem 
                    question="How long does it take to deploy?"
                    answer="Timelines depend on scope. Many teams start with readiness and a 90-day roadmap, then deploy targeted systems in phases. Our methodology is designed for rapid delivery of core systems followed by iterative expansion."
                  />
                  <FAQItem 
                    question="Do you work with our existing tools?"
                    answer="Yes. We design the operating layer around your reality, including your tools, policies, and team structure. We specialize in making sense of fragmented stacks and unifying them under a single KnowledgeStack."
                  />
                  <FAQItem 
                    question="Is this just for large enterprises?"
                    answer="No. While structured governance is critical for enterprise, small and mid-sized teams benefit from an operating layer by avoiding the mess of random tool adoption and building on a solid knowledge foundation early."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Strip */}
        <section className="max-w-[1200px] mx-auto px-6 py-24">
          <div className="bg-white border border-gray-100 p-12 md:p-20 rounded-3xl shadow-sm text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Ready to move beyond pilots?</h2>
            <p className="text-xl text-[#6B7280] mb-12 max-w-2xl mx-auto">
              Deployment is only risky when it's unstructured. Let's put a framework around your AI initiative.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-10 py-5 bg-[#14B8A6] text-white font-bold rounded-lg hover:bg-[#0D9488] transition-all transform hover:-translate-y-1 shadow-lg shadow-[#14B8A6]/20">
                Run AI Readiness
              </button>
              <button className="px-10 py-5 bg-white text-[#1F2328] font-bold rounded-lg border border-gray-200 hover:border-[#1F2328] transition-all">
                Talk to FieldSignal
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
