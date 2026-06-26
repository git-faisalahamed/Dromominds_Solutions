import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/CookieBanner';
import { ThemeProvider } from './contexts/ThemeContext';
import { ScrollToTopButton } from './components/ScrollToTopButton';

import { BookOpen } from 'lucide-react';
import { LeadMagnetModal } from './components/LeadMagnetModal';
import { FloatingContactButtons } from './components/FloatingContactButtons';
import { CsvAssessmentWizard } from './components/CsvAssessmentWizard';
import { RoiCalculatorModal } from './components/RoiCalculatorModal';

const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const ServicePage = lazy(() => import('./pages/ServicePage').then(module => ({ default: module.ServicePage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(module => ({ default: module.ContactPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(module => ({ default: module.AboutPage })));
const GenericPage = lazy(() => import('./pages/GenericPage').then(module => ({ default: module.GenericPage })));
const StudioPage = lazy(() => import('./pages/StudioPage').then(module => ({ default: module.StudioPage })));
const BlogListPage = lazy(() => import('./pages/BlogListPage').then(module => ({ default: module.BlogListPage })));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage').then(module => ({ default: module.BlogPostPage })));
const NewsPage = lazy(() => import('./pages/NewsPage').then(module => ({ default: module.NewsPage })));
const WebinarsPage = lazy(() => import('./pages/WebinarsPage').then(module => ({ default: module.WebinarsPage })));
const VideosPage = lazy(() => import('./pages/VideosPage').then(module => ({ default: module.VideosPage })));

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    document.documentElement.style.scrollBehavior = 'smooth';
  }, [pathname]);
  return null;
}

export default function App() {
  const [isLeadMagnetOpen, setIsLeadMagnetOpen] = React.useState(false);
  const [isCsvAssessmentOpen, setIsCsvAssessmentOpen] = React.useState(false);
  const [isRoiCalculatorOpen, setIsRoiCalculatorOpen] = React.useState(false);

  React.useEffect(() => {
    // Strategic Lead Magnet Popup: Automatically pop up after 25 seconds for upper-funnel capture
    /* Disabled per user request
    const timer = setTimeout(() => {
      const hasSeenMagnet = sessionStorage.getItem('dromominds_lead_magnet_seen');
      if (!hasSeenMagnet) {
        setIsLeadMagnetOpen(true);
        sessionStorage.setItem('dromominds_lead_magnet_seen', 'true');
      }
    }, 25000);

    // Simple exit intent detection
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        const hasSeenMagnet = sessionStorage.getItem('dromominds_lead_magnet_seen');
        if (!hasSeenMagnet) {
          setIsLeadMagnetOpen(true);
          sessionStorage.setItem('dromominds_lead_magnet_seen', 'true');
        }
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    */

    // Handle custom event for opening lead magnet from anywhere (e.g. Hero secondary CTA)
    const handleOpenMagnet = () => {
      setIsLeadMagnetOpen(true);
      sessionStorage.setItem('dromominds_lead_magnet_seen', 'true');
    };

    const handleOpenCsvAssessment = () => {
      setIsCsvAssessmentOpen(true);
    };

    const handleOpenRoiCalculator = () => {
      setIsRoiCalculatorOpen(true);
    };

    window.addEventListener('openLeadMagnet', handleOpenMagnet);
    window.addEventListener('openCsvAssessment', handleOpenCsvAssessment);
    window.addEventListener('openRoiCalculator', handleOpenRoiCalculator);

    return () => {
      // clearTimeout(timer);
      // document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('openLeadMagnet', handleOpenMagnet);
      window.removeEventListener('openCsvAssessment', handleOpenCsvAssessment);
      window.removeEventListener('openRoiCalculator', handleOpenRoiCalculator);
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[var(--color-brand)] selection:text-white transition-colors duration-300 dark:bg-slate-950 dark:text-gray-100">
         <LeadMagnetModal 
           isOpen={isLeadMagnetOpen} 
           onClose={() => setIsLeadMagnetOpen(false)} 
         />
         <CsvAssessmentWizard 
           isOpen={isCsvAssessmentOpen} 
           onClose={() => setIsCsvAssessmentOpen(false)} 
         />
         <RoiCalculatorModal
           isOpen={isRoiCalculatorOpen}
           onClose={() => setIsRoiCalculatorOpen(false)}
         />
         <Suspense fallback={<div className="flex h-screen items-center justify-center"><div className="w-8 h-8 rounded-full border-4 border-[var(--color-brand)] border-t-transparent animate-spin"></div></div>}>
           <Routes>
             {/* Sanity Studio Route - standalone full-screen */}
             <Route path="/studio/*" element={<StudioPage />} />
             
             {/* Main Frontend Website Routes */}
             <Route path="*" element={
               <>
                 <CookieBanner />
                 <Navigation />
                 <ScrollToTop />
                 <Routes>
                   <Route path="/" element={<Home onOpenLeadMagnet={() => setIsLeadMagnetOpen(true)} />} />
                   <Route path="/computerized-system-validation" element={<ServicePage overrideId="csv" />} />
                   <Route path="/computer-software-assurance" element={<ServicePage overrideId="csv" />} />
                   <Route path="/equipment-qualification" element={<ServicePage overrideId="equipment-qualification" />} />
                   <Route path="/data-integrity" element={<ServicePage overrideId="gxp-compliance" />} />
                   <Route path="/audit-remediation" element={<ServicePage overrideId="validation" />} />
                   <Route path="/qms-implementation" element={<ServicePage overrideId="qms" />} />
                   <Route path="/expertise/:id" element={<ServicePage />} />
                   <Route path="/contact" element={<ContactPage />} />
                   <Route path="/about" element={<AboutPage />} />
                   <Route path="/blog" element={<BlogListPage />} />
                   <Route path="/blog/:slug" element={<BlogPostPage />} />
                   <Route path="/resources/news" element={<NewsPage />} />
                   <Route path="/resources/webinars" element={<WebinarsPage />} />
                   <Route path="/resources/videos" element={<VideosPage />} />
                   <Route path="/resources" element={<GenericPage type="resource" />} />
                   <Route path="/resources/:id" element={<GenericPage type="resource" />} />
                   <Route path="/partners" element={<GenericPage type="partner" />} />
                   <Route path="/partners/:id" element={<GenericPage type="partner" />} />
                   <Route path="/privacy" element={<GenericPage type="legal" />} />
                   <Route path="/terms" element={<GenericPage type="legal" />} />
                   <Route path="*" element={<Home onOpenLeadMagnet={() => setIsLeadMagnetOpen(true)} />} />
                 </Routes>
                 <FloatingContactButtons />
                 <ScrollToTopButton />
                 <Footer />
               </>
             } />
           </Routes>
         </Suspense>
      </div>
    </ThemeProvider>
  );
}
