import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  CheckCircle2, 
  RefreshCw,
  ChevronRight, 
  Plus, 
  Minus,
  Shield,
  BarChart3,
  CheckSquare,
  Database,
  Activity,
  Clock,
  TrendingUp,
  AlertCircle,
  FileCheck,
  Lock,
  Users,
  Eye,
  Target,
  Zap,
  Layers,
  Calendar,
  FileText,
  GitBranch,
  Settings,
  Archive,
  Search,
  Bell,
  TrendingDown,
  UserCheck,
  FileCog
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

export default function AIMaintenancePage() {
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
              Book a Maintenance Call
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
                <p className="text-xs font-bold text-[#14B8A6] tracking-widest uppercase mb-6">AI Maintenance</p>
                <h1 className="text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-6">
                  Keep AI reliable after it ships.
                </h1>
                <p className="text-xl text-[#6B7280] leading-relaxed mb-10 max-w-2xl">
                  AI systems change as your organization changes. AI Maintenance keeps your KnowledgeStack, agents, content systems, and governance aligned through updates, monitoring, and continuous improvement, so performance stays strong and risk stays controlled.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <button className="px-8 py-4 bg-[#14B8A6] text-white font-bold rounded-lg hover:bg-[#0D9488] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#14B8A6]/20">
                    Book a Maintenance Call
                  </button>
                  <button 
                    onClick={() => navigateTo("/services/ai-readiness")}
                    className="px-8 py-4 bg-white text-[#1F2328] font-bold rounded-lg border border-gray-200 hover:border-[#1F2328] transition-all"
                  >
                    Run AI Readiness
                  </button>
                </div>
                <p className="text-sm text-[#6B7280] font-medium">
                  AI is not set-and-forget. Maintenance is the operating layer.
                </p>
              </div>

              {/* Hero Visual - Monitoring Dashboard */}
              <div className="md:col-span-5">
                <div className="bg-gradient-to-br from-[#F8F9FB] to-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="space-y-4">
                    {/* Drift Alerts */}
                    <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Activity className="w-4 h-4 text-[#14B8A6]" />
                          <span className="text-sm font-bold">Drift Monitoring</span>
                        </div>
                        <div className="w-2 h-2 rounded-full bg-[#14B8A6] animate-pulse"></div>
                      </div>
                      <p className="text-xs text-[#6B7280]">All systems stable</p>
                    </div>

                    {/* Dataset Updates */}
                    <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Database className="w-4 h-4 text-[#6B7280]" />
                          <span className="text-sm font-bold">Dataset Updates</span>
                        </div>
                        <span className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded font-medium">Updated</span>
                      </div>
                      <p className="text-xs text-[#6B7280]">Last sync: 2 days ago</p>
                    </div>

                    {/* Governance Review */}
                    <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <CheckSquare className="w-4 h-4 text-[#6B7280]" />
                          <span className="text-sm font-bold">Governance Review</span>
                        </div>
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                      </div>
                      <p className="text-xs text-[#6B7280]">Next review: 12 days</p>
                    </div>

                    {/* Performance Trend */}
                    <div className="bg-white p-4 rounded-xl border-2 border-[#14B8A6] shadow-sm">
                      <div className="flex items-center gap-2 mb-3">
                        <TrendingUp className="w-4 h-4 text-[#14B8A6]" />
                        <span className="text-sm font-bold">Performance Score</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-2xl font-bold text-[#14B8A6]">94%</div>
                        <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full w-[94%] bg-gradient-to-r from-[#14B8A6] to-[#0D9488] rounded-full"></div>
                        </div>
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
                  { icon: Target, text: "AI outputs that stay accurate and consistent over time" },
                  { icon: Database, text: "Knowledge and datasets kept current with clear ownership" },
                  { icon: Shield, text: "Reduced risk through ongoing governance checks and access reviews" },
                  { icon: BarChart3, text: "Performance monitoring with continuous improvement cycles" },
                  { icon: Users, text: "Less internal burden on teams maintaining AI systems" },
                  { icon: RefreshCw, text: "A stable operating rhythm for scaling AI across departments" }
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
                    "Organizations with AI agents in production that rely on internal knowledge",
                    "Teams using ContentEngine for marketing and communications at scale",
                    "Organizations with growing AI adoption and increasing governance needs",
                    "Leaders who want confidence that AI outputs remain reliable",
                    "Teams without internal capacity to manage updates, evaluation, and controls"
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
                    "AI answers are drifting or becoming less accurate over time",
                    "New documents and policies are not reflected in AI outputs",
                    "Teams are unsure which content sources are current or approved",
                    "Agent usage is rising but governance is not being revisited",
                    "You want to scale AI but need stable systems first",
                    "No one owns ongoing evaluation, improvement, or accountability"
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

        {/* Maintenance Model Loop - SIGNATURE */}
        <section className="py-24 md:py-32 bg-[#EEF4FF]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The maintenance loop</h2>
              <p className="text-lg text-[#6B7280] max-w-3xl mx-auto">
                A continuous cycle that keeps AI systems accurate, governed, and improving over time.
              </p>
            </div>

            {/* Loop Diagram */}
            <div className="bg-white p-12 rounded-2xl border border-gray-100 shadow-sm mb-8">
              <div className="grid md:grid-cols-4 gap-6 mb-12 relative">
                {[
                  {
                    icon: Eye,
                    title: "Monitor",
                    description: "Track accuracy, retrieval quality, and usage signals"
                  },
                  {
                    icon: RefreshCw,
                    title: "Update",
                    description: "Refresh knowledge sources and dataset versions"
                  },
                  {
                    icon: BarChart3,
                    title: "Evaluate",
                    description: "Test performance and identify improvement areas"
                  },
                  {
                    icon: TrendingUp,
                    title: "Improve",
                    description: "Implement fixes and enhance system capabilities"
                  }
                ].map((step, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -4 }}
                    className="bg-gradient-to-br from-[#F8F9FB] to-white p-6 rounded-xl border-2 border-[#14B8A6] hover:border-[#0D9488] transition-all relative"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#14B8A6] flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-center mb-2">{step.title}</h3>
                    <p className="text-sm text-[#6B7280] text-center leading-relaxed">{step.description}</p>
                    
                    {/* Arrow connector */}
                    {i < 3 && (
                      <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                        <ChevronRight className="w-6 h-6 text-[#14B8A6]" />
                      </div>
                    )}
                  </motion.div>
                ))}
                
                {/* Loop back arrow */}
                <div className="hidden md:block absolute -bottom-8 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-2 text-[#14B8A6]">
                    <div className="h-px w-32 bg-[#14B8A6]"></div>
                    <RefreshCw className="w-4 h-4" />
                    <div className="h-px w-32 bg-[#14B8A6]"></div>
                  </div>
                </div>
              </div>

              <div className="text-center pt-8 border-t border-gray-100">
                <p className="text-sm text-[#6B7280] font-medium">Continuous improvement cycle</p>
              </div>
            </div>

            {/* Four Key Metrics */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Target, title: "Accuracy", description: "Output quality remains high" },
                { icon: Search, title: "Retrieval quality", description: "Sources stay relevant" },
                { icon: Shield, title: "Governance alignment", description: "Controls remain current" },
                { icon: Activity, title: "Adoption signals", description: "Usage trends tracked" }
              ].map((metric, i) => (
                <div 
                  key={i}
                  className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#14B8A6]/10 flex items-center justify-center mx-auto mb-4">
                    <metric.icon className="w-6 h-6 text-[#14B8A6]" />
                  </div>
                  <h3 className="font-bold mb-2">{metric.title}</h3>
                  <p className="text-sm text-[#6B7280]">{metric.description}</p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What's included in AI Maintenance</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "1) Knowledge and Dataset Updates",
                  description: "We keep your KnowledgeStack current so AI systems stay grounded in the latest approved information.",
                  includes: [
                    "Source intake and update workflows",
                    "Content cleanup, normalization, and de-duplication",
                    "Taxonomy and metadata updates",
                    "Versioning and change logs",
                    "Coverage reviews to identify missing knowledge"
                  ],
                  highlight: "Dataset management"
                },
                {
                  title: "2) Performance Monitoring and Evaluation",
                  description: "We monitor what is working, what is failing, and what needs to improve, using structured evaluation and real usage signals.",
                  includes: [
                    "Accuracy and consistency checks",
                    "Retrieval quality and citation reliability",
                    "Failure modes and edge cases",
                    "Usage patterns and adoption signals",
                    "Output quality reviews by workflow or department"
                  ],
                  highlight: "Performance tracking"
                },
                {
                  title: "3) Governance and Access Reviews",
                  description: "As adoption grows, governance must stay current. We review permissions, guardrails, and safe-use standards to reduce risk.",
                  includes: [
                    "Role-based access and permissions",
                    "Source allowlists and blocklists",
                    "Agent scope boundaries and refusal rules",
                    "Logging and traceability requirements",
                    "Policy alignment and incident learnings"
                  ],
                  highlight: "Governance review"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-12">What you get each cycle</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Deliverables List */}
              <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm">
                <div className="space-y-4">
                  {[
                    "KnowledgeStack update log and version history",
                    "Coverage and gap report",
                    "Performance review summary with recommendations",
                    "Governance and access review notes",
                    "Improvements implemented across agents or systems",
                    "Updated documentation and standards, if needed"
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
                  { icon: GitBranch, label: "Change Log", color: "bg-blue-50 border-blue-200" },
                  { icon: BarChart3, label: "Evaluation Report", color: "bg-green-50 border-green-200" },
                  { icon: Lock, label: "Access Review", color: "bg-purple-50 border-purple-200" },
                  { icon: FileCheck, label: "Recommendations", color: "bg-teal-50 border-teal-200" }
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
                  title: "Baseline review",
                  description: "We assess the current state of your knowledge sources, agents, workflows, and governance controls."
                },
                {
                  num: "02",
                  title: "Maintenance rhythm",
                  description: "We establish an update cadence and define what is reviewed monthly or quarterly."
                },
                {
                  num: "03",
                  title: "Updates and improvements",
                  description: "We implement knowledge updates, evaluation cycles, and fixes based on real usage signals."
                },
                {
                  num: "04",
                  title: "Governance checks",
                  description: "We review access, scope boundaries, and guardrails to ensure safe scale."
                },
                {
                  num: "05",
                  title: "Reporting and next steps",
                  description: "We deliver clear reporting and recommendations to keep performance improving."
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

        {/* Cadence Tiers Section */}
        <section className="py-24 md:py-32 bg-[#EEF4FF]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Maintenance cadence options</h2>
              <p className="text-lg text-[#6B7280] max-w-3xl">
                Choose the operating rhythm that matches your AI adoption pace and governance needs.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  frequency: "Monthly Maintenance",
                  icon: Clock,
                  color: "border-[#14B8A6] bg-[#14B8A6]/5",
                  happens: [
                    "KnowledgeStack updates and versioning",
                    "Performance monitoring and drift checks",
                    "Quick governance spot-checks"
                  ],
                  outputs: "Update log, performance summary, recommendations"
                },
                {
                  frequency: "Quarterly Governance Refresh",
                  icon: Calendar,
                  color: "border-[#6366F1] bg-[#6366F1]/5",
                  happens: [
                    "Full governance and access review",
                    "Policy alignment and updates",
                    "Comprehensive evaluation testing"
                  ],
                  outputs: "Governance report, access matrix, policy updates"
                },
                {
                  frequency: "Hybrid Cadence",
                  icon: RefreshCw,
                  color: "border-gray-300 bg-gray-50",
                  happens: [
                    "Monthly knowledge and performance updates",
                    "Quarterly governance deep-dives",
                    "Flexible support for high-growth periods"
                  ],
                  outputs: "Complete coverage with balanced frequency"
                }
              ].map((tier, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -4 }}
                  className={`bg-white p-8 rounded-2xl border-2 ${tier.color} shadow-sm hover:shadow-md transition-all`}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-white border-2 border-gray-100 flex items-center justify-center">
                      <tier.icon className="w-5 h-5 text-[#6B7280]" />
                    </div>
                    <h3 className="text-xl font-bold">{tier.frequency}</h3>
                  </div>

                  <div className="mb-6">
                    <p className="text-xs font-bold text-[#6B7280] uppercase tracking-widest mb-3">What happens</p>
                    <div className="space-y-2">
                      {tier.happens.map((item, j) => (
                        <div key={j} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] mt-2 shrink-0"></div>
                          <p className="text-sm text-[#6B7280]">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <p className="text-xs font-bold text-[#6B7280] uppercase tracking-widest mb-2">Outputs</p>
                    <p className="text-sm text-[#6B7280]">{tier.outputs}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Monitor Section */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What we monitor</h2>
              <p className="text-lg text-[#6B7280] max-w-3xl">
                A comprehensive dashboard of signals that keep AI systems accurate, safe, and improving.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: TrendingDown,
                  title: "Accuracy drift",
                  description: "Output quality degradation over time",
                  status: "healthy"
                },
                {
                  icon: AlertCircle,
                  title: "Retrieval failures",
                  description: "Missing or irrelevant source matches",
                  status: "healthy"
                },
                {
                  icon: Database,
                  title: "Source freshness",
                  description: "Dataset currency and version tracking",
                  status: "healthy"
                },
                {
                  icon: Lock,
                  title: "Sensitive access events",
                  description: "Permission violations or edge cases",
                  status: "healthy"
                },
                {
                  icon: Users,
                  title: "Adoption usage",
                  description: "Team engagement and interaction patterns",
                  status: "healthy"
                },
                {
                  icon: Bell,
                  title: "Escalation and edge cases",
                  description: "Requests requiring human review",
                  status: "review"
                }
              ].map((signal, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -4 }}
                  className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#F8F9FB] flex items-center justify-center">
                      <signal.icon className="w-5 h-5 text-[#6B7280]" />
                    </div>
                    {signal.status === "healthy" ? (
                      <div className="w-2 h-2 rounded-full bg-[#14B8A6]"></div>
                    ) : (
                      <span className="text-xs px-2 py-1 bg-amber-50 text-amber-700 rounded font-medium">Review</span>
                    )}
                  </div>
                  <h3 className="font-bold mb-2">{signal.title}</h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{signal.description}</p>
                </motion.div>
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
                Maintenance gives you stability. Once systems are steady, you can scale deployment across more departments, launch additional agents, and expand use cases without losing control.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Expand AI Agents",
                  description: "Into new departments and workflows",
                  path: "/services/ai-agents"
                },
                {
                  title: "Add KnowledgeStack layers",
                  description: "For additional teams",
                  path: "/services/ai-knowledge-stack"
                },
                {
                  title: "Deeper AI Governance",
                  description: "As adoption grows",
                  path: "/services/ai-governance"
                },
                {
                  title: "AI Training refresh",
                  description: "As policies evolve",
                  path: "/services/ai-training"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-12">AI Maintenance FAQs</h2>
            
            <div className="max-w-4xl bg-white p-10 rounded-2xl border border-gray-100 shadow-sm">
              <FAQItem 
                question="Why do AI systems need maintenance?"
                answer="Because your organization changes. Knowledge updates, policies evolve, and workflows shift. Without maintenance, AI outputs drift, accuracy drops, and risk increases."
              />
              <FAQItem 
                question="What do you maintain specifically?"
                answer="We maintain the KnowledgeStack, retrieval performance, agent behavior standards, governance controls, and documentation. We also support ongoing improvements based on real usage."
              />
              <FAQItem 
                question="How often should maintenance happen?"
                answer="It depends on how fast your knowledge changes and how widely AI is used. Many teams choose a monthly rhythm with quarterly governance reviews."
              />
              <FAQItem 
                question="Is maintenance only for AI agents?"
                answer="No. Maintenance supports agents, ContentEngine, workflow systems, governance frameworks, and the KnowledgeStack."
              />
              <FAQItem 
                question="Can you work with our internal team?"
                answer="Yes. We can fully manage maintenance or support your team with a shared operating rhythm and clear responsibilities."
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
                    Keep AI accurate. Keep control.
                  </h2>
                  <p className="text-lg text-[#6B7280] leading-relaxed">
                    If AI is in production, maintenance is what keeps it useful, safe, and improving. We'll help you build an operating rhythm that prevents drift, reduces risk, and protects performance.
                  </p>
                </div>
                <div className="flex flex-col gap-4 shrink-0">
                  <button className="px-8 py-4 bg-[#14B8A6] text-white font-bold rounded-lg hover:bg-[#0D9488] transition-all whitespace-nowrap">
                    Book a Maintenance Call
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
