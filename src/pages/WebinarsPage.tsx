import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, PlayCircle, Calendar, Clock, Video, Users, Download, ArrowRight, ExternalLink } from 'lucide-react';

const mockWebinars = [
  {
    id: 1,
    title: 'Mastering Computer Software Assurance (CSA) Transition',
    description: 'Join former FDA investigators and our principal compliance architects as we break down the practical steps to transition from traditional CSV to modern CSA methodologies. Learn how to immediately reduce documentation burden while increasing operational safety.',
    date: 'Upcoming - Nov 12, 2026',
    time: '10:00 AM EST',
    speaker: 'Dr. Sarah Jenkins & Mark Otto',
    status: 'upcoming',
    image: 'https://images.unsplash.com/photo-1540317580384-e54911d04130?w=800&q=80',
  },
  {
    id: 2,
    title: 'Validating Generative AI in GxP Environments',
    description: 'An executive deep-dive into the frameworks required to responsibly deploy LLMs and generative AI in clinical ops, regulatory submissions, and pharmacovigilance. We cover prompt validation, hallucination risk-control, and continuous assurance.',
    date: 'Oct 05, 2026',
    time: '45 mins',
    speaker: 'James Lin, VP Technical Auth',
    status: 'on-demand',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80',
  },
  {
    id: 3,
    title: 'Veeva Vault QualityDocs: Agile Validation Tactics',
    description: 'A tactical workshop on continuous validation for evergreen SaaS. We demonstrate how to handle Veeva releases without halting operations, integrating automated regression frameworks into our Managed Services model.',
    date: 'Sep 22, 2026',
    time: '60 mins',
    speaker: 'Elena Rodriguez, Lead QA',
    status: 'on-demand',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
  },
  {
    id: 4,
    title: 'Data Integrity (ALCOA+) in Modern Labs',
    description: 'Exploring the complexities of chromatography data system integrations and defining absolute audit trails across modern disparate laboratory instrumentation (LIMS/ELN).',
    date: 'Aug 14, 2026',
    time: '50 mins',
    speaker: 'David Chen',
    status: 'on-demand',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80',
  }
];

