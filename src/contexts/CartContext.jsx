import { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext(null)

const STORAGE_KEY = 'olive-cart'

export function CartProvider({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart))
  }, [cart])

  const addToCart = (name, price, emoji, qty = 1) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.name === name)
      if (existing) {
        return prev.map((i) =>
          i.name === name ? { ...i, qty: i.qty + qty } : i
        )
      }
      return [...prev, { name, price, emoji, qty }]
    })
  }

  const removeFromCart = (name) => {
    setCart((prev) => prev.filter((i) => i.name !== name))
  }

  const updateQty = (name, qty) => {
    if (qty < 1) {
      removeFromCart(name)
      return
    }
    setCart((prev) =>
      prev.map((i) => (i.name === name ? { ...i, qty } : i))
    )
  }

  const clearCart = () => setCart([])

  const totalCount = cart.reduce((s, i) => s + i.qty, 0)
  const totalAmount = cart.reduce((s, i) => s + i.price * i.qty, 0)
  const openCart = () => setIsCartOpen(true)
  const closeCart = () => setIsCartOpen(false)

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQty,
        clearCart,
        totalCount,
        totalAmount,
        isCartOpen,
        openCart,
        closeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
