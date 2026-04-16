"use client";

import React, { Suspense, useMemo, useEffect } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { 
  OrbitControls, 
  Stage, 
  useGLTF, 
  PerspectiveCamera, 
  Environment, 
  Float, 
  ContactShadows,
  useEnvironment
} from "@react-three/drei";
import * as THREE from "three";

function Model({ url, color }: { url: string; color: string }) {
  const { scene } = useGLTF(url);
  // Precargamos el entorno para asegurar que los reflejos estén disponibles inmediatamente
  const envMap = useEnvironment({ preset: "apartment" });
  
  const processedScene = useMemo(() => {
    const clone = scene.clone();
    
    clone.traverse((child) => {
      if ((child as any).isMesh) {
        const mesh = child as THREE.Mesh;
        
        // Creamos un material Physical (más avanzado que Standard) para joyería
        const material = new THREE.MeshPhysicalMaterial({
          color: new THREE.Color(color).convertSRGBToLinear(),
          metalness: 1.0,
          roughness: 0.02, // Casi un espejo
          reflectivity: 1.0,
          clearcoat: 1.0, // Capa extra de brillo
          clearcoatRoughness: 0.05,
          envMap: envMap,
          envMapIntensity: 3.0, // Reflejos muy potentes
        });

        mesh.material = material;
        mesh.castShadow = true;
        mesh.receiveShadow = true;
      }
    });
    return clone;
  }, [scene, color, envMap]);

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
          toneMapping: THREE.ACESFilmicToneMapping,
          outputColorSpace: THREE.SRGBColorSpace 
        }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={35} />
        
        {/* Suspense manejará la espera del entorno y el modelo */}
        <Suspense fallback={null}>
          <Stage 
            environment={null} // Desactivamos el env de Stage para usar el nuestro global
            intensity={1} 
            adjustCamera={true}
            shadows="contact"
          >
            <Model url={modelUrl} color={color} />
          </Stage>

          <ContactShadows 
            opacity={0.4} 
            scale={15} 
            blur={2.5} 
            far={4} 
            resolution={256} 
            color="#000000" 
          />
          
          <Environment preset="apartment" background={false} />
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
