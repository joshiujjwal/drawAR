import { useRef, useState, useEffect } from 'react';
import { useFrame, } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as THREE from 'three';
import axios from 'axios';
import { Buffer } from 'buffer';

const Asset = ({ position, glbUrl, nscale }: { position: any, glbUrl: any, nscale: number }) => {
    const [gltf, setGltf] = useState<THREE.Group | null>(null);
    const assetref = useRef<THREE.Group>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/assets/${glbUrl}/${glbUrl}.glb`, { responseType: 'arraybuffer' });
                const gltfLoader = new GLTFLoader();
                const gltf = await new Promise<THREE.Group>((resolve, reject) => {
                    gltfLoader.parse(response.data, '', (gltf) => resolve(gltf.scene), reject);
                });
                setGltf(gltf);
            } catch (error) {
                console.error('Error fetching GLTF:', error);
                alert('Error fetching file. Please try later');
                window.location.href = '/view';

            }
        };

        fetchData();
        if (assetref.current && gltf) {
            assetref.current.scale.set(0.1, 0.1, 0.1);
        }
    }, [glbUrl]);

    useFrame(() => {
        if (assetref.current) {
            // Update your animation or other logic here
            assetref.current.scale.set(nscale, nscale, nscale);
        }
    });

    return (
        <>
            {gltf && <primitive object={gltf} ref={assetref} position={position} />}
            <OrbitControls />
        </>
    );
};

export default Asset;