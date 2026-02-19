import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  Search, 
  X, 
  ChevronRight, 
  CheckCircle2, 
  Mail, 
  Plus, 
  Minus,
  BookOpen,
  FileText,
  Layout,
  Zap,
  ShieldCheck,
  Database,
  Users,
  Search as SearchIcon,
  Eye,
  Workflow,
  Compass,
  ArrowUpRight
} from "lucide-react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

// Mock Data for Insights
const insights = [
  {
    id: 1,
    title: "Why Most AI Pilots Fail: The Governance Gap",
    teaser: "The governance basics every organization should set before scaling AI across teams to avoid fragmentation.",
    phase: "Assess",
    topic: "Governance",
    format: "Opinion",
    readTime: "6 min read",
    date: "Feb 08, 2026",
    featured: true,
  },
  {
    id: 2,
    title: "Structuring Your First KnowledgeStack",
    teaser: "How to build a KnowledgeStack that improves accuracy and reduces risk across deployments by structuring internal data.",
    phase: "Structure",
    topic: "KnowledgeStack",
    format: "Framework",
    readTime: "8 min read",
    date: "Feb 02, 2026",
    featured: true,
  },
  {
    id: 3,
    title: "Beyond the Prompt: Building Multi-Step AI Workflows",
    teaser: "A practical model for moving from basic prompting to an AI operating layer that teams actually use for complex tasks.",
    phase: "Deploy",
    topic: "Enablement",
    format: "Playbook",
    readTime: "12 min read",
    date: "Jan 25, 2026",
    featured: true,
  },
  {
    id: 4,
    title: "AEO Fundamentals: Being the Answer, Not Just a Link",
    teaser: "Answer Engine Optimization fundamentals for ensuring your brand is surfaced as the definitive answer in AI discovery systems.",
    phase: "Maintain",
    topic: "AEO",
    format: "Field Note",
    readTime: "5 min read",
    date: "Jan 18, 2026",
    featured: false,
  },
  {
    id: 5,
    title: "When to Deploy Agents (And When Not To)",
    teaser: "How to define scope and guardrails for autonomous agents while avoiding common pitfalls in task-ready assistants.",
    phase: "Deploy",
    topic: "Agents",
    format: "Checklist",
    readTime: "7 min read",
    date: "Jan 12, 2026",
    featured: false,
  },
  {
    id: 6,
    title: "Scaling Creative Production with VisualAI",
    teaser: "How to implement scalable creative production with control, maintaining brand consistency through generative systems.",
    phase: "Deploy",
    topic: "VisualAI",
    format: "Framework",
    readTime: "9 min read",
    date: "Jan 05, 2026",
    featured: false,
  },
  {
    id: 7,
    title: "The AI Readiness Scorecard: A Leadership Guide",
    teaser: "A structured guide for leaders to assess what is possible, what is risky, and what should be prioritized first.",
    phase: "Assess",
    topic: "AI Readiness",
    format: "Playbook",
    readTime: "10 min read",
    date: "Dec 20, 2025",
    featured: false,
  },
  {
    id: 8,
    title: "Role-Based Training: Making AI Adoption Stick",
    teaser: "Why generic training fails and how to build role-based enablement programs that drive real behavior change.",
    phase: "Deploy",
    topic: "Enablement",
    format: "Framework",
    readTime: "6 min read",
    date: "Dec 12, 2025",
    featured: false,
  },
  {
    id: 9,
    title: "Building the AI Maintenance Operating Model",
    teaser: "Ongoing updates, monitoring, and improvement patterns so your AI systems stay reliable and accurate over time.",
    phase: "Maintain",
    topic: "Maintenance",
    format: "Opinion",
    readTime: "8 min read",
    date: "Dec 04, 2025",
    featured: false,
  }
];

const topics = [
  { name: "AI Operating Layer", desc: "The framework for structured deployment", icon: Layout },
  { name: "AI Readiness", desc: "How to assess what is possible and what is risky", icon: Compass },
  { name: "KnowledgeStack", desc: "Building the knowledge foundation for accuracy", icon: Database },
  { name: "Agents", desc: "Scoped, governed task support using internal retrieval", icon: Zap },
  { name: "Governance", desc: "Policies, permissions, and accountability models", icon: ShieldCheck },
  { name: "Enablement & Training", desc: "Making adoption stick across teams", icon: Users },
  { name: "ContentEngine", desc: "Scaling content while staying on-brand", icon: Workflow },
  { name: "AEO", desc: "Structuring content for AI-driven discovery", icon: SearchIcon },
  { name: "VisualAI", desc: "Scalable creative production with control", icon: Eye }
];

