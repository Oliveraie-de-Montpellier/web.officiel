import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../../contexts/CartContext'

const NAV_LINKS = [
  { to: '/', label: 'Accueil' },
  { to: '/boutique', label: 'Boutique' },
  { to: '/visites', label: 'Visites' },
  { to: '/parrainage', label: 'Parrainer un Olivier' },
  { to: '/certifications', label: 'Certifications' },
  { to: '/professionnels', label: 'Professionnels' },
  { to: '/assistance', label: 'Assistance' },
]

export default function Nav() {
  const { totalCount, openCart } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav>
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <img src="/logo.png" alt="Oliveraie de Montpellier" />
          <div>
            <div className="nav-logo-text">Oliveraie de Montpellier</div>
            <div className="nav-logo-sub">Vierge Extra · Origine France · Bio en certification</div>
          </div>
        </Link>

        {/* Liens desktop */}
        <div className="nav-links">
          {NAV_LINKS.map((l) => (
            <Link key={l.to} to={l.to}>{l.label}</Link>
          ))}
          <button type="button" className="nav-cta" onClick={openCart} style={{ border: 'none', background: 'none', cursor: 'pointer', height: 72, padding: '0 1.2rem', display: 'flex', alignItems: 'center' }}>
            🛒 Panier <span className="cart-count">{totalCount}</span>
          </button>
        </div>

        {/* Contrôles mobile */}
        <div className="nav-mobile-controls">
          <button type="button" className="nav-cart-btn" onClick={openCart} aria-label="Panier">
            🛒 <span className="cart-count">{totalCount}</span>
          </button>
          <button
            type="button"
            className={`nav-hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Menu mobile déroulant */}
      {menuOpen && (
        <div className="nav-mobile-menu">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`nav-mobile-link ${location.pathname === l.to ? 'active' : ''}`}
              onClick={closeMenu}
            >
              {l.label}
            </Link>
          ))}
          <button type="button" className="nav-mobile-cart" onClick={() => { openCart(); closeMenu() }}>
            🛒 Panier {totalCount > 0 && <span className="cart-count">{totalCount}</span>}
          </button>
        </div>
      )}
    </>
  )
}
