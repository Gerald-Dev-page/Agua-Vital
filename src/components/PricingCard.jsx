import Button from './Button';
import './PricingCard.css';

export default function PricingCard({ title, unitPrice, promoPrice, promoQty, containerPrice, features, isPopular }) {
  const waNumber = "5492664825711";
  const waMessage = encodeURIComponent(`Hola! Me interesa consultar por: ${title}.`);

  return (
    <div className={`pricing-card ${isPopular ? 'popular' : ''}`}>
      {isPopular && <div className="popular-badge">Más Elegido</div>}
      
      <div className="pricing-card-header">
        <h3 className="pricing-title">{title}</h3>
        
        <div className="pricing-main-price">
          <span className="price-label">Precio Unidad</span>
          <span className="price-value">{unitPrice}</span>
        </div>

        {/* Renderizado condicional de la promoción */}
        {promoPrice && (
          <div className="pricing-promo-box">
            <span className="promo-tag">Promo 2x</span>
            <span className="promo-value">{promoPrice}</span>
          </div>
        )}

        {/* Renderizado condicional del precio del envase */}
        {containerPrice && (
          <div className="container-sale-tag">
            Venta de envase: <strong>{containerPrice}</strong>
          </div>
        )}
      </div>

      <ul className="pricing-features">
        {features.map((feature, idx) => (
          <li key={idx}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      <div className="pricing-action">
        <Button 
          variant={isPopular ? 'primary' : 'secondary'} 
          className="w-100"
          onClick={() => window.open(`https://wa.me/${waNumber}?text=${waMessage}`, '_blank')}
        >
          Pedir ahora
        </Button>
      </div>
    </div>
  );
}