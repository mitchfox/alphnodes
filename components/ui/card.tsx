'use client';

import React, { useEffect, useRef } from "react";
import ApexCharts from 'apexcharts';
import '../clusters.css';

const getChartOptions = (data: number[], labels: string[], id: string) => {
  return {
    series: data,
    colors: [
      "#ef4444", "#D97706", "#F59E0B", "#84CC16", "#4ADE80", "#22C55E", "#10B981",
      "#1D4ED8", "#2563EB", "#3B82F6", "#7C3AED", "#9333EA", "#C026D3", "#E74694",
      "#EC4899", "#f87171", "#F97316", "#FB923C", "#FBBF24", "#FACC15"
    ],
    chart: {
      height: 320,
      width: "100%",
      type: "donut",
    },
    stroke: {
      colors: ["transparent"],
      lineCap: "",
    },
    tooltip: {
      fillSeriesColor: false,
      theme: "light"
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              show: true,
              color: "#fff",
              fontFamily: "Inter, sans-serif",
              offsetY: 20,
            },
            total: {
              showAlways: true,
              show: true,
              label: "Total",
              color: "#64758B",
              fontFamily: "Inter, sans-serif",
              formatter: function (w: any) {
                if (id === '1') {
                  const sum = w.globals.seriesTotals.reduce((a: number, b: number) => a + b, 0);
                  return sum;
                } else {
                  return labels.length;
                }
              },
            },
            value: {
              show: true,
              color: "#64758B",
              fontFamily: "Inter, sans-serif",
              offsetY: -20,
              formatter: function (val: number, opts: any) {
                const seriesIndex = opts.seriesIndex;
                const seriesValue = opts?.w?.globals?.series?.[seriesIndex];
                const labelValue = labels?.[seriesIndex]; // Use plain text labels here

                if (seriesValue !== undefined && labelValue !== undefined) {
                  return `${seriesValue} (${labelValue})`;
                }
                return val; // Fallback if the values are undefined
              },
            },
          },
          size: "80%",
        },
      },
    },
    grid: {
      padding: {
        top: -2,
      },
    },
    color: "#64758B",
    labels: labels, // Use plain text labels for display
    dataLabels: {
      enabled: false,
      formatter: function (val: number, opts: any) {
        return opts.w.globals.labels[opts.seriesIndex];
      },
      style: {
        colors: ['#fff']
      },
    },
    legend: {
      position: "bottom",
      color: "#64758B",
      fontSize: "14px",
      fontFamily: "Inter, sans-serif",
      labels: {
        colors: "#64758B",
      },
      markers: {
        width: 10,
        height: 10,
        radius: 10,
        color: "#64758B",
      },
    },
    yaxis: {
      color: "#64758B",
      labels: {
        formatter: function (value: number) {
          return value;
        },
      },
    },
    xaxis: {
      labels: {
        formatter: function (value: number) {
          return value;
        },
      },
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
  };
};




interface CardProps {
  item: {
    id: string;
    title: string;
    description: string;
    data: number[];
    labels: string[];
    comingSoon?: boolean;
  };
}

const Card: React.FC<CardProps> = ({ item }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let chart: ApexCharts | null = null;

    if (chartRef.current) {
      const options = getChartOptions(item.data, item.labels, item.id); // Convert item.id to a string
      chart = new ApexCharts(chartRef.current, options);
      chart.render();
    }

    return () => {
      if (chart) {
        chart.destroy();
      }
    };
  }, [item.data, item.labels]);

  return (
    <div className="p-4 w-full max-w-lg bg-white rounded-lg shadow dark:bg-neutral-800 md:p-6" style={{ margin: 'auto' }}>
      <div className="flex justify-between mb-3">
        <div className="flex justify-center items-center">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white pe-1">{item.title}</h5>
        </div>
      </div>
      <div className="py-6" id="donut-chart" style={{  }} ref={chartRef}></div>
    </div>
  );
};

export default Card;
