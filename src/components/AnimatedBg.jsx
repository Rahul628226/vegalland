'use client';

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Float, Stars } from '@react-three/drei'

export default function AnimatedBg() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} />

      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial color="#64A30D" wireframe />
        </mesh>
      </Float>

      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />

      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </Canvas>
  )
}
