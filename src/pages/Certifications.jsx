import PageTitle from '../components/PageTitle'

const CERTIFS = [
  {
    priority: 'P0',
    status: 'done',
    statusLabel: 'Obtenu',
    logo: '/certifs/vierge-extra.svg',
    logoAlt: 'Huile d\'olive vierge extra — Règlement UE',
    title: 'Conformité Vierge Extra + Analyses',
    subtitle: 'Catégorie réglementée UE — Règlement (UE) 2022/2104',
    desc: "La mention 'Huile d'olive vierge extra' est une catégorie réglementée par l'Union européenne. Pour la revendiquer légalement, chaque lot doit satisfaire des analyses physico-chimiques (acidité ≤ 0,8 g/100 g, indice K232, K270, etc.) et un panel test organoleptique officiel. C'est la fondation de toute notre stratégie qualité.",
    details: [
      "Acidité libre ≤ 0,8 g/100 g (acide oléique)",
      "Absence de défauts organoleptiques (panel test COI)",
      "Extraction mécanique à froid — sans solvants ni additifs",
      "Analyses réalisées par laboratoire accrédité par lot",
      "N° de lot + DDM + Origine France sur chaque étiquette",
    ],
    color: '#4a6020',
    bg: 'rgba(74,94,42,0.08)',
    border: 'rgba(74,94,42,0.2)',
  },
  {
    priority: 'P1',
    status: 'progress',
    statusLabel: 'En cours — Conversion 2 ans',
    logo: '/certifs/eurofeuille-ab.svg',
    logoAlt: 'Logo Eurofeuille + AB Agriculture Biologique',
    title: 'Agriculture Biologique — AB / Eurofeuille',
    subtitle: 'Certification réglementée — Règlement (UE) 2018/848',
    desc: "La certification Bio est notre priorité n°1 après la conformité Vierge Extra. Elle couvre l'ensemble de la chaîne : verger, trituration, stockage et conditionnement. Le logo Eurofeuille est obligatoire sur les produits biologiques préemballés de l'Union européenne ; la marque AB française est complémentaire. La conversion dure 2 ans incompressibles — nous avons engagé la démarche.",
    details: [
      "Certification de l'exploitation (verger + moulin + atelier)",
      "Aucun pesticide de synthèse ni engrais chimique",
      "Organisme certificateur agréé : Ecocert / Agrocert",
      "Logo Eurofeuille obligatoire sur l'étiquette",
      "Marque AB France en complément (facultative)",
      "Obtention prévue : récolte 2028",
    ],
    color: '#2e7d32',
    bg: 'rgba(46,125,50,0.07)',
    border: 'rgba(46,125,50,0.2)',
  },
  {
    priority: 'P1c',
    status: 'conditional',
    statusLabel: 'Conditionnel — Audit en cours',
    logo: '/certifs/aop-languedoc.svg',
    logoAlt: 'Logo AOP INAO Languedoc',
    title: 'AOP Huile d\'Olive du Languedoc',
    subtitle: "Signe officiel d'origine — Créée en octobre 2023",
    desc: "L'AOP Huile d'Olive du Languedoc, créée en octobre 2023, est une fenêtre d'opportunité rare : moins de 50 producteurs habilités à ce jour, marché non saturé. Elle autorise une revendication d'origine géographique précise et soutient un prix de vente premium. Elle est conditionnée à l'éligibilité cadastrale et variétale de notre verger, actuellement en cours de vérification.",
    details: [
      "Moins de 50 producteurs habilités (niche ouverte)",
      "Ouvre la restauration gastronomique, l'export UE, l'hôtellerie de prestige",
      "Nécessite : vérification commune cadastrale + variétés éligibles",
      "Nécessite : respect du cahier des charges INAO",
      "Audit d'éligibilité en cours — résultat attendu 2026",
      "Communication AOP suspendue jusqu'à confirmation officielle",
    ],
    color: '#7d5a00',
    bg: 'rgba(201,168,76,0.08)',
    border: 'rgba(201,168,76,0.3)',
  },
  {
    priority: 'P2',
    status: 'future',
    statusLabel: 'Option — Phase 2 (2028+)',
    logo: '/certifs/hve.svg',
    logoAlt: 'Logo HVE Haute Valeur Environnementale',
    title: 'HVE — Haute Valeur Environnementale',
    subtitle: 'Certification d\'exploitation agricole',
    desc: "La HVE valorise la performance environnementale globale d'une exploitation : biodiversité, gestion des pratiques, impact environnemental. Pour un domaine ouvert au public, elle renforce le discours pédagogique et institutionnel. Pertinente surtout si la certification Bio est retardée ; à envisager en phase 2.",
    details: [
      "Certification d'exploitation (pas de l'huile elle-même)",
      "Valorise biodiversité et pédagogie environnementale",
      "Utile pour visiteurs, presse locale, partenariats institutionnels",
      "Moins puissante que le Bio en déclenchement d'achat B2C",
    ],
    color: '#1a6090',
    bg: 'rgba(26,96,144,0.06)',
    border: 'rgba(26,96,144,0.15)',
  },
]

const MENTIONS = [
  { label: 'Extraction à froid', detail: 'Température < 27°C · mention réservée UE · utilisée si procédé conforme', status: 'active' },
  { label: 'Année de récolte', detail: "Mention réglementée · 100% du lot doit provenir de l'année indiquée · renforce l'authenticité", status: 'active' },
  { label: 'Édition limitée numérotée', detail: 'Numérotation manuscrite · différenciateur premium · aucune certification requise', status: 'active' },
  { label: 'Allégation polyphénols', detail: "Seuil 250 mg/kg hydroxytyrosol · Règl. UE 432/2012 · canal santé à 32 €/btl · analyses HPLC requises", status: 'future' },
]

