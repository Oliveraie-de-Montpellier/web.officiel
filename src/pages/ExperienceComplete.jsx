import { Link } from 'react-router-dom'
import '../styles/visites.css'

export default function ExperienceComplete() {
  return (
    <div className="page-visite-sub">
      <div className="breadcrumb"><Link to="/visites">Visites</Link> <span>/</span> Expérience Complète</div>
      <header className="sub-hero sub-hero-premium">
        <div className="badge-premium">🥇 Formule premium</div>
        <h1>Expérience <em>Complète</em></h1>
        <p className="sub-hero-sub">Une immersion sensorielle et conviviale de 2 h à 2 h 30</p>
        <div className="sub-hero-meta"><span>⏱ 2 h – 2 h 30</span><span>💰 50 € / personne</span></div>
        <p className="sub-hero-desc">Tout de la visite découverte, enrichi par une dégustation guidée approfondie, un atelier cuisine méditerranéenne, une pause gourmande encadrée et un échange privilégié avec le producteur. Vous ne comprenez pas seulement — vous vivez.</p>
        <Link to="/visites" className="btn-primary">Réserver l'expérience complète →</Link>
      </header>

      <section className="section-diff">
        <h2>Pourquoi choisir cette expérience ?</h2>
        <div className="diff-grid">
          <div className="diff-item">
            <span className="diff-icon">✓</span>
            <div><strong>Visite découverte</strong> — Oliveraie, olivier centenaire, moulin, fabrication, atelier qualité, bouteille personnalisée</div>
          </div>
          <div className="diff-item highlight">
            <span className="diff-icon">+</span>
            <div><strong>Dégustation approfondie</strong> — Méthode sensorielle, vocabulaire, comparaison des cuvées (20–25 min)</div>
          </div>
          <div className="diff-item highlight">
            <span className="diff-icon">+</span>
            <div><strong>Atelier cuisine</strong> — Bruschetta, tartines, tapenade, légumes assaisonnés (25–30 min)</div>
          </div>
          <div className="diff-item highlight">
            <span className="diff-icon">+</span>
            <div><strong>Pause gastronomique</strong> — Planche, préparation de l'atelier, accompagnements (15–20 min)</div>
          </div>
          <div className="diff-item highlight">
            <span className="diff-icon">+</span>
            <div><strong>Rencontre producteur</strong> — Métier, aléas climatiques, choix de qualité (15–20 min)</div>
          </div>
          <div className="diff-item highlight">
            <span className="diff-icon">+</span>
            <div><strong>Souvenir premium</strong> — Bouteille personnalisée + édition spéciale ou mini coffret</div>
          </div>
        </div>
      </section>

      <section className="section-plan">
        <h2>Plan du parcours</h2>
        <p className="section-desc">Le parcours complet intègre toutes les étapes de la visite découverte, prolongées par les activités premium.</p>
        <div className="plan-schematique">
          <div className="plan-zone plan-zone-long">
            {[1,2,3,4,5].map((n) => (
              <span key={n}>
                <div className="plan-point" data-num={n}>{['Accueil','Oliveraie','Olivier centenaire','Moulin','Fabrication'][n-1]}</div>
                <div className="plan-path" />
              </span>
            ))}
            {[6,7,8,9,10].map((n) => (
              <span key={n}>
                <div className="plan-point premium" data-num={n}>{['Dégustation approfondie','Atelier cuisine','Pause gourmande','Rencontre producteur','Souvenir premium'][n-6]}</div>
                <div className="plan-path" />
              </span>
            ))}
            <div className="plan-point" data-num="11">Espace final</div>
          </div>
        </div>
      </section>

      <section className="section-etapes">
        <h2>Les étapes premium en détail</h2>
        <div className="etapes-list">
          {[
            { icon: '👃', badge: 'Sensoriel', title: 'Dégustation guidée approfondie', desc: 'Observation, méthode pour sentir et goûter, vocabulaire de base. Comparaison des cuvées.', duree: '20–25 min' },
            { icon: '🥗', badge: 'Gastronomie', title: 'Atelier cuisine méditerranéenne', desc: 'Bruschetta, tartine à l\'huile, tapenade, légumes assaisonnés.', duree: '25–30 min', reverse: true },
            { icon: '🧀', badge: 'Convivialité', title: 'Pause gastronomique encadrée', desc: 'Pain, préparation issue de l\'atelier, accompagnements et huile du domaine.', duree: '15–20 min' },
            { icon: '👨‍🌾', badge: 'Rencontre', title: 'Échange privilégié avec le producteur', desc: 'Le producteur parle de son métier, des aléas climatiques, de la transmission.', duree: '15–20 min', reverse: true },
            { icon: '🎁', badge: 'Premium', title: 'Remise du souvenir premium', desc: 'Bouteille personnalisée + complément premium.', duree: '10 min' },
          ].map((e, i) => (
            <div key={i} className={`etape-card ${e.reverse ? 'reverse' : ''}`}>
              <div className="etape-img"><div className="img-placeholder" style={{ background: 'linear-gradient(135deg,#4a6030,#6a8050)' }}><span>{e.icon}</span></div></div>
              <div className="etape-content">
                <span className="etape-badge">{e.badge}</span>
                <h3>{e.title}</h3>
                <p>{e.desc}</p>
                <span className="etape-duree">{e.duree}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-cta">
        <Link to="/visites" className="btn-primary btn-large">Réserver l'Expérience Complète →</Link>
      </section>
    </div>
  )
}
