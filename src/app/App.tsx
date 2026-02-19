"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { 
  ArrowRight, 
  Search, 
  Database, 
  Cpu, 
  Workflow, 
  Settings, 
  ShieldCheck, 
  BarChart3, 
  Zap, 
  Layers, 
  Globe,
  Mail,
  CheckCircle2,
  ChevronRight,
  FileText,
  MessageSquare
} from "lucide-react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Framework } from "./components/Framework";
import { Services } from "./components/Services";
import { LeadMagnet } from "./components/LeadMagnet";
import { Footer } from "./components/Footer";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import ApproachPage from "./Approach";
import CompanyPage from "./Company";
import ServicesPage from "./Services";
import AIReadinessPage from "./AIReadiness";
import CaseStudiesPage from "./CaseStudies";
import ResourcesPage from "./Resources";
import InsightsPage from "./Insights";

export default function App() {
  const [currentPath, setCurrentPath] = useState("/");


  useEffect(() => {
    setCurrentPath(window.location.pathname);
  
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
      window.scrollTo(0, 0);
    };
  
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);
  

  if (currentPath === "/approach") {
    return <ApproachPage />;
  }

  if (currentPath === "/company") {
    return <CompanyPage />;
  }

  if (currentPath === "/services") {
    return <ServicesPage />;
  }

  if (currentPath === "/services/ai-readiness") {
    return <AIReadinessPage />;
  }

  if (currentPath === "/case-studies") {
    return <CaseStudiesPage />;
  }

  if (currentPath === "/insights") {
    return <InsightsPage />;
  }


  if (currentPath === "/resources") {
    return <ResourcesPage />;
  }

  return (
    <div className="min-h-screen bg-[#F8F9FB] text-[#1F2328] font-sans selection:bg-[#14B8A6]/20">
      <Header />
      
      <main>
        <Hero />

        {/* Proof Strip */}
        <section className="py-12 border-y border-gray-100 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <p className="text-sm font-medium text-[#6B7280] text-center tracking-wider uppercase mb-8">
              Trusted by teams across technology, education, finance, services, and impact.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale">
              {/* Logo Placeholders - Minimal Typography Based */}
              {["STELLAR", "OAK & CO", "QUANTUM", "MERIDIAN", "NEXUS"].map((logo) => (
                <span key={logo} className="text-xl font-bold tracking-tighter text-[#1F2328]">{logo}</span>
              ))}
            </div>
          </div>
        </section>

        {/* The Problem Section */}
        <section className="py-24 md:py-32">
          <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-5">
              <h2 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight mb-6">
                Most AI initiatives stall for the same reason.
              </h2>
            </div>
            <div className="md:col-span-7 space-y-8">
              <p className="text-xl md:text-2xl text-[#6B7280] leading-relaxed">
                AI tools are easy to test. Real adoption is harder. 
                Without clear use cases, a knowledge foundation, guardrails, and a delivery plan, AI stays fragmented across departments.
              </p>
              <div className="p-8 bg-white border border-gray-100 rounded-xl shadow-sm">
                <p className="text-lg leading-relaxed">
                  FieldSignal fixes the underlying operating model so AI becomes <span className="text-[#14B8A6] font-medium">dependable, repeatable, and measurable.</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-24 md:py-32 bg-[#E6F0FA]/30">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="max-w-3xl mb-16">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                We deploy AI as a coordinated system.
              </h2>
              <p className="text-xl text-[#6B7280] leading-relaxed mb-8">
                We help leadership teams assess readiness, capture organizational knowledge, structure datasets, deploy agents and workflows, and maintain performance over time.
              </p>
              <p className="text-lg font-medium text-[#1F2328]">
                This is not “AI experiments.” This is AI built into operations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
              {[
                "Align leadership on where AI fits and what matters first",
                "Build a KnowledgeStack so AI outputs stay accurate and on-brand",
                "Deploy agents and workflows with governance and access control",
                "Train teams by role, then support adoption with ongoing maintenance",
                "Improve performance through measurement and iteration"
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="mt-1 shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-[#14B8A6]" />
                  </div>
                  <p className="text-lg text-[#1F2328] leading-snug">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Framework />

        <Services />

        {/* Case Studies Section */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-2xl">
                <p className="text-xs font-bold text-[#14B8A6] tracking-widest uppercase mb-4">Case Studies</p>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">Real deployments. Clear outcomes.</h2>
                <p className="text-lg text-[#6B7280]">
                  See how organizations have moved from experimentation to reliable AI systems, using structured knowledge foundations, governed workflows, and role-based training.
                </p>
              </div>
              <button 
                onClick={() => {
                  window.history.pushState({}, "", "/case-studies");
                  window.dispatchEvent(new PopStateEvent("popstate"));
                }}
                className="flex items-center gap-2 font-semibold text-[#1F2328] border-b-2 border-[#14B8A6] pb-1 transition-colors hover:text-[#14B8A6]"
              >
                View Case Studies <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  tag: "Technology",
                  title: "Scaling Technical Support with Managed Agents",
                  result: "40% reduction in first-response time while maintaining 98% accuracy.",
                  image: "https://images.unsplash.com/photo-1514905565314-fea02285fa69?auto=format&fit=crop&q=80&w=800"
                },
                {
                  tag: "Finance",
                  title: "Governance Framework for Enterprise Adoption",
                  result: "Unified 12 departments under a single AI governance and knowledge layer.",
                  image: "https://images.unsplash.com/photo-1762758731234-2569e31afa02?auto=format&fit=crop&q=80&w=800"
                },
                {
                  tag: "Education",
                  title: "Institutional KnowledgeStack Implementation",
                  result: "Turned 15 years of curriculum data into a high-performance faculty agent.",
                  image: "https://images.unsplash.com/photo-1769684328001-dc78599f1518?auto=format&fit=crop&q=80&w=800"
                }
              ].map((study, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -8 }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-[16/10] overflow-hidden rounded-xl bg-gray-100 mb-6 border border-gray-100">
                    <ImageWithFallback 
                      src={study.image} 
                      alt={study.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                    />
                  </div>
                  <span className="text-xs font-bold text-[#14B8A6] tracking-widest uppercase block mb-3">{study.tag}</span>
                  <h3 className="text-xl font-bold mb-3 leading-snug group-hover:text-[#6366F1] transition-colors">{study.title}</h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed mb-4">{study.result}</p>
                  <span 
                    onClick={() => {
                      window.history.pushState({}, "", "/case-studies");
                      window.dispatchEvent(new PopStateEvent("popstate"));
                    }}
                    className="text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    View case study <ChevronRight className="w-4 h-4" />
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Insights Section */}
        <section className="py-24 md:py-32 bg-[#F8F9FB] border-t border-gray-100">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-2xl">
                <p className="text-xs font-bold text-[#14B8A6] tracking-widest uppercase mb-4">Insights</p>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">Frameworks, lessons, and field notes.</h2>
                <p className="text-lg text-[#6B7280]">
                  Practical writing on AI enablement, governance, dataset foundations, agents, content systems, and answer engine optimization.
                </p>
              </div>
              <button className="flex items-center gap-2 font-semibold text-[#1F2328] border-b-2 border-[#14B8A6] pb-1 transition-colors hover:text-[#14B8A6]">
                Explore Insights <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Why Most AI Pilots Fail: The Governance Gap",
                  date: "Feb 08, 2026",
                  readTime: "6 min read"
                },
                {
                  title: "Structuring Your First KnowledgeStack",
                  date: "Feb 02, 2026",
                  readTime: "8 min read"
                },
                {
                  title: "Beyond the Prompt: Building Multi-Step AI Workflows",
                  date: "Jan 25, 2026",
                  readTime: "12 min read"
                }
              ].map((post, i) => (
                <div key={i} className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col h-full">
                  <div className="flex items-center gap-3 text-xs text-[#6B7280] font-medium mb-6">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold leading-tight mb-8 grow tracking-tight">{post.title}</h3>
                  <div className="flex items-center gap-2 font-semibold text-sm group">
                    Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <LeadMagnet />

        {/* Newsletter Section */}
        <section className="py-24 border-y border-gray-100 bg-white">
          <div className="max-w-[600px] mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Get one useful idea each week.</h2>
            <p className="text-[#6B7280] mb-8">
              Short, structured insights on deploying AI as an operating layer. Frameworks, templates, and lessons from real work.
            </p>
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="flex-1 px-6 py-4 rounded-lg bg-[#F8F9FB] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#14B8A6]/20 focus:border-[#14B8A6] transition-all"
                required
              />
              <button type="submit" className="px-8 py-4 bg-[#1F2328] text-white font-bold rounded-lg hover:bg-black transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-xs text-[#6B7280]">No spam. Unsubscribe anytime.</p>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 md:py-40 bg-[#F8F9FB]">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <h2 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-8">
              AI should reduce <br />complexity.
            </h2>
            <p className="text-xl md:text-2xl text-[#6B7280] max-w-2xl mx-auto mb-12 leading-relaxed">
              If your AI efforts feel fragmented, risky, or stuck in pilot mode, we’ll help you put structure around it and ship real systems.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="w-full sm:w-auto px-10 py-5 bg-[#14B8A6] text-white font-bold rounded-lg hover:bg-[#0D9488] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#14B8A6]/20">
                Run AI Readiness
              </button>
              <button className="w-full sm:w-auto px-10 py-5 bg-white text-[#1F2328] font-bold rounded-lg border border-gray-200 hover:border-[#1F2328] transition-all">
                Talk to FieldSignal
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
