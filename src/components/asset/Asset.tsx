import { useRef, useState, useEffect } from 'react';
import { useFrame, } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as THREE from 'three';
import axios from 'axios';
import openDatabaseAsset from './openDatabaseAsset';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';

const Asset = ({ position, glbUrl, scale, isLocal }: { position: any, glbUrl: any, scale: any, isLocal: any }) => {
    const [gltf, setGltf] = useState<THREE.Group | null>(null);
    const assetref = useRef<THREE.Group>();
    useEffect(() => {

        const fetchLocalData = async () => {
            try {
                const db = await openDatabaseAsset();
                const transaction = db.transaction("files", "readonly");
                const store = transaction.objectStore("files");
                const request = store.get(glbUrl);
                request.onsuccess = async () => {
                    const response = request.result;
                    const arrayBuffer = await response.arrayBuffer();
                    // Check if file extension is fbx use that loader to parse the file
                    const extension = glbUrl.split('.').pop();
                    if (extension === 'fbx') {
                        const fbxLoader = new FBXLoader();
                        const fbx = await new Promise<THREE.Group>((resolve, reject) => {
                            fbxLoader.parse(arrayBuffer, '', (fbx) => resolve(fbx), reject);
                        });
                        setGltf(fbx);
                    }
                    const gltfLoader = new GLTFLoader();
                    const gltf = await new Promise<THREE.Group>((resolve, reject) => {
                        gltfLoader.parse(arrayBuffer, '', (gltf) => resolve(gltf.scene), reject);
                    });
                    setGltf(gltf);

                };
                request.onerror = () => {
                    console.error('Error with file from IndexDB:', request.error);
                };

            } catch (error) {
                console.error('Error fetching localData:', error);
            }
        }

        const fetchData = async () => {
            try {
                const response = await axios.get(`/assets/${glbUrl}/${glbUrl}.glb`, { responseType: 'arraybuffer' });
                const gltfLoader = new GLTFLoader();
                const gltf = await new Promise<THREE.Group>((resolve, reject) => {
                    gltfLoader.parse(response.data, '', (gltf) => resolve(gltf.scene), reject);
                });
                setGltf(gltf);
            } catch (error) {
                console.error('Error fetching GLTF from server:', error);
                // alert('Error fetching file. Please try later');
                // window.location.href = '/view';

            }
        };
        if (isLocal == "true") fetchLocalData();
        else fetchData();
        if (assetref.current && gltf) {
            assetref.current.scale.set(scale, scale, scale);
        }
    }, [glbUrl]);

    useFrame(() => {
        if (assetref.current) {
            // Update your animation or other logic here
            assetref.current.scale.set(scale, scale, scale);
        }
    });

    return (
        <>
            {gltf && <primitive object={gltf} ref={assetref} position={position} />}
            <OrbitControls />
            <ambientLight intensity={0.5} />
        </>
    );
};

export default Asset;