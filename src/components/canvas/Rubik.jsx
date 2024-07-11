import { Suspense, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Rubik = ({ isMobile }) => {
  const rubik = useGLTF('./rubik/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={1} />
      <pointLight intensity={3} />
      <spotLight
        position={[0, 10, 0]}
        angle={0.12}
        penumbra={1}
        intentsity={5}
        shadow-mapSize={1024}
      />
      <primitive
        object={rubik.scene}
        scale={isMobile ? 0.6 : 0.4}
        position={isMobile ? [0, 0.5, 0] : [0, 0, 0]}
        rotation={[0.5, 0.5, -0.3]}
      />
    </mesh>
  )
}

const RubikCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [])

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 6 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={3}
        />
        <Rubik isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default RubikCanvas;