import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck,
  Lock,
  ChevronRight, 
  Plus, 
  Minus,
  Shield,
  FileText,
  Users,
  Eye,
  CheckSquare,
  AlertCircle,
  Calendar,
  Clock,
  FileCheck,
  UserCheck,
  Globe,
  LockKeyhole,
  BarChart3,
  Activity,
  Bell,
  GitBranch,
  Settings,
  ClipboardList,
  Layers,
  Target,
  TrendingUp,
  FileCog,
  UserCog,
  Archive
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

export default function AIGovernancePage() {
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
              Book a Governance Call
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
                <p className="text-xs font-bold text-[#14B8A6] tracking-widest uppercase mb-6">AI Governance + Guardrails</p>
                <h1 className="text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-6">
                  Put guardrails around AI before it puts risk around you.
                </h1>
                <p className="text-xl text-[#6B7280] leading-relaxed mb-10 max-w-2xl">
                  AI Governance + Guardrails establishes the policies, permissions, standards, and oversight structures that allow your organization to deploy AI confidently. We turn risk into clarity, and ambiguity into accountable ownership.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <button className="px-8 py-4 bg-[#14B8A6] text-white font-bold rounded-lg hover:bg-[#0D9488] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#14B8A6]/20">
                    Book a Governance Call
                  </button>
                  <button 
                    onClick={() => navigateTo("/services/ai-readiness")}
                    className="px-8 py-4 bg-white text-[#1F2328] font-bold rounded-lg border border-gray-200 hover:border-[#1F2328] transition-all"
                  >
                    Run AI Readiness
                  </button>
                </div>
                <p className="text-sm text-[#6B7280] font-medium">
                  Governance is not friction. It is protection and scale.
                </p>
              </div>

              {/* Hero Visual - Governance Control Panel */}
              <div className="md:col-span-5">
                <div className="bg-gradient-to-br from-[#F8F9FB] to-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="space-y-4">
                    {/* Policy */}
                    <div className="bg-white p-4 rounded-xl border-2 border-[#14B8A6] shadow-sm">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-[#14B8A6] flex items-center justify-center">
                          <FileText className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm font-bold">Policy</span>
                      </div>
                      <div className="space-y-1">
                        {["Usage standards", "Data classification"].map((item, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#14B8A6]"></div>
                            <span className="text-[#6B7280]">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Permissions */}
                    <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                          <Lock className="w-4 h-4 text-[#6B7280]" />
                        </div>
                        <span className="text-sm font-bold">Permissions</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        {["Public", "Internal", "Restricted"].map((tier, i) => (
                          <div key={i} className="text-center py-1 bg-[#F8F9FB] rounded">
                            <span className="text-[#6B7280]">{tier}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Oversight */}
                    <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                          <Eye className="w-4 h-4 text-[#6B7280]" />
                        </div>
                        <span className="text-sm font-bold">Oversight</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[#6B7280]">Review cadence</span>
                        <span className="px-2 py-1 bg-green-50 text-green-700 rounded font-medium">Active</span>
                      </div>
                    </div>

                    {/* Logging */}
                    <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                          <Activity className="w-4 h-4 text-[#6B7280]" />
                        </div>
                        <span className="text-sm font-bold">Audit Trail</span>
                      </div>
                      <p className="text-xs text-[#6B7280]">All actions logged and traceable</p>
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
                  { icon: FileCheck, text: "Clear AI usage policies leadership can stand behind" },
                  { icon: UserCog, text: "Defined ownership and accountability across teams" },
                  { icon: Lock, text: "Role-based access controls and data boundaries" },
                  { icon: CheckSquare, text: "Quality and review standards for AI outputs" },
                  { icon: ShieldCheck, text: "Reduced legal, compliance, and reputational risk" },
                  { icon: TrendingUp, text: "A governance model that supports growth, not blocks it" }
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
                    "Organizations deploying AI across multiple departments",
                    "Leadership teams concerned about compliance and risk",
                    "Regulated industries requiring clear oversight",
                    "Teams handling sensitive internal or customer data",
                    "Organizations scaling AI agents, workflows, or content systems"
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
                    "AI usage is growing without clear policies",
                    "Teams are unsure what data can be shared with AI tools",
                    "There is no defined owner of AI risk or oversight",
                    "Outputs are inconsistent and difficult to audit",
                    "Legal or compliance teams are asking questions",
                    "You want to scale AI but need confidence first"
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

        {/* Governance Framework Overview - SIGNATURE */}
        <section className="py-24 md:py-32 bg-[#EEF4FF]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The governance framework</h2>
              <p className="text-lg text-[#6B7280] max-w-3xl mx-auto">
                A complete governance system built on four interconnected pillars that enable safe, accountable AI adoption.
              </p>
            </div>

            {/* Framework Diagram */}
            <div className="bg-white p-12 rounded-2xl border border-gray-100 shadow-sm mb-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {[
                  {
                    icon: FileText,
                    title: "Policy and Standards",
                    description: "Usage guidelines, acceptable use, and quality standards"
                  },
                  {
                    icon: Lock,
                    title: "Permissions and Data Boundaries",
                    description: "Access tiers, data classification, and source controls"
                  },
                  {
                    icon: Eye,
                    title: "Quality and Oversight",
                    description: "Review processes, evaluation, and monitoring"
                  },
                  {
                    icon: Shield,
                    title: "Risk and Incident Response",
                    description: "Escalation paths, incident handling, and safeguards"
                  }
                ].map((pillar, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -4 }}
                    className="bg-gradient-to-br from-[#F8F9FB] to-white p-6 rounded-xl border-2 border-[#14B8A6] hover:border-[#0D9488] transition-all"
                  >
                    <div className="w-14 h-14 rounded-xl bg-[#14B8A6] flex items-center justify-center mx-auto mb-4">
                      <pillar.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-bold text-center mb-2">{pillar.title}</h3>
                    <p className="text-sm text-[#6B7280] text-center leading-relaxed">{pillar.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Central Connection */}
              <div className="text-center">
                <div className="inline-block bg-gradient-to-br from-[#14B8A6] to-[#0D9488] px-8 py-4 rounded-xl text-white font-bold shadow-lg">
                  AI Operating Layer
                </div>
              </div>
            </div>

            {/* Four Core Attributes */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: CheckCircle2, title: "Approved use", description: "Clear what's allowed" },
                { icon: Lock, title: "Controlled access", description: "Permissions enforced" },
                { icon: Activity, title: "Traceable outputs", description: "Audit logs maintained" },
                { icon: Calendar, title: "Ongoing reviews", description: "Regular oversight" }
              ].map((attr, i) => (
                <div 
                  key={i}
                  className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#14B8A6]/10 flex items-center justify-center mx-auto mb-4">
                    <attr.icon className="w-6 h-6 text-[#14B8A6]" />
                  </div>
                  <h3 className="font-bold mb-2">{attr.title}</h3>
                  <p className="text-sm text-[#6B7280]">{attr.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="mb-12">
              <p className="text-xs font-bold text-[#14B8A6] tracking-widest uppercase mb-4">Scope</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What's included in AI Governance + Guardrails</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "1) Policy and Usage Standards",
                  description: "We define what AI can be used for, what it cannot be used for, and how it should be reviewed and approved.",
                  includes: [
                    "AI usage policy and acceptable use standards",
                    "Data classification and handling guidelines",
                    "Escalation and exception processes",
                    "Human-in-the-loop requirements",
                    "Documentation and approval workflows"
                  ],
                  highlight: "Policy framework"
                },
                {
                  title: "2) Permissions and Access Controls",
                  description: "AI systems must respect boundaries. We design role-based access and permissions aligned to sensitivity and risk levels.",
                  includes: [
                    "Role-based access tiers",
                    "Sensitive data controls",
                    "Source inclusion and exclusion rules",
                    "Agent action boundaries",
                    "Logging and traceability standards"
                  ],
                  highlight: "Access controls"
                },
                {
                  title: "3) Oversight and Accountability",
                  description: "Governance only works when ownership is clear. We define who is responsible for what and how decisions are documented.",
                  includes: [
                    "Governance ownership model",
                    "Review and approval checkpoints",
                    "Audit trails and documentation",
                    "Quality review frameworks",
                    "Risk monitoring cadence"
                  ],
                  highlight: "Accountability model"
                }
              ].map((item, i) => (
                <div 
                  key={i}
                  className="bg-white p-8 rounded-2xl border-t-4 border-[#14B8A6] shadow-sm"
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
                    "AI Governance Policy Document",
                    "Acceptable Use and Risk Guidelines",
                    "Role-Based Access and Permission Framework",
                    "Agent and Tool Guardrail Definitions",
                    "Escalation and Incident Response Plan",
                    "Oversight and Accountability Model",
                    "Governance Review Cadence and Checklist"
                  ].map((deliverable, i) => (
                    <div key={i} className="flex items-start gap-4 pb-4 border-b border-gray-100 last:border-0">
                      <CheckCircle2 className="w-6 h-6 text-[#14B8A6] mt-0.5 shrink-0" />
                      <p className="text-lg leading-relaxed">{deliverable}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Artifact Preview Tiles */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Lock, label: "Access Matrix", color: "bg-blue-50 border-blue-200" },
                  { icon: FileText, label: "Policy Doc", color: "bg-green-50 border-green-200" },
                  { icon: CheckSquare, label: "Review Checklist", color: "bg-purple-50 border-purple-200" },
                  { icon: GitBranch, label: "Incident Flowchart", color: "bg-teal-50 border-teal-200" }
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

        {/* Process Steps Section */}
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
                  title: "Risk and exposure review",
                  description: "We assess current AI usage, data sensitivity, and regulatory considerations."
                },
                {
                  num: "02",
                  title: "Policy design",
                  description: "We draft policies aligned to your industry, structure, and risk profile."
                },
                {
                  num: "03",
                  title: "Guardrail implementation",
                  description: "We define permissions, boundaries, and quality controls across systems."
                },
                {
                  num: "04",
                  title: "Leadership alignment",
                  description: "We review and refine policies with leadership and stakeholders."
                },
                {
                  num: "05",
                  title: "Rollout and communication",
                  description: "We support communication to teams so standards are understood and applied."
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

        {/* Guardrails Model Section */}
        <section className="py-24 md:py-32 bg-[#EEF4FF]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Data classification and guardrails</h2>
              <p className="text-lg text-[#6B7280] max-w-3xl">
                We implement a three-tier data classification system with controls that ensure AI systems respect boundaries and maintain accountability.
              </p>
            </div>

            {/* 3-Tier Data Classification */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  tier: "Approved / Public",
                  icon: Globe,
                  color: "border-green-200 bg-green-50",
                  allowed: ["Public marketing content", "General FAQs", "Brand guidelines", "Product information"],
                  access: "All teams and AI systems",
                  usage: "Agents, ContentEngine, AEO"
                },
                {
                  tier: "Internal",
                  icon: Users,
                  color: "border-blue-200 bg-blue-50",
                  allowed: ["SOPs and processes", "Training materials", "Department resources", "Internal wikis"],
                  access: "Authenticated employees only",
                  usage: "Internal agents and workflows"
                },
                {
                  tier: "Restricted / Sensitive",
                  icon: LockKeyhole,
                  color: "border-red-200 bg-red-50",
                  allowed: ["Financial data", "Legal documents", "HR records", "Customer PII"],
                  access: "Specific roles with permissions",
                  usage: "Governed access only"
                }
              ].map((tier, i) => (
                <div 
                  key={i}
                  className={`bg-white p-8 rounded-2xl border-2 ${tier.color} shadow-sm`}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-white border-2 border-gray-100 flex items-center justify-center">
                      <tier.icon className="w-6 h-6 text-[#6B7280]" />
                    </div>
                    <h3 className="text-xl font-bold">{tier.tier}</h3>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-bold text-[#6B7280] uppercase tracking-widest mb-2">Allowed content</p>
                      <div className="space-y-1">
                        {tier.allowed.map((item, j) => (
                          <div key={j} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3 h-3 text-[#14B8A6] mt-1 shrink-0" />
                            <p className="text-sm text-[#6B7280]">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-xs font-bold text-[#6B7280] uppercase tracking-widest mb-2">Access</p>
                      <p className="text-sm text-[#6B7280]">{tier.access}</p>
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-xs font-bold text-[#6B7280] uppercase tracking-widest mb-2">Typical usage</p>
                      <p className="text-sm text-[#6B7280]">{tier.usage}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Controls Row */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="font-bold mb-6 flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#14B8A6]" />
                Standard controls across all tiers
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { icon: Activity, title: "Logging", description: "All actions tracked and auditable" },
                  { icon: FileCheck, title: "Citations", description: "Sources referenced and traceable" },
                  { icon: AlertCircle, title: "Refusal rules", description: "Out-of-scope requests rejected" },
                  { icon: UserCheck, title: "Human review", description: "Critical decisions escalated" }
                ].map((control, i) => (
                  <div key={i} className="text-center">
                    <div className="w-12 h-12 rounded-lg bg-[#14B8A6]/10 flex items-center justify-center mx-auto mb-3">
                      <control.icon className="w-6 h-6 text-[#14B8A6]" />
                    </div>
                    <h4 className="font-bold text-sm mb-1">{control.title}</h4>
                    <p className="text-xs text-[#6B7280]">{control.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Oversight Cadence Section */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Oversight and review cadence</h2>
              <p className="text-lg text-[#6B7280] max-w-3xl">
                Governance requires regular review. We establish a clear cadence for monitoring usage, evaluating quality, and updating policies.
              </p>
            </div>

            {/* Cadence Tiles */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  frequency: "Weekly",
                  icon: Clock,
                  color: "border-[#14B8A6] bg-[#14B8A6]/5",
                  activities: [
                    "Usage signals and anomalies",
                    "Issue triage and escalation",
                    "Performance monitoring",
                    "Quick policy questions"
                  ]
                },
                {
                  frequency: "Monthly",
                  icon: BarChart3,
                  color: "border-[#6366F1] bg-[#6366F1]/5",
                  activities: [
                    "Quality and accuracy review",
                    "Policy compliance check",
                    "Team feedback collection",
                    "Metrics and KPI review"
                  ]
                },
                {
                  frequency: "Quarterly",
                  icon: Calendar,
                  color: "border-gray-300 bg-gray-50",
                  activities: [
                    "Full governance audit",
                    "Policy refresh and updates",
                    "Risk assessment review",
                    "Strategic alignment check"
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

            {/* Incident Response Flow */}
            <div className="bg-[#F8F9FB] p-10 rounded-2xl border border-gray-100">
              <h3 className="font-bold mb-6 flex items-center gap-2">
                <Bell className="w-5 h-5 text-[#14B8A6]" />
                Incident response flow
              </h3>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { num: "01", title: "Detect", description: "Issue identified or reported" },
                  { num: "02", title: "Escalate", description: "Routed to governance owner" },
                  { num: "03", title: "Resolve", description: "Mitigation and correction" },
                  { num: "04", title: "Update", description: "Policy or controls adjusted" }
                ].map((step, i) => (
                  <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 relative">
                    <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[#14B8A6] text-white text-xs font-bold flex items-center justify-center">
                      {step.num}
                    </div>
                    <h4 className="font-bold mb-2 mt-2">{step.title}</h4>
                    <p className="text-sm text-[#6B7280]">{step.description}</p>
                    {i < 3 && (
                      <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2">
                        <ChevronRight className="w-4 h-4 text-[#14B8A6]" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Where This Leads Section */}
        <section className="py-24 md:py-32 bg-[#F8F9FB]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Where this leads</h2>
              <p className="text-lg text-[#6B7280] max-w-3xl">
                Strong governance allows AI adoption to scale safely. Once guardrails are in place, teams can deploy agents, workflows, and content systems with confidence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "AI KnowledgeStack",
                  description: "Improve accuracy and traceability",
                  path: "/services/ai-knowledge-stack"
                },
                {
                  title: "AI Agents (RAG + MCP)",
                  description: "With controlled scope and permissions",
                  path: "/services/ai-agents"
                },
                {
                  title: "AI Enablement and Training",
                  description: "Align teams to governance standards",
                  path: "/services/ai-enablement"
                },
                {
                  title: "AI Maintenance",
                  description: "Keep policies and systems aligned over time",
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
            <h2 className="text-3xl md:text-4xl font-bold mb-12">AI Governance FAQs</h2>
            
            <div className="max-w-4xl bg-white p-10 rounded-2xl border border-gray-100 shadow-sm">
              <FAQItem 
                question="What is AI governance?"
                answer="AI governance is the framework of policies, permissions, oversight, and accountability that ensures AI systems are used responsibly and aligned to organizational values and regulations."
              />
              <FAQItem 
                question="Why is AI governance important?"
                answer="Without governance, AI usage can create data exposure, inconsistent outputs, reputational risk, and compliance challenges. Governance reduces risk while enabling safe scale."
              />
              <FAQItem 
                question="Does governance slow down innovation?"
                answer="No. Well-designed governance creates clarity. It allows teams to move faster because they know what is permitted and how to operate safely."
              />
              <FAQItem 
                question="Who should own AI governance internally?"
                answer="Typically a cross-functional group including leadership, IT, legal or compliance, and operational stakeholders. Clear ownership is critical."
              />
              <FAQItem 
                question="How often should governance be reviewed?"
                answer="Governance should be reviewed regularly, especially as new tools, agents, and workflows are introduced. Many organizations establish a quarterly review cadence."
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
                    Scale AI without increasing risk.
                  </h2>
                  <p className="text-lg text-[#6B7280] leading-relaxed">
                    If your organization is deploying AI across teams, governance is not optional. We'll help you define clear policies, establish guardrails, and create oversight structures that leadership can trust.
                  </p>
                </div>
                <div className="flex flex-col gap-4 shrink-0">
                  <button className="px-8 py-4 bg-[#14B8A6] text-white font-bold rounded-lg hover:bg-[#0D9488] transition-all whitespace-nowrap">
                    Book a Governance Call
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
