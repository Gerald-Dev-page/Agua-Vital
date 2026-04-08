import Container from './Container';
import Button from './Button';
import './Header.css';
import logoAgua from '../public/img/Logo-Agua.png';
export default function Header() {
  return (
    <header className="main-header">
      <Container className="header-container">
        <div className="logo-container">
          <img src={logoAgua} alt="Logo" className="header-logo" />
        </div>
        <nav className="main-nav">
          <a href="#beneficios" className="nav-link">Beneficios</a>
          <a href="#precios" className="nav-link">Planes</a>
          <a href="#ubicacion" className="nav-link">Ubicación</a>
        </nav>
        <div className="header-actions">
          <Button variant="primary" onClick={() => window.location.href='#pedido'}>
            Hacer Pedido
          </Button>
        </div>
      </Container>
    </header>
  );
}