'use client';

import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import MarkerClusterGroup from 'react-leaflet-cluster';
import Globe from "react-globe.gl";
import data from '../app/api/fullnodes.json';
import 'leaflet/dist/leaflet.css';
import { useTheme } from "next-themes";
import Image from '../public/images/about.png'
import { icon } from "leaflet"
import './clusters.css';

// const ICON = icon({
//   iconUrl: "/marker.png",
//   iconSize: [32, 32],
// })
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

// mapbox://styles/mfprojects/clwgxy13n00j901pn9n2vdu4e

// LIGHT THEME
// mapbox://styles/mfprojects/clwgz9v1p00dc01qs8f0f6bnz

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

  const GlobeContainWidth = 'calc(100vw - 20px)'


  const createClusterCustomIcon = (cluster) => {
    const count = cluster.getChildCount();

    let size = 'large';
    let color = '#b91c1c'; // Default color: red

    if (count < 10) {
      size = 'small';
      color = '#16a34a'; // Green for small clusters
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
      controls.autoRotateSpeed = 0.5; // Adjust the speed as needed
      globeEl.current.camera().position.z = 400; // Adjust camera position if needed
    }
  }, [view]); // Depend on the view state

  return (
    <div className="App" style={{ height: "100vh", width: "100%", }}>
      <div
        style={{
          position: 'absolute', bottom: '140px', right: '0px', left: '0px', zIndex: 1000,
          fontSize: '14px', fontWeight: '500', display: 'flex', justifyContent: 'center', alignItems: 'center',
        }}>
        <button
          onClick={() => setView(view === 'map' ? 'globe' : 'map')}
          style={{ padding: '10px', borderRadius: '10px', }}>Toggle View</button>

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
          zoom={2} style={{ height: "100vh", width: "100%" }}>
          <TileLayer
            url={theme === 'dark' ?
              `https://api.mapbox.com/styles/v1/mfprojects/clwgxy13n00j901pn9n2vdu4e/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWZwcm9qZWN0cyIsImEiOiJjbHdndnQ4MHQwOHlyMmlyeXJ2ZTQ1Y2ZtIn0.9jhFhJ9KuA2_qsNhaYIaRg`
              :
              `https://api.mapbox.com/styles/v1/mfprojects/clwgz9v1p00dc01qs8f0f6bnz/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWZwcm9qZWN0cyIsImEiOiJjbHdndnQ4MHQwOHlyMmlyeXJ2ZTQ1Y2ZtIn0.9jhFhJ9KuA2_qsNhaYIaRg`

            }
            // attribution='&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a> contributors'
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
          globeImageUrl={theme === 'dark' ? "//unpkg.com/three-globe/example/img/earth-night.jpg" : "//unpkg.com/three-globe/example/img/earth-day.jpg"}
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
          height={window.innerHeight}
        />
        // HEX BIN STYLE
        //   <Globe
        //   ref={globeEl}
        //   globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        //   bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        //   backgroundColor="rgba(0,0,0,0)"
        //   hexBinPointsData={nodes}
        //   hexBinPointLat={(d: Node) => d.lat}
        //   hexBinPointLng={(d: Node) => d.lng}
        //   hexBinResolution={4} // Adjust the hex bin resolution as needed
        //   hexBinMerge={true}
        //   hexBinColor={() => '#49DE80'}
        //   hexBinAltitude={(d: any) => d.sumWeight * 0.01} // Adjust the altitude based on the density
        //   width={window.innerWidth}
        //   height={window.innerHeight}
        // />
      )}
    </div>
  );
}
