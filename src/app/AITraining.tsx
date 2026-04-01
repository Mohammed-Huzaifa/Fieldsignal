import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  CheckCircle2, 
  GraduationCap,
  Users, 
  ShieldCheck, 
  BarChart3, 
  ChevronRight, 
  Plus, 
  Minus,
  FileText,
  Target,
  BookOpen,
  ClipboardCheck,
  Lightbulb,
  Workflow,
  Database,
  Settings,
  MessageSquare,
  RefreshCw,
  Layers,
  Clock,
  UserCheck,
  BriefcaseBusiness,
  Megaphone,
  HeadphonesIcon,
  BarChart,
  Cpu
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

export default function AITrainingPage() {
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
              Book AI Training
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
        <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-white border-b border-gray-100">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-7">
                <p className="text-xs font-bold text-[#14B8A6] tracking-widest uppercase mb-6">AI Training</p>
                <h1 className="text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-6">
                  Train teams to use AI with confidence.
                </h1>
                <p className="text-xl text-[#6B7280] leading-relaxed mb-10 max-w-2xl">
                  AI Training is a structured, role-based program that helps teams use AI effectively and responsibly. We build shared standards, practical skills, and clear boundaries so AI improves speed and quality without increasing risk.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <button className="px-8 py-4 bg-[#14B8A6] text-white font-bold rounded-lg hover:bg-[#0D9488] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#14B8A6]/20">
                    Book AI Training
                  </button>
                  <button 
                    onClick={() => navigateTo("/services/ai-readiness")}
                    className="px-8 py-4 bg-white text-[#1F2328] font-bold rounded-lg border border-gray-200 hover:border-[#1F2328] transition-all"
                  >
                    Run AI Readiness
                  </button>
                </div>
                <p className="text-sm text-[#6B7280] font-medium">
                  Built for real work, not theory.
                </p>
              </div>

              {/* Hero Visual - Learning Path Diagram */}
              <div className="md:col-span-5">
                <div className="bg-gradient-to-br from-[#F8F9FB] to-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="space-y-4">
                    {[
                      { num: "01", label: "AI Basics", status: "complete" },
                      { num: "02", label: "Prompt Patterns", status: "complete" },
                      { num: "03", label: "Verification", status: "complete" },
                      { num: "04", label: "Safe Use", status: "active" },
                      { num: "05", label: "Templates", status: "pending" },
                      { num: "06", label: "Team Standards", status: "pending" }
                    ].map((module, i) => (
                      <div 
                        key={i} 
                        className={`flex items-center gap-4 p-4 rounded-lg ${
                          module.status === "active" 
                            ? "bg-[#14B8A6]/10 border-2 border-[#14B8A6]" 
                            : module.status === "complete"
                            ? "bg-white border border-gray-200"
                            : "bg-gray-50 border border-gray-100"
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${
                          module.status === "complete" 
                            ? "bg-[#14B8A6] text-white" 
                            : module.status === "active"
                            ? "bg-[#14B8A6] text-white"
                            : "bg-gray-200 text-gray-400"
                        }`}>
                          {module.status === "complete" ? <CheckCircle2 className="w-5 h-5" /> : module.num}
                        </div>
                        <span className={`font-semibold ${
                          module.status === "pending" ? "text-gray-400" : "text-[#1F2328]"
                        }`}>
                          {module.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Snapshot Section */}
        <section className="py-24 md:py-32 bg-[#F8F9FB]">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">What this delivers</h2>
            <div className="bg-white p-10 md:p-12 rounded-2xl border border-gray-100 shadow-sm">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: Users, text: "Teams that know how to use AI consistently and responsibly" },
                  { icon: ClipboardCheck, text: "Clear standards for prompting, verification, and safe use" },
                  { icon: Workflow, text: "Practical workflows for everyday tasks, by department" },
                  { icon: ShieldCheck, text: "Reduced risk from uncontrolled tool usage" },
                  { icon: MessageSquare, text: "A shared language across leadership and teams" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1 shrink-0">
                      <item.icon className="w-6 h-6 text-[#14B8A6]" />
                    </div>
                    <p className="text-lg leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Who it's for + Signs you need this */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Who it's for */}
              <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm">
                <h2 className="text-2xl font-bold mb-8">Who this is for</h2>
                <div className="space-y-4">
                  {[
                    "Organizations adopting AI where teams need shared standards",
                    "Leaders who want AI use to be safe, measurable, and aligned",
                    "Departments that use AI for writing, analysis, planning, and documentation",
                    "Teams that are experimenting but not seeing consistent results",
                    "Organizations preparing to deploy AI agents, knowledge systems, or ContentEngine"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#14B8A6] mt-0.5 shrink-0" />
                      <p className="text-[#6B7280] leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Signs you need this */}
              <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm">
                <h2 className="text-2xl font-bold mb-8">Signs you should start here</h2>
                <div className="space-y-4">
                  {[
                    "AI usage varies widely between individuals and teams",
                    "People are unsure what is safe to share with AI tools",
                    "Outputs are inconsistent and hard to trust",
                    "Teams waste time rewriting or fixing AI outputs",
                    "Leadership wants adoption but needs guardrails and accountability"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#14B8A6]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-[#14B8A6]"></div>
                      </div>
                      <p className="text-[#6B7280] leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Training Tracks Section */}
        <section className="py-24 md:py-32 bg-[#F8F9FB]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Role-based training tracks</h2>
              <p className="text-lg text-[#6B7280] max-w-3xl">
                We tailor training to how different roles actually work, so the learning translates into daily execution.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: BriefcaseBusiness,
                  title: "Leadership and Managers",
                  outcome: "Lead AI adoption with clarity and accountability",
                  useCases: [
                    "Strategic planning and decision frameworks",
                    "Team briefing and internal communications",
                    "Risk assessment and governance alignment"
                  ]
                },
                {
                  icon: Megaphone,
                  title: "Marketing and Communications",
                  outcome: "Produce consistent, on-brand content faster",
                  useCases: [
                    "Campaign briefs and messaging frameworks",
                    "Content repurposing and asset adaptation",
                    "Audience research and competitive analysis"
                  ]
                },
                {
                  icon: Target,
                  title: "Sales and Business Development",
                  outcome: "Personalize outreach and close deals efficiently",
                  useCases: [
                    "Prospect research and account planning",
                    "Proposal drafting and pitch preparation",
                    "Follow-up sequences and objection handling"
                  ]
                },
                {
                  icon: Settings,
                  title: "Operations and Administration",
                  outcome: "Streamline workflows and reduce repetitive work",
                  useCases: [
                    "Process documentation and SOP creation",
                    "Meeting summaries and action tracking",
                    "Data organization and reporting"
                  ]
                },
                {
                  icon: HeadphonesIcon,
                  title: "Customer Support",
                  outcome: "Deliver faster, more consistent service",
                  useCases: [
                    "Response templates and escalation protocols",
                    "Knowledge base article generation",
                    "Sentiment analysis and feedback synthesis"
                  ]
                },
                {
                  icon: BarChart,
                  title: "Analysts and Project Teams",
                  outcome: "Extract insights and build repeatable workflows",
                  useCases: [
                    "Data interpretation and executive summaries",
                    "Research synthesis and literature review",
                    "Project planning and milestone tracking"
                  ]
                }
              ].map((track, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -4 }}
                  className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#14B8A6]/10 flex items-center justify-center mb-6">
                    <track.icon className="w-6 h-6 text-[#14B8A6]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{track.title}</h3>
                  <p className="text-[#6B7280] mb-6 leading-relaxed">{track.outcome}</p>
                  <div className="space-y-2 pt-4 border-t border-gray-100">
                    {track.useCases.map((useCase, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-[#14B8A6] mt-0.5 shrink-0" />
                        <p className="text-sm text-[#6B7280]">{useCase}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Curriculum Modules Section */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What we teach</h2>
              <p className="text-lg text-[#6B7280] max-w-3xl">
                Six core modules that build practical skills and responsible habits.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { 
                  num: "01", 
                  title: "AI basics and mental models",
                  description: "How AI works, what it's good at, and where it fails"
                },
                { 
                  num: "02", 
                  title: "Prompt patterns for real tasks",
                  description: "Reusable structures for writing, analysis, and decision support"
                },
                { 
                  num: "03", 
                  title: "Verification and quality control",
                  description: "How to review, fact-check, and trust AI outputs"
                },
                { 
                  num: "04", 
                  title: "Safe use and sensitive information",
                  description: "What not to share, how to protect data, and compliance basics"
                },
                { 
                  num: "05", 
                  title: "Templates and reusable workflows",
                  description: "Building prompt libraries and department-specific playbooks"
                },
                { 
                  num: "06", 
                  title: "Team standards and adoption habits",
                  description: "Shared expectations, QC processes, and ongoing improvement"
                }
              ].map((module, i) => (
                <div 
                  key={i}
                  className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#14B8A6] text-white font-bold flex items-center justify-center text-sm">
                      {module.num}
                    </div>
                    <div className="h-px flex-1 bg-gray-200"></div>
                  </div>
                  <h3 className="text-lg font-bold mb-3 leading-snug">{module.title}</h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{module.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-24 md:py-32 bg-[#EEF4FF]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="mb-12">
              <p className="text-xs font-bold text-[#14B8A6] tracking-widest uppercase mb-4">Scope</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What's included in AI Training</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "1) Role-based Training Tracks",
                  description: "We tailor training to how different roles actually work, so the learning translates into daily execution.",
                  includes: [
                    "Leadership and managers",
                    "Marketing and communications",
                    "Sales and business development",
                    "Operations and administration",
                    "Customer support and service teams",
                    "Analysts and project teams"
                  ],
                  highlight: "Live or hybrid delivery"
                },
                {
                  title: "2) Practical AI Skills and Standards",
                  description: "We teach the practical skills that create consistent outputs, and the standards that keep AI use safe.",
                  includes: [
                    "Prompting patterns for real tasks",
                    "Verification and fact-checking workflows",
                    "Quality control and review methods",
                    "Handling sensitive information",
                    "Style and tone consistency",
                    "Building reusable templates and prompt libraries"
                  ],
                  highlight: "Hands-on exercises"
                },
                {
                  title: "3) Use Case Playbooks",
                  description: "Training becomes valuable when it maps to real tasks. We build use case playbooks teams can reuse.",
                  includes: [
                    "Department-specific use cases",
                    "Example prompts and templates",
                    "Output standards and review checklist",
                    "\"Do / Don't\" guidelines for your organization",
                    "A shared internal reference for ongoing use"
                  ],
                  highlight: "Department-specific"
                }
              ].map((item, i) => (
                <div 
                  key={i}
                  className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm"
                >
                  <h3 className="text-xl font-bold mb-4 pb-4 border-b border-gray-100">{item.title}</h3>
                  <p className="text-[#6B7280] mb-6 leading-relaxed">{item.description}</p>
                  <div className="space-y-2 mb-6">
                    {item.includes.map((include, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#14B8A6] mt-0.5 shrink-0" />
                        <p className="text-sm text-[#6B7280]">{include}</p>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <span className="inline-block px-3 py-1 bg-[#14B8A6]/10 text-[#14B8A6] text-xs font-bold rounded-full">
                      {item.highlight}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deliverables Section */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">What you get at the end</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Deliverables List */}
              <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm">
                <div className="space-y-4">
                  {[
                    "Role-based training sessions (live or hybrid)",
                    "Training deck and workshop materials",
                    "Department use case library",
                    "Prompt templates and reusable patterns",
                    "AI usage guidelines and safe-use rules",
                    "Quality checklist for reviewing AI outputs",
                    "Optional recording and internal knowledge handoff"
                  ].map((deliverable, i) => (
                    <div key={i} className="flex items-start gap-4 pb-4 border-b border-gray-100 last:border-0">
                      <CheckCircle2 className="w-6 h-6 text-[#14B8A6] mt-0.5 shrink-0" />
                      <p className="text-lg leading-relaxed">{deliverable}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Preview Tiles */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: FileText, label: "Prompt Template", color: "bg-blue-50 border-blue-200" },
                  { icon: ClipboardCheck, label: "QC Checklist", color: "bg-green-50 border-green-200" },
                  { icon: BookOpen, label: "Use Case Playbook", color: "bg-purple-50 border-purple-200" },
                  { icon: ShieldCheck, label: "Safe-Use Guide", color: "bg-teal-50 border-teal-200" }
                ].map((item, i) => (
                  <div 
                    key={i}
                    className={`${item.color} border-2 p-6 rounded-xl flex flex-col items-center justify-center text-center min-h-[140px]`}
                  >
                    <item.icon className="w-8 h-8 mb-3 text-[#6B7280]" />
                    <p className="font-semibold text-sm text-[#1F2328]">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-24 md:py-32 bg-[#F8F9FB]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="mb-12">
              <p className="text-xs font-bold text-[#14B8A6] tracking-widest uppercase mb-4">How it works</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">A simple, structured sequence</h2>
            </div>

            <div className="grid md:grid-cols-5 gap-8">
              {[
                {
                  num: "01",
                  title: "Training discovery",
                  description: "We align on teams, roles, tools, risk level, and goals."
                },
                {
                  num: "02",
                  title: "Use case mapping",
                  description: "We select practical, high-impact use cases to teach and practice."
                },
                {
                  num: "03",
                  title: "Delivery and workshops",
                  description: "We run live training sessions with hands-on exercises and real examples."
                },
                {
                  num: "04",
                  title: "Playbooks and templates",
                  description: "We deliver reusable prompt templates, playbooks, and guidelines."
                },
                {
                  num: "05",
                  title: "Reinforcement (optional)",
                  description: "Office hours, refresh sessions, and updates as AI usage evolves."
                }
              ].map((step, i) => (
                <div key={i} className="relative">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#14B8A6] text-white font-bold flex items-center justify-center shrink-0">
                      {step.num}
                    </div>
                    {i < 4 && (
                      <div className="hidden md:block absolute top-6 left-16 w-full h-0.5 bg-gray-200">
                        <div className="h-full w-1/2 bg-[#14B8A6]"></div>
                      </div>
                    )}
                  </div>
                  <h3 className="font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reinforcement Options Section */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Keep training effective over time</h2>
              <p className="text-lg text-[#6B7280] max-w-3xl">
                Training sticks when it's reinforced. We offer flexible options to support ongoing adoption.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: MessageSquare,
                  title: "Office Hours",
                  description: "Monthly Q&A sessions where teams can ask questions, troubleshoot challenges, and share wins.",
                  features: ["Live support", "Team questions", "Best practice sharing"]
                },
                {
                  icon: RefreshCw,
                  title: "Refresher Sessions",
                  description: "Quarterly skill-building sessions that introduce new techniques and reinforce standards.",
                  features: ["New prompt patterns", "Updated guidelines", "Skill progression"]
                },
                {
                  icon: UserCheck,
                  title: "Team Onboarding Kit",
                  description: "Self-serve training materials for new hires so they can get up to speed on your AI standards.",
                  features: ["Video recordings", "Prompt library", "QC checklists"]
                }
              ].map((option, i) => (
                <div 
                  key={i}
                  className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#14B8A6]/10 flex items-center justify-center mb-6">
                    <option.icon className="w-6 h-6 text-[#14B8A6]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{option.title}</h3>
                  <p className="text-[#6B7280] mb-6 leading-relaxed">{option.description}</p>
                  <div className="space-y-2">
                    {option.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#14B8A6]"></div>
                        <p className="text-sm text-[#6B7280]">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Where This Leads Section */}
        <section className="py-24 md:py-32 bg-[#F8F9FB]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Where this leads</h2>
              <p className="text-lg text-[#6B7280] max-w-3xl">
                Training creates shared standards and confidence. From there, organizations typically move into enablement and deployment, where AI becomes embedded into workflows and systems.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "AI Enablement",
                  description: "Embed AI into workflows and adoption",
                  path: "/services/ai-enablement"
                },
                {
                  title: "AI Governance + Guardrails",
                  description: "Formalize policies and access control",
                  path: "/services"
                },
                {
                  title: "AI KnowledgeStack",
                  description: "Improve accuracy and knowledge grounding",
                  path: "/services"
                },
                {
                  title: "AI Agents (RAG + MCP)",
                  description: "Move from usage to task automation",
                  path: "/services"
                }
              ].map((next, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -4 }}
                  onClick={() => navigateTo(next.path)}
                  className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer group"
                >
                  <h3 className="font-bold mb-2 group-hover:text-[#14B8A6] transition-colors">{next.title}</h3>
                  <p className="text-sm text-[#6B7280] mb-4 leading-relaxed">{next.description}</p>
                  <div className="flex items-center gap-1 text-sm font-semibold text-[#14B8A6] group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">AI Training FAQs</h2>
            
            <div className="max-w-4xl bg-white p-10 rounded-2xl border border-gray-100 shadow-sm">
              <FAQItem 
                question="What makes FieldSignal training different?"
                answer="We train for real work. Sessions are role-based, use practical tasks, and include reusable templates and standards teams can apply immediately."
              />
              <FAQItem 
                question="Is this training tool-specific?"
                answer="It can be. We can train around your existing tools, or keep training platform-agnostic and focus on principles, safety, and repeatable workflows."
              />
              <FAQItem 
                question="Do you cover responsible use and risk?"
                answer="Yes. Safe-use rules, verification methods, and handling sensitive data are core parts of the training."
              />
              <FAQItem 
                question="Can you train both leadership and teams?"
                answer="Yes. We often run a leadership session first, then department tracks so the organization has shared standards and aligned expectations."
              />
              <FAQItem 
                question="How long does training take?"
                answer="It depends on scope. Some teams start with a single workshop, while others build a multi-session program across departments."
              />
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 md:py-32 bg-[#F8F9FB] border-t border-gray-100">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="bg-white p-12 md:p-16 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                <div className="max-w-2xl">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                    Build AI capability across the organization.
                  </h2>
                  <p className="text-lg text-[#6B7280] leading-relaxed">
                    If you want teams to use AI safely, consistently, and productively, we'll deliver role-based training that translates into real improvements in how work gets done.
                  </p>
                </div>
                <div className="flex flex-col gap-4 shrink-0">
                  <button className="px-8 py-4 bg-[#14B8A6] text-white font-bold rounded-lg hover:bg-[#0D9488] transition-all whitespace-nowrap">
                    Book AI Training
                  </button>
                  <button 
                    onClick={() => navigateTo("/services/ai-readiness")}
                    className="px-8 py-4 bg-white text-[#1F2328] font-bold rounded-lg border border-gray-200 hover:border-[#1F2328] transition-all whitespace-nowrap"
                  >
                    Run AI Readiness
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
