import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

export default function RotatingEarth({ size = 520 }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

useEffect(() => {
  if (!canvasRef.current) return;
  const canvas = canvasRef.current;
  const context = canvas.getContext("2d");
  if (!context) return;

  let timer;
  let observer;

  // DIFERIR CÁLCULO PESADO HASTA QUE LA CPU ESTÉ LIBRE
  const startD3Calculation = () => {
    const dpr = window.devicePixelRatio || 1;
    const W = size;
    const H = size;
    const radius = size / 2.08;

    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width = `${W}px`;
    canvas.style.height = `${H}px`;
    context.scale(dpr, dpr);

    const projection = d3
      .geoOrthographic()
      .scale(radius)
      .translate([W / 2, H / 2])
      .clipAngle(90);

    const path = d3.geoPath().projection(projection).context(context);

    let landFeatures = null;
    const allDots = [];

    const pointInPolygon = (point, polygon) => {
      const [x, y] = point;
      let inside = false;
      for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
        const [xi, yi] = polygon[i];
        const [xj, yj] = polygon[j];
        if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi)
          inside = !inside;
      }
      return inside;
    };

    const pointInFeature = (point, feature) => {
      const { type, coordinates } = feature.geometry;
      if (type === "Polygon") {
        if (!pointInPolygon(point, coordinates[0])) return false;
        for (let i = 1; i < coordinates.length; i++)
          if (pointInPolygon(point, coordinates[i])) return false;
        return true;
      }
      if (type === "MultiPolygon") {
        for (const poly of coordinates) {
          if (pointInPolygon(point, poly[0])) {
            let inHole = false;
            for (let i = 1; i < poly.length; i++)
              if (pointInPolygon(point, poly[i])) { inHole = true; break; }
            if (!inHole) return true;
          }
        }
        return false;
      }
      return false;
    };

    // Espaciado ligero de 24px para minimizar cantidad de puntos
    const generateDots = (feature, spacing = 24) => {
      const dots = [];
      const [[minLng, minLat], [maxLng, maxLat]] = d3.geoBounds(feature);
      const step = spacing * 0.08;
      for (let lng = minLng; lng <= maxLng; lng += step)
        for (let lat = minLat; lat <= maxLat; lat += step)
          if (pointInFeature([lng, lat], feature)) dots.push([lng, lat]);
      return dots;
    };

    const render = () => {
      context.clearRect(0, 0, W, H);
      const scale = projection.scale();
      const sf = scale / radius;

      context.save();
      context.beginPath();
      context.arc(W / 2, H / 2, scale, 0, 2 * Math.PI);
      context.clip();

      context.beginPath();
      context.arc(W / 2, H / 2, scale, 0, 2 * Math.PI);
      context.fillStyle = "rgba(18, 150, 127, 0.85)";
      context.fill();

      if (landFeatures) {
        const graticule = d3.geoGraticule();
        context.beginPath();
        path(graticule());
        context.strokeStyle = "rgba(255, 255, 255, 0.35)";
        context.lineWidth = 0.7 * sf;
        context.stroke();

        context.beginPath();
        landFeatures.features.forEach((f) => path(f));
        context.fillStyle = "rgba(224, 242, 238, 0.95)";
        context.fill();

        context.beginPath();
        landFeatures.features.forEach((f) => path(f));
        context.strokeStyle = "rgba(10, 80, 68, 0.6)";
        context.lineWidth = 0.8 * sf;
        context.stroke();

        allDots.forEach(([lng, lat]) => {
          const p = projection([lng, lat]);
          if (!p) return;
          if (p[0] < 0 || p[0] > W || p[1] < 0 || p[1] > H) return;
          context.beginPath();
          context.arc(p[0], p[1], 1.3 * sf, 0, 2 * Math.PI);
          context.fillStyle = "rgba(18, 150, 127, 0.9)";
          context.fill();
        });
      }

      context.restore();

      context.beginPath();
      context.arc(W / 2, H / 2, scale, 0, 2 * Math.PI);
      context.strokeStyle = "rgba(18, 150, 127, 0.2)";
      context.lineWidth = 1.5 * sf;
      context.stroke();
    };

    const rotation = [0, -20];
    let autoRotate = true;
    let isVisible = true;
    const SPEED = 0.32;

    timer = d3.timer(() => {
      if (autoRotate && isVisible) {
        rotation[0] += SPEED;
        projection.rotate(rotation);
        render();
      }
    });

    observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    fetch(
      "https://raw.githubusercontent.com/martynafford/natural-earth-geojson/refs/heads/master/110m/physical/ne_110m_land.json"
    )
      .then((r) => r.json())
      .then((data) => {
        landFeatures = data;
        data.features.forEach((f) =>
          generateDots(f, 24).forEach(([lng, lat]) => allDots.push([lng, lat]))
        );
        render();
        setLoaded(true);
      })
      .catch(() => setLoaded(true));
  };

  // Programar la ejecución en tiempo de inactividad
  const idleCallbackId = ("requestIdleCallback" in window)
    ? requestIdleCallback(() => startD3Calculation(), { timeout: 1500 })
    : setTimeout(() => startD3Calculation(), 300);

  return () => {
    if ("cancelIdleCallback" in window) {
      cancelIdleCallback(idleCallbackId);
    } else {
      clearTimeout(idleCallbackId);
    }
    if (timer) timer.stop();
    if (observer) observer.disconnect();
  };
}, [size]);

  return (
    <div ref={containerRef} style={{ position: "relative", display: "inline-block", lineHeight: 0 }}>
      <canvas
        ref={canvasRef}
        style={{
          display: "block",
          cursor: "grab",
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.7s ease",
        }}
      />
      {!loaded && (
        <div style={{
          position: "absolute", inset: 0, borderRadius: "50%",
          background: "radial-gradient(circle at 35% 35%, rgba(18,150,127,0.25), rgba(18,150,127,0.1) 60%, transparent)",
          display: "flex", alignItems: "center", justifyCenter: "center",
        }}>
          <div style={{
            width: 28, height: 28,
            border: "2px solid rgba(18,150,127,0.25)",
            borderTopColor: "#12967F", borderRadius: "50%",
            animation: "earth-spin 0.8s linear infinite",
          }} />
        </div>
      )}
      <style>{`@keyframes earth-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}`}</style>
    </div>
  );
}