import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { ArrowRight, ChevronRight, ShieldCheck, Activity, Globe, RefreshCcw, ClipboardCheck, Cpu, MapPin } from 'lucide-react';
import { sanityClient } from '../lib/sanity';
import { useNavigate } from 'react-router-dom';

export const Hero = () => {
  const [init, setInit] = useState(false);
  const [heroData, setHeroData] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });

    sanityClient.fetch(`*[_type == "hero" && page == "Home"][0]`)
      .then(setHeroData)
      .catch(console.error);

  }, []);

  const features = [
    { icon: ShieldCheck, title: "GxP-Focused", desc: "Compliance Delivery" },
    { icon: Activity, title: "Risk-Based", desc: "Validation Approach" },
    { icon: Globe, title: "FDA + EU", desc: "Regulatory Alignment" },
    { icon: RefreshCcw, title: "End-to-End", desc: "Lifecycle Support" },
    { icon: ClipboardCheck, title: "Audit-Ready", desc: "Documentation Practices" },
    { icon: Cpu, title: "CSV + CQV", desc: "Implementation Expertise" },
    { icon: MapPin, title: "India + Netherlands", desc: "Operational Presence" }
  ];

  return (
    <section id="overview" className="bg-[#060b19] relative overflow-hidden text-white pt-[120px] pb-20 px-6 md:px-12 lg:px-24">
      {init && (
        <Particles
          id="tsparticles"
          options={{
            background: { color: { value: "transparent" } },
            fpsLimit: 120,
            interactivity: {
              events: {
                onHover: { enable: true, mode: "grab" },
                resize: { enable: true },
              },
              modes: {
                grab: { distance: 200, links: { opacity: 0.5 } }
              },
            },
            particles: {
              color: { value: "#ffffff" },
              links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.2, width: 1 },
              move: { direction: "none", enable: true, outModes: { default: "out" }, random: true, speed: 2, straight: false },
              number: { density: { enable: true, width: 800, height: 800 }, value: 70 },
              opacity: { value: { min: 0.1, max: 0.3 } },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
          }}
          className="absolute inset-0 z-0 pointer-events-none"
        />
      )}
      {/* Animated gradient orbs */}
      <motion.div 
        animate={{ 
          x: ["-10%", "10%", "-10%"], 
          y: ["-10%", "10%", "-10%"],
          scale: [1, 1.1, 1]
        }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
        className="absolute top-[-20%] right-[-10%] w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-[radial-gradient(ellipse_at_center,var(--color-brand-glow),transparent_60%)] pointer-events-none z-0 rounded-full opacity-50" 
      />
      <motion.div 
        animate={{ 
          x: ["10%", "-10%", "10%"], 
          y: ["10%", "-10%", "10%"],
          scale: [1, 1.2, 1]
        }}
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
        className="absolute bottom-[-20%] left-[-10%] w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-[radial-gradient(ellipse_at_center,var(--color-brand-dim),transparent_60%)] pointer-events-none z-0 rounded-full opacity-80" 
      />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none z-0 mix-blend-overlay"></div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto relative z-10 flex flex-col items-center text-center lg:text-left lg:items-start"
      >
        <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6 shadow-none">
          {(heroData?.badge ? [heroData.badge] : ["Computerized System Validation (CSV)", "FDA 21 CFR Part 11 Compliance", "GAMP 5 Validation Services"]).map((tag, idx) => (
            <div key={idx} className="p-[1px] rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-500 shadow-[0_0_15px_rgba(217,70,239,0.4)] hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] transition-shadow duration-300 cursor-default">
              <div className="bg-[#060b19] text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest h-full flex items-center justify-center">
                {tag}
              </div>
            </div>
          ))}
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-6 leading-[1.1] tracking-tight whitespace-pre-line">
          {heroData?.heading1 || "Audit Readiness.\n"}
          <span className="italic text-[var(--color-brand)]">{heroData?.headingHighlight || "Regulatory Confidence."}</span>
          {heroData?.heading2}
        </h1>
        
        <p className="text-base md:text-lg text-gray-400 max-w-2xl mb-8 leading-relaxed font-light mx-auto lg:mx-0">
          {heroData?.subheading || "Ensure data integrity, accelerate validation cycles, and maintain inspection readiness with our end-to-end compliance solutions."}
        </p>

        {/* LEAD ATTRACTION */}
        <div className="flex flex-col sm:flex-row gap-4 mb-20 justify-center lg:justify-start w-full">
          <button onClick={() => {
              if (heroData?.primaryCtaLink) window.location.href = heroData.primaryCtaLink;
              else navigate('/contact');
            }} className="bg-[var(--color-brand)] text-white px-8 py-3.5 rounded-xl font-bold hover:bg-[var(--color-brand-hover)] transition shadow-glow flex items-center justify-center gap-2 text-sm sm:text-base">
            Book a Free Compliance Assessment <ArrowRight className="w-4 h-4" />
          </button>
          <button onClick={() => {
              const evt = new CustomEvent('openLeadMagnet');
              window.dispatchEvent(evt);
            }} className="bg-white/10 text-white border border-white/20 px-8 py-3.5 rounded-xl font-bold hover:bg-white/20 transition flex items-center justify-center gap-2 text-sm sm:text-base backdrop-blur-sm">
            Download CSV Readiness Checklist <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <div className="border border-white/10 py-5 px-4 lg:px-6 bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl relative overflow-hidden mx-auto">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-y-6 gap-x-2 text-center relative z-10 w-full items-start">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-3 border border-white/10 shadow-inner group-hover:bg-white/10 transition-colors">
                    <Icon className="w-5 h-5 text-[var(--color-brand)]" />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-white mb-1 leading-tight">{feature.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-400 font-medium uppercase tracking-wider">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};


