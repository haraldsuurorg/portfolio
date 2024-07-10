import React, { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const BMW = ({ isMobile }) => {
  const bmw = useGLTF('./ferrari_f40/scene.gltf');

  return (
    <group position={isMobile ? [0, -1.85, 0] : [0, -1.76, 0]}>
      <hemisphereLight intensity={15} groundColor="black" />
      <directionalLight
        position={[0, 15, 5]}
        intensity={6}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <pointLight intensity={3} />
      <spotLight
        position={[0, 5, 0]}
        angle={0.3}
        penumbra={1}
        intensity={10}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={bmw.scene}
        scale={isMobile ? 0.75 : 2}
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
        castShadow
      />
    </group>
  );
};

const Turntable = ({ isMobile }) => {
  const ref = React.useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01; // Adjust the rotation speed as needed
    }
  });

  return (
    <mesh
      ref={ref}
      rotation={[0, 0, 0]}
      position={[0, -2, 0]}
      receiveShadow
    >
      <cylinderGeometry
        args={isMobile ? [1.65, 1.75, 0.3, 64] : [4.75, 5, 0.5, 64]}
      />
      <meshStandardMaterial color="#050816" />
    </mesh>
  );
};

const BMWCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');

    const updateIsMobile = () => {
      setIsMobile(mediaQuery.matches);
    };

    updateIsMobile(); // Set initial value
    mediaQuery.addEventListener('change', updateIsMobile);

    return () => {
      mediaQuery.removeEventListener('change', updateIsMobile);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [15, 3, 10], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={3}
        />
        <group
          position={isMobile ? [0, 1, 0] : [0, 0, 0]}
        >
          <Turntable isMobile={isMobile}/>
          <BMW isMobile={isMobile} />
        </group>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BMWCanvas;
