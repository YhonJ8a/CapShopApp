import React, { Suspense, ReactNode, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber'; // Usa '@react-three/fiber'
import { OrbitControls, Sky, Plane } from '@react-three/drei';

function RotatingObject({ children }: { children: ReactNode }) {
    const ref = useRef<any>();  // Referencia para el objeto

    useFrame(() => {
        // Actualiza la rotación del objeto en cada frame
        if (ref.current) {
            //ref.current.rotation.x += 0.01;
            ref.current.rotation.y += 0.006;
        }
    });

    return (
        <group ref={ref}>
            {children}
        </group>
    );
}

const Modelo: React.FC<{ children: ReactNode }> = ({ children }) => {

    return (
        <div className='model'>
            <Canvas camera={{ zoom: 1.6, position: [2, 2, 2] }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[0, 1.6, 1.8]} intensity={6} />
                <pointLight position={[0, -1.6, 1.8]} intensity={5} />
                <Sky distance={350000} sunPosition={[0, 1, 0]} inclination={2} azimuth={0.35} />
                <RotatingObject>
                    <Plane args={[0.01, 0.01]} position={[0, 0, 0]}>
                        <meshStandardMaterial color="#ffa60000" />
                    </Plane>
                </RotatingObject>
                <Suspense fallback={null}>
                    <RotatingObject>
                        {children} {/* Aquí el children también rotará */}
                    </RotatingObject>
                </Suspense>
                <OrbitControls />
            </Canvas>
        </div>
    );
};

export default Modelo;
