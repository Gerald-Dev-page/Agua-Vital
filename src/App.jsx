import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import PricingSection from './components/PricingSection';
import OrderSection from './components/OrderSection';
import LocationMap from './components/LocationMap';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  // Lógica para inicializar animaciones en scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-layout">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <PricingSection />
        <OrderSection />
        <LocationMap />
      </main>
      <Footer />
    </div>
  );
}