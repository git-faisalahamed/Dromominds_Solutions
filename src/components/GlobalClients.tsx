import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Activity, Dna, Microscope, Droplets, Snowflake, FlaskConical, Globe, Orbit, Shield, Zap, Hexagon, Leaf } from 'lucide-react';
import { sanityClient, urlFor } from '../lib/sanity';
import { AnimatedCounter } from './AnimatedCounter';

const regions = [
  { id: 'all', label: 'Global Alliance' },
  { id: 'na', label: 'North America' },
  { id: 'eu', label: 'Europe' },
  { id: 'me', label: 'Middle East' },
  { id: 'asia', label: 'Asia Pacific' },
];

const fallbackClients = [
  // Original
  { id: '1', region: 'na', name: 'Apex Clinical', icon: Activity, color: 'text-rose-600', link: '#' },
  { id: '2', region: 'na', name: 'GeneSys Solutions', icon: Dna, color: 'text-indigo-600', link: '#' },
  { id: '3', region: 'na', name: 'NovaLife Health', icon: Shield, color: 'text-emerald-600', link: '#' },
  { id: '4', region: 'eu', name: 'EuroPharma Ltd', icon: Hexagon, color: 'text-blue-600', link: '#' },
  { id: '5', region: 'eu', name: 'BioNordic', icon: Snowflake, color: 'text-cyan-600', link: '#' },
  { id: '6', region: 'eu', name: 'MediGene', icon: Microscope, color: 'text-fuchsia-600', link: '#' },
  { id: '7', region: 'me', name: 'Oasis Medical', icon: Droplets, color: 'text-amber-600', link: '#' },
  { id: '8', region: 'me', name: 'MENA Biotech', icon: Leaf, color: 'text-green-600', link: '#' },
  { id: '9', region: 'me', name: 'Gulf Diagnostics', icon: Zap, color: 'text-yellow-600', link: '#' },
  { id: '10', region: 'asia', name: 'Sakura Bio', icon: FlaskConical, color: 'text-pink-600', link: '#' },
  { id: '11', region: 'asia', name: 'TechPharma', icon: Globe, color: 'text-violet-600', link: '#' },
  { id: '12', region: 'asia', name: 'Pacific Health', icon: Orbit, color: 'text-teal-600', link: '#' },
  
  // Expanded for density
  { id: '13', region: 'na', name: 'Vanguard Dx', icon: Activity, color: 'text-rose-600', link: '#' },
  { id: '14', region: 'na', name: 'Helix Systems', icon: Dna, color: 'text-indigo-600', link: '#' },
  { id: '15', region: 'na', name: 'Aegis Bio', icon: Shield, color: 'text-emerald-600', link: '#' },
  { id: '16', region: 'eu', name: 'AlpinMed', icon: Hexagon, color: 'text-blue-600', link: '#' },
  { id: '17', region: 'eu', name: 'CryoTech EU', icon: Snowflake, color: 'text-cyan-600', link: '#' },
  { id: '18', region: 'eu', name: 'Lumen Labs', icon: Microscope, color: 'text-fuchsia-600', link: '#' },
  { id: '19', region: 'me', name: 'Desert Bio', icon: Droplets, color: 'text-amber-600', link: '#' },
  { id: '20', region: 'me', name: 'Cedar Pharm', icon: Leaf, color: 'text-green-600', link: '#' },
  { id: '21', region: 'me', name: 'Dune Health', icon: Zap, color: 'text-yellow-600', link: '#' },
  { id: '22', region: 'asia', name: 'Lotus Life', icon: FlaskConical, color: 'text-pink-600', link: '#' },
  { id: '23', region: 'asia', name: 'Oriental Rx', icon: Globe, color: 'text-violet-600', link: '#' },
  { id: '24', region: 'asia', name: 'Aussie Bio', icon: Orbit, color: 'text-teal-600', link: '#' },

  { id: '25', region: 'na', name: 'Beacon Care', icon: Activity, color: 'text-rose-600', link: '#' },
  { id: '26', region: 'na', name: 'Synapse Inc', icon: Dna, color: 'text-indigo-600', link: '#' },
  { id: '27', region: 'na', name: 'Fortress Rx', icon: Shield, color: 'text-emerald-600', link: '#' },
  { id: '28', region: 'eu', name: 'Nordic Health', icon: Hexagon, color: 'text-blue-600', link: '#' },
  { id: '29', region: 'eu', name: 'Arctic Bio', icon: Snowflake, color: 'text-cyan-600', link: '#' },
  { id: '30', region: 'eu', name: 'Optima Labs', icon: Microscope, color: 'text-fuchsia-600', link: '#' },
];

