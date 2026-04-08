import { useState, useEffect, useRef } from "react";
import Container from "./Container";
import PricingCard from "./PricingCard";
import "./PricingSection.css";

export default function PricingSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const gridRef = useRef(null);
  const cardRefs = useRef([]);

  const products = [
    {
      title: "Bidón 20 Litros",
      unitPrice: "$2.200",
      promoPrice: "$4.000",
      promoQty: "2 bidones",
      containerPrice: "$12.000",
      features: [
        "Ideal para el consumo familiar",
        "Máxima pureza garantizada",
        "Envío a domicilio sin cargo"
      ],
      isPopular: true
    },
    {
      title: "Bidón 12 Litros",
      unitPrice: "$1.800",
      promoPrice: "$3.500",
      promoQty: "2 bidones",
      containerPrice: "$10.000",
      features: [
        "Formato más liviano y práctico",
        "Fácil de manipular",
        "Envío a domicilio sin cargo"
      ],
      isPopular: false
    },
    {
      title: "Dispenser",
      unitPrice: "$9.000",
      promoPrice: null,
      containerPrice: null,
      features: [
        "Accesorio esencial",
        "Material resistente y duradero",
        "Compatible con todos los bidones"
      ],
      isPopular: false
    }
  ];

  useEffect(() => {
    const observerOptions = {
      root: gridRef.current,
      threshold: 0.5,
      rootMargin: "0px",
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const targetIndex = cardRefs.current.indexOf(entry.target);
          if (targetIndex !== -1) {
            setActiveIndex(targetIndex);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
      observer.disconnect();
    };
  }, [products.length]);

  return (
    <section id="precios" className="pricing-section">
      <Container>
        <div className="pricing-header reveal">
          <h2>Nuestros Productos</h2>
          <p>Calidad y pureza directamente en tu hogar.</p>
        </div>

        <div ref={gridRef} className="pricing-grid">
          {products.map((product, index) => (
            <div
              ref={(el) => (cardRefs.current[index] = el)}
              key={index}
              className={`reveal delay-${(index + 1) * 100}`}
            >
              <PricingCard {...product} />
            </div>
          ))}
        </div>

        <div className="carousel-pagination">
          {products.map((_, index) => (
            <span
              key={index}
              className={`carousel-dot ${activeIndex === index ? "active" : ""}`}
            />
          ))}
        </div>

        <div className="pricing-info-footer reveal delay-400">
          <p>
            * Los precios de los bidones corresponden a la recarga de agua. El
            envase se abona por única vez en el primer pedido.
          </p>
        </div>
      </Container>
    </section>
  );
}