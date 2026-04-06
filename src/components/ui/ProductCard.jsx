import { useState } from 'react'
import { useCart } from '../../contexts/CartContext'

export default function ProductCard({ product }) {
  const [qty, setQty] = useState(1)
  const { addToCart, setAlertIsActive, alertIsActive } = useCart()

  const handleAddToCart = () => {
    addToCart(product.name, product.price, product.emoji, qty)
    setAlertIsActive(a => ({var: true, key: a.key + 1, name: product.name, qty}))
  }

  return (
    <div className="product-card">
      <div className="product-images">
        <div className="product-img" data-label="Vue Avant">{product.emoji}</div>
        <div className="product-img" data-label="Étiquette">📋</div>
      </div>
      <div className="product-body">
        <div className="product-tags">
          {product.tags.map((t) => {
            let cls = 'tag'
            if (t === 'AOP') cls += ' tag-aop'
            else if (t === 'Artisanal' || t === 'Coffret') cls += ' tag-artisan'
            else if (t === 'Édition Limitée' || t === 'Assaisonné' || t === 'Truffé') cls += ''
            return (
              <span key={t} className={cls} style={product.tagStyle && !['AOP','Artisanal','Coffret'].includes(t) ? product.tagStyle : undefined}>
                {t}
              </span>
            )
          })}
        </div>
        <div className="product-name">{product.name}</div>
        <div className="product-desc">{product.desc}</div>
        {product.stockLow && (
          <div className="product-stock-low">⚠️ Plus que quelques bouteilles en stock !</div>
        )}
        <div className="product-price-row">
          <div>
            <div className="product-price">{product.price.toFixed(2).replace('.', ',')} €</div>
            <div className="product-volume">{product.volume}</div>
          </div>
        </div>
        <div className="qty-selector">
          <button type="button" className="qty-btn" onClick={() => setQty((q) => Math.max(1, q - 1))}>−</button>
          <span className="qty-val">{qty}</span>
          <button type="button" className="qty-btn" onClick={() => setQty((q) => q + 1)}>+</button>
        </div>
        <div className="product-delivery">🚚 Livraison <span>3–5 jours</span> · ou retrait au domaine sous <span>24h</span></div>
        <button type="button" className="add-to-cart" onClick={handleAddToCart}>
          🛒 Ajouter au Panier
        </button>
        <div className="reviews-section">
          <div className="stars">★★★★★</div>
          <div className="review-snippet">« Une huile d'une finesse remarquable. »</div>
          <div className="review-author">— Client fidèle</div>
        </div>
      </div>
    </div>
  )
}
