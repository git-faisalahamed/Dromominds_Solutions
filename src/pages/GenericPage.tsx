import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, BookOpen, Users, FileText, Download, PlayCircle, ExternalLink, ChevronRight, Activity, ShieldCheck, Database, FileSignature } from 'lucide-react';
import { motion } from 'motion/react';

const mockResourceData = [
  { id: 1, type: 'Whitepaper', title: 'The Enterprise Framework for Compliant AI', desc: 'A comprehensive guide to scaling AI validation within strict GxP boundaries.', icon: FileText, date: 'Oct 12, 2026' },
  { id: 2, type: 'Webinar', title: 'Transitioning to CSA: Next-Gen Assurance', desc: 'FDA experts discuss how to eliminate unneeded testing and focus on critical thinking.', icon: PlayCircle, date: 'Nov 05, 2026' },
  { id: 3, type: 'Case Study', title: 'Migrating 40,000 Documents to Veeva', desc: 'How we achieved 100% data integrity during a massive global PromoMats rollout.', icon: Database, date: 'Dec 01, 2026' },
  { id: 4, type: 'Guide', title: 'ISO 13485: Software Validation Checklist', desc: 'Essential criteria for medical device software verification and compliance.', icon: ShieldCheck, date: 'Jan 15, 2027' },
];

const mockPartnerData = [
  { id: 1, tier: 'Platinum', name: 'Veeva Systems', desc: 'Certified premier implementation partner for Veeva Vault QualityDocs and PromoMats.', industry: 'Life Sciences Cloud' },
  { id: 2, tier: 'Gold', name: 'Sparta Systems', desc: 'Validation and configuration experts for TrackWise EQMS globally.', industry: 'Quality Management' },
  { id: 3, tier: 'Silver', name: 'MasterControl', desc: 'Specialized integrators for MasterControl manufacturing and quality modules.', industry: 'EQMS & Manufacturing' },
  { id: 4, tier: 'Strategic', name: 'Microsoft Azure', desc: 'Qualified architecture partners ensuring 21 CFR Part 11 compliant cloud environments.', industry: 'Cloud Infrastructure' },
];

