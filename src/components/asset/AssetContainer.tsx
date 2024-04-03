import { Canvas } from "@react-three/fiber";
import XrAsset from "./XrAsset";
import { ARButton, XR } from "@react-three/xr";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import DrawNavbar from "../drawnavbar/DrawNavbar";

const AssetContainer = () => {
    let { id, local } = useParams<{ id: string, local: string }>();
    return (
        <>
            <DrawNavbar />
            {/* For hit session need session init */}
            <ARButton sessionInit={{
                // if browser does not support hit-test, it will not show the button
                requiredFeatures: ["hit-test"],
            }} />
            <Container >
                <Canvas style={{ height: "80vh" }}>
                    <XR>
                        <XrAsset glbUrl={id} isLocal={local} />
                    </XR>
                </Canvas>
            </Container>
        </>
    );
};

export default AssetContainer;