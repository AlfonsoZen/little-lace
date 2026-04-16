"use client";

import React, { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, useGLTF, PerspectiveCamera, Environment, Float, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

function Model({ url, color }: { url: string; color: string }) {
  const { scene } = useGLTF(url);
  
  const processedScene = useMemo(() => {
    const clone = scene.clone();
    clone.traverse((child) => {
      if ((child as any).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.material = new THREE.MeshStandardMaterial({
          color: new THREE.Color(color),
          metalness: 1,
          roughness: 0.1,
          envMapIntensity: 2.5,
        });
      }
    });
    return clone;
  }, [scene, color]);

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <primitive object={processedScene} />
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
          toneMapping: THREE.ACESFilmicToneMapping 
        }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={35} />
        
        <Suspense fallback={null}>
          {/* 
            Configuración de Stage corregida para evitar errores de tipos.
            Usamos shadows="contact" y ajustamos la intensidad.
          */}
          <Stage 
            environment="city" 
            intensity={0.5} 
            adjustCamera={true}
            shadows="contact"
          >
            <Model url={modelUrl} color={color} />
          </Stage>

          {/* 
            Añadimos ContactShadows manualmente para un control preciso 
            y evitar que Stage falle por propiedades no reconocidas.
          */}
          <ContactShadows 
            opacity={0.4} 
            scale={10} 
            blur={2.5} 
            far={4} 
            resolution={256} 
            color="#000000" 
          />
          
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
