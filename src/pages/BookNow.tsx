import { CalendarClock, CheckCircle2, CreditCard, Phone, ShieldCheck, Users, Waves } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import boatImg from '../assets/fboa-boat.jpg'
import payflexPlaceholder from '../assets/falsebayocean-logo.jpeg'

const sectionBase = 'w-full px-4 sm:px-6 lg:px-10'
const cardBase = 'rounded-2xl border border-slate-200 bg-white p-5 shadow-md'
const inputBase =
  'w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200'

function BookNow() {
  const location = useLocation()
  const adventures = useMemo(
    () => [
      { slug: 'jetski', name: "Jet Ski Adventure - Gordon's Bay", duration: '30 or 60 mins', price: 'From R1700 per rider', summary: 'Solo or tandem rides with gear and a quick safety brief.' },
      { slug: 'charter', name: 'Private Boat Charter', duration: '1-4 hours', price: 'From R3,200 per boat', summary: 'Skippered cruises for couples, friends, or teams at your pace.' },
      { slug: 'marine-life', name: 'Marine Life Trip', duration: '1.5-3 hours', price: 'From R1,450 pp', summary: 'Wildlife-focused routes to spot dolphins, seals, and seasonal whales.' },
      { slug: 'harbour-cruise', name: 'Harbour & Coastline Cruise', duration: '1-2 hours', price: 'From R2,200 per cruise', summary: 'Relaxed harbour laps and coastline views with snacks onboard.' },
    ],
    [],
  )

  const [selectedAdventure, setSelectedAdventure] = useState(adventures[0])
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [selectedDuration, setSelectedDuration] = useState('60 min')
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
      { key: 'jetski-30-1', label: 'Add 1 jet ski • 30 minutes', price: 'R1700', quantity: false },
      { key: 'jetski-30-2', label: 'Add 2 jet skis • 30 minutes', price: 'R3100', quantity: false },
      { key: 'jetski-60-1', label: 'Add 1 jet ski • 1 hour', price: 'R2200', quantity: false },
      { key: 'jetski-60-2', label: 'Add 2 jet skis • 1 hour', price: 'R5100', quantity: false },
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
      const numeric = Number(extra.price.replace(/[^\d]/g, '')) || 0
      const qty = extra.quantity ? state.quantity : 1
      return sum + numeric * qty
    }, 0)
    return base + extrasTotal
  }

  const total = calcTotal()
  const instalment = total ? (total / 4).toFixed(0) : '0'
  const isAdventureValid = Boolean(selectedAdventure?.slug)
  const isDateTimeValid = Boolean(selectedDate && selectedTime)
  const isGuestValid = Boolean(guestForm.fullName && guestForm.email && guestForm.phone && guestForm.guests)
  const canSubmit = isAdventureValid && isDateTimeValid && isGuestValid && !submitted

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

  const handleNextFromAdventure = () => {
    if (validateStep(1)) setCurrentStep(2)
  }

  const handleStepClick = (stepNumber: number) => {
    if (stepNumber < currentStep) {
      setCurrentStep(stepNumber)
    } else if (stepNumber === currentStep + 1) {
      if (validateStep(currentStep)) {
        setCurrentStep(stepNumber)
      }
    }
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
    { number: 2, title: 'Date & Time', description: 'Select the best slot for your crew.' },
    { number: 3, title: 'Guests & Details', description: 'Add your group size, contact, and extras.' },
    { number: 4, title: 'Review & Payment', description: 'Check everything and confirm with Payflex.' },
  ]
  const progress = Math.min((currentStep / steps.length) * 100, 100)

  return (
    <section id="book" className="py-14">
      <div className={sectionBase}>
        <div className="mb-4 space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Booking flow</p>
          <h1 className="text-3xl font-bold text-slate-900">Lock in your False Bay adventure</h1>
          <p className="text-slate-600">
            Pick your experience, choose a time, and secure your spot online. The fastest way to the water in Gordon&apos;s Bay.
          </p>
        </div>

        <div className="mb-4">
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            <span>
              Step {currentStep} of {steps.length}
            </span>
            <span>{Math.round(progress)}% ready</span>
          </div>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-gradient-to-r from-sky-800 to-cyan-500 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const status = currentStep === step.number ? 'active' : currentStep > step.number ? 'complete' : 'upcoming'
            return (
              <button
                type="button"
                key={step.number}
                className={`flex h-full flex-col gap-2 rounded-2xl border px-4 py-3 text-left shadow-sm transition ${
                  status === 'active'
                    ? 'border-sky-600 bg-sky-50 shadow-md'
                    : status === 'complete'
                      ? 'border-slate-200 bg-white'
                      : 'border-slate-200 bg-white text-slate-500'
                }`}
                onClick={() => handleStepClick(step.number)}
                disabled={status === 'upcoming'}
              >
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold ${
                      status === 'active'
                        ? 'bg-gradient-to-r from-sky-800 to-cyan-500 text-white'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {status === 'complete' ? '✓' : step.number}
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-600">
                    {status === 'active' ? 'In progress' : status === 'complete' ? 'Done' : 'Next'}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{step.title}</p>
                  <p className="text-xs text-slate-500">{step.description}</p>
                </div>
              </button>
            )
          })}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="space-y-6">
            {currentStep === 1 && (
              <div className={cardBase}>
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Step 1</p>
                  <h3 className="text-xl font-semibold text-slate-900">Choose Adventure</h3>
                  <p className="text-sm text-slate-600">Select an option to move to date and time. You can change later.</p>
                  {errors.adventure ? <p className="text-sm text-rose-600">{errors.adventure}</p> : null}
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {adventures.map((adventure) => (
                    <article
                      key={adventure.slug}
                      className={`h-full cursor-pointer rounded-2xl border p-4 transition ${
                        selectedAdventure.slug === adventure.slug ? 'border-sky-600 shadow-lg' : 'border-slate-200 shadow-sm hover:border-sky-200'
                      }`}
                      onClick={() => handleAdventureSelect(adventure)}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-lg font-semibold text-slate-900">{adventure.name}</h4>
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">{adventure.duration}</span>
                      </div>
                      <p className="text-sm text-slate-600">{adventure.summary}</p>
                      <p className="text-sm font-semibold text-sky-800">{adventure.price}</p>
                      <p className="text-sm text-slate-500">{selectedAdventure.slug === adventure.slug ? 'Selected' : 'Tap to select'}</p>
                    </article>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-2 rounded-xl bg-slate-50 px-3 py-3 text-xs font-semibold text-slate-700">
                  <span className="rounded-full bg-white px-3 py-1 text-slate-800">Licensed skipper + guide</span>
                  <span className="rounded-full bg-white px-3 py-1 text-slate-800">Gear and safety brief included</span>
                  <span className="rounded-full bg-white px-3 py-1 text-slate-800">Flexible reschedule if weather shifts</span>
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  <button
                    className="inline-flex items-center rounded-full bg-gradient-to-r from-sky-800 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-md"
                    type="button"
                    onClick={handleNextFromAdventure}
                  >
                    Next: date &amp; time
                  </button>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className={cardBase}>
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Step 2</p>
                  <h3 className="text-xl font-semibold text-slate-900">Date &amp; Time</h3>
                  <p className="text-sm text-slate-600">
                    Selected: <strong>{selectedAdventure.name}</strong>. Share your preferred slot (sunrise, mid-day, sunset). We will confirm the closest available time.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">Duration picks are adjustable</span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">We text you to lock in the final time</span>
                  </div>
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-800" htmlFor="date">
                      Choose your date
                    </label>
                    <input
                      id="date"
                      className={inputBase}
                      type="date"
                      value={selectedDate}
                      onChange={(e) => {
                        setSelectedDate(e.target.value)
                        setErrors((prev) => ({ ...prev, date: '' }))
                      }}
                    />
                    {errors.date ? <p className="text-sm text-rose-600">{errors.date}</p> : null}
                  </div>
                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-slate-800">Pick a time slot</p>
                    <div className="flex flex-wrap gap-2">
                      {['09:00', '10:30', '12:00', '14:00', '16:30'].map((time) => (
                        <button
                          key={time}
                          type="button"
                          className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                            selectedTime === time ? 'border-sky-700 bg-sky-50 text-sky-800' : 'border-slate-200 hover:border-sky-200'
                          }`}
                          onClick={() => {
                            setSelectedTime(time)
                            setErrors((prev) => ({ ...prev, time: '' }))
                          }}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                    {errors.time ? <p className="text-sm text-rose-600">{errors.time}</p> : null}
                    <p className="text-sm text-slate-600">
                      Times may shift slightly based on weather and sea conditions - we&apos;ll confirm via WhatsApp or email.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-slate-800">Pick a duration</p>
                    <div className="flex flex-wrap gap-2">
                      {['60 min', '90 min', '120 min'].map((duration) => (
                        <button
                          key={duration}
                          type="button"
                          className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                            selectedDuration === duration ? 'border-sky-700 bg-sky-50 text-sky-800' : 'border-slate-200 hover:border-sky-200'
                          }`}
                          onClick={() => setSelectedDuration(duration)}
                        >
                          {duration}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  <button className="inline-flex items-center rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-100" type="button" onClick={() => setCurrentStep(1)}>
                    Back
                  </button>
                  <button
                    className="inline-flex items-center rounded-full bg-gradient-to-r from-sky-800 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-md disabled:opacity-50"
                    type="button"
                    disabled={!selectedDate || !selectedTime}
                    onClick={handleNextFromDateTime}
                  >
                    Next step
                  </button>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className={cardBase}>
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Step 3</p>
                  <h3 className="text-xl font-semibold text-slate-900">Guests &amp; Details</h3>
                  <p className="text-sm text-slate-600">Add your group size and any extras (snacks, drinks, photo support).</p>
                </div>
                <div className="mt-4 space-y-4">
                  <div className="rounded-xl bg-slate-50 p-4">
                    <p className="text-sm font-semibold text-slate-900">Lead guest</p>
                    <p className="text-xs text-slate-600">We only use this to confirm your booking and send updates.</p>
                  </div>
                  <div className="grid gap-3 md:grid-cols-2">
                    <label className="space-y-1 text-sm font-semibold text-slate-800">
                      Full name*
                      <input
                        required
                        type="text"
                        className={inputBase}
                        value={guestForm.fullName}
                        onChange={(e) => {
                          setGuestForm({ ...guestForm, fullName: e.target.value })
                          setErrors((prev) => ({ ...prev, fullName: '' }))
                        }}
                        placeholder="Your full name"
                      />
                      {errors.fullName ? <p className="text-sm text-rose-600">{errors.fullName}</p> : null}
                    </label>
                    <label className="space-y-1 text-sm font-semibold text-slate-800">
                      Email address*
                      <input
                        required
                        type="email"
                        className={inputBase}
                        value={guestForm.email}
                        onChange={(e) => {
                          setGuestForm({ ...guestForm, email: e.target.value })
                          setErrors((prev) => ({ ...prev, email: '' }))
                        }}
                        placeholder="you@example.com"
                      />
                      {errors.email ? <p className="text-sm text-rose-600">{errors.email}</p> : null}
                    </label>
                    <label className="space-y-1 text-sm font-semibold text-slate-800">
                      Mobile / WhatsApp*
                      <input
                        required
                        type="tel"
                        className={inputBase}
                        value={guestForm.phone}
                        onChange={(e) => {
                          setGuestForm({ ...guestForm, phone: e.target.value })
                          setErrors((prev) => ({ ...prev, phone: '' }))
                        }}
                        placeholder="+27 82 123 4567"
                      />
                      {errors.phone ? <p className="text-sm text-rose-600">{errors.phone}</p> : null}
                    </label>
                    <label className="space-y-1 text-sm font-semibold text-slate-800">
                      Number of guests / riders*
                      <input
                        required
                        type="number"
                        min={1}
                        className={inputBase}
                        value={guestForm.guests}
                        onChange={(e) => {
                          setGuestForm({ ...guestForm, guests: e.target.value })
                          setErrors((prev) => ({ ...prev, guests: '' }))
                        }}
                        placeholder="4"
                      />
                      {errors.guests ? <p className="text-sm text-rose-600">{errors.guests}</p> : null}
                    </label>
                  </div>
                  <div className="grid gap-3 md:grid-cols-2">
                    <label className="space-y-1 text-sm font-semibold text-slate-800">
                      Special requests (optional)
                      <textarea
                        className={`${inputBase} min-h-[100px]`}
                        value={guestForm.notes}
                        onChange={(e) => setGuestForm({ ...guestForm, notes: e.target.value })}
                        rows={3}
                        placeholder="Any dietary needs, celebrations, or other notes?"
                      />
                    </label>
                    <div className="rounded-xl bg-slate-50 p-4 text-sm text-slate-700">
                      <p className="font-semibold text-slate-900">Quick checklist</p>
                      <ul className="mt-2 space-y-1">
                        <li>Share your best contact for weather updates.</li>
                        <li>Include riders plus spectators in your guest count.</li>
                        <li>Add notes if you want snacks, drinks, or a surprise setup.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-slate-900">Extras / Add-ons</h4>
                    <p className="text-sm text-slate-600">Add jet skis, footage, or extra passengers to your plan.</p>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {extrasOptions.map((extra) => {
                        const state = extras[extra.key]
                        return (
                          <label
                            key={extra.key}
                            className={`flex items-center justify-between gap-3 rounded-xl border p-3 shadow-sm transition ${
                              state?.selected ? 'border-sky-600 bg-sky-50' : 'border-slate-200'
                            }`}
                          >
                            <div>
                              <p className="text-sm font-semibold text-slate-900">{extra.label}</p>
                              <p className="text-sm text-slate-600">{extra.price}</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <input
                                type="checkbox"
                                className="h-4 w-4 rounded border-slate-300 text-sky-700 focus:ring-sky-300"
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
                                  className="h-10 w-16 rounded border border-slate-200 px-2 text-sm"
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

                  <div className="flex flex-wrap gap-3">
                    <button className="inline-flex items-center rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-100" type="button" onClick={() => setCurrentStep(2)}>
                      Back
                    </button>
                    <button className="inline-flex items-center rounded-full bg-gradient-to-r from-sky-800 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-md" type="button" onClick={handleNextFromGuests}>
                      Next: Review &amp; Payment
                    </button>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className={cardBase}>
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Step 4</p>
                  <h3 className="text-xl font-semibold text-slate-900">Review &amp; Payment</h3>
                  <p className="text-sm text-slate-600">We will send a confirmation with payment options to secure your spot.</p>
                </div>
                {submitted ? (
                  <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                    <p className="text-sm font-semibold text-emerald-800">Confirmation</p>
                    <p className="text-sm text-emerald-800">
                      Thanks, your booking details have been captured. We&apos;ll complete payment and final confirmation once Payflex is connected.
                    </p>
                    <div className="mt-3 space-y-2 text-sm text-slate-800">
                      <p>
                        <span className="font-semibold">Adventure:</span> {selectedAdventure.name}
                      </p>
                      <p>
                        <span className="font-semibold">Date &amp; time:</span> {selectedDate || 'N/A'} {selectedTime ? `- ${selectedTime}` : ''}
                      </p>
                      <p>
                        <span className="font-semibold">Duration:</span> {selectedDuration}
                      </p>
                      <p>
                        <span className="font-semibold">Guests:</span> {guestForm.guests || 'N/A'}
                      </p>
                      <p>
                        <span className="font-semibold">Extras:</span>{' '}
                        {extrasOptions
                          .filter((extra) => extras[extra.key]?.selected)
                          .map((extra) => `${extra.label}${extra.quantity ? ` x${extras[extra.key].quantity}` : ''}`)
                          .join(', ') || 'None'}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="grid gap-3 md:grid-cols-2">
                      <div className="rounded-xl border border-slate-200 p-3 shadow-sm">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-semibold text-slate-900">Adventure</p>
                          <button className="text-xs font-semibold text-sky-700" type="button" onClick={() => setCurrentStep(1)}>
                            Edit
                          </button>
                        </div>
                        <p className="text-sm text-slate-700">{selectedAdventure.name}</p>
                      </div>
                      <div className="rounded-xl border border-slate-200 p-3 shadow-sm">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-semibold text-slate-900">Date &amp; time</p>
                          <button className="text-xs font-semibold text-sky-700" type="button" onClick={() => setCurrentStep(2)}>
                            Edit
                          </button>
                        </div>
                        <p className="text-sm text-slate-700">
                          {selectedDate || 'Choose a date'} {selectedTime ? `at ${selectedTime}` : ''}
                        </p>
                      </div>
                      <div className="rounded-xl border border-slate-200 p-3 shadow-sm">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-semibold text-slate-900">Guests &amp; duration</p>
                          <button className="text-xs font-semibold text-sky-700" type="button" onClick={() => setCurrentStep(3)}>
                            Edit
                          </button>
                        </div>
                        <p className="text-sm text-slate-700">
                          {guestForm.guests || 'Add guests'} guests • {selectedDuration}
                        </p>
                        <p className="text-sm text-slate-700">
                          Extras:{' '}
                          {extrasOptions
                            .filter((extra) => extras[extra.key]?.selected)
                            .map((extra) => `${extra.label}${extra.quantity ? ` x${extras[extra.key].quantity}` : ''}`)
                            .join(', ') || 'None'}
                        </p>
                      </div>
                      <div className="rounded-xl border border-slate-200 p-3 shadow-sm">
                        <p className="text-sm font-semibold text-slate-900">Lead guest contact</p>
                        <p className="text-sm text-slate-700">{guestForm.fullName || 'Name needed'}</p>
                        <p className="text-sm text-slate-700">{guestForm.email || 'Email needed'}</p>
                        <p className="text-sm text-slate-700">{guestForm.phone || 'Mobile needed'}</p>
                      </div>
                    </div>
                    <div className="rounded-xl border border-sky-100 bg-sky-50 p-4 text-sm text-slate-700">
                      <p className="font-semibold text-slate-900">What happens after you confirm</p>
                      <ul className="mt-2 space-y-1">
                        <li>We hold your slot and message you on WhatsApp/email to finalize the exact time.</li>
                        <li>Secure your booking with Payflex or pay on arrival if arranged with the crew.</li>
                        <li>If weather shifts, we reschedule you quickly or offer a refund.</li>
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <button className="inline-flex items-center rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-100" type="button" onClick={() => setCurrentStep(3)}>
                        Back
                      </button>
                      <button
                        className="inline-flex items-center rounded-full bg-gradient-to-r from-sky-800 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-md disabled:opacity-50"
                        type="button"
                        onClick={handleSubmit}
                        disabled={isSubmitting || !canSubmit}
                      >
                        {isSubmitting ? 'Processing...' : 'Confirm & Pay with Payflex'}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div className={cardBase}>
              <div className="overflow-hidden rounded-xl">
                <img className="h-52 w-full object-cover" src={boatImg} alt="Charter boat ready to launch in Gordon's Bay" />
              </div>
              <div className="mt-3 space-y-2 text-sm text-slate-700">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Fast booking</p>
                <p className="font-semibold text-slate-900">Tell us when you want to launch</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2"><Users size={18} className="text-sky-700" /> Private skipper and guide</li>
                  <li className="flex items-center gap-2"><ShieldCheck size={18} className="text-sky-700" /> Snacks, sparkling water, and eco sunblock</li>
                  <li className="flex items-center gap-2"><CalendarClock size={18} className="text-sky-700" /> Flexible rescheduling if the Cape Doctor wakes up</li>
                  <li className="flex items-center gap-2"><Waves size={18} className="text-sky-700" /> Lunch &amp; drinks included on safaris</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-sky-700" /> Secure online confirmation</li>
                  <li className="flex items-center gap-2"><CreditCard size={18} className="text-sky-700" /> Pay to confirm or pay on arrival (ask us)</li>
                </ul>
              </div>
            </div>

            <div className={cardBase}>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Summary</p>
              <div className="space-y-2 text-sm text-slate-800">
                <div className="flex items-center justify-between">
                  <span>Adventure</span>
                  <span className="font-semibold text-slate-900">{selectedAdventure.name}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Date</span>
                  <span className="font-semibold text-slate-900">{selectedDate || 'Not selected'}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Time</span>
                  <span className="font-semibold text-slate-900">{selectedTime || 'Not selected'}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Duration</span>
                  <span className="font-semibold text-slate-900">{selectedDuration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Guests</span>
                  <span className="font-semibold text-slate-900">{guestForm.guests || 'Not set'}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Extras</span>
                  <span className="font-semibold text-slate-900">
                    {extrasOptions
                      .filter((extra) => extras[extra.key]?.selected)
                      .map((extra) => `${extra.label}${extra.quantity ? ` x${extras[extra.key].quantity}` : ''}`)
                      .join(', ') || 'None'}
                  </span>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between border-t border-b border-slate-200 py-3">
                <p className="text-base font-semibold text-slate-900">Total (est.)</p>
                <p className="text-xl font-bold text-slate-900">R{total.toFixed(0)}</p>
              </div>
              <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
                <img className="h-12 w-12 rounded-lg border border-slate-200 object-cover" src={payflexPlaceholder} alt="Payflex placeholder" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">Pay later with Payflex</p>
                  <p className="text-xs text-slate-600">Estimated x4 of R{instalment}</p>
                </div>
              </div>
              <button
                type="button"
                className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-md"
              >
                Confirm booking details (payment coming soon)
              </button>
            </div>

            <div className={cardBase}>
              <p className="text-sm font-semibold text-slate-900">Need help?</p>
              <p className="text-sm text-slate-600">Call or WhatsApp and we will assist with a time slot.</p>
              <a className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-sky-800" href="tel:+27662040213">
                <Phone size={18} /> +27 (0)66 204 0213
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookNow
