'use client';

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Wallet, TrendingUp, CircleDollarSign, ChevronDown, ChevronUp } from "lucide-react";

function AffiliateLinks() {
  // Track open/closed state for each category
  const [openCategories, setOpenCategories] = useState<Record<number, boolean>>({});

  const toggleCategory = (index: number) => {
    setOpenCategories(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const categories = [
    {
      title: "Manage Your Money",
      description: "Take control of your finances with these essential money management tools",
      links: [
        {
          name: "Rocket Money",
          description: "Take control of your subscriptions and save more",
          url: "https://rocketmoney.com"
        },
        {
          name: "SoFi",
          description: "All-in-one platform for banking & loans",
          url: "https://www.sofi.com/referral-program/"
        },
        {
          name: "Wise",
          description: "Smart international money transfers",
          url: "https://wise.com/partner/influencers"
        },
        {
          name: "Quicken",
          description: "Complete financial management software",
          url: "https://www.quicken.com/affiliate"
        }
      ],
      icon: <Wallet className="w-5 h-5" />
    },
    {
      title: "Start Investing",
      description: "Begin your wealth-building journey with trusted investment platforms",
      links: [
        {
          name: "Robinhood",
          description: "Commission-free stock investing",
          url: "https://affiliates.robinhood.com/"
        },
        {
          name: "Acorns",
          description: "Invest spare change automatically",
          url: "https://www.acorns.com/learn/acorns/acorns-referrals/"
        }
      ],
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      title: "Track Your Progress",
      description: "Monitor and improve your financial health with these tools",
      links: [
        {
          name: "Credit Karma",
          description: "Free credit monitoring & recommendations",
          url: "https://app.impact.com/campaign-promo-signup/Credit-Karma-New-Members.brand"
        },
        {
          name: "CJ Affiliate",
          description: "Access premium financial products",
          url: "https://www.cj.com/join"
        }
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
                        <CardTitle className="text-[#007bff] text-lg">
                          {link.name}
                        </CardTitle>
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