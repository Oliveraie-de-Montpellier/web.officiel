import { Link } from 'react-router-dom'
import { useCart } from '../../contexts/CartContext'

export default function NavSub({ subtitle }) {
  const { totalCount, openCart } = useCart()
  return (
    <nav className="nav-sub">
      <Link to="/" className="nav-logo">
        <img src="/logo.svg" alt="Oliverie de Montpellier" />
        <div>
          <div className="nav-logo-text">Oliverie de Montpellier</div>
          <div className="nav-logo-sub">{subtitle}</div>
        </div>
      </Link>
      <div className="nav-links">
        <Link to="/">Accueil</Link>
        <Link to="/boutique">Boutique</Link>
        <Link to="/visites">Visites</Link>
        <Link to="/professionnels">Professionnels</Link>
        <Link to="/assistance">Assistance</Link>
        <button type="button" onClick={openCart} style={{ background: 'var(--gold)', color: 'var(--olive-dark)', border: 'none', padding: '0 1rem', borderRadius: 2, fontWeight: 600, fontSize: '0.7rem', cursor: 'pointer', height: 36, display: 'flex', alignItems: 'center', gap: 6 }}>
          🛒 Panier <span className="cart-count">{totalCount}</span>
        </button>
      </div>
    </nav>
  )
}
