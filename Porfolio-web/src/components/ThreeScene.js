import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, ContactShadows } from '@react-three/drei';
import { motion } from 'framer-motion';

// 3D Model component
function Model(props) {
  const group = useRef();
  
  // Rotate the model slowly
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  // Use a simple cube as a placeholder
  // In a real application, you would load a GLTF model using useGLTF
  return (
    <group ref={group} {...props}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshStandardMaterial color="#4f46e5" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );
}

// Animated floating cube component
function FloatingCube({ position, size, color, delay }) {
  const mesh = useRef();
  
  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.position.y += Math.sin(clock.getElapsedTime() * 2 + delay) * 0.005;
      mesh.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.5 + delay) * 0.2;
      mesh.current.rotation.z = Math.sin(clock.getElapsedTime() * 0.5 + delay) * 0.2;
    }
  });

  return (
    <mesh ref={mesh} position={position} castShadow>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} metalness={0.5} roughness={0.3} />
    </mesh>
  );
}

// Main Three.js scene component
const ThreeScene = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-[400px] w-full"
    >
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <Model position={[0, 0, 0]} scale={[1, 1, 1]} />
        
        {/* Add some floating cubes around the main model */}
        <FloatingCube position={[-2, 1, -1]} size={[0.5, 0.5, 0.5]} color="#60a5fa" delay={0} />
        <FloatingCube position={[2, -1, -2]} size={[0.7, 0.7, 0.7]} color="#8b5cf6" delay={1} />
        <FloatingCube position={[1, 2, -1]} size={[0.3, 0.3, 0.3]} color="#f472b6" delay={2} />
        <FloatingCube position={[-1.5, -1.5, -1]} size={[0.4, 0.4, 0.4]} color="#34d399" delay={3} />
        
        <OrbitControls enableZoom={false} enablePan={false} />
        <ContactShadows opacity={0.4} scale={5} blur={2.4} />
        <Environment preset="city" />
      </Canvas>
    </motion.div>
  );
};

export default ThreeScene;