export const GenericPage = ({ type }: { type: 'resource' | 'partner' | 'legal' }) => {
  const { id } = useParams();
  
  const formattedTitle = id ? id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : (type === 'resource' ? 'Resource Library' : 'Our Partners');

  const contentList = type === 'resource' ? mockResourceData : mockPartnerData;

  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      {/* Dynamic Hero Section */}
      <section className="bg-slate-900 text-white relative pt-10 lg:pt-24 pb-32 px-6 md:px-12 lg:px-24 overflow-hidden border-b border-slate-800">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]"></div>
         <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[var(--color-brand-dim)]/20 to-transparent blur-3xl mix-blend-overlay"></div>
         <div className="max-w-7xl mx-auto relative z-10">
           <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 text-sm font-bold uppercase tracking-wider">
             <ArrowLeft className="w-4 h-4" /> Back Home
           </Link>
           <div className="grid lg:grid-cols-2 gap-12 items-center">
             <div>
               <div className="inline-flex items-center gap-2 bg-slate-800/80 text-[var(--color-brand)] text-xs font-bold px-3 py-1.5 rounded-md mb-6 uppercase tracking-wider border border-slate-700 backdrop-blur-sm">
                   {type === 'resource' ? <BookOpen className="w-3.5 h-3.5" /> : <Users className="w-3.5 h-3.5" />}
                   {type === 'resource' ? 'Intelligence & Assets' : 'Ecosystem'}
               </div>
               <h1 className="text-4xl md:text-6xl font-sans font-extrabold mb-6 tracking-tight leading-tight">{formattedTitle}</h1>
               <p className="text-xl text-slate-400 font-light max-w-xl leading-relaxed">
                 {type === 'resource' 
                    ? 'Deep dive into our expert-crafted whitepapers, case studies, and compliance guides designed for modern life sciences.'
                    : 'Discover the certified technologies and strategic partners we collaborate with to deliver uncompromised validation.'}
               </p>
             </div>
             
             {/* Featured Insight Card */}
             {type === 'resource' && (
               <div className="hidden lg:block bg-slate-800/50 border border-slate-700 p-8 rounded-2xl shadow-2xl backdrop-blur-sm ml-auto max-w-md w-full relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-brand)]/20 rounded-full blur-3xl group-hover:bg-[var(--color-brand)]/30 transition-colors"></div>
                 <div className="text-xs font-bold text-[var(--color-brand)] uppercase tracking-widest mb-4">Featured Report</div>
                 <h3 className="text-2xl font-bold text-white mb-4">State of AI Validation in Pharma 2026</h3>
                 <p className="text-slate-400 text-sm mb-8 leading-relaxed">Exclusive insights from our assessment of 50 top-tier pharmaceutical algorithms and their GxP boundaries.</p>
                 <button className="flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-lg font-bold text-sm hover:bg-slate-100 transition shadow-lg w-full justify-center">
                    <Download className="w-4 h-4" /> Download Report
                 </button>
               </div>
             )}
           </div>
         </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-10 lg:py-24 px-6 md:px-12 lg:px-8 max-w-7xl mx-auto">
         <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
               {type === 'resource' ? 'Latest Publications' : 'Our Technology Partners'}
            </h2>
            <div className="hidden md:flex gap-2">
              <button className="px-4 py-2 text-sm font-bold bg-white text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 transition shadow-sm">All</button>
              <button className="px-4 py-2 text-sm font-bold bg-slate-100 text-slate-500 border border-transparent rounded-lg hover:bg-slate-200 transition">Featured</button>
            </div>
         </div>

         <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {type === 'resource' ? mockResourceData.map((item, idx) => (
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} key={item.id} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-[var(--color-brand)] group-hover:bg-[var(--color-brand)] group-hover:text-white transition-colors duration-300">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full">{item.type}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-[var(--color-brand)] transition-colors line-clamp-2">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed max-w-md line-clamp-3 mb-6">{item.desc}</p>
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-slate-100 mt-auto">
                  <span className="text-sm font-medium text-slate-500">{item.date}</span>
                  <Link to="/contact" className="text-sm font-bold text-[var(--color-brand)] flex items-center gap-1 group-hover:gap-2 transition-all">
                    Access <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            )) : mockPartnerData.map((item, idx) => (
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} key={item.id} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-[var(--color-brand)] hover:shadow-xl transition-all duration-300 flex items-start gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center flex-shrink-0 text-slate-700 border border-slate-100 shadow-inner group-hover:scale-110 transition-transform">
                  <span className="font-black text-xl">{item.name.charAt(0)}</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[var(--color-brand)] transition-colors">{item.name}</h3>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-800 text-white px-2 py-0.5 rounded">{item.tier}</span>
                  </div>
                  <div className="text-sm font-bold text-[var(--color-brand)] mb-3">{item.industry}</div>
                  <p className="text-slate-600 leading-relaxed text-sm mb-4">{item.desc}</p>
                  <Link to="/contact" className="inline-flex items-center gap-1 text-sm font-bold text-slate-900 hover:text-[var(--color-brand)] transition-colors">
                    View Integration <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
         </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[var(--color-brand)] text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
           <FileSignature className="w-12 h-12 mx-auto mb-6 text-white/80" />
           <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Need Expert Guidance?</h2>
           <p className="text-xl text-white/90 mb-10 font-light">Whether you're looking for specific SOP templates or discussing partner integrations, our lead consultants are ready.</p>
           <Link to="/contact" className="bg-white text-[var(--color-brand)] px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition shadow-xl inline-flex items-center gap-2">
             Schedule a Consultation <ArrowRight className="w-5 h-5" />
           </Link>
        </div>
      </section>
    </div>
  );
};
