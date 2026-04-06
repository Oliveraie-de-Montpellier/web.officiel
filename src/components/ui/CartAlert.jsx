import { useEffect, useRef } from "react"
import { useCart } from "../../contexts/CartContext"

export default function CartAlert({children}) {
    const alertRef = useRef(null)
    const {alertIsActive, setAlertIsActive} = useCart()
    useEffect(() => {
        // const alertElement = alertRef.current
        if (!alertIsActive.var) return

        let fadeTimeout
        const timeout = setTimeout(() => {
            setAlertIsActive(a => ({ ...a, fadeOut: true}))
            fadeTimeout = setTimeout(() => {
                setAlertIsActive(a => ({ ...a, var: false, fadeOut: false}))
            }, 700)
        }, 3000) 

        return () => {
            clearTimeout(timeout)
            clearTimeout(fadeTimeout)
        }

    }, [alertIsActive])
    return <div key={alertIsActive.key} ref={alertRef} className={`cart-alert ${alertIsActive.fadeOut ? "fade-out" : "fade-down"}`} style={{display: alertIsActive.var ? undefined : "none"}}>
        <p>{`${alertIsActive.qty} ${alertIsActive.name} ajouté${alertIsActive.qty > 1 ? "s" : ""} au panier`}</p>
    </div>
}