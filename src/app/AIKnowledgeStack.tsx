import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  CheckCircle2, 
  Database,
  FileText,
  ShieldCheck, 
  BarChart3, 
  ChevronRight, 
  Plus, 
  Minus,
  Target,
  Layers,
  Lock,
  Unlock,
  FolderOpen,
  Tags,
  GitBranch,
  Search,
  Zap,
  PenTool,
  Settings,
  Eye,
  Users,
  CheckSquare,
  AlertCircle,
  RefreshCw,
  FileCheck,
  Archive,
  ClipboardList,
  Shield,
  LockKeyhole,
  Globe
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

export default function AIKnowledgeStackPage() {
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
              Book a KnowledgeStack Call
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
                <p className="text-xs font-bold text-[#14B8A6] tracking-widest uppercase mb-6">AI KnowledgeStack</p>
                <h1 className="text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-6">
                  Build the knowledge foundation AI can trust.
                </h1>
                <p className="text-xl text-[#6B7280] leading-relaxed mb-10 max-w-2xl">
                  AI KnowledgeStack is our dataset creation and structuring service. We turn scattered documents, policies, content, and internal expertise into a governed knowledge foundation that powers accurate answers, consistent outputs, and dependable AI agents.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <button className="px-8 py-4 bg-[#14B8A6] text-white font-bold rounded-lg hover:bg-[#0D9488] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#14B8A6]/20">
                    Book a KnowledgeStack Call
                  </button>
                  <button 
                    onClick={() => navigateTo("/services/ai-readiness")}
                    className="px-8 py-4 bg-white text-[#1F2328] font-bold rounded-lg border border-gray-200 hover:border-[#1F2328] transition-all"
                  >
                    Run AI Readiness
                  </button>
                </div>
                <p className="text-sm text-[#6B7280] font-medium">
                  Reliable AI starts with reliable knowledge.
                </p>
              </div>

              {/* Hero Visual - Knowledge Architecture */}
              <div className="md:col-span-5">
                <div className="bg-gradient-to-br from-[#F8F9FB] to-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="space-y-3">
                    {/* Sources Layer */}
                    <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                      <div className="flex items-center gap-2 mb-3">
                        <FolderOpen className="w-4 h-4 text-[#6B7280]" />
                        <span className="text-xs font-bold text-[#6B7280] uppercase">Sources</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {["Docs", "Policies", "FAQs"].map((item, i) => (
                          <div key={i} className="text-center py-2 bg-[#F8F9FB] rounded text-xs text-[#6B7280]">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Processing Layer */}
                    <div className="flex justify-center">
                      <div className="flex gap-2">
                        <ChevronRight className="w-4 h-4 text-[#14B8A6]" />
                        <ChevronRight className="w-4 h-4 text-[#14B8A6]" />
                        <ChevronRight className="w-4 h-4 text-[#14B8A6]" />
                      </div>
                    </div>

                    {/* KnowledgeStack Layer - Highlighted */}
                    <div className="bg-[#14B8A6]/10 p-4 rounded-xl border-2 border-[#14B8A6] shadow-sm">
                      <div className="flex items-center gap-2 mb-3">
                        <Database className="w-4 h-4 text-[#14B8A6]" />
                        <span className="text-xs font-bold text-[#14B8A6] uppercase">KnowledgeStack</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 mb-2">
                        <div className="flex items-center gap-1 text-xs">
                          <Tags className="w-3 h-3 text-[#14B8A6]" />
                          <span className="text-[#6B7280]">Tagged</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs">
                          <Lock className="w-3 h-3 text-[#14B8A6]" />
                          <span className="text-[#6B7280]">Governed</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs">
                          <GitBranch className="w-3 h-3 text-[#14B8A6]" />
                          <span className="text-[#6B7280]">Versioned</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs">
                          <CheckCircle2 className="w-3 h-3 text-[#14B8A6]" />
                          <span className="text-[#6B7280]">Verified</span>
                        </div>
                      </div>
                    </div>

                    {/* Arrow Down */}
                    <div className="flex justify-center">
                      <div className="flex gap-2">
                        <ChevronRight className="w-4 h-4 text-[#14B8A6] rotate-90" />
                      </div>
                    </div>

                    {/* Outputs Layer */}
                    <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                      <div className="flex items-center gap-2 mb-3">
                        <Zap className="w-4 h-4 text-[#6B7280]" />
                        <span className="text-xs font-bold text-[#6B7280] uppercase">Outputs</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {["Agents", "Content", "Search"].map((item, i) => (
                          <div key={i} className="text-center py-2 bg-[#F8F9FB] rounded text-xs text-[#6B7280]">
                            {item}
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
                  { icon: Database, text: "A structured knowledge foundation AI can reference with confidence" },
                  { icon: FileCheck, text: "Cleaner, organized internal content with clear ownership and versioning" },
                  { icon: Target, text: "Better accuracy and consistency across AI outputs" },
                  { icon: Lock, text: "Secure access and permissions aligned to roles and sensitivity" },
                  { icon: Layers, text: "A foundation that supports RAG agents, ContentEngine, governance, and AEO" }
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
                    "Organizations deploying AI agents that need accurate retrieval",
                    "Teams whose knowledge lives across drives, email, and multiple tools",
                    "Marketing and comms teams needing consistent, brand-safe outputs",
                    "Ops, HR, finance, and support teams needing reliable internal answers",
                    "Leaders who want AI adoption without messy, uncontrolled data exposure"
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
                    "AI outputs feel inconsistent or hard to trust",
                    "Teams waste time hunting for the \"latest version\" of documents",
                    "Knowledge is spread across systems with no clear structure",
                    "Policies and procedures are not easy to access or keep current",
                    "You want RAG agents, but your content is not ready for retrieval",
                    "Governance questions keep blocking progress"
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

        {/* KnowledgeStack Model Section - SIGNATURE */}
        <section className="py-24 md:py-32 bg-[#EEF4FF]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The KnowledgeStack model</h2>
              <p className="text-lg text-[#6B7280] max-w-3xl mx-auto">
                A structured approach to organizing your knowledge so AI systems can retrieve accurate, governed information.
              </p>
            </div>

            {/* Flow Diagram */}
            <div className="bg-white p-12 rounded-2xl border border-gray-100 shadow-sm mb-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
                {/* Sources */}
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-4">
                    <FolderOpen className="w-8 h-8 text-[#6B7280]" />
                  </div>
                  <h3 className="font-bold mb-2">Sources</h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">
                    Docs, policies, FAQs, SOPs, SME notes
                  </p>
                </div>

                <div className="hidden md:flex justify-center">
                  <ArrowRight className="w-8 h-8 text-[#14B8A6]" />
                </div>

                {/* Processing */}
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#14B8A6]/10 flex items-center justify-center mx-auto mb-4">
                    <Settings className="w-8 h-8 text-[#14B8A6]" />
                  </div>
                  <h3 className="font-bold mb-2">Processing</h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">
                    Cleaning, tagging, permissions
                  </p>
                </div>

                <div className="hidden md:flex justify-center">
                  <ArrowRight className="w-8 h-8 text-[#14B8A6]" />
                </div>

                {/* KnowledgeStack */}
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#14B8A6] flex items-center justify-center mx-auto mb-4">
                    <Database className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold mb-2">KnowledgeStack</h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">
                    Structured dataset
                  </p>
                </div>

                <div className="md:col-start-2 md:col-span-2 flex justify-center mt-6">
                  <ArrowRight className="w-8 h-8 text-[#14B8A6] rotate-90" />
                </div>

                {/* Outputs */}
                <div className="md:col-start-2 md:col-span-2 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-[#6B7280]" />
                  </div>
                  <h3 className="font-bold mb-2">Outputs</h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">
                    Agents, ContentEngine, AEO
                  </p>
                </div>
              </div>
            </div>

            {/* Four Key Elements */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Tags, title: "Taxonomy", description: "Organized categories and naming standards" },
                { icon: FileText, title: "Metadata", description: "Searchable attributes and context" },
                { icon: Lock, title: "Permissions", description: "Role-based access control" },
                { icon: GitBranch, title: "Versioning", description: "Change tracking and history" }
              ].map((element, i) => (
                <div 
                  key={i}
                  className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#14B8A6]/10 flex items-center justify-center mx-auto mb-4">
                    <element.icon className="w-6 h-6 text-[#14B8A6]" />
                  </div>
                  <h3 className="font-bold mb-2">{element.title}</h3>
                  <p className="text-sm text-[#6B7280]">{element.description}</p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What's included in AI KnowledgeStack</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "1) Knowledge Audit and Source Mapping",
                  description: "We identify what knowledge exists, where it lives, who owns it, and what is safe to use.",
                  includes: [
                    "Inventory of knowledge sources and systems",
                    "Content quality review and duplication checks",
                    "Ownership mapping and update cadence",
                    "Sensitivity classification and access requirements",
                    "Priority areas based on use cases"
                  ],
                  highlight: "Discovery phase"
                },
                {
                  title: "2) Dataset Structuring and KnowledgeStack Build",
                  description: "We turn raw content into a structured KnowledgeStack designed for AI retrieval and consistent outputs.",
                  includes: [
                    "Taxonomy, tags, and naming conventions",
                    "Document standardization and normalization",
                    "Chunking strategy for retrieval accuracy",
                    "Metadata standards for search and traceability",
                    "Versioning and change control approach"
                  ],
                  highlight: "Build phase"
                },
                {
                  title: "3) Permissions, Guardrails, and Quality Controls",
                  description: "We design access and governance so AI systems remain safe, accountable, and maintainable.",
                  includes: [
                    "Role-based permissions and access tiers",
                    "Allowed sources and restricted sources",
                    "Quality checks and evaluation methods",
                    "Citation and traceability standards",
                    "Maintenance plan for updates and additions"
                  ],
                  highlight: "Governance phase"
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
                    "Knowledge Source Map and Audit Summary",
                    "KnowledgeStack Structure, Taxonomy, and Tagging Rules",
                    "Cleaned and Organized Dataset Library",
                    "Retrieval-Ready Formatting and Metadata Standards",
                    "Permissions and Access Control Recommendations",
                    "Quality and Evaluation Checklist",
                    "Knowledge Maintenance Plan and Ownership Model"
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
                  { icon: Archive, label: "Source Map", color: "bg-blue-50 border-blue-200" },
                  { icon: Tags, label: "Taxonomy Sheet", color: "bg-green-50 border-green-200" },
                  { icon: Lock, label: "Access Matrix", color: "bg-purple-50 border-purple-200" },
                  { icon: GitBranch, label: "Change Log", color: "bg-teal-50 border-teal-200" }
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
                  title: "Align on use cases",
                  description: "We confirm what the KnowledgeStack needs to power, such as agents, content, internal support, or governance."
                },
                {
                  num: "02",
                  title: "Audit and collect",
                  description: "We inventory sources, identify gaps, and gather priority knowledge assets."
                },
                {
                  num: "03",
                  title: "Clean and structure",
                  description: "We standardize, tag, and organize knowledge using a retrieval-first structure."
                },
                {
                  num: "04",
                  title: "Governance and permissions",
                  description: "We define access tiers, safe-use rules, and quality controls."
                },
                {
                  num: "05",
                  title: "Handoff and enablement",
                  description: "We deliver the KnowledgeStack, documentation, and maintenance plan so it stays current."
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

        {/* Governance and Permissions Section - Access Tiers */}
        <section className="py-24 md:py-32 bg-[#EEF4FF]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Access tiers and permissions</h2>
              <p className="text-lg text-[#6B7280] max-w-3xl">
                We design role-based permissions so knowledge is accessible where needed and protected where required.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  tier: "Public / Approved",
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
          </div>
        </section>

        {/* Where This Leads Section */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Where this leads</h2>
              <p className="text-lg text-[#6B7280] max-w-3xl">
                KnowledgeStack is the foundation for reliable deployment. Once your knowledge is structured, you can safely scale into agents, content systems, and long-term operating governance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "AI Agents (RAG + MCP)",
                  description: "Deploy task-ready systems powered by your knowledge",
                  path: "/services"
                },
                {
                  title: "AI ContentEngine",
                  description: "Brand-safe content production at scale",
                  path: "/services"
                },
                {
                  title: "AI Governance + Guardrails",
                  description: "Formalize policies and access controls",
                  path: "/services"
                },
                {
                  title: "AI Enablement",
                  description: "Embed AI into workflows using the KnowledgeStack",
                  path: "/services/ai-enablement"
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
        <section className="py-24 md:py-32 bg-[#F8F9FB]">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">AI KnowledgeStack FAQs</h2>
            
            <div className="max-w-4xl bg-white p-10 rounded-2xl border border-gray-100 shadow-sm">
              <FAQItem 
                question="What is an AI KnowledgeStack?"
                answer="An AI KnowledgeStack is a structured knowledge foundation designed for AI systems. It organizes your internal content with taxonomy, permissions, metadata, and governance so AI outputs are accurate and traceable."
              />
              <FAQItem 
                question="Why does AI need a KnowledgeStack?"
                answer="Without structured knowledge, AI outputs become inconsistent and unreliable. A KnowledgeStack improves retrieval, reduces hallucinations, and ensures AI is grounded in your real information."
              />
              <FAQItem 
                question="What types of content go into the KnowledgeStack?"
                answer="Common sources include policies, SOPs, training docs, product or service information, brand and messaging materials, FAQs, onboarding guides, and internal knowledge from subject matter experts."
              />
              <FAQItem 
                question="How do you handle sensitive information?"
                answer="We classify information by sensitivity and design role-based permissions. Restricted content is separated and governed so only approved users and systems can access it."
              />
              <FAQItem 
                question="How is the KnowledgeStack maintained over time?"
                answer="We provide a maintenance plan with ownership, update cadence, versioning, and quality checks. Many teams pair KnowledgeStack with our AI Maintenance service."
              />
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 md:py-32 bg-white border-t border-gray-100">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="bg-white p-12 md:p-16 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                <div className="max-w-2xl">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                    Make AI outputs reliable.
                  </h2>
                  <p className="text-lg text-[#6B7280] leading-relaxed">
                    If your AI systems are only as good as your knowledge, the KnowledgeStack is where you start. We'll build the foundation that makes agents accurate, content consistent, and governance easier.
                  </p>
                </div>
                <div className="flex flex-col gap-4 shrink-0">
                  <button className="px-8 py-4 bg-[#14B8A6] text-white font-bold rounded-lg hover:bg-[#0D9488] transition-all whitespace-nowrap">
                    Book a KnowledgeStack Call
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
