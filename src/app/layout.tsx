'use client';

import React from "react";
import "./globals.css";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta name='impact-site-verification' value='51c7c560-962e-4d91-ad8e-eec6a297bf53' />
      </head>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-[#f8f9fa] py-12 px-4 sm:px-6 lg:px-8 font-['Inter',_sans-serif]">
          {children}
        </div>
      </body>
    </html>
  );
}