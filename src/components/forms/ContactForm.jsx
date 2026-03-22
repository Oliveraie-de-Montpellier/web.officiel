import { useState } from 'react'

export default function ContactForm() {
  const [nom, setNom] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setNom('')
    setEmail('')
    setMessage('')
  }

  if (submitted) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center', background: '#f0f7ed', borderRadius: 8, border: '1px solid #c3ddb8' }}>
        <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>✅</div>
        <p style={{ color: '#2e7d32', fontWeight: 600, marginBottom: '0.3rem' }}>Message envoyé !</p>
        <p style={{ color: '#4a7a42', fontSize: '0.85rem' }}>Nous vous répondrons sous 48h.</p>
        <button type="button" className="btn-outline" style={{ marginTop: '1rem' }} onClick={() => setSubmitted(false)}>
          Envoyer un autre message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-field">
        <label>Votre nom</label>
        <input type="text" placeholder="Prénom Nom" value={nom} onChange={(e) => setNom(e.target.value)} required />
      </div>
      <div className="form-field">
        <label>Votre email</label>
        <input type="email" placeholder="votre@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className="form-field">
        <label>Votre message</label>
        <textarea placeholder="Écrivez votre message ici..." value={message} onChange={(e) => setMessage(e.target.value)} style={{ minHeight: 140 }} required />
      </div>
      <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
        Envoyer le Message →
      </button>
    </form>
  )
}
