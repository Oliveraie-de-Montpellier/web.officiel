import { Link } from 'react-router-dom'

import InstaIcon from "../ui/InstaIcon.jsx"

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <img src="/logo.png" alt="Oliveraie de Montpellier" style={{ height: 56, width: 56, objectFit: 'cover', borderRadius: '50%', marginBottom: '0.5rem' }} />
          <div className="footer-logo">Oliveraie de Montpellier</div>
          <div className="footer-tagline">Vierge Extra · Origine France · Bio en certification</div>
          <p className="footer-brand-desc">
            Quatre générations de passion pour l'olivier. 500 oliviers centenaires plantés par notre arrière-grand-père sur 1,5 ha en Occitanie. Huile d'olive vierge extra, extraction mécanique à froid, sans additifs, traçable lot par lot.
          </p>
          <div className="footer-contact-row">📞 <a href="tel:+33467000000">+33 (0)4 67 00 00 00</a></div>
          <div className="footer-contact-row">✉️ <a href="mailto:contact@oliviersheritage.fr">contact@oliviersheritage.fr</a></div>
          <div className="footer-contact-row">✉️ <a href="mailto:contact@oliviersheritage.fr">contact@oliviersheritage.fr</a></div>
          <div className="footer-contact-row"><a href="https://www.instagram.com/oliveraie_de_montpellier?igsh=eWgyeHI0amxoanNh">
            <InstaIcon style={{width: "1rem", marginRight: ".4rem", position: "relative", top: ".2rem"}}/> rejoignez nous
          </a></div>

        </div>
        <div className="footer-col">
          <h4>Navigation</h4>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/boutique">Boutique</Link></li>
            <li><Link to="/visites">Visites & Réservations</Link></li>
            <li><Link to="/visites/decouverte">→ Visite Découverte</Link></li>
            <li><Link to="/visites/experience-complete">→ Expérience Complète</Link></li>
            <li><Link to="/visites/espace-enfants">→ Espace Enfants</Link></li>
            <li><Link to="/parrainage">Parrainer un Olivier</Link></li>
            <li><Link to="/certifications">Certifications & Labels</Link></li>
            <li><Link to="/professionnels">Professionnels</Link></li>
            <li><Link to="/assistance">Assistance</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Produits</h4>
          <ul>
            <li><Link onClick={() => window.scrollTo(0, 0)} to={`/boutique?filtre=&query=${encodeURIComponent("Cuvée Arrière-Grand-Père")}`}>Cuvée Arrière-Grand-Père</Link></li>
            <li><Link onClick={() => window.scrollTo(0, 0)} to={`/boutique?filtre=&query=${encodeURIComponent("Récolte Hivernale")}`}>Récolte Hivernale</Link></li>
            <li><Link onClick={() => window.scrollTo(0, 0)} to="/boutique?query=&filtre=edition">Prestige Centenaire — Édition Limitée</Link></li>
            <li><Link onClick={() => window.scrollTo(0, 0)} to="/boutique?query=&filtre=coffret">Coffrets Cadeaux</Link></li>
            <li><Link onClick={() => window.scrollTo(0, 0)} to="/boutique?query=&filtre=vie">Huile Vierge Extra</Link></li>
            <li><Link to="/professionnels">Solutions Professionnelles</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Légal & Infos</h4>
          <ul>
            <li><a href="#mentions">Mentions légales</a></li>
            <li><a href="#cgv">CGV</a></li>
            <li><a href="#confidentialite">Politique de confidentialité</a></li>
            <li><Link to="/certifications">Nos certifications</Link></li>
            <li><a href="#presse">Presse & Médias</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copy">© 2026 Oliveraie de Montpellier · Tous droits réservés · Hérault, France</div>
        <div className="footer-aop">🌱 Bio en certification · Vierge Extra · Origine France</div>
      </div>
    </footer>
  )
}
