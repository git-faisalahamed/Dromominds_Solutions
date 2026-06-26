import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Database, FlaskConical, ClipboardCheck, SearchCheck, GraduationCap, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const capabilities = [
  {
    id: 'csv',
    shortTitle: 'Computerized System Validation',
    title: 'Computerized System Validation (CSV/CSA)',
    description: 'Deliver robust Validation Planning, Strategy & Master Plans (VMP) while conducting Risk Assessments and Impact Analysis based on GAMP 5 methodologies.',
    metrics: ['FDA 21 CFR Part 11', 'EU Annex 11', 'GAMP 5'],
    icon: ShieldCheck,
    colorHex: '#3b82f6', // blue-500
    link: '/computerized-system-validation',
    details: [
      'Validation Strategy & Master Plans (VMP)',
      'Risk Assessments & GAMP 5-Based Validation',
      'URS, FS, DS, RTM & Documentation',
      'IQ, OQ, PQ & Functional Testing',
      'Cloud, SaaS, ERP, LIMS & QMS Apps'
    ]
  },
  {
    id: 'eqv',
    shortTitle: 'Equipment Qualification',
    title: 'Equipment Qualification',
    description: 'Comprehensive Installation, Operational, and Performance Qualification (IQ/OQ/PQ) for utility, laboratory, and manufacturing equipment.',
    metrics: ['IQ/OQ/PQ', 'Lifecycle Risk', 'Protocol Dev'],
    icon: FlaskConical,
    colorHex: '#10b981', // emerald-500
    link: '/equipment-qualification',
    details: [
      'Installation Qualification (IQ)',
      'Operational Qualification (OQ)',
      'Performance Qualification (PQ)',
      'Protocol & Report Development',
      'Lifecycle Risk Assessments'
    ]
  },
  {
    id: 'qms',
    shortTitle: 'QMS & Regulatory',
    title: 'QMS & Regulatory Services',
    description: 'Design and implement robust Quality Management Systems, SOPs, and document control to ensure inspection readiness and system optimization.',
    metrics: ['ISO 9001', 'ISO 13485', 'ICH Q10'],
    icon: ClipboardCheck,
    colorHex: '#a855f7', // purple-500
    link: '/qms-implementation',
    details: [
      'QMS Design & Implementation',
      'SOP & Record Management',
      'Change Control & Non-Conformance',
      'CAPA Implementation',
      'Inspection Readiness'
    ]
  },
  {
    id: 'data',
    shortTitle: 'Data Integrity',
    title: 'Data Integrity Compliance',
    description: 'Comprehensive ALCOA+ compliance reviews, audit trail evaluations, and data integrity risk assessments for FDA, EU GMP & Global GxP frameworks.',
    metrics: ['ALCOA+', 'FDA', 'EU GMP'],
    icon: Database,
    colorHex: '#f59e0b', // amber-500
    link: '/data-integrity',
    details: [
      'ALCOA+ Compliance Reviews',
      'Audit Trail & Electronic Records',
      'Remediation Planning',
      'GxP Compliance Assessments',
      'Governance Reviews'
    ]
  },
  {
    id: 'audit',
    shortTitle: 'Audit & Remediation',
    title: 'Audit & Remediation',
    description: 'Identify and resolve compliance gaps with comprehensive internal audits, mock inspections, and regulatory risk analysis.',
    metrics: ['Mock Inspections', 'CAPA', 'Risk Analysis'],
    icon: SearchCheck,
    colorHex: '#f43f5e', // rose-500
    link: '/audit-remediation',
    details: [
      'GxP, CSV, QMS Gap Assessments',
      'Internal Audits & Mock Inspections',
      'Risk Analysis & Remediation',
      'CAPA Development & Verification',
      'Observation Response'
    ]
  },
  {
    id: 'training',
    shortTitle: 'Skills Training',
    title: 'Trainings & Skills Dev.',
    description: 'Empower your teams with specialized training in CSV, CSA, Data Integrity, GxP, and Quality Management Systems.',
    metrics: ['CSV & CSA', 'ALCOA+', 'GDP'],
    icon: GraduationCap,
    colorHex: '#06b6d4', // cyan-500
    link: '/expertise/training',
    details: [
      'CSV & CSA Training',
      'Data Integrity & ALCOA+',
      'GxP, GMP & Compliance',
      'Equipment & Process Validation',
      'QMS & GDP Training'
    ]
  }
];

