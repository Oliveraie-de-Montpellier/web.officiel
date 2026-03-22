import { useState } from 'react'
import { faqItems } from '../data/faq'

const ASSIST_TYPES = [
  { id: 'livraison', icon: '📦', label: 'Livraison' },
  { id: 'qualite', icon: '🍶', label: 'Qualité Produit' },
  { id: 'facturation', icon: '💳', label: 'Facturation' },
  { id: 'suggestion', icon: '💡', label: 'Suggestion' },
]

export default function Assistance() {
  const [assistType, setAssistType] = useState('livraison')
  const [openFaq, setOpenFaq] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="assistance" style={{ paddingTop: 72 }}>
      <div className="section-inner">
        <div className="section-tag">Service Client</div>
        <h2 className="section-title">Assistance <em>Consommateur</em></h2>

        <div className="assistance-grid">
          <div>
            <div className="assistance-form">
              <h3>📬 Signalez un Problème</h3>
              {submitted ? (
                <div style={{ padding: '1.5rem', textAlign: 'center', background: '#f0f7ed', borderRadius: 8, border: '1px solid #c3ddb8', margin: '1rem 0' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>✅</div>
                  <p style={{ color: '#2e7d32', fontWeight: 600, marginBottom: '0.3rem' }}>Signalement envoyé !</p>
                  <p style={{ color: '#4a7a42', fontSize: '0.85rem', marginBottom: '1rem' }}>Nous vous répondrons sous 48h ouvrées. Merci de votre confiance.</p>
                  <button type="button" className="btn-outline" onClick={() => setSubmitted(false)}>Envoyer un autre signalement</button>
                </div>
              ) : (
              <>
              <p>Un produit défectueux, une livraison en retard, une insatisfaction ? Nous prenons chaque signalement au sérieux.</p>
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '0.7rem', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--olive)', marginBottom: '0.8rem', fontWeight: 600 }}>Type de demande</div>
                <div className="assistance-types">
                  {ASSIST_TYPES.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      className={`assist-type-btn ${assistType === t.id ? 'active' : ''}`}
                      onClick={() => setAssistType(t.id)}
                    >
                      <div className="assist-type-icon">{t.icon}</div>
                      <div className="assist-type-label">{t.label}</div>
                    </button>
                  ))}
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="form-field-light">
                  <label>Nom & Prénom *</label>
                  <input type="text" placeholder="Votre nom" required />
                </div>
                <div className="form-field-light">
                  <label>Email *</label>
                  <input type="email" placeholder="votre@email.com" required />
                </div>
                <div className="form-field-light">
                  <label>Numéro de commande (si applicable)</label>
                  <input type="text" placeholder="OH-2025-XXXX" />
                </div>
                <div className="form-field-light">
                  <label>Description détaillée *</label>
                  <textarea style={{ minHeight: 120 }} placeholder="Décrivez votre problème ou suggestion en détail..." required />
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  📤 Envoyer le Signalement
                </button>
              </form>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-mid)', marginTop: '0.8rem', textAlign: 'center' }}>⏱️ Temps de réponse moyen : 24h ouvrées</div>
              </>
              )}
            </div>
          </div>

          <div className="faq-section">
            <h3>❓ Questions Fréquentes</h3>
            {faqItems.map((item, i) => (
              <div key={i} className={`faq-item ${openFaq === i ? 'open' : ''}`}>
                <div
                  className="faq-q"
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setOpenFaq(openFaq === i ? -1 : i)}
                >
                  {item.q} <span className="faq-icon">+</span>
                </div>
                <div className="faq-a">{item.a}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
