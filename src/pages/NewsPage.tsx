import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, ArrowRight, BookOpen, Clock, Tag, ChevronRight } from 'lucide-react';

const mockNews = [
  {
    id: 1,
    title: 'Dromominds Announces Strategic Partnership with Global QA Leaders',
    excerpt: 'Expanding our compliance ecosystem to integrate seamless automated testing across top-tier Quality Management Systems globally. This partnership aims to reduce validation cycle times by up to 40%.',
    category: 'Company News',
    date: 'Oct 24, 2026',
    author: 'Sarah Jenkins',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80',
    featured: true
  },
  {
    id: 2,
    title: 'New CSA Guidelines Released: What Life Sciences Need to Know',
    excerpt: 'The FDA has officially rolled out new Computer Software Assurance guidelines. Discover how our new methodologies align perfectly with shifting regulatory expectations and reduce documentation.',
    category: 'Regulatory Updates',
    date: 'Sep 15, 2026',
    author: 'Dr. Marcus Webb',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
    featured: false
  },
  {
    id: 3,
    title: 'Dromominds Named Top 10 Compliance Agency 2026',
    excerpt: 'We are honored to be recognized by the Life Sciences Technology Council for our innovative approach to Risk-Based Validation and our state-of-the-art compliance architecture.',
    category: 'Awards',
    date: 'Aug 02, 2026',
    author: 'Corporate Communications',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1507676184212-d0c30a3c74da?w=800&q=80',
    featured: false
  },
  {
    id: 4,
    title: 'Expanding Our Operations in the APAC Region',
    excerpt: 'To better serve our global pharmaceutical clientele, Dromominds is opening a new center of excellence in Singapore, focused on rapid deployment and follow-the-sun managed services.',
    category: 'Expansion',
    date: 'Jul 18, 2026',
    author: 'David Chen',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    featured: false
  }
];

export const NewsPage = () => {
  const featuredArticle = mockNews.find(n => n.featured);
  const regularArticles = mockNews.filter(n => !n.featured);

  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white relative pt-10 lg:pt-24 pb-32 px-6 md:px-12 lg:px-24 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="absolute right-0 top-0 w-1/2 h-full bg-[var(--color-brand)] opacity-[0.15] blur-[120px] mix-blend-screen"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/resources" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 text-sm font-bold uppercase tracking-wider">
            <ArrowLeft className="w-4 h-4" /> Back to Resources
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-[var(--color-brand)] border border-slate-700">
              <BookOpen className="w-6 h-6" />
            </div>
            <h1 className="text-4xl md:text-6xl font-sans font-black tracking-tight leading-tight">News & Events</h1>
          </div>
          <p className="text-xl text-slate-300 font-light max-w-3xl leading-relaxed">
            Stay updated with the latest company announcements, industry awards, regulatory shifts, and technological milestones shaping the future of life sciences compliance.
          </p>
        </div>
      </section>

      {/* Featured News */}
      {featuredArticle && (
        <section className="py-10 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto -mt-16 relative z-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200 flex flex-col lg:flex-row group cursor-pointer hover:shadow-2xl transition-all duration-300">
            <div className="lg:w-1/2 relative overflow-hidden">
              <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
              <img loading="lazy" src={featuredArticle.image} alt={featuredArticle.title} className="w-full h-full object-cover min-h-[300px] group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="lg:w-1/2 p-10 lg:p-14 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-[var(--color-brand-dim)] text-[var(--color-brand)] text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider">{featuredArticle.category}</span>
                <span className="text-sm text-slate-400 font-medium flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{featuredArticle.date}</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 tracking-tight group-hover:text-[var(--color-brand)] transition-colors">{featuredArticle.title}</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed font-light">{featuredArticle.excerpt}</p>
              <div className="flex items-center justify-between mt-auto pt-8 border-t border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">{featuredArticle.author}</div>
                    <div className="text-xs text-slate-500 flex items-center gap-1"><Clock className="w-3 h-3" />{featuredArticle.readTime}</div>
                  </div>
                </div>
                <button className="text-[var(--color-brand)] font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read Full Story <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </section>
      )}

      {/* Grid News */}
      <section className="py-10 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h3 className="text-3xl font-black text-slate-900 tracking-tight">Recent Updates</h3>
          <div className="hidden sm:flex gap-2">
            <button className="px-4 py-2 text-sm font-bold bg-slate-800 text-white rounded-lg shadow">All News</button>
            <button className="px-4 py-2 text-sm font-bold bg-white text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 transition">Press Releases</button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularArticles.map((article, index) => (
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} key={article.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl hover:border-slate-300 transition-all duration-300 group flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <img loading="lazy" src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-slate-900 text-xs font-bold px-3 py-1.5 rounded uppercase tracking-wider">{article.category}</div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-xs text-slate-400 font-medium flex items-center gap-1 mb-4">
                  <Calendar className="w-3.5 h-3.5" />{article.date}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-[var(--color-brand)] transition-colors line-clamp-2">{article.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-light line-clamp-3">{article.excerpt}</p>
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="text-xs font-medium text-slate-500 flex items-center gap-1"><Clock className="w-3.5 h-3.5"/>{article.readTime}</span>
                  <Link to="/contact" className="text-sm font-bold text-[var(--color-brand)] flex items-center gap-1 hover:gap-2 transition-all">
                    Read <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SEO Content Section for News */}
      <section className="bg-slate-100 py-10 lg:py-24 px-6">
        <div className="max-w-4xl mx-auto prose prose-slate lg:prose-lg">
          <h2 className="text-3xl font-black text-slate-900 mb-6">Why Stay Informed with Dromominds?</h2>
          <p className="text-slate-600 mb-4">
            In the highly regulated life sciences sector, compliance landscapes are never static. Regulatory agencies such as the FDA, EMA, and PMDA frequently update their guidelines on data integrity, Computer Software Assurance (CSA), and AI governance in GxP environments.
          </p>
          <p className="text-slate-600 mb-4">
            Our news and events section is meticulously curated by industry veterans to ensure QA directors, IT compliance heads, and executive leadership remain ahead of the curve. Whether it's an announcement of our latest integrations with platforms like Veeva and TrackWise, or interpretive guidance on new ISO standards, our press releases and industry updates are designed to inform strategy.
          </p>
          <ul className="text-slate-600 mb-4 space-y-2">
            <li><strong>Regulatory Shifts:</strong> Real-time interpretive news on FDA guidances, including 21 CFR Part 11 and Annex 11 updates.</li>
            <li><strong>Corporate Milestones:</strong> Updates on team expansions, strategic technological partnerships, and capability escalations.</li>
            <li><strong>Industry Events:</strong> Schedules for our upcoming appearances at global ISPE, DIA, and RAPS conferences.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};
