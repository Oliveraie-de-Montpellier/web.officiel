import { useState } from 'react'
import PageTitle from '../components/PageTitle'

const FORMULES = [
  {
    id: 'decouverte',
    icon: '🌿',
    title: 'Parrain Découverte',
    price: '90 € / an',
    oliviers: '1 olivier',
    desc: 'Parrainez un olivier centenaire et recevez l\'huile de votre arbre à chaque récolte.',
    avantages: [
      '1 bouteille 500ml Vierge Extra · Récolte de votre olivier',
      'Étiquette personnalisée avec le nom de votre olivier',
      'Certificat de parrainage numéroté',
      'Photo de votre olivier au printemps et à la récolte',
      'Accès prioritaire à la visite Découverte',
    ],
    highlight: false,
  },
  {
    id: 'famille',
    icon: '🫒',
    title: 'Parrain Famille',
    price: '220 € / an',
    oliviers: '3 oliviers',
    desc: 'Trois oliviers, trois caractères. Recevez une sélection de la récolte de chacun de vos arbres.',
    avantages: [
      '3 bouteilles 500ml — une par olivier parrainé',
      'Étiquettes personnalisées (vous choisissez les noms)',
      '1 coffret bois gravé avec les 3 bouteilles',
      'Certificats de parrainage numérotés',
      'Photos de chacun de vos oliviers (printemps + récolte)',
      'Invitation à la Journée des Parrains (automne)',
    ],
    highlight: true,
  },
  {
    id: 'prestige',
    icon: '🏺',
    title: 'Parrain Prestige',
    price: '480 € / an',
    oliviers: '7 oliviers',
    desc: "Le parrainage le plus complet. Vivez la récolte de vos oliviers depuis le domaine — sur invitation.",
    avantages: [
      '7 bouteilles Édition Limitée numérotées (N°xx/4166)',
      'Coffret prestige bois gravé avec carte dédicacée',
      'Invitation à participer à la récolte (1 journée)',
      'Rencontre avec le producteur',
      'Votre nom gravé sur une plaque au pied de vos oliviers',
      'Accès VIP à l\'Expérience Complète pour 2 personnes',
      'Newsletter privée : vie du domaine & actualités récolte',
    ],
    highlight: false,
  },
]

const ETAPES = [
  { num: '01', icon: '🤝', title: 'Vous choisissez vos oliviers', desc: "Sélectionnez la formule et le nombre d'oliviers à parrainer. Chaque arbre a son histoire — nous vous partageons sa fiche." },
  { num: '02', icon: '📜', title: 'Certificat nominatif', desc: "Vous recevez un certificat de parrainage numéroté, avec la photo de votre olivier, ses caractéristiques et l'histoire de l'arbre." },
  { num: '03', icon: '🌿', title: 'Nous cultivons, vous suivez', desc: "Tout au long de l'année, nous vous tenons informé : taille de printemps, floraison, nouaison, et avancement vers la récolte d'automne." },
  { num: '04', icon: '🫙', title: 'Récolte & livraison', desc: "À l'automne, l'huile de vos oliviers est pressée et mise en bouteille avec votre étiquette personnalisée. Livraison directe chez vous ou retrait au domaine." },
]

