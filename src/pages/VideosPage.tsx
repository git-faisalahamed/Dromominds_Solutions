import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Play, MonitorPlay, Compass, Search, Filter, Share2 } from 'lucide-react';

const mockVideos = [
  {
    id: 1,
    title: 'How to Implement ALCOA+ Principles',
    description: 'A quick 10-minute explainer on the foundational principles of Data Integrity. Learn how to ensure data is Attributable, Legible, Contemporaneous, Original, and Accurate across digital systems.',
    duration: '10:45',
    category: 'Foundations',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
  {
    id: 2,
    title: 'Executing a Paperless OQ',
    description: 'Watch a live demonstration of our proprietary validation engine executing a completely paperless Operational Qualification (OQ) protocol with automated objective evidence capture.',
    duration: '14:20',
    category: 'Product Demo',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  },
  {
    id: 3,
    title: 'Demystifying 21 CFR Part 11',
    description: 'An essential guide for developers and product managers building SaaS tools for life sciences. We translate specific electronic signature requirements into actionable technical user stories.',
    duration: '18:30',
    category: 'Regulatory Deep-Dive',
    thumbnail: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
  },
  {
    id: 4,
    title: 'Agile Validation in Sprints',
    description: 'How do you validate software when you deploy every two weeks? This video covers the integration of automated testing, Jenkins pipelines, and continuous compliance gating.',
    duration: '22:15',
    category: 'Methodology',
    thumbnail: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80',
  },
  {
    id: 5,
    title: 'Auditing AWS Infrastructure for GxP',
    description: 'A cloud architects perspective on network segmentation, IAM roles, and logging (CloudTrail) specifically engineered to pass stringent health authority audits.',
    duration: '25:00',
    category: 'Cloud infrastructure',
    thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
  },
  {
    id: 6,
    title: 'Medical Device Software Classification',
    description: 'Need to figure out if your app is a SaMD? We walk through the FDA and IMDRF classification frameworks using real-world examples of health apps and diagnostic tools.',
    duration: '12:50',
    category: 'Regulatory Deep-Dive',
    thumbnail: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=800&q=80',
  }
];

const categories = ['All', 'Foundations', 'Product Demo', 'Regulatory Deep-Dive', 'Methodology', 'Cloud Infrastructure'];

export const VideosPage = () => {
  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white relative pt-10 lg:pt-24 pb-20 px-6 md:px-12 lg:px-24 overflow-hidden border-b border-slate-800">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none"></div>
         <div className="max-w-7xl mx-auto relative z-10text-center">
            <Link to="/resources" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 text-sm font-bold uppercase tracking-wider mx-auto">
              <ArrowLeft className="w-4 h-4" /> Back to Resources
            </Link>
            <div className="flex flex-col items-center justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-800 text-emerald-400 text-xs font-bold rounded-full mb-6 uppercase tracking-wider border border-slate-700 shadow-xl">
                    <MonitorPlay className="w-4 h-4" />
                    Video Knowledge Base
                </div>
                <h1 className="text-5xl md:text-6xl font-sans font-black tracking-tight leading-tight mb-6 text-center">Executive Video Briefs</h1>
                <p className="text-xl text-slate-300 font-light max-w-2xl text-center leading-relaxed mb-10">
                  Curated visual guides, product demonstrations, and technical deep-dives to accelerate your understanding of modern digital compliance.
                </p>
                <div className="w-full max-w-xl relative">
                   <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                     <Search className="w-5 h-5 text-slate-500" />
                   </div>
                   <input type="text" placeholder="Search for 'Data Integrity', 'Part 11', 'CSA'..." className="w-full bg-slate-800/80 border border-slate-700 rounded-xl py-4 pl-12 pr-4 text-white placeholder-slate-500 focus:outline-none focus:border-[var(--color-brand)] focus:ring-1 focus:ring-[var(--color-brand)] transition-all shadow-2xl backdrop-blur-sm" />
                </div>
            </div>
         </div>
      </section>

      {/* Video Content Grid */}
      <section className="py-10 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
           <h2 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
             <Compass className="w-6 h-6 text-[var(--color-brand)]" /> Explore Library
           </h2>
           <div className="flex flex-wrap gap-2 justify-center">
             {categories.map((cat, i) => (
                <button key={i} className={`px-4 py-2 text-sm font-bold rounded-lg transition shadow-sm border ${i === 0 ? 'bg-[var(--color-brand)] text-white border-transparent shadow-[var(--color-brand-dim)]' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'}`}>
                  {cat}
                </button>
             ))}
           </div>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockVideos.map((video, index) => (
             <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} key={video.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col">
               <div className="h-52 overflow-hidden relative cursor-pointer bg-slate-900">
                 <img loading="lazy" src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:opacity-75 transition-opacity duration-300" />
                 <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                     <Play className="w-6 h-6 text-white ml-1" />
                   </div>
                 </div>
                 <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs font-bold px-2 py-1 rounded">
                   {video.duration}
                 </div>
                 <div className="absolute top-3 left-3 bg-emerald-500 text-white text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded shadow-lg">
                   {video.category}
                 </div>
               </div>
               <div className="p-6 flex flex-col flex-grow">
                 <h4 className="text-lg font-bold text-slate-900 mb-2 tracking-tight group-hover:text-emerald-600 transition-colors line-clamp-2 leading-snug">{video.title}</h4>
                 <p className="text-slate-600 text-sm leading-relaxed mb-6 font-light line-clamp-3">{video.description}</p>
                 <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100">
                    <button className="text-slate-400 hover:text-slate-900 transition-colors">
                      <Share2 className="w-4 h-4" />
                    </button>
                    <button className="text-sm font-bold text-slate-900 flex items-center gap-1 group-hover:text-emerald-600 transition-colors">
                      Watch Video <Play className="w-3 h-3" />
                    </button>
                 </div>
               </div>
             </motion.div>
          ))}
        </div>
      </section>

      {/* SEO Section */}
      <section className="bg-slate-900 text-white py-20 px-6 border-t border-slate-800">
        <div className="max-w-4xl mx-auto prose prose-invert lg:prose-lg text-center">
          <h2 className="text-3xl font-black mb-6">Visualizing Quality Assurance</h2>
          <p className="text-slate-400 font-light leading-relaxed mb-6 text-left">
            The complexities of validation, from risk assessments to protocol execution, are often difficult to digest through manuals alone. Our Video Library serves as an immediate, visual translation of dense regulatory frameworks like ISO 13485 and GAMP 5 into actionable, screen-shared reality.
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-left mt-10 not-prose">
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
              <h4 className="font-bold text-white mb-2 text-lg">For Leadership & QA</h4>
              <p className="text-slate-400 text-sm">Brief executive summaries explaining the ROI of transitioning to automated compliance and the strategic impact of CSA.</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
              <h4 className="font-bold text-white mb-2 text-lg">For Engineers</h4>
              <p className="text-slate-400 text-sm">Over-the-shoulder tutorials on writing automated test scripts and managing infrastructure as code.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