export const GlobalClients = () => {
  const [activeRegion, setActiveRegion] = useState('all');
  const [clients, setClients] = useState<any[]>(fallbackClients);

  useEffect(() => {
    sanityClient.fetch(`*[_type == "clientLogo"] | order(order asc)`).then((data) => {
      if (data && data.length > 0) {
        setClients(data.map((c: any) => ({
          ...c,
          id: c._id,
          region: c.region || 'na',
          logoPath: c.logo ? urlFor(c.logo).url() : undefined
        })));
      }
    }).catch(console.error);
  }, []);

  const filteredClients = clients.filter(c => activeRegion === 'all' || c.region === activeRegion);

  return (
    <section id="clients" className="bg-white dark:bg-slate-950 relative z-10 rounded-t-[2.5rem] md:rounded-t-[3.5rem] -mt-6 md:-mt-10 py-10 lg:py-24 md:py-32 px-6 md:px-12 lg:px-24 overflow-hidden border-b border-gray-200 dark:border-slate-800 transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Context & Metrics */}
          <div className="lg:col-span-5 text-left flex flex-col justify-center">
            <span className="inline-flex items-center gap-2 bg-[var(--color-brand)]/10 text-[var(--color-brand)] text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-widest w-max">
              <Globe className="w-4 h-4" /> Global Reach
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 dark:text-white mb-6 tracking-tight leading-tight">
              Trusted by Leaders <br/> <span className="italic text-gray-500">Across Continents</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed mb-10">
              We partner with the world's most innovative life sciences organizations to deliver unparalleled compliance and validation infrastructure. Our footprint spans top-tier pharma, biotech, and medical device manufacturers.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
                  <AnimatedCounter value={40} suffix="+" duration={2} />
                </div>
                <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">Enterprise Clients</div>
              </div>
              <div className="bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
                <div className="text-4xl font-bold text-[var(--color-brand)] mb-2 tracking-tight">Zero</div>
                <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">FDA 483 Findings</div>
              </div>
              <div className="bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
                  <AnimatedCounter value={15} suffix="+" duration={2} delay={0.2} />
                </div>
                <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">Countries Served</div>
              </div>
              <div className="bg-[var(--color-brand)] text-white rounded-2xl p-6 shadow-lg shadow-[var(--color-brand)]/20">
                <div className="text-4xl font-bold text-white mb-2 tracking-tight">
                  <AnimatedCounter value={100} suffix="%" duration={2} delay={0.4} />
                </div>
                <div className="text-xs text-white/80 font-bold uppercase tracking-wider">Audit Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Column: Region Selector & Client Grid */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Region Selector */}
            <div className="flex flex-wrap justify-start gap-2 mb-8 relative z-20 shrink-0 mt-8 lg:mt-0">
              {regions.map((region) => (
                <button
                  key={region.id}
                  onClick={() => setActiveRegion(region.id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                    activeRegion === region.id 
                      ? 'bg-[var(--color-brand)] text-white shadow-md' 
                      : 'bg-gray-100 dark:bg-slate-900 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-slate-800 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {region.label}
                </button>
              ))}
            </div>

            {/* Clients Grid */}
            <div className="relative w-full rounded-3xl bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 p-4 md:p-6 shadow-inner flex-1 flex flex-col overflow-hidden">
              <div 
                className="w-full flex-1 flex justify-center lg:justify-start items-start overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-gray-200 dark:[&::-webkit-scrollbar-thumb]:bg-slate-700 [&::-webkit-scrollbar-thumb]:rounded-full"
              >
                <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 pb-4">
                  <AnimatePresence mode="popLayout">
                    {filteredClients.map((client) => {
                      const Icon = client.icon;
                      return (
                        <motion.div
                          layout
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.4, type: 'spring', bounce: 0.3 }}
                          key={client.id}
                          className="group relative bg-white dark:bg-slate-950 border border-gray-100 dark:border-slate-800 rounded-xl p-1.5 flex flex-col items-center justify-center text-center hover:border-gray-300 dark:hover:border-slate-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 w-[100px] sm:w-[115px] aspect-[4/3] shrink-0"
                        >
                          <div className="w-full h-full flex flex-col items-center justify-center gap-1">
                            {client.logoPath ? (
                              <img loading="lazy" src={client.logoPath} alt={client.name} className="w-8 h-8 sm:w-10 sm:h-10 object-contain filter group-hover:scale-105 transition-transform duration-300" />
                            ) : Icon ? (
                              <Icon className={`w-7 h-7 sm:w-9 sm:h-9 transition-transform duration-300 group-hover:scale-110 ${client.color || 'text-gray-400'}`} />
                            ) : (
                              <Globe className={`w-7 h-7 sm:w-9 sm:h-9 transition-transform duration-300 group-hover:scale-110 ${client.color || 'text-gray-400'}`} />
                            )}
                            
                            <h3 className="text-[9px] sm:text-[10px] font-bold text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300 w-full leading-tight truncate px-0.5">
                              {client.name}
                            </h3>
                          </div>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
