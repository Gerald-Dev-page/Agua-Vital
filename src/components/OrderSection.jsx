import Container from './Container';
import Button from './Button';
import './OrderSection.css';

export default function OrderSection() {
  const waNumber = "5492664825711";
  const waMessage = encodeURIComponent("Hola! Me comunico desde la página web, quiero hacer un pedido de agua a domicilio.");

  return (
    <section id="pedido" className="order-section">
      <Container>
        <div className="order-box reveal">
          <div className="order-content">
            <h2>Hacé tu pedido ahora</h2>
            <p>Escribinos directo por WhatsApp. Coordinamos la entrega a tu domicilio de forma rápida y sencilla.</p>
          </div>
          <div className="order-actions">
            <Button 
              variant="outline" 
              onClick={() => window.open(`https://wa.me/${waNumber}?text=${waMessage}`, '_blank')}
            >
              Pedir por WhatsApp
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}