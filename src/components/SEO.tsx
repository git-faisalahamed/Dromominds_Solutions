import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
  image?: string;
}

export function SEO({
  title = "Dromominds Solutions",
  description = "Providing structured validation, qualification, and regulatory support services aligned with global GxP, FDA, and ISO requirements.",
  keywords = "GxP, FDA compliance, ISO, validation, regulatory support, quality management",
  url = "https://dromominds.in",
  image = "https://dromominds.in/wp-content/uploads/2025/09/logo2.png",
}: SEOProps) {
  const fullTitle = title === "Dromominds Solutions" ? title : `${title} | Dromominds Solutions`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
