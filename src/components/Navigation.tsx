import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Search, ChevronDown, Phone, ArrowRight, Activity, Dna, Shield, Hexagon, Snowflake, Microscope, Droplets, Leaf, Zap } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import { sanityClient, urlFor } from '../lib/sanity';

const trustedClients = [
  { name: 'Apex Clinical', icon: Activity, color: 'text-rose-600' },
  { name: 'GeneSys Solutions', icon: Dna, color: 'text-indigo-600' },
  { name: 'NovaLife Health', icon: Shield, color: 'text-emerald-600' },
  { name: 'EuroPharma', icon: Hexagon, color: 'text-blue-600' },
  { name: 'BioNordic', icon: Snowflake, color: 'text-cyan-600' },
  { name: 'MediGene', icon: Microscope, color: 'text-fuchsia-600' },
  { name: 'Oasis Medical', icon: Droplets, color: 'text-amber-600' },
  { name: 'MENA Biotech', icon: Leaf, color: 'text-green-600' },
  { name: 'Gulf Diag', icon: Zap, color: 'text-yellow-600' },
];

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);
  const [clients, setClients] = useState<any[]>(trustedClients);
  const navigate = useNavigate();

  useEffect(() => {
    sanityClient.fetch(`*[_type == "clientLogo"] | order(order asc)`).then((data) => {
      if (data && data.length > 0) {
        setClients(data.map((c: any) => ({
          name: c.name,
          logoPath: c.logo ? urlFor(c.logo).url() : undefined
        })));
      }
    }).catch(console.error);
  }, []);

  const handleContactClick = () => {
    setMobileMenuOpen(false);
    navigate('/contact');
  };

  const toggleMobileSection = (section: string) => {
    setMobileExpandedSection(mobileExpandedSection === section ? null : section);
  };

  return (
    <>
      <header className="bg-white text-gray-900 py-4 px-6 md:px-12 flex justify-between items-center relative z-[70] border-b border-gray-200 shadow-sm transition-all duration-300 dark:bg-slate-950 dark:text-gray-100 dark:border-slate-800">
        <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition" onClick={() => navigate('/')}>
          <img src="https://dromominds.in/wp-content/uploads/2025/09/logo2.png" alt="Dromominds Logo" className="h-8 md:h-10 w-auto" />
        </div>

        <nav className="hidden lg:flex items-center gap-8 text-[15px] font-semibold tracking-tight text-gray-700 dark:text-gray-300">
          <div className="group flex items-center py-2 cursor-pointer mega-menu-trigger static">
            <span className="flex items-center gap-1.5 hover:text-[var(--color-brand)] transition-colors">Expertise <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" /></span>
            <div className="absolute top-[100%] left-1/2 transform -translate-x-1/2 mt-2 w-[800px] max-w-[95vw] bg-white border border-gray-100 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 grid grid-cols-3 p-4 xl:p-6 gap-4 xl:gap-6 z-[80] dark:bg-slate-900 dark:border-slate-800">
              <div>
                <h4 className="text-xs uppercase text-[var(--color-brand)] font-bold tracking-widest mb-4">Domains</h4>
                <ul className="space-y-3">
                  <li><Link to="/expertise/clinical" className="text-sm text-gray-600 hover:text-[var(--color-brand)] transition dark:text-gray-400">Clinical</Link></li>
                  <li><Link to="/expertise/labs" className="text-sm text-gray-600 hover:text-[var(--color-brand)] transition dark:text-gray-400">Labs</Link></li>
                  <li><Link to="/expertise/quality" className="text-sm text-gray-600 hover:text-[var(--color-brand)] transition dark:text-gray-400">Quality</Link></li>
                  <li><Link to="/expertise/regulatory" className="text-sm text-gray-600 hover:text-[var(--color-brand)] transition dark:text-gray-400">Regulatory</Link></li>
                  <li><Link to="/expertise/manufacturing" className="text-sm text-gray-600 hover:text-[var(--color-brand)] transition dark:text-gray-400">Manufacturing</Link></li>
                  <li><Link to="/expertise/supply-chain" className="text-sm text-gray-600 hover:text-[var(--color-brand)] transition dark:text-gray-400">Supply Chain</Link></li>
                  <li><Link to="/expertise/safety" className="text-sm text-gray-600 hover:text-[var(--color-brand)] transition dark:text-gray-400">Safety</Link></li>
                  <li><Link to="/expertise/commercial" className="text-sm text-gray-600 hover:text-[var(--color-brand)] transition dark:text-gray-400">Commercial</Link></li>
                  <li><Link to="/expertise/it" className="text-sm text-gray-600 hover:text-[var(--color-brand)] transition dark:text-gray-400">IT</Link></li>
                </ul>
              </div>
              <div className="border-l border-gray-100 pl-6 dark:border-slate-800">
                <h4 className="text-xs uppercase text-[var(--color-brand)] font-bold tracking-widest mb-4">Industries</h4>
                <ul className="space-y-3">
                  <li><Link to="/expertise/biotech" className="text-sm text-gray-600 hover:text-[var(--color-brand)] transition dark:text-gray-400">Biotech</Link></li>
                  <li><Link to="/expertise/pharma" className="text-sm text-gray-600 hover:text-[var(--color-brand)] transition dark:text-gray-400">Pharma</Link></li>
                  <li><Link to="/expertise/cmo-cro" className="text-sm text-gray-600 hover:text-[var(--color-brand)] transition dark:text-gray-400">CMO/CRO</Link></li>
                  <li><Link to="/expertise/medical-device" className="text-sm text-gray-600 hover:text-[var(--color-brand)] transition dark:text-gray-400">Medical Device</Link></li>
                </ul>
              </div>
              <div className="border-l border-gray-100 pl-6 dark:border-slate-800">
                <h4 className="text-xs uppercase text-[var(--color-brand)] font-bold tracking-widest mb-4">Delivery Models</h4>
                <ul className="space-y-3">
                  <li><Link to="/expertise/consulting" className="text-sm text-gray-600 hover:text-[var(--color-brand)] transition dark:text-gray-400">Consulting</Link></li>
                  <li><Link to="/expertise/managed-services" className="text-sm text-gray-600 hover:text-[var(--color-brand)] transition dark:text-gray-400">Managed Services</Link></li>
                  <li><Link to="/expertise/staffing" className="text-sm text-gray-600 hover:text-[var(--color-brand)] transition dark:text-gray-400">Staffing</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="group flex items-center py-2 cursor-pointer mega-menu-trigger static">
            <span className="flex items-center gap-1.5 hover:text-[var(--color-brand)] transition-colors">Capabilities <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" /></span>
            <div className="absolute top-[100%] left-1/2 transform -translate-x-1/2 mt-2 w-[95vw] lg:w-[94vw] xl:w-[1100px] max-w-[1200px] bg-white border border-gray-100 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 grid grid-cols-5 p-4 xl:p-6 gap-2 xl:gap-6 z-[80] overflow-hidden dark:bg-slate-900 dark:border-slate-800">
              <div>
                <h4 className="text-xs uppercase text-[var(--color-brand)] font-bold tracking-widest mb-4">Trust & Compliance</h4>
                <ul className="space-y-3">
                  <li><Link to="/expertise/csv" className="text-sm text-gray-600 hover:text-[var(--color-brand)] transition leading-tight block dark:text-gray-400">Computer System Validation (CSV)</Link></li>
                  <li><Link to="/expertise/gxp-compliance" className="text-sm text-gray-600 hover:text-[var(--color-brand)] transition leading-tight block dark:text-gray-400">GxP Compliance & Data Integrity</Link></li>
                  <li><Link to="/expertise/cqv" className="text-sm text-gray-600 hover:text-[var(--color-brand)] transition leading-tight block dark:text-gray-400">CQV & Audit Readiness</Link></li>
                  <li><Link to="/expertise/regulatory" className="text-sm text-gray-600 hover:text-[var(--color-brand)] transition leading-tight block dark:text-gray-400">Regulatory Risk & Quality Assurance</Link></li>
                  <li><Link to="/expertise/validation" className="text-sm text-gray-600 hover:text-[var(--color-brand)] transition leading-tight block dark:text-gray-400">Validation & Remediation Services</Link></li>
                </ul>
              </div>
              <div className="border-l border-gray-100 pl-6 dark:border-slate-800">
                <h4 className="text-xs uppercase text-[var(--color-brand)] font-bold tracking-widest mb-4">Quality & Content Management</h4>
                <ul className="space-y-3">
                  <li><Link to="/expertise/qms" className="text-sm text-gray-600 hover:text-[var(--color-brand)] transition leading-tight block dark:text-gray-400">Quality Management Systems (QMS)</Link></li>
                  <li><Link to="/expertise/sop" className="text-sm text-gray-600 hover:text-[var(--color-brand)] transition leading-tight block dark:text-gray-400">SOP & Documentation Management</Link></li>
                  <li><Link to="/expertise/eqms" className="text-sm text-gray-600 hover:text-[var(--color-brand)] transition leading-tight block dark:text-gray-400">eQMS & Document Lifecycle Control</Link></li>
                  <li><Link to="/expertise/regulatory-doc" className="text-sm text-gray-600 hover:text-[var(--color-brand)] transition leading-tight block dark:text-gray-400">Regulatory Documentation Support</Link></li>
                </ul>
              </div>
              <div className="border-l border-gray-100 pl-6 dark:border-slate-800">
                <h4 className="text-xs uppercase text-[var(--color-brand)] font-bold tracking-widest mb-4">Workflow Automation</h4>
                <ul className="space-y-3">
                  <li><Link to="/expertise/automation" className="text-sm text-gray-600 hover:text-[var(--color-brand)] transition leading-tight block dark:text-gray-400">Compliant Process Automation</Link></li>
                  <li><Link to="/expertise/optimization" className="text-sm text-gray-600 hover:text-[var(--color-brand)] transition leading-tight block dark:text-gray-400">Workflow Optimization</Link></li>
                  <li><Link to="/expertise/low-code" className="text-sm text-gray-600 hover:text-[var(--color-brand)] transition leading-tight block dark:text-gray-400">Low-Code / No-Code Solutions</Link></li>
                  <li><Link to="/expertise/ai-apps" className="text-sm text-gray-600 hover:text-[var(--color-brand)] transition leading-tight block dark:text-gray-400">AI-Powered Enterprise Applications</Link></li>
                  <li><Link to="/expertise/custom-software" className="text-sm text-gray-600 hover:text-[var(--color-brand)] transition leading-tight block dark:text-gray-400">Custom Software & System Integration</Link></li>
                </ul>
              </div>
              <div className="border-l border-gray-100 pl-6 dark:border-slate-800">
                <h4 className="text-xs uppercase text-[var(--color-brand)] font-bold tracking-widest mb-4">Data Insights & Control</h4>
                <ul className="space-y-3">
                  <li><Link to="/expertise/integration" className="text-sm text-gray-600 hover:text-[var(--color-brand)] transition leading-tight block dark:text-gray-400">Integration & Interoperability</Link></li>
                  <li><Link to="/expertise/bi" className="text-sm text-gray-600 hover:text-[var(--color-brand)] transition leading-tight block dark:text-gray-400">Business Intelligence & Analytics</Link></li>
                  <li><Link to="/expertise/digital-transformation" className="text-sm text-gray-600 hover:text-[var(--color-brand)] transition leading-tight block dark:text-gray-400">Digital Transformation Solutions</Link></li>
                  <li><Link to="/expertise/data-management" className="text-sm text-gray-600 hover:text-[var(--color-brand)] transition leading-tight block dark:text-gray-400">Data Management & Reporting</Link></li>
                  <li><Link to="/expertise/enterprise-integration" className="text-sm text-gray-600 hover:text-[var(--color-brand)] transition leading-tight block dark:text-gray-400">Enterprise System Integration</Link></li>
                </ul>
              </div>
              <div className="border-l border-gray-100 pl-6 dark:border-slate-800">
                <h4 className="text-xs uppercase text-[var(--color-brand)] font-bold tracking-widest mb-4">Training & Upskilling</h4>
                <ul className="space-y-3">
                  <li><Link to="/expertise/csv-csa-training" className="text-sm text-gray-600 hover:text-[var(--color-brand)] transition leading-tight block dark:text-gray-400">CSV and CSA Training</Link></li>
                  <li><Link to="/expertise/plc-scada-training" className="text-sm text-gray-600 hover:text-[var(--color-brand)] transition leading-tight block dark:text-gray-400">PLC and SCADA Training</Link></li>
                  <li><Link to="/expertise/data-integrity-training" className="text-sm text-gray-600 hover:text-[var(--color-brand)] transition leading-tight block dark:text-gray-400">Data Integrity & ALCOA+ Training</Link></li>
                  <li><Link to="/expertise/gxp-gmp-regulatory-training" className="text-sm text-gray-600 hover:text-[var(--color-brand)] transition leading-tight block dark:text-gray-400">GxP, GMP & Regulatory Compliance Training</Link></li>
                  <li><Link to="/expertise/equipment-qualification-training" className="text-sm text-gray-600 hover:text-[var(--color-brand)] transition leading-tight block dark:text-gray-400">Equipment Qualification & Process Validation Training</Link></li>
                  <li><Link to="/expertise/qms-gdp-document-training" className="text-sm text-gray-600 hover:text-[var(--color-brand)] transition leading-tight block dark:text-gray-400">QMS, GDP and Document Validation Training</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="group flex items-center py-2 cursor-pointer mega-menu-trigger static">
            <span className="flex items-center gap-1.5 hover:text-[var(--color-brand)] transition-colors">Our Clients <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" /></span>
             <div className="absolute top-[100%] left-1/2 transform -translate-x-1/2 mt-2 w-[90vw] max-w-[1000px] bg-white border border-gray-100 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-6 z-[80] dark:bg-slate-900 dark:border-slate-800 overflow-hidden">
                <h4 className="text-xs uppercase text-[var(--color-brand)] font-bold tracking-widest mb-6 text-center">Trusted By Industry Leaders</h4>
                <div className="flex overflow-hidden relative w-full group/marquee min-h-[120px] items-center mask-image-[linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]">
                   <div className="hidden lg:flex w-full absolute top-0 bottom-0 pointer-events-none z-10" style={{ background: 'linear-gradient(to right, var(--tw-prose-body) 0%, transparent 10%, transparent 90%, var(--tw-prose-body) 100%)' }}></div>
                   <motion.div 
                     animate={{ x: ["0%", "-50%"] }} 
                     transition={{ duration: 25, ease: "linear", repeat: Infinity }}
                     className="flex w-[200%] gap-12 pr-12 items-center"
                   >
                     {[...clients, ...clients].map((client, idx) => (
                       <div key={idx} className="flex flex-col items-center justify-center gap-4 flex-shrink-0 w-32 grayscale hover:grayscale-0 transition duration-300 dark:opacity-70 dark:hover:opacity-100">
                          {client.logoPath ? (
                             <img loading="lazy" src={client.logoPath} alt={client.name} className="max-h-12 w-auto object-contain" />
                          ) : client.icon ? (
                             <client.icon className={`w-12 h-12 ${client.color}`} strokeWidth={1.5} />
                          ) : null}
                          <span className="text-xs font-bold text-slate-800 dark:text-slate-300 text-center">{client.name}</span>
                       </div>
                     ))}
                   </motion.div>
                </div>
            </div>
          </div>
          <div className="relative group flex items-center py-2 cursor-pointer mega-menu-trigger">
            <span className="flex items-center gap-1.5 hover:text-[var(--color-brand)] transition-colors">Partners <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" /></span>
             <div className="absolute top-[100%] left-1/2 transform -translate-x-1/2 mt-2 w-[250px] bg-white border border-gray-100 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-4 z-[80] dark:bg-slate-900 dark:border-slate-800">
                <ul className="space-y-2">
                    <li><Link to="/partners/technology" className="block px-4 py-2 text-sm text-gray-600 rounded-lg hover:bg-[var(--color-brand-dim)] hover:text-[var(--color-brand)] transition dark:text-gray-400">Technology Partners</Link></li>
                    <li><Link to="/partners/ecosystem" className="block px-4 py-2 text-sm text-gray-600 rounded-lg hover:bg-[var(--color-brand-dim)] hover:text-[var(--color-brand)] transition dark:text-gray-400">Partner Ecosystem</Link></li>
                    <li><Link to="/partners" className="block px-4 py-2 text-sm text-gray-600 rounded-lg hover:bg-[var(--color-brand-dim)] hover:text-[var(--color-brand)] transition font-medium dark:text-gray-400">See All Partners <ArrowRight className="w-3 h-3 inline-block ml-1" /></Link></li>
                </ul>
            </div>
          </div>
          <div className="relative group flex items-center py-2 cursor-pointer mega-menu-trigger">
            <span className="flex items-center gap-1.5 hover:text-[var(--color-brand)] transition-colors">Resources <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" /></span>
             <div className="absolute top-[100%] left-1/2 transform -translate-x-1/2 mt-2 w-[200px] bg-white border border-gray-100 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-4 z-[80] dark:bg-slate-900 dark:border-slate-800">
                <ul className="space-y-2">
                    <li><Link to="/blog" className="block px-4 py-2 text-sm text-gray-600 rounded-lg hover:bg-[var(--color-brand-dim)] hover:text-[var(--color-brand)] transition dark:text-gray-400">Blogs</Link></li>
                    <li><Link to="/resources/case-studies" className="block px-4 py-2 text-sm text-gray-600 rounded-lg hover:bg-[var(--color-brand-dim)] hover:text-[var(--color-brand)] transition dark:text-gray-400">Case Studies</Link></li>
                    <li><Link to="/resources/news" className="block px-4 py-2 text-sm text-gray-600 rounded-lg hover:bg-[var(--color-brand-dim)] hover:text-[var(--color-brand)] transition dark:text-gray-400">News & Events</Link></li>
                    <li><Link to="/resources/white-papers" className="block px-4 py-2 text-sm text-gray-600 rounded-lg hover:bg-[var(--color-brand-dim)] hover:text-[var(--color-brand)] transition dark:text-gray-400">White Papers</Link></li>
                    <li><Link to="/resources/webinars" className="block px-4 py-2 text-sm text-gray-600 rounded-lg hover:bg-[var(--color-brand-dim)] hover:text-[var(--color-brand)] transition dark:text-gray-400">Webinars</Link></li>
                    <li><Link to="/resources/videos" className="block px-4 py-2 text-sm text-gray-600 rounded-lg hover:bg-[var(--color-brand-dim)] hover:text-[var(--color-brand)] transition dark:text-gray-400">Videos</Link></li>
                </ul>
            </div>
          </div>
          <div className="relative group flex items-center py-2 cursor-pointer mega-menu-trigger">
            <span className="flex items-center gap-1.5 hover:text-[var(--color-brand)] transition-colors">Interactive Tools <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" /></span>
             <div className="absolute top-[100%] left-1/2 transform -translate-x-1/2 mt-2 w-[220px] bg-white border border-gray-100 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-4 z-[80] dark:bg-slate-900 dark:border-slate-800">
                <ul className="space-y-2">
                    <li><button onClick={() => window.dispatchEvent(new Event('openCsvAssessment'))} className="block w-full text-left px-4 py-2 text-sm text-gray-600 rounded-lg hover:bg-[var(--color-brand-dim)] hover:text-[var(--color-brand)] transition dark:text-gray-400">CSV Maturity Assessment</button></li>
                    <li><button onClick={() => window.dispatchEvent(new Event('openRoiCalculator'))} className="block w-full text-left px-4 py-2 text-sm text-gray-600 rounded-lg hover:bg-[var(--color-brand-dim)] hover:text-[var(--color-brand)] transition dark:text-gray-400">ROI Calculator</button></li>
                </ul>
            </div>
          </div>
          <Link to="/about" className="hover:text-[var(--color-brand)] transition-colors py-2">About Us</Link>
          <ThemeToggle />
          <button onClick={() => setSearchOpen(!searchOpen)} className="ml-2 hover:text-[var(--color-brand)] transform hover:scale-110 transition"><Search className="w-5 h-5" /></button>
        </nav>


        <div className="hidden md:flex items-center gap-4 text-sm font-semibold">
          <button onClick={handleContactClick} className="bg-[var(--color-brand)] text-white px-6 py-2.5 rounded-full hover:bg-[var(--color-brand-hover)] transition shadow-md flex items-center gap-1">
            Talk to an Expert <ArrowRight className="w-4 h-4 inline-block ml-1" />
          </button>
        </div>
        
        <button onClick={() => setMobileMenuOpen(true)} className="lg:hidden text-gray-900 p-2 z-[70]">
          <Menu className="w-7 h-7" />
        </button>

        {/* Search Overlay */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-2xl z-[90] dark:bg-slate-950 dark:border-slate-800"
            >
              <div className="max-w-7xl mx-auto px-6 py-8">
                 <div className="flex items-center gap-4 border-b-2 border-[var(--color-brand)] pb-3">
                   <Search className="w-8 h-8 text-[var(--color-brand)] shrink-0" />
                   <input 
                     type="text" 
                     autoFocus
                     placeholder="Search insights, services..." 
                     className="flex-grow bg-transparent text-lg md:text-3xl outline-none border-none text-gray-900 placeholder-gray-300 font-light min-w-0 dark:text-gray-100 dark:placeholder-gray-600"
                     onKeyDown={(e) => {
                       if (e.key === 'Enter') {
                         navigate(`/blog?search=${e.currentTarget.value}`);
                         setSearchOpen(false);
                       }
                     }}
                   />
                   <button onClick={() => setSearchOpen(false)} className="text-gray-400 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 p-2 rounded-full transition-colors dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-gray-500 dark:hover:text-gray-300">
                     <X className="w-6 h-6" />
                   </button>
                 </div>
                 <div className="mt-6 flex flex-wrap gap-4 text-sm">
                   <span className="text-gray-400 font-semibold uppercase tracking-wider text-xs flex items-center h-8 dark:text-gray-500">Popular Searches:</span>
                   <Link to="/expertise/csv" onClick={() => setSearchOpen(false)} className="bg-gray-50 hover:bg-[var(--color-brand-dim)] text-gray-600 hover:text-[var(--color-brand)] px-4 py-1.5 rounded-full transition-colors border border-gray-100 dark:bg-slate-900 dark:border-slate-800 dark:text-gray-400 dark:hover:text-[var(--color-brand)]">Computer System Validation</Link>
                   <Link to="/expertise/gxp-compliance" onClick={() => setSearchOpen(false)} className="bg-gray-50 hover:bg-[var(--color-brand-dim)] text-gray-600 hover:text-[var(--color-brand)] px-4 py-1.5 rounded-full transition-colors border border-gray-100 dark:bg-slate-900 dark:border-slate-800 dark:text-gray-400 dark:hover:text-[var(--color-brand)]">GxP Compliance</Link>
                   <Link to="/about" onClick={() => setSearchOpen(false)} className="bg-gray-50 hover:bg-[var(--color-brand-dim)] text-gray-600 hover:text-[var(--color-brand)] px-4 py-1.5 rounded-full transition-colors border border-gray-100 dark:bg-slate-900 dark:border-slate-800 dark:text-gray-400 dark:hover:text-[var(--color-brand)]">About Dromominds</Link>
                   <Link to="/blog" onClick={() => setSearchOpen(false)} className="bg-gray-50 hover:bg-[var(--color-brand-dim)] text-gray-600 hover:text-[var(--color-brand)] px-4 py-1.5 rounded-full transition-colors border border-gray-100 dark:bg-slate-900 dark:border-slate-800 dark:text-gray-400 dark:hover:text-[var(--color-brand)]">Latest Insights</Link>
                 </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 z-[80] lg:hidden backdrop-blur-sm"
            />
            <motion.div 
              initial={{ x: '100%' }} 
              animate={{ x: 0 }} 
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white z-[90] flex flex-col shadow-2xl lg:hidden dark:bg-slate-950"
            >
              <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50 dark:bg-slate-900 dark:border-slate-800">
                <img src="https://dromominds.in/wp-content/uploads/2025/09/logo2.png" alt="Dromominds Logo" className="h-7 w-auto" />
                <div className="flex items-center gap-2">
                  <ThemeToggle />
                  <button onClick={() => setMobileMenuOpen(false)} className="text-gray-500 hover:text-gray-900 p-2 rounded-full hover:bg-gray-100 transition dark:hover:bg-slate-800 dark:text-gray-400 dark:hover:text-gray-100">
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6 flex-grow overflow-y-auto">
                <nav className="flex flex-col gap-4 text-base text-gray-900 font-bold dark:text-gray-100">
                  {/* Expertise Mobile Menu */}
                  <div>
                    <div onClick={() => toggleMobileSection('expertise')} className="pb-4 border-b border-gray-100 flex justify-between items-center cursor-pointer">
                      Expertise <ChevronDown className={`w-5 h-5 transition-transform text-gray-400 ${mobileExpandedSection === 'expertise' ? 'rotate-180' : ''}`} />
                    </div>
                    <AnimatePresence>
                      {mobileExpandedSection === 'expertise' && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                          <div className="py-4 pl-4 flex flex-col gap-3 border-b border-gray-100">
                            <h4 className="text-[10px] uppercase text-[var(--color-brand)] font-bold tracking-widest mt-2">Domains</h4>
                            <Link to="/expertise/clinical" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 font-medium">Clinical</Link>
                            <Link to="/expertise/labs" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 font-medium">Labs</Link>
                            <Link to="/expertise/quality" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 font-medium">Quality</Link>
                            <Link to="/expertise/regulatory" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 font-medium">Regulatory</Link>
                            <Link to="/expertise/manufacturing" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 font-medium">Manufacturing</Link>
                            <Link to="/expertise/supply-chain" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 font-medium">Supply Chain</Link>
                            <Link to="/expertise/safety" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 font-medium">Safety</Link>
                            <Link to="/expertise/commercial" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 font-medium">Commercial</Link>
                            <Link to="/expertise/it" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 font-medium">IT</Link>
                            
                            <h4 className="text-[10px] uppercase text-[var(--color-brand)] font-bold tracking-widest mt-4">Industries</h4>
                            <Link to="/expertise/biotech" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 font-medium">Biotech</Link>
                            <Link to="/expertise/pharma" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 font-medium">Pharma</Link>
                            <Link to="/expertise/cmo-cro" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 font-medium">CMO/CRO</Link>
                            <Link to="/expertise/medical-device" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 font-medium">Medical Device</Link>

                            <h4 className="text-[10px] uppercase text-[var(--color-brand)] font-bold tracking-widest mt-4">Delivery Models</h4>
                            <Link to="/expertise/consulting" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 font-medium">Consulting</Link>
                            <Link to="/expertise/managed-services" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 font-medium">Managed Services</Link>
                            <Link to="/expertise/staffing" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 font-medium">Staffing</Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Capabilities Mobile Menu */}
                  <div>
                    <div onClick={() => toggleMobileSection('capabilities')} className="pb-4 border-b border-gray-100 flex justify-between items-center cursor-pointer">
                      Capabilities <ChevronDown className={`w-5 h-5 transition-transform text-gray-400 ${mobileExpandedSection === 'capabilities' ? 'rotate-180' : ''}`} />
                    </div>
                    <AnimatePresence>
                      {mobileExpandedSection === 'capabilities' && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                          <div className="py-4 pl-4 flex flex-col gap-3 border-b border-gray-100">
                            <h4 className="text-[10px] uppercase text-[var(--color-brand)] font-bold tracking-widest mt-2">Trust & Compliance</h4>
                            <Link to="/expertise/csv" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 font-medium">Computer System Validation (CSV)</Link>
                            <Link to="/expertise/gxp-compliance" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 font-medium">GxP Compliance & Data Integrity</Link>
                            <Link to="/expertise/cqv" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 font-medium">CQV & Audit Readiness</Link>
                            <Link to="/expertise/regulatory" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 font-medium">Regulatory Risk & Quality Assurance</Link>
                            <Link to="/expertise/validation" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 font-medium">Validation & Remediation Services</Link>
                            
                            <h4 className="text-[10px] uppercase text-[var(--color-brand)] font-bold tracking-widest mt-4">Quality & Content Management</h4>
                            <Link to="/expertise/qms" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 font-medium">Quality Management Systems (QMS)</Link>
                            <Link to="/expertise/sop" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 font-medium">SOP & Documentation Management</Link>
                            <Link to="/expertise/eqms" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 font-medium">eQMS & Document Lifecycle Control</Link>
                            <Link to="/expertise/regulatory-doc" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 font-medium">Regulatory Documentation Support</Link>
                            
                            <h4 className="text-[10px] uppercase text-[var(--color-brand)] font-bold tracking-widest mt-4">Workflow Automation</h4>
                            <Link to="/expertise/automation" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 font-medium">Compliant Process Automation</Link>
                            <Link to="/expertise/optimization" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 font-medium">Workflow Optimization</Link>
                            <Link to="/expertise/low-code" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 font-medium">Low-Code / No-Code Solutions</Link>
                            <Link to="/expertise/ai-apps" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 font-medium">AI-Powered Enterprise Applications</Link>
                            <Link to="/expertise/custom-software" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 font-medium">Custom Software & System Integration</Link>

                            <h4 className="text-[10px] uppercase text-[var(--color-brand)] font-bold tracking-widest mt-4">Data Insights & Control</h4>
                            <Link to="/expertise/integration" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 font-medium">Integration & Interoperability</Link>
                            <Link to="/expertise/bi" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 font-medium">Business Intelligence & Analytics</Link>
                            <Link to="/expertise/digital-transformation" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 font-medium">Digital Transformation Solutions</Link>
                            <Link to="/expertise/data-management" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 font-medium">Data Management & Reporting</Link>
                            <Link to="/expertise/enterprise-integration" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 font-medium">Enterprise System Integration</Link>
                            
                            <h4 className="text-[10px] uppercase text-[var(--color-brand)] font-bold tracking-widest mt-4">Training & Upskilling</h4>
                            <Link to="/expertise/csv-csa-training" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 font-medium">CSV and CSA Training</Link>
                            <Link to="/expertise/plc-scada-training" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 font-medium">PLC and SCADA Training</Link>
                            <Link to="/expertise/data-integrity-training" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 font-medium">Data Integrity & ALCOA+ Training</Link>
                            <Link to="/expertise/gxp-gmp-regulatory-training" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 font-medium">GxP, GMP & Regulatory Compliance Training</Link>
                            <Link to="/expertise/equipment-qualification-training" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 font-medium">Equipment Qualification & Process Validation Training</Link>
                            <Link to="/expertise/qms-gdp-document-training" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 font-medium">QMS, GDP and Document Validation Training</Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Our Clients Mobile Menu */}
                  <div>
                    <div onClick={() => toggleMobileSection('our-clients')} className="pb-4 border-b border-gray-100 flex justify-between items-center cursor-pointer">
                      Our Clients <ChevronDown className={`w-5 h-5 transition-transform text-gray-400 ${mobileExpandedSection === 'our-clients' ? 'rotate-180' : ''}`} />
                    </div>
                    <AnimatePresence>
                      {mobileExpandedSection === 'our-clients' && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                          <div className="py-4 pl-4 flex flex-col gap-3 border-b border-gray-100 dark:border-slate-800">
                             {clients.map((client, idx) => (
                                <div key={idx} className="flex items-center gap-3 text-sm text-gray-600 font-medium dark:text-gray-400">
                                   {client.logoPath ? (
                                      <img loading="lazy" src={client.logoPath} alt={client.name} className="w-6 h-6 object-contain grayscale" />
                                   ) : client.icon ? (
                                      <client.icon className={`w-5 h-5 ${client.color}`} strokeWidth={1.5} />
                                   ) : null}
                                   {client.name}
                                </div>
                             ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Partners Mobile Menu */}
                  <div>
                    <div onClick={() => toggleMobileSection('partners')} className="pb-4 border-b border-gray-100 flex justify-between items-center cursor-pointer">
                      Partners <ChevronDown className={`w-5 h-5 transition-transform text-gray-400 ${mobileExpandedSection === 'partners' ? 'rotate-180' : ''}`} />
                    </div>
                    <AnimatePresence>
                      {mobileExpandedSection === 'partners' && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                          <div className="py-4 pl-4 flex flex-col gap-3 border-b border-gray-100">
                            <Link to="/partners/technology" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 font-medium">Technology Partners</Link>
                            <Link to="/partners/ecosystem" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 font-medium">Partner Ecosystem</Link>
                            <Link to="/partners" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 font-medium font-bold text-[var(--color-brand)]">See All Partners</Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Resources Mobile Menu */}
                  <div>
                    <div onClick={() => toggleMobileSection('resources')} className="pb-4 border-b border-gray-100 flex justify-between items-center cursor-pointer">
                      Resources <ChevronDown className={`w-5 h-5 transition-transform text-gray-400 ${mobileExpandedSection === 'resources' ? 'rotate-180' : ''}`} />
                    </div>
                    <AnimatePresence>
                      {mobileExpandedSection === 'resources' && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                          <div className="py-4 pl-4 flex flex-col gap-3 border-b border-gray-100">
                            <Link to="/blog" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 font-medium">Blogs</Link>
                            <Link to="/resources/case-studies" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 font-medium">Case Studies</Link>
                            <Link to="/resources/news" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 font-medium">News & Events</Link>
                            <Link to="/resources/white-papers" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 font-medium">White Papers</Link>
                            <Link to="/resources/webinars" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 font-medium">Webinars</Link>
                            <Link to="/resources/videos" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 font-medium">Videos</Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Interactive Tools Mobile Menu */}
                  <div>
                    <div onClick={() => toggleMobileSection('interactive-tools')} className="pb-4 border-b border-gray-100 flex justify-between items-center cursor-pointer">
                      Interactive Tools <ChevronDown className={`w-5 h-5 transition-transform text-gray-400 ${mobileExpandedSection === 'interactive-tools' ? 'rotate-180' : ''}`} />
                    </div>
                    <AnimatePresence>
                      {mobileExpandedSection === 'interactive-tools' && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                          <div className="py-4 pl-4 flex flex-col gap-3 border-b border-gray-100">
                            <button onClick={() => { setMobileMenuOpen(false); window.dispatchEvent(new Event('openCsvAssessment')); }} className="text-left text-sm text-gray-600 font-medium">CSV Maturity Assessment</button>
                            <button onClick={() => { setMobileMenuOpen(false); window.dispatchEvent(new Event('openRoiCalculator')); }} className="text-left text-sm text-gray-600 font-medium">ROI Calculator</button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="pb-4 border-b border-gray-100 hover:text-[var(--color-brand)] transition">About Us</Link>
                </nav>
              </div>
              <div className="p-6 border-t border-gray-100 bg-gray-50">
                <button onClick={handleContactClick} className="bg-[var(--color-brand)] text-white px-6 py-4 rounded-xl font-bold hover:bg-[var(--color-brand-hover)] transition shadow-lg w-full flex items-center justify-center gap-2">
                  Talk to an Expert <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
