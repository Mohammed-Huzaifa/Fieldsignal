import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  Search, 
  Compass, 
  Database, 
  Zap, 
  ShieldCheck, 
  Layers, 
  Workflow, 
  Users, 
  UserCog, 
  Settings, 
  PenTool, 
  Eye, 
  CheckCircle2,
  ChevronRight,
  Filter,
  X,
  FileText,
  ClipboardList,
  Activity
} from "lucide-react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const serviceData = [
  {
    id: "readiness",
    title: "AI Readiness",
    description: "Assessment + leadership workshop + roadmap to move from exploration to execution.",
    icon: Compass,
    phase: "Assess",
    topics: ["Governance", "Enablement"],
  },
  {
    id: "enablement",
    title: "AI Enablement",
    description: "Hands-on support to embed AI into department workflows and daily operations.",
    icon: Workflow,
    phase: "Deploy",
    topics: ["Enablement", "Agents"],
  },
  {
    id: "training",
    title: "AI Training",
    description: "Role-based training that builds shared standards, confidence, and responsible use.",
    icon: Users,
    phase: "Deploy",
    topics: ["Training", "Enablement"],
  },
  {
    id: "leadership",
    title: "AI Fractional Leadership",
    description: "Embedded AI leadership to guide strategy, governance, and delivery without hiring full-time.",
    icon: UserCog,
    phase: "Assess",
    topics: ["Governance", "Enablement"],
  },
  {
    id: "knowledgestack",
    title: "AI KnowledgeStack",
    description: "Dataset creation and structuring so AI outputs stay accurate, grounded, and useful.",
    icon: Database,
    phase: "Structure",
    topics: ["KnowledgeStack"],
  },
  {
    id: "agents",
    title: "AI Agents (RAG + MCP)",
    description: "Secure, governed agents that answer questions and perform tasks using your internal knowledge.",
    icon: Zap,
    phase: "Deploy",
    topics: ["Agents", "KnowledgeStack"],
  },
  {
    id: "governance",
    title: "AI Governance + Guardrails",
    description: "Policies, permissions, and operating rules that leadership can trust.",
    icon: ShieldCheck,
    phase: "Structure",
    topics: ["Governance"],
  },
  {
    id: "maintenance",
    title: "AI Maintenance",
    description: "Ongoing updates, monitoring, and improvements so systems stay reliable over time.",
    icon: Settings,
    phase: "Maintain",
    topics: ["Maintenance"],
  },
  {
    id: "contentengine",
    title: "AI ContentEngine",
    description: "A brand-trained content system that produces consistent, reusable outputs at scale.",
    icon: PenTool,
    phase: "Deploy",
    topics: ["ContentEngine"],
  },
  {
    id: "visualai",
    title: "VisualAI (Novaframe Studio)",
    description: "High-quality AI-generated visuals with brand control and creative oversight.",
    icon: Eye,
    phase: "Deploy",
    topics: ["VisualAI"],
  },
  {
    id: "aeo",
    title: "AEO",
    description: "Answer Engine Optimization to improve visibility across search and AI discovery systems.",
    icon: Search,
    phase: "Deploy",
    topics: ["AEO"],
  }
];