const CapabilityCard = ({ cap }: { cap: typeof capabilities[0] | undefined }) => {
    if (!cap) return null;
    
    return (
        <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-2xl lg:rounded-3xl p-5 lg:p-6 shadow-2xl relative overflow-hidden group flex flex-col justify-between min-h-[420px] xl:min-h-[460px] w-full">
            {/* Giant faded icon background */}
            <cap.icon 
                className="absolute -bottom-10 -right-10 w-40 h-40 lg:w-56 lg:h-56 opacity-5 pointer-events-none transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12" 
                style={{ color: cap.colorHex }}
            />

            <div>
                <div className="flex items-center gap-3 lg:gap-4 mb-4 lg:mb-5 relative z-10">
                    <div 
                        className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center border border-white/20 shadow-inner shrink-0"
                        style={{ backgroundColor: `${cap.colorHex}20`, color: cap.colorHex }}
                    >
                        <cap.icon className="w-6 h-6 lg:w-7 lg:h-7" />
                    </div>
                    <h4 className="text-xl lg:text-2xl font-black text-white leading-tight">
                        {cap.title}
                    </h4>
                </div>
                
                <p className="text-slate-300 font-medium leading-relaxed mb-5 lg:mb-6 relative z-10 text-sm lg:text-base">
                    {cap.description}
                </p>

                <div className="space-y-2 lg:space-y-3 mb-6 relative z-10">
                    {cap.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start">
                            <div 
                                className="w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full mt-1.5 lg:mt-2 mr-3 shrink-0 shadow-sm" 
                                style={{ backgroundColor: cap.colorHex }}
                            />
                            <span className="text-slate-100 text-sm lg:text-lg font-bold tracking-tight">{detail}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="pt-4 lg:pt-5 border-t border-white/10 flex flex-col gap-4 relative z-10 mt-auto">
                <div className="flex flex-wrap gap-2 lg:gap-2.5">
                    {cap.metrics.map((metric, idx) => (
                        <span 
                            key={idx} 
                            className="px-2 py-1 lg:px-3 lg:py-1.5 bg-white/5 border border-white/10 rounded-md text-[10px] lg:text-[13px] font-bold text-slate-300 tracking-wider uppercase shadow-sm"
                        >
                            {metric}
                        </span>
                    ))}
                </div>
                <Link 
                    to={cap.link} 
                    className="inline-flex items-center text-sm lg:text-lg font-bold transition-all group/link w-fit"
                    style={{ color: cap.colorHex }}
                >
                    See {cap.shortTitle} Details
                    <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 ml-2 group-hover/link:translate-x-1.5 transition-transform inline-block" />
                </Link>
            </div>
        </div>
    );
};

export const OurCapabilities = () => {
    const [activeIdx, setActiveIdx] = useState(0);
    const activeCap = capabilities[activeIdx] || capabilities[0];

    return (
        <section id="services" className="bg-slate-950 py-10 md:py-16 relative overflow-hidden transition-colors duration-500">
            {/* Dynamic Background Glow */}
            <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] blur-[120px] rounded-full opacity-20 pointer-events-none transition-all duration-700 ease-in-out"
                style={{ backgroundColor: activeCap.colorHex }}
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                
                {/* Header */}
                <div className="mb-8 md:mb-12">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <h2 className="text-[var(--color-brand)] font-bold tracking-[0.2em] uppercase text-sm mb-3">Our Services</h2>
                            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter">
                                Core Services.
                            </h3>
                        </div>
                        <p className="text-base md:text-lg text-slate-400 font-light max-w-md">
                            Comprehensive compliance and validation solutions designed to accelerate time-to-market while reducing regulatory risk.
                        </p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 relative">
                    
                    {/* Left: Interactive Navigation */}
                    <div className="lg:col-span-7 flex flex-col justify-center gap-1 lg:gap-3">
                        {capabilities.map((cap, i) => {
                            const isActive = activeIdx === i;
                            return (
                                <div key={cap.id} className="flex flex-col scroll-mt-28" id={`cap-${i}`}>
                                    <div 
                                        onMouseEnter={() => window.innerWidth >= 1024 && setActiveIdx(i)}
                                        onClick={() => {
                                            const isClosing = activeIdx === i;
                                            // Allow collapsible accordion on mobile
                                            setActiveIdx(window.innerWidth < 1024 && isClosing ? -1 : i);
                                            
                                            // Only scroll if we are actively expanding it
                                            if (!isClosing && window.innerWidth < 1024) {
                                                setTimeout(() => {
                                                    const element = document.getElementById(`cap-${i}`);
                                                    if (element) {
                                                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                                    }
                                                }, 350); 
                                            }
                                        }}
                                        className="cursor-pointer group flex items-center py-1.5 md:py-2"
                                    >
                                        <span 
                                            className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black transition-all duration-300 uppercase tracking-tighter leading-none ${isActive ? 'text-white lg:translate-x-4' : 'text-transparent hover:text-white/50'}`}
                                            style={!isActive ? { WebkitTextStroke: '1px rgba(255,255,255,0.25)' } : {}}
                                        >
                                            {cap.shortTitle}
                                        </span>
                                    </div>

                                    {/* Mobile Only: Inline Detail Card (Accordion) */}
                                    <div className="lg:hidden">
                                        <AnimatePresence mode="sync">
                                            {isActive && (
                                                <motion.div
                                                    key={`accordion-card-${cap.id}`}
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.25, ease: "easeInOut" }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="pt-3 pb-6">
                                                        <CapabilityCard cap={cap} />
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    {/* Right: Detailed Content Box (Sticky on Desktop) */}
                    <div className="hidden lg:block lg:col-span-5">
                        <div className="sticky top-28 xl:top-32">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeCap.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.15, ease: "easeOut" }}
                                >
                                    <CapabilityCard cap={activeCap} />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                </div>
                
                {/* Why Dromominds Section */}
                <div className="mt-20 md:mt-32 pt-10 border-t border-white/10 relative z-10">
                    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
                        <div className="lg:col-span-5">
                            <h3 className="text-[var(--color-brand)] font-bold tracking-widest uppercase text-xs sm:text-sm mb-4">Value Proposition</h3>
                            <h4 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
                                Execution <br /> Without Excuses.
                            </h4>
                            <p className="text-base md:text-lg text-slate-400 font-light leading-relaxed max-w-md">
                                We bridge the gap between rigorous regulatory compliance and practical operational excellence.
                            </p>
                        </div>
                        <div className="lg:col-span-7">
                            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-8">
                                {[
                                    "Risk-Based, Regulatory-Compliant Approach",
                                    "Deep Expertise in Pharma, Biotech & Medical Devices",
                                    "Alignment with FDA, EU GMP, GAMP 5 & Global Standards",
                                    "Audit-Ready Documentation & End-to-End Traceability",
                                    "Business-Focused Solutions via Proven Excellence",
                                ].map((benefit, idx) => (
                                    <div key={idx} className="flex items-start group">
                                        <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 shadow-sm flex items-center justify-center shrink-0 mr-4 group-hover:bg-[var(--color-brand)]/20 group-hover:border-[var(--color-brand)]/50 transition-colors">
                                            <CheckCircle2 className="w-4 h-4 text-slate-400 group-hover:text-[var(--color-brand)] transition-colors" />
                                        </div>
                                        <p className="text-slate-300 text-sm md:text-base font-medium leading-snug pt-1">{benefit}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
