'use client';

import React, { useState, KeyboardEvent, ChangeEvent, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  DollarSign,
  TrendingUp,
  HeartHandshake,
} from "lucide-react";
import ResultsDisplay from "./(components)/results-display";
import AffiliateLinks from "./(components)/affiliate-links";
import Testimonial from "./(components)/testimonial";

interface ChartDataPoint {
  year: number;
  value: number;
  investment: number;
}

function SubSwapROICalculator() {
  const [monthlySubscriptions, setMonthlySubscriptions] = useState<string>("");
  const [investmentYears, setInvestmentYears] = useState<string>("");
  const [annualReturn, setAnnualReturn] = useState<string>("");
  const [chartData, setChartData] = useState<ChartDataPoint[]>([]);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [userCount, setUserCount] = useState<number>(1345);
  const [totalGains, setTotalGains] = useState<number>(57531);

  useEffect(() => {
    const avgMonthlySubscription = 50;
    const avgAnnualReturn = 0.07;
    const avgInvestmentYears = 5;

    const calculateProjectedGains = () => {
      const monthlyInvestment = avgMonthlySubscription;
      const totalInvestment = monthlyInvestment * 12 * avgInvestmentYears;
      const projectedValue = totalInvestment * Math.pow(1 + avgAnnualReturn, avgInvestmentYears);
      const gains = Math.floor(projectedValue - totalInvestment);
      return gains;
    };

    const interval = setInterval(() => {
      setUserCount(prev => prev + 1);
      setTotalGains(prev => prev + calculateProjectedGains());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const calculateROI = () => {
    const monthlyInvestment = parseFloat(monthlySubscriptions);
    const years = parseInt(investmentYears);
    const returnRate = parseFloat(annualReturn) / 100;

    const data: ChartDataPoint[] = [];
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

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      calculateROI();
    }
  };

  const handleInputChange = (setter: (value: string) => void) => (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setter(event.target.value);
  };

  return (
    <div className="flex flex-col items-center">
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
                id="monthlySubscriptions"
                type="number"
                value={monthlySubscriptions}
                onChange={handleInputChange(setMonthlySubscriptions)}
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
                id="investmentYears"
                type="number"
                value={investmentYears}
                onChange={handleInputChange(setInvestmentYears)}
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
                id="annualReturn"
                type="number"
                value={annualReturn}
                onChange={handleInputChange(setAnnualReturn)}
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
        <div className="grid md:grid-cols-2 gap-6 px-6 mb-6">
          <Card className="bg-emerald-50 border-none hover:shadow-md transition-shadow duration-200">
            <div className="p-8">
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-[#28a745] bg-opacity-10 rounded-full">
                    <HeartHandshake className="w-6 h-6 text-[#28a745]" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">Users Helped</h3>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-4xl font-bold text-[#28a745]">
                    {Math.floor(userCount).toLocaleString()}
                  </span>
                  <span className="text-gray-600">optimizing spend</span>
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-emerald-50 border-none hover:shadow-md transition-shadow duration-200">
            <div className="p-8">
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-[#28a745] bg-opacity-10 rounded-full">
                    <TrendingUp className="w-6 h-6 text-[#28a745]" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">Total Gains</h3>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-4xl font-bold text-[#28a745]">
                    ${Math.floor(totalGains).toLocaleString()}
                  </span>
                  <span className="text-gray-600">from investments</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Card>

      {/* Product Hunt Badge - Outside the card */}
      <div className="mt-8 mb-8">
        <a 
          href="https://www.producthunt.com/posts/subswaproi-calculator?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-subswaproi&#0045;calculator" 
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-90 transition-opacity"
        >
          <img 
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=614883&theme=light" 
            alt="SubSwapROI Calculator - Reimagine Subscription Costs as Investments with SubSwapROI | Product Hunt"
            width="250" 
            height="54" 
            style={{ width: '250px', height: '54px' }}
          />
        </a>
      </div>
    </div>
  );
}

export default SubSwapROICalculator;