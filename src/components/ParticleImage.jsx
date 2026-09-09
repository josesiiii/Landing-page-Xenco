"use client";

import React, { useEffect, useRef, useState } from "react";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

class Particle {
  constructor(x, y, size, color, dispersion, returnSpd) {
    this.x = x + (Math.random() - 0.5) * 10;
    this.y = y + (Math.random() - 0.5) * 10;
    this.originX = x;
    this.originY = y;
    this.vx = (Math.random() - 0.5) * 5;
    this.vy = (Math.random() - 0.5) * 5;
    this.size = size;
    this.color = color;
    this.dispersion = dispersion;
    this.returnSpd = returnSpd;
  }

  update(mouseX, mouseY) {
    const dx = mouseX - this.x;
    const dy = mouseY - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const interactionRadius = 130;

    if (distance < interactionRadius && mouseX !== -1000 && mouseY !== -1000) {
      const forceDirectionX = dx / distance;
      const forceDirectionY = dy / distance;
      const force = (interactionRadius - distance) / interactionRadius;

      const repulsionX = forceDirectionX * force * this.dispersion;
      const repulsionY = forceDirectionY * force * this.dispersion;

      this.vx -= repulsionX;
      this.vy -= repulsionY;
    }

    this.vx += (this.originX - this.x) * this.returnSpd;
    this.vy += (this.originY - this.y) * this.returnSpd;

    this.vx *= 0.85;
    this.vy *= 0.85;

    const distToOrigin = Math.sqrt(
      Math.pow(this.x - this.originX, 2) +
        Math.pow(this.y - this.originY, 2)
    );

    if (distToOrigin < 1 && Math.random() > 0.95) {
      this.vx += (Math.random() - 0.5) * 0.2;
      this.vy += (Math.random() - 0.5) * 0.2;
    }

    this.x += this.vx;
    this.y += this.vy;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

export default function ParticleImage({
  src,
  className,
  particleSize = 1.8,
  particleDensity = 2.2, // Densidad optimizada para mayor nitidez y tamaño grande
  dispersionStrength = 18,
  returnSpeed = 0.07,
}) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || !src) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    let animationFrameId;
    let particles = [];
    let mouseX = -1000;
    let mouseY = -1000;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = src;

    img.onload = () => {
      const container = containerRef.current;
      if (!container) return;

      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;

      const dpr = window.devicePixelRatio || 1;
      canvas.width = containerWidth * dpr;
      canvas.height = containerHeight * dpr;
      canvas.style.width = `${containerWidth}px`;
      canvas.style.height = `${containerHeight}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, containerWidth, containerHeight);

      // MODIFICACIÓN CLAVE: Factor de escala aumentado (0.95) para ocupar casi todo el 50% de la vista
      const hRatio = containerWidth / img.width;
      const vRatio = containerHeight / img.height;
      const ratio = Math.min(hRatio, vRatio) * 0.95; 

      const imgWidth = img.width * ratio;
      const imgHeight = img.height * ratio;
      const imgX = (containerWidth - imgWidth) / 2;
      const imgY = (containerHeight - imgHeight) / 2;

      ctx.drawImage(img, imgX, imgY, imgWidth, imgHeight);

      const textCoordinates = ctx.getImageData(
        0,
        0,
        canvas.width,
        canvas.height
      );

      particles = [];
      const step = Math.max(1, Math.floor(particleDensity * dpr));

      for (let y = 0; y < textCoordinates.height; y += step) {
        for (let x = 0; x < textCoordinates.width; x += step) {
          const index = (y * textCoordinates.width + x) * 4;
          const alpha = textCoordinates.data[index + 3];

          if (alpha > 128) {
            const r = textCoordinates.data[index];
            const g = textCoordinates.data[index + 1];
            const b = textCoordinates.data[index + 2];
            const particleColor = `rgba(${r}, ${g}, ${b}, ${alpha / 255})`;

            particles.push(
              new Particle(
                x / dpr,
                y / dpr,
                particleSize,
                particleColor,
                dispersionStrength,
                returnSpeed
              )
            );
          }
        }
      }

      const animate = () => {
        ctx.clearRect(0, 0, containerWidth, containerHeight);

        particles.forEach((particle) => {
          particle.update(mouseX, mouseY);
          particle.draw(ctx);
        });

        animationFrameId = requestAnimationFrame(animate);
      };

      animate();
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [
    isVisible,
    src,
    particleSize,
    particleDensity,
    dispersionStrength,
    returnSpeed,
  ]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "w-full h-full min-h-[500px] flex items-center justify-center relative touch-none pointer-events-auto",
        className
      )}
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}