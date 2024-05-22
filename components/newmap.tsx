'use client';

import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import MarkerClusterGroup from 'react-leaflet-cluster';
import Globe from "react-globe.gl";
import data from '../app/api/fullnodes.json';
import 'leaflet/dist/leaflet.css';
import { useTheme } from "next-themes";
import './clusters.css';

const ICON = new L.Icon({
  iconUrl: '/marker1.png', // Path to your custom marker image in the public folder
  iconSize: [18, 18], // Adjust the size as needed
  iconAnchor: [9, 18], // Anchor the icon
  popupAnchor: [0, -32] // Position of the popup relative to the icon
});

interface Node {
  ip: string;
  clientVersion: string;
  lat: number;
  lng: number;
  location: string;
  country: string;
  data: string;
}

export default function Map() {
  const { theme, setTheme } = useTheme();
  const [view, setView] = useState<'map' | 'globe'>('map');
  const [nodes, setNodes] = useState<Node[]>([]);
  const [nodesLoading, setNodesLoading] = useState(true);
  const globeEl = useRef<any>(null);

  useEffect(() => {
    const nodesData = (data as unknown as Node[]).map((node) => {
      const [lat, lng] = node.location.split(',').map(Number);
      const nodeData = `IP: ${node.ip}, Client: ${node.clientVersion}, Country: ${node.country}`;
      return {
        ip: node.ip,
        clientVersion: node.clientVersion,
        lat: lat,
        lng: lng,
        country: node.country,
        location: node.location,
        data: nodeData,
      };
    });
    setNodes(nodesData);
    setNodesLoading(false);
  }, []);

  const createClusterCustomIcon = (cluster) => {
    const count = cluster.getChildCount();

    let size = 'large';
    let color = '#b91c1c'; // Default color: green

    if (count < 10) {
      size = 'small';
      color = '#16a34a'; // green for small clusters
    } else if (count < 100) {
      size = 'medium';
      color = '#f59e0b'; // Orange for medium clusters
    }

    return L.divIcon({
      html: `<div class="cluster-icon ${size}" style="background-color: ${color};"><span>${count}</span></div>`,
      className: 'custom-cluster-icon',
      iconSize: L.point(40, 40, true)
    });
  };

  useEffect(() => {
    if (view === 'globe' && globeEl.current) {
      const controls = globeEl.current.controls();
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.2; // Adjust the speed as needed
      globeEl.current.camera().position.z = 400; // Adjust camera position if needed
    }
  }, [view]); // Depend on the view state

  return (
    <div className="App" style={{ height: "100vh", width: "100%" }}>
      <div
        style={{
          position: 'absolute', bottom: '150px', right: '0px', left: '0px', zIndex: 1000,
          fontSize: '12px', fontWeight: '500', display: 'flex', justifyContent: 'center', alignItems: 'center',
        }}>
        <button
          onClick={() => setView(view === 'map' ? 'globe' : 'map')}
          style={{
            padding: '6px 16px',
            borderRadius: '100px',
            backdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            border: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.3)' : '1px solid rgba(0, 0, 0, 0.3)',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            color: theme === 'dark' ? '#fff' : '#000',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            transition: 'background-color 0.3s ease',
            cursor: 'pointer',
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
        >
          Toggle View
        </button>
      </div>
      {nodesLoading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', margin: 'auto' }}>
          <p>Loading data on all the amazing people who support the Alephium Network...</p>
        </div>
      ) : view === 'map' ? (
        <MapContainer
          center={[0, 0]}
          minZoom={2}
          maxZoom={18}
          maxBounds={[[90, -180], [-90, 180]]} // Restrict bounds to the whole world
          maxBoundsViscosity={1.0} // Ensure bounds are strictly enforced
          zoomControl={false}
          zoom={2}
          style={{ height: "100vh", width: "100%" }}
        >
          <TileLayer
            url={theme === 'dark' ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" : "https://tile.openstreetmap.org/{z}/{x}/{y}.png"}
          />
          <MarkerClusterGroup
            iconCreateFunction={createClusterCustomIcon}
          >
            {nodes.map((node, index) => (
              <Marker
                key={index}
                position={[node.lat, node.lng]}
                icon={ICON}
              >
                <Popup>
                  <div>
                    <p><strong>IP:</strong> {node.ip}</p>
                    <p><strong>Client:</strong> {node.clientVersion}</p>
                    <p><strong>Country:</strong> {node.country}</p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MarkerClusterGroup>
        </MapContainer>
      ) : (
        <Globe
          ref={globeEl}
          globeImageUrl={theme === 'dark' ? "//unpkg.com/three-globe/example/img/earth-dark.jpg" : "//unpkg.com/three-globe/example/img/earth-day.jpg"}
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          backgroundColor="rgba(0,0,0,0)"
          pointsData={nodes}
          pointAltitude={0.05}
          pointColor={() => '#49DE80'}
          pointLabel={(obj: object) => `
            <b>IP:</b> ${(obj as Node).ip}<br/>
            <b>Client:</b> ${(obj as Node).clientVersion}<br/>
            <b>Country:</b> ${(obj as Node).country}
          `}
          pointLat={(d: object) => (d as Node).lat}
          pointLng={(d: object) => (d as Node).lng}
          width={window.innerWidth}
          height={window.innerHeight - 100}
          atmosphereColor="#d9ffe2"  // Change this to your desired glow color
          atmosphereAltitude={0.1}
        />
      )}
    </div>
  );
}