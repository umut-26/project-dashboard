"use client"

import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [{ month: "january", desktop: 1260, mobile: 570 }]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function Component() {
  const totalVisitors = chartData[0].desktop + chartData[0].mobile;

  return (
    <Card className="flex flex-col p-2 mr-4"> {/* Sağ boşluk eklendi */}
      <CardHeader className="items-center pb-1"> 
        <CardTitle className="text-xs">Radial Chart - Stacked</CardTitle> 
        <CardDescription className="text-[10px]">January - June 2024</CardDescription> 
      </CardHeader>
      <CardContent className="flex flex-1 items-center pb-1"> 
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-[100px]" 
        >
          <RadialBarChart
            data={chartData}
            endAngle={180}
            innerRadius={40} 
            outerRadius={80} 
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 8} 
                          className="fill-foreground text-sm font-bold" 
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 6} 
                          className="fill-muted-foreground text-[10px]" 
                        >
                          Visitors
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
            <RadialBar
              dataKey="desktop"
              stackId="a"
              cornerRadius={5}
              fill="var(--color-desktop)"
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="mobile"
              fill="var(--color-mobile)"
              stackId="a"
              cornerRadius={5}
              className="stroke-transparent stroke-2"
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-0.5 text-[10px]"> 
      </CardFooter>
    </Card>
  );
}