export default function Parrainage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="parrainage" style={{ paddingTop: 72 }}>
      <PageTitle title="Parrainer un Olivier" />
      <div className="section-inner">

        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-tag">Programme exclusif</div>
          <h1 className="section-title">Parrainer un <em>Olivier Centenaire</em></h1>
          <p style={{ color: 'var(--text-mid)', fontSize: '0.95rem', maxWidth: 620, lineHeight: 1.8, margin: '0 auto 1rem' }}>
            500 oliviers centenaires plantés par notre arrière-grand-père. Chaque arbre a sa personnalité, son histoire, sa récolte. Parrainons-en un ensemble — et vous recevrez l'huile de votre olivier chaque année, avec son étiquette à votre nom.
          </p>
          <div style={{ display: 'inline-flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center', padding: '1rem 2rem', background: 'rgba(74,94,42,0.06)', borderRadius: 8, border: '1px solid rgba(74,94,42,0.15)', fontSize: '0.82rem', color: 'var(--olive-dark)' }}>
            <span>🌳 500 oliviers disponibles</span>
            <span>📦 Livraison chaque automne</span>
            <span>🔒 Engagement annuel renouvelable</span>
            <span>🎁 Idéal en cadeau</span>
          </div>
        </div>

        <div style={{ marginBottom: '3.5rem' }}>
          <h2 className="section-title" style={{ fontSize: '1.4rem', marginBottom: '2rem' }}>Comment ça <em>fonctionne</em> ?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.2rem' }}>
            {ETAPES.map((e) => (
              <div key={e.num} style={{ background: 'white', border: '1px solid var(--cream-dark)', borderRadius: 8, padding: '1.5rem', position: 'relative' }}>
                <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '2px', color: 'var(--gold)', marginBottom: '0.5rem' }}>ÉTAPE {e.num}</div>
                <div style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{e.icon}</div>
                <h4 style={{ fontFamily: "'Playfair Display',serif", color: 'var(--olive-dark)', fontSize: '1rem', marginBottom: '0.5rem' }}>{e.title}</h4>
                <p style={{ color: 'var(--text-mid)', fontSize: '0.82rem', lineHeight: 1.6, margin: 0 }}>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: '3.5rem' }}>
          <h2 className="section-title" style={{ fontSize: '1.4rem', marginBottom: '2rem' }}>Choisissez votre <em>formule</em></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {FORMULES.map((f) => (
              <div key={f.id} style={{
                background: f.highlight ? 'var(--olive-dark)' : 'white',
                border: f.highlight ? '2px solid var(--gold)' : '1px solid var(--cream-dark)',
                borderRadius: 10,
                padding: '2rem 1.8rem',
                position: 'relative',
              }}>
                {f.highlight && (
                  <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: 'var(--gold)', color: 'white', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '1px', padding: '3px 14px', borderRadius: 20, textTransform: 'uppercase' }}>
                    Le plus choisi
                  </div>
                )}
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{f.icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display',serif", color: f.highlight ? 'var(--cream)' : 'var(--olive-dark)', fontSize: '1.15rem', marginBottom: '0.2rem' }}>{f.title}</h3>
                <div style={{ fontSize: '0.75rem', color: f.highlight ? 'rgba(245,240,232,0.6)' : 'var(--text-mid)', marginBottom: '0.8rem' }}>{f.oliviers}</div>
                <div style={{ fontSize: '1.6rem', fontWeight: 700, color: f.highlight ? 'var(--gold)' : 'var(--olive-dark)', marginBottom: '0.5rem' }}>{f.price}</div>
                <p style={{ color: f.highlight ? 'rgba(245,240,232,0.75)' : 'var(--text-mid)', fontSize: '0.83rem', lineHeight: 1.6, marginBottom: '1.2rem' }}>{f.desc}</p>
                <ul style={{ margin: '0 0 1.5rem', paddingLeft: '1.1rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                  {f.avantages.map((a, i) => (
                    <li key={i} style={{ color: f.highlight ? 'rgba(245,240,232,0.8)' : 'var(--text-mid)', fontSize: '0.8rem', lineHeight: 1.5 }}>{a}</li>
                  ))}
                </ul>
                <a
                  href="#formulaire-parrainage"
                  className={f.highlight ? 'btn-gold' : 'btn-outline'}
                  style={{ display: 'block', textAlign: 'center', textDecoration: 'none', width: '100%', boxSizing: 'border-box' }}
                >
                  Choisir cette formule
                </a>
              </div>
            ))}
          </div>
        </div>

        <div id="formulaire-parrainage" style={{ background: 'var(--cream)', borderRadius: 10, padding: '2.5rem 2rem', maxWidth: 620, margin: '0 auto 3rem' }}>
          <h2 className="section-title" style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Demande de <em>parrainage</em></h2>
          <p style={{ color: 'var(--text-mid)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>Remplissez ce formulaire et nous vous recontacterons sous 48h avec les disponibilités et les prochaines étapes.</p>

          {submitted ? (
            <div style={{ padding: '2rem', textAlign: 'center', background: '#f0f7ed', borderRadius: 8, border: '1px solid #c3ddb8' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.8rem' }}>🫒</div>
              <p style={{ color: '#2e7d32', fontWeight: 600, marginBottom: '0.3rem' }}>Demande envoyée !</p>
              <p style={{ color: '#4a7a42', fontSize: '0.85rem' }}>Nous vous recontactons sous 48h avec les disponibilités d'oliviers et les prochaines étapes.</p>
              <button type="button" className="btn-outline" style={{ marginTop: '1rem' }} onClick={() => setSubmitted(false)}>Faire une autre demande</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-field">
                <label>Votre nom *</label>
                <input type="text" placeholder="Prénom Nom" required />
              </div>
              <div className="form-field">
                <label>Email *</label>
                <input type="email" placeholder="votre@email.com" required />
              </div>
              <div className="form-field">
                <label>Formule souhaitée *</label>
                <select required>
                  <option value="">-- Sélectionnez --</option>
                  <option>Parrain Découverte (1 olivier · 90 € / an)</option>
                  <option>Parrain Famille (3 oliviers · 220 € / an)</option>
                  <option>Parrain Prestige (7 oliviers · 480 € / an)</option>
                </select>
              </div>
              <div className="form-field">
                <label>C'est un cadeau pour quelqu'un ?</label>
                <input type="text" placeholder="Nom du bénéficiaire (facultatif)" />
              </div>
              <div className="form-field">
                <label>Message ou question</label>
                <textarea placeholder="Souhaitez-vous un olivier particulier ? Une dédicace ?" style={{ minHeight: 100 }} />
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                🌳 Envoyer ma demande de parrainage
              </button>
            </form>
          )}
        </div>

        <div style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: 8, padding: '1.5rem 2rem', textAlign: 'center' }}>
          <p style={{ color: 'var(--text-mid)', fontSize: '0.85rem', lineHeight: 1.7 }}>
            💡 <strong>Le parrainage est aussi un cadeau d'exception</strong> — pour un anniversaire, une naissance, un mariage, ou un cadeau d'entreprise original avec un ancrage local fort.
            Contactez-nous pour un bon cadeau : <a href="mailto:contact@oliviersheritage.fr">contact@oliviersheritage.fr</a>
          </p>
        </div>

      </div>
    </section>
  )
}
