import Container from './Container';
import Button from './Button';
import BidonesPremium from '../public/img/BidonesPremium.png'; 
import './Hero.css';

export default function Hero() {
  // Configuramos tu número y el mensaje por defecto para el botón de contacto
  const waNumber = "5492664825711";
  const waMessage = encodeURIComponent("Hola! Me comunico desde la página web, quiero consultar por el servicio de agua.");

  return (
    <section className="hero-section">
      <Container className="hero-container">
        <div className="hero-content reveal">
          <span className="hero-badge">Servicio Premium en San Luis</span>
          <h1 className="hero-title">
            Agua pura y fresca, <br/>
            <span className="text-gradient">directo a tu puerta.</span>
          </h1>
          <p className="hero-subtitle">
            Garantizamos la máxima pureza en cada gota. Suscríbete hoy y mejora tu calidad de vida con nuestra distribución eficiente.
          </p>
          <div className="hero-buttons">
            {/* Acción 1: Anclaje a la sección de precios */}
            <Button 
              variant="primary" 
              onClick={() => window.location.href = '#precios'}
            >
              Ver Precios
            </Button>
            
            {/* Acción 2: Link directo a tu WhatsApp */}
            <Button 
              variant="secondary" 
              onClick={() => window.open(`https://wa.me/${waNumber}?text=${waMessage}`, '_blank')}
            >
              Consultar por WhatsApp
            </Button>
          </div>
        </div>
        
        <div className="hero-image-wrapper reveal delay-200">
          <div className="hero-image-bg"></div>
          
          <div className="premium-image-container">
            <img src={BidonesPremium} alt="Bidones de Agua Premium" className="hero-image" />
          </div>
        </div>
      </Container>
      
      <div className="hero-shape-divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
    </section>
  );
}