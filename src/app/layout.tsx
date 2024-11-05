'use client';

import React from "react";
import "./globals.css";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex items-center justify-center bg-[#f8f9fa] py-12 px-4 sm:px-6 lg:px-8 font-['Inter',_sans-serif]">
          {children}
        </div>
      </body>
    </html>
  );
}