import { CalendarClock, CheckCircle2, CreditCard, Phone, ShieldCheck, Users, Waves } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import boatImg from '../assets/fboa-boat.jpg'
import payflexPlaceholder from '../assets/falsebayocean-logo.jpeg'

function BookNow() {
  const location = useLocation()
  const adventures = useMemo(
    () => [
      {
        slug: 'jetski',
        name: 'Jet Ski Adventure - Gordon\'s Bay',
        duration: '30 or 60 mins',
        price: 'From R950 per rider',
        summary: 'Solo or tandem rides with gear and a quick safety brief.',
      },
      {
        slug: 'charter',
        name: 'Private Boat Charter',
        duration: '1-4 hours',
        price: 'From R3,200 per boat',
        summary: 'Skippered cruises for couples, friends, or teams at your pace.',
      },
      {
        slug: 'marine-life',
        name: 'Marine Life Trip',
        duration: '1.5-3 hours',
        price: 'From R1,450 pp',
        summary: 'Wildlife-focused routes to spot dolphins, seals, and seasonal whales.',
      },
      {
        slug: 'harbour-cruise',
        name: 'Harbour & Coastline Cruise',
        duration: '1-2 hours',
        price: 'From R2,200 per cruise',
        summary: 'Relaxed harbour laps and coastline views with snacks onboard.',
      },
    ],
    [],
  )

  const [selectedAdventure, setSelectedAdventure] = useState(adventures[0])
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [guestForm, setGuestForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    guests: '',
    notes: '',
  })
  const extrasOptions = useMemo(
    () => [
      { key: 'gopro', label: 'GoPro footage of your ride', price: 'R300', quantity: false },
      { key: 'extra-passenger', label: 'Extra passenger', price: 'R500', quantity: true },
    ],
    [],
  )
  const [extras, setExtras] = useState<Record<string, { selected: boolean; quantity: number }>>(
    () =>
      extrasOptions.reduce(
        (acc, item) => ({
          ...acc,
          [item.key]: { selected: false, quantity: 1 },
        }),
        {} as Record<string, { selected: boolean; quantity: number }>,
      ),
  )

  const calcTotal = () => {
    const basePrices: Record<string, number> = {
      jetski: 950,
      charter: 3200,
      'marine-life': 1450,
      'harbour-cruise': 2200,
    }
    const base = basePrices[selectedAdventure.slug] || 0
    const extrasTotal = extrasOptions.reduce((sum, extra) => {
      const state = extras[extra.key]
      if (!state?.selected) return sum
      const price = extra.price.replace(/[^\d]/g, '')
      const numeric = Number(price) || 0
      const qty = extra.quantity ? state.quantity : 1
      return sum + numeric * qty
    }, 0)
    return base + extrasTotal
  }

  const total = calcTotal()
  const instalment = total ? (total / 4).toFixed(0) : '0'

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const product = params.get('product')
    if (product) {
      const match = adventures.find((item) => item.slug === product)
      if (match) {
        setSelectedAdventure(match)
        setCurrentStep(2)
      }
    }
  }, [adventures, location.search])

  const validateStep = (step: number) => {
    const nextErrors: Record<string, string> = {}
    if (step === 1) {
      if (!selectedAdventure?.slug) nextErrors.adventure = 'Pick an adventure to continue.'
    }
    if (step === 2) {
      if (!selectedDate) nextErrors.date = 'Choose a date.'
      if (!selectedTime) nextErrors.time = 'Pick a time slot.'
    }
    if (step === 3) {
      if (!guestForm.fullName) nextErrors.fullName = 'Full name is required.'
      if (!guestForm.email) nextErrors.email = 'Email is required.'
      if (!guestForm.phone) nextErrors.phone = 'Mobile / WhatsApp is required.'
      if (!guestForm.guests) nextErrors.guests = 'Number of guests is required.'
    }
    setErrors((prev) => ({ ...prev, ...nextErrors }))
    return Object.keys(nextErrors).length === 0
  }

  const handleAdventureSelect = (adventure: (typeof adventures)[0]) => {
    setSelectedAdventure(adventure)
    setErrors((prev) => ({ ...prev, adventure: '' }))
    setCurrentStep(2)
  }

  const handleNextFromDateTime = () => {
    if (validateStep(2)) setCurrentStep(3)
  }

  const handleNextFromGuests = () => {
    if (validateStep(3)) setCurrentStep(4)
  }

  const handleSubmit = () => {
    if (!validateStep(1) || !validateStep(2) || !validateStep(3)) {
      setCurrentStep((prev) => Math.max(prev, 1))
      return
    }
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 900)
  }

  const steps = [
    { number: 1, title: 'Choose Adventure', description: 'Pick jet skis, a charter, or a wildlife route.' },
    { number: 2, title: 'Date & Time', description: 'Select your slot - sunrise glass, mid-day, or sunset.' },
    { number: 3, title: 'Guests & Details', description: 'Add your group size, extras, and any notes.' },
    { number: 4, title: 'Review & Payment', description: 'Confirm the plan and secure your spot online.' },
  ]

  return (
    <section id="book" className="section booking booking-flow">
      <div>
        <div className="eyebrow">Booking flow</div>
        <h1>Lock in your False Bay adventure</h1>
        <p className="muted">
          Pick your experience, choose a time, and secure your spot online. The
          fastest way to the water in Gordon&apos;s Bay.
        </p>
        <div className="progress">
          {steps.map((step) => (
            <div key={step.number} className={`progress-step ${currentStep >= step.number ? 'current' : ''}`}>
              <div className="progress-dot" />
              <p className="label">
                Step {step.number} - {step.title}
              </p>
            </div>
          ))}
        </div>
        <div className="steps">
          {steps.map(({ number, title, description }) => (
            <div className={`step ${currentStep === number ? 'active' : ''}`} key={title}>
              <span className="badge">{number}</span>
              <div>
                <p className="label">{title}</p>
                <p className="muted">{description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="booking-subsection">
          <h3>Step 1 - Choose Adventure</h3>
          <p className="muted">Select an option to move to date and time.</p>
          <div className="book-adventure-grid">
            {adventures.map((adventure) => (
              <article
                key={adventure.slug}
                className={`book-adventure-card ${selectedAdventure.slug === adventure.slug ? 'selected' : ''}`}
              >
                <div className="book-card-header">
                  <h4>{adventure.name}</h4>
                  <p className="label">{adventure.duration}</p>
                </div>
                <p className="muted">{adventure.summary}</p>
                <p className="label">{adventure.price}</p>
                <button
                  type="button"
                  className="button primary"
                  onClick={() => handleAdventureSelect(adventure)}
                >
                  Select
                </button>
              </article>
            ))}
          </div>
          {errors.adventure ? <p className="form-status error-text">{errors.adventure}</p> : null}
        </div>
        <div className="booking-subsection">
          <h3>Step 2 - Date &amp; Time</h3>
          <p className="muted">
            Selected: <strong>{selectedAdventure.name}</strong>. Share your preferred slot (sunrise, mid-day, sunset).
            We will confirm the closest available time.
          </p>
          <div className="date-time-picker">
            <div className="date-picker">
              <label className="label" htmlFor="date">
                Choose your date
              </label>
              <input
                id="date"
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
              {errors.date ? <p className="form-status error-text">{errors.date}</p> : null}
            </div>
            <div className="time-picker">
              <p className="label">Pick a time slot</p>
              <div className="time-grid">
                {['09:00', '10:30', '12:00', '14:00', '16:30'].map((time) => (
                  <button
                    key={time}
                    type="button"
                    className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
              {errors.time ? <p className="form-status error-text">{errors.time}</p> : null}
              <p className="muted">
                Times may shift slightly based on weather and sea conditions - we&apos;ll confirm via WhatsApp or email.
              </p>
            </div>
            <div className="section-cta">
              <button
                className="button primary"
                type="button"
                disabled={!selectedDate || !selectedTime}
                onClick={handleNextFromDateTime}
              >
                Next: Guests &amp; Details
              </button>
            </div>
          </div>
        </div>
        <div className="booking-subsection">
          <h3>Step 3 - Guests &amp; Details</h3>
          <p className="muted">Add your group size and any extras (snacks, drinks, photo support).</p>
          <div className="guest-form">
            <div className="guest-grid">
              <label>
                Full name*
                <input
                  required
                  type="text"
                  value={guestForm.fullName}
                  onChange={(e) => setGuestForm({ ...guestForm, fullName: e.target.value })}
                  placeholder="Your full name"
                />
                {errors.fullName ? <p className="form-status error-text">{errors.fullName}</p> : null}
              </label>
              <label>
                Email address*
                <input
                  required
                  type="email"
                  value={guestForm.email}
                  onChange={(e) => setGuestForm({ ...guestForm, email: e.target.value })}
                  placeholder="you@example.com"
                />
                {errors.email ? <p className="form-status error-text">{errors.email}</p> : null}
              </label>
              <label>
                Mobile / WhatsApp*
                <input
                  required
                  type="tel"
                  value={guestForm.phone}
                  onChange={(e) => setGuestForm({ ...guestForm, phone: e.target.value })}
                  placeholder="+27 82 123 4567"
                />
                {errors.phone ? <p className="form-status error-text">{errors.phone}</p> : null}
              </label>
              <label>
                Number of guests / riders*
                <input
                  required
                  type="number"
                  min={1}
                  value={guestForm.guests}
                  onChange={(e) => setGuestForm({ ...guestForm, guests: e.target.value })}
                  placeholder="4"
                />
                {errors.guests ? <p className="form-status error-text">{errors.guests}</p> : null}
              </label>
            </div>
            <label>
              Special requests (optional)
              <textarea
                value={guestForm.notes}
                onChange={(e) => setGuestForm({ ...guestForm, notes: e.target.value })}
                rows={3}
                placeholder="Any dietary needs, celebrations, or other notes?"
              />
            </label>
          </div>
          <div className="booking-subsection">
            <h4>Extras / Add-ons</h4>
            <p className="muted">Add what you need to make it special.</p>
            <div className="extras-grid">
              {extrasOptions.map((extra) => {
                const state = extras[extra.key]
                return (
                  <label key={extra.key} className={`extra-card ${state?.selected ? 'selected' : ''}`}>
                    <div>
                      <p className="label">{extra.label}</p>
                      <p className="muted">{extra.price}</p>
                    </div>
                    <div className="extra-controls">
                      <input
                        type="checkbox"
                        checked={state?.selected || false}
                        onChange={(e) =>
                          setExtras({
                            ...extras,
                            [extra.key]: { selected: e.target.checked, quantity: state?.quantity || 1 },
                          })
                        }
                      />
                      {extra.quantity ? (
                        <input
                          type="number"
                          min={1}
                          value={state?.quantity || 1}
                          onChange={(e) =>
                            setExtras({
                              ...extras,
                              [extra.key]: {
                                selected: state?.selected || false,
                                quantity: Math.max(1, Number(e.target.value) || 1),
                              },
                            })
                          }
                        />
                      ) : null}
                    </div>
                  </label>
                )
              })}
            </div>
          </div>
          <div className="section-cta">
            <button
              className="button primary"
              type="button"
              onClick={handleNextFromGuests}
            >
              Next: Review &amp; Payment
            </button>
          </div>
        </div>
        <div className="booking-subsection">
          <h3>Step 4 - Review &amp; Payment</h3>
          <p className="muted">We will send a confirmation with payment options to secure your spot.</p>
          {submitted ? (
            <div className="summary-card success-card">
              <p className="label">Confirmation</p>
              <p className="muted">
                Thanks, your booking details have been captured. We&apos;ll complete payment and final confirmation once
                Payflex is connected.
              </p>
              <div className="summary-line">
                <p className="label">Adventure</p>
                <p className="muted">{selectedAdventure.name}</p>
              </div>
              <div className="summary-line">
                <p className="label">Date &amp; time</p>
                <p className="muted">
                  {selectedDate || 'N/A'} {selectedTime ? `- ${selectedTime}` : ''}
                </p>
              </div>
              <div className="summary-line">
                <p className="label">Guests</p>
                <p className="muted">{guestForm.guests || 'N/A'}</p>
              </div>
              <div className="summary-line">
                <p className="label">Extras</p>
                <p className="muted">
                  {extrasOptions
                    .filter((extra) => extras[extra.key]?.selected)
                    .map((extra) => `${extra.label}${extra.quantity ? ` x${extras[extra.key].quantity}` : ''}`)
                    .join(', ') || 'None'}
                </p>
              </div>
            </div>
          ) : (
            <div className="section-cta">
              <button className="button primary" type="button" onClick={handleSubmit} disabled={isSubmitting}>
                {isSubmitting ? 'Processing...' : 'Confirm & Pay with Payflex'}
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="booking-card">
        <div className="booking-photo">
          <img src={boatImg} alt="Charter boat ready to launch in Gordon's Bay" />
          <span className="photo-tag">
            <CalendarClock size={16} /> Next weekend slots open
          </span>
        </div>
        <p className="label">Fast booking</p>
        <h3>Tell us when you want to launch</h3>
        <ul className="feature-list">
          <li>
            <Users size={18} /> Private skipper and guide
          </li>
          <li>
            <ShieldCheck size={18} /> Snacks, sparkling water, and eco sunblock
          </li>
          <li>
            <CalendarClock size={18} /> Flexible rescheduling if the Cape Doctor wakes up
          </li>
          <li>
            <Waves size={18} /> Lunch &amp; drinks included on safaris
          </li>
          <li>
            <CheckCircle2 size={18} /> Secure online confirmation
          </li>
          <li>
            <CreditCard size={18} /> Pay to confirm or pay on arrival (ask us)
          </li>
        </ul>
        <div className="summary-card">
          <div className="summary-line">
            <p className="label">Selected adventure</p>
            <p className="muted">{selectedAdventure.name}</p>
          </div>
          <div className="summary-line">
            <p className="label">Date</p>
            <p className="muted">{selectedDate || 'Not selected'}</p>
          </div>
          <div className="summary-line">
            <p className="label">Time</p>
            <p className="muted">{selectedTime || 'Not selected'}</p>
          </div>
          <div className="summary-line">
            <p className="label">Guests</p>
            <p className="muted">{guestForm.guests || 'Not provided'}</p>
          </div>
          <div className="summary-line">
            <p className="label">Extras</p>
            <p className="muted">
              {extrasOptions
                .filter((extra) => extras[extra.key]?.selected)
                .map((extra) => `${extra.label}${extra.quantity ? ` x${extras[extra.key].quantity}` : ''}`)
                .join(', ') || 'None'}
            </p>
          </div>
          <div className="summary-total">
            <p>Total (est.)</p>
            <p className="total-amount">R{total}</p>
          </div>
          <div className="payflex">
            <img src={payflexPlaceholder} alt="Payflex placeholder logo" />
            <div>
              <p className="label">Pay with Payflex</p>
              <p className="muted">4 interest-free instalments over 6 weeks.</p>
              <p className="muted">From R{instalment} (4 x R{instalment}) with Payflex.</p>
            </div>
          </div>
          <a className="button primary full" href="tel:+27662040213">
            <Phone size={18} /> Call to book: +27 (0)66 204 0213
          </a>
          <a className="button ghost full" href="/adventures">
            Pick an adventure first
          </a>
          <button className="button primary full" type="button">
            Confirm &amp; Pay with Payflex
          </button>
        </div>
      </div>
    </section>
  )
}

export default BookNow