const statusConfig = {
  done:        { label: 'Obtenu ✅',           color: '#2e7d32', bg: '#f0f7ed' },
  progress:    { label: 'En cours 🌱',          color: '#1565c0', bg: '#e8f0fe' },
  conditional: { label: 'Conditionnel 🔍',      color: '#7d5a00', bg: '#fff8e1' },
  future:      { label: 'Phase 2 ⏳',           color: '#555',    bg: '#f5f5f5' },
}

export default function Certifications() {
  return (
    <section id="certifications" style={{ paddingTop: 72 }}>
      <PageTitle title="Certifications & Labels" />
      <div className="section-inner">
        <div className="section-tag">Transparence & Qualité</div>
        <h1 className="section-title">Nos <em>Certifications</em> & Labels</h1>
        <p style={{ color: 'var(--text-mid)', fontSize: '0.95rem', maxWidth: 680, lineHeight: 1.8, marginBottom: '0.5rem' }}>
          Nous ne cherchons pas à empiler des labels : nous construisons une crédibilité solide sur quelques preuves bien choisies. Voici notre feuille de route certifications, avec un statut transparent pour chaque dispositif.
        </p>
        <p style={{ color: 'var(--text-mid)', fontSize: '0.82rem', maxWidth: 680, lineHeight: 1.7, marginBottom: '3rem', padding: '0.8rem 1rem', background: '#fff8e1', border: '1px solid #ffe082', borderRadius: 6 }}>
          ⚖️ <strong>Point réglementaire :</strong> aucun label n'est obligatoire pour vendre une huile d'olive, mais la conformité réglementaire (catégorie, étiquetage, traçabilité) est obligatoire avant toute démarche de valorisation.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
          {CERTIFS.map((c) => {
            const sc = statusConfig[c.status]
            return (
              <div key={c.priority} style={{ background: c.bg, border: `1px solid ${c.border}`, borderRadius: 10, padding: '1.8rem 2rem' }}>
                <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                  <div style={{ minWidth: 64, textAlign: 'center' }}>
                    <img src={c.logo} alt={c.logoAlt} style={{ width: 64, height: 64, display: 'block', margin: '0 auto' }} />
                    <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '1px', color: c.color, textTransform: 'uppercase', marginTop: 6 }}>{c.priority}</div>
                  </div>
                  <div style={{ flex: 1, minWidth: 280 }}>
                    <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', flexWrap: 'wrap', marginBottom: '0.4rem' }}>
                      <h3 style={{ fontFamily: "'Playfair Display',serif", color: c.color, fontSize: '1.1rem', margin: 0 }}>{c.title}</h3>
                      <span style={{ fontSize: '0.7rem', fontWeight: 600, padding: '2px 10px', borderRadius: 20, background: sc.bg, color: sc.color, border: `1px solid ${sc.color}30` }}>
                        {sc.label}
                      </span>
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-mid)', marginBottom: '0.7rem', letterSpacing: '0.5px' }}>{c.subtitle}</div>
                    <p style={{ color: 'var(--text-mid)', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '1rem' }}>{c.desc}</p>
                    <ul style={{ margin: 0, paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                      {c.details.map((d, i) => (
                        <li key={i} style={{ color: 'var(--text-mid)', fontSize: '0.82rem', lineHeight: 1.6 }}>{d}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div style={{ marginBottom: '3rem' }}>
          <div className="section-tag">Mentions valorisantes</div>
          <h2 className="section-title" style={{ fontSize: '1.4rem' }}>Ce qui valorise <em>sans être un label</em></h2>
          <p style={{ color: 'var(--text-mid)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>Ces mentions ne sont pas des certifications, mais elles ont une valeur réglementaire ou marketing forte — et certaines sont déjà actives sur nos produits.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
            {MENTIONS.map((m, i) => (
              <div key={i} style={{ background: m.status === 'active' ? 'rgba(74,94,42,0.05)' : '#f9f9f9', border: `1px solid ${m.status === 'active' ? 'rgba(74,94,42,0.2)' : '#e0e0e0'}`, borderRadius: 8, padding: '1.2rem 1.4rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <strong style={{ color: 'var(--olive-dark)', fontSize: '0.9rem' }}>{m.label}</strong>
                  <span style={{ fontSize: '0.65rem', padding: '2px 8px', borderRadius: 20, background: m.status === 'active' ? '#f0f7ed' : '#f5f5f5', color: m.status === 'active' ? '#2e7d32' : '#888', border: `1px solid ${m.status === 'active' ? '#c3ddb8' : '#ddd'}` }}>
                    {m.status === 'active' ? 'Actif' : 'À venir'}
                  </span>
                </div>
                <p style={{ color: 'var(--text-mid)', fontSize: '0.78rem', lineHeight: 1.6, margin: 0 }}>{m.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: 'var(--olive-dark)', borderRadius: 10, padding: '2.5rem 2rem', textAlign: 'center' }}>
          <h3 style={{ fontFamily: "'Playfair Display',serif", color: 'var(--cream)', fontSize: '1.3rem', marginBottom: '0.8rem' }}>
            Une question sur nos pratiques ou nos certifications ?
          </h3>
          <p style={{ color: 'rgba(245,240,232,0.7)', fontSize: '0.88rem', marginBottom: '1.5rem' }}>
            Venez visiter le domaine ou contactez-nous directement.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/visites" className="btn-gold">🌿 Visiter le domaine</a>
            <a href="mailto:contact@oliviersheritage.fr" className="btn-outline-gold">✉️ Nous écrire</a>
          </div>
        </div>
      </div>
    </section>
  )
}
