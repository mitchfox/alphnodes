"use client";

import React, { useState, useEffect } from "react";
import ReactCountryFlag from "react-country-flag";

interface Node {
    ip: string;
    clientVersion: string;
    isSynced: boolean;
    hostname: string;
    city: string;
    region: string;
    country: string;
    location: string;
    org: string;
    postal: string;
    timezone: string;
    updatedAt: string;
}

export default function NodeTable() {
    const [nodeData, setNodeData] = useState<Node[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch data from the API
        fetch('https://map.alephium.notrustverify.ch/fullnodes')
            .then(response => response.json())
            .then(data => {
                const nodesData = data.map((node: Node) => {
                    const [lat, lng] = node.location.split(',').map(Number);
                    return {
                        ...node,
                        lat,
                        lng,
                        clientVersion: node.clientVersion.match(/v\d+\.\d+\.\d+/)?.[0] || node.clientVersion,
                    };
                });
                setNodeData(nodesData);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <p style={{ textAlign: 'center' }} className="text-sm text-slate-500 dark:text-neutral-400 mb-4">
                Currently displaying <span className="text-sm text-green-500">{nodeData && nodeData.length}</span> Nodes out of 125. More nodes will be added soon.
            </p>
            <div className="max-w-5xl px-4 sm:px-6 mx-auto pb-12" style={{ margin: 'auto', width: 'auto' }}>

                <div className="relative overflow-x-auto shadow-md rounded-lg">


                    <table className="w-full text-sm text-left rtl:text-right text-neutral-500 dark:text-neutral-400">
                        <thead className="text-xs text-neutral-800 uppercase bg-slate-50 dark:bg-neutral-700 dark:text-neutral-300">
                            <tr>
                                <th scope="col" className="px-6 py-3">Version</th>
                                <th scope="col" className="px-6 py-3">City</th>
                                <th scope="col" className="px-6 py-3">Region</th>
                                <th scope="col" className="px-6 py-3">Country</th>
                                <th scope="col" className="px-6 py-3">Timezone</th>
                                <th scope="col" className="px-6 py-3">Updated At</th>
                                <th scope="col" className="px-6 py-3">Synced</th>
                            </tr>
                        </thead>
                        <tbody>
                            {nodeData.map((node, index) => (
                                <tr key={index} className="bg-white border-b dark:bg-neutral-800 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-600">
                                    <td style={{ textTransform: 'capitalize' }} className="px-6 py-4 text-neutral-600 dark:text-neutral-400">{node.clientVersion}</td>
                                    <td className="px-6 py-4 text-neutral-600 dark:text-neutral-400">{node.city}</td>
                                    <td className="px-6 py-4 text-neutral-600 dark:text-neutral-400">{node.region}</td>
                                    <td style={{ textAlign: 'center' }} className="px-6 py-4 text-neutral-600 dark:text-neutral-400"><ReactCountryFlag countryCode={node.country} style={{ fontSize: '20px' }} /></td>
                                    <td className="px-6 py-4 text-neutral-600 dark:text-neutral-400">{node.timezone}</td>
                                    <td className="px-6 py-4 text-neutral-600 dark:text-neutral-400">{new Date(node.updatedAt).toLocaleString()}</td>
                                    <td className="px-6 py-4 text-neutral-600 dark:text-neutral-400">{node.isSynced ? "Yes" : "No"}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>

    );
}
