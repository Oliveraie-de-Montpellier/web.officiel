import { useState } from 'react'
import { Link } from 'react-router-dom'
import Calendar from '../components/ui/Calendar'
import BookingForm from '../components/forms/BookingForm'

const MONTH_NAMES = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']

export default function Visits() {
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedSlot, setSelectedSlot] = useState(null)
  const [calMonth, setCalMonth] = useState(new Date().getMonth())
  const [calYear, setCalYear] = useState(new Date().getFullYear())

  const dateLabel = selectedDate
    ? `${selectedDate} ${MONTH_NAMES[calMonth]} ${calYear}`
    : '—'

  const handleSelectDay = (d, month, year) => {
    setSelectedDate(d)
    if (month != null) setCalMonth(month)
    if (year != null) setCalYear(year)
  }

  return (
    <section id="visite" style={{ paddingTop: 72 }}>
      <div className="section-inner">
        <div className="visite-hero">
          <div className="section-tag">Expérience Immersive</div>
          <h1 className="visite-hero-title">Découvrez notre <em>domaine</em> oléicole</h1>
          <p className="visite-hero-desc">
            L'Oliverie de Montpellier propose une véritable expérience touristique, pédagogique et émotionnelle. Patrimoine familial, culture de l'olivier, fabrication artisanale, dégustation et vente directe s'y rencontrent pour offrir un parcours mémorable.
          </p>
          <p className="visite-hero-desc">
            Vous ne visiterez pas seulement une oliveraie — vous entrerez dans une histoire, comprendrez comment une olive devient une huile d'exception, et repartirez avec un souvenir personnalisé. <strong>L'espace visite est entièrement séparé de la production</strong>.
          </p>
        </div>

        <div className="visite-choix">
          <div className="section-tag">Choisissez votre expérience</div>
          <h2 className="section-title">Deux formules, une <em>passion</em> partagée</h2>
          <div className="offres-grid">
            <div className="offre-card">
              <div className="offre-img-wrap">
                <div className="offre-placeholder" style={{ background: 'linear-gradient(135deg,#2a3d15,#4a6020)' }}>
                  <span className="offre-placeholder-icon">🌳</span>
                  <span className="offre-placeholder-text">Oliveraie & patrimoine</span>
                </div>
              </div>
              <div className="offre-body">
                <h3>Visite Découverte</h3>
                <p className="offre-desc">Une visite pédagogique et patrimoniale. Découvrez l'oliveraie, l'arbre emblématique, l'ancien moulin, comprenez la fabrication, participez à l'atelier dégustation et repartez avec votre bouteille personnalisée.</p>
                <div className="offre-meta"><span>⏱ 1 h – 1 h 10</span><span>📍 Parcours balisé</span></div>
                <ul className="offre-points">
                  <li>Oliveraie et olivier centenaire</li>
                  <li>Ancien moulin et fabrication</li>
                  <li>Atelier reconnaissance qualité</li>
                  <li>Bouteille souvenir personnalisée</li>
                </ul>
                <p className="offre-tarif">15 € / adulte · 8 € / 6–12 ans · Gratuit -6 ans</p>
                <Link to="/visites/decouverte" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '1rem', textDecoration: 'none' }}>Découvrir le parcours →</Link>
              </div>
            </div>
            <div className="offre-card">
              <div className="offre-img-wrap">
                <div className="offre-placeholder offre-premium" style={{ background: 'linear-gradient(135deg,#1a2510,#2d3a1e)' }}>
                  <span className="offre-placeholder-icon">✨</span>
                  <span className="offre-placeholder-text">Expérience premium</span>
                </div>
              </div>
              <div className="offre-body">
                <h3>Expérience Complète</h3>
                <p className="offre-desc">Parcours plus long et immersif. Tout de la visite découverte, plus une dégustation guidée approfondie, un atelier cuisine méditerranéenne, une pause gourmande et un échange privilégié avec le producteur.</p>
                <div className="offre-meta"><span>⏱ 2 h – 2 h 30</span><span>🥇 Premium</span></div>
                <ul className="offre-points">
                  <li>Tout de la visite découverte</li>
                  <li>Dégustation sensorielle approfondie</li>
                  <li>Atelier cuisine (bruschetta, tapenade…)</li>
                  <li>Pause gastronomique encadrée</li>
                  <li>Rencontre avec le producteur</li>
                  <li>Souvenir premium</li>
                </ul>
                <p className="offre-tarif">50 € / personne</p>
                <Link to="/visites/experience-complete" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '1rem', textDecoration: 'none' }}>Explorer l'expérience complète →</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="visite-famille">
          <div className="section-tag">En famille</div>
          <h2 className="section-title">L'<em>Espace Enfants</em></h2>
          <div className="famille-block">
            <div className="famille-placeholder" style={{ background: 'linear-gradient(135deg,#e8f0d8,#d4e4c4)' }}>
              <span style={{ fontSize: '4rem' }}>👧🧒</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--olive)', fontWeight: 600 }}>Chasse au trésor · Jeu des odeurs · Atelier étiquette · Quiz & diplôme</span>
            </div>
            <div className="famille-text">
              <p>Pendant que les adultes découvrent le domaine, les enfants s'amusent dans un espace sécurisé et ludique. Chasse au trésor, jeu sensoriel des odeurs, atelier création d'étiquette et quiz final avec diplôme.</p>
              <Link to="/visites/espace-enfants" className="btn-outline" style={{ display: 'inline-flex', marginTop: '1rem', textDecoration: 'none' }}>Découvrir l'espace enfants →</Link>
            </div>
          </div>
        </div>

        <div className="section-tag" style={{ marginTop: '2rem' }}>Réserver</div>
        <h2 className="section-title">Réservez votre <em>visite</em></h2>
        <p style={{ color: 'var(--text-mid)', fontSize: '0.9rem', marginBottom: '2rem' }}>Choisissez votre créneau. Un agent vous contacte sous 5 jours ouvrés pour confirmer.</p>
        <div style={{ background: '#e8f5e9', border: '1px solid #4caf50', padding: '12px 16px', borderRadius: 4, fontSize: '0.8rem', color: '#2e7d32', marginBottom: '2rem' }}>
          ✅ Annulation gratuite jusqu'à 48h avant la visite
        </div>

        <Calendar
          selectedDate={selectedDate}
          onSelectDay={handleSelectDay}
        />

        <div style={{ background: 'white', borderRadius: 8, padding: '1.5rem', border: '1px solid var(--cream-dark)', marginBottom: '2rem', boxShadow: '0 4px 20px rgba(0,0,0,0.07)' }}>
          <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.1rem', color: 'var(--olive-dark)', marginBottom: '1rem' }}>🕐 Créneaux disponibles le <span>{dateLabel}</span></h3>
          <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
            <div
              role="button"
              tabIndex={0}
              style={{
                padding: '10px 20px',
                border: `1px solid ${selectedSlot === '09:00' ? 'var(--olive-dark)' : 'var(--cream-dark)'}`,
                borderRadius: 20,
                fontSize: '0.8rem',
                color: selectedSlot === '09:00' ? 'var(--cream)' : 'var(--text-mid)',
                cursor: 'pointer',
                background: selectedSlot === '09:00' ? 'var(--olive-dark)' : '',
              }}
              onClick={() => setSelectedSlot('09:00')}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedSlot('09:00')}
            >
              09:00 – 12:00
            </div>
            <div
              role="button"
              tabIndex={0}
              style={{
                padding: '10px 20px',
                border: `1px solid ${selectedSlot === '14:00' ? 'var(--olive-dark)' : 'var(--cream-dark)'}`,
                borderRadius: 20,
                fontSize: '0.8rem',
                color: selectedSlot === '14:00' ? 'var(--cream)' : 'var(--text-mid)',
                cursor: 'pointer',
                background: selectedSlot === '14:00' ? 'var(--olive-dark)' : '',
              }}
              onClick={() => setSelectedSlot('14:00')}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedSlot('14:00')}
            >
              14:00 – 17:00
            </div>
            <div style={{ padding: '10px 20px', background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.4)', borderRadius: 20, fontSize: '0.8rem', color: 'var(--earth)' }}>
              10:00 – 13:00 · Complet
            </div>
          </div>
        </div>

        <BookingForm selectedDate={selectedDate} selectedSlot={selectedSlot} monthLabel={dateLabel} />

        <div className="partenaires-section">
          <div className="section-tag">Découvrir le Commerce Local</div>
          <h3>🍽️ Restaurants Partenaires à Proximité</h3>
          <p style={{ color: 'var(--text-mid)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>Prolongez l'expérience dans nos restaurants partenaires.</p>
          <div className="restaurant-cards">
            <div className="restaurant-card">
              <div className="restaurant-icon">🍽️</div>
              <div>
                <div className="restaurant-name">La Table de l'Olivier</div>
                <div className="restaurant-type">Cuisine méditerranéenne • Gastronomique</div>
                <div className="restaurant-dist">📍 800m du domaine · ⭐⭐⭐</div>
              </div>
            </div>
            <div className="restaurant-card">
              <div className="restaurant-icon">🥗</div>
              <div>
                <div className="restaurant-name">Bistrot du Pressoir</div>
                <div className="restaurant-type">Bistrot local • Menu du terroir</div>
                <div className="restaurant-dist">📍 1,2 km du domaine · ⭐⭐</div>
              </div>
            </div>
            <div className="restaurant-card">
              <div className="restaurant-icon">🫕</div>
              <div>
                <div className="restaurant-name">Chez Mamé Rosa</div>
                <div className="restaurant-type">Cuisine occitane traditionnelle</div>
                <div className="restaurant-dist">📍 2 km du domaine · ⭐⭐⭐</div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <div className="section-tag" style={{ marginBottom: '1rem' }}>Avis des visiteurs</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1rem' }}>
            <div style={{ background: 'white', padding: '1.2rem', borderRadius: 6, border: '1px solid var(--cream-dark)' }}>
              <div style={{ color: 'var(--gold)', fontSize: '0.9rem' }}>★★★★★</div>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-mid)', fontStyle: 'italic', lineHeight: 1.6 }}>« Une expérience inoubliable ! Les guides sont passionnés. »</p>
              <div style={{ fontSize: '0.7rem', color: 'var(--olive-light)' }}>— Famille Dupont · Oct. 2024</div>
            </div>
            <div style={{ background: 'white', padding: '1.2rem', borderRadius: 6, border: '1px solid var(--cream-dark)' }}>
              <div style={{ color: 'var(--gold)', fontSize: '0.9rem' }}>★★★★★</div>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-mid)', fontStyle: 'italic', lineHeight: 1.6 }}>« Organisé pour mon EVJF – tout le groupe a adoré ! »</p>
              <div style={{ fontSize: '0.7rem', color: 'var(--olive-light)' }}>— Clara M. · Nov. 2024</div>
            </div>
            <div style={{ background: 'white', padding: '1.2rem', borderRadius: 6, border: '1px solid var(--cream-dark)' }}>
              <div style={{ color: 'var(--gold)', fontSize: '0.9rem' }}>★★★★☆</div>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-mid)', fontStyle: 'italic', lineHeight: 1.6 }}>« Très bien adapté pour nos enfants. »</p>
              <div style={{ fontSize: '0.7rem', color: 'var(--olive-light)' }}>— Paul & Isabelle G. · Sep. 2024</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
