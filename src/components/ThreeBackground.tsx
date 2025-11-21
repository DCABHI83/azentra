import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Fix: The following declaration is a workaround for a potential TypeScript
// configuration issue where the JSX namespace for @react-three/fiber is not
// being recognized. This manually adds the R3F primitive elements to JSX.
declare global {
  namespace JSX {
    interface IntrinsicElements {
      ambientLight: any;
      directionalLight: any;
      pointLight: any;
    }
  }
}

const DistortedSphere = () => {
  const ref = useRef<THREE.Mesh>(null!);
  const { viewport, mouse } = useThree();
  
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.0005;
      ref.current.rotation.y += 0.001;
      
      const x = (mouse.x * viewport.width) / 2.5;
      const y = (mouse.y * viewport.height) / 2.5;
      
      ref.current.position.lerp(new THREE.Vector3(x, y, -1), 0.05);
    }
  });

  return (
    <Sphere ref={ref} args={[1, 100, 200]} scale={2.5}>
      <MeshDistortMaterial
        color="#8b5cf6"
        attach="material"
        distort={0.5}
        speed={1.5}
        roughness={0.1}
        metalness={0.2}
      />
    </Sphere>
  );
};

const ThreeBackground: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#06b6d4" intensity={1.5} />
        <DistortedSphere />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
