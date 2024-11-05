'use client';

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  DollarSign,
  TrendingUp,
  AlertCircle,
  ExternalLink,
} from "lucide-react";
import ResultsDisplay from "./(components)/results-display";
import AffiliateLinks from "./(components)/affiliate-links";
import Testimonial from "./(components)/testimonial";

function SubSwapROICalculator() {
  const [monthlySubscriptions, setMonthlySubscriptions] = useState("");
  const [investmentYears, setInvestmentYears] = useState("");
  const [annualReturn, setAnnualReturn] = useState("");
  const [chartData, setChartData] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const calculateROI = () => {
    const monthlyInvestment = parseFloat(monthlySubscriptions);
    const years = parseInt(investmentYears);
    const returnRate = parseFloat(annualReturn) / 100;

    let data = [];
    let totalInvestment = 0;
    let currentValue = 0;

    for (let i = 0; i <= years; i++) {
      totalInvestment = monthlyInvestment * 12 * i;
      currentValue = totalInvestment * Math.pow(1 + returnRate, i);

      data.push({
        year: i,
        value: currentValue,
        investment: totalInvestment,
      });
    }

    setChartData(data);
    setShowResults(true);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      calculateROI();
    }
  };

  return (
    <Card className="w-full max-w-3xl mx-auto transform transition-all duration-300 hover:shadow-lg">
      <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50">
        <CardTitle className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent transition-all duration-300 hover:scale-[1.01]">
          SubSwap ROI Calculator
        </CardTitle>
        <CardDescription className="text-emerald-700 opacity-75">
          Visualize your potential financial growth by redirecting subscription
          costs to investments.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2 group">
            <Label
              htmlFor="monthlySubscriptions"
              className="text-emerald-700 font-medium transition-colors duration-200 group-hover:text-teal-600"
            >
              Monthly Subscriptions ($)
            </Label>
            <Input
              type="number"
              value={monthlySubscriptions}
              onChange={(e) => setMonthlySubscriptions(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="e.g., 50"
              className="border-emerald-200 transition-all duration-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 hover:border-emerald-300"
            />
          </div>
          <div className="space-y-2 group">
            <Label
              htmlFor="investmentYears"
              className="text-emerald-700 font-medium transition-colors duration-200 group-hover:text-teal-600"
            >
              Investment Period (Years)
            </Label>
            <Input
              type="number"
              value={investmentYears}
              onChange={(e) => setInvestmentYears(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="e.g., 10"
              className="border-emerald-200 transition-all duration-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 hover:border-emerald-300"
            />
          </div>
          <div className="space-y-2 group">
            <Label
              htmlFor="annualReturn"
              className="text-emerald-700 font-medium transition-colors duration-200 group-hover:text-teal-600"
            >
              Expected Annual Return (%)
            </Label>
            <Input
              type="number"
              value={annualReturn}
              onChange={(e) => setAnnualReturn(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="e.g., 7"
              className="border-emerald-200 transition-all duration-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 hover:border-emerald-300"
            />
          </div>
        </div>
        <Button
          onClick={calculateROI}
          className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold py-4 rounded-lg transition-all duration-300 hover:from-emerald-600 hover:to-teal-600 hover:shadow-md transform hover:scale-[1.02] active:scale-[0.98]"
        >
          Calculate ROI
        </Button>

        {showResults && (
          <>
            <ResultsDisplay chartData={chartData} />
            <AffiliateLinks />
            <Testimonial />
          </>
        )}
      </CardContent>
      <CardFooter className="flex justify-between items-center bg-gradient-to-r from-emerald-50 to-teal-50 p-4 rounded-b-lg">
        <div className="flex items-center group transition-all duration-200 hover:scale-105">
          <DollarSign className="w-5 h-5 mr-2 text-emerald-600 group-hover:text-teal-600 transition-colors duration-200" />
          <span className="text-sm font-medium text-emerald-700 group-hover:text-teal-700 transition-colors duration-200">
            Potential for significant growth
          </span>
        </div>
        <div className="flex items-center group transition-all duration-200 hover:scale-105">
          <TrendingUp className="w-5 h-5 mr-2 text-emerald-600 group-hover:text-teal-600 transition-colors duration-200" />
          <span className="text-sm font-medium text-emerald-700 group-hover:text-teal-700 transition-colors duration-200">
            Long-term investment strategy
          </span>
        </div>
      </CardFooter>
    </Card>
  );
}

export default SubSwapROICalculator;