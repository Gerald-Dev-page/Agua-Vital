import Container from './Container';
import logoAgua from '../public/img/Logo-Agua.png';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <Container>
        <div className="footer-content">
          <div className="footer-brand">
            <img src={logoAgua} alt="Logo Agua Vital" className="footer-logo" />
            <p>Agua purificada de máxima calidad. Servicio de excelencia para tu hogar u oficina en San Luis.</p>
          </div>
          <div className="footer-links">
            <h4>Empresa</h4>
            <a href="#beneficios">Beneficios</a>
            <a href="#precios">Precios</a>
            <a href="#ubicacion">Ubicación</a>
          </div>
          <div className="footer-contact">
            <h4>Contacto</h4>
            <p>San Luis, Argentina</p>
            <a 
              href="https://www.instagram.com/aguavital.26/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              @aguavital.26
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Agua Vital. Todos los derechos reservados.</p>
          <p className="developer-credit">
            Desarrollado por <a href="https://geralddev.com.ar/" target="_blank" rel="noopener noreferrer">Gerald Dev</a>
          </p>
        </div>
      </Container>
    </footer>
  );
}