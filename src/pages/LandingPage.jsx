import { useState, lazy, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';

// Componentes estáticos superiores (Carga inmediata)
import Navbar from '../components/Navbar';
import PoliciesSidebar from '../components/PoliciesSidebar';
import Hero from '../components/Hero';
import LazyBoundary from '../components/LazyBoundary';

// Carga perezosa de los módulos pesados
const Sectores = lazy(() => import("../components/Sectores"));
const About = lazy(() => import('../components/About'));
const Services = lazy(() => import('../components/Services'));
const PresenceSection = lazy(() => import("../components/PresenceSection/PresenceSection"));
const Testimonials = lazy(() => import('../components/Testimonials'));
const Team = lazy(() => import('../components/Team'));
const Contact = lazy(() => import('../components/Contact'));
const Footer = lazy(() => import('../components/Footer'));

export default function LandingPage() {
  const [policiesOpen, setPoliciesOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <Navbar onOpenPolicies={() => setPoliciesOpen(true)} onOpenLogin={() => navigate('/login')} />
      <PoliciesSidebar open={policiesOpen} onClose={() => setPoliciesOpen(false)} />

      {/* 1. El Hero carga sus animaciones inmediatamente */}
      <Hero />

      {/* 2. El resto de módulos solo se cargan/renderizan conforme haces Scroll */}
      <Suspense fallback={<div className="h-32 w-full" />}>
        <LazyBoundary>
          <Sectores />
        </LazyBoundary>

        <LazyBoundary>
          <About />
        </LazyBoundary>

        <LazyBoundary>
          <Services />
        </LazyBoundary>

        <LazyBoundary>
          <PresenceSection />
        </LazyBoundary>

        <LazyBoundary>
          <Testimonials />
        </LazyBoundary>

        <LazyBoundary>
          <Team />
        </LazyBoundary>

        <LazyBoundary>
          <Contact />
        </LazyBoundary>

        <LazyBoundary>
          <Footer />
        </LazyBoundary>
      </Suspense>
    </div>
  );
}