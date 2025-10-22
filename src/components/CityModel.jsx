// src/components/CityModel.jsx
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

export default function CityModel() {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <boxGeometry args={[10, 20, 10]} />
      <meshStandardMaterial color="gray" />
    </mesh>
  );
}
