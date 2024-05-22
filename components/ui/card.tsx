'use client';

import React, { useEffect, useRef } from "react";
import ApexCharts from 'apexcharts';
// import '../../components/styles.css';

const getChartOptions = (data: number[], labels: string[], id: string) => {
  console.log(labels);
  return {
    series: data,
    colors: [
      // "#ef4444", // red-600
      // "#D97706", // amber-600
      // "#F59E0B", // yellow-500
      // "#84CC16", // lime-500
      // "#4ADE80", // green-300
      // "#22C55E", // green-400
      // "#10B981", // green-500
      // "#1D4ED8", // blue-700
      // "#2563EB", // blue-600
      // "#3B82F6", // blue-500
      // "#7C3AED", // purple-700
      // "#9333EA", // purple-600
      // "#C026D3", // purple-500
      // "#E74694", // custom pink
      // "#EC4899", // pink-500
      // "#f87171", // red-500
      // "#F97316", // orange-500
      // "#FB923C", // orange-400
      // "#FBBF24", // amber-400
      // "#FACC15"  // yellow-400
      "#49DE80", // Bright Green
      "#3EB56C", // Dark Green
      "#32985A", // Forest Green
      "#6FE5A0", // Light Green
      "#5CEB90", // Spring Green
      "#3D5C48", // Olive Green
      "#8CC6A3", // Sage Green
      "#41C97A", // Medium Sea Green
      // "#FFDAB9", // Light Orange
      "#FFCBA4", // Peach
      "#FF8C00", // Dark Orange
      "#FF7F50", // Coral
      "#FF4500", // Orange Red
      "#DAA520", // Goldenrod
      "#B8860B", // Dark Goldenrod
      "#D3D3D3", // Light Gray
      "#C0C0C0", // Silver
      "#A9A9A9", // Dark Gray
      "#696969", // Dim Gray
      "#708090", // Slate Gray


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
              color: "#fff",
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
    color: "#96A5BA",
    labels: labels, // Use country names as labels
    dataLabels: {
      
      enabled: false,
    },
    legend: {
      position: "bottom",
      color: "#96A5BA",
      fontSize: "14px",
      fontFamily: "Inter, sans-serif",
      labels: {
        colors: "#96A5BA",
      },
      markers: {
        width: 10,
        height: 10,
        radius: 10,
        color: "#96A5BA",
      },
    },
    yaxis: {
      color: "#96A5BA",
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
      console.log(item.labels);
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
    <div className="max-w-md w-full bg-white rounded-lg shadow dark:bg-neutral-800 p-4 md:p-6" style={{ margin: 'auto' }}>
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
