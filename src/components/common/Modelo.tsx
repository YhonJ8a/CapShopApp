import React, { Suspense } from 'react';
import { Canvas } from "react-three-fiber";
import Cap1 from "../modelos/Cap1";
import Cap2 from "../modelos/Cap2";
import { OrbitControls, Sky } from '@react-three/drei';

export default function Modelo() {
    return (
        <div className='model'>
            <Canvas camera={{ zoom: 1, position: [2, 2, 2] }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[0, 1.6,1.8]} intensity={4} />
                <pointLight position={[0, -1.6, 1.8]} intensity={3} />
                <Sky distance={350000} sunPosition={[0, 1, 0]}
                inclination={1} azimuth={0.55}/>

                <Suspense fallback={null}>
                    <Cap1 />
                </Suspense>
                <OrbitControls />
            </Canvas>
        </div>
    )
}