const phases = ["Assess", "Capture", "Structure", "Deploy", "Maintain"];
const topics = [
  "Enablement", "Training", "KnowledgeStack", "Agents", 
  "Governance", "Maintenance", "ContentEngine", "VisualAI", "AEO"
];

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPhase, setSelectedPhase] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const filteredServices = useMemo(() => {
    return serviceData.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           service.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesPhase = !selectedPhase || service.phase === selectedPhase;
      const matchesTopic = !selectedTopic || service.topics.includes(selectedTopic);
      return matchesSearch && matchesPhase && matchesTopic;
    });
  }, [searchQuery, selectedPhase, selectedTopic]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedPhase(null);
    setSelectedTopic(null);
  };

  const scrollToLibrary = () => {
    const el = document.getElementById("library");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleQuickGuide = (type: string) => {
    clearFilters();
    if (type === "clarity") setSelectedPhase("Assess");
    if (type === "foundation") setSelectedTopic("KnowledgeStack");
    if (type === "automation") setSelectedTopic("Agents");
    if (type === "confidence") setSelectedTopic("Governance");
    if (type === "content") setSelectedTopic("ContentEngine");
    if (type === "adoption") setSelectedTopic("Enablement");
    
    setTimeout(scrollToLibrary, 100);
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
                <span className="text-xs font-bold text-[#14B8A6] tracking-[0.2em] uppercase mb-4 block">Services</span>
                <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-8">
                  AI, deployed as an <br />operating layer.
                </h1>
                <p className="text-xl md:text-2xl text-[#6B7280] leading-relaxed mb-10 max-w-2xl">
                  FieldSignal services are designed to move you from pilots to real deployment. Start with readiness, then build the knowledge foundation, deploy governed agents and workflows, and maintain performance over time.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-10 py-5 bg-[#14B8A6] text-white font-bold rounded-lg hover:bg-[#0D9488] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#14B8A6]/20">
                    Run AI Readiness
                  </button>
                  <button className="px-10 py-5 bg-white text-[#1F2328] font-bold rounded-lg border border-gray-200 hover:border-[#1F2328] transition-all">
                    See the Operating Layer
                  </button>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-5 hidden lg:block">
              <svg width="400" height="400" viewBox="0 0 400 400" fill="none" className="mx-auto opacity-20">
                <rect x="50" y="50" width="300" height="300" stroke="#1F2328" strokeWidth="0.5" />
                <path d="M50 150H350" stroke="#1F2328" strokeWidth="0.5" />
                <path d="M50 250H350" stroke="#1F2328" strokeWidth="0.5" />
                <path d="M150 50V350" stroke="#1F2328" strokeWidth="0.5" />
                <path d="M250 50V350" stroke="#1F2328" strokeWidth="0.5" />
                
                {/* Connecting nodes */}
                {[
                  { x: 50, y: 50 }, { x: 350, y: 350 }, { x: 50, y: 350 }, { x: 350, y: 50 },
                  { x: 150, y: 150 }, { x: 250, y: 250 }, { x: 200, y: 200 }
                ].map((p, i) => (
                  <circle key={i} cx={p.x} cy={p.y} r="3" fill="#14B8A6" />
                ))}
                
                <motion.circle 
                  cx="200" cy="200" r="100" 
                  stroke="#14B8A6" strokeWidth="1" strokeDasharray="4 4"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
              </svg>
            </div>
          </div>
        </section>

        {/* Start Here Chooser Strip */}
        <section className="py-20 bg-white border-b border-gray-100">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 tracking-tight">Pick a starting point. Build the full layer over time.</h2>
              <p className="text-[#6B7280] max-w-2xl mx-auto">
                Some teams need clarity first. Others already have tools in motion and need structure, governance, or deployment support.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
              {[
                { id: "clarity", title: "Clarity first", icon: Compass, text: "Start with AI Readiness" },
                { id: "foundation", title: "Outputs", icon: Database, text: "AI KnowledgeStack" },
                { id: "automation", title: "Automation", icon: Zap, text: "AI Agents (RAG + MCP)" },
                { id: "confidence", title: "Control", icon: ShieldCheck, text: "AI Governance" },
                { id: "content", title: "Content", icon: PenTool, text: "AI ContentEngine" },
                { id: "adoption", title: "Adoption", icon: Users, text: "AI Enablement" }
              ].map((tile) => (
                <button 
                  key={tile.id}
                  onClick={() => handleQuickGuide(tile.id)}
                  className="p-6 bg-[#F8F9FB] rounded-xl border border-gray-100 hover:border-[#14B8A6] hover:bg-white hover:shadow-md transition-all text-left group"
                >
                  <tile.icon className="w-6 h-6 text-[#6B7280] group-hover:text-[#14B8A6] mb-4 transition-colors" />
                  <p className="text-xs font-bold text-[#6B7280] uppercase tracking-widest mb-1">{tile.title}</p>
                  <p className="text-sm font-bold leading-snug">{tile.text}</p>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Resources Section */}
        <section className="py-24 bg-[#EEF4FF]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-10 md:p-12 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-[#F8F9FB] rounded-lg flex items-center justify-center mb-8">
                    <FileText className="w-6 h-6 text-[#14B8A6]" />
                  </div>
                  <h3 className="text-3xl font-bold mb-6 tracking-tight">Download the Playbook</h3>
                  <p className="text-[#6B7280] text-lg leading-relaxed mb-8">
                    A practical guide to deploying AI across teams with structure, governance, and a clear rollout path. Built for leaders who want results, not pilots.
                  </p>
                  <button className="px-8 py-4 bg-[#1F2328] text-white font-bold rounded-lg hover:bg-black transition-colors flex items-center justify-center gap-2">
                    Download Playbook <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="mt-4 text-xs font-medium text-[#6B7280] uppercase tracking-wider">Frameworks, examples, and next steps.</p>
                </div>
                <FileText className="absolute -right-8 -bottom-8 w-48 h-48 text-black opacity-[0.02] group-hover:scale-110 transition-transform duration-500" />
              </div>

              <div className="bg-white p-10 md:p-12 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-[#F8F9FB] rounded-lg flex items-center justify-center mb-8">
                    <ClipboardList className="w-6 h-6 text-[#6366F1]" />
                  </div>
                  <h3 className="text-3xl font-bold mb-6 tracking-tight">Take AI Readiness Assessment</h3>
                  <p className="text-[#6B7280] text-lg leading-relaxed mb-8">
                    A structured assessment that highlights your strongest opportunities, key gaps, and what to do next across people, process, data, and tools.
                  </p>
                  <button className="px-8 py-4 bg-[#6366F1] text-white font-bold rounded-lg hover:bg-[#4F46E5] transition-colors flex items-center justify-center gap-2">
                    Take Assessment <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="mt-4 text-xs font-medium text-[#6B7280] uppercase tracking-wider">Takes 5 to 8 minutes. Instant results.</p>
                </div>
                <ClipboardList className="absolute -right-8 -bottom-8 w-48 h-48 text-black opacity-[0.02] group-hover:scale-110 transition-transform duration-500" />
              </div>
            </div>
          </div>
        </section>

        {/* Services Library Filter Section */}
        <section id="library" className="py-24 md:py-32 scroll-mt-24">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="max-w-3xl mb-16">
              <span className="text-xs font-bold text-[#14B8A6] tracking-[0.2em] uppercase mb-4 block">Service Library</span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">What we offer</h2>
              <p className="text-lg text-[#6B7280]">
                Each service below links to a dedicated page with scope, deliverables, and next steps. Our services work independently, but they compound when combined.
              </p>
            </div>

            {/* Filter Bar */}
            <div className="sticky top-[88px] z-30 bg-[#F8F9FB]/80 backdrop-blur-md py-6 border-y border-gray-100 mb-12">
              <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="text-xs font-bold text-[#1F2328] uppercase tracking-widest mr-4">Filter by:</span>
                  
                  {/* Phase Select */}
                  <div className="relative group">
                    <select 
                      value={selectedPhase || ""} 
                      onChange={(e) => setSelectedPhase(e.target.value || null)}
                      className="appearance-none bg-white border border-gray-200 px-4 py-2 pr-10 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#14B8A6]/20 focus:border-[#14B8A6] cursor-pointer"
                    >
                      <option value="">All Phases</option>
                      {phases.map(p => <option key={p} value={p}>{p}</option>)}
                    </select>
                    <ChevronRight className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 rotate-90 text-[#6B7280] pointer-events-none" />
                  </div>

                  {/* Topic Select */}
                  <div className="relative group">
                    <select 
                      value={selectedTopic || ""} 
                      onChange={(e) => setSelectedTopic(e.target.value || null)}
                      className="appearance-none bg-white border border-gray-200 px-4 py-2 pr-10 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#14B8A6]/20 focus:border-[#14B8A6] cursor-pointer"
                    >
                      <option value="">All Topics</option>
                      {topics.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                    <ChevronRight className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 rotate-90 text-[#6B7280] pointer-events-none" />
                  </div>

                  {(selectedPhase || selectedTopic || searchQuery) && (
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
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white border border-gray-200 pl-10 pr-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#14B8A6]/20 focus:border-[#14B8A6]"
                  />
                </div>
              </div>
            </div>

            {/* Service Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredServices.length > 0 ? (
                  filteredServices.map((service) => (
                    <motion.div 
                      key={service.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      whileHover={{ y: -4 }}
                      className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col h-full group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-[#F8F9FB] flex items-center justify-center mb-6 group-hover:bg-[#14B8A6]/10 group-hover:text-[#14B8A6] transition-colors">
                        <service.icon className="w-6 h-6" />
                      </div>
                      <div className="mb-4">
                        <span className="text-[10px] font-bold text-[#14B8A6] uppercase tracking-widest bg-[#14B8A6]/5 px-2 py-1 rounded">
                          {service.phase}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 tracking-tight">{service.title}</h3>
                      <p className="text-[#6B7280] text-sm leading-relaxed mb-8 grow">
                        {service.description}
                      </p>
                      <button 
                        onClick={() => {
                          if (service.id === "readiness") {
                            window.history.pushState({}, "", "/services/ai-readiness");
                            window.dispatchEvent(new PopStateEvent("popstate"));
                          }
                        }}
                        className="flex items-center gap-2 font-bold text-sm text-[#1F2328] hover:text-[#14B8A6] transition-colors group/btn"
                      >
                        Learn more <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </motion.div>
                  ))
                ) : (
                  <div className="col-span-full py-24 text-center">
                    <Search className="w-12 h-12 text-gray-200 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">No services match your filters.</h3>
                    <p className="text-[#6B7280]">Try adjusting your search or phase selection.</p>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* How We Deliver Section */}
        <section className="py-24 bg-[#F8F9FB] border-y border-gray-100">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-6">
                <span className="text-xs font-bold text-[#6366F1] tracking-[0.2em] uppercase mb-4 block">Delivery</span>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8 tracking-tight">Structured delivery. Practical outcomes.</h2>
                <p className="text-lg text-[#6B7280] leading-relaxed mb-12">
                  We work in clear phases with defined scope, accountable ownership, and measurable outcomes. Every engagement is tied back to the AI Operating Layer so your systems stay consistent over time.
                </p>
                <div className="grid sm:grid-cols-2 gap-6 mb-12">
                  {[
                    "Clear scope and ownership",
                    "Deliverables teams can use",
                    "Governance built in",
                    "Adoption support by role",
                    "Maintenance plans included"
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 items-center">
                      <CheckCircle2 className="w-5 h-5 text-[#14B8A6]" />
                      <span className="font-semibold text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <button className="flex items-center gap-2 font-bold text-[#1F2328] border-b-2 border-[#14B8A6] pb-1 hover:text-[#14B8A6] transition-colors">
                  See our Approach <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="lg:col-span-6 grid grid-cols-1 gap-4">
                {[
                  { title: "Structured Scope", desc: "No undefined discovery. We start with clear deliverables and timelines.", icon: Layers },
                  { title: "Governed Deployment", desc: "Security and compliance are not afterthoughts. They are baked into the build.", icon: ShieldCheck },
                  { title: "Continuous Improvement", desc: "AI is iterative. Our model ensures your systems improve as data evolves.", icon: Activity }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex gap-6 items-start">
                    <div className="w-10 h-10 rounded-lg bg-[#F8F9FB] flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-[#6B7280]" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{item.title}</h4>
                      <p className="text-sm text-[#6B7280]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Outcomes Strip */}
        <section className="py-24 bg-white border-b border-gray-100">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold text-[#14B8A6] tracking-[0.2em] uppercase mb-4 block">Outcomes</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What changes when AI becomes an operating layer</h2>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Faster execution across teams",
                "Consistent outputs and decisions",
                "Less risk from uncontrolled use",
                "Cleaner knowledge foundations",
                "Better customer and internal support",
                "Compounding gains through iteration"
              ].map((outcome, i) => (
                <div key={i} className="p-8 bg-[#F8F9FB] border border-gray-100 rounded-xl text-center">
                  <div className="w-10 h-10 rounded-full bg-white mx-auto mb-4 flex items-center justify-center shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-[#14B8A6]" />
                  </div>
                  <p className="font-bold text-[#1F2328]">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Strip */}
        <section className="py-24 md:py-40 bg-[#F8F9FB]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="bg-white border border-gray-100 p-12 md:p-20 rounded-3xl shadow-sm flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="max-w-2xl text-center lg:text-left">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Start with clarity. Build from there.</h2>
                <p className="text-xl text-[#6B7280]">
                  If you want a direct view of where you stand and what to do next, start with AI Readiness. If you already know what you need, let's discuss your specific goals.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 whitespace-nowrap">
                <button className="px-10 py-5 bg-[#14B8A6] text-white font-bold rounded-lg hover:bg-[#0D9488] transition-all shadow-lg shadow-[#14B8A6]/20">
                  Run AI Readiness
                </button>
                <button className="px-10 py-5 bg-white text-[#1F2328] font-bold rounded-lg border border-gray-200 hover:border-[#1F2328] transition-all">
                  Talk to FieldSignal
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
