import React from 'react';
import { Microscope, ShieldCheck, Globe, TrendingUp } from 'lucide-react';

export const WhyChooseUs = () => {
  return (
    <section id="why-us" className="bg-gray-50 text-slate-900 relative z-10 rounded-t-[2.5rem] md:rounded-t-[3.5rem] -mt-6 md:-mt-10 py-10 lg:py-32 px-6 md:px-12 lg:px-24 shadow-[0_-20px_40px_-20px_rgba(0,0,0,0.05)] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif mb-20 text-center tracking-tight">Why Dromominds — <span className="italic text-gray-500">The Unique Intersection</span></h2>
        
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-center">
            <div className="group border-l-2 border-slate-200 pl-6 py-2 hover:border-[var(--color-brand)] transition-colors duration-300 cursor-default">
              <div className="flex items-center gap-4 mb-3">
                <ShieldCheck className="text-[var(--color-brand)] w-6 h-6 opacity-80 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[var(--color-brand)] transition-colors">GxP Regulatory Depth</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed font-normal">
                Years of exclusive focus on Life Sciences. Our consultants speak the FDA's language—21 CFR Part 11, GAMP 5, ICH—because they've operated in these environments for decades. 
              </p>
            </div>
            
            <div className="group border-l-2 border-slate-200 pl-6 py-2 hover:border-[var(--color-brand)] transition-colors duration-300 cursor-default">
              <div className="flex items-center gap-4 mb-3">
                <Microscope className="text-[var(--color-brand)] w-6 h-6 opacity-80 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[var(--color-brand)] transition-colors">System Validation & Delivery</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed font-normal">
                We don't just govern systems — we build robust validation frameworks. Delivery of comprehensive end-to-end Computerized System Validation (CSV) pipelines tailored specifically for pharma.
              </p>
            </div>
            
            <div className="group border-l-2 border-slate-200 pl-6 py-2 hover:border-[var(--color-brand)] transition-colors duration-300 cursor-default">
              <div className="flex items-center gap-4 mb-3">
                <Globe className="text-[var(--color-brand)] w-6 h-6 opacity-80 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[var(--color-brand)] transition-colors">Global Execution</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed font-normal">
                Delivery capabilities operating dynamically across critical, global markets — providing scalable, real-time insight and execution, rather than theoretical compliance advice.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-7 bg-white rounded-[2rem] p-6 md:p-8 lg:p-14 h-full flex flex-col justify-center relative overflow-hidden shadow-xl border border-gray-100">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-brand-dim)] rounded-full blur-[80px] opacity-50 pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-3xl font-serif text-slate-900 mb-8 border-b border-gray-100 pb-6">The Firm Difference</h3>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed font-normal">
                Most IT consultancies can't speak to FDA inspectors. Most quality consultancies can't fix the systems. Most engineering firms don't understand GxP. <strong className="text-slate-900 font-bold">Dromominds does all three.</strong>
              </p>
              <p className="text-gray-600 mb-10 text-base leading-relaxed font-normal">
                Our Center of Excellence combines a deeply regulated technology track record with a purpose-built compliance practice — operating on a proven, scalable model aligned with ISPE and ICH guidelines.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-auto">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand)]" />
                  <span className="text-sm font-semibold text-slate-700">CSV Framework</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand)]" />
                  <span className="text-sm font-semibold text-slate-700">FDA 21 CFR Compliant</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand)]" />
                  <span className="text-sm font-semibold text-slate-700">Full QMS Implementation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand)]" />
                  <span className="text-sm font-semibold text-slate-700">ISO 13485</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

