import Container from './Container';
import Button from './Button';
import './LocationMap.css';

export default function LocationMap() {
  // 1. URL para el botón (tu enlace original)
  const mapDirectLink = "https://www.google.com/maps/place/33%C2%B018'49.9%22S+66%C2%B019'00.7%22W/@-33.3138555,-66.3194383,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-33.3138555!4d-66.3168634?hl=es&entry=ttu&g_ep=EgoyMDI2MDMzMC4wIKXMDSoASAFQAw%3D%3D";
  
  // 2. URL para el iframe (formato Embed permitido por Google)
  // Utilizamos la dirección para generar la vista del mapa incrustado
  const addressQuery = `33°18'49.9"S 66°19'00.7"W`;
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(addressQuery)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="ubicacion" className="location-section reveal">
      <div className="map-container">
        {/* Iframe usando la URL de embed permitida */}
        <iframe
          src={mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Ubicación de la planta de Agua"
        ></iframe>
        
        <Container className="map-card-wrapper">
          <div className="map-floating-card">
            <div className="map-card-header">
              <h3>Nuestra Planta</h3>
            </div>
            <div className="map-card-body">
              <div className="address-line">
                <strong>Dirección:</strong> Barrio Hornero, Av. Salvador Segado y Narciso Sosa Morales.
              </div>
              <div className="address-line">
                <strong>Ubicación:</strong> Casa 1 - Manzana 6, San Luis.
              </div>
            </div>
            <Button 
              variant="primary" 
              className="w-100"
              onClick={() => window.open(mapDirectLink, '_blank')}
            >
              Cómo llegar
            </Button>
          </div>
        </Container>
      </div>
    </section>
  );
}