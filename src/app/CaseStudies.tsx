"use client";

import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  Search, 
  Filter, 
  X, 
  ChevronRight, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Zap, 
  Database, 
  BarChart3, 
  Target, 
  Plus, 
  Minus,
  Layers,
  Users,
  Cpu,
  Workflow
} from "lucide-react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

// Case Study Data
const caseStudies = [
  {
    id: 1,
    industry: "Technology",
    department: "Customer Support",
    title: "40% reduction in first-response time using governed knowledge foundations.",
    teaser: "Reduced response time and improved internal accuracy using a governed knowledge foundation and RAG-powered agents.",
    services: ["KnowledgeStack", "Agents", "Governance"],
    outcome: "Speed",
    featured: true,
  },
  {
    id: 2,
    industry: "Marketing",
    department: "Content Operations",
    title: "3x content velocity with a repeatable AI brand-trained system.",
    teaser: "Built a repeatable AI content system that increased output while maintaining brand control and editorial quality.",
    services: ["ContentEngine", "Enablement"],
    outcome: "Scale",
    featured: true,
  },
  {
    id: 3,
    industry: "Education",
    department: "Faculty Operations",
    title: "Institutional KnowledgeStack turned 15 years of data into active assistants.",
    teaser: "Deployed internal agents that reduced manual work and standardized answers across faculty teams using archival data.",
    services: ["KnowledgeStack", "Agents"],
    outcome: "Accuracy",
    featured: true,
  },
  {
    id: 4,
    industry: "Finance",
    department: "Compliance",
    title: "Established governance and guardrails so AI could scale safely across 12 departments.",
    teaser: "Created unified operating rules and permissions that allowed leadership to greenlight AI adoption at scale.",
    services: ["Governance", "Readiness"],
    outcome: "Governance",
    featured: false,
  },
  {
    id: 5,
    industry: "Professional Services",
    department: "Legal",
    title: "Standardized document synthesis saving senior partners 8 hours per week.",
    teaser: "Implemented structured AI workflows for document review that improved consistency and reduced manual synthesis time.",
    services: ["Enablement", "Workflow"],
    outcome: "Speed",
    featured: false,
  },
  {
    id: 6,
    industry: "Non-Profit",
    department: "Program Delivery",
    title: "Improved internal response quality for field workers by 25%.",
    teaser: "Built a low-latency knowledge foundation that gave field workers instant access to complex program guidelines.",
    services: ["KnowledgeStack", "Maintenance"],
    outcome: "Quality",
    featured: false,
  },
  {
    id: 7,
    industry: "Technology",
    department: "Product Management",
    title: "Automated feature mapping across 400+ internal documents.",
    teaser: "Used KnowledgeStack to structure fragmented product data, enabling instant retrieval and cross-referencing.",
    services: ["KnowledgeStack"],
    outcome: "Accuracy",
    featured: false,
  },
  {
    id: 8,
    industry: "Logistics",
    department: "Operations",
    title: "Reduced vendor onboarding cycles by 5 days through automated verification.",
    teaser: "Deployed governed agents to handle routine verification tasks while maintaining strict compliance check standards.",
    services: ["Agents", "Governance"],
    outcome: "Speed",
    featured: false,
  },
  {
    id: 9,
    industry: "Healthcare",
    department: "Administration",
    title: "Cleaned and structured 10 years of policy data for secure retrieval.",
    teaser: "Transformed siloed PDF policy documents into a structured KnowledgeStack ready for governed agent deployment.",
    services: ["KnowledgeStack", "Readiness"],
    outcome: "Accuracy",
    featured: false,
  }
];

