import Container from './Container';
import './LocationSection.css';

export default function LocationSection() {
  return (
    <section className="location-section">
      <Container>
        <div className="location-content">
          <span className="icon">📍</span>
          <h2>BARRIO HORNERO</h2>
          <p>Av. Salvador Segado y Narciso Sosa Morales</p>
          <p><strong>Casa 1 – Manzana 6</strong></p>
        </div>
      </Container>
    </section>
  );
}

/* LocationSection.css */
/*
.location-section { background: var(--light-bg); padding: 60px 0; text-align: center; }
.location-content h2 { margin: 15px 0; }
.location-content p { font-size: 1.2rem; }
*/