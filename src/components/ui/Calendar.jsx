import { useState, useMemo } from 'react'

const MONTH_NAMES = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']

const now = new Date()

export default function Calendar({
  availDays = [5, 6, 12, 13, 19, 20, 26, 27],
  bookedDays = [3, 10, 17, 24],
  selectedDate,
  onSelectDay,
  onCancelBooking,
}) {
  const [calYear, setCalYear] = useState(now.getFullYear())
  const [calMonth, setCalMonth] = useState(now.getMonth())
  const [localAvail, setLocalAvail] = useState([...availDays])
  const [localBooked, setLocalBooked] = useState([...bookedDays])
  const [cancelPending, setCancelPending] = useState(null) // day number awaiting confirmation
  const [cancelledDay, setCancelledDay] = useState(null) // day number just cancelled (shows confirmation)

  const firstDay = useMemo(() => new Date(calYear, calMonth, 1).getDay(), [calYear, calMonth])
  const daysInMonth = useMemo(() => new Date(calYear, calMonth + 1, 0).getDate(), [calYear, calMonth])
  const offset = firstDay === 0 ? 6 : firstDay - 1

  const handlePrevMonth = () => {
    if (calMonth === 0) {
      setCalMonth(11)
      setCalYear((y) => y - 1)
    } else {
      setCalMonth((m) => m - 1)
    }
    setCancelPending(null)
    setCancelledDay(null)
  }

  const handleNextMonth = () => {
    if (calMonth === 11) {
      setCalMonth(0)
      setCalYear((y) => y + 1)
    } else {
      setCalMonth((m) => m + 1)
    }
    setCancelPending(null)
    setCancelledDay(null)
  }

  const handleDayClick = (d) => {
    if (localAvail.includes(d)) {
      setCancelPending(null)
      onSelectDay?.(d, calMonth, calYear)
    } else if (localBooked.includes(d)) {
      setCancelPending(d)
      setCancelledDay(null)
    }
  }

  const confirmCancel = () => {
    const d = cancelPending
    setLocalBooked((prev) => prev.filter((x) => x !== d))
    setLocalAvail((prev) => [...prev, d])
    onCancelBooking?.(d)
    setCancelPending(null)
    setCancelledDay(d)
  }

  const days = []
  for (let i = 0; i < offset; i++) {
    days.push(<div key={`empty-${i}`} className="cal-day other-month" />)
  }
  for (let d = 1; d <= daysInMonth; d++) {
    let cls = 'cal-day'
    if (localAvail.includes(d)) cls += ' available'
    else if (localBooked.includes(d)) cls += ' booked'
    if (selectedDate === d) cls += ' selected'

    days.push(
      <div
        key={d}
        className={cls}
        onClick={() => handleDayClick(d)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === 'Enter' ? handleDayClick(d) : null)}
      >
        {d}
      </div>
    )
  }

  return (
    <div className="booking-section">
      <h3>📅 Disponibilités & Réservation</h3>
      <div className="booking-subtitle">Sélectionnez une date disponible pour réserver votre visite</div>
      <div className="calendar-grid-head">
        <button type="button" className="cal-nav" onClick={handlePrevMonth}>← Précédent</button>
        <span className="cal-month">{MONTH_NAMES[calMonth]} {calYear}</span>
        <button type="button" className="cal-nav" onClick={handleNextMonth}>Suivant →</button>
      </div>
      <div className="calendar-days">
        {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'].map((name) => (
          <div key={name} className="cal-day-name">{name}</div>
        ))}
      </div>
      <div className="calendar-days" style={{ marginTop: 4 }}>
        {days}
      </div>
      <div className="cal-legend">
        <div className="cal-legend-item">
          <div className="cal-legend-dot" style={{ background: 'rgba(122,148,64,0.2)', border: '1px solid rgba(122,148,64,0.4)' }} />
          Disponible
        </div>
        <div className="cal-legend-item">
          <div className="cal-legend-dot" style={{ background: 'rgba(201,168,76,0.2)', border: '1px solid rgba(201,168,76,0.5)' }} />
          Réservé (annulable)
        </div>
        <div className="cal-legend-item">
          <div className="cal-legend-dot" style={{ background: 'rgba(74,94,42,0.9)' }} />
          Sélectionné
        </div>
      </div>

      {cancelPending && (
        <div style={{ margin: '1rem 0', padding: '1rem 1.2rem', background: '#fff8e1', border: '1px solid #ffe082', borderRadius: 8 }}>
          <p style={{ fontSize: '0.85rem', color: '#6d4c00', marginBottom: '0.8rem' }}>
            Annuler la réservation du <strong>{cancelPending} {MONTH_NAMES[calMonth]} {calYear}</strong> ?
            Le remboursement sera effectué sous 5 jours ouvrés.
          </p>
          <div style={{ display: 'flex', gap: '0.6rem' }}>
            <button type="button" className="btn-primary" style={{ fontSize: '0.8rem', padding: '0.4rem 1rem' }} onClick={confirmCancel}>
              Confirmer l'annulation
            </button>
            <button type="button" className="btn-outline" style={{ fontSize: '0.8rem', padding: '0.4rem 1rem' }} onClick={() => setCancelPending(null)}>
              Annuler
            </button>
          </div>
        </div>
      )}

      {cancelledDay && (
        <div style={{ margin: '1rem 0', padding: '0.8rem 1.2rem', background: '#f0f7ed', border: '1px solid #c3ddb8', borderRadius: 8, fontSize: '0.85rem', color: '#2e7d32' }}>
          ✅ Réservation du {cancelledDay} {MONTH_NAMES[calMonth]} {calYear} annulée. Remboursement sous 5 jours ouvrés.
        </div>
      )}

      <div className="cancel-note">
        ℹ️ Pour annuler : cliquez sur votre créneau réservé (en jaune) puis confirmez. Remboursement sous 5 jours ouvrés.
      </div>
    </div>
  )
}
