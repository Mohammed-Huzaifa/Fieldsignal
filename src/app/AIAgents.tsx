import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  CheckCircle2, 
  Database,
  FileText,
  ShieldCheck, 
  ChevronRight, 
  Plus, 
  Minus,
  Zap,
  Lock,
  Search,
  Settings,
  Eye,
  Users,
  CheckSquare,
  AlertCircle,
  FileCheck,
  ListChecks,
  Shield,
  MessageSquare,
  Headphones,
  UserCheck,
  BookOpen,
  Briefcase,
  ClipboardList,
  FileCode,
  Layers,
  GitBranch,
  Activity,
  Target,
  Archive,
  Network,
  Link,
  Play,
  BarChart3
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

export default function AIAgentsPage() {
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
              Book an Agents Call
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
                <p className="text-xs font-bold text-[#14B8A6] tracking-widest uppercase mb-6">AI Agents (RAG + MCP)</p>
                <h1 className="text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-6">
                  Deploy AI that can do real work.
                </h1>
                <p className="text-xl text-[#6B7280] leading-relaxed mb-10 max-w-2xl">
                  AI Agents are custom assistants that answer questions and complete tasks using your internal knowledge, with clear scope, permissions, and governance. We build agents using retrieval-augmented generation and controlled protocols so outputs stay grounded, traceable, and safe.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <button className="px-8 py-4 bg-[#14B8A6] text-white font-bold rounded-lg hover:bg-[#0D9488] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#14B8A6]/20">
                    Book an Agents Call
                  </button>
                  <button 
                    onClick={() => navigateTo("/services/ai-readiness")}
                    className="px-8 py-4 bg-white text-[#1F2328] font-bold rounded-lg border border-gray-200 hover:border-[#1F2328] transition-all"
                  >
                    Run AI Readiness
                  </button>
                </div>
                <p className="text-sm text-[#6B7280] font-medium">
                  Agents that are useful, not risky.
                </p>
              </div>

              {/* Hero Visual - Agent Architecture Flow */}
              <div className="md:col-span-5">
                <div className="bg-gradient-to-br from-[#F8F9FB] to-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="space-y-4">
                    {/* User Request */}
                    <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <MessageSquare className="w-4 h-4 text-[#6B7280]" />
                        <span className="text-xs font-bold text-[#6B7280] uppercase">User Request</span>
                      </div>
                      <p className="text-xs text-[#6B7280]">Task or question</p>
                    </div>

                    <div className="flex justify-center">
                      <ChevronRight className="w-4 h-4 text-[#14B8A6] rotate-90" />
                    </div>

                    {/* Agent Layer */}
                    <div className="bg-[#14B8A6]/10 p-4 rounded-xl border-2 border-[#14B8A6] shadow-sm">
                      <div className="flex items-center justify-center gap-2 mb-3">
                        <Zap className="w-4 h-4 text-[#14B8A6]" />
                        <span className="text-xs font-bold text-[#14B8A6] uppercase">Agent Layer</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-white px-2 py-1 rounded text-xs text-center text-[#6B7280]">RAG</div>
                        <div className="bg-white px-2 py-1 rounded text-xs text-center text-[#6B7280]">MCP</div>
                      </div>
                    </div>

                    {/* Knowledge & Controls */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm text-center">
                        <Database className="w-5 h-5 text-[#14B8A6] mx-auto mb-2" />
                        <p className="text-xs font-semibold mb-1">KnowledgeStack</p>
                        <p className="text-[10px] text-[#6B7280]">Retrieval</p>
                      </div>
                      <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm text-center">
                        <Settings className="w-5 h-5 text-[#6B7280] mx-auto mb-2" />
                        <p className="text-xs font-semibold mb-1">Tools</p>
                        <p className="text-[10px] text-[#6B7280]">Controlled</p>
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <ChevronRight className="w-4 h-4 text-[#14B8A6] rotate-90" />
                    </div>

                    {/* Output */}
                    <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                        <span className="text-xs font-bold text-[#6B7280] uppercase">Output</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-xs text-[#6B7280]">
                        <FileText className="w-3 h-3" />
                        <span>+ Citations</span>
                        <Activity className="w-3 h-3 ml-2" />
                        <span>+ Logs</span>
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
                  { icon: Zap, text: "Task-ready agents grounded in your internal knowledge" },
                  { icon: Target, text: "Better accuracy through retrieval and source traceability" },
                  { icon: Shield, text: "Clear scope and boundaries so agents stay on task" },
                  { icon: Lock, text: "Role-based access controls aligned to your organization" },
                  { icon: Layers, text: "A foundation for scaling multiple agents across teams" }
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
                    "Organizations ready to move beyond chatbots into operational support",
                    "Teams drowning in repeated questions, documentation, and onboarding",
                    "Customer support and service teams needing faster, consistent answers",
                    "Ops, HR, finance, and sales teams needing internal task assistance",
                    "Leaders who want AI automation with governance and control"
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
                    "Teams ask the same questions repeatedly and waste time searching for answers",
                    "Knowledge exists, but it is spread across docs, drives, and systems",
                    "You want AI to support tasks, not just generate text",
                    "Leadership needs guardrails before anything is deployed",
                    "You want an internal assistant but cannot risk inaccurate responses",
                    "You have workflows that are manual, repetitive, and measurable"
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

        {/* Agent Architecture Diagram Section - SIGNATURE */}
        <section className="py-24 md:py-32 bg-[#EEF4FF]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How agents work</h2>
              <p className="text-lg text-[#6B7280] max-w-3xl mx-auto">
                AI Agents combine retrieval-augmented generation (RAG) and controlled tool protocols (MCP) to deliver grounded, traceable outputs.
              </p>
            </div>

            {/* Architecture Diagram */}
            <div className="bg-white p-12 rounded-2xl border border-gray-100 shadow-sm mb-8">
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {/* RAG Layer */}
                <div className="text-center">
                  <div className="w-20 h-20 rounded-2xl bg-[#14B8A6]/10 border-2 border-[#14B8A6] flex items-center justify-center mx-auto mb-6">
                    <Database className="w-10 h-10 text-[#14B8A6]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">RAG Layer</h3>
                  <p className="text-sm text-[#6B7280] mb-4 leading-relaxed">
                    Retrieval from KnowledgeStack with citations
                  </p>
                  <div className="space-y-2">
                    <div className="inline-block px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full">
                      Citations
                    </div>
                    <div className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full ml-2">
                      Grounded
                    </div>
                  </div>
                </div>

                {/* Agent Brain */}
                <div className="text-center">
                  <div className="w-20 h-20 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-6">
                    <Zap className="w-10 h-10 text-[#6B7280]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Agent Brain</h3>
                  <p className="text-sm text-[#6B7280] mb-4 leading-relaxed">
                    Scoped instructions and behavior rules
                  </p>
                  <div className="space-y-2">
                    <div className="inline-block px-3 py-1 bg-red-50 text-red-700 text-xs font-bold rounded-full">
                      Refusal rules
                    </div>
                    <div className="inline-block px-3 py-1 bg-purple-50 text-purple-700 text-xs font-bold rounded-full ml-2">
                      Logging
                    </div>
                  </div>
                </div>

                {/* MCP Layer */}
                <div className="text-center">
                  <div className="w-20 h-20 rounded-2xl bg-[#6366F1]/10 border-2 border-[#6366F1] flex items-center justify-center mx-auto mb-6">
                    <Settings className="w-10 h-10 text-[#6366F1]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">MCP Layer</h3>
                  <p className="text-sm text-[#6B7280] mb-4 leading-relaxed">
                    Controlled tool actions (allowed, logged, limited)
                  </p>
                  <div className="space-y-2">
                    <div className="inline-block px-3 py-1 bg-yellow-50 text-yellow-700 text-xs font-bold rounded-full">
                      Human-in-loop
                    </div>
                  </div>
                </div>
              </div>

              {/* Connection Flow */}
              <div className="flex items-center justify-center gap-4 text-[#14B8A6] mb-8">
                <ArrowRight className="w-6 h-6" />
                <ArrowRight className="w-6 h-6" />
                <ArrowRight className="w-6 h-6" />
              </div>

              {/* Result */}
              <div className="text-center max-w-md mx-auto bg-gradient-to-br from-[#F8F9FB] to-white p-6 rounded-xl border border-gray-100">
                <CheckCircle2 className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <p className="font-bold mb-2">Grounded, traceable output</p>
                <p className="text-sm text-[#6B7280]">Every answer includes sources and stays within defined scope</p>
              </div>
            </div>

            {/* Four Core Attributes */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Target, title: "Grounded answers", description: "Based on your knowledge, not guesses" },
                { icon: Shield, title: "Controlled actions", description: "Only permitted operations" },
                { icon: FileCheck, title: "Traceable outputs", description: "Citations and audit logs" },
                { icon: Lock, title: "Secure permissions", description: "Role-based access control" }
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What's included in AI Agents</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "1) Agent Use Case Design",
                  description: "We define what the agent should do, what it should not do, and how success is measured. This is where we turn \"we want an agent\" into a scoped, buildable system.",
                  includes: [
                    "Use-case selection and prioritization",
                    "Task and workflow mapping",
                    "Scope boundaries and refusal rules",
                    "Success metrics and evaluation criteria",
                    "Owner assignment and escalation paths"
                  ],
                  highlight: "Scoping phase"
                },
                {
                  title: "2) Knowledge and Retrieval Setup (RAG)",
                  description: "We connect the agent to the right knowledge sources so answers are grounded in your content, not generic model guesses.",
                  includes: [
                    "Knowledge source selection and preparation",
                    "Retrieval strategy and document chunking",
                    "Metadata and citation standards",
                    "Permissions and access tiers",
                    "Quality testing for accuracy and coverage"
                  ],
                  highlight: "RAG implementation"
                },
                {
                  title: "3) Tool Use and Controls (MCP)",
                  description: "When needed, we enable controlled tool access so an agent can complete tasks, not just provide information, while staying within defined boundaries.",
                  includes: [
                    "Generate and format documents",
                    "Create summaries and structured briefs",
                    "Draft internal comms and responses",
                    "Fill templates and checklists",
                    "Support intake and triage workflows"
                  ],
                  highlight: "MCP controls"
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

            {/* Controls callout */}
            <div className="mt-8 bg-[#F8F9FB] p-8 rounded-2xl border border-gray-100">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#14B8A6]" />
                MCP controls include
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Allowed actions and disallowed actions",
                  "Guardrails for sensitive data",
                  "Logging and traceability",
                  "Human-in-the-loop review where required"
                ].map((control, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#14B8A6] mt-0.5 shrink-0" />
                    <p className="text-sm text-[#6B7280]">{control}</p>
                  </div>
                ))}
              </div>
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
                    "Agent Use Case and Scope Document",
                    "Knowledge Source Map and Retrieval Plan",
                    "Agent Prompt and Behavior Standards",
                    "Permissions and Access Control Design",
                    "Working AI Agent (deployment-ready)",
                    "Evaluation Checklist and Test Results",
                    "Documentation for usage, ownership, and maintenance"
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
                  { icon: FileCode, label: "Scope Spec", color: "bg-blue-50 border-blue-200" },
                  { icon: Lock, label: "Access Matrix", color: "bg-green-50 border-green-200" },
                  { icon: BarChart3, label: "Evaluation Report", color: "bg-purple-50 border-purple-200" },
                  { icon: BookOpen, label: "Runbook", color: "bg-teal-50 border-teal-200" }
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
                  title: "Define the agent",
                  description: "We clarify the use case, scope, boundaries, and success metrics."
                },
                {
                  num: "02",
                  title: "Prepare knowledge",
                  description: "We select sources, structure retrieval, and set citation and permission rules."
                },
                {
                  num: "03",
                  title: "Build and configure",
                  description: "We build the agent, implement controls, and connect it to the KnowledgeStack."
                },
                {
                  num: "04",
                  title: "Test and evaluate",
                  description: "We run accuracy testing, edge-case checks, and safety validation."
                },
                {
                  num: "05",
                  title: "Deploy and onboard",
                  description: "We deploy the agent, train users, and define ownership and escalation."
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

        {/* Guardrails and Permissions Section */}
        <section className="py-24 md:py-32 bg-[#EEF4FF]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Guardrails and control model</h2>
              <p className="text-lg text-[#6B7280] max-w-3xl">
                Every agent is deployed with clear boundaries, permissions, and quality oversight to ensure safe, reliable operation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Scope Boundaries",
                  icon: Shield,
                  description: "What the agent will not do",
                  items: [
                    "Out-of-scope topics are refused",
                    "Escalation paths for uncertainty",
                    "Clear refusal messaging",
                    "Boundary monitoring and logging"
                  ],
                  badge: "Restricted",
                  badgeColor: "bg-red-50 text-red-700"
                },
                {
                  title: "Permissions & Data Access",
                  icon: Lock,
                  description: "Role-based access control",
                  items: [
                    "User authentication required",
                    "Knowledge filtered by role",
                    "Sensitive data excluded or masked",
                    "Access audit trails maintained"
                  ],
                  badge: "Approved",
                  badgeColor: "bg-green-50 text-green-700"
                },
                {
                  title: "Quality & Oversight",
                  icon: CheckSquare,
                  description: "Evaluation and continuous review",
                  items: [
                    "Accuracy testing before launch",
                    "Feedback loops for improvement",
                    "Human review for edge cases",
                    "Performance monitoring dashboards"
                  ],
                  badge: "Monitored",
                  badgeColor: "bg-blue-50 text-blue-700"
                }
              ].map((control, i) => (
                <div 
                  key={i}
                  className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-lg bg-[#14B8A6]/10 flex items-center justify-center">
                      <control.icon className="w-6 h-6 text-[#14B8A6]" />
                    </div>
                    <span className={`px-3 py-1 ${control.badgeColor} text-xs font-bold rounded-full`}>
                      {control.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{control.title}</h3>
                  <p className="text-sm text-[#6B7280] mb-6">{control.description}</p>
                  <div className="space-y-2">
                    {control.items.map((item, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#14B8A6] mt-0.5 shrink-0" />
                        <p className="text-sm text-[#6B7280]">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Example Agent Types Section */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Common agent types</h2>
              <p className="text-lg text-[#6B7280] max-w-3xl">
                These are modular agents that organizations deploy to reduce manual work and improve consistency across teams.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { 
                  name: "Internal Knowledge Assistant", 
                  job: "Answers company questions using internal docs and SOPs",
                  teams: ["All teams"],
                  icon: BookOpen
                },
                { 
                  name: "Support Triage Assistant", 
                  job: "Routes customer questions and suggests responses",
                  teams: ["Support"],
                  icon: Headphones
                },
                { 
                  name: "Onboarding Assistant", 
                  job: "Guides new hires through processes and resources",
                  teams: ["HR", "Ops"],
                  icon: UserCheck
                },
                { 
                  name: "Policy & Compliance Assistant", 
                  job: "Provides policy guidance and compliance checks",
                  teams: ["Legal", "Ops"],
                  icon: ShieldCheck
                },
                { 
                  name: "Content & Comms Assistant", 
                  job: "Drafts messaging and brand-aligned content",
                  teams: ["Marketing"],
                  icon: FileText
                },
                { 
                  name: "Research & Briefing Assistant", 
                  job: "Summarizes reports and creates executive briefs",
                  teams: ["Leadership"],
                  icon: Briefcase
                }
              ].map((agent, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -4 }}
                  className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#14B8A6]/10 flex items-center justify-center mb-4 group-hover:bg-[#14B8A6] transition-colors">
                    <agent.icon className="w-5 h-5 text-[#14B8A6] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold mb-2">{agent.name}</h3>
                  <p className="text-sm text-[#6B7280] mb-4 leading-relaxed">{agent.job}</p>
                  <div className="flex flex-wrap gap-2">
                    {agent.teams.map((team, j) => (
                      <span key={j} className="px-2 py-1 bg-[#F8F9FB] text-[#6B7280] text-xs font-medium rounded">
                        {team}
                      </span>
                    ))}
                  </div>
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
                Most organizations start with one or two high-impact agents, then expand once the pattern is proven. As you scale, governance and maintenance become the operating rhythm.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "AI KnowledgeStack",
                  description: "Improve retrieval quality and accuracy",
                  path: "/services/ai-knowledge-stack"
                },
                {
                  title: "AI Governance + Guardrails",
                  description: "Formalize policies and approvals",
                  path: "/services"
                },
                {
                  title: "AI Enablement and Training",
                  description: "Drive adoption and shared standards",
                  path: "/services/ai-enablement"
                },
                {
                  title: "AI Maintenance",
                  description: "Keep sources current and performance reliable",
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
            <h2 className="text-3xl md:text-4xl font-bold mb-12">AI Agents FAQs</h2>
            
            <div className="max-w-4xl bg-white p-10 rounded-2xl border border-gray-100 shadow-sm">
              <FAQItem 
                question="What is an AI agent?"
                answer="An AI agent is a scoped assistant designed to support tasks and decisions. Unlike a generic chatbot, an agent is built with defined boundaries, connected knowledge sources, and governance controls."
              />
              <FAQItem 
                question="How do you reduce hallucinations and incorrect answers?"
                answer="We use retrieval so the agent references your internal knowledge, plus testing and evaluation. We also define refusal rules and escalation paths for uncertainty or sensitive topics."
              />
              <FAQItem 
                question="What is RAG?"
                answer="Retrieval-augmented generation is a method that lets an AI system search and reference trusted sources before responding. It improves accuracy and makes answers more traceable."
              />
              <FAQItem 
                question="What is MCP in this context?"
                answer="MCP is a way to enable controlled tool use so an agent can take actions within permitted boundaries. It helps agents support workflows while keeping governance and access under control."
              />
              <FAQItem 
                question="Can agents be internal-only or customer-facing?"
                answer="Both. Many teams begin internally, then expand to customer-facing use once governance, accuracy, and escalation paths are proven."
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
                    Deploy agents you can trust.
                  </h2>
                  <p className="text-lg text-[#6B7280] leading-relaxed">
                    If you want AI to reduce manual effort and improve consistency, we'll build agents that are grounded in your knowledge, governed with clear guardrails, and designed to support real workflows.
                  </p>
                </div>
                <div className="flex flex-col gap-4 shrink-0">
                  <button className="px-8 py-4 bg-[#14B8A6] text-white font-bold rounded-lg hover:bg-[#0D9488] transition-all whitespace-nowrap">
                    Book an Agents Call
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