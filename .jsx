// src/components/SceneRenderer.jsx
import { Canvas } from '@react-three/fiber';
import { OrbitControls, GridHelper } from '@react-three/drei';
import CityModel from './CityModel';

export default function SceneRenderer() {
  return (
    <Canvas camera={{ position: [0, 50, 100], fov: 60 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} />
      <GridHelper args={[100, 100]} />
      <CityModel />
      <OrbitControls />
    </Canvas>
  );
}
