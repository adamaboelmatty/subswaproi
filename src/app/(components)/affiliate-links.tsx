'use client';

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

function AffiliateLinks() {
  return (
    <div className="mt-8 space-y-4">
      <h3
        className="text-lg font-semibold text-[#28a745]"
      >
        Optimize Your Finances
      </h3>
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-[#007bff]">
              Manage Subscriptions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-4">
              Take control of your subscriptions and save more with Rocket
              Money.
            </p>
            <Button
              className="w-full bg-[#28a745] hover:bg-[#218838]"
              onClick={() => window.open("https://rocketmoney.com", "_blank")}
            >
              Try Rocket Money{" "}
              <ExternalLink
                className="w-4 h-4 ml-2"
              />
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-[#007bff]">
              Start Investing
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-4">
              Begin your investment journey with our trusted financial partner.
            </p>
            <Button
              className="w-full bg-[#28a745] hover:bg-[#218838]"
              onClick={() =>
                window.open("https://example-investment-platform.com", "_blank")
              }
            >
              Open an Account{" "}
              <ExternalLink
                className="w-4 h-4 ml-2"
              />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default AffiliateLinks;
