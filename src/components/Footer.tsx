import React, { useEffect, useState } from 'react';
import { Linkedin, Facebook, Youtube, MapPin, Phone, Mail, Loader2, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { sanityClient } from '../lib/sanity';

export const Footer = () => {
  const [settings, setSettings] = useState<any>(null);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    sanityClient.fetch(`*[_type == "siteSettings"][0]`).then((data) => {
      setSettings(data);
    }).catch(console.error);
  }, []);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setStatus('idle');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl pt-12 md:pt-20 pb-8 md:pb-10 border-t border-gray-200 dark:border-slate-800 text-gray-600 dark:text-gray-400 relative z-10 rounded-t-[2.5rem] md:rounded-t-[3.5rem] -mt-6 md:-mt-10 shadow-[0_-20px_40px_-20px_rgba(0,0,0,0.1)] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,200,200,0.05),transparent_50%)] pointer-events-none z-0" />
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        {/* Newsletter / Lead Attraction Footer Top */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-12 mb-10 md:mb-16 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-[var(--color-brand)]/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="md:w-1/2 relative z-10">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-white mb-2 md:mb-3">Stay Inspection-Ready.</h3>
              <p className="text-gray-300 font-light text-sm sm:text-base md:text-lg">Join 5,000+ quality and validation professionals receiving our monthly GxP insights and templates.</p>
          </div>
          <div className="md:w-1/2 w-full relative z-10">
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email" 
                  className="flex-grow px-4 py-3 md:px-5 md:py-4 rounded-xl border border-gray-700 bg-slate-950 text-white placeholder-gray-500 text-sm md:text-base focus:outline-none focus:border-[var(--color-brand)] focus:ring-1 focus:ring-[var(--color-brand)] transition" 
                  required
                />
                <button 
                  type="submit"
                  disabled={loading || status === 'success'}
                  className="bg-[var(--color-brand)] text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold hover:bg-[var(--color-brand-hover)] transition shrink-0 whitespace-nowrap shadow-[0_4px_14px_0_rgba(0,200,200,0.39)] disabled:opacity-70 flex justify-center items-center min-w-[120px] md:min-w-[140px] text-sm md:text-base"
                >
                  {loading ? <Loader2 className="w-4 h-4 md:w-5 md:h-5 animate-spin" /> : status === 'success' ? <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5" /> : 'Subscribe'}
                </button>
              </form>
              {status === 'success' && <p className="text-emerald-400 text-xs md:text-sm mt-2 font-medium">Successfully subscribed!</p>}
              {status === 'error' && <p className="text-rose-400 text-xs md:text-sm mt-2 font-medium">Failed to subscribe. Please try again.</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-10 md:mb-16">
          {/* Column 1: Brand & Socials */}
          <div className="flex flex-col">
            <Link to="/">
              <img loading="lazy" src="https://dromominds.in/wp-content/uploads/2025/09/logo2.png" alt="Dromominds Logo" className="h-10 md:h-12 w-auto mb-6 opacity-100 object-contain object-left dark:opacity-90 dark:brightness-200 dark:contrast-100" />
            </Link>
            <p className="text-sm leading-relaxed mb-8 max-w-xs text-gray-500 dark:text-gray-400">
              {settings?.description || "Providing structured validation, qualification, and regulatory support services aligned with global GxP, FDA, and ISO requirements."}
            </p>
            <div className="flex gap-4">
              <a href={settings?.linkedinUrl || "#"} className="w-10 h-10 rounded-lg bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-[var(--color-brand)] dark:hover:bg-[var(--color-brand)] hover:text-white hover:border-transparent transition-all shadow-sm"><Linkedin className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 rounded-lg bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-[var(--color-brand)] dark:hover:bg-[var(--color-brand)] hover:text-white hover:border-transparent transition-all shadow-sm"><Facebook className="w-4 h-4" /></a>
              <a href={settings?.twitterUrl || "#"} className="w-10 h-10 rounded-lg bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-[var(--color-brand)] dark:hover:bg-[var(--color-brand)] hover:text-white hover:border-transparent transition-all shadow-sm"><Youtube className="w-4 h-4" /></a>
            </div>
          </div>

          {/* Column 2: Capabilities */}
          <div>
            <h4 className="text-slate-900 dark:text-gray-100 font-bold mb-6 text-sm uppercase tracking-widest">Capabilities</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/expertise/csv" className="text-gray-500 dark:text-gray-400 hover:text-[var(--color-brand)] transition">Computerized System Validation</Link></li>
              <li><Link to="/expertise/cqv" className="text-gray-500 dark:text-gray-400 hover:text-[var(--color-brand)] transition">Equipment Qualification</Link></li>
              <li><Link to="/expertise/qms" className="text-gray-500 dark:text-gray-400 hover:text-[var(--color-brand)] transition">Quality Management Systems</Link></li>
              <li><Link to="/expertise/gxp-compliance" className="text-gray-500 dark:text-gray-400 hover:text-[var(--color-brand)] transition">Data Integrity Assessments</Link></li>
              <li><Link to="/expertise/regulatory" className="text-gray-500 dark:text-gray-400 hover:text-[var(--color-brand)] transition">Regulatory Remediation</Link></li>
              <li><Link to="/expertise/managed-services" className="text-gray-500 dark:text-gray-400 hover:text-[var(--color-brand)] transition">Managed Services</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-slate-900 dark:text-gray-100 font-bold mb-6 text-sm uppercase tracking-widest">Company</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/about" className="text-gray-500 dark:text-gray-400 hover:text-[var(--color-brand)] transition">About Us</Link></li>
              <li><Link to="/partners" className="text-gray-500 dark:text-gray-400 hover:text-[var(--color-brand)] transition">Our Partners</Link></li>
              <li><Link to="/expertise/pharma" className="text-gray-500 dark:text-gray-400 hover:text-[var(--color-brand)] transition">Industry Expertise</Link></li>
              <li><Link to="/resources/case-studies" className="text-gray-500 dark:text-gray-400 hover:text-[var(--color-brand)] transition">Case Studies</Link></li>
              <li><Link to="/contact" className="text-gray-500 dark:text-gray-400 hover:text-[var(--color-brand)] transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 4: Global Reach / Contact */}
          <div>
            <h4 className="text-slate-900 dark:text-gray-100 font-bold mb-6 text-sm uppercase tracking-widest">Global Reach</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[var(--color-brand)] shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-slate-900 dark:text-gray-100 font-semibold text-sm mb-1">India HQ</h5>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1 leading-relaxed whitespace-pre-wrap">{settings?.indiaOfficeAddress || "98A Ground Floor, 5th Cross,\nRajendra Nagar, Koramangala,\nBengaluru, 560047, India"}</p>
                  <a href={`tel:${settings?.indiaOfficePhone?.replace(/[^0-9+]/g, '') || "+919748386443"}`} className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 hover:text-[var(--color-brand)] transition">
                    <Phone className="w-3 h-3" /> {settings?.indiaOfficePhone || "+91-9748386443"}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-slate-900 dark:text-gray-100 font-semibold text-sm mb-1">Netherlands Office</h5>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1 leading-relaxed whitespace-pre-wrap">{settings?.netherlandsOfficeAddress || "Colijnlaan 72,\n1421 CB Uithoorn,\nNetherlands"}</p>
                  <a href={`tel:${settings?.netherlandsOfficePhone?.replace(/[^0-9+]/g, '') || "+31630971725"}`} className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 hover:text-[var(--color-brand)] transition">
                    <Phone className="w-3 h-3" /> {settings?.netherlandsOfficePhone || "+31 6 30971725"}
                  </a>
                </div>
              </div>
              <div className="pt-4 mt-2 border-t border-gray-200 dark:border-slate-800">
                <a href={`mailto:${settings?.contactEmail || "admin@dromominds.com"}`} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 hover:text-[var(--color-brand)] transition font-medium">
                  <Mail className="w-4 h-4 text-[var(--color-brand)]" /> {settings?.contactEmail || "admin@dromominds.com"}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-semibold text-gray-400 dark:text-gray-500">
          <div>&copy; {new Date().getFullYear()} {settings?.title || "Dromominds Solutions"}. All rights reserved.</div>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-slate-900 dark:hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-slate-900 dark:hover:text-gray-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
