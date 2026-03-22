import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function Professionals() {
  const navigate = useNavigate()

  const handlePartnership = () => {
    navigate('/assistance')
  }

  return (
    <section id="professionnels" style={{ paddingTop: 72 }}>
      <div className="section-inner">
        <div className="section-tag">B2B – Vente aux Entreprises</div>
        <h2 className="section-title" style={{ color: 'var(--cream)' }}>Solutions <em>Professionnelles</em></h2>
        <p className="pro-intro">
          Oliveraie de Montpellier propose une huile d'olive vierge extra artisanale aux restaurateurs gastronomiques, épiceries bio, hôtels de prestige et entreprises cherchant un produit du terroir occitan pour leurs coffrets et cadeaux d'affaires.
        </p>

        <div className="pro-products">
          <div className="pro-card">
            <div className="pro-grade">Restauration · Épicerie Fine</div>
            <h3>Vierge Extra – Conditionnement Professionnel</h3>
            <p className="pro-desc">Notre huile vierge extra en bidon pour la restauration gastronomique et les épiceries fines. Même qualité que notre gamme boutique, conditionnée en format professionnel avec certificat d'analyse par lot.</p>
            <div className="pro-specs">
              <div className="pro-spec-row"><span className="pro-spec-label">Acidité</span><span className="pro-spec-val pro-acidity">≤ 0,8 g/100 g — Vierge Extra</span></div>
              <div className="pro-spec-row"><span className="pro-spec-label">Extraction</span><span className="pro-spec-val">Mécanique à froid · sans additifs</span></div>
              <div className="pro-spec-row"><span className="pro-spec-label">Conditionnements</span><span className="pro-spec-val">Bidon 5L · Fût 20L</span></div>
              <div className="pro-spec-row"><span className="pro-spec-label">Traçabilité</span><span className="pro-spec-val">N° de lot · Récolte 2026 · Origine France</span></div>
              <div className="pro-spec-row"><span className="pro-spec-label">MOQ</span><span className="pro-spec-val">Dès 5L</span></div>
            </div>
            <div className="pro-price-range">Sur devis</div>
            <a href="mailto:pro@oliviersheritage.fr?subject=Demande fiche qualité – Vierge Extra Pro" className="pro-fiche">📄 Demander la fiche qualité par email</a>
          </div>
          <div className="pro-card">
            <div className="pro-grade">Épiceries Bio · Circuits Courts</div>
            <h3>Vierge Extra – Gamme Bio (dès 2027)</h3>
            <p className="pro-desc">Notre future gamme certifiée Agriculture Biologique (AB / Eurofeuille), en cours de conversion. Idéale pour les épiceries bio indépendantes, Biocoop, et la restauration engagée. Précommandes acceptées pour la récolte 2027.</p>
            <div className="pro-specs">
              <div className="pro-spec-row"><span className="pro-spec-label">Certification</span><span className="pro-spec-val">Bio AB · Eurofeuille (obtention 2027)</span></div>
              <div className="pro-spec-row"><span className="pro-spec-label">Format</span><span className="pro-spec-val">Bouteilles 500ml · Bidon 5L</span></div>
              <div className="pro-spec-row"><span className="pro-spec-label">Disponibilité</span><span className="pro-spec-val">Récolte automne 2027</span></div>
            </div>
            <div className="pro-price-range">Précommande possible</div>
            <a href="mailto:pro@oliviersheritage.fr?subject=Précommande – Gamme Bio 2027" className="pro-fiche">📩 Nous contacter pour une précommande</a>
          </div>
          <div className="pro-card">
            <div className="pro-grade">Entreprises · RSE · Cadeaux d'Affaires</div>
            <h3>Coffrets Prestige – Cadeaux d'Entreprise</h3>
            <p className="pro-desc">Offrez un produit du terroir occitan à vos clients et collaborateurs. Coffrets bois gravés, bouteilles Édition Limitée numérotées (N°xx/4166), carte dédicacée personnalisable. Argument RSE fort — production locale, artisanale, traçable.</p>
            <div className="pro-specs">
              <div className="pro-spec-row"><span className="pro-spec-label">Format</span><span className="pro-spec-val">Coffrets 1, 2 ou 3 bouteilles</span></div>
              <div className="pro-spec-row"><span className="pro-spec-label">Personnalisation</span><span className="pro-spec-val">Étiquette, carte dédicacée, gravure</span></div>
              <div className="pro-spec-row"><span className="pro-spec-label">Volume</span><span className="pro-spec-val">Dès 10 coffrets</span></div>
              <div className="pro-spec-row"><span className="pro-spec-label">Délai</span><span className="pro-spec-val">2 à 3 semaines</span></div>
            </div>
            <div className="pro-price-range">À partir de 42 € / coffret</div>
            <a href="mailto:pro@oliviersheritage.fr?subject=Demande coffrets entreprise" className="pro-fiche">📄 Demander un devis coffrets</a>
          </div>
        </div>

        <div className="partners-ribbon">
          <h3>Ils nous font confiance</h3>
          <div style={{ overflow: 'hidden' }}>
            <div className="ribbon-track">
              {['🍽️ Restaurant Le Jardin', '🏪 Épicerie du Marché', '🏨 Hôtel Riche Montpellier', '🫙 Conserverie du Sud', '🍕 Pizzeria Napoli', '🛒 Bio & Local SARL', '🏫 Lycée hôtelier'].map((t, i) => (
                <div key={i} className="partner-chip"><span className="partner-chip-icon">{t.split(' ')[0]}</span>{t.slice(2)}</div>
              ))}
              {['🍽️ Restaurant Le Jardin', '🏪 Épicerie du Marché', '🏨 Hôtel Riche Montpellier', '🫙 Conserverie du Sud', '🍕 Pizzeria Napoli', '🛒 Bio & Local SARL', '🏫 Lycée hôtelier'].map((t, i) => (
                <div key={`dup-${i}`} className="partner-chip"><span className="partner-chip-icon">{t.split(' ')[0]}</span>{t.slice(2)}</div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: 8, padding: '2rem', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <div style={{ flex: 1, minWidth: 280 }}>
              <div style={{ fontSize: '0.65rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.5rem' }}>Opportunité</div>
              <h3 style={{ fontFamily: "'Playfair Display',serif", color: 'var(--cream)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>💡 Proposez un Partenariat Local</h3>
              <p style={{ color: 'rgba(245,240,232,0.6)', fontSize: '0.83rem', lineHeight: 1.6 }}>Restaurant, épicerie, traiteur... Rejoignez notre réseau de partenaires autour de Montpellier. Utilisez le formulaire d'assistance pour soumettre votre demande.</p>
            </div>
            <button type="button" className="btn-gold" onClick={handlePartnership}>🤝 Demander un partenariat</button>
          </div>
        </div>

        <div className="pro-contact">
          <div className="pro-contact-text">
            <h3>Besoin d'un devis ou d'un échantillon ?</h3>
            <p>Notre équipe commerciale répond sous 24h pour toute demande professionnelle.</p>
            <p style={{ marginTop: '0.3rem', fontSize: '0.82rem' }}><strong style={{ color: 'var(--gold-light)' }}>📞 +33 (0)4 67 00 01 00</strong> · <strong style={{ color: 'var(--gold-light)' }}>✉️ pro@oliviersheritage.fr</strong></p>
          </div>
          <div className="pro-contact-actions">
            <a href="mailto:pro@oliviersheritage.fr" className="btn-gold">✉️ Nous Écrire</a>
            <a href="tel:+33467000100" className="btn-outline-gold">📞 Appeler</a>
          </div>
        </div>
      </div>
    </section>
  )
}
