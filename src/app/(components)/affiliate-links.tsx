'use client';

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Wallet, TrendingUp, CircleDollarSign, ChevronDown, ChevronUp, Quote } from "lucide-react";

function AffiliateLinks() {
  const [openCategories, setOpenCategories] = useState<Record<number, boolean>>({});

  const toggleCategory = (index: number) => {
    setOpenCategories(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Company logos as SVG components
  const CompanyLogos = {
    SoFi: () => (
      <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
        <path d="M7 20.2c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2C12.9 33.4 7 27.5 7 20.2z" fill="#054742"/>
        <path d="M16.5 16.7v7h2.8v-7h-2.8zm4.2 0v7h2.8v-7h-2.8zm-8.4 0v7h2.8v-7h-2.8z" fill="white"/>
      </svg>
    ),
    Chime: () => (
      <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="20" fill="#00C1B3"/>
        <path d="M12 20.5l6 6 10-12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    CreditKarma: () => (
      <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="20" fill="#FF4B2B"/>
        <path d="M20 12v16M12 20h16" stroke="white" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    )
  };

  const categories = [
    {
      title: "Manage Your Money",
      description: "Take control of your finances with these essential money management tools",
      links: [
        {
          name: "SoFi",
          description: "All-in-one platform for checking & savings accounts",
          url: "https://www.sofi.com/invite/money?gcp=9c4ddc1e-fb3d-4898-bba7-b4b75dff80dd&isAliasGcp=false",
          logo: <CompanyLogos.SoFi />
        },
        {
          name: "Chime",
          description: "Smart international money transfers",
          url: "https://chime.com/r/adamaboelmatty",
          logo: <CompanyLogos.Chime />
        },
      ],
      icon: <Wallet className="w-5 h-5" />
    },
    {
      title: "Track Your Progress",
      description: "Monitor and improve your financial health with these tools",
      links: [
        {
          name: "Credit Karma",
          description: "Free credit monitoring & recommendations",
          url: "https://app.impact.com/campaign-promo-signup/Credit-Karma-New-Members.brand",
          logo: <CompanyLogos.CreditKarma />
        },
      ],
      icon: <CircleDollarSign className="w-5 h-5" />
    }
  ];

  return (
    <div className="mt-8 space-y-8">
      <h3 className="text-xl font-semibold text-[#28a745]">
        Optimize Your Finances
      </h3>
      <div className="space-y-6">
        {categories.map((category, index) => (
          <Card 
            key={index} 
            className="overflow-hidden border-t-4 border-t-[#28a745]"
          >
            <CardHeader 
              className="bg-gradient-to-r from-emerald-50 to-transparent cursor-pointer hover:bg-emerald-50 transition-all duration-200"
              onClick={() => toggleCategory(index)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-[#28a745] bg-opacity-10">
                    {category.icon}
                  </div>
                  <div>
                    <CardTitle className="text-[#007bff] text-xl">
                      {category.title}
                    </CardTitle>
                    <p className="text-gray-600 text-sm mt-1">
                      {category.description}
                    </p>
                  </div>
                </div>
                <div className="text-[#28a745]">
                  {openCategories[index] ? (
                    <ChevronUp className="w-6 h-6" />
                  ) : (
                    <ChevronDown className="w-6 h-6" />
                  )}
                </div>
              </div>
            </CardHeader>
            {openCategories[index] && (
              <CardContent className="pt-6 transition-all duration-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.links.map((link, linkIndex) => (
                    <Card 
                      key={linkIndex} 
                      className="border border-gray-200 hover:border-[#28a745] transition-colors duration-200"
                    >
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          {link.logo}
                          <CardTitle className="text-[#007bff] text-lg">
                            {link.name}
                          </CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm mb-4 text-gray-600">
                          {link.description}
                        </p>
                        <Button
                          className="w-full bg-[#28a745] hover:bg-[#218838] transition-all duration-200 hover:shadow-md"
                          onClick={() => window.open(link.url, "_blank")}
                        >
                          Learn More{" "}
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}

export default AffiliateLinks;