import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Cookie } from 'lucide-react';

export const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem('cookie_consent');
    if (!hasConsented) {
      const timer = setTimeout(() => {
        setVisible(true);
      }, 1500); // delay before showing
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie_consent', 'true');
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 md:bottom-6 md:left-6 md:right-auto md:max-w-sm z-[100] bg-white border border-gray-200 shadow-2xl md:rounded-2xl overflow-hidden"
        >
          <div className="p-6 relative">
            <button onClick={() => setVisible(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition">
              <X className="w-5 h-5" />
            </button>
            <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mb-4">
              <Cookie className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">We value your privacy</h3>
            <p className="text-sm font-light text-gray-600 mb-6 leading-relaxed">
              We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
            </p>
            <div className="flex gap-3">
              <button onClick={accept} className="flex-1 bg-[var(--color-brand)] text-white px-4 py-2.5 rounded-xl font-bold hover:bg-[var(--color-brand-hover)] transition text-sm">
                Accept All
              </button>
              <button onClick={() => setVisible(false)} className="flex-1 bg-gray-100 text-gray-900 px-4 py-2.5 rounded-xl font-bold hover:bg-gray-200 transition text-sm">
                Reject
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
