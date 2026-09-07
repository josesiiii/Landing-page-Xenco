import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import PoliciesSidebar from '../components/PoliciesSidebar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function LandingPage() {
  const [policiesOpen, setPoliciesOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <Navbar onOpenPolicies={() => setPoliciesOpen(true)} onOpenLogin={() => navigate('/login')} />
      <PoliciesSidebar open={policiesOpen} onClose={() => setPoliciesOpen(false)} />

      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}
