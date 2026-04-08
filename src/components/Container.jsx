import './Container.css';

export default function Container({ children, className = '' }) {
  return (
    <div className={`layout-container ${className}`}>
      {children}
    </div>
  );
}