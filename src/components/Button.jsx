import './Button.css';

export default function Button({ children, variant = 'primary', className = '', onClick }) {
  return (
    <button className={`modern-btn btn-${variant} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}