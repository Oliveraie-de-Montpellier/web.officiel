import { Link } from 'react-router-dom'
import '../styles/visites.css'

export default function VisiteDecouverte() {
  return (
    <div className="page-visite-sub">
      <div className="breadcrumb"><Link to="/visites">Visites</Link> <span>/</span> Visite Découverte</div>
      <header className="sub-hero">
        <h1>Visite <em>Découverte</em></h1>
        <p className="sub-hero-sub">Une visite pédagogique et patrimoniale au cœur de l'oliveraie</p>
        <div className="sub-hero-meta"><span>⏱ 1 h – 1 h 10</span><span>💰 15 € / adulte · 8 € / 6–12 ans</span></div>
        <p className="sub-hero-desc">Découvrez le domaine, l'olivier centenaire, l'ancien moulin, comprenez la fabrication de l'huile, participez à l'atelier dégustation et repartez avec votre bouteille personnalisée.</p>
        <Link to="/visites" className="btn-primary">Réserver cette visite →</Link>
      </header>

      <section className="section-plan">
        <h2>Vue d'ensemble du parcours</h2>
        <p className="section-desc">Un parcours fluide, du lieu à l'arbre, de l'histoire à la transformation, puis au souvenir.</p>
        <div className="plan-schematique">
          <div className="plan-zone">
            <div className="plan-point" data-num="1">Accueil visiteurs</div>
            <div className="plan-path" />
            <div className="plan-point" data-num="2">Entrée oliveraie</div>
            <div className="plan-path" />
            <div className="plan-point" data-num="3">Olivier centenaire</div>
            <div className="plan-path" />
            <div className="plan-point" data-num="4">Ancien moulin</div>
            <div className="plan-path" />
            <div className="plan-point" data-num="5">Espace fabrication</div>
            <div className="plan-path" />
            <div className="plan-point" data-num="6">Atelier dégustation</div>
            <div className="plan-path" />
            <div className="plan-point" data-num="7">Personnalisation bouteille</div>
            <div className="plan-path" />
            <div className="plan-point" data-num="8">Sortie → Dégustation & boutique</div>
          </div>
        </div>
      </section>

      <section className="section-etapes">
        <h2>Les étapes du parcours</h2>
        <div className="etapes-list">
          {[
            { num: 1, icon: '🏠', badge: 'Accueil', title: 'Accueil des visiteurs', desc: 'Le guide vous accueille, présente le domaine et annonce le déroulé.', duree: '5–10 min' },
            { num: 2, icon: '🌳', badge: 'Découverte', title: 'Entrée dans l\'oliveraie', desc: 'Vous entrez dans l\'oliveraie. Le guide explique l\'organisation des parcelles.', duree: '10 min', reverse: true },
            { num: 3, icon: '🌲', badge: 'Patrimoine', title: 'L\'olivier le plus ancien', desc: 'Arrêt devant l\'arbre emblématique du domaine.', duree: '8 min' },
            { num: 4, icon: '⚙️', badge: 'Patrimoine', title: 'Passage par l\'ancien moulin', desc: 'Découverte de l\'ancien moulin et de son usage historique.', duree: '10 min', reverse: true },
            { num: 5, icon: '🫙', badge: 'Savoir-faire', title: 'Processus de fabrication', desc: 'Chaque étape : récolte, tri, broyage, malaxage, extraction...', duree: '10–12 min' },
            { num: 6, icon: '👃', badge: 'Sensoriel', title: 'Atelier reconnaissance qualité', desc: 'Apprenez à distinguer une huile de qualité.', duree: '12–15 min', reverse: true },
            { num: 7, icon: '🏷️', badge: 'Souvenir', title: 'Personnalisation de la bouteille', desc: 'Choisissez votre étiquette, repartez avec une bouteille personnalisée.', duree: '8–10 min' },
            { num: 8, icon: '🍽️', badge: 'Convivialité', title: 'Espace dégustation & boutique', desc: 'Dégustation libre, boutique du domaine.', duree: 'Libre', reverse: true },
          ].map((e) => (
            <div key={e.num} className={`etape-card ${e.reverse ? 'reverse' : ''}`}>
              <div className="etape-img">
                <div className="img-placeholder" style={{ background: 'linear-gradient(135deg,#2a3d15,#4a6020)' }}><span>{e.icon}</span></div>
              </div>
              <div className="etape-content">
                <span className="etape-num">{e.num}</span>
                <h3>{e.title}</h3>
                <span className="etape-badge">{e.badge}</span>
                <p>{e.desc}</p>
                <span className="etape-duree">{e.duree}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-synthese">
        <h2>Ce que vous allez vivre</h2>
        <div className="synthese-grid">
          {[
            ['🌳', "Découverte de l'oliveraie"],
            ['🏛️', 'Immersion patrimoniale'],
            ['🫒', 'Compréhension du processus'],
            ['👃', 'Dégustation encadrée'],
            ['🏷️', 'Souvenir personnalisé'],
            ['🤝', 'Moment convivial'],
          ].map(([icon, text]) => (
            <div key={text} className="synthese-item"><span className="synthese-icon">{icon}</span><span>{text}</span></div>
          ))}
        </div>
      </section>

      <section className="section-cta">
        <Link to="/visites" className="btn-primary btn-large">Réserver la Visite Découverte →</Link>
      </section>
    </div>
  )
}
