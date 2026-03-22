import { useState } from 'react'

export default function BookingForm({ selectedDate, selectedSlot, monthLabel }) {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="booking-form-section" style={{ textAlign: 'center', padding: '2.5rem 2rem' }}>
        <div style={{ fontSize: '3rem', marginBottom: '0.8rem' }}>🫒</div>
        <h3 style={{ fontFamily: "'Playfair Display',serif", color: 'var(--olive-dark)', marginBottom: '0.5rem' }}>Réservation envoyée !</h3>
        <p style={{ color: 'var(--text-mid)', fontSize: '0.9rem', lineHeight: 1.7, maxWidth: 420, margin: '0 auto' }}>
          Un de nos agents vous contactera par email dans les <strong>5 jours ouvrés</strong> pour confirmer et vous envoyer toutes les informations pratiques.
        </p>
        <button
          type="button"
          className="btn-outline"
          style={{ marginTop: '1.5rem' }}
          onClick={() => setSubmitted(false)}
        >
          Faire une autre réservation
        </button>
      </div>
    )
  }

  return (
    <div className="booking-form-section">
      <h3>📝 Formulaire de Réservation</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-field-light" style={{ marginBottom: '1rem' }}>
          <label>Formule choisie *</label>
          <select required>
            <option value="">-- Sélectionnez --</option>
            <option>Visite Découverte (15 € / adulte)</option>
            <option>Expérience Complète (50 € / personne)</option>
          </select>
        </div>
        <div className="form-row">
          <div className="form-field-light">
            <label>Nom & Prénom *</label>
            <input type="text" placeholder="Votre nom complet" required />
          </div>
          <div className="form-field-light">
            <label>Âge du responsable *</label>
            <input type="number" placeholder="Votre âge" required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-field-light">
            <label>Nombre de personnes *</label>
            <input type="number" placeholder="Adultes + enfants" min={1} required />
          </div>
          <div className="form-field-light">
            <label>Nombre d'enfants (-12 ans)</label>
            <input type="number" placeholder="0" min={0} />
          </div>
        </div>
        <div className="form-field-light">
          <label>Handicaps ou mobilité réduite</label>
          <input type="text" placeholder="PMR, fauteuil roulant, béquilles..." />
        </div>
        <div className="form-field-light">
          <label>Maladies ou conditions médicales à signaler</label>
          <textarea style={{ minHeight: 80 }} placeholder="Diabète, asthme..." />
        </div>
        <div className="form-field-light">
          <label>Allergies alimentaires ⚠️</label>
          <input type="text" placeholder="Gluten, fruits à coques, sulfites..." />
        </div>
        <div className="form-field-light">
          <label>Période souhaitée *</label>
          <select required>
            <option value="">-- Sélectionnez une période --</option>
            <option>Printemps (Avr – Juin)</option>
            <option>Été (Juil – Sep)</option>
            <option>Automne – Récolte (Oct – Déc) ⭐ Recommandé</option>
            <option>Hiver (Déc – Mar)</option>
          </select>
        </div>
        <div className="form-field-light">
          <label>Message ou demande particulière</label>
          <textarea placeholder="Occasion spéciale ? Groupe scolaire ?..." />
        </div>
        <button type="submit" className="btn-primary" style={{ marginTop: '0.5rem' }}>
          🫒 Envoyer la Réservation
        </button>
      </form>
    </div>
  )
}
