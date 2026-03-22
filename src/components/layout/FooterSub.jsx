import { Link } from 'react-router-dom'

export default function FooterSub() {
  return (
    <footer className="footer-sub">
      <div className="footer-sub-inner">
        <Link to="/">← Retour au site</Link>
        <span>© 2025 Oliverie de Montpellier</span>
      </div>
    </footer>
  )
}
