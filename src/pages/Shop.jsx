import { useSearchParams, useLocation } from 'react-router-dom'
import { useEffect, useState } from "react"
import { products } from '../data/products'
import ProductCard from '../components/ui/ProductCard'
import CartBar from '../components/cart/CartBar'

const FILTERS = [
  { id: 'tous', label: 'Tous les produits' },
  { id: 'vie', label: 'Huile Vierge Extra' },
  { id: 'coffret', label: 'Coffrets Cadeaux' },
  { id: 'edition', label: 'Éditions Limitées' },
]

const VALID_FILTERS = FILTERS.map((f) => f.id)

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchTerm, setSearchTerm] = useState(searchParams.get('query') ?? "")
  const rawFilter = searchParams.get('filtre') ?? 'tous'
  const filter = VALID_FILTERS.includes(rawFilter) ? rawFilter : 'tous'

  useEffect(() => {
    setSearchTerm(s => searchParams.get('query') ?? s)
  }, [searchParams])

  const setFilter = (id) => {
    if (id === 'tous') {
      setSearchParams({})
    } else {
      setSearchParams({ filtre: id })
    }
  }
  
  const normalize = (str) => {
    return str
      .normalize('NFD')                 // 1. split accents from letters
      .replace(/[\u0300-\u036f]/g, '')  // 2. remove accents
      .replace(/[^a-zA-Z0-9]/g, '')     // 3. remove special chars + spaces
      .toLowerCase()                   // 4. lowercase
  }

  const filtered = filter === 'tous'
    ? products.filter((p) => {
      return normalize(searchTerm) === "" ? true : ( normalize(p.name).includes(normalize(searchTerm)) )
    })
    : products.filter((p) => {
      const normSearchTerm = normalize(searchTerm)
      return ( normSearchTerm === "" ) ? ( p.filter === filter ) : ( p.filter === filter && normalize(p.name).includes(normSearchTerm) )
    })


  return (
    <section id="particuliers" style={{ paddingTop: 72 }}>
      <div className="section-inner">
        <div className="section-tag">Vente aux Particuliers</div>
        <h2 className="section-title">Notre <em>Boutique</em></h2>
        <p style={{ color: 'var(--text-mid)', fontSize: '0.95rem', maxWidth: 600, lineHeight: 1.8, marginBottom: '2rem' }}>
          Huiles d'olive vierge extra produites mécaniquement à froid, sans additifs. Récolte d'octobre à décembre — olives cueillies à la main sur nos 500 oliviers centenaires. Chaque lot est numéroté et tracé de l'arbre à la bouteille.
        </p>
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Rechercher un produit..."
            value={searchTerm}
            onChange={(e) => {
              setSearchParams(sp => {
                sp.set("query", e.target.value)
                return sp
              })
              setSearchTerm(e.target.value)
            }}
          />
        </div>
        <div className="products-filter">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              className={`filter-btn ${filter === f.id ? 'active' : ''}`}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>
        {filtered.length === 0 ? (
          <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-mid)' }}>
            Aucun produit dans cette catégorie pour le moment.
          </div>
        ) : (
          <div className="products-grid">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
        <div className="divider-olive">🫒</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem', marginTop: '1rem' }}>
          <div style={{ background: 'var(--cream)', padding: '1.5rem', borderRadius: 4, textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🚚</div>
            <div style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--olive-dark)', marginBottom: '0.3rem' }}>Livraison à Domicile</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-mid)' }}>3–5 jours ouvrés · Gratuite dès 60 €</div>
          </div>
          <div style={{ background: 'var(--cream)', padding: '1.5rem', borderRadius: 4, textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🏠</div>
            <div style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--olive-dark)', marginBottom: '0.3rem' }}>Retrait au Domaine</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-mid)' }}>Prêt sous 24h</div>
          </div>
          <div style={{ background: 'var(--cream)', padding: '1.5rem', borderRadius: 4, textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📦</div>
            <div style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--olive-dark)', marginBottom: '0.3rem' }}>Point Relais</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-mid)' }}>Plus de 5000 points en France</div>
          </div>
        </div>
      </div>
      <CartBar />
    </section>
  )
}
