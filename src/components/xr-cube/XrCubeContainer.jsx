import { Canvas, useFrame } from "@react-three/fiber";
import React from "react";
import XrCube from "./XrCube";
import { ARButton } from "@react-three/xr";
import { XR } from "@react-three/xr";
const XrCubeContainer = () => {
    return (
        <>
        <ARButton />
        <Canvas>
            <XR>
            <XrCube />

            </XR>
        </Canvas>
    
        </>
    )
}
export default XrCubeContainer