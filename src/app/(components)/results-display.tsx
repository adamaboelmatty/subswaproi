'use client';

import React from "react";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Legend } from "recharts";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  BarChart3,
  List,
  AlertCircle,
  DollarSign,
  TrendingUp,
  PiggyBank,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ChartDataPoint {
  year: number;
  value: number;
  investment: number;
}

// Define the props interface for the component
interface ResultsDisplayProps {
  chartData: ChartDataPoint[];
}

function ResultsDisplay({ chartData }: ResultsDisplayProps) {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(value);
  };

  const lastDataPoint = chartData[chartData.length - 1];

  return (
    <div className="space-y-8">
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <Card
          className="bg-gradient-to-br from-[#28a745] to-[#218838] text-white"
        >
          <CardContent className="p-6">
            <h3
              className="text-lg font-semibold mb-2 flex items-center"
            >
              <DollarSign
                className="w-5 h-5 mr-2"
              />
              Projected Value
            </h3>
            <p className="text-3xl font-bold">
              {formatCurrency(lastDataPoint.value)}
            </p>
            <p className="text-sm mt-2">
              After {chartData.length - 1} Years
            </p>
          </CardContent>
        </Card>

        <Card
          className="bg-gradient-to-br from-[#007bff] to-[#0056b3] text-white"
        >
          <CardContent className="p-6">
            <h3
              className="text-lg font-semibold mb-2 flex items-center"
            >
              <PiggyBank
                className="w-5 h-5 mr-2"
              />
              Total Investment
            </h3>
            <p className="text-3xl font-bold">
              {formatCurrency(lastDataPoint.investment)}
            </p>
            <p className="text-sm mt-2">
              Cumulative Contributions
            </p>
          </CardContent>
        </Card>

        <Card
          className="bg-gradient-to-br from-[#17a2b8] to-[#117a8b] text-white"
        >
          <CardContent className="p-6">
            <h3
              className="text-lg font-semibold mb-2 flex items-center"
            >
              <TrendingUp
                className="w-5 h-5 mr-2"
              />
              Total Gain
            </h3>
            <p className="text-3xl font-bold">
              {formatCurrency(lastDataPoint.value - lastDataPoint.investment)}
            </p>
            <p className="text-sm mt-2">
              Investment Growth
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <h3
          className="text-2xl font-semibold mb-4 text-[#007bff]"
        >
          Potential Growth Visualization
        </h3>
        <Tabs defaultValue="graph">
          <TabsList
            className="grid w-full grid-cols-2"
          >
            <TabsTrigger
              value="graph"
              className="text-[#007bff]"
            >
              <BarChart3
                className="w-4 h-4 mr-2"
              />
              Graph View
            </TabsTrigger>
            <TabsTrigger
              value="table"
              className="text-[#007bff]"
            >
              <List className="w-4 h-4 mr-2" />
              Table View
            </TabsTrigger>
          </TabsList>
          <TabsContent value="graph">
            <ChartContainer
              config={{}}
              className="h-[400px] w-full"
            >
              <AreaChart
                data={chartData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                />

                <XAxis dataKey="year" />
                <YAxis
                  tickFormatter={(value) => formatCurrency(value)}
                />

                <ChartTooltip
                  content={<CustomTooltip />}
                />

                <Area
                  type="monotone"
                  dataKey="value"
                  name="Projected Value"
                  stroke="#28a745"
                  fill="#28a745"
                  fillOpacity={0.3}
                />

                <Area
                  type="monotone"
                  dataKey="investment"
                  name="Total Investment"
                  stroke="#007bff"
                  fill="#007bff"
                  fillOpacity={0.3}
                />

                <Legend />
              </AreaChart>
            </ChartContainer>
            <div
              className="mt-4 flex justify-center space-x-4"
            >
              <div className="flex items-center">
                <div
                  className="w-4 h-4 bg-[#28a745] mr-2"
                ></div>
                <span>Projected Value</span>
              </div>
              <div className="flex items-center">
                <div
                  className="w-4 h-4 bg-[#007bff] mr-2"
                ></div>
                <span>Total Investment</span>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="table">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Year</TableHead>
                  <TableHead>
                    Total Investment
                  </TableHead>
                  <TableHead>
                    Projected Value
                  </TableHead>
                  <TableHead>Gain</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {chartData.map((data) => (
                  <TableRow key={data.year}>
                    <TableCell>
                      {data.year}
                    </TableCell>
                    <TableCell>
                      {formatCurrency(data.investment)}
                    </TableCell>
                    <TableCell>
                      {formatCurrency(data.value)}
                    </TableCell>
                    <TableCell>
                      {formatCurrency(data.value - data.investment)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
        </Tabs>
      </div>

      <div
        className="bg-[#f8f9fa] p-6 rounded-lg shadow-md"
      >
        <h4
          className="text-xl font-semibold flex items-center mb-3 text-[#007bff]"
        >
          <AlertCircle className="w-6 h-6 mr-2" />
          Important Note
        </h4>
        <p
          className="text-sm text-[#6c757d] leading-relaxed"
        >
          This calculator provides an estimate based on consistent monthly
          investments and a fixed annual return rate. Actual results may vary
          due to market fluctuations and other factors. It&as always recommended
          to consult with a financial advisor for personalized investment
          advice.
        </p>
      </div>
    </div>
  );
}

function CustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    const formatCurrency = (value) => {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(value);
    };

    return (
      <div
        className="bg-white border border-[#28a745] p-4 rounded-lg shadow-lg"
      >
        <p
          className="font-semibold text-[#007bff]"
        >
          Year {label}
        </p>
        <p className="text-sm">
          Investment: {formatCurrency(payload[1].value)}
        </p>
        <p className="text-sm">
          Projected Value: {formatCurrency(payload[0].value)}
        </p>
        <p
          className="text-sm text-[#28a745] font-medium"
        >
          Gain: {formatCurrency(payload[0].value - payload[1].value)}
        </p>
      </div>
    );
  }

  return null;
}

export default ResultsDisplay;
