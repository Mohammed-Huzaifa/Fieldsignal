import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  CheckCircle2, 
  Image,
  ChevronRight, 
  Plus, 
  Minus,
  Layers,
  CheckSquare,
  Clock,
  Shield,
  Wand2,
  FileText,
  Zap,
  Target,
  Users,
  Video,
  Grid3x3,
  Palette,
  Settings,
  Eye,
  TrendingUp,
  Archive,
  Filter,
  Copy,
  Download,
  Sparkles,
  Play,
  Layout,
  Monitor,
  Smartphone,
  FileImage,
  FolderOpen
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

export default function VisualAIPage() {
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [hoveredExample, setHoveredExample] = useState<number | null>(null);

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
              Book a VisualAI Call
            </button>
            <button className="w-full py-4 bg-white text-[#1F2328] border border-gray-200 font-bold rounded-lg hover:border-[#1F2328] transition-all text-sm">
              See VisualAI Examples
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
                <p className="text-xs font-bold text-[#14B8A6] tracking-widest uppercase mb-6">VisualAI</p>
                <h1 className="text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-6">
                  Generate visuals at speed, with brand control.
                </h1>
                <p className="text-xl text-[#6B7280] leading-relaxed mb-10 max-w-2xl">
                  VisualAI is Novaframe Studio inside FieldSignal. We help teams produce high-quality AI-generated imagery and short-form video with clear creative direction, consistent brand standards, and a repeatable workflow that scales.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <button className="px-8 py-4 bg-[#14B8A6] text-white font-bold rounded-lg hover:bg-[#0D9488] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#14B8A6]/20">
                    Book a VisualAI Call
                  </button>
                  <button className="px-8 py-4 bg-white text-[#1F2328] font-bold rounded-lg border border-gray-200 hover:border-[#1F2328] transition-all">
                    See VisualAI Examples
                  </button>
                </div>
                <p className="text-sm text-[#6B7280] font-medium">
                  Creative output, with structure behind it.
                </p>
              </div>

              {/* Hero Visual - Style System */}
              <div className="md:col-span-5">
                <div className="bg-gradient-to-br from-[#F8F9FB] to-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="space-y-4">
                    {/* Style System */}
                    <div className="bg-[#14B8A6]/10 p-4 rounded-xl border-2 border-[#14B8A6] shadow-sm">
                      <div className="flex items-center gap-2 mb-3">
                        <Palette className="w-4 h-4 text-[#14B8A6]" />
                        <span className="text-xs font-bold text-[#14B8A6] uppercase">Style System</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg"></div>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <ChevronRight className="w-4 h-4 text-[#14B8A6] rotate-90" />
                    </div>

                    {/* Prompt Library */}
                    <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                      <div className="flex items-center gap-2 mb-3">
                        <FileText className="w-4 h-4 text-[#6B7280]" />
                        <span className="text-xs font-bold text-[#6B7280] uppercase">Prompt Library</span>
                      </div>
                      <div className="space-y-2">
                        {["Template A", "Template B", "Template C"].map((item, i) => (
                          <div key={i} className="text-xs px-2 py-1 bg-[#F8F9FB] text-[#6B7280] rounded">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <ChevronRight className="w-4 h-4 text-[#14B8A6] rotate-90" />
                    </div>

                    {/* Asset Packs */}
                    <div className="bg-white p-4 rounded-xl border-2 border-[#14B8A6] shadow-sm">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Archive className="w-4 h-4 text-[#14B8A6]" />
                          <span className="text-xs font-bold text-[#14B8A6] uppercase">Asset Packs</span>
                        </div>
                        <span className="text-xs px-2 py-1 bg-green-50 text-green-700 rounded font-medium">Ready</span>
                      </div>
                      <div className="grid grid-cols-4 gap-1">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                          <div key={i} className="aspect-square bg-gradient-to-br from-teal-50 to-teal-100 rounded"></div>
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
                  { icon: Zap, text: "Faster visual production without sacrificing quality" },
                  { icon: Palette, text: "Consistent style aligned to brand guidelines" },
                  { icon: Copy, text: "A reusable prompt system your team can run" },
                  { icon: Archive, text: "Visual libraries built for campaigns, product, and content" },
                  { icon: Shield, text: "Governance for what is allowed, what is not, and how outputs get approved" }
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
                    "Marketing teams producing high volumes of creative",
                    "Brands needing consistent visuals across campaigns and channels",
                    "Agencies and creative teams that want scalable production capacity",
                    "Teams exploring AI visuals but struggling with consistency and control",
                    "Organizations that need safe, approved visual workflows"
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
                    "Visual production is slow, expensive, or bottlenecked",
                    "AI-generated visuals look inconsistent or off-brand",
                    "You need more variations, faster testing, and fresher creative",
                    "You want a reusable visual style system, not one-off prompts",
                    "Your team needs a controlled workflow for review and approvals"
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

        {/* Visual System Model - SIGNATURE */}
        <section className="py-24 md:py-32 bg-[#EEF4FF]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The VisualAI system</h2>
              <p className="text-lg text-[#6B7280] max-w-3xl mx-auto">
                A structured approach to AI-generated visuals built on repeatable style rules, prompt templates, and approval workflows.
              </p>
            </div>

            {/* System Diagram */}
            <div className="bg-white p-12 rounded-2xl border border-gray-100 shadow-sm mb-8">
              <div className="grid md:grid-cols-5 gap-6 mb-12">
                {[
                  {
                    icon: Target,
                    title: "Creative Direction",
                    description: "Define visual goals and usage context"
                  },
                  {
                    icon: Palette,
                    title: "Style Rules",
                    description: "Establish brand-safe visual boundaries"
                  },
                  {
                    icon: FileText,
                    title: "Prompt Templates",
                    description: "Build reusable generation patterns"
                  },
                  {
                    icon: Grid3x3,
                    title: "Variations",
                    description: "Generate options for testing and selection"
                  },
                  {
                    icon: Archive,
                    title: "Approved Library",
                    description: "Curate and organize production-ready assets"
                  }
                ].map((stage, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -4 }}
                    className={`text-center relative ${i === 1 || i === 4 ? 'bg-[#14B8A6]/10 border-2 border-[#14B8A6]' : 'bg-gradient-to-br from-[#F8F9FB] to-white border border-gray-200'} p-6 rounded-xl`}
                  >
                    <div className={`w-12 h-12 rounded-lg ${i === 1 || i === 4 ? 'bg-[#14B8A6] text-white' : 'bg-white text-[#6B7280]'} flex items-center justify-center mx-auto mb-3 shadow-sm`}>
                      <stage.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-sm font-bold mb-2">{stage.title}</h3>
                    <p className="text-xs text-[#6B7280] leading-relaxed">{stage.description}</p>
                    
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

            {/* Four Core Principles */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: CheckCircle2, title: "Consistency", description: "Same style, every time" },
                { icon: Zap, title: "Speed", description: "Faster output without shortcuts" },
                { icon: Grid3x3, title: "Variations for testing", description: "Multiple options, fast iteration" },
                { icon: Shield, title: "Governance and approvals", description: "Built-in review controls" }
              ].map((principle, i) => (
                <div 
                  key={i}
                  className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#14B8A6]/10 flex items-center justify-center mx-auto mb-4">
                    <principle.icon className="w-6 h-6 text-[#14B8A6]" />
                  </div>
                  <h3 className="font-bold mb-2">{principle.title}</h3>
                  <p className="text-sm text-[#6B7280]">{principle.description}</p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What's included in VisualAI</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "1) Visual Direction and Style System",
                  description: "We define a clear visual style system so outputs remain consistent across different prompts, creators, and campaigns.",
                  includes: [
                    "Visual style guide for AI generation",
                    "Reference boards and creative direction",
                    "Brand-safe style boundaries",
                    "Composition and lighting rules",
                    "Prompt patterns for repeatable results"
                  ],
                  highlight: "Style system"
                },
                {
                  title: "2) Prompt Library and Production Workflow",
                  description: "We create a structured prompt library and production flow your team can use again and again.",
                  includes: [
                    "Prompt templates by content type",
                    "Naming conventions and versioning",
                    "Variations framework for fast creative testing",
                    "Review and approval workflow",
                    "Asset organization and delivery structure"
                  ],
                  highlight: "Prompt library"
                },
                {
                  title: "3) Asset Kits and Campaign Packs",
                  description: "We produce curated visual assets designed for real usage across platforms.",
                  includes: [
                    "Social creative packs (static and motion-ready)",
                    "Product and offer visuals",
                    "Brand imagery libraries",
                    "Ad creative variations for testing",
                    "Optional short-form video outputs based on your workflow"
                  ],
                  highlight: "Asset delivery"
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
                    "VisualAI Style System and Creative Direction",
                    "Reusable Prompt Library and Templates",
                    "Asset Naming, Organization, and Versioning System",
                    "Approved Output Rules and Review Checklist",
                    "Visual Asset Kit or Campaign Pack (as scoped)",
                    "Handoff guide so your team can replicate outputs"
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
                  { icon: Palette, label: "Style Rules Sheet", color: "bg-purple-50 border-purple-200" },
                  { icon: FileText, label: "Prompt Templates", color: "bg-blue-50 border-blue-200" },
                  { icon: FolderOpen, label: "Output Naming Guide", color: "bg-green-50 border-green-200" },
                  { icon: Archive, label: "Pack Structure", color: "bg-teal-50 border-teal-200" }
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
                  title: "Align on usage",
                  description: "We confirm what you are creating and where it will be used, such as campaigns, social, web, ads, or product."
                },
                {
                  num: "02",
                  title: "Build the style system",
                  description: "We define the visual direction, guardrails, and repeatable prompt patterns."
                },
                {
                  num: "03",
                  title: "Generate and refine",
                  description: "We produce a set of outputs, test variations, and tune prompts for consistency and quality."
                },
                {
                  num: "04",
                  title: "Package and deliver",
                  description: "We deliver your asset kit or campaign pack, organized and ready for deployment."
                },
                {
                  num: "05",
                  title: "Scale and maintain (optional)",
                  description: "We can maintain the system and generate new packs monthly as needs evolve."
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

        {/* Gallery / Examples Preview Section */}
        <section className="py-24 md:py-32 bg-[#EEF4FF]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Example outputs</h2>
              <p className="text-lg text-[#6B7280] max-w-3xl">
                Curated visual examples showing consistency across style, composition, and channel. All outputs are tailored per brand.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { useCase: "Social Media", styleTag: "Modern Minimal", channel: "Instagram" },
                { useCase: "Product Marketing", styleTag: "Clean Editorial", channel: "Web" },
                { useCase: "Ad Creative", styleTag: "Bold & Direct", channel: "Paid Ads" },
                { useCase: "Brand Imagery", styleTag: "Warm & Human", channel: "Website" },
                { useCase: "Campaign Assets", styleTag: "Tech Forward", channel: "Multi-channel" },
                { useCase: "Content Support", styleTag: "Visual Storytelling", channel: "Blog" }
              ].map((example, i) => (
                <motion.div
                  key={i}
                  onHoverStart={() => setHoveredExample(i)}
                  onHoverEnd={() => setHoveredExample(null)}
                  whileHover={{ y: -4 }}
                  className="relative bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden cursor-pointer group"
                >
                  {/* Placeholder Image Area */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 via-gray-50 to-white flex items-center justify-center relative">
                    <Image className="w-16 h-16 text-gray-200" />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#14B8A6]/5 to-[#6366F1]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  
                  {/* Caption Overlay */}
                  <AnimatePresence>
                    {hoveredExample === i && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute inset-0 bg-[#1F2328]/95 text-white p-6 flex flex-col justify-end"
                      >
                        <p className="text-xs font-bold text-[#14B8A6] uppercase tracking-widest mb-2">Use Case</p>
                        <h3 className="text-xl font-bold mb-3">{example.useCase}</h3>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xs text-gray-400 mb-1">Style</p>
                            <p className="text-sm font-semibold">{example.styleTag}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-gray-400 mb-1">Channel</p>
                            <p className="text-sm font-semibold">{example.channel}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            <p className="text-center text-sm text-[#6B7280] italic">
              All examples are tailored per brand. Visual styles adapt to your creative direction and usage context.
            </p>
          </div>
        </section>

        {/* Governance + Approvals Section */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Governance and approvals</h2>
              <p className="text-lg text-[#6B7280] max-w-3xl">
                Built-in controls ensure visual outputs stay on-brand, meet approval standards, and align with usage boundaries.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Approved Style Rules",
                  icon: Palette,
                  description: "Define what visual approaches are brand-safe",
                  controls: [
                    "Visual style boundaries and guidelines",
                    "Color palette and composition rules",
                    "Approved reference imagery",
                    "Brand expression standards"
                  ],
                  badge: "Approved",
                  badgeColor: "bg-green-50 text-green-700"
                },
                {
                  title: "Usage Boundaries",
                  icon: Shield,
                  description: "Establish what is not allowed and why",
                  controls: [
                    "Prohibited visual themes and approaches",
                    "Restricted content categories",
                    "Legal and compliance alignment",
                    "Sensitive topic guardrails"
                  ],
                  badge: "Protected",
                  badgeColor: "bg-blue-50 text-blue-700"
                },
                {
                  title: "Review and Approval Workflow",
                  icon: CheckSquare,
                  description: "Structured quality gates before asset release",
                  controls: [
                    "Multi-stage review process",
                    "Stakeholder approval checkpoints",
                    "Quality and brand alignment validation",
                    "Final sign-off documentation"
                  ],
                  badge: "Validated",
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
                VisualAI becomes most valuable when it connects into your broader operating layer. Many teams pair VisualAI with content systems, AEO, and ongoing maintenance so creative production compounds over time.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "AI ContentEngine",
                  description: "Align visuals with messaging and content production",
                  path: "/services/ai-content-engine"
                },
                {
                  title: "AEO",
                  description: "Support search and discovery content with visual assets",
                  path: "/services"
                },
                {
                  title: "AI Maintenance",
                  description: "Keep prompt libraries and style systems current",
                  path: "/services/ai-maintenance"
                },
                {
                  title: "AI Enablement",
                  description: "Train teams and standardize the production workflow",
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
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">VisualAI FAQs</h2>
            
            <div className="max-w-4xl bg-white p-10 rounded-2xl border border-gray-100 shadow-sm">
              <FAQItem 
                question="What is VisualAI?"
                answer="VisualAI is Novaframe Studio inside FieldSignal. It is a structured approach to AI-generated image and video production with brand standards, prompt libraries, and repeatable workflows."
              />
              <FAQItem 
                question="How do you keep visuals consistent and on-brand?"
                answer="We build a style system, establish prompt templates, use references, and implement a review workflow. Consistency is designed, not hoped for."
              />
              <FAQItem 
                question="Do you provide the prompts and templates?"
                answer="Yes. Prompt libraries and templates are part of the deliverables so your team can reproduce outputs."
              />
              <FAQItem 
                question="Can VisualAI support paid ads and creative testing?"
                answer="Yes. We can produce variation sets designed for testing different hooks, compositions, and visual directions."
              />
              <FAQItem 
                question="Do you offer ongoing production?"
                answer="Yes. Many teams use VisualAI as a monthly creative engine with ongoing packs, refinements, and maintenance."
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
                    Scale creative without losing control.
                  </h2>
                  <p className="text-lg text-[#6B7280] leading-relaxed">
                    If you want AI-generated visuals that look intentional, consistent, and usable across real campaigns, VisualAI gives you the system and the output to move faster.
                  </p>
                </div>
                <div className="flex flex-col gap-4 shrink-0">
                  <button className="px-8 py-4 bg-[#14B8A6] text-white font-bold rounded-lg hover:bg-[#0D9488] transition-all whitespace-nowrap">
                    Book a VisualAI Call
                  </button>
                  <button className="px-8 py-4 bg-white text-[#1F2328] font-bold rounded-lg border border-gray-200 hover:border-[#1F2328] transition-all whitespace-nowrap">
                    See VisualAI Examples
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
