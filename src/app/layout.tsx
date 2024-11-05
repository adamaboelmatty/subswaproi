'use client';

import React from "react";
import "./globals.css";

export default function Layout({ children }) {
  return (
    <html>
        <body>
            <div
      className="min-h-screen flex items-center justify-center bg-[#f8f9fa] py-12 px-4 sm:px-6 lg:px-8 font-['Inter',_sans-serif]"
    >
      {children}
    </div>
        </body>
    </html>

  );
}
