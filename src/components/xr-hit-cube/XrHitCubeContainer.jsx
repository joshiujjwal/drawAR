import { Canvas, useFrame } from "@react-three/fiber";
import React from "react";
import XrHitCube from "./XrHitCube";
import { ARButton } from "@react-three/xr";
import { XR } from "@react-three/xr";
const XrHitCubeContainer = () => {
    return (
        <>
            {/* For hit session need session init */}
            <ARButton sessionInit={{
                // if browser does not support hit-test, it will not show the button
                requiredFeatures: ["hit-test"],
            }} />
            <Canvas>
                <XR>
                    <XrHitCube />
                </XR>
            </Canvas>

        </>
    )
}
export default XrHitCubeContainer