import React, { Suspense, useRef, useState } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'; 
function Box(props: ThreeElements['mesh']) {
    const ref = useRef<THREE.Mesh>(null!)
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)
    useFrame((state, delta) => (ref.current.rotation.x += delta))
    return (
        <mesh
            {...props}
            ref={ref}
            scale={clicked ? 1.5 : 1}
            onClick={(event) => click(!clicked)}
            onPointerOver={(event) => hover(true)}
            onPointerOut={(event) => hover(false)}>
            <boxGeometry args={[0.1, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}

const BackgroundModel = () => {
    return (
        <div className='model'>
            <Canvas camera={{ zoom: 1.6, position: [2, 2,2] }}>
                <Box position={[2, 0, 0]} />
                <Box position={[-2, 0, 0]} />
            </Canvas>
        </div>
    );
};
export default BackgroundModel;
