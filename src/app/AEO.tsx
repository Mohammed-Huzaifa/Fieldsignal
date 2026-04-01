import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  CheckCircle2, 
  Search,
  ChevronRight, 
  Plus, 
  Minus,
  FileText,
  Code,
  BarChart3,
  Compass,
  Target,
  Users,
  HelpCircle,
  Sparkles,
  Link2,
  Eye,
  TrendingUp,
  Layers,
  BookOpen,
  Layout,
  Settings,
  Filter,
  GitBranch,
  List,
  Hash,
  Type,
  AlignLeft,
  CheckSquare,
  MapPin,
  Activity,
  RefreshCw,
  Database,
  Lightbulb
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

export default function AEOPage() {
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [hoveredCallout, setHoveredCallout] = useState<number | null>(null);

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
              Book an AEO Call
            </button>
            <button 
              onClick={() => navigateTo("/insights")}
              className="w-full py-4 bg-white text-[#1F2328] border border-gray-200 font-bold rounded-lg hover:border-[#1F2328] transition-all text-sm"
            >
              Explore Insights
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
                <p className="text-xs font-bold text-[#14B8A6] tracking-widest uppercase mb-6">AEO</p>
                <h1 className="text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-6">
                  Be the answer, not just a link.
                </h1>
                <p className="text-xl text-[#6B7280] leading-relaxed mb-10 max-w-2xl">
                  AEO, Answer Engine Optimization, helps your organization show up in AI-powered search and answer experiences. We structure your content so it is easier for systems to understand, trust, and surface, while still reading naturally for humans.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <button className="px-8 py-4 bg-[#14B8A6] text-white font-bold rounded-lg hover:bg-[#0D9488] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#14B8A6]/20">
                    Book an AEO Call
                  </button>
                  <button 
                    onClick={() => navigateTo("/insights")}
                    className="px-8 py-4 bg-white text-[#1F2328] font-bold rounded-lg border border-gray-200 hover:border-[#1F2328] transition-all"
                  >
                    Explore Insights
                  </button>
                </div>
                <p className="text-sm text-[#6B7280] font-medium">
                  Built for the shift from search to answers.
                </p>
              </div>

              {/* Hero Visual - Answer Architecture */}
              <div className="md:col-span-5">
                <div className="bg-gradient-to-br from-[#F8F9FB] to-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="space-y-4">
                    {/* Questions */}
                    <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                      <div className="flex items-center gap-2 mb-3">
                        <HelpCircle className="w-4 h-4 text-[#6B7280]" />
                        <span className="text-xs font-bold text-[#6B7280] uppercase">Questions</span>
                      </div>
                      <div className="space-y-2">
                        {["What is...", "How do I...", "Why should..."].map((q, i) => (
                          <div key={i} className="text-xs px-2 py-1 bg-[#F8F9FB] text-[#6B7280] rounded italic">
                            {q}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <ChevronRight className="w-4 h-4 text-[#14B8A6] rotate-90" />
                    </div>

                    {/* Answer Pages */}
                    <div className="bg-[#14B8A6]/10 p-4 rounded-xl border-2 border-[#14B8A6] shadow-sm">
                      <div className="flex items-center gap-2 mb-3">
                        <FileText className="w-4 h-4 text-[#14B8A6]" />
                        <span className="text-xs font-bold text-[#14B8A6] uppercase">Answer Pages</span>
                      </div>
                      <div className="space-y-1">
                        <div className="h-2 bg-white rounded w-full"></div>
                        <div className="h-2 bg-white rounded w-3/4"></div>
                        <div className="h-2 bg-white rounded w-5/6"></div>
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <ChevronRight className="w-4 h-4 text-[#14B8A6] rotate-90" />
                    </div>

                    {/* Schema Signals */}
                    <div className="bg-[#14B8A6]/10 p-4 rounded-xl border-2 border-[#14B8A6] shadow-sm">
                      <div className="flex items-center gap-2 mb-3">
                        <Code className="w-4 h-4 text-[#14B8A6]" />
                        <span className="text-xs font-bold text-[#14B8A6] uppercase">Schema Signals</span>
                      </div>
                      <div className="font-mono text-xs text-[#6B7280] space-y-1">
                        <div>{"{ \"@type\": \"FAQPage\" }"}</div>
                        <div>{"{ \"@type\": \"Article\" }"}</div>
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <ChevronRight className="w-4 h-4 text-[#14B8A6] rotate-90" />
                    </div>

                    {/* Surfaced Answers */}
                    <div className="bg-white p-4 rounded-xl border-2 border-green-500 shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-green-600" />
                          <span className="text-xs font-bold text-green-700 uppercase">Surfaced Answer</span>
                        </div>
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      </div>
                      <p className="text-xs text-[#6B7280]">Your expertise, delivered as the answer</p>
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
                  { icon: Eye, text: "Improved visibility in AI-driven search and answer platforms" },
                  { icon: Layout, text: "Content structured for clear, trusted answers" },
                  { icon: HelpCircle, text: "Stronger FAQ hubs and knowledge pages that capture intent" },
                  { icon: Link2, text: "Better internal linking and topic coverage" },
                  { icon: Code, text: "Schema and structured data that improves machine readability" },
                  { icon: BarChart3, text: "A measurement loop to track what is working and iterate" }
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
                    "Brands that rely on inbound discovery and expertise-based trust",
                    "Organizations seeing changes in search traffic and behavior",
                    "Teams producing content but not seeing compounding results",
                    "Companies in complex categories where clarity matters",
                    "Marketing teams building a long-term content moat"
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
                    "Your content ranks, but it is not being surfaced in answer experiences",
                    "You publish blogs, but they do not build authority or intent coverage",
                    "Your site lacks structured FAQs and clear \"answer pages\"",
                    "Your content is strong, but machines struggle to interpret it",
                    "You want to future-proof discovery as AI changes search behavior",
                    "You need content to drive qualified leads, not vanity traffic"
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

        {/* AEO Model - SIGNATURE */}
        <section className="py-24 md:py-32 bg-[#EEF4FF]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The AEO model</h2>
              <p className="text-lg text-[#6B7280] max-w-3xl mx-auto">
                A systematic approach to structuring content for AI-driven discovery and answer experiences.
              </p>
            </div>

            {/* Model Diagram */}
            <div className="bg-white p-12 rounded-2xl border border-gray-100 shadow-sm mb-8">
              <div className="grid md:grid-cols-4 gap-6 mb-12">
                {[
                  {
                    icon: Compass,
                    title: "Intent Mapping",
                    description: "Map what your audience actually asks"
                  },
                  {
                    icon: GitBranch,
                    title: "Answer Architecture",
                    description: "Build structured hubs and pages"
                  },
                  {
                    icon: Code,
                    title: "Structured Signals",
                    description: "Add schema and machine-readable data"
                  },
                  {
                    icon: RefreshCw,
                    title: "Iteration",
                    description: "Measure, improve, and expand coverage"
                  }
                ].map((stage, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -4 }}
                    className="bg-gradient-to-br from-[#F8F9FB] to-white p-6 rounded-xl border-2 border-[#14B8A6] hover:border-[#0D9488] transition-all relative"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#14B8A6] flex items-center justify-center mx-auto mb-4">
                      <stage.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-center mb-2">{stage.title}</h3>
                    <p className="text-sm text-[#6B7280] text-center leading-relaxed">{stage.description}</p>
                    
                    {/* Arrow connector */}
                    {i < 3 && (
                      <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                        <ChevronRight className="w-6 h-6 text-[#14B8A6]" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Four Core Principles */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: List, title: "Topic coverage", description: "Complete intent mapping" },
                { icon: Code, title: "Machine readability", description: "Structured signals" },
                { icon: Lightbulb, title: "Clear answers", description: "Direct, scannable content" },
                { icon: TrendingUp, title: "Compounding visibility", description: "Results that build over time" }
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What's included in AEO</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "1) Answer Intent and Topic Mapping",
                  description: "We map what your audience actually asks and how answer engines interpret those questions. This creates a clear content plan built around real intent.",
                  includes: [
                    "Question and intent research by audience and stage",
                    "Topic clusters and coverage mapping",
                    "Competitor answer landscape review",
                    "Priority page and hub recommendations",
                    "Editorial plan aligned to lead generation goals"
                  ],
                  highlight: "Intent mapping"
                },
                {
                  title: "2) Content Structure and On-Page Optimization",
                  description: "We restructure and optimize content so answers are direct, scannable, and machine-readable, without losing brand voice.",
                  includes: [
                    "Answer-first page outlines",
                    "Clear headings and semantic structure",
                    "FAQ blocks with clean responses",
                    "Internal linking and page relationships",
                    "\"Key takeaways\" and summary sections",
                    "Updated CTAs aligned to intent"
                  ],
                  highlight: "Content structure"
                },
                {
                  title: "3) Structured Data and Technical Signals",
                  description: "We add the technical layer that helps machines interpret and trust your content.",
                  includes: [
                    "Schema recommendations and implementation guidance",
                    "Structured data for FAQs, articles, organizations, and services",
                    "Indexation and crawlability checks",
                    "Sitemaps and metadata best practices",
                    "Content templates for repeatable publishing"
                  ],
                  highlight: "Technical signals"
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
                    "AEO opportunity audit and priority plan",
                    "Topic cluster map and question bank",
                    "Recommended FAQ hub and answer page structure",
                    "Updated content templates for future posts and pages",
                    "On-page optimizations for priority pages",
                    "Structured data and schema plan",
                    "Measurement framework and reporting cadence"
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
                  { icon: GitBranch, label: "Topic Cluster Map", color: "bg-blue-50 border-blue-200" },
                  { icon: HelpCircle, label: "FAQ Hub Outline", color: "bg-green-50 border-green-200" },
                  { icon: Code, label: "Schema Checklist", color: "bg-purple-50 border-purple-200" },
                  { icon: BarChart3, label: "Reporting Snapshot", color: "bg-teal-50 border-teal-200" }
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
                  title: "Baseline and goals",
                  description: "We review your current visibility, content library, and lead gen goals."
                },
                {
                  num: "02",
                  title: "Intent and topic mapping",
                  description: "We map questions, clusters, and the pages needed to capture them."
                },
                {
                  num: "03",
                  title: "Build the answer architecture",
                  description: "We create or restructure hubs, pages, and templates for answer-first clarity."
                },
                {
                  num: "04",
                  title: "Implement structured signals",
                  description: "We apply schema and technical improvements that support machine readability."
                },
                {
                  num: "05",
                  title: "Measure and iterate",
                  description: "We track performance and continuously improve coverage and structure."
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

        {/* Answer Page Template Preview Section */}
        <section className="py-24 md:py-32 bg-[#EEF4FF]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What good looks like</h2>
              <p className="text-lg text-[#6B7280] max-w-3xl">
                A well-structured answer page template designed for machine readability and human clarity.
              </p>
            </div>

            <div className="bg-white p-12 rounded-2xl border border-gray-100 shadow-sm">
              <div className="max-w-3xl mx-auto">
                {/* Page Wireframe */}
                <div className="space-y-6">
                  {/* H1 */}
                  <div 
                    className="relative"
                    onMouseEnter={() => setHoveredCallout(0)}
                    onMouseLeave={() => setHoveredCallout(null)}
                  >
                    <div className="h-8 bg-gray-200 rounded w-2/3"></div>
                    {hoveredCallout === 0 && (
                      <div className="absolute -right-4 top-0 translate-x-full ml-4 bg-[#14B8A6] text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap">
                        Clear H1 answers the question directly
                      </div>
                    )}
                  </div>

                  {/* Short intro */}
                  <div 
                    className="relative space-y-2"
                    onMouseEnter={() => setHoveredCallout(1)}
                    onMouseLeave={() => setHoveredCallout(null)}
                  >
                    <div className="h-3 bg-gray-100 rounded w-full"></div>
                    <div className="h-3 bg-gray-100 rounded w-5/6"></div>
                    <div className="h-3 bg-gray-100 rounded w-4/5"></div>
                    {hoveredCallout === 1 && (
                      <div className="absolute -right-4 top-0 translate-x-full ml-4 bg-[#14B8A6] text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap">
                        Short, scannable introduction
                      </div>
                    )}
                  </div>

                  {/* Key takeaways box */}
                  <div 
                    className="relative bg-[#14B8A6]/5 border-l-4 border-[#14B8A6] p-6 rounded-r-lg"
                    onMouseEnter={() => setHoveredCallout(2)}
                    onMouseLeave={() => setHoveredCallout(null)}
                  >
                    <div className="h-3 bg-[#14B8A6]/20 rounded w-1/3 mb-3"></div>
                    <div className="space-y-2">
                      <div className="h-2 bg-[#14B8A6]/20 rounded w-3/4"></div>
                      <div className="h-2 bg-[#14B8A6]/20 rounded w-2/3"></div>
                      <div className="h-2 bg-[#14B8A6]/20 rounded w-4/5"></div>
                    </div>
                    {hoveredCallout === 2 && (
                      <div className="absolute -right-4 top-4 translate-x-full ml-4 bg-[#14B8A6] text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap">
                        Key takeaways box for quick scanning
                      </div>
                    )}
                  </div>

                  {/* FAQ block */}
                  <div 
                    className="relative space-y-3"
                    onMouseEnter={() => setHoveredCallout(3)}
                    onMouseLeave={() => setHoveredCallout(null)}
                  >
                    <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="border border-gray-200 rounded-lg p-4">
                        <div className="h-3 bg-gray-100 rounded w-2/3 mb-2"></div>
                        <div className="h-2 bg-gray-50 rounded w-full"></div>
                      </div>
                    ))}
                    {hoveredCallout === 3 && (
                      <div className="absolute -right-4 top-0 translate-x-full ml-4 bg-[#14B8A6] text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap">
                        FAQ block with clean Q&A structure
                      </div>
                    )}
                  </div>

                  {/* Related links */}
                  <div 
                    className="relative"
                    onMouseEnter={() => setHoveredCallout(4)}
                    onMouseLeave={() => setHoveredCallout(null)}
                  >
                    <div className="h-3 bg-gray-200 rounded w-1/4 mb-3"></div>
                    <div className="flex gap-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="h-8 bg-gray-100 rounded flex-1"></div>
                      ))}
                    </div>
                    {hoveredCallout === 4 && (
                      <div className="absolute -right-4 top-0 translate-x-full ml-4 bg-[#14B8A6] text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap">
                        Related links strengthen topic coverage
                      </div>
                    )}
                  </div>

                  {/* CTA */}
                  <div 
                    className="relative"
                    onMouseEnter={() => setHoveredCallout(5)}
                    onMouseLeave={() => setHoveredCallout(null)}
                  >
                    <div className="h-12 bg-[#14B8A6]/20 rounded w-1/3"></div>
                    {hoveredCallout === 5 && (
                      <div className="absolute -right-4 top-0 translate-x-full ml-4 bg-[#14B8A6] text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap">
                        CTA aligned to intent
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-100 text-center">
                <p className="text-sm text-[#6B7280]">
                  Hover over each section to see why it matters for AEO
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Structured Data + Schema Section */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Structured data and schema</h2>
              <p className="text-lg text-[#6B7280] max-w-3xl">
                The technical signals layer that helps machines understand and trust your content.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Article Schema",
                  icon: FileText,
                  whatItDoes: "Identifies content as authoritative editorial",
                  whereItApplies: "Blog posts, guides, and knowledge articles"
                },
                {
                  title: "FAQ Schema",
                  icon: HelpCircle,
                  whatItDoes: "Structures Q&A pairs for answer surfacing",
                  whereItApplies: "FAQ pages, help content, and answer hubs"
                },
                {
                  title: "Organization/Service Schema",
                  icon: Database,
                  whatItDoes: "Establishes entity and expertise context",
                  whereItApplies: "About pages, service pages, and main site structure"
                }
              ].map((schema, i) => (
                <div 
                  key={i}
                  className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#14B8A6]/10 flex items-center justify-center mb-6">
                    <Code className="w-6 h-6 text-[#14B8A6]" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{schema.title}</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-bold text-[#6B7280] uppercase tracking-widest mb-2">What it does</p>
                      <p className="text-sm text-[#6B7280]">{schema.whatItDoes}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#6B7280] uppercase tracking-widest mb-2">Where it applies</p>
                      <p className="text-sm text-[#6B7280]">{schema.whereItApplies}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Measurement Loop Section */}
        <section className="py-24 md:py-32 bg-[#F8F9FB]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Measurement and iteration</h2>
              <p className="text-lg text-[#6B7280] max-w-3xl">
                A continuous improvement loop to track performance and expand coverage over time.
              </p>
            </div>

            {/* Loop Diagram */}
            <div className="bg-white p-12 rounded-2xl border border-gray-100 shadow-sm mb-8">
              <div className="grid md:grid-cols-4 gap-6 mb-12 relative">
                {[
                  { icon: FileText, title: "Publish", description: "Launch optimized content" },
                  { icon: Eye, title: "Observe", description: "Track visibility and engagement" },
                  { icon: TrendingUp, title: "Improve", description: "Refine based on data" },
                  { icon: Layers, title: "Expand", description: "Add coverage and depth" }
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
                    {i < 3 && (
                      <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                        <ChevronRight className="w-4 h-4 text-[#14B8A6]" />
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
            </div>

            {/* Metrics Tiles */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: "Impressions/Visibility", icon: Eye, description: "Surfaces in answer experiences" },
                { label: "Engagement", icon: Activity, description: "Time on page, interactions" },
                { label: "Lead Actions", icon: Target, description: "Conversions from content" },
                { label: "Coverage Growth", icon: TrendingUp, description: "Topic and intent expansion" }
              ].map((metric, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-[#F8F9FB] flex items-center justify-center">
                      <metric.icon className="w-5 h-5 text-[#6B7280]" />
                    </div>
                    <p className="text-sm font-bold text-[#6B7280] uppercase tracking-widest">{metric.label}</p>
                  </div>
                  <p className="text-sm text-[#6B7280]">{metric.description}</p>
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
                AEO works best as a system, not a one-time project. Once the foundation is in place, you can scale content production with consistent templates and a compounding authority footprint.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "AI ContentEngine",
                  description: "Scale creation while maintaining structure and voice",
                  path: "/services/ai-content-engine"
                },
                {
                  title: "VisualAI",
                  description: "Produce supporting visuals for answer pages",
                  path: "/services/visual-ai"
                },
                {
                  title: "AI Maintenance",
                  description: "Keep content fresh and performance improving",
                  path: "/services/ai-maintenance"
                },
                {
                  title: "AI KnowledgeStack",
                  description: "Align internal knowledge with public answers",
                  path: "/services/ai-knowledge-stack"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-12">AEO FAQs</h2>
            
            <div className="max-w-4xl bg-white p-10 rounded-2xl border border-gray-100 shadow-sm">
              <FAQItem 
                question="What is Answer Engine Optimization?"
                answer="Answer Engine Optimization is the practice of structuring content so AI-powered search and answer platforms can understand, trust, and surface it as a direct answer."
              />
              <FAQItem 
                question="How is AEO different from SEO?"
                answer="SEO often focuses on rankings and clicks. AEO focuses on being surfaced as the answer, with clear structure, FAQs, schema, and topic coverage that answer engines can interpret."
              />
              <FAQItem 
                question="Do we need to change our entire website?"
                answer="Not usually. Many teams start with priority pages, a focused FAQ hub, and a set of structured content templates."
              />
              <FAQItem 
                question="How do you measure AEO success?"
                answer="We measure changes in impressions, search visibility, engagement, lead actions, content coverage, and the performance of priority pages over time."
              />
              <FAQItem 
                question="Can AEO support lead generation?"
                answer="Yes. Answer-first content builds trust and drives qualified leads when CTAs and page structure match intent."
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
                    Make your expertise discoverable.
                  </h2>
                  <p className="text-lg text-[#6B7280] leading-relaxed">
                    If your organization relies on trust, clarity, and inbound discovery, AEO helps you show up where decisions are increasingly made: inside answer experiences.
                  </p>
                </div>
                <div className="flex flex-col gap-4 shrink-0">
                  <button className="px-8 py-4 bg-[#14B8A6] text-white font-bold rounded-lg hover:bg-[#0D9488] transition-all whitespace-nowrap">
                    Book an AEO Call
                  </button>
                  <button 
                    onClick={() => navigateTo("/insights")}
                    className="px-8 py-4 bg-white text-[#1F2328] font-bold rounded-lg border border-gray-200 hover:border-[#1F2328] transition-all whitespace-nowrap"
                  >
                    Explore Insights
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
