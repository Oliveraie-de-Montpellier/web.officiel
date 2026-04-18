import { Link } from 'react-router-dom'
import ContactForm from '../components/forms/ContactForm'
import InstaIcon from '../components/ui/InstaIcon'

export default function Home() {
  return (
    <>
      <section id="accueil" style={{ padding: 0 }}>
        <div className="hero-texture" />
        <div className="hero-grid" />
        <div className="hero-content">
          <div className="hero-text fade-up fade-up-1">
            <div className="hero-badge">Huile d'Olive Vierge Extra · Origine France · Hérault</div>
            <h1 className="hero-title">
              L'<em>héritage</em> de nos<br />oliviers centenaires
            </h1>
            <p className="hero-desc">
              Depuis quatre générations, nous perpétuons le savoir-faire de notre arrière-grand-père sur 1,5 ha d'oliveraie familiale en Occitanie. 500 oliviers centenaires, une extraction mécanique sans additifs, une huile vierge extra traçable lot par lot.
            </p>
            <div className="hero-buttons">
              <Link to="/boutique" className="btn-primary">🫙 Nos Produits</Link>
              <Link to="/visites" className="btn-outline">🌿 Visiter le Domaine</Link>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-num">4</div>
                <div className="stat-label">Générations</div>
              </div>
              <div className="stat">
                <div className="stat-num">500</div>
                <div className="stat-label">Oliviers centenaires</div>
              </div>
              <div className="stat">
                <div className="stat-num">100%</div>
                <div className="stat-label">Mécanique, sans additifs</div>
              </div>
            </div>
          </div>
          <div className="hero-image-wrap fade-up fade-up-2">
            <div className="team-photo-mock">
              <div className="hero-badge-aop">🌿<br />BIO<br />EN COURS<br />DE CERT.</div>
              <div className="team-emoji-row">
                <div className="farmer-figure"><div className="farmer-hat">🎩</div><div className="farmer-emoji">👩‍🌾</div></div>
                <div className="farmer-figure"><div className="farmer-hat">👒</div><div className="farmer-emoji">👨‍🌾</div></div>
                <div className="farmer-figure"><div className="farmer-hat">🪖</div><div className="farmer-emoji">🧑‍🌾</div></div>
                <div className="farmer-figure"><div className="farmer-hat">👒</div><div className="farmer-emoji">👩‍🌾</div></div>
                <div className="farmer-figure"><div className="farmer-hat">🎩</div><div className="farmer-emoji">👨‍🌾</div></div>
              </div>
              <div className="team-label">Notre Équipe dans l'Oliveraie</div>
              <div className="team-sub">Montpellier · Hérault · France</div>
              <div style={{ fontSize: '2rem', marginTop: '0.5rem' }}>🫒🌿🫒🌿🫒</div>
            </div>
          </div>
        </div>
      </section>

      <section id="apropos">
        <div className="section-inner">
          <div className="about-grid">
            <div className="about-text">
              <div className="section-tag">Notre Histoire</div>
              <h2 className="section-title">Un <em>héritage</em> cultivé avec passion</h2>
              <p>Tout a commencé quand notre arrière-grand-père planta les premiers oliviers sur les collines ensoleillées de l'Hérault. Ces 500 arbres centenaires, répartis sur 1,5 ha, sont aujourd'hui le cœur battant de notre exploitation familiale.</p>
              <p><strong>Oliveraie de Montpellier</strong> est bien plus qu'un domaine oléicole — c'est une transmission sur quatre générations. Chaque olive est récoltée avec soin, chaque pressage mécanique est réalisé sans additifs, chaque bouteille porte le numéro de lot pour une traçabilité totale.</p>
              <p>Nous produisons exclusivement des <strong>huiles d'olive vierge extra</strong> (acidité ≤ 0,8 g/100 g) par extraction mécanique à froid — la catégorie la plus haute, pour particuliers exigeants et professionnels du goût.</p>
              <div className="values-grid">
                <div className="value-card">
                  <div className="value-icon">🌿</div>
                  <div className="value-title">Artisanat Authentique</div>
                  <div className="value-desc">Extraction mécanique à froid, sans solvants ni additifs, héritée de quatre générations.</div>
                </div>
                <div className="value-card">
                  <div className="value-icon">🌱</div>
                  <div className="value-title">Bio en certification</div>
                  <div className="value-desc">Démarche Agriculture Biologique (AB / Eurofeuille) en cours — pratiques sans pesticides de synthèse.</div>
                </div>
                <div className="value-card">
                  <div className="value-icon">🤝</div>
                  <div className="value-title">Ancrage Local</div>
                  <div className="value-desc">Vente directe au domaine, circuits courts, restaurants gastronomiques de Montpellier.</div>
                </div>
                <div className="value-card">
                  <div className="value-icon">🔍</div>
                  <div className="value-title">Traçabilité Totale</div>
                  <div className="value-desc">Chaque bouteille porte son numéro de lot, l'année de récolte et l'origine France.</div>
                </div>
              </div>
            </div>
            <div>
              <div className="infra-map">
                <div className="infra-title">🗺️ Carte des Infrastructures du Domaine</div>
                <div className="infra-diagram">
                  <div className="infra-zone zone-production">
                    <div className="zone-restricted">🚫 ZONE RESTREINTE</div>
                    <div className="zone-icon">🏭</div>
                    <div className="zone-label">Zone de Production</div>
                  </div>
                  <div className="infra-zone zone-visite">
                    <div className="zone-icon">👩‍🍳</div>
                    <div className="zone-label">Espace Visite</div>
                  </div>
                  <div className="infra-zone zone-stockage">
                    <div className="zone-icon">📦</div>
                    <div className="zone-label">Stockage</div>
                  </div>
                  <div className="infra-zone zone-expédition">
                    <div className="zone-icon">🚚</div>
                    <div className="zone-label">Expédition</div>
                  </div>
                  <div className="infra-zone zone-partenaires">
                    <div className="zone-icon">🍽️</div>
                    <div className="zone-label">Partenaires</div>
                  </div>
                </div>
                <div className="infra-legend">
                  <div className="legend-item"><div className="legend-dot" style={{ background: 'rgba(74,94,42,0.5)' }} />Production</div>
                  <div className="legend-item"><div className="legend-dot" style={{ background: 'rgba(201,168,76,0.5)' }} />Visite</div>
                  <div className="legend-item"><div className="legend-dot" style={{ background: 'rgba(139,105,20,0.5)' }} />Stockage</div>
                  <div className="legend-item"><div className="legend-dot" style={{ background: 'rgba(122,148,64,0.5)' }} />Expédition</div>
                  <div className="legend-item"><div className="legend-dot" style={{ background: 'rgba(192,57,43,0.3)' }} />Partenaires</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="localisation" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
        <div className="section-inner">
          <div className="section-tag">Nous trouver</div>
          <h2 className="section-title">Notre <em>domaine</em> à Montpellier</h2>
          <div className="loc-grid">
            <div className="map-embed" >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46256.27!2d3.8767!3d43.6109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b6af42a3e89ee7%3A0x7c66d0d3eacc6773!2sMontpellier!5e0!3m2!1sfr!2sfr!4v1"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation Oliverie de Montpellier"></iframe>
            </div>
            <div className="loc-info">
              <div className="loc-card">
                <h4>📍 Adresse du Domaine</h4>
                <p>Chemin des Oliviers de l'Héritage<br />34000 Montpellier, Hérault</p>
              </div>
              <div className="loc-card">
                <h4>🕐 Horaires d'Accueil</h4>
                <p>Lun – Ven : 9h00 – 18h00<br />Samedi : 9h00 – 13h00</p>
              </div>
              <div className="loc-card">
                <h4>📞 Contact Direct</h4>
                <p><a href="tel:+33467000000">+33 (0)4 67 00 00 00</a><br /><a href="mailto:contact@oliviersheritage.fr">contact@oliviersheritage.fr</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-home">
        <div className="section-inner">
          <div className="contact-grid">
            <div>
              <div className="section-tag" style={{ color: 'var(--gold-light)' }}>Nous écrire</div>
              <h2 className="section-title" style={{ color: 'var(--cream)' }}>Entrer en <em>contact</em></h2>
              <p className="contact-form-desc">Une question sur nos produits, un partenariat à discuter, ou simplement envie de nous rendre visite ? Écrivez-nous.</p>
              <ContactForm />
            </div>
            <div className="contact-info">
              <h3>Nos coordonnées</h3>
              <div className="contact-row">
                <div className="contact-icon">📞</div>
                <div className="contact-detail">
                  <h4>Téléphone</h4>
                  <p><a href="tel:+33467000000" style={{ color: 'var(--cream)' }}>+33 (0)4 67 00 00 00</a></p>
                </div>
              </div>
              <div className="contact-row">
                <div className="contact-icon">✉️</div>
                <div className="contact-detail">
                  <h4>Email Particuliers</h4>
                  <p><a href="mailto:boutique@oliviersheritage.fr" style={{ color: 'var(--cream)' }}>boutique@oliviersheritage.fr</a></p>
                </div>
              </div>
              <div className="contact-row">
                <div className="contact-icon">🏢</div>
                <div className="contact-detail">
                  <h4>Email Professionnels</h4>
                  <p><a href="mailto:pro@oliviersheritage.fr" style={{ color: 'var(--cream)' }}>pro@oliviersheritage.fr</a></p>
                </div>
              </div>
              <div className="contact-row">
                <div className="contact-icon">📍</div>
                <div className="contact-detail">
                  <h4>Adresse</h4>
                  <p>Chemin des Oliviers de l'Héritage<br />34000 Montpellier, France</p>
                </div>
              </div>
              <div className="contact-row">
                <div className="contact-icon"><InstaIcon style={{width: "1.4rem", marginRight: ".6rem", position: "relative", top: ".2rem"}}/></div>
                <div className="contact-detail">
                  <h4>Réseaux</h4>
                  <a style={{textDecoration: "none"}} href="https://www.instagram.com/oliveraie_de_montpellier?igsh=eWgyeHI0amxoanNh"><p>rejoignez-nous sur instagram !</p></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
