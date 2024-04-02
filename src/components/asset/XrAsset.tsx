import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Interactive, useHitTest, useXR, XRInteractionEvent } from "@react-three/xr";
import { useState } from "react";
import React from "react";
import Asset from "./Asset";
import * as THREE from "three";

const XrAsset = ({ glbUrl }: any) => {
  const reticleRef = React.useRef<THREE.Mesh>(null);

  const { isPresenting } = useXR();

  const [assetPlaced, setAssetPlaced] = useState(false);

  useThree(({ camera }) => {
    if (!isPresenting) {
      camera.position.z = 3;
    }
  });

  useHitTest((hitMatrix) => {
    if (reticleRef.current instanceof THREE.Mesh) {
      const position = new THREE.Vector3();
      position.setFromMatrixPosition(hitMatrix);
      reticleRef.current.position.copy(position);
      if (reticleRef.current) {
        reticleRef.current.rotation.set(-Math.PI / 2, 0, 0);
      }
    }
  });
  const [glbLoad, setGlbLoad] = useState<{ position: any; id: number; glbUrl: string }[]>([]);
  const placeAsset = (e: any) => {
    if (assetPlaced) return;
    let position = e.intersection.object.position.clone();
    let id = Date.now();
    setGlbLoad([...glbLoad, { position, id, glbUrl }]);
    setAssetPlaced(true);
  };

  const [scale, setScale] = useState(0.1);

  const assetInteraction = (e: any) => {
    if (scale > 0.3) return;
    setScale(scale + 0.1);
  };



  return (
    <>
      <OrbitControls />
      <ambientLight />
      {isPresenting &&
        glbLoad.map(({ position, glbUrl }) => {
          return (
            <Interactive onSelect={(event: XRInteractionEvent) => assetInteraction(event)} >
              <Asset position={position} glbUrl={glbUrl} key={glbUrl} scale={scale} />
            </Interactive>
          );
        })}
      {isPresenting && (
        <Interactive onSelect={(event: XRInteractionEvent) => placeAsset(event)}>
          <mesh ref={reticleRef} rotation-x={-Math.PI / 2}>
            <ringGeometry args={[0.1, 0.25, 32]} />
            <meshStandardMaterial color={"white"} />
          </mesh>
        </Interactive>
      )}

      {!isPresenting && <Asset glbUrl={glbUrl} position={undefined} scale={scale} />}
    </>
  );
};

export default XrAsset;