const filterOptions = {
  Phase: ["Assess", "Capture", "Structure", "Deploy", "Maintain"],
  Topic: ["Enablement", "Training", "KnowledgeStack", "Agents", "Governance", "ContentEngine", "AEO", "VisualAI", "AI Readiness", "Maintenance"],
  Format: ["Framework", "Playbook", "Checklist", "Field Note", "Opinion"]
};

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

export default function InsightsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState<Record<string, string | null>>({
    Phase: null,
    Topic: null,
    Format: null
  });

  const filteredInsights = useMemo(() => {
    return insights.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           post.teaser.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesPhase = !activeFilters.Phase || post.phase === activeFilters.Phase;
      const matchesTopic = !activeFilters.Topic || post.topic === activeFilters.Topic;
      const matchesFormat = !activeFilters.Format || post.format === activeFilters.Format;

      return matchesSearch && matchesPhase && matchesTopic && matchesFormat;
    });
  }, [searchQuery, activeFilters]);

  const toggleFilter = (category: string, value: string) => {
    setActiveFilters(prev => ({
      ...prev,
      [category]: prev[category] === value ? null : value
    }));
  };

  const clearFilters = () => {
    setSearchQuery("");
    setActiveFilters({
      Phase: null,
      Topic: null,
      Format: null
    });
  };

  return (
    <div className="min-h-screen bg-[#F8F9FB] text-[#1F2328] font-sans selection:bg-[#14B8A6]/20">
      <Header />

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
                <span className="text-xs font-bold text-[#14B8A6] tracking-[0.2em] uppercase mb-4 block">Insights</span>
                <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-8">
                  Frameworks, field notes, <br />practical AI lessons.
                </h1>
                <p className="text-xl md:text-2xl text-[#6B7280] leading-relaxed mb-10 max-w-2xl">
                  Short, structured writing on deploying AI as an operating layer. Built for leaders and teams who want real outcomes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-10 py-5 bg-[#14B8A6] text-white font-bold rounded-lg hover:bg-[#0D9488] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#14B8A6]/20">
                    Subscribe for Updates
                  </button>
                  <button className="px-10 py-5 bg-white text-[#1F2328] font-bold rounded-lg border border-gray-200 hover:border-[#1F2328] transition-all">
                    Run AI Readiness
                  </button>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-5 hidden lg:block relative">
              <svg width="400" height="400" viewBox="0 0 400 400" fill="none" className="mx-auto opacity-10">
                <rect x="50" y="50" width="300" height="300" stroke="#1F2328" strokeWidth="0.5" />
                <path d="M50 150H350" stroke="#1F2328" strokeWidth="0.5" />
                <path d="M50 250H350" stroke="#1F2328" strokeWidth="0.5" />
                <path d="M150 50V350" stroke="#1F2328" strokeWidth="0.5" />
                <path d="M250 50V350" stroke="#1F2328" strokeWidth="0.5" />
                <motion.circle 
                  cx="150" cy="150" r="4" fill="#14B8A6"
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.circle 
                  cx="250" cy="250" r="4" fill="#6366F1"
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                />
                <motion.path 
                  d="M150 150 L250 150 L250 250 L150 250 Z" 
                  stroke="#14B8A6" strokeWidth="1" strokeDasharray="4 4"
                  animate={{ strokeDashoffset: [0, 16] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              </svg>
            </div>
          </div>
        </section>

        {/* Intro Strip */}
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-baseline gap-6">
            <h2 className="text-xl font-bold whitespace-nowrap">No hype. Just what works.</h2>
            <div className="w-12 h-px bg-gray-200 hidden md:block mt-3 shrink-0"></div>
            <p className="text-[#6B7280] leading-relaxed max-w-4xl">
              Most AI content online is either too theoretical or too tool-specific. Our insights focus on the operating model, the structure behind reliable outputs, and the decisions that help organizations scale responsibly.
            </p>
          </div>
        </section>

        {/* Featured Content */}
        <section className="py-24 bg-[#EEF4FF]/30">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="mb-16">
              <span className="text-xs font-bold text-[#14B8A6] tracking-[0.2em] uppercase mb-4 block">Featured</span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">Start here</h2>
              <p className="text-lg text-[#6B7280] max-w-2xl">
                These posts explain the core ideas behind the AI Operating Layer and the systems that make AI dependable across teams.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {insights.filter(i => i.featured).map((post) => (
                <motion.div 
                  key={post.id}
                  whileHover={{ y: -8 }}
                  className="bg-white p-10 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col h-full group"
                >
                  <div className="flex justify-between items-center mb-8">
                    <span className="text-[10px] font-bold text-[#6366F1] uppercase tracking-[0.2em] bg-[#6366F1]/5 px-3 py-1 rounded">
                      {post.topic}
                    </span>
                    <span className="text-xs text-[#6B7280]">{post.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 grow tracking-tight group-hover:text-[#14B8A6] transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed mb-8">
                    {post.teaser}
                  </p>
                  <button className="flex items-center gap-2 font-bold text-sm text-[#1F2328] group/btn">
                    Read article <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform text-[#14B8A6]" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Filter & Search Bar */}
        <section className="sticky top-[88px] z-30 bg-[#F8F9FB]/95 backdrop-blur-md py-6 border-b border-gray-200">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
              <div className="flex flex-wrap gap-2 items-center grow">
                {Object.entries(filterOptions).map(([category, options]) => (
                  <div key={category} className="relative group">
                    <select 
                      value={activeFilters[category] || ""} 
                      onChange={(e) => toggleFilter(category, e.target.value)}
                      className="appearance-none bg-white border border-gray-200 px-4 py-2 pr-10 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#14B8A6]/20 focus:border-[#14B8A6] cursor-pointer"
                    >
                      <option value="">{category}</option>
                      {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                    <ChevronRight className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 rotate-90 text-[#6B7280] pointer-events-none" />
                  </div>
                ))}

                {(Object.values(activeFilters).some(v => v !== null) || searchQuery) && (
                  <button 
                    onClick={clearFilters}
                    className="text-xs font-bold text-[#14B8A6] hover:text-[#0D9488] flex items-center gap-1 transition-colors ml-2"
                  >
                    <X className="w-3 h-3" /> Clear all
                  </button>
                )}
              </div>

              <div className="relative w-full lg:w-72">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7280]" />
                <input 
                  type="text" 
                  placeholder="Search insights..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-gray-200 pl-10 pr-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#14B8A6]/20 focus:border-[#14B8A6]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Insights Grid */}
        <section className="py-24 md:py-32">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="max-w-2xl mb-16">
              <h2 className="text-4xl font-bold tracking-tight mb-6">Browse the library</h2>
              <p className="text-lg text-[#6B7280]">
                Filter by topic or phase to find what you need quickly.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredInsights.length > 0 ? (
                  filteredInsights.map((post) => (
                    <motion.div 
                      key={post.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      whileHover={{ y: -4 }}
                      className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col h-full group"
                    >
                      <div className="flex justify-between items-start mb-6">
                        <div className="flex gap-2">
                          <span className="text-[9px] font-bold text-[#14B8A6] uppercase tracking-widest bg-[#14B8A6]/5 px-2 py-0.5 rounded border border-[#14B8A6]/10">
                            {post.topic}
                          </span>
                          <span className="text-[9px] font-bold text-[#6B7280] uppercase tracking-widest bg-gray-50 px-2 py-0.5 rounded border border-gray-100">
                            {post.format}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-3 tracking-tight group-hover:text-[#14B8A6] transition-colors leading-snug grow">
                        {post.title}
                      </h3>
                      <p className="text-[#6B7280] text-sm leading-relaxed mb-8">
                        {post.teaser}
                      </p>
                      <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                        <div className="flex items-center gap-3 text-xs text-[#6B7280]">
                          <span>{post.date}</span>
                          <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                          <span>{post.readTime}</span>
                        </div>
                        <button className="flex items-center gap-1 font-bold text-xs text-[#1F2328] group/btn">
                          Read more <ArrowUpRight className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </button>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="col-span-full py-24 text-center">
                    <Search className="w-12 h-12 text-gray-200 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">No insights match your filters.</h3>
                    <p className="text-[#6B7280]">Try adjusting your search or filter selection.</p>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Topics Section */}
        <section className="py-24 md:py-32 bg-white border-y border-gray-100">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <span className="text-xs font-bold text-[#6366F1] tracking-[0.2em] uppercase mb-4 block">Topics</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">What we write about most</h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {topics.map((topic, i) => (
                <div 
                  key={i} 
                  className="p-8 bg-[#F8F9FB] border border-gray-100 rounded-2xl hover:bg-white hover:shadow-lg transition-all flex items-start gap-6 group cursor-pointer"
                  onClick={() => toggleFilter("Topic", topic.name)}
                >
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm group-hover:bg-[#14B8A6] group-hover:text-white transition-colors">
                    <topic.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 group-hover:text-[#14B8A6] transition-colors">{topic.name}</h4>
                    <p className="text-xs text-[#6B7280] leading-relaxed">{topic.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-24 md:py-32 bg-[#EEF4FF]/30">
          <div className="max-w-[800px] mx-auto px-6">
            <div className="bg-white p-12 md:p-16 rounded-[40px] shadow-sm border border-gray-100 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#14B8A6]/5 rounded-bl-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#6366F1]/5 rounded-tr-full pointer-events-none" />
              
              <Mail className="w-10 h-10 text-[#14B8A6] mx-auto mb-8" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Get one useful idea each week.</h2>
              <p className="text-lg text-[#6B7280] mb-10 max-w-lg mx-auto">
                Short, structured insights you can apply quickly. Frameworks, templates, and lessons from real work.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto relative z-10" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="flex-1 px-6 py-4 rounded-xl bg-[#F8F9FB] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#14B8A6]/20 focus:border-[#14B8A6] transition-all"
                  required
                />
                <button type="submit" className="px-8 py-4 bg-[#1F2328] text-white font-bold rounded-xl hover:bg-black transition-colors whitespace-nowrap">
                  Subscribe
                </button>
              </form>
              <p className="mt-6 text-xs text-[#6B7280]">No spam. Unsubscribe anytime.</p>
            </div>
          </div>
        </section>

        {/* Final CTA Strip */}
        <section className="py-24 bg-white border-t border-gray-100">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="bg-[#1F2328] p-12 md:p-20 rounded-[40px] shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 text-white">
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
              
              <div className="relative z-10 max-w-2xl text-center lg:text-left">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Want a roadmap, not just reading?</h2>
                <p className="text-xl text-gray-400">
                  If you want a clear next step for your organization, start with AI Readiness. You’ll get a structured view of where you stand and what to do next.
                </p>
              </div>
              <div className="relative z-10 flex flex-col sm:flex-row gap-4 whitespace-nowrap">
                <button className="px-10 py-5 bg-[#14B8A6] text-white font-bold rounded-lg hover:bg-[#0D9488] transition-all shadow-lg shadow-[#14B8A6]/20">
                  Run AI Readiness
                </button>
                <button className="px-10 py-5 bg-transparent text-white font-bold rounded-lg border border-white/20 hover:bg-white hover:text-[#1F2328] transition-all">
                  Talk to FieldSignal
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 md:py-32 bg-[#F8F9FB] border-t border-gray-100">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-16">
              <div className="lg:col-span-4">
                <span className="text-xs font-bold text-[#14B8A6] tracking-[0.2em] uppercase mb-4 block">AEO / FAQ</span>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6 tracking-tight">Insights FAQs</h2>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-gray-200 rounded text-[10px] font-bold text-[#6B7280]">
                  <CheckCircle2 className="w-3 h-3 text-[#14B8A6]" /> KNOWLEDGE LIBRARY
                </div>
              </div>
              <div className="lg:col-span-8">
                <div className="divide-y divide-gray-100">
                  <FAQItem 
                    question="What topics do you cover?"
                    answer="We cover readiness, knowledge foundations, agents, governance, enablement, training, content systems, AEO, and VisualAI, all tied back to the AI Operating Layer."
                  />
                  <FAQItem 
                    question="How often do you publish?"
                    answer="We publish regularly. If you want the highlights, subscribe to get the best posts and frameworks as they come out."
                  />
                  <FAQItem 
                    question="Can you help implement what you write about?"
                    answer="Yes. Our services are designed to turn these frameworks into working systems inside your organization."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Page Close */}
        <section className="py-24 md:py-40 bg-white">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <h2 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-8">
              Make AI dependable.
            </h2>
            <p className="text-xl md:text-2xl text-[#6B7280] max-w-2xl mx-auto mb-12 leading-relaxed">
              FieldSignal helps teams deploy AI as an operating layer, with structure, governance, and measurable outcomes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="w-full sm:w-auto px-10 py-5 bg-[#14B8A6] text-white font-bold rounded-lg hover:bg-[#0D9488] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#14B8A6]/20">
                Run AI Readiness
              </button>
              <button className="w-full sm:w-auto px-10 py-5 bg-white text-[#1F2328] font-bold rounded-lg border border-gray-200 hover:border-[#1F2328] transition-all">
                Book a Call
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
