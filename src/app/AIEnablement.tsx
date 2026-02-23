import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  CheckCircle2, 
  Workflow, 
  Users, 
  ShieldCheck, 
  BarChart3, 
  Zap, 
  ChevronRight, 
  Plus, 
  Minus,
  Layout,
  FileText,
  Target,
  ZapOff,
  ClipboardList,
  Activity,
  ArrowUpRight,
  Database,
  PenTool,
  Settings,
  Search
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
            <p className="pt-4 text-[#6B7280] leading-relaxed max-w-3xl text-sm">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function AIEnablementPage() {
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyCTA(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigateTo = (path: string) => {
    window.history.pushState({}, "", path);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <div className="min-h-screen bg-[#F8F9FB] text-[#1F2328] font-sans selection:bg-[#14B8A6]/20 relative">
      <Header />

      {/* Sticky Side CTA (Desktop) */}
      <AnimatePresence>
        {showStickyCTA && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed right-8 top-32 z-40 hidden xl:flex flex-col gap-3 w-64 p-6 bg-white border border-gray-100 rounded-2xl shadow-xl"
          >
            <p className="text-sm font-bold text-[#1F2328] mb-4">Ready to start?</p>
            <button className="w-full py-4 bg-[#14B8A6] text-white font-bold rounded-lg hover:bg-[#0D9488] transition-all text-sm">
              Book Enablement Call
            </button>
            <button 
              onClick={() => navigateTo("/services/ai-readiness")}
              className="w-full py-4 bg-white text-[#1F2328] border border-gray-200 font-bold rounded-lg hover:border-[#1F2328] transition-all text-sm"
            >
              Run AI Readiness
            </button>
          </motion.div>
        )}
      </AnimatePresence>

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
                <span className="text-xs font-bold text-[#14B8A6] tracking-[0.2em] uppercase mb-4 block">AI Enablement</span>
                <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-8">
                  Move from pilots to adoption.
                </h1>
                <p className="text-xl md:text-2xl text-[#6B7280] leading-relaxed mb-10 max-w-2xl">
                  AI Enablement is hands-on implementation support that embeds AI into daily work across departments. We translate use cases into workflows, train teams to use AI consistently, and put structure and governance in place so adoption sticks.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <button className="px-10 py-5 bg-[#14B8A6] text-white font-bold rounded-lg hover:bg-[#0D9488] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#14B8A6]/20">
                    Book an Enablement Call
                  </button>
                  <button 
                    onClick={() => navigateTo("/services/ai-readiness")}
                    className="px-10 py-5 bg-white text-[#1F2328] font-bold rounded-lg border border-gray-200 hover:border-[#1F2328] transition-all"
                  >
                    Run AI Readiness
                  </button>
                </div>
                <p className="text-sm font-semibold text-[#6B7280]">Built for real teams, real workflows, real results.</p>
              </motion.div>
            </div>

            <div className="lg:col-span-5 hidden lg:block relative">
              <svg width="400" height="400" viewBox="0 0 400 400" fill="none" className="mx-auto">
                <rect x="50" y="50" width="300" height="300" stroke="#1F2328" strokeWidth="0.5" strokeDasharray="4 4" className="opacity-20" />
                
                {/* Workflow Diagram */}
                <g className="opacity-80">
                  <motion.rect 
                    x="70" y="80" width="100" height="60" rx="4" fill="white" stroke="#1F2328" strokeWidth="1"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
                  />
                  <text x="85" y="115" className="text-[10px] font-bold fill-[#1F2328]">PEOPLE</text>
                  
                  <motion.path 
                    d="M170 110 H230" stroke="#14B8A6" strokeWidth="2" strokeDasharray="4 4"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.5, duration: 1 }}
                  />
                  
                  <motion.rect 
                    x="230" y="80" width="100" height="60" rx="4" fill="white" stroke="#1F2328" strokeWidth="1"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
                  />
                  <text x="245" y="115" className="text-[10px] font-bold fill-[#1F2328]">WORKFLOWS</text>
                  
                  <motion.path 
                    d="M280 140 V200" stroke="#14B8A6" strokeWidth="2" strokeDasharray="4 4"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.2, duration: 1 }}
                  />
                  
                  <motion.rect 
                    x="230" y="200" width="100" height="60" rx="4" fill="#14B8A6" fillOpacity="0.05" stroke="#14B8A6" strokeWidth="1"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
                  />
                  <text x="245" y="235" className="text-[10px] font-bold fill-[#14B8A6]">STANDARDS</text>
                  
                  <motion.path 
                    d="M230 230 H170" stroke="#14B8A6" strokeWidth="2" strokeDasharray="4 4"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.8, duration: 1 }}
                  />
                  
                  {/* Progress dots */}
                  <motion.circle 
                    cx="150" cy="230" r="4" fill="#14B8A6"
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  />
                </g>
              </svg>
            </div>
          </div>
        </section>

        {/* Snapshot Section */}
        <section className="py-24 bg-white border-b border-gray-100">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-7">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">What this delivers</h2>
                <div className="space-y-4">
                  {[
                    "AI embedded into real workflows, not side experiments",
                    "Clear standards for how teams use AI day to day",
                    "Faster execution with consistent quality and lower risk",
                    "Measurable impact through defined outcomes and tracking",
                    "A repeatable enablement model you can scale across departments"
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start p-4 bg-[#F8F9FB] rounded-xl border border-gray-100">
                      <CheckCircle2 className="w-5 h-5 text-[#14B8A6] mt-0.5 shrink-0" />
                      <p className="font-semibold text-[#1F2328]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:col-span-5">
                <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#14B8A6]/5 rounded-bl-full" />
                  <p className="text-xs font-bold text-[#14B8A6] uppercase tracking-widest mb-6">Enablement Scorecard</p>
                  <div className="space-y-6">
                    {[
                      { label: "Workflow Alignment", value: 85 },
                      { label: "Team Adoption", value: 72 },
                      { label: "Governance Compliance", value: 100 }
                    ].map((stat, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-sm font-bold mb-2">
                          <span>{stat.label}</span>
                          <span>{stat.value}%</span>
                        </div>
                        <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${stat.value}%` }}
                            transition={{ duration: 1, delay: i * 0.2 }}
                            className="h-full bg-[#14B8A6]"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who it's for + Signs Section */}
        <section className="py-24 md:py-32 bg-[#F8F9FB]">
          <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-8">
            {/* Who it's for */}
            <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-[#EEF4FF] rounded-lg flex items-center justify-center mb-8">
                <Users className="w-6 h-6 text-[#6366F1]" />
              </div>
              <h3 className="text-2xl font-bold mb-8">Who this is for</h3>
              <ul className="space-y-4">
                {[
                  "Organizations that have tested AI but struggle to drive adoption",
                  "Teams with scattered pilots and inconsistent usage",
                  "Leaders who want operational impact, not \"innovation theatre\"",
                  "Departments that need AI support for documentation and comms",
                  "Organizations preparing to deploy agents or content systems at scale"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-[#6B7280] leading-relaxed">
                    <div className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[#14B8A6]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Signs you need this */}
            <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-[#FFF1F2] rounded-lg flex items-center justify-center mb-8">
                <ZapOff className="w-6 h-6 text-rose-500" />
              </div>
              <h3 className="text-2xl font-bold mb-8">Signs you should start here</h3>
              <ul className="space-y-4">
                {[
                  "AI use is informal, inconsistent, or driven by few power users",
                  "Outputs vary in quality and no one owns standards",
                  "Teams are unsure what is safe to share with AI tools",
                  "Processes are not documented, or knowledge is spread out",
                  "You want measurable gains but need a practical rollout plan"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-[#6B7280] leading-relaxed">
                    <div className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-rose-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Enablement Pillars Section */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold text-[#14B8A6] tracking-[0.2em] uppercase mb-4 block">Signature Pillars</span>
              <h2 className="text-4xl font-bold tracking-tight">The foundation of adoption</h2>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Workflows and use cases", desc: "Mapping high-value tasks to AI-assisted processes.", icon: Workflow },
                { title: "Standards and review", desc: "Setting quality controls so outputs are dependable.", icon: ClipboardList },
                { title: "Safe use and guardrails", desc: "Aligning adoption with governance and risk policies.", icon: ShieldCheck },
                { title: "Adoption rhythm", desc: "Building the habits that turn tools into operations.", icon: Activity }
              ].map((pillar, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5 }}
                  className="p-8 bg-[#F8F9FB] rounded-2xl border-t-4 border-t-[#14B8A6] border border-gray-100 shadow-sm"
                >
                  <pillar.icon className="w-8 h-8 text-[#1F2328] mb-6" />
                  <h4 className="font-bold mb-3">{pillar.title}</h4>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{pillar.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included (3-Part Scope) */}
        <section className="py-24 md:py-32 bg-[#EEF4FF]/50 border-y border-gray-100">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="mb-16">
              <span className="text-xs font-bold text-[#6366F1] tracking-[0.2em] uppercase mb-4 block">Scope</span>
              <h2 className="text-4xl font-bold tracking-tight">What's included in AI Enablement</h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Pillar 1 */}
              <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
                <h3 className="text-xl font-bold mb-6">1) Workflow Enablement</h3>
                <p className="text-[#6B7280] text-sm mb-8 leading-relaxed grow">
                  We map your high-value use cases to the actual workflows teams run every day, then design practical AI-assisted steps that reduce time and improve quality.
                </p>
                <div className="space-y-3 mb-8">
                  <p className="text-[10px] font-bold text-[#1F2328] uppercase tracking-widest">We enable:</p>
                  {[
                    "Department workflows and task mapping",
                    "Use-case prioritization by impact",
                    "AI-assisted SOPs and playbooks",
                    "Prompt standards and patterns",
                    "Output review workflows"
                  ].map((item, i) => (
                    <div key={i} className="flex gap-2 items-center text-sm text-[#6B7280]">
                      <CheckCircle2 className="w-4 h-4 text-[#14B8A6]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-6 border-t border-gray-50">
                  <span className="inline-block px-3 py-1 bg-[#F8F9FB] text-[10px] font-bold text-[#14B8A6] uppercase tracking-wider rounded">
                    Workflow Playbook
                  </span>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
                <h3 className="text-xl font-bold mb-6">2) Tooling and Implementation</h3>
                <p className="text-[#6B7280] text-sm mb-8 leading-relaxed grow">
                  We help you implement AI tools in a way that teams can actually use, with clear guidance on scope, permissions, and operational boundaries.
                </p>
                <div className="space-y-3 mb-8">
                  <p className="text-[10px] font-bold text-[#1F2328] uppercase tracking-widest">We do:</p>
                  {[
                    "Tool selection and configuration",
                    "Shared prompt library setup",
                    "Integration planning",
                    "Light automation and handoffs",
                    "Documentation for repeatability"
                  ].map((item, i) => (
                    <div key={i} className="flex gap-2 items-center text-sm text-[#6B7280]">
                      <CheckCircle2 className="w-4 h-4 text-[#14B8A6]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-6 border-t border-gray-50">
                  <span className="inline-block px-3 py-1 bg-[#F8F9FB] text-[10px] font-bold text-[#14B8A6] uppercase tracking-wider rounded">
                    Shared Libraries
                  </span>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
                <h3 className="text-xl font-bold mb-6">3) Team Training and Adoption</h3>
                <p className="text-[#6B7280] text-sm mb-8 leading-relaxed grow">
                  We train teams by role and give them standards they can follow, so AI use is consistent, safe, and productive.
                </p>
                <div className="space-y-3 mb-8">
                  <p className="text-[10px] font-bold text-[#1F2328] uppercase tracking-widest">We deliver:</p>
                  {[
                    "Role-based training sessions",
                    "Team-specific use case libraries",
                    "Usage guidelines and guardrails",
                    "Adoption support and office hours",
                    "Manager enablement"
                  ].map((item, i) => (
                    <div key={i} className="flex gap-2 items-center text-sm text-[#6B7280]">
                      <CheckCircle2 className="w-4 h-4 text-[#14B8A6]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-6 border-t border-gray-50">
                  <span className="inline-block px-3 py-1 bg-[#F8F9FB] text-[10px] font-bold text-[#14B8A6] uppercase tracking-wider rounded">
                    Adoption Plan
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Deliverables Section */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">What you get at the end</h2>
              <div className="space-y-4">
                {[
                  "Use Case and Workflow Map",
                  "Department Prompt Library and Standards",
                  "AI Usage Guidelines and Guardrails",
                  "Enablement Playbook and SOPs",
                  "Training Sessions and Materials by Role",
                  "Adoption Dashboard Starter"
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-center text-[#1F2328] font-semibold">
                    <CheckCircle2 className="w-5 h-5 text-[#14B8A6]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Prompt Templates", icon: FileText },
                { title: "QC Checklist", icon: ClipboardList },
                { title: "Use Case Playbook", icon: Layout },
                { title: "Quick Rules", icon: ShieldCheck }
              ].map((tile, i) => (
                <div key={i} className="p-6 bg-[#F8F9FB] border border-gray-100 rounded-xl flex flex-col items-center text-center group cursor-default">
                  <tile.icon className="w-8 h-8 text-[#6B7280] mb-4 group-hover:text-[#14B8A6] transition-colors" />
                  <span className="text-sm font-bold">{tile.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Steps Section */}
        <section className="py-24 md:py-32 bg-[#F8F9FB] border-y border-gray-100">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="max-w-2xl mb-20">
              <span className="text-xs font-bold text-[#14B8A6] tracking-[0.2em] uppercase mb-4 block">How it works</span>
              <h2 className="text-4xl font-bold tracking-tight mb-6">A simple, structured sequence</h2>
            </div>
            
            <div className="space-y-12 relative">
              <div className="absolute left-[27px] top-0 bottom-0 w-px bg-gray-200 z-0" />
              
              {[
                { step: 1, title: "Discovery and workflow mapping", desc: "We confirm goals, identify high-impact workflows, and align stakeholders on success metrics." },
                { step: 2, title: "Enablement design", desc: "We translate use cases into repeatable workflows, standards, templates, and review processes." },
                { step: 3, title: "Implementation support", desc: "We set up the tools, libraries, and documentation teams need to execute consistently." },
                { step: 4, title: "Training and rollout", desc: "We train teams by role, launch workflows, and support early adoption." },
                { step: 5, title: "Measurement and iteration", desc: "We track what is working, refine standards, and expand to the next set of workflows." }
              ].map((item) => (
                <motion.div 
                  key={item.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: item.step * 0.1 }}
                  className="flex gap-10 items-start relative z-10 group"
                >
                  <div className="w-14 h-14 rounded-full bg-white border-2 border-[#14B8A6] flex items-center justify-center shrink-0 font-bold text-[#14B8A6] shadow-sm group-hover:bg-[#14B8A6] group-hover:text-white transition-colors">
                    {item.step}
                  </div>
                  <div className="pt-2">
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-[#6B7280] leading-relaxed max-w-2xl">{item.desc}</p>
                    {item.step === 3 && (
                      <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-white border border-gray-200 rounded-md text-[10px] font-bold text-[#6B7280]">
                        <Activity className="w-3 h-3 text-[#14B8A6]" /> WEEKLY CADENCE
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Adoption and Measurement Loop */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <h2 className="text-4xl font-bold tracking-tight mb-6">The Adoption Loop</h2>
              <p className="text-[#6B7280]">Enablement is not a one-time event. It's an operating rhythm.</p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 mb-20">
              {["Deploy", "Use", "Review", "Improve", "Repeat"].map((step, i) => (
                <React.Fragment key={step}>
                  <div className="px-6 py-3 bg-[#F8F9FB] border border-gray-100 rounded-full font-bold text-sm shadow-sm">
                    {step}
                  </div>
                  {i < 4 && <ArrowRight className="w-5 h-5 text-gray-300 hidden sm:block" />}
                </React.Fragment>
              ))}
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: "Adoption", val: "90%+", icon: Users },
                { label: "Time Saved", val: "40%", icon: BarChart3 },
                { label: "Quality Score", val: "High", icon: Target },
                { label: "Risk Flags", val: "Zero", icon: ShieldCheck }
              ].map((stat, i) => (
                <div key={i} className="p-8 bg-[#F8F9FB] rounded-2xl border border-gray-100 text-center group">
                  <stat.icon className="w-6 h-6 text-[#6B7280] mx-auto mb-4 group-hover:text-[#14B8A6] transition-colors" />
                  <p className="text-2xl font-bold mb-1">{stat.val}</p>
                  <p className="text-xs font-bold text-[#6B7280] uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Where this leads */}
        <section className="py-24 md:py-32 bg-[#F8F9FB] border-t border-gray-100">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Where this leads</h2>
              <p className="text-lg text-[#6B7280]">
                AI Enablement creates the operating rhythm for adoption. Once teams have standards and workflows in place, it becomes much easier to scale.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "KnowledgeStack", desc: "Strengthen knowledge foundations for accuracy.", path: "/services" },
                { title: "Governance + Guardrails", desc: "Formalize policies and access control.", path: "/services" },
                { title: "AI Agents", desc: "Automate tasks with secure retrieval.", path: "/services" },
                { title: "AI Maintenance", desc: "Keep workflows aligned over time.", path: "/services" },
                { title: "ContentEngine", desc: "Scalable content operations.", path: "/services" }
              ].map((item, i) => (
                <div 
                  key={i}
                  onClick={() => navigateTo(item.path)}
                  className="p-8 bg-white border border-gray-100 rounded-2xl hover:border-[#14B8A6] transition-all group cursor-pointer"
                >
                  <h4 className="font-bold mb-2 flex items-center justify-between">
                    {item.title}
                    <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-[#14B8A6] transition-colors" />
                  </h4>
                  <p className="text-sm text-[#6B7280]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-16">
              <div className="lg:col-span-4">
                <span className="text-xs font-bold text-[#14B8A6] tracking-[0.2em] uppercase mb-4 block">AEO Block</span>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">AI Enablement FAQs</h2>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F8F9FB] border border-gray-200 rounded text-[10px] font-bold text-[#6B7280]">
                  <Search className="w-3 h-3 text-[#14B8A6]" /> SCHEMA READY
                </div>
              </div>
              <div className="lg:col-span-8">
                <div className="divide-y divide-gray-100">
                  <FAQItem 
                    question="What is AI enablement?"
                    answer="AI enablement is the work of embedding AI into day-to-day operations through workflows, standards, training, and implementation support. It turns AI from an individual tool into a team capability."
                  />
                  <FAQItem 
                    question="How is this different from AI training?"
                    answer="Training builds skills and confidence. Enablement goes further by designing workflows, creating standards, implementing tools, and supporting adoption so the work actually changes."
                  />
                  <FAQItem 
                    question="Do you work with our existing AI tools?"
                    answer="Yes. We meet you where you are. We can optimize your current stack or help you select and structure a better one."
                  />
                  <FAQItem 
                    question="How do you measure success?"
                    answer="We define outcomes upfront, then track time saved, quality improvements, adoption rates, and operational consistency. Measurement is built into the enablement plan."
                  />
                  <FAQItem 
                    question="How long does AI enablement take?"
                    answer="It depends on scope and departments involved. Many teams start with a focused enablement sprint and expand once the first workflows prove value."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Strip */}
        <section className="py-24 md:py-40 bg-[#F8F9FB]">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <div className="bg-white border border-gray-100 p-12 md:p-20 rounded-[40px] shadow-sm">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-8">Make AI usable across teams.</h2>
              <p className="text-xl md:text-2xl text-[#6B7280] max-w-2xl mx-auto mb-12 leading-relaxed">
                If you want AI adoption that sticks, we’ll help you turn use cases into workflows, set standards teams can follow, and build a rollout that delivers measurable lift.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button className="w-full sm:w-auto px-10 py-5 bg-[#14B8A6] text-white font-bold rounded-lg hover:bg-[#0D9488] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#14B8A6]/20">
                  Book an Enablement Call
                </button>
                <button 
                  onClick={() => navigateTo("/services/ai-readiness")}
                  className="w-full sm:w-auto px-10 py-5 bg-white text-[#1F2328] font-bold rounded-lg border border-gray-200 hover:border-[#1F2328] transition-all"
                >
                  Run AI Readiness
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
