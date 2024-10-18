import React, { Suspense, ReactNode, useRef, useState } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'; // Usa '@react-three/fiber'
import { OrbitControls, Sky, Plane } from '@react-three/drei';

function RotatingObject({ children }: { children: ReactNode }) {
    const ref = useRef<any>();

    useFrame((state, delta) => (ref.current.rotation.y += delta * 0.5));

    return (
        <group ref={ref}>
            {children}
        </group>
    );
}

function Box(props: ThreeElements['mesh']) {
    const ref = useRef<THREE.Mesh>(null!)
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)
    useFrame((state, delta) => (ref.current.rotation.z += delta * 0.2))
    return (
        <mesh
            {...props}
            ref={ref}
            scale={clicked ? 1.2 : 1}
            onClick={(event) => click(!clicked)}
            onPointerOver={(event) => hover(true)}
            onPointerOut={(event) => hover(false)}>
            <boxGeometry args={[5, 5, 0.01]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}

const Modelo: React.FC<{ children: ReactNode }> = ({ children }) => {
    const controlsRef = useRef<any>(null);
    const distLight = 2;
    const intensityLight = 7;
    return (
        <div className='model'>
            <Canvas camera={{ zoom: 1, position: [0, 0, 4] }}>
                <ambientLight intensity={0.8} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={intensityLight} />
                <spotLight position={[-10, 10, -10]} angle={-0.15} penumbra={1} decay={0} intensity={intensityLight} />

                <Sky distance={350000} sunPosition={[0, 1, 0]} inclination={2} azimuth={0.35} />
                <Box position={[0, 0, -2]} />
                <RotatingObject>
                    <Plane args={[0.01, 0.01]} position={[0, 0, 0]}>
                        <meshStandardMaterial color="#ffa60000" />
                    </Plane>
                </RotatingObject>
                <Suspense fallback={null}>
                    <RotatingObject>
                        {children}
                    </RotatingObject>
                    <OrbitControls ref={controlsRef} target={[0, 0, 0]} />
                </Suspense>
            </Canvas>
        </div>
    );
};
export default Modelo;