export const WebinarsPage = () => {
  const upcomingWebinar = mockWebinars.find(w => w.status === 'upcoming');
  const onDemandWebinars = mockWebinars.filter(w => w.status === 'on-demand');

  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white relative pt-10 lg:pt-24 pb-32 px-6 md:px-12 lg:px-24 overflow-hidden border-b border-slate-800">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]"></div>
         <div className="absolute right-0 top-0 w-1/3 h-full bg-blue-500/10 blur-[100px] pointer-events-none"></div>
         <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
                <Link to="/resources" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 text-sm font-bold uppercase tracking-wider">
                  <ArrowLeft className="w-4 h-4" /> Back to Resources
                </Link>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-800/80 text-blue-400 text-xs font-bold rounded-md mb-6 uppercase tracking-wider border border-slate-700">
                    <Video className="w-4 h-4" />
                    Expert Series
                </div>
                <h1 className="text-4xl md:text-6xl font-sans font-black tracking-tight leading-tight mb-6">Live & On-Demand Webinars</h1>
                <p className="text-xl text-slate-300 font-light max-w-2xl leading-relaxed">
                  Join our principal architects and former regulatory investigators as they dissect the most complex validation challenges facing modern life sciences.
                </p>
            </div>
            
            {/* Upcoming Feature Card */}
            {upcomingWebinar && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex-1 w-full max-w-lg bg-slate-800/50 border border-slate-700 p-8 rounded-2xl shadow-2xl backdrop-blur-md relative">
                <div className="absolute top-0 right-0 p-4">
                  <span className="flex h-3 w-3 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
                  </span>
                </div>
                <div className="text-xs font-bold text-rose-400 uppercase tracking-widest mb-4">Register Now - Next Live Session</div>
                <h3 className="text-2xl font-bold text-white mb-4 line-clamp-2">{upcomingWebinar.title}</h3>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-slate-300 text-sm">
                    <Calendar className="w-4 h-4 text-[var(--color-brand)]" /> {upcomingWebinar.date}
                  </div>
                  <div className="flex items-center gap-3 text-slate-300 text-sm">
                    <Clock className="w-4 h-4 text-[var(--color-brand)]" /> {upcomingWebinar.time}
                  </div>
                  <div className="flex items-center gap-3 text-slate-300 text-sm">
                    <Users className="w-4 h-4 text-[var(--color-brand)]" /> {upcomingWebinar.speaker}
                  </div>
                </div>
                <button className="w-full py-4 rounded-xl bg-[var(--color-brand)] text-white font-bold hover:bg-rose-600 transition-colors shadow-lg flex items-center justify-center gap-2">
                  Secure Your Spot <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>
            )}
         </div>
      </section>

      {/* On-Demand Library Grid */}
      <section className="py-10 lg:py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
           <h2 className="text-3xl font-black text-slate-900 tracking-tight">On-Demand Library</h2>
           <p className="text-slate-500 font-medium">Watch at your own pace anytime, anywhere.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {onDemandWebinars.map((webinar, index) => (
             <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} key={webinar.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl hover:border-blue-200 transition-all duration-300 group flex flex-col">
               <div className="h-48 overflow-hidden relative cursor-pointer">
                 <img loading="lazy" src={webinar.image} alt={webinar.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                 <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center group-hover:bg-slate-900/20 transition-colors">
                   <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform">
                     <PlayCircle className="w-10 h-10 text-white fill-white/10" />
                   </div>
                 </div>
                 <div className="absolute bottom-4 right-4 bg-slate-900/90 text-white text-xs font-bold px-2 py-1 rounded shadow backdrop-blur">
                   {webinar.time}
                 </div>
               </div>
               <div className="p-6 flex flex-col flex-grow">
                 <h4 className="text-xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-blue-600 transition-colors line-clamp-2">{webinar.title}</h4>
                 <p className="text-slate-600 text-sm leading-relaxed mb-6 font-light line-clamp-3">{webinar.description}</p>
                 <div className="mt-auto border-t border-slate-100 pt-4">
                   <div className="text-sm font-medium text-slate-700 mb-1 flex items-center gap-2">
                     <Users className="w-4 h-4 text-slate-400" /> {webinar.speaker}
                   </div>
                   <div className="text-xs text-slate-400 font-medium">Recorded: {webinar.date}</div>
                 </div>
               </div>
             </motion.div>
          ))}
        </div>
      </section>

      {/* SEO Optmized Content Drop */}
      <section className="bg-slate-100 py-10 lg:py-24 px-6 border-t border-slate-200">
        <div className="max-w-4xl mx-auto prose prose-slate lg:prose-lg">
          <h2 className="text-3xl font-black text-slate-900 mb-6">Educational Seminars on Life Sciences Compliance</h2>
          <p className="text-slate-600 mb-4">
            Navigating the intersection of rapid technological adoption and stringent regulatory paradigms requires continuing education. Our webinars provide a structured, in-depth forum where pharmaceutical, biotech, and medical device compliance professionals can absorb advanced methodologies.
          </p>
          <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">Topics Frequently Covered:</h3>
          <ul className="text-slate-600 space-y-2">
            <li><strong>Risk-Based Validation Approaches:</strong> Deep dives into GAMP 5 Second Edition and the pivot towards critical thinking over raw documentation volume.</li>
            <li><strong>Cloud native GxP:</strong> How to qualify hyper-scale cloud environments (AWS, Azure) and manage automated release pipelines without breaking validated states.</li>
            <li><strong>AI and ML in Healthcare:</strong> Validating non-deterministic models, establishing clear acceptance criteria for AI tools, and safeguarding data privacy in line with global mandates.</li>
          </ul>
          <p className="text-slate-600 mt-6">
            All registered attendees receive full access to the recorded sessions, slide decks, and accompanying whitepapers. We structure our content to be directly applicable to your next audit or digital transformation initiative.
          </p>
        </div>
      </section>
    </div>
  );
};
