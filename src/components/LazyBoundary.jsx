import { useState, useEffect, useRef } from "react";

export default function LazyBoundary({ children, threshold = 0.1, rootMargin = "200px" }) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Cuando el usuario está a 200px de llegar al módulo, se monta y renderiza
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Una vez montado, no se desmonta
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return (
    <div ref={containerRef} className="min-h-[200px] w-full">
      {isVisible ? children : <div className="h-48 w-full animate-pulse bg-slate-50/50 rounded-xl" />}
    </div>
  );
}