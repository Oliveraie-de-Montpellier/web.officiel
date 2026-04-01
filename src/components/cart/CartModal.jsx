import { useState } from 'react'
import { useCart } from '../../contexts/CartContext'

export default function CartModal() {
  const { cart, totalAmount, clearCart, closeCart, isCartOpen, updateQty } = useCart()
  const [confirmed, setConfirmed] = useState(false)

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) closeCart()
  }

  const handleValidate = () => {
    setConfirmed(true)
    clearCart()
  }

  const handleClose = () => {
    setConfirmed(false)
    closeCart()
  }

  return (
    <div className={`modal-overlay ${isCartOpen ? 'open' : ''}`} onClick={handleOverlayClick} id="cart-modal">
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title">🛒 Mon Panier</div>
          <button type="button" className="modal-close" onClick={handleClose} aria-label="Fermer">✕</button>
        </div>
        {confirmed ? (
          <div style={{ padding: '2rem', textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.8rem' }}>🫒</div>
            <p style={{ fontWeight: 700, color: 'var(--olive-dark)', marginBottom: '0.4rem' }}>Commande confirmée !</p>
            <p style={{ color: 'var(--text-mid)', fontSize: '0.85rem', lineHeight: 1.6 }}>
              Merci pour votre commande. Vous recevrez une confirmation par email avec les détails de livraison.
            </p>
            <button type="button" className="btn-primary" style={{ marginTop: '1.5rem', width: '100%', justifyContent: 'center' }} onClick={handleClose}>
              Fermer
            </button>
          </div>
        ) : cart.length === 0 ? (
          <div className="cart-empty">Votre panier est vide 🫒</div>
        ) : (
          <>
            <div>
              {cart.map((i) => (
                <div key={i.name} className="cart-item">
                  <div className="cart-item-emoji" style={{position: "relative", top: "-.5rem"}}>{i.emoji}</div>
                  <div style={{ flex: 1 }}>
                    <div className="cart-item-name" style={{marginBottom: ".4rem"}}>{i.name}</div>
                    <div className="cart-item-price" style={{display: "inline-block"}}>
                      {i.qty} × {i.price.toFixed(2)} €
                    </div>
                    <div className="qty-selector" style={{display: "inline-block", marginLeft: "1rem"}}>
                      <button type="button" className="qty-btn" style={{display: "inline-block"}} onClick={() => {updateQty(i.name, i.qty-1)}}>−</button>
                      <span className="qty-val" style={{display: "inline-block"}}>{i.qty}</span>
                      <button type="button" className="qty-btn" style={{display: "inline-block"}} onClick={() => {updateQty(i.name, i.qty+1)}}>+</button>
                    </div>
                  </div>
                  <div style={{position: "relative", top: "-.8rem"}}>
                    <button style={{scale: "0.6"}} type="button" className="modal-close" onClick={() => {updateQty(i.name, 0)}} aria-label="enlever du panier">✕</button>
                    <div style={{ fontWeight: 700, color: 'var(--olive-dark)' }}>
                      {(i.price * i.qty).toFixed(2)} €
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-total">
              <span>Total</span>
              <span>{totalAmount.toFixed(2).replace('.', ',')} €</span>
            </div>
            <button
              type="button"
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', marginBottom: '0.8rem' }}
              onClick={handleValidate}
            >
              ✅ Valider la Commande
            </button>
            <button
              type="button"
              className="btn-outline"
              style={{ width: '100%', justifyContent: 'center', color: 'var(--text-mid)' }}
              onClick={() => {
                clearCart()
                closeCart()
              }}
            >
              🗑️ Vider le Panier
            </button>
          </>
        )}
      </div>
    </div>
  )
}
