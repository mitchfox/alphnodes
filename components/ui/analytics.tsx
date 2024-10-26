'use client'

import React, { useState, useEffect } from 'react';
import Counter from './counter';
interface StatProps {
  number: number | null;
  suffix: string;
  text: string;
}

export default function Analytics() {
  // State variables for dynamic stats
  const [totalTransactions, setTotalTransactions] = useState<number | null>(null);
  const [networkHashrate, setNetworkHashrate] = useState<number | null>(null);
  const [hashrateSuffix, setHashrateSuffix] = useState<string>(''); // State for dynamic suffix
  const [totalFullNodes, setTotalFullNodes] = useState<number | null>(null); // State for total full nodes



  // Static stats
  const stats: StatProps[] = [
    {
      number: totalFullNodes,
      suffix: '',
      text: 'Total Nodes Discovered',
    },
    {
      number: 16,
      suffix: '+',
      text: 'Countries Supported',
    },
    {
      number: networkHashrate,
      suffix: hashrateSuffix, // Use dynamic suffix for hashrate
      text: 'Network Hashrate',
    },
    {
      number: totalTransactions,
      suffix: 'M+',
      text: 'Transactions Processed',
    },
  ];

  // Fetch data from APIs
  useEffect(() => {
    // Fetch total transactions
    fetch('https://backend.mainnet.alephium.org/infos/total-transactions')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Total Transactions Data:', data); // Debugging
        const transactions = data;
        if (transactions !== undefined && transactions !== null) {
          setTotalTransactions(parseFloat((transactions / 1000000).toFixed(2))); // Convert the string value to a number before setting the state
        } else {
          console.error('Total transactions data is null or undefined');
        }
      })
      .catch(error => console.error('Error fetching total transactions:', error));

    // Fetch network hashrate
    fetch('https://node.mainnet.alephium.org/infos/current-hashrate')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Raw Hashrate Data:', data); // Debugging
        const hashrateStr = data.hashrate; // Adjust based on actual response structure
        if (hashrateStr !== undefined && hashrateStr !== null) {
          const hashrateNumber = parseInt(hashrateStr.split(' ')[0].replace(/,/g, ''), 10); // Extract and convert number part
          console.log('Hashrate Number:', hashrateNumber); // Debugging
          
          // Determine appropriate suffix and value
          if (hashrateNumber >= 1000000000) {
            setNetworkHashrate(parseFloat((hashrateNumber / 1000000000).toFixed(2))); // Convert to PH/s
            setHashrateSuffix('PH/s');
          } else if (hashrateNumber >= 1000000) {
            setNetworkHashrate(parseFloat((hashrateNumber / 1000000).toFixed(2))); // Convert to TH/s
            setHashrateSuffix('TH/s');
          } else {
            setNetworkHashrate(parseFloat((hashrateNumber / 1000).toFixed(2))); // Convert to GH/s
            setHashrateSuffix('GH/s');
          }
        } else {
          console.error('Current hashrate data is null or undefined');
        }
      })
      .catch(error => console.error('Error fetching network hashrate:', error));

    // Fetch total full nodes
    fetch('https://map.alephium.notrustverify.ch/fullnodes')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Full Nodes Data:', data); // Debugging
        const fullNodes = data.length; // Adjust based on actual response structure
        if (fullNodes !== undefined && fullNodes !== null) {
          setTotalFullNodes(fullNodes); // Set the total full nodes
        } else {
          console.error('Full nodes data is null or undefined');
        }
      })
      .catch(error => console.error('Error fetching full nodes data:', error));
  }, []);

  return (
    <div className="mx-auto max-w-6xl sm:px-6">
      <div className="grid grid-cols-4 gap-4 items-start sm:grid-cols-4 md:grid-cols-4 sm:gap-6 md:gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="relative text-center">
            <h4 className="mb-1 font-bold tabular-nums font-inter-tight text-md md:text-2xl">
              {stat.number !== null ? <Counter number={stat.number} /> : 'Loading...'}
              {stat.suffix} {index === 0 ? '/125' : null}
            </h4>
            <p className="text-xs text-neutral-500">{stat.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
