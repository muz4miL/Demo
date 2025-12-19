"use client";

import { useEffect, useRef } from "react";

export default function Antigravity({
    count = 200,
    particleSize = 1.2,
    color = "#F7E7CE",
    waveSpeed = 0.2,
}) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        // Parse hex color to RGB
        const hexToRgb = (hex) => {
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result
                ? {
                    r: parseInt(result[1], 16),
                    g: parseInt(result[2], 16),
                    b: parseInt(result[3], 16),
                }
                : null;
        };

        const rgb = hexToRgb(color);

        class Particle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.baseX = this.x;
                this.baseY = this.y;
                this.size = Math.random() * particleSize + 1;
                this.speedX = (Math.random() - 0.5) * 0.3;
                this.speedY = (Math.random() - 0.5) * 0.3;
                this.opacity = Math.random() * 0.4 + 0.6; // Increased from 0.5 + 0.3
            }

            update(time) {
                // Gentle wave motion
                this.x = this.baseX + Math.sin(time * waveSpeed + this.baseY * 0.01) * 20;
                this.y = this.baseY + Math.cos(time * waveSpeed + this.baseX * 0.01) * 20;

                // Slow drift
                this.baseX += this.speedX;
                this.baseY += this.speedY;

                // Wrap around
                if (this.baseX < -50) this.baseX = canvas.width + 50;
                if (this.baseX > canvas.width + 50) this.baseX = -50;
                if (this.baseY < -50) this.baseY = canvas.height + 50;
                if (this.baseY > canvas.height + 50) this.baseY = -50;
            }

            draw() {
                if (!rgb) return;

                // Add glow first
                ctx.shadowBlur = 15;
                ctx.shadowColor = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${this.opacity})`;

                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${this.opacity})`;
                ctx.fill();
            }
        }

        const particles = Array.from({ length: count }, () => new Particle());
        let animationId;
        let startTime = Date.now();

        const animate = () => {
            const currentTime = (Date.now() - startTime) / 1000;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.shadowBlur = 0;

            particles.forEach((particle) => {
                particle.update(currentTime);
                particle.draw();
            });

            animationId = requestAnimationFrame(animate);
        };

        animate();

        // Handle resize
        const handleResize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            particles.forEach((p) => p.reset());
        };

        window.addEventListener("resize", handleResize);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", handleResize);
        };
    }, [count, particleSize, color, waveSpeed]);

    return (
        <canvas
            ref={canvasRef}
            className="w-full h-full"
            style={{ background: "transparent" }}
        />
    );
}
