"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { MeshDistortMaterial, Sphere, Float } from "@react-three/drei";

function LiquidBlob() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            // Very slow, organic rotation
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.15;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
        }
    });

    return (
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
            <Sphere args={[1, 128, 128]} scale={2.5}> {/* High poly for smooth liquid look */}
                <MeshDistortMaterial
                    color="#000000" // Pure Black
                    attach="material"
                    distort={0.55} // Stronger distortion for "blob" shape
                    speed={1.5} // Slower, gooey speed
                    roughness={0.1} // Glossy
                    metalness={0.2} // Plastic/Liquid feel
                    bumpScale={0.005}
                />
            </Sphere>
        </Float>
    );
}

// Background Lights to make the black blob visible/glossy
function Lights() {
    return (
        <>
            <ambientLight intensity={0.8} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} castShadow />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#ffffff" />
            <pointLight position={[0, 5, 5]} intensity={0.5} color="#dc2626" /> {/* Subtle Red tint matching brand */}
        </>
    )
}

export default function HeroBackground3D() {
    return (
        <div className="w-full h-full absolute inset-0 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }} className="w-full h-full" gl={{ antialias: true, alpha: true }}>
                <Lights />
                <LiquidBlob />
            </Canvas>
        </div>
    );
}
