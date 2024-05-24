"use client";

import React, { useState, useEffect } from "react";
import data from '../../api/fullnodes.json';
import ReactCountryFlag from "react-country-flag"

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

    useEffect(() => {
        // Fetch the node data from the JSON file
        setNodeData(data);
    }, []);

    return (
        <>


            <div className="max-w-5xl px-4 sm:px-6 mx-auto pb-12" style={{ margin: 'auto', width: 'auto' }}>
                <div className="relative overflow-x-auto shadow-md rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-neutral-500 dark:text-neutral-400">
                        <thead className="text-xs text-neutral-800 uppercase bg-slate-50 dark:bg-neutral-700 dark:text-neutral-300">
                            <tr>
                                {/* <th scope="col" className="px-6 py-3">IP Address</th> */}
                                <th scope="col" className="px-6 py-3">Version</th>
                                {/* <th scope="col" className="px-6 py-3">Hostname</th> */}
                                <th scope="col" className="px-6 py-3">City</th>
                                <th scope="col" className="px-6 py-3">Region</th>
                                <th scope="col" className="px-6 py-3">Country</th>
                                {/* <th scope="col" className="px-6 py-3">Location</th> */}
                                {/* <th scope="col" className="px-6 py-3">Organization</th> */}
                                {/* <th scope="col" className="px-6 py-3">PostCode</th> */}
                                <th scope="col" className="px-6 py-3">Timezone</th>
                                <th scope="col" className="px-6 py-3">Updated At</th>
                                <th scope="col" className="px-6 py-3">Synced</th>
                            </tr>
                        </thead>
                        <tbody>


                            {nodeData.map((node, index) => {

                                const version = node.clientVersion?.match(/v\d+\.\d+\.\d+/)?.[0];
                                return (
                                    <tr key={index} className="bg-white border-b dark:bg-neutral-800 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-600">
                                        {/* <td className="px-6 py-4 text-neutral-600 dark:text-neutral-400">{node.ip}</td> */}
                                        <td style={{ textTransform: 'capitalize' }} className="px-6 py-4 text-neutral-600 dark:text-neutral-400">{version}</td>
                                        {/* <td className="px-6 py-4 text-neutral-600 dark:text-neutral-400">{node.hostname}</td> */}
                                        <td className="px-6 py-4 text-neutral-600 dark:text-neutral-400">{node.city}</td>
                                        <td className="px-6 py-4 text-neutral-600 dark:text-neutral-400">{node.region}</td>
                                        <td style={{ textAlign: 'center' }} className="px-6 py-4 text-neutral-600 dark:text-neutral-400"><ReactCountryFlag countryCode={node.country} style={{ fontSize: '20px' }} /></td>
                                        {/* <td className="px-6 py-4 text-neutral-600 dark:text-neutral-400">{node.location}</td> */}
                                        {/* <td className="px-6 py-4 text-neutral-600 dark:text-neutral-400">{node.org}</td> */}
                                        {/* <td className="px-6 py-4 text-neutral-600 dark:text-neutral-400">{node.postal}</td> */}
                                        <td className="px-6 py-4 text-neutral-600 dark:text-neutral-400">{node.timezone}</td>
                                        <td className="px-6 py-4 text-neutral-600 dark:text-neutral-400">{new Date(node.updatedAt).toLocaleString()}</td>
                                        <td className="px-6 py-4 text-neutral-600 dark:text-neutral-400">{node.isSynced ? "Yes" : "No"}</td>
                                    </tr>
                                )

                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