const filters = {
  Service: ["Readiness", "Enablement", "KnowledgeStack", "Agents", "Governance", "Maintenance", "ContentEngine"],
  Industry: ["Technology", "Finance", "Education", "Services", "Marketing", "Healthcare"],
  Outcome: ["Speed", "Quality", "Accuracy", "Governance", "Scale"]
};

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
            <p className="pt-4 text-[#6B7280] leading-relaxed max-w-3xl text-sm">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function CaseStudiesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState<Record<string, string | null>>({
    Service: null,
    Industry: null,
    Outcome: null
  });

  const filteredStudies = useMemo(() => {
    return caseStudies.filter(study => {
      const matchesSearch = study.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           study.teaser.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           study.industry.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesService = !activeFilters.Service || study.services.includes(activeFilters.Service);
      const matchesIndustry = !activeFilters.Industry || study.industry === activeFilters.Industry || (activeFilters.Industry === "Services" && study.industry === "Professional Services");
      const matchesOutcome = !activeFilters.Outcome || study.outcome === activeFilters.Outcome;

      return matchesSearch && matchesService && matchesIndustry && matchesOutcome;
    });
  }, [searchQuery, activeFilters]);

  const toggleFilter = (category: string, value: string) => {
    setActiveFilters(prev => ({
      ...prev,
      [category]: prev[category] === value ? null : value
    }));
  };

  const clearFilters = () => {
    setSearchQuery("");
    setActiveFilters({
      Service: null,
      Industry: null,
      Outcome: null
    });
  };

  return (
    <div className="min-h-screen bg-[#F8F9FB] text-[#1F2328] font-sans selection:bg-[#14B8A6]/20">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden bg-white border-b border-gray-100">
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/graphy.png')" }}></div>
          
          <div className="max-w-[1200px] mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-xs font-bold text-[#14B8A6] tracking-[0.2em] uppercase mb-4 block">Case Studies</span>
                <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-8">
                  Real deployments. <br />Clear outcomes.
                </h1>
                <p className="text-xl md:text-2xl text-[#6B7280] leading-relaxed mb-10 max-w-2xl">
                  Explore how organizations move from AI pilots to an operating layer that teams actually use. These case studies highlight the structure behind the results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-10 py-5 bg-[#14B8A6] text-white font-bold rounded-lg hover:bg-[#0D9488] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#14B8A6]/20">
                    Run AI Readiness
                  </button>
                  <button className="px-10 py-5 bg-white text-[#1F2328] font-bold rounded-lg border border-gray-200 hover:border-[#1F2328] transition-all">
                    Book a Call
                  </button>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-5 hidden lg:block relative">
              <svg width="400" height="400" viewBox="0 0 400 400" fill="none" className="mx-auto opacity-20">
                <rect x="50" y="50" width="300" height="300" stroke="#1F2328" strokeWidth="0.5" />
                <path d="M50 150H350" stroke="#1F2328" strokeWidth="0.5" />
                <path d="M50 250H350" stroke="#1F2328" strokeWidth="0.5" />
                <path d="M150 50V350" stroke="#1F2328" strokeWidth="0.5" />
                <path d="M250 50V350" stroke="#1F2328" strokeWidth="0.5" />
                
                {/* Pulsing signal dots */}
                {[
                  { x: 150, y: 150, delay: 0 },
                  { x: 250, y: 150, delay: 1 },
                  { x: 250, y: 250, delay: 0.5 },
                  { x: 150, y: 250, delay: 1.5 },
                  { x: 200, y: 200, delay: 0.2 }
                ].map((p, i) => (
                  <g key={i}>
                    <motion.circle 
                      cx={p.x} cy={p.y} r="6" fill="#14B8A6" fillOpacity="0.2"
                      animate={{ scale: [1, 2, 1], opacity: [0.2, 0.5, 0.2] }}
                      transition={{ duration: 2, repeat: Infinity, delay: p.delay }}
                    />
                    <circle cx={p.x} cy={p.y} r="3" fill="#14B8A6" />
                  </g>
                ))}
              </svg>
            </div>
          </div>
        </section>

        {/* Proof Strip */}
        <section className="py-20 bg-white border-b border-gray-100">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="text-center text-sm font-bold text-[#6B7280] uppercase tracking-[0.2em] mb-12">What these outcomes have in common</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { text: "Clear use cases tied to real workflows", icon: Target },
                { text: "Knowledge foundations that improve accuracy", icon: Database },
                { text: "Governance that enables scale and reduces risk", icon: ShieldCheck },
                { text: "Adoption support so systems get used", icon: Users },
                { text: "Maintenance that keeps performance improving", icon: Zap }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-[#F8F9FB] rounded-xl border border-gray-100 flex flex-col items-start gap-4 hover:border-[#14B8A6] transition-all group">
                  <div className="w-10 h-10 rounded-lg bg-white border border-gray-100 flex items-center justify-center group-hover:bg-[#14B8A6]/5 transition-colors">
                    <item.icon className="w-5 h-5 text-[#6B7280] group-hover:text-[#14B8A6]" />
                  </div>
                  <p className="text-sm font-bold leading-snug group-hover:text-[#1F2328] transition-colors">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Filter & Search Bar */}
        <section className="sticky top-[88px] z-30 bg-[#F8F9FB]/95 backdrop-blur-md py-6 border-b border-gray-200">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
              <div className="flex flex-wrap gap-2 items-center grow">
                <span className="text-xs font-bold text-[#1F2328] uppercase tracking-widest mr-4">Filter:</span>
                
                {Object.entries(filters).map(([category, options]) => (
                  <div key={category} className="relative group">
                    <select 
                      value={activeFilters[category] || ""} 
                      onChange={(e) => toggleFilter(category, e.target.value)}
                      className="appearance-none bg-white border border-gray-200 px-4 py-2 pr-10 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#14B8A6]/20 focus:border-[#14B8A6] cursor-pointer"
                    >
                      <option value="">{category}</option>
                      {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                    <ChevronRight className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 rotate-90 text-[#6B7280] pointer-events-none" />
                  </div>
                ))}

                {(Object.values(activeFilters).some(v => v !== null) || searchQuery) && (
                  <button 
                    onClick={clearFilters}
                    className="text-xs font-bold text-[#14B8A6] hover:text-[#0D9488] flex items-center gap-1 transition-colors ml-2"
                  >
                    <X className="w-3 h-3" /> Clear all
                  </button>
                )}
              </div>

              <div className="relative w-full lg:w-72">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7280]" />
                <input 
                  type="text" 
                  placeholder="Search case studies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-gray-200 pl-10 pr-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#14B8A6]/20 focus:border-[#14B8A6]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Case Studies Section */}
        <section className="py-24 bg-[#EEF4FF]/50 border-b border-gray-100">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-2xl">
                <span className="text-xs font-bold text-[#14B8A6] tracking-[0.2em] uppercase mb-4 block">Featured</span>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">Start with the highest impact examples</h2>
                <p className="text-lg text-[#6B7280]">
                  If you are short on time, start here. These examples represent the most complete AI Operating Layer deployments.
                </p>
              </div>
              <button className="px-8 py-4 bg-[#1F2328] text-white font-bold rounded-lg hover:bg-black transition-colors">
                View featured work
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {caseStudies.filter(s => s.featured).map((study) => (
                <motion.div 
                  key={study.id}
                  whileHover={{ y: -8 }}
                  className="bg-white p-10 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col h-full group"
                >
                  <div className="flex justify-between items-start mb-8">
                    <span className="text-[10px] font-bold text-[#14B8A6] uppercase tracking-[0.2em] bg-[#14B8A6]/5 px-3 py-1 rounded">
                      {study.industry}
                    </span>
                    <div className="flex gap-2">
                      {study.services.slice(0, 2).map(s => (
                        <div key={s} className="w-6 h-6 rounded-md bg-[#F8F9FB] border border-gray-100 flex items-center justify-center" title={s}>
                          {s === "KnowledgeStack" && <Database className="w-3 h-3 text-gray-400" />}
                          {s === "Agents" && <Zap className="w-3 h-3 text-gray-400" />}
                          {s === "Governance" && <ShieldCheck className="w-3 h-3 text-gray-400" />}
                          {s === "ContentEngine" && <Layers className="w-3 h-3 text-gray-400" />}
                          {s === "Enablement" && <Users className="w-3 h-3 text-gray-400" />}
                        </div>
                      ))}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 grow tracking-tight group-hover:text-[#14B8A6] transition-colors leading-tight">
                    {study.title}
                  </h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed mb-8">
                    {study.teaser}
                  </p>
                  <button className="flex items-center gap-2 font-bold text-sm text-[#1F2328] group/btn">
                    View case study <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform text-[#14B8A6]" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Browse the work - Main Grid */}
        <section className="py-24 md:py-32">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="max-w-2xl mb-16">
              <h2 className="text-4xl font-bold tracking-tight mb-6">Browse the work</h2>
              <p className="text-lg text-[#6B7280]">
                Filter by service, department, or outcome to find the examples most relevant to your organization.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredStudies.length > 0 ? (
                  filteredStudies.map((study) => (
                    <motion.div 
                      key={study.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      whileHover={{ y: -4 }}
                      className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col h-full group"
                    >
                      <div className="flex justify-between items-center mb-6">
                        <span className="text-[10px] font-bold text-[#6B7280] uppercase tracking-widest">{study.industry} / {study.department}</span>
                      </div>
                      <h3 className="text-lg font-bold mb-3 tracking-tight group-hover:text-[#14B8A6] transition-colors leading-snug grow">
                        {study.title}
                      </h3>
                      <p className="text-[#6B7280] text-sm leading-relaxed mb-8">
                        {study.teaser}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-8">
                        {study.services.map(s => (
                          <span key={s} className="text-[9px] font-bold text-[#6B7280] uppercase tracking-widest bg-gray-50 px-2 py-0.5 rounded border border-gray-100">
                            {s}
                          </span>
                        ))}
                      </div>
                      <button className="flex items-center gap-2 font-bold text-sm text-[#1F2328] group/btn">
                        View case study <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </motion.div>
                  ))
                ) : (
                  <div className="col-span-full py-24 text-center">
                    <Search className="w-12 h-12 text-gray-200 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">No case studies match your filters.</h3>
                    <p className="text-[#6B7280]">Try adjusting your search or filter selection.</p>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* How We Think About Results */}
        <section className="py-24 md:py-32 bg-[#F8F9FB] border-y border-gray-100">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-5">
                <span className="text-xs font-bold text-[#6366F1] tracking-[0.2em] uppercase mb-4 block">Outcomes</span>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8 tracking-tight">What we measure</h2>
                <p className="text-lg text-[#6B7280] leading-relaxed mb-8">
                  AI success is not “we tried a tool.” It is measurable change in how work gets done. Outcomes vary by organization, but we typically track:
                </p>
                <div className="space-y-4">
                  {[
                    "Time saved on recurring tasks and workflows",
                    "Consistency and accuracy of outputs",
                    "Adoption across teams and roles",
                    "Reduced risk through controlled access",
                    "Content velocity and production efficiency",
                    "Improvement in response quality"
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 items-center">
                      <CheckCircle2 className="w-5 h-5 text-[#14B8A6]" />
                      <span className="font-semibold text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Time Saved", val: "40%", desc: "Average reduction in manual synthesis time across documented pilots.", icon: Clock },
                  { title: "Accuracy", val: "98%", desc: "Grounded response rate using structured KnowledgeStack foundations.", icon: Database },
                  { title: "Adoption", val: "85%", desc: "Engagement rate for teams with role-based training and enablement.", icon: Users },
                  { title: "Risk Mitigation", val: "100%", desc: "Governance compliance for all agent-based deployments.", icon: ShieldCheck }
                ].map((stat, i) => (
                  <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                      <div className="w-10 h-10 rounded-lg bg-[#F8F9FB] flex items-center justify-center shrink-0">
                        <stat.icon className="w-5 h-5 text-[#6B7280]" />
                      </div>
                      <span className="text-3xl font-bold text-[#14B8A6]">{stat.val}</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{stat.title}</h4>
                      <p className="text-xs text-[#6B7280] leading-relaxed">{stat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies CTA Strip */}
        <section className="py-24 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="bg-[#1F2328] p-12 md:p-20 rounded-[40px] shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 text-white">
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
              
              <div className="relative z-10 max-w-2xl text-center lg:text-left">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Want results like these?</h2>
                <p className="text-xl text-gray-400">
                  Start with AI Readiness to identify your highest impact opportunities, your biggest gaps, and a practical roadmap.
                </p>
              </div>
              <div className="relative z-10 flex flex-col sm:flex-row gap-4 whitespace-nowrap">
                <button className="px-10 py-5 bg-[#14B8A6] text-white font-bold rounded-lg hover:bg-[#0D9488] transition-all shadow-lg shadow-[#14B8A6]/20">
                  Run AI Readiness
                </button>
                <button className="px-10 py-5 bg-transparent text-white font-bold rounded-lg border border-white/20 hover:bg-white hover:text-[#1F2328] transition-all">
                  Talk to FieldSignal
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Block */}
        <section className="py-24 md:py-32 bg-[#F8F9FB] border-t border-gray-100">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-16">
              <div className="lg:col-span-4">
                <span className="text-xs font-bold text-[#14B8A6] tracking-[0.2em] uppercase mb-4 block">Proof FAQ</span>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6 tracking-tight">Case Studies FAQs</h2>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-gray-200 rounded text-[10px] font-bold text-[#6B7280]">
                  <CheckCircle2 className="w-3 h-3 text-[#14B8A6]" /> VERIFIED DEPLOYMENTS
                </div>
              </div>
              <div className="lg:col-span-8">
                <div className="divide-y divide-gray-100">
                  <FAQItem 
                    question="What types of organizations do you work with?"
                    answer="We work with teams across technology, education, finance, services, and impact. The common thread is a need to deploy AI responsibly and practically across workflows."
                  />
                  <FAQItem 
                    question="What if we cannot share client names publicly?"
                    answer="That is common. We can share anonymized case studies that focus on structure, approach, and outcomes without revealing sensitive details."
                  />
                  <FAQItem 
                    question="Do you only do full transformations?"
                    answer="No. Many organizations start with a single service, such as AI Readiness, KnowledgeStack, Governance, or Agents, and expand over time."
                  />
                  <FAQItem 
                    question="How do we know which case study applies to us?"
                    answer="Use the filters by service, department, or outcome. If you are unsure, start with AI Readiness and we’ll recommend the best path based on your goals."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Page Close CTA */}
        <section className="py-24 md:py-40 bg-white">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <h2 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-8">
              Start with clarity.
            </h2>
            <p className="text-xl md:text-2xl text-[#6B7280] max-w-2xl mx-auto mb-12 leading-relaxed">
              If your AI efforts feel fragmented or stuck in pilots, we’ll help you add structure, deploy safely, and create measurable outcomes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="w-full sm:w-auto px-10 py-5 bg-[#14B8A6] text-white font-bold rounded-lg hover:bg-[#0D9488] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#14B8A6]/20">
                Run AI Readiness
              </button>
              <button className="w-full sm:w-auto px-10 py-5 bg-white text-[#1F2328] font-bold rounded-lg border border-gray-200 hover:border-[#1F2328] transition-all">
                Book a Call
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
