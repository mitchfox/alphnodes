'use client';

import React, { useEffect, useState, useRef } from 'react';
import ApexCharts from 'apexcharts';
import 'tailwindcss/tailwind.css';

interface DataPoint {
  count: number;
  createdAt: string;
}

const getChartOptions = (seriesData: { x: string; y: number }[]) => {
  return {
    series: [{
      name: 'Nodes',
      data: seriesData
    }],
    chart: {
      type: 'area',
      height: 350,
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      type: 'datetime',
      categories: seriesData.map(data => data.x),
      labels:{
        style:{
          colors: '#64758B',
        }
      }
    },
    yaxis: {
      min: 0,
      labels:{
        style:{
          colors: '#64758B',
        }
      }
    },
    tooltip: {
      x: {
        format: 'dd MMM yyyy HH:mm'
      }
    }
  };
};

const HistoryChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<DataPoint[]>([]);
  const [seriesData, setSeriesData] = useState<{ x: string; y: number }[]>([]);

  useEffect(() => {
    fetch('https://map.alephium.notrustverify.ch/historic')
      .then(response => response.json())
      .then(data => {
        setData(data);
        const processedData = data.map((item: DataPoint) => ({
          x: new Date(item.createdAt).toISOString(),
          y: item.count
        }));
        setSeriesData(processedData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    let chart: ApexCharts | null = null;

    if (chartRef.current && seriesData.length) {
      const options = getChartOptions(seriesData);
      chart = new ApexCharts(chartRef.current, options);
      chart.render();
    }

    return () => {
      if (chart) {
        chart.destroy();
      }
    };
  }, [seriesData]);

  return (
    <div className="p-4 w-full bg-white rounded-lg shadow max-w dark:bg-neutral-800 md:p-6" style={{ margin: 'auto' }}>
      <div className="flex justify-between mb-3">
        <div className="flex justify-center items-center">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white pe-1">Node History</h5>
        </div>
      </div>
      <div id="area-chart" ref={chartRef}></div>
    </div>
  );
};

export default HistoryChart;
