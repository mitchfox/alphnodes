'use client';

import React, { useState, useEffect, useMemo } from "react";
import DottedMap from "dotted-map";
import data from '../app/api/fullnodes.json';
import Fade from "react-reveal/Fade";
import { useTheme } from "next-themes";


interface Node {
    ip: string;
    clientVersion: string;
    lat: number;
    lng: number;
    location: string;
    country: string;
    data: string;
    svgOptions: {
        color: string;
        radius: number;
    };
}

const svgOptions = {
  backgroundColor: "transparent",
};

export default function Map() {
    const { theme, setTheme } = useTheme();
    const [nodesLoading, setNodesLoading] = useState(true);
    const [activePin, setActivePin] = useState<any>(null);
    const map = useMemo(() => new DottedMap({ height: 60, grid: "vertical" }), []);
    const viewBox = `0 0 140 70`;

    const nodes = useMemo(() => {
        return (data as unknown as Node[]).map((node) => {
            const [lat, lng] = node.location.split(',').map(Number);
            const nodeData = `IP: ${node.ip}, Client: ${node.clientVersion}, Country: ${node.country}`;
            map.addPin({ lat: lat, lng: lng, data: nodeData, svgOptions: { color: "#2aba5f", radius: 0.3 } });
            return {
                ip: node.ip,
                clientVersion: node.clientVersion,
                lat: lat,
                lng: lng,
                country: node.country,
                location: node.location,
                data: nodeData,
                svgOptions: {
                    color: '#2aba5f',
                    radius: 0.3,
                },
            };
        });
    }, [map]);

    const points = useMemo(() => {
    
        return map.getPoints();
    }, [map, nodes]);

    useEffect(() => {
        if (points.length > 0) {
            setNodesLoading(false);
        }
    }, [points]);

    return (
        <div className="App">
            {nodesLoading ? (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', margin: 'auto' }}>
                    <Fade>
                            <div style={{ 
                                width: 'max-content',
                                margin: '-50px auto 50px auto', 
                                height: 'auto', 
                                padding: '4px 10px',
                                boxShadow: '0 0 10px rgba(0, 0, 0, 0.05)',
                                backgroundColor: 'transparent', 
                                border: '1px solid #C6CADC', 
                                borderRadius: '8px', 
                                fontSize: '13px',
                                display: 'flex' 
                            }}>
                                <p>Loading data on all the amazing people who support the Alephium Network...</p>
                                
                            </div>
                        </Fade>
                </div>
            ) : (
                <>
                    <svg viewBox={viewBox} style={{ background: svgOptions.backgroundColor, overflow: 'visible' }}>
                        {points.map((point, index) => (
                            <React.Fragment key={index}>
                                <circle
                                    cx={point.x}
                                    cy={point.y}
                                    r={point.svgOptions?.radius ?? 0.3}
                                    className={activePin && activePin.data === point.data ? 'signal-active' : (typeof point.data === "string" ? "signal" : '')}
                                    fill={activePin && activePin.data === point.data ? "#f97316" : (point.svgOptions?.color ?? "#8A8FB5")}
                                    style={{
                                        opacity: typeof point.data === "string" ? 1 : 0.25,
                                        cursor: typeof point.data === "string" ? 'pointer' : 'default',
                                    }}
                                    onClick={() => setActivePin(point)}
                                />
                                <circle
                                    cx={point.x}
                                    cy={point.y}
                                    r={point.svgOptions?.radius ?? 0.3}
                                    fill={activePin && activePin.data === point.data ? "#f97316" : (point.svgOptions?.color ?? "#8A8FB5")}
                                    style={{
                                        opacity: typeof point.data === "string" ? 1 : 0.25,
                                        cursor: typeof point.data === "string" ? 'pointer' : 'default',
                                    }}
                                    onClick={() => setActivePin(point)}
                                />
                            </React.Fragment>
                        ))}
                    </svg>
                    <style jsx>{`
                        @keyframes signalPulse {
                            0% {
                                r: 0.3;
                                opacity: 1;
                            }
                            100% {
                                r: 1.5;
                                opacity: 0;
                            }
                        }

                        .signal {
                            fill: none;
                            stroke: #2aba5f;
                            stroke-width: 0.1;
                            animation: signalPulse 2s infinite;
                        }

                        .signal-active {
                            fill: none;
                            stroke: #f97316;
                            stroke-width: 0.1;
                            animation: signalPulse 2s infinite;
                        }
                    `}</style>

                    {activePin && (
                        <Fade>
                            <div style={{ 
                                width: 'max-content',
                                margin: '-50px auto 50px auto', 
                                height: 'auto', 
                                padding: '4px 10px',
                                boxShadow: '0 0 10px rgba(0, 0, 0, 0.05)',
                                backgroundColor: 'transparent', 
                                border: '1px solid #C6CADC', 
                                borderRadius: '8px', 
                                fontSize: '13px',
                                display: 'flex' 
                            }}>
                                <p style={{ marginRight: '10px' }}>IP: {activePin.data.split(", ")[0].split(": ")[1]}</p>
                                <p style={{ marginRight: '10px' }}>Client: {activePin.data.split(", ")[1].split(": ")[1]}</p>
                                <p>Country: {activePin.data.split(", ")[2].split(": ")[1]}</p>
                            </div>
                        </Fade>
                    )}
                </>
            )}
        </div>
    );
}
