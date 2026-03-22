import { useEffect } from 'react'

const SITE_NAME = 'Oliveraie de Montpellier'

export default function PageTitle({ title }) {
  useEffect(() => {
    document.title = title ? `${title} — ${SITE_NAME}` : SITE_NAME
    return () => {
      document.title = SITE_NAME
    }
  }, [title])

  return null
}
