"use client";

import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, useGLTF, PerspectiveCamera, Environment, Float } from "@react-three/drei";
import * as THREE from "three";

function Model({ url, color }: { url: string; color: string }) {
  const { scene } = useGLTF(url);
  
  useEffect(() => {
    scene.traverse((child) => {
      if ((child as any).isMesh) {
        const mesh = child as THREE.Mesh;
        
        // Si el material no es compatible, lo convertimos
        if (!mesh.material || !(mesh.material instanceof THREE.MeshStandardMaterial)) {
          mesh.material = new THREE.MeshStandardMaterial();
        }

        const mat = mesh.material as THREE.MeshStandardMaterial;
        
        // Aplicamos propiedades de alta gama de forma inmediata
        mat.color.set(color);
        mat.metalness = 1;
        mat.roughness = 0.1;
        mat.envMapIntensity = 2; // Reflejos potentes
        mat.needsUpdate = true;
      }
    });
  }, [scene, color]);

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <primitive object={scene} />
    </Float>
  );
}

interface JewelryViewerProps {
  modelUrl: string;
  color: string;
}

export default function JewelryViewer({ modelUrl, color }: JewelryViewerProps) {
  return (
    <div className="w-full h-[500px] md:h-[750px] relative cursor-grab active:cursor-grabbing">
      <Canvas 
        shadows 
        dpr={[1, 2]} 
        gl={{ 
          antialias: true, 
          toneMapping: THREE.ACESFilmicToneMapping,
        }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={35} />
        <Suspense fallback={null}>
          <Stage 
            environment="city" 
            intensity={0.8} 
            contactShadow={{ opacity: 0.5, blur: 4, scale: 10 }}
            adjustCamera={true}
          >
            <Model url={modelUrl} color={color} />
          </Stage>
          <Environment preset="apartment" />
        </Suspense>
        <OrbitControls 
          autoRotate 
          autoRotateSpeed={0.5} 
          enableZoom={false} 
          enablePan={false}
          makeDefault 
          maxPolarAngle={Math.PI / 1.8}
        />
      </Canvas>
    </div>
  );
}
