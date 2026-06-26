import React from 'react';
import { Target, TrendingUp, ShieldAlert, BadgeCheck, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export const BusinessOutcomes = () => {
  const outcomes = [
    { title: "Reduced Validation Timelines", desc: "Accelerate your implementation cycles by up to 40% using automated and template-driven methodologies.", icon: Clock },
    { title: "Audit-Ready Operations", desc: "Maintain continuous state of compliance. Provide health authorities with immediate, flawless documentation.", icon: BadgeCheck },
    { title: "Improved Data Integrity", desc: "Eliminate data silos and ALCOA+ breaches to ensure secure, reliable scientific and manufacturing records.", icon: TrendingUp },
    { title: "Reduced Compliance Risk", desc: "Proactively identify and mitigate quality risks before they become critical 483 observations.", icon: ShieldAlert },
    { title: "Regulatory Confidence", desc: "Navigate FDA, EMA, and global agency expectations with assurance backed by our domain experts.", icon: Target },
    { title: "Continuous Readiness", desc: "Embed quality into your continuous integration workflows, turning compliance from a hurdle into an enabler.", icon: ShieldAlert } // will update icon below if needed
  ];

  return (
    <section className="py-10 lg:py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/micro-carbon.png')] opacity-10 pointer-events-none mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-sm font-bold text-[var(--color-brand)] uppercase tracking-widest mb-3">Value Delivered</h2>
          <h3 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight mb-4 md:mb-6">Business Outcomes We Deliver</h3>
          <p className="text-base md:text-xl text-slate-400 max-w-2xl mx-auto font-light">
            We move beyond standard validation services to drive measurable, strategic business impact across your enterprise.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {outcomes.map((outcome, i) => {
            const Icon = outcome.icon;
            return (
               <motion.div 
               key={i} 
               initial={{ opacity: 0, scale: 0.95 }} 
               whileInView={{ opacity: 1, scale: 1 }} 
               viewport={{ once: true }} 
               transition={{ duration: 0.5, delay: i * 0.1 }}
               className="bg-slate-800/80 backdrop-blur-xl border border-slate-700 p-4 sm:p-5 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl hover:bg-slate-800 transition-colors group relative overflow-hidden"
             >
               <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-[var(--color-brand)]/5 rounded-bl-[100px] -mr-8 -mt-8 group-hover:bg-[var(--color-brand)]/10 transition-colors"></div>
               <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center text-[var(--color-brand)] mb-3 md:mb-6 shadow-inner relative z-10 group-hover:scale-110 transition-transform">
                 <Icon className="w-5 h-5 md:w-7 md:h-7" />
               </div>
               <h4 className="text-sm sm:text-base md:text-xl font-bold mb-1.5 md:mb-3 relative z-10">{outcome.title}</h4>
               <p className="text-slate-400 leading-relaxed text-[11px] sm:text-xs md:text-sm relative z-10">{outcome.desc}</p>
             </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
