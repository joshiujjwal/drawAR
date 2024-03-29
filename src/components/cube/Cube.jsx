import React from "react";
import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
const Cube = () => {

    // Ref to interact with the object
    const cuberef = React.useRef();

    // Created different componet as useFrame only inside Canvas
    useFrame((state, delta) => {
        // Rotate the cube
        cuberef.current.rotation.y += delta;
    })
    return (
        <>
            {/* To interact and move */}
            <OrbitControls />
            {/* LIght to see object */}
            <ambientLight />
            {/* 3D object */}
            <mesh ref={cuberef}>
                <boxGeometry args={[2, 2, 2]}/>
                <meshStandardMaterial color={"mediumpurple"} />
            </mesh>
        </>
    )
}

export default Cube