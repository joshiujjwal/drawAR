import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Interactive, useHitTest, useXR, XRInteractionEvent } from "@react-three/xr";
import { useState } from "react";
import React from "react";
import Cube from "./Cube";
import * as THREE from "three";

const XrHitCube = () => {
  const reticleRef = React.useRef<THREE.Mesh>(null);

  const { isPresenting } = useXR();

  useThree(({ camera }) => {
    if (!isPresenting) {
      camera.position.z = 3;
    }
  });

  useHitTest((hitMatrix, hit) => {
    if (reticleRef.current instanceof THREE.Mesh) {
      const position = new THREE.Vector3();
      position.setFromMatrixPosition(hitMatrix);
      console.log(hit);
      reticleRef.current.position.copy(position);

      if (reticleRef.current) {
        reticleRef.current.rotation.set(-Math.PI / 2, 0, 0);
      }
    }
  });

  const [cubes, setCubes] = useState<{ position: any; id: number; }[]>([]);

  const placeCube = (e: any) => {
    let position = e.intersection.object.position.clone();
    let id = Date.now();
    setCubes([...cubes, { position, id }]);
  };

  return (
    <>
      <OrbitControls />
      <ambientLight />
      {isPresenting &&
        cubes.map(({ position, id }) => {
          return <Cube key={id} position={position} />;
        })}
      {isPresenting && (
        <Interactive onSelect={(event: XRInteractionEvent) => placeCube(event)}>
          <mesh ref={reticleRef} rotation-x={-Math.PI / 2}>
            <ringGeometry args={[0.1, 0.25, 32]} />
            <meshStandardMaterial color={"white"} />
          </mesh>
        </Interactive>
      )}

      {!isPresenting && <Cube/>}
    </>
  );
};

export default XrHitCube;