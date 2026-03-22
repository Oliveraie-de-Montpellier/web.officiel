import { Link } from 'react-router-dom'
import '../styles/visites.css'

export default function EspaceEnfants() {
  return (
    <div className="page-visite-sub">
      <div className="breadcrumb"><Link to="/visites">Visites</Link> <span>/</span> Espace Enfants</div>
      <header className="sub-hero sub-hero-enfants">
        <h1>L'<em>Espace Enfants</em></h1>
        <p className="sub-hero-sub">Une découverte ludique et pédagogique de l'univers de l'oliveraie</p>
        <p className="sub-hero-desc">Pendant que les adultes explorent le domaine, les enfants s'amusent dans un espace sécurisé, dédié et encadré. Chasse au trésor, jeu des odeurs, atelier création d'étiquette, quiz et diplôme : une expérience pensée pour eux.</p>
      </header>

      <section className="section-infos-pratiques">
        <h2>Informations pratiques</h2>
        <div className="infos-grid">
          <div className="info-item"><strong>Âge recommandé</strong><p>6–12 ans (activités adaptées)</p></div>
          <div className="info-item"><strong>Accompagnement</strong><p>Surveillance légère et constante par notre équipe</p></div>
          <div className="info-item"><strong>Sécurité</strong><p>Zone située uniquement dans l'espace visiteurs, séparée de la production</p></div>
          <div className="info-item"><strong>Durée globale</strong><p>Environ 1 h à 1 h 15 (couvre la durée de la visite adulte)</p></div>
          <div className="info-item"><strong>Complémentarité</strong><p>Les enfants peuvent rejoindre les adultes à la fin pour la personnalisation de la bouteille</p></div>
        </div>
      </section>

      <section className="section-plan">
        <h2>Plan de la zone enfants</h2>
        <p className="section-desc">Un espace délimité, visible et sécurisé, dédié aux activités ludiques.</p>
        <div className="plan-schematique plan-enfants">
          <div className="plan-zone plan-zone-enfants">
            <div className="plan-point enfants" data-num="1">Chasse au trésor</div>
            <div className="plan-path" />
            <div className="plan-point enfants" data-num="2">Jeu des odeurs</div>
            <div className="plan-path" />
            <div className="plan-point enfants" data-num="3">Atelier étiquette</div>
            <div className="plan-path" />
            <div className="plan-point enfants" data-num="4">Quiz & diplôme</div>
            <div className="plan-path" />
            <div className="plan-point enfants alt" data-num="★">Espace jeux</div>
          </div>
        </div>
      </section>

      <section className="section-etapes">
        <h2>Les activités</h2>
        <div className="etapes-list">
          {[
            { icon: '🔍', badge: 'Ludique', title: 'Chasse au trésor', desc: 'Les enfants suivent une carte pour retrouver l\'olivier le plus ancien. Activité dynamique et facile à gérer en groupe.', duree: '30–40 min' },
            { icon: '👃', badge: 'Sensoriel', title: 'Jeu sensoriel des odeurs', desc: 'Découverte des différentes odeurs liées à l\'univers de l\'olivier.', duree: '15 min', reverse: true },
            { icon: '🏷️', badge: 'Créatif', title: 'Atelier création d\'étiquette', desc: 'Les enfants décorent leur étiquette. Activité statique qui produit un excellent souvenir.', duree: '20 min' },
            { icon: '🎓', badge: 'Pédagogique', title: 'Quiz final et diplôme', desc: 'Quelques questions simples. Le diplôme valorise l\'enfant et donne une fin claire à l\'expérience.', duree: '10 min', reverse: true },
            { icon: '🛝', badge: 'Jeu libre', title: 'Espace jeux sécurisé', desc: 'Toboggan, structure simple, jeux au sol. Alternative libre pour ceux qui ne souhaitent pas participer aux ateliers.', duree: 'Selon envie' },
          ].map((e, i) => (
            <div key={i} className={`etape-card ${e.reverse ? 'reverse' : ''}`}>
              <div className="etape-img"><div className="img-placeholder" style={{ background: 'linear-gradient(135deg,#4a8020,#6aa040)' }}><span>{e.icon}</span></div></div>
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
        <Link to="/visites" className="btn-primary btn-large">Réserver une visite en famille →</Link>
      </section>
    </div>
  )
}
