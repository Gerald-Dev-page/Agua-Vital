import Container from './Container';
import './Benefits.css';

export default function Benefits() {
  const benefits = [
    { title: "Pureza Garantizada", desc: "Procesos de filtrado de última tecnología para asegurar la máxima calidad." },
    { title: "Entrega Rápida", desc: "Logística optimizada para que nunca te falte hidratación en casa o la oficina." },
    { title: "Soporte 24/7", desc: "Atención al cliente personalizada y gestión de pedidos simplificada." }
  ];

  return (
    <section id="beneficios" className="benefits-section">
      <Container>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className={`benefit-card reveal delay-${(index + 1) * 100}`}>
              <div className="benefit-icon">💧</div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-desc">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}