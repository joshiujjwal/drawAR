import { Canvas } from "@react-three/fiber";
import XrCube from "./XrCube";
import { ARButton } from "@react-three/xr";
import { XR } from "@react-three/xr";
import DrawNavbar from "../drawnavbar/DrawNavbar";
const XrCubeContainer = () => {
    return (
        <>
            <DrawNavbar />
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