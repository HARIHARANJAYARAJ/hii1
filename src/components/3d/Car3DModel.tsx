import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, PresentationControls } from '@react-three/drei';

interface Car3DModelProps {
  carType: string;
}

const Car3DContent: React.FC<{ carType: string }> = ({ carType }) => {
  const modelRef = useRef<any>(null);
  
  // This would normally load a specific car model based on the carType
  // For this example, let's create a simplified car shape
  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });
  
  return (
    <group ref={modelRef}>
      {/* Car Body */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[3, 1, 1.5]} />
        <meshStandardMaterial color="#FF5722" metalness={0.7} roughness={0.2} />
      </mesh>
      
      {/* Car Roof */}
      <mesh position={[0, 1.2, 0]}>
        <boxGeometry args={[2, 0.8, 1.3]} />
        <meshStandardMaterial color="#FF5722" metalness={0.7} roughness={0.2} />
      </mesh>
      
      {/* Wheels */}
      <mesh position={[1, 0, 0.8]}>
        <cylinderGeometry args={[0.4, 0.4, 0.2, 32]} rotation={[Math.PI / 2, 0, 0]} />
        <meshStandardMaterial color="#333" metalness={0.5} roughness={0.1} />
      </mesh>
      <mesh position={[-1, 0, 0.8]}>
        <cylinderGeometry args={[0.4, 0.4, 0.2, 32]} rotation={[Math.PI / 2, 0, 0]} />
        <meshStandardMaterial color="#333" metalness={0.5} roughness={0.1} />
      </mesh>
      <mesh position={[1, 0, -0.8]}>
        <cylinderGeometry args={[0.4, 0.4, 0.2, 32]} rotation={[Math.PI / 2, 0, 0]} />
        <meshStandardMaterial color="#333" metalness={0.5} roughness={0.1} />
      </mesh>
      <mesh position={[-1, 0, -0.8]}>
        <cylinderGeometry args={[0.4, 0.4, 0.2, 32]} rotation={[Math.PI / 2, 0, 0]} />
        <meshStandardMaterial color="#333" metalness={0.5} roughness={0.1} />
      </mesh>
      
      {/* Windshield */}
      <mesh position={[0.8, 1.1, 0]} rotation={[0, 0, Math.PI / 6]}>
        <planeGeometry args={[1, 0.8]} />
        <meshStandardMaterial color="#87CEEB" metalness={0.2} roughness={0} transparent opacity={0.7} />
      </mesh>
      
      {/* Lights */}
      <mesh position={[1.5, 0.5, 0.5]}>
        <boxGeometry args={[0.1, 0.3, 0.3]} />
        <meshStandardMaterial color="#FFFF99" emissive="#FFFF99" emissiveIntensity={1} />
      </mesh>
      <mesh position={[1.5, 0.5, -0.5]}>
        <boxGeometry args={[0.1, 0.3, 0.3]} />
        <meshStandardMaterial color="#FFFF99" emissive="#FFFF99" emissiveIntensity={1} />
      </mesh>
    </group>
  );
};

const Car3DModel: React.FC<Car3DModelProps> = ({ carType }) => {
  return (
    <div className="w-full h-64 md:h-80">
      <Canvas camera={{ position: [4, 2, 4], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <PresentationControls
          global
          config={{ mass: 2, tension: 500 }}
          snap={{ mass: 4, tension: 1500 }}
          rotation={[0, 0.3, 0]}
          polar={[-Math.PI / 3, Math.PI / 3]}
          azimuth={[-Math.PI / 1.4, Math.PI / 2]}
        >
          <Car3DContent carType={carType} />
        </PresentationControls>
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default Car3DModel;