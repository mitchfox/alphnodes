'use client'

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const Card = dynamic(() => import('./card'), { ssr: false });
const HistoryChart = dynamic(() => import('./history-chart'), { ssr: false });

export default function CardLinks() {
  const [countries, setCountries] = useState<{ name: string, count: number }[]>([]);
  const [versions, setVersions] = useState<{ name: string, count: number }[]>([]);
  const [versionsOs, setOsVersions] = useState<{ name: string, count: number }[]>([]);
  const [versionsFullnode, setFullnodeVersions] = useState<{ name: string, count: number }[]>([]);

  const handleData = (data: any) => {
    const countryMap: { [key: string]: number } = {};
    const versionMap: { [key: string]: number } = {};
    const versionOsMap: { [key: string]: number } = {};
    const versionFullnodeMap: { [key: string]: number } = {};
  
    data.forEach((item: any) => {
      const fullnode = item.clientVersion.split("/")[0];
      const version = item.clientVersion.split("/")[1].split('.').slice(0,2).join("."); // Extract majo/minor version
      const os = item.clientVersion.split("/")[2];
  
      countryMap[item.country] = (countryMap[item.country] || 0) + 1;
      versionMap[version] = (versionMap[version] || 0) + 1;
      versionOsMap[os] = (versionOsMap[os] || 0) + 1;
      versionFullnodeMap[fullnode] = (versionFullnodeMap[fullnode] || 0) + 1;
    });
  
    const countries = Object.keys(countryMap).map((country) => ({
      name: country,
      count: countryMap[country]
    }));
    const versions = Object.keys(versionMap).map((version) => ({
      name: version,
      count: versionMap[version]
    }));
    const versionOs = Object.keys(versionOsMap).map((version) => ({
      name: version,
      count: versionOsMap[version]
    }));
    const versionFullnode = Object.keys(versionFullnodeMap).map((version) => ({
      name: version,
      count: versionFullnodeMap[version]
    }));
    return { countries, versions, versionOs, versionFullnode };
  };
  

  useEffect(() => {
    fetch('https://map.alephium.notrustverify.ch/fullnodes')
      .then(response => response.json())
      .then(data => {
        const { countries, versions, versionOs, versionFullnode } = handleData(data);
        setCountries(countries);
        setVersions(versions);
        setOsVersions(versionOs);
        setFullnodeVersions(versionFullnode);
      })
      .catch(error => console.error('Error fetching data:', error));
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
      data: versions.map(c => c.count),
      labels: versions.map(c => c.name),
    },
    {
      id: '2',
      title: 'OS type',
      description: 'Count of nodes by OS.',
      comingSoon: true,
      data: versionsOs.map(c => c.count),
      labels: versionsOs.map(c => c.name),
    },
    {
      id: '3',
      title: 'Implementation type',
      description: 'Count of nodes by OS.',
      comingSoon: true,
      data: versionsFullnode.map(c => c.count),
      labels: versionsFullnode.map(c => c.name),
    },
  ];

  return (
    <div className="pt-12 pb-16 space-y-8 grow md:flex md:space-y-0 md:space-x-8 md:pt-16 md:pb-20">
      {/* Middle area */}
      <div className="grow">
        <div className="max-w-5xl" style={{ margin: 'auto' }}>
          <section>
            {/* Page content */}
            <div className="space-y-10">
              {/* Client Projects cards */}
              <section>
                {/* Cards */}
                <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
                  <HistoryChart />
                </div>
                <div className="grid gap-10 mt-10 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
                  {segments.map((item) => (
                    <Card key={item.id} item={item} />
                  ))}
                </div>
              </section>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
