// app/layout.tsx
import React from 'react';
import type { Metadata } from 'next';
import "./globals.css";
import { Toaster } from 'sonner';

export const metadata: Metadata = {
  metadataBase: new URL('https://subswaproi.com'),
  title: {
    default: 'SubSwap ROI | Calculate Your Subscription Savings Investment Potential',
    template: '%s | SubSwap ROI'
  },
  description: 'Transform your subscription costs into investment opportunities. Calculate potential returns and optimize your spending with SubSwap ROI calculator.',
  keywords: [
    'subscription management',
    'ROI calculator',
    'investment calculator',
    'financial planning',
    'subscription savings',
    'ETF investment',
    'personal finance'
  ],
  authors: [{ name: 'Adam Aboelmatty' }],
  creator: 'Aboelmatty LLC',
  publisher: 'Aboelmatty LLC',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    siteName: 'SubSwap ROI',
    title: 'SubSwap ROI Calculator',
    description: 'See how much your subscription savings could grow through smart investments',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'SubSwap ROI Calculator Preview'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SubSwap ROI Calculator',
    description: 'Calculate your potential investment returns from subscription savings',
    creator: '@yourtwitter',
    images: ['/twitter-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
      },
    ],
  },
  manifest: '/site.webmanifest',
}

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#28a745" />
        <link rel="canonical" href="https://subswaproi.com" />

        {/* Plausible Analytics */}
        <script
          defer
          data-domain="subswaproi.com"
          src="https://plausible.io/js/script.file-downloads.hash.outbound-links.pageview-props.revenue.tagged-events.js"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }`,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#f8f9fa] font-['Inter',_sans-serif]">
        <div className="flex-1 flex items-center justify-center">
          {children}
        </div>
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}