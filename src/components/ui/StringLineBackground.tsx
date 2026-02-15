"use client";

import { useEffect, useRef } from "react";

export function StringLineBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let time = 0;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", resize);
        resize();

        const draw = () => {
            time += 0.005;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Configuration for lines
            const lineCount = 25; // Increased from 15
            const amplitude = 80; // Increased from 50
            const frequency = 0.01;

            ctx.lineWidth = 1.5; // Thicker lines

            for (let i = 0; i < lineCount; i++) {
                // More visible gradient
                const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
                gradient.addColorStop(0, "rgba(220, 38, 38, 0)"); // Red fade in
                gradient.addColorStop(0.5, `rgba(220, 38, 38, ${0.2 + (i * 0.015)})`); // More visible Red
                gradient.addColorStop(1, "rgba(220, 38, 38, 0)"); // Fade out

                ctx.strokeStyle = gradient;
                ctx.beginPath();

                const yOffset = (canvas.height / lineCount) * i;

                for (let x = 0; x < canvas.width; x += 5) {
                    // Complex wave function for "string" movement
                    const y = yOffset +
                        Math.sin(x * frequency + time + i) * amplitude * Math.sin(time * 0.5) +
                        Math.cos(x * frequency * 0.5 + time) * amplitude * 0.5;

                    if (x === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                }
                ctx.stroke();
            }

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 pointer-events-none opacity-90" // Increased opacity
            style={{ width: '100%', height: '100%' }}
        />
    );
}
