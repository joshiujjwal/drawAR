import { Canvas } from "@react-three/fiber";
import XrHitCube from "./XrHitCube";
import { ARButton } from "@react-three/xr";
import { XR } from "@react-three/xr";
import DrawNavbar from "../drawnavbar/DrawNavbar";
import { Container } from "react-bootstrap";
const XrHitCubeContainer = () => {
    return (
        <>
        <Container>
            <DrawNavbar/>
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
            </Container>
        </>
    )
}
export default XrHitCubeContainer