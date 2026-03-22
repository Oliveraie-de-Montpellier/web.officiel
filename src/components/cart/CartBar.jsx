import { useCart } from '../../contexts/CartContext'

export default function CartBar() {
  const { totalCount, openCart } = useCart()
  if (totalCount === 0) return null

  return (
    <div className="cart-bar" onClick={openCart} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && openCart()}>
      🛒 Mon Panier <div className="cart-count">{totalCount}</div>
    </div>
  )
}
