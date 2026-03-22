import { Link } from 'react-router-dom'
import { useCart } from '../../contexts/CartContext'

export default function Nav() {
  const { totalCount, openCart } = useCart()

  return (
    <nav>
      <Link to="/" className="nav-logo">
        <img src="/logo.svg" alt="Oliveraie de Montpellier - Huile d'Olive Artisanale" />
        <div>
          <div className="nav-logo-text">Oliveraie de Montpellier</div>
          <div className="nav-logo-sub">Vierge Extra · Origine France · Bio en certification</div>
        </div>
      </Link>
      <div className="nav-links">
        <Link to="/">Accueil</Link>
        <Link to="/boutique">Boutique</Link>
        <Link to="/visites">Visites</Link>
        <Link to="/parrainage">Parrainer un Olivier</Link>
        <Link to="/certifications">Certifications</Link>
        <Link to="/professionnels">Professionnels</Link>
        <Link to="/assistance">Assistance</Link>
        <button type="button" className="nav-cta" onClick={openCart} style={{ border: 'none', background: 'none', cursor: 'pointer', height: 72, padding: '0 1.2rem', display: 'flex', alignItems: 'center' }}>
          🛒 Panier <span className="cart-count">{totalCount}</span>
        </button>
      </div>
    </nav>
  )
}
