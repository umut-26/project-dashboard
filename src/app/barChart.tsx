"use client";
import { CardFooter } from "@/components/ui/card";
import { colors } from "@/theme/colors";

import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", desktop: 15 },
  { month: "February", desktop: 5 },
  { month: "March", desktop: 4 },
  { month: "April", desktop: 8 },
  { month: "May", desktop: 11 },
  { month: "June", desktop: 9 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: colors.blue,
  },
} satisfies ChartConfig;

export function Component() {
  return (
    <Card className="h-[220px] flex flex-col text-xs p-2 mt-4 mr-4" style={{ backgroundColor: `${colors.lightBlue}40` }}> {/* Arka plan rengi theme ile değiştirildi */}
      <CardHeader>
        <CardTitle className="text-sm" style={{ color: colors.darkBlue }}>Bar Chart - Label</CardTitle> {/* Başlık rengi theme ile değiştirildi */}
        <CardDescription className="text-xs">January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 h-full">
        <ChartContainer config={chartConfig} className="h-full">
          <BarChart data={chartData} margin={{ top: 0 }}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={8}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Bar dataKey="desktop" fill={colors.blue} radius={6}>
              <LabelList position="top" offset={10} className="fill-foreground" fontSize={10} />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-1 text-xs"></CardFooter>
    </Card>
  );
}