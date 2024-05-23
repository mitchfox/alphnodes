'use client'


import React, { useState, useEffect } from 'react';
// import Card from './card';
import data from '../../app/api/fullnodes.json';


import dynamic from 'next/dynamic';
const Card = dynamic(() => import('./card'), { ssr: false });
const HistoryChart = dynamic(() => import('./history-chart'), { ssr: false });

export default function CardLinks() {
  const [countries, setCountries] = useState<{ name: string, count: number }[]>([]);
  const [versions, setVersions] = useState<number[]>([]);

  const handleData = (data: any) => {
    const countryMap: { [key: string]: number } = {};
    const versionMap: { [key: string]: number } = {};

    data.forEach((item: any) => {
      countryMap[item.country] = (countryMap[item.country] || 0) + 1;
      versionMap[item.clientVersion] = (versionMap[item.clientVersion] || 0) + 1;
    });

    const countries = Object.keys(countryMap).map((country) => ({
      name: country,
      count: countryMap[country]
    }));
    const versionsCount = Object.values(versionMap);

    return { countries, versionsCount };
  };

  useEffect(() => {
    const { countries, versionsCount } = handleData(data);
    setCountries(countries);
    setVersions(versionsCount);
  }, []);

  const segments = [
    {
      id: '0',
      title: 'Countries',
      description: 'Count of nodes by country.',
      data: countries.map(c => c.count),
      labels: countries.map(c => c.name),
    },
    {
      id: '1',
      title: 'Versions',
      description: 'Count of nodes by client version.',
      comingSoon: true,
      data: versions,
      labels: [],
    },
  ];


  return (
    <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pt-12 md:pt-16 pb-16 md:pb-20">
      {/* Middle area */}
      <div className="grow">
        <div className="max-w-5xl" style={{ margin: 'auto' }}>
          <section>
            {/* Page content */}
            <div className="space-y-10">
              {/* Client Projects cards */}
              <section>
                {/* Cards */}
                <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-10">
                  {segments.map((item) => (
                    <Card key={item.id} item={item} />
                  ))}


                
                </div>
              
                <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-10 mt-10">
              
                <HistoryChart />
                </div>

                
                
              </section>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
