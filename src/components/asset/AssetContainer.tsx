import { Canvas } from "@react-three/fiber";
import XrAsset from "./XrAsset";
import { ARButton, XR } from "@react-three/xr";
import { useParams } from "react-router-dom";

const AssetContainer = () => {
    let { id } = useParams<{ id: string }>();

    return (
        <>
            {/* For hit session need session init */}
            <ARButton sessionInit={{
                // if browser does not support hit-test, it will not show the button
                requiredFeatures: ["hit-test"],
            }} />
            <Canvas>
                <XR>                    
                    <XrAsset glbUrl={id} nscale={0.4} />
                </XR>
            </Canvas>
        </>
    );
};

export default AssetContainer;