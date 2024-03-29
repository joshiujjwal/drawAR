import { Canvas, useFrame } from "@react-three/fiber";
import React from "react";
import Cube from "./Cube";
const CubeContainer = () => {
    return (
        <Canvas>
            <Cube />
        </Canvas>
    )
}
export default CubeContainer