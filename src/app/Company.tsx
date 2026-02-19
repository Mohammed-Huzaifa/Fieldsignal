"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  Linkedin, 
  ChevronRight, 
  CheckCircle2, 
  Users, 
  Briefcase, 
  Globe, 
  Zap, 
  ShieldCheck, 
  Layers,
  Search,
  Cpu,
  Workflow,
  Settings,
  PenTool,
  Eye,
  MessageSquare,
  Compass,
  Database
} from "lucide-react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

export default function CompanyPage() {
  const [activeTab, setActiveTab] = useState("about");

  const stickyNavItems = [
    { label: "About", id: "about" },
    { label: "Team", id: "team" },
    { label: "Careers", id: "careers" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = stickyNavItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 150;

      sections.forEach(section => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveTab(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FB] text-[#1F2328] font-sans selection:bg-[#14B8A6]/20">
      <Header />

      <main>
        {/* Company Hero */}
        <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden bg-white border-b border-gray-100">
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/graphy.png')" }}></div>
          
          <div className="max-w-[1200px] mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-xs font-bold text-[#14B8A6] tracking-[0.2em] uppercase mb-4 block">Company</span>
                <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-8">
                  Built to make AI practical.
                </h1>
                <p className="text-xl md:text-2xl text-[#6B7280] leading-relaxed mb-10 max-w-2xl">
                  FieldSignal helps organizations deploy AI as an operating layer. Structured, governed, and designed for real work across teams.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-10 py-5 bg-[#14B8A6] text-white font-bold rounded-lg hover:bg-[#0D9488] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#14B8A6]/20">
                    Run AI Readiness
                  </button>
                  <button className="px-10 py-5 bg-white text-[#1F2328] font-bold rounded-lg border border-gray-200 hover:border-[#1F2328] transition-all">
                    Contact Us
                  </button>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-5 hidden lg:block">
              <svg width="400" height="400" viewBox="0 0 400 400" fill="none" className="mx-auto opacity-40">
                <rect x="50" y="50" width="300" height="300" stroke="#EEF4FF" strokeWidth="1" />
                <path d="M50 150H350" stroke="#EEF4FF" strokeWidth="1" />
                <path d="M50 250H350" stroke="#EEF4FF" strokeWidth="1" />
                <path d="M150 50V350" stroke="#EEF4FF" strokeWidth="1" />
                <path d="M250 50V350" stroke="#EEF4FF" strokeWidth="1" />
                
                <motion.path 
                  d="M50 50L350 350M50 350L350 50" 
                  stroke="#14B8A6" strokeWidth="0.5" strokeDasharray="4 4" 
                  animate={{ strokeDashoffset: [0, -20] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                />
                
                <circle cx="200" cy="200" r="100" stroke="#EEF4FF" strokeWidth="1" />
                <circle cx="200" cy="200" r="40" fill="#14B8A6" fillOpacity="0.05" stroke="#14B8A6" strokeWidth="1" />
              </svg>
            </div>
          </div>
        </section>

        {/* Sticky Sub-nav */}
        <div className="sticky top-[72px] md:top-[88px] z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 hidden md:block">
          <div className="max-w-[1200px] mx-auto px-6 flex items-center gap-12 py-4">
            {stickyNavItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-bold tracking-widest uppercase transition-colors ${
                  activeTab === item.id ? "text-[#14B8A6]" : "text-[#6B7280] hover:text-[#1F2328]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* About Section */}
        <section id="about" className="py-24 md:py-32">
          <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-6">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8 tracking-tight">Beyond pilots. Into operations.</h2>
              <div className="space-y-6 text-xl text-[#6B7280] leading-relaxed">
                <p>
                  FieldSignal exists because most organizations do not need more AI tools. They need structure.
                </p>
                <p>
                  We work with leadership and teams to align priorities, build the knowledge foundation AI depends on, deploy agents and workflows responsibly, and maintain performance over time.
                </p>
                <p>
                  Our work is designed to reduce complexity, strengthen governance, and create measurable gains in speed, quality, and consistency.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Clarity over hype", desc: "No noise, just practical application." },
                { title: "Structure before scale", desc: "Foundations matter more than speed." },
                { title: "Governance as a feature", desc: "Enabling safety without roadblocks." },
                { title: "Practical delivery", desc: "Measurable outcomes in real environments." },
                { title: "Systems that compound", desc: "Building value that grows over time." }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-[#1F2328] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#6B7280]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Do (Capabilities) Section */}
        <section className="py-24 md:py-32 bg-[#EEF4FF]/30 border-y border-gray-100">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-16 tracking-tight text-center">AI enablement, end to end.</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Readiness Assessments", desc: "Leadership alignment and roadmap creation.", icon: Compass },
                { title: "KnowledgeStacks", desc: "Organized datasets for accurate AI grounded in your data.", icon: Database },
                { title: "Secure Agents", desc: "RAG + MCP powered agents built for real tasks.", icon: Zap },
                { title: "Role-Based Training", desc: "Upskilling teams with framework-driven confidence.", icon: Users },
                { title: "Governance Systems", desc: "Policies, access controls, and safety guardrails.", icon: ShieldCheck },
                { title: "Production Engines", desc: "ContentEngine, AEO, and VisualAI scale systems.", icon: Layers }
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all group cursor-pointer">
                  <div className="w-12 h-12 rounded-lg bg-[#F8F9FB] flex items-center justify-center mb-6 group-hover:bg-[#14B8A6]/10 group-hover:text-[#14B8A6] transition-colors">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed mb-6">{item.desc}</p>
                  <span className="text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Explore service <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-24 md:py-32 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
              <div className="max-w-2xl">
                <span className="text-xs font-bold text-[#6366F1] tracking-[0.2em] uppercase mb-4 block">Our Team</span>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">Operators who can deliver.</h2>
                <p className="text-xl text-[#6B7280] leading-relaxed">
                  We combine strategy, systems thinking, and hands-on implementation. Toronto-rooted, globally fluent. Built to work across industries and teams.
                </p>
              </div>
              <button className="px-8 py-4 bg-[#1F2328] text-white font-bold rounded-lg hover:bg-black transition-colors whitespace-nowrap">
                Meet the Team
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-20">
              {/* Featured Leadership */}
              {[
                { 
                  name: "Marcus Chen", 
                  title: "Managing Partner", 
                  bio: "Former strategy lead at a global consulting firm. Specialized in turning complex data into actionable operational frameworks.",
                  image: "https://images.unsplash.com/photo-1767175620484-1ed37931a0d1?auto=format&fit=crop&q=80&w=600"
                },
                { 
                  name: "Sarah Lawson", 
                  title: "Systems Architect", 
                  bio: "Technical lead with a background in knowledge engineering and large-scale AI deployment for educational institutions.",
                  image: "https://images.unsplash.com/photo-1665224752561-85f4da9a5658?auto=format&fit=crop&q=80&w=600"
                }
              ].map((member, i) => (
                <div key={i} className="flex flex-col sm:flex-row gap-8 items-center bg-[#F8F9FB] p-8 rounded-3xl border border-gray-100">
                  <div className="w-48 h-48 rounded-2xl overflow-hidden shrink-0 shadow-sm">
                    <ImageWithFallback src={member.image} alt={member.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold">{member.name}</h3>
                        <p className="text-[#14B8A6] font-semibold text-sm uppercase tracking-wider">{member.title}</p>
                      </div>
                      <a href="#" className="text-[#6B7280] hover:text-[#0077B5] transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </div>
                    <p className="text-[#6B7280] leading-relaxed italic text-sm">"{member.bio}"</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
              {["Product", "Engineering", "Strategy", "Operations", "Design"].map((role, i) => (
                <div key={i} className="text-center group">
                  <div className="w-20 h-20 rounded-full bg-gray-100 mx-auto mb-4 flex items-center justify-center border-2 border-white shadow-sm group-hover:border-[#14B8A6] transition-colors text-[#6B7280] font-bold text-xl">
                    {role.charAt(0)}
                  </div>
                  <h4 className="font-bold text-sm mb-1">Lead {role}</h4>
                  <p className="text-xs text-[#6B7280] uppercase tracking-widest">Toronto, ON</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Careers Section */}
        <section id="careers" className="py-24 md:py-40 bg-[#EEF4FF]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-5">
                <span className="text-xs font-bold text-[#14B8A6] tracking-[0.2em] uppercase mb-4 block">Careers</span>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8 tracking-tight">Build what’s next with us.</h2>
                <p className="text-xl text-[#6B7280] leading-relaxed mb-12">
                  We are always interested in people who think clearly, communicate well, and can turn complexity into working systems.
                </p>
                
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#14B8A6]/10 flex items-center justify-center shrink-0">
                      <span className="font-bold text-[#14B8A6]">1</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Intro Call</h4>
                      <p className="text-sm text-[#6B7280]">Brief conversation about your background and our mission.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#14B8A6]/10 flex items-center justify-center shrink-0">
                      <span className="font-bold text-[#14B8A6]">2</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Practical Exercise</h4>
                      <p className="text-sm text-[#6B7280]">A real-world project to see how you solve structured problems.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#14B8A6]/10 flex items-center justify-center shrink-0">
                      <span className="font-bold text-[#14B8A6]">3</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Final Conversation</h4>
                      <p className="text-sm text-[#6B7280]">Deep dive with leadership and the core team.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
                  <h3 className="text-2xl font-bold mb-8">Open Roles</h3>
                  
                  <div className="space-y-4 mb-12">
                    {[
                      { title: "Senior AI Solutions Engineer", type: "Full-time", location: "Hybrid / Toronto" },
                      { title: "Governance & Ethics Lead", type: "Contract", location: "Remote" },
                      { title: "Operations Strategist", type: "Full-time", location: "Hybrid / Toronto" }
                    ].map((role, i) => (
                      <div key={i} className="flex items-center justify-between p-6 bg-[#F8F9FB] rounded-xl hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-md transition-all group cursor-pointer">
                        <div>
                          <h4 className="font-bold text-lg mb-1">{role.title}</h4>
                          <div className="flex items-center gap-3 text-sm text-[#6B7280]">
                            <span>{role.type}</span>
                            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                            <span>{role.location}</span>
                          </div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-[#6B7280] group-hover:text-[#14B8A6] group-hover:translate-x-1 transition-all" />
                      </div>
                    ))}
                  </div>

                  <div className="text-center p-8 bg-[#F8F9FB] border border-dashed border-gray-200 rounded-xl">
                    <p className="text-[#6B7280] mb-6">Don’t see a role that fits? We’re always looking for clear thinkers.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                      <button className="px-8 py-3 bg-[#1F2328] text-white font-bold rounded-lg hover:bg-black transition-colors">
                        Introduce Yourself
                      </button>
                      <button className="px-8 py-3 bg-white text-[#1F2328] font-bold rounded-lg border border-gray-200 hover:border-[#1F2328] transition-all">
                        View All Roles
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Strip */}
        <section className="py-24 border-y border-gray-100 bg-white">
          <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">Ready to build the future of work?</h2>
              <p className="text-xl text-[#6B7280]">Join FieldSignal and help make AI practical, safe, and scalable for organizations everywhere.</p>
            </div>
            <div className="flex gap-4 whitespace-nowrap">
              <button className="px-8 py-4 bg-[#14B8A6] text-white font-bold rounded-lg hover:bg-[#0D9488] transition-all shadow-lg shadow-[#14B8A6]/20">
                Run AI Readiness
              </button>
              <button className="px-8 py-4 bg-white text-[#1F2328] font-bold rounded-lg border border-gray-200 hover:border-[#1F2328] transition-all">
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
