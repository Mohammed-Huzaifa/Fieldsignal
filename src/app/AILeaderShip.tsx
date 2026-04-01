import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  CheckCircle2, 
  Compass,
  Users, 
  ShieldCheck, 
  BarChart3, 
  ChevronRight, 
  Plus, 
  Minus,
  FileText,
  Target,
  Lightbulb,
  Workflow,
  Database,
  Settings,
  TrendingUp,
  Zap,
  ClipboardCheck,
  Calendar,
  UserCog,
  Lock,
  Rocket,
  PenTool,
  Activity,
  Clock,
  LayoutDashboard,
  CheckSquare,
  Flag,
  GitBranch,
  AlertCircle
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

export default function AILeadershipPage() {
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
              Book a Leadership Call
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
                <p className="text-xs font-bold text-[#14B8A6] tracking-widest uppercase mb-6">AI Fractional Leadership</p>
                <h1 className="text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-6">
                  Get AI leadership that can execute.
                </h1>
                <p className="text-xl text-[#6B7280] leading-relaxed mb-10 max-w-2xl">
                  AI Fractional Leadership embeds an experienced AI operator into your organization to guide strategy, governance, and delivery. You get senior-level direction, cross-team alignment, and practical execution support without hiring full-time.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <button className="px-8 py-4 bg-[#14B8A6] text-white font-bold rounded-lg hover:bg-[#0D9488] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#14B8A6]/20">
                    Book a Leadership Call
                  </button>
                  <button 
                    onClick={() => navigateTo("/services/ai-readiness")}
                    className="px-8 py-4 bg-white text-[#1F2328] font-bold rounded-lg border border-gray-200 hover:border-[#1F2328] transition-all"
                  >
                    Run AI Readiness
                  </button>
                </div>
                <p className="text-sm text-[#6B7280] font-medium">
                  Built for leaders who need momentum and control.
                </p>
              </div>

              {/* Hero Visual - Operating Dashboard */}
              <div className="md:col-span-5">
                <div className="bg-gradient-to-br from-[#F8F9FB] to-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="space-y-4">
                    {/* Priorities Panel */}
                    <div className="bg-white p-5 rounded-xl border-2 border-[#14B8A6] shadow-sm">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-[#14B8A6] flex items-center justify-center">
                          <Flag className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm font-bold">Priorities</span>
                      </div>
                      <div className="space-y-2">
                        {["KnowledgeStack deployment", "Governance baseline", "Team enablement"].map((item, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#14B8A6]"></div>
                            <span className="text-[#6B7280]">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Governance Panel */}
                    <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                          <ShieldCheck className="w-4 h-4 text-[#6B7280]" />
                        </div>
                        <span className="text-sm font-bold">Governance</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[#6B7280]">Status</span>
                        <span className="px-2 py-1 bg-green-50 text-green-700 rounded font-medium">Active</span>
                      </div>
                    </div>

                    {/* Delivery Cadence Panel */}
                    <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                          <Activity className="w-4 h-4 text-[#6B7280]" />
                        </div>
                        <span className="text-sm font-bold">Delivery Cadence</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        {["Weekly", "Monthly", "Quarterly"].map((period, i) => (
                          <div key={i} className="text-center py-1 bg-[#F8F9FB] rounded">
                            <span className="text-[#6B7280]">{period}</span>
                          </div>
                        ))}
                      </div>
                    </div>
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
                  { icon: Compass, text: "Clear AI direction aligned to business priorities" },
                  { icon: Users, text: "Leadership alignment across departments and stakeholders" },
                  { icon: ShieldCheck, text: "Governance, guardrails, and accountability from day one" },
                  { icon: Rocket, text: "Practical execution support that turns plans into deployments" },
                  { icon: Activity, text: "A repeatable operating rhythm for AI adoption and improvement" }
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
                    "Organizations that need an AI lead but are not hiring yet",
                    "Leadership teams managing AI initiatives across departments",
                    "Teams with AI pilots running but no clear owner or operating model",
                    "Organizations that need governance, risk controls, and decision support",
                    "Teams deploying KnowledgeStack, agents, workflow automation, or ContentEngine"
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
                    "AI decisions are happening without a clear accountable owner",
                    "Projects move slowly because stakeholders are not aligned",
                    "Governance is unclear and risk is increasing",
                    "Teams are choosing tools without a coherent strategy",
                    "Leadership wants measurable outcomes and a realistic rollout plan",
                    "You need someone to drive delivery while upskilling internal teams"
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

        {/* Leadership Pillars Section */}
        <section className="py-24 md:py-32 bg-[#F8F9FB]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Three pillars of leadership</h2>
              <p className="text-lg text-[#6B7280] max-w-3xl">
                AI Fractional Leadership covers strategy, governance, and delivery in one integrated operating model.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Lightbulb,
                  title: "Strategy and Prioritization",
                  description: "We turn AI ambition into focused strategy with clear use cases, priorities, and a deployment sequence leadership can own.",
                  decisions: [
                    "What to build first",
                    "Which tools to use",
                    "How to measure success"
                  ]
                },
                {
                  icon: ShieldCheck,
                  title: "Governance and Operating Model",
                  description: "We establish guardrails, ownership, permissions, and standards that keep AI adoption safe and consistent.",
                  decisions: [
                    "Who owns what",
                    "What's allowed and prohibited",
                    "How to manage risk"
                  ]
                },
                {
                  icon: Rocket,
                  title: "Delivery Oversight and Execution",
                  description: "We drive delivery so plans turn into working systems. We coordinate teams, manage execution, and ensure measurable outcomes.",
                  decisions: [
                    "What ships next",
                    "How to unblock teams",
                    "When to iterate or scale"
                  ]
                }
              ].map((pillar, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -4 }}
                  className="bg-white p-8 rounded-2xl border-t-4 border-[#14B8A6] shadow-sm hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#14B8A6]/10 flex items-center justify-center mb-6">
                    <pillar.icon className="w-6 h-6 text-[#14B8A6]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
                  <p className="text-[#6B7280] mb-6 leading-relaxed">{pillar.description}</p>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-xs font-bold text-[#6B7280] uppercase tracking-widest mb-3">Typical decisions</p>
                    <div className="space-y-2">
                      {pillar.decisions.map((decision, j) => (
                        <div key={j} className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-[#14B8A6] mt-0.5 shrink-0" />
                          <p className="text-sm text-[#6B7280]">{decision}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="mb-12">
              <p className="text-xs font-bold text-[#14B8A6] tracking-widest uppercase mb-4">Scope</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What's included in AI Fractional Leadership</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "1) AI Strategy and Prioritization",
                  description: "We turn AI ambition into a focused strategy tied to business outcomes, with a prioritized sequence of use cases and a rollout plan leadership can own.",
                  includes: [
                    "Use-case prioritization and sequencing",
                    "Tooling and stack direction",
                    "Success metrics and reporting",
                    "Roadmaps and deployment plans",
                    "Stakeholder alignment and decision-making"
                  ],
                  highlight: "Strategic direction"
                },
                {
                  title: "2) Operating Model and Governance",
                  description: "We establish the operating layer leadership needs: guardrails, ownership, permissions, and standards that keep AI adoption safe and consistent.",
                  includes: [
                    "AI governance and guardrails",
                    "Roles and responsibilities across teams",
                    "Policies for data, usage, and accountability",
                    "Quality standards and review practices",
                    "Risk management and escalation paths"
                  ],
                  highlight: "Governance framework"
                },
                {
                  title: "3) Delivery Oversight and Execution Support",
                  description: "We drive delivery so plans turn into working systems. We coordinate teams, manage execution, and ensure deployments are scoped, governed, and measurable.",
                  includes: [
                    "KnowledgeStack and dataset programs",
                    "Agent deployments (RAG + MCP)",
                    "AI Enablement and training rollouts",
                    "ContentEngine deployments",
                    "Maintenance planning and iteration loops"
                  ],
                  highlight: "Execution support"
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
        <section className="py-24 md:py-32 bg-[#F8F9FB]">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">What you get at the end</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Deliverables List */}
              <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm">
                <div className="space-y-4">
                  {[
                    "AI priorities and rollout plan tied to business outcomes",
                    "Governance baseline, policies, and ownership model",
                    "Use-case pipeline and project sequencing",
                    "Delivery cadence and reporting framework",
                    "Stakeholder alignment artifacts and decision logs",
                    "Execution oversight across deployments and enablement",
                    "A scalable operating rhythm for AI adoption"
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
                  { icon: LayoutDashboard, label: "AI Roadmap", color: "bg-blue-50 border-blue-200" },
                  { icon: ShieldCheck, label: "Governance Policy", color: "bg-green-50 border-green-200" },
                  { icon: GitBranch, label: "Use Case Pipeline", color: "bg-purple-50 border-purple-200" },
                  { icon: BarChart3, label: "Weekly Report", color: "bg-teal-50 border-teal-200" }
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

        {/* Operating Cadence Section - KEY DIFFERENTIATOR */}
        <section className="py-24 md:py-32 bg-[#EEF4FF]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Weekly operating rhythm</h2>
              <p className="text-lg text-[#6B7280] max-w-3xl">
                AI Fractional Leadership operates on a structured cadence that keeps priorities clear, stakeholders aligned, and delivery moving forward.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  frequency: "Weekly",
                  icon: Calendar,
                  color: "border-[#14B8A6] bg-[#14B8A6]/5",
                  activities: [
                    "Priorities and delivery check-in",
                    "Stakeholder alignment",
                    "Blocker resolution",
                    "Progress reporting"
                  ]
                },
                {
                  frequency: "Monthly",
                  icon: BarChart3,
                  color: "border-[#6366F1] bg-[#6366F1]/5",
                  activities: [
                    "Performance review",
                    "Use case pipeline update",
                    "Governance refresh",
                    "Success metrics review"
                  ]
                },
                {
                  frequency: "Quarterly",
                  icon: TrendingUp,
                  color: "border-gray-300 bg-gray-50",
                  activities: [
                    "Strategic planning",
                    "Roadmap adjustments",
                    "Operating model review",
                    "Internal capability assessment"
                  ]
                }
              ].map((cadence, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -4 }}
                  className={`bg-white p-8 rounded-2xl border-2 ${cadence.color} shadow-sm hover:shadow-md transition-all`}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-white border-2 border-gray-100 flex items-center justify-center">
                      <cadence.icon className="w-5 h-5 text-[#6B7280]" />
                    </div>
                    <h3 className="text-xl font-bold">{cadence.frequency}</h3>
                  </div>
                  <div className="space-y-2">
                    {cadence.activities.map((activity, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] mt-2 shrink-0"></div>
                        <p className="text-sm text-[#6B7280]">{activity}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Operating Rhythm Details */}
            <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold mb-6">What this rhythm delivers</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: CheckSquare, text: "Clear priorities that teams can execute against" },
                  { icon: Users, text: "Cross-functional alignment and reduced decision friction" },
                  { icon: Clock, text: "Fast resolution of blockers and risks" },
                  { icon: BarChart3, text: "Transparent reporting that leadership can trust" },
                  { icon: Rocket, text: "Sustained delivery momentum over time" },
                  { icon: ShieldCheck, text: "Continuous governance and quality oversight" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <item.icon className="w-5 h-5 text-[#14B8A6] mt-0.5 shrink-0" />
                    <p className="text-[#6B7280] leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="mb-12">
              <p className="text-xs font-bold text-[#14B8A6] tracking-widest uppercase mb-4">How it works</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">A simple, structured sequence</h2>
            </div>

            <div className="grid md:grid-cols-5 gap-8">
              {[
                {
                  num: "01",
                  title: "Leadership alignment",
                  description: "We confirm goals, constraints, risk tolerance, and what success looks like."
                },
                {
                  num: "02",
                  title: "Operating layer plan",
                  description: "We map initiatives to the AI Operating Layer and define the delivery sequence."
                },
                {
                  num: "03",
                  title: "Governance and standards",
                  description: "We implement guardrails, roles, permissions, and quality standards."
                },
                {
                  num: "04",
                  title: "Delivery cadence",
                  description: "We set a weekly operating rhythm with clear priorities, owners, and reporting."
                },
                {
                  num: "05",
                  title: "Deploy and iterate",
                  description: "We drive deployments, measure results, and continuously improve."
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

        {/* Transition to Internal Ownership Section */}
        <section className="py-24 md:py-32 bg-[#F8F9FB]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Where this leads</h2>
              <p className="text-lg text-[#6B7280] max-w-3xl">
                Fractional leadership is the fastest way to create structure and momentum. Over time, it helps you build internal capability and a stable operating model that outlives any single project.
              </p>
            </div>

            {/* Maturity Ladder */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  stage: "Stabilize",
                  icon: ShieldCheck,
                  description: "Establish governance, priorities, and a working cadence that creates predictable outcomes.",
                  timeline: "Months 1-3"
                },
                {
                  stage: "Scale",
                  icon: TrendingUp,
                  description: "Deploy agents, KnowledgeStack, and workflows across teams while maintaining quality and control.",
                  timeline: "Months 4-9"
                },
                {
                  stage: "Internalize",
                  icon: UserCog,
                  description: "Transition to internal ownership with documented processes, trained teams, and ongoing support.",
                  timeline: "Months 10+"
                }
              ].map((phase, i) => (
                <div 
                  key={i}
                  className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm relative"
                >
                  <div className="absolute top-8 right-8">
                    <span className="text-xs font-bold text-[#14B8A6] bg-[#14B8A6]/10 px-3 py-1 rounded-full">
                      {phase.timeline}
                    </span>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-[#14B8A6]/10 flex items-center justify-center mb-6">
                    <phase.icon className="w-6 h-6 text-[#14B8A6]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{phase.stage}</h3>
                  <p className="text-[#6B7280] leading-relaxed">{phase.description}</p>
                </div>
              ))}
            </div>

            {/* Common Next Steps */}
            <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold mb-6">Common next steps</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "AI Readiness", description: "Baseline and set direction if not completed yet", path: "/services/ai-readiness" },
                  { title: "AI KnowledgeStack", description: "Create strong foundations for accuracy", path: "/services" },
                  { title: "AI Agents (RAG + MCP)", description: "Automate tasks with secure retrieval", path: "/services" },
                  { title: "AI Enablement and Training", description: "Scale adoption across teams", path: "/services/ai-enablement" },
                  { title: "AI Governance + Guardrails", description: "Formalize policy and accountability", path: "/services" },
                  { title: "AI Maintenance", description: "Keep systems aligned and improving", path: "/services" }
                ].map((next, i) => (
                  <div 
                    key={i}
                    onClick={() => navigateTo(next.path)}
                    className="flex items-start gap-3 p-4 rounded-lg hover:bg-[#F8F9FB] transition-colors cursor-pointer group"
                  >
                    <ChevronRight className="w-5 h-5 text-[#14B8A6] mt-0.5 shrink-0 group-hover:translate-x-1 transition-transform" />
                    <div>
                      <p className="font-semibold mb-1 group-hover:text-[#14B8A6] transition-colors">{next.title}</p>
                      <p className="text-sm text-[#6B7280]">{next.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">AI Fractional Leadership FAQs</h2>
            
            <div className="max-w-4xl bg-white p-10 rounded-2xl border border-gray-100 shadow-sm">
              <FAQItem 
                question="What is AI fractional leadership?"
                answer="AI fractional leadership is part-time embedded leadership that guides AI strategy, governance, and delivery. It gives you senior-level direction and execution support without a full-time hire."
              />
              <FAQItem 
                question="How is this different from consulting?"
                answer="Consulting often delivers recommendations. Fractional leadership drives decisions, operating rhythm, and execution, working alongside your team to ship outcomes."
              />
              <FAQItem 
                question="Who does the fractional leader work with internally?"
                answer="Typically leadership, department heads, IT, operations, and the people responsible for day-to-day execution. The goal is alignment and ownership across teams."
              />
              <FAQItem 
                question="Can this help us avoid risky AI deployments?"
                answer="Yes. Governance, permissions, scope control, and quality standards are core parts of the engagement."
              />
              <FAQItem 
                question="How long do organizations use fractional leadership?"
                answer="Many teams start with a focused period to establish structure and ship key deployments, then transition to maintenance support or internal ownership once the operating model is stable."
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
                    Add AI leadership. Keep control.
                  </h2>
                  <p className="text-lg text-[#6B7280] leading-relaxed">
                    If you need someone to align stakeholders, set guardrails, and drive AI delivery with practical execution, AI Fractional Leadership is the fastest path to momentum.
                  </p>
                </div>
                <div className="flex flex-col gap-4 shrink-0">
                  <button className="px-8 py-4 bg-[#14B8A6] text-white font-bold rounded-lg hover:bg-[#0D9488] transition-all whitespace-nowrap">
                    Book a Leadership Call
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
