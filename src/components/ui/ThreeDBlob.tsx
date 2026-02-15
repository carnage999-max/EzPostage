"use client";

import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function AnimatedBlob() {
    const meshRef = useRef<THREE.Mesh>(null);
    const geometryRef = useRef<THREE.SphereGeometry | null>(null);

    useEffect(() => {
        if (!meshRef.current) return;

        const geometry = new THREE.SphereGeometry(1, 64, 64);
        geometryRef.current = geometry;

        const positionAttribute = geometry.attributes.position;
        const originalPositions = new Float32Array(positionAttribute.array);

        // @ts-ignore
        geometry.userData.originalPositions = originalPositions;

        meshRef.current.geometry = geometry;
    }, []);

    useFrame((state) => {
        if (!meshRef.current || !geometryRef.current) return;

        const time = state.clock.elapsedTime;
        const positionAttribute = geometryRef.current.attributes.position;
        // @ts-ignore
        const originalPositions = geometryRef.current.userData.originalPositions;

        if (!originalPositions) return;

        for (let i = 0; i < positionAttribute.count; i++) {
            const x = originalPositions[i * 3];
            const y = originalPositions[i * 3 + 1];
            const z = originalPositions[i * 3 + 2];

            const distortion =
                Math.sin(x * 2 + time * 0.5) * 0.2 +
                Math.sin(y * 2 + time * 0.7) * 0.2 +
                Math.sin(z * 2 + time * 0.3) * 0.2;

            positionAttribute.setXYZ(
                i,
                x * (1 + distortion),
                y * (1 + distortion),
                z * (1 + distortion)
            );
        }

        positionAttribute.needsUpdate = true;
        geometryRef.current.computeVertexNormals();

        meshRef.current.rotation.x = Math.sin(time * 0.3) * 0.1;
        meshRef.current.rotation.y = Math.sin(time * 0.2) * 0.1;
    });

    return (
        <mesh ref={meshRef} scale={3}>
            <meshStandardMaterial
                color="#000000"
                roughness={0.3}
                metalness={0.2}
            />
        </mesh>
    );
}

export function ThreeDBlob() {
    return (
        <Canvas
            camera={{ position: [0, 0, 5], fov: 50 }}
            dpr={[1, 2]}
            gl={{ alpha: true, antialias: true }}
            style={{ width: '100%', height: '100%' }}
        >
            <ambientLight intensity={0.7} />
            <directionalLight position={[10, 10, 5]} intensity={1.5} />
            <pointLight position={[-10, -10, -5]} intensity={0.6} />
            <AnimatedBlob />
        </Canvas>
    );
}
