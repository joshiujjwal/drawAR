import React from "react";
import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
const Cube = () => {

    // Ref to interact with the object
    const cuberef = React.useRef<THREE.Mesh>(null);

    // Created different componet as useFrame only inside Canvas
    useFrame((state, delta) => {
        // Rotate the cube
        console.log(state);
        cuberef.current!.rotation.y += delta;
    })
    return (
        <>
            {/* To interact and move */}
            <OrbitControls />
            {/* LIght to see object */}
            <ambientLight />
            {/* 3D object */}
            {/* Postion to mesh to see in AR */}
            <mesh ref={cuberef} position-z={-5}>
                <boxGeometry args={[2, 2, 2]}/>
                <meshStandardMaterial color={"mediumpurple"} />
            </mesh>
        </>
    )
}

export default Cube