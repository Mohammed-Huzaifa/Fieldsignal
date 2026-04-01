import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  CheckCircle2, 
  PenTool,
  ChevronRight, 
  Plus, 
  Minus,
  Layers,
  CheckSquare,
  Clock,
  Shield,
  RefreshCw,
  FileText,
  Zap,
  Target,
  Users,
  Send,
  Globe,
  MessageSquare,
  Mail,
  Layout,
  HelpCircle,
  Lightbulb,
  BookOpen,
  Settings,
  Eye,
  TrendingUp,
  Archive,
  Filter,
  Copy,
  Edit3,
  Sparkles,
  Calendar
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

export default function AIContentEnginePage() {
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
              Book a ContentEngine Call
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
                <p className="text-xs font-bold text-[#14B8A6] tracking-widest uppercase mb-6">AI ContentEngine</p>
                <h1 className="text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-6">
                  Scale content without losing your voice.
                </h1>
                <p className="text-xl text-[#6B7280] leading-relaxed mb-10 max-w-2xl">
                  AI ContentEngine is a brand-trained content system built on your real messaging, offerings, and audience knowledge. It helps your team create faster while staying consistent, accurate, and on-brand, with structure and guardrails baked in.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <button className="px-8 py-4 bg-[#14B8A6] text-white font-bold rounded-lg hover:bg-[#0D9488] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#14B8A6]/20">
                    Book a ContentEngine Call
                  </button>
                  <button 
                    onClick={() => navigateTo("/services/ai-readiness")}
                    className="px-8 py-4 bg-white text-[#1F2328] font-bold rounded-lg border border-gray-200 hover:border-[#1F2328] transition-all"
                  >
                    Run AI Readiness
                  </button>
                </div>
                <p className="text-sm text-[#6B7280] font-medium">
                  Not generic prompts. A system your team can run.
                </p>
              </div>

              {/* Hero Visual - Content Pipeline */}
              <div className="md:col-span-5">
                <div className="bg-gradient-to-br from-[#F8F9FB] to-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="space-y-4">
                    {/* Inputs */}
                    <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                      <div className="flex items-center gap-2 mb-3">
                        <Settings className="w-4 h-4 text-[#6B7280]" />
                        <span className="text-xs font-bold text-[#6B7280] uppercase">Inputs</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {["Brand voice", "Messaging", "Audience"].map((item, i) => (
                          <span key={i} className="text-xs px-2 py-1 bg-[#F8F9FB] text-[#6B7280] rounded">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <ChevronRight className="w-4 h-4 text-[#14B8A6] rotate-90" />
                    </div>

                    {/* ContentEngine */}
                    <div className="bg-[#14B8A6]/10 p-4 rounded-xl border-2 border-[#14B8A6] shadow-sm">
                      <div className="flex items-center gap-2 mb-3">
                        <Sparkles className="w-4 h-4 text-[#14B8A6]" />
                        <span className="text-xs font-bold text-[#14B8A6] uppercase">ContentEngine</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {["Templates", "Prompts", "Guardrails", "Workflow"].map((item, i) => (
                          <div key={i} className="bg-white px-2 py-1 rounded text-xs text-center text-[#6B7280]">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <ChevronRight className="w-4 h-4 text-[#14B8A6] rotate-90" />
                    </div>

                    {/* Outputs */}
                    <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                      <div className="flex items-center gap-2 mb-3">
                        <FileText className="w-4 h-4 text-[#6B7280]" />
                        <span className="text-xs font-bold text-[#6B7280] uppercase">Outputs</span>
                      </div>
                      <div className="space-y-2">
                        {[
                          { icon: FileText, label: "Blogs" },
                          { icon: Mail, label: "Emails" },
                          { icon: MessageSquare, label: "Social" },
                          { icon: Layout, label: "Pages" }
                        ].map((item, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs">
                            <item.icon className="w-3 h-3 text-[#14B8A6]" />
                            <span className="text-[#6B7280]">{item.label}</span>
                            <div className="ml-auto w-2 h-2 rounded-full bg-green-500"></div>
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
                  { icon: PenTool, text: "Content that sounds like you, across teams and channels" },
                  { icon: Zap, text: "Faster creation with consistent quality and fewer rewrites" },
                  { icon: BookOpen, text: "A reusable brand and messaging foundation AI can reference" },
                  { icon: Shield, text: "Clear guardrails so outputs stay accurate and aligned" },
                  { icon: RefreshCw, text: "A repeatable workflow for blogs, social, email, and pages" },
                  { icon: TrendingUp, text: "A content system that compounds over time" }
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
                    "Marketing and communications teams producing weekly content",
                    "Organizations with multiple contributors and inconsistent brand voice",
                    "Teams scaling thought leadership, product marketing, or inbound",
                    "Agencies or internal teams that need faster output with control",
                    "Leaders who want content velocity without brand drift"
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
                    "Content takes too long and depends on a few people",
                    "Brand voice varies across writers, teams, or vendors",
                    "AI outputs feel generic, off-brand, or unreliable",
                    "You want to publish more without lowering standards",
                    "You need a structured content engine that supports lead gen",
                    "You want a system that your team can reuse, not reinvent"
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

        {/* ContentEngine Model - SIGNATURE */}
        <section className="py-24 md:py-32 bg-[#EEF4FF]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How ContentEngine works</h2>
              <p className="text-lg text-[#6B7280] max-w-3xl mx-auto">
                A structured system that turns brand knowledge into repeatable, high-quality content production.
              </p>
            </div>

            {/* Pipeline Diagram */}
            <div className="bg-white p-12 rounded-2xl border border-gray-100 shadow-sm mb-8">
              <div className="grid md:grid-cols-4 gap-6 mb-12">
                {[
                  {
                    icon: Target,
                    title: "Foundation",
                    description: "Brand voice, messaging, offers, and audience clarity"
                  },
                  {
                    icon: Copy,
                    title: "Templates",
                    description: "Reusable structures for blogs, email, social, pages, FAQs"
                  },
                  {
                    icon: RefreshCw,
                    title: "Production Loop",
                    description: "Draft → Review → Publish → Repurpose"
                  },
                  {
                    icon: Archive,
                    title: "Outputs",
                    description: "Content library and campaign packs ready to deploy"
                  }
                ].map((stage, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -4 }}
                    className="text-center relative"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-[#14B8A6]/10 border-2 border-[#14B8A6] flex items-center justify-center mx-auto mb-4">
                      <stage.icon className="w-8 h-8 text-[#14B8A6]" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{stage.title}</h3>
                    <p className="text-sm text-[#6B7280] leading-relaxed">{stage.description}</p>
                    
                    {/* Arrow connector */}
                    {i < 3 && (
                      <div className="hidden md:block absolute -right-3 top-8 z-10">
                        <ChevronRight className="w-6 h-6 text-[#14B8A6]" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Four Core Benefits */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: CheckCircle2, title: "Consistency", description: "Same voice, every time" },
                { icon: Zap, title: "Speed", description: "Faster without shortcuts" },
                { icon: Shield, title: "Quality control", description: "Built-in review standards" },
                { icon: Layers, title: "Reuse and repurpose", description: "Compounds over time" }
              ].map((benefit, i) => (
                <div 
                  key={i}
                  className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#14B8A6]/10 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-[#14B8A6]" />
                  </div>
                  <h3 className="font-bold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-[#6B7280]">{benefit.description}</p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What's included in AI ContentEngine</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "1) Brand and Messaging Foundation",
                  description: "We build the knowledge base the ContentEngine depends on. This is how the system stays accurate and aligned.",
                  includes: [
                    "Brand voice and tone guidance",
                    "Positioning and messaging map",
                    "Offer and audience clarity",
                    "Approved terminology and claims standards",
                    "Content dos and don'ts aligned to your brand"
                  ],
                  highlight: "Brand foundation"
                },
                {
                  title: "2) Content System Design and Templates",
                  description: "We turn your content needs into repeatable structures your team can run every week.",
                  includes: [
                    "Content types and channel map",
                    "Editorial themes and topic clusters",
                    "Reusable templates for blogs, social, email, and pages",
                    "CTA patterns and conversion alignment",
                    "Quality checklist and review workflow"
                  ],
                  highlight: "Template library"
                },
                {
                  title: "3) Engine Setup and Team Enablement",
                  description: "We configure the engine and train your team to use it consistently.",
                  includes: [
                    "Prompt library and prompt patterns",
                    "Output standards for consistency and accuracy",
                    "Training session for your team",
                    "Onboarding documentation",
                    "Optional workflow integration with your tools"
                  ],
                  highlight: "Team enablement"
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
                    "Brand-trained content foundation (voice, messaging, offers)",
                    "Content taxonomy and editorial map",
                    "Topic cluster plan and content ideas starter",
                    "Reusable templates for key content types",
                    "Prompt library and reusable prompt patterns",
                    "Quality checklist and review workflow",
                    "Team training and handoff documentation"
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
                  { icon: Copy, label: "Template Preview", color: "bg-blue-50 border-blue-200" },
                  { icon: Lightbulb, label: "Prompt Pattern", color: "bg-green-50 border-green-200" },
                  { icon: Calendar, label: "Editorial Calendar", color: "bg-purple-50 border-purple-200" },
                  { icon: CheckSquare, label: "QA Checklist", color: "bg-teal-50 border-teal-200" }
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
                  title: "Align on goals and channels",
                  description: "We confirm what you publish, who it is for, and what outcomes matter."
                },
                {
                  num: "02",
                  title: "Build the foundation",
                  description: "We structure brand voice, messaging, offers, and audience inputs into a reliable base."
                },
                {
                  num: "03",
                  title: "Create templates and prompts",
                  description: "We build repeatable templates and prompt patterns for the content you need."
                },
                {
                  num: "04",
                  title: "Configure and test outputs",
                  description: "We test for tone, accuracy, and consistency, then refine."
                },
                {
                  num: "05",
                  title: "Train and launch",
                  description: "We onboard your team, ship the system, and set standards for ongoing use."
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

        {/* Weekly Production Loop Section */}
        <section className="py-24 md:py-32 bg-[#EEF4FF]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Weekly production workflow</h2>
              <p className="text-lg text-[#6B7280] max-w-3xl">
                A repeatable operating rhythm your team can run every week to maintain consistent output.
              </p>
            </div>

            {/* Workflow Loop */}
            <div className="bg-white p-12 rounded-2xl border border-gray-100 shadow-sm mb-8">
              <div className="grid md:grid-cols-5 gap-6 mb-12 relative">
                {[
                  { icon: Lightbulb, title: "Plan", description: "Select topics and align to strategy" },
                  { icon: Edit3, title: "Draft", description: "Generate content using templates" },
                  { icon: Eye, title: "Review", description: "Check quality and brand alignment" },
                  { icon: Send, title: "Publish", description: "Deploy across channels" },
                  { icon: RefreshCw, title: "Repurpose", description: "Adapt for multiple formats" }
                ].map((step, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -4 }}
                    className="bg-gradient-to-br from-[#F8F9FB] to-white p-6 rounded-xl border border-gray-200 text-center relative"
                  >
                    <div className="w-12 h-12 rounded-lg bg-[#14B8A6]/10 flex items-center justify-center mx-auto mb-3">
                      <step.icon className="w-6 h-6 text-[#14B8A6]" />
                    </div>
                    <h3 className="font-bold mb-2 text-sm">{step.title}</h3>
                    <p className="text-xs text-[#6B7280] leading-relaxed">{step.description}</p>
                    
                    {/* Arrow connector */}
                    {i < 4 && (
                      <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                        <ChevronRight className="w-4 h-4 text-[#14B8A6]" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Content Velocity Metrics */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { label: "Output per week", value: "8-12 pieces", icon: FileText },
                { label: "Channels supported", value: "4-6 formats", icon: Globe },
                { label: "Approval steps", value: "2-3 checkpoints", icon: CheckSquare }
              ].map((metric, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-[#F8F9FB] flex items-center justify-center">
                      <metric.icon className="w-5 h-5 text-[#6B7280]" />
                    </div>
                    <p className="text-sm font-bold text-[#6B7280] uppercase tracking-widest">{metric.label}</p>
                  </div>
                  <p className="text-2xl font-bold text-[#14B8A6]">{metric.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality and Guardrails Section */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Quality and guardrails</h2>
              <p className="text-lg text-[#6B7280] max-w-3xl">
                Built-in controls ensure every piece of content meets your standards for voice, accuracy, and brand alignment.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Voice Consistency Rules",
                  icon: PenTool,
                  description: "Maintain brand voice across all outputs",
                  controls: [
                    "Tone and language guidelines",
                    "Approved terminology list",
                    "Writing style standards",
                    "Prohibited language and phrases"
                  ],
                  badge: "On-brand",
                  badgeColor: "bg-green-50 text-green-700"
                },
                {
                  title: "Accuracy and Claims Standards",
                  icon: Shield,
                  description: "Ensure factual accuracy and compliant messaging",
                  controls: [
                    "Fact-checking requirements",
                    "Approved claims only",
                    "Source citation standards",
                    "Legal and compliance alignment"
                  ],
                  badge: "Verified",
                  badgeColor: "bg-blue-50 text-blue-700"
                },
                {
                  title: "Review and Approval Workflow",
                  icon: CheckSquare,
                  description: "Structured quality gates before publication",
                  controls: [
                    "Multi-stage review process",
                    "Stakeholder sign-off points",
                    "Quality checklist validation",
                    "Final approval documentation"
                  ],
                  badge: "Approved",
                  badgeColor: "bg-teal-50 text-teal-700"
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
                    {control.controls.map((item, j) => (
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

        {/* Where This Leads Section */}
        <section className="py-24 md:py-32 bg-[#F8F9FB]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Where this leads</h2>
              <p className="text-lg text-[#6B7280] max-w-3xl">
                Once ContentEngine is running, teams typically expand into AEO and broader operating layer support to ensure content drives discovery and conversions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "AEO",
                  description: "Structure content for AI-driven discovery",
                  path: "/services"
                },
                {
                  title: "VisualAI",
                  description: "Produce consistent supporting imagery at scale",
                  path: "/services"
                },
                {
                  title: "AI Maintenance",
                  description: "Keep foundations current and outputs aligned",
                  path: "/services/ai-maintenance"
                },
                {
                  title: "AI Governance",
                  description: "For regulated claims or sensitive topics",
                  path: "/services/ai-governance"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-12">AI ContentEngine FAQs</h2>
            
            <div className="max-w-4xl bg-white p-10 rounded-2xl border border-gray-100 shadow-sm">
              <FAQItem 
                question="What is AI ContentEngine?"
                answer="AI ContentEngine is a brand-trained content system that helps teams produce consistent content faster. It is built on your real messaging, voice, and audience knowledge, not generic prompts."
              />
              <FAQItem 
                question="How is this different from using ChatGPT normally?"
                answer="Most teams use AI ad-hoc. ContentEngine is structured with templates, standards, guardrails, and a knowledge foundation, so outputs are consistent and repeatable across contributors."
              />
              <FAQItem 
                question="Does ContentEngine replace writers or strategists?"
                answer="No. It increases speed and consistency, but quality still comes from good inputs, clear strategy, and human review. It is a force multiplier for your team."
              />
              <FAQItem 
                question="Can ContentEngine support SEO and AEO?"
                answer="Yes. We can design templates and outputs to follow SEO best practices and answer-first structure. Many teams pair ContentEngine with our AEO service."
              />
              <FAQItem 
                question="How do you keep outputs accurate?"
                answer="We build the foundation carefully, define what claims are allowed, implement a review checklist, and encourage verification standards. For deeper accuracy needs, we connect it to a KnowledgeStack."
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
                    Turn content into a system.
                  </h2>
                  <p className="text-lg text-[#6B7280] leading-relaxed">
                    If you want more output without sacrificing voice or quality, ContentEngine gives you a repeatable way to create, review, and publish content that stays on-brand.
                  </p>
                </div>
                <div className="flex flex-col gap-4 shrink-0">
                  <button className="px-8 py-4 bg-[#14B8A6] text-white font-bold rounded-lg hover:bg-[#0D9488] transition-all whitespace-nowrap">
                    Book a ContentEngine Call
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
