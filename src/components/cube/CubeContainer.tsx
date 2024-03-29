import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";
import DrawNavbar from "../drawnavbar/DrawNavbar";
const CubeContainer = () => {
    return (
        <>
        <DrawNavbar/>
        <Canvas>
            <Cube />
        </Canvas>
        </>
    )
}
export default CubeContainer