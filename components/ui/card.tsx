'use client';

import React, { useEffect, useRef } from "react";
import ApexCharts from 'apexcharts';

const getChartOptions = (data: number[], labels: string[], id: string) => {
  console.log(labels);
  return {
    series: data,
    // colors: [
    //   "#86efac", // green-300
    //   "#4ADE80", // green-400
    //   "#22C55E", // green-500
    //   "#16A34A", // green-600
    //   "#15803D", // green-700
    //   "#166534", // green-800
    //   "#14532d", // green-900
    //   "#60A5FA", // blue-400
    //   "#3B82F6", // blue-500
    //   "#2563EB", // blue-600
    //   "#1D4ED8", // blue-700
    //   "#3F83F8", // custom blue
    //   "#A5B4FC",  // indigo-300
    //   "#FDBA74", // orange-300
    //   "#FB923C", // orange-400
    //   "#F97316", // orange-500
    // ]
    colors: [
      "#ef4444", // red-600
      "#D97706", // amber-600
      "#F59E0B", // yellow-500
      "#84CC16", // lime-500
      "#4ADE80", // green-300
      "#22C55E", // green-400
      "#10B981", // green-500
      "#1D4ED8", // blue-700
      "#2563EB", // blue-600
      "#3B82F6", // blue-500
      "#7C3AED", // purple-700
      "#9333EA", // purple-600
      "#C026D3", // purple-500
      "#E74694", // custom pink
      "#EC4899", // pink-500
      "#f87171", // red-500
      "#F97316", // orange-500
      "#FB923C", // orange-400
      "#FBBF24", // amber-400
      "#FACC15"  // yellow-400
    ]
    
    ,


    chart: {
      height: 320,
      width: "100%",
      type: "donut",
    },
    stroke: {
      colors: ["transparent"],
      lineCap: "",
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              show: true,
              color: "#96A5BA",
              fontFamily: "Inter, sans-serif",
              offsetY: 20,
            },
            total: {
              showAlways: true,
              show: true,
              label: "Total",
              color: "#96A5BA",
              fontFamily: "Inter, sans-serif",
              formatter: function (w: any) {


                if (id === '1') {
                  const sum = w.globals.seriesTotals.reduce((a: number, b: number) => {
                    return a + b;
                  }, 0);
                  return sum;
                
                } else {
                  return labels.length
                }
                
                
              },
            },
            value: {
              show: true,
              color: "#96A5BA",
              fontFamily: "Inter, sans-serif",
              offsetY: -20,
              formatter: function (value: number) {
                return value;
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
    labels: labels, // Use country names as labels
    color: "#96A5BA",
    dataLabels: {
      color: "#96A5BA",
      enabled: false,
    },
    legend: {
      position: "bottom",
      fontFamily: "Inter, sans-serif",
    },
    yaxis: {
      color: "#96A5BA",
      labels: {
        color: "#96A5BA",
        formatter: function (value: number) {
          return value;
        },
      },
    },
    xaxis: {
      color: "#96A5BA",
      labels: {
        color: "#96A5BA",
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
    id: number;
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
      console.log(item.labels);
      const options = getChartOptions(item.data, item.labels, item.id);
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
    <div className="max-w-md w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
      <div className="flex justify-between mb-3">
        <div className="flex justify-center items-center">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white pe-1">{item.title}</h5>
        </div>
      </div>

      <div className="py-6" id="donut-chart" ref={chartRef}></div>
    </div>
  );
};

export default Card;
