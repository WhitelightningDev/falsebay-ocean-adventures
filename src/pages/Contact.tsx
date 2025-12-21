import { type FormEvent, useState } from 'react'
import { Clock3, Instagram, Mail, MapPin, Phone, Send, Waves } from 'lucide-react'
import contactHeroImg from '../assets/fboa-boat.jpg'
import sunsetCruiseImg from '../assets/sunset-cruise.jpg'
import teamBuildingImg from '../assets/team-building.jpg'
import tubeRidesImg from '../assets/tube-rides.jpg'

type Adventure = {
  id: string
  title: string
  duration: string
  price: string
  priceValue: number
  priceType: 'perPerson' | 'perBoat'
  image: string
  description: string
}

const adventures: Adventure[] = [
  {
    id: 'sunset',
    title: 'Sunset Cruise',
    duration: '90 min',
    price: 'R750 pp',
    priceValue: 750,
    priceType: 'perPerson',
    image: sunsetCruiseImg,
    description: 'Golden hour lap of False Bay with music, snacks, and a calm beach stop when conditions allow.',
  },
  {
    id: 'thrill',
    title: 'Adrenaline Ride',
    duration: '60 min',
    price: 'R650 pp',
    priceValue: 650,
    priceType: 'perPerson',
    image: tubeRidesImg,
    description: 'High-speed tubing and wake-style runs with swim breaks for small crews who like the rush.',
  },
  {
    id: 'charter',
    title: 'Private Charter',
    duration: '2-3 hrs',
    price: 'From R4 500/boat',
    priceValue: 4500,
    priceType: 'perBoat',
    image: teamBuildingImg,
    description: 'Host teams, clients, or family with your own route, refreshments, and a skipper who knows the bay.',
  },
]

const timeSlots = ['08:00', '09:30', '11:00', '13:00', '15:00', '17:30']
const extrasOptions = [
  { id: 'snacks', label: 'Snacks & drinks', price: 450, description: 'Cooler box with soft drinks & nibbles.' },
  { id: 'drone', label: 'Drone footage', price: 600, description: 'Edited highlight clips post-trip.' },
  { id: 'transfer', label: 'Return transfer', price: 750, description: 'Shuttle from Cape Town CBD (max 6).' },
]

const formatCurrency = (value: number) =>
  new Intl.NumberFormat('en-ZA', { style: 'currency', currency: 'ZAR', maximumFractionDigits: 0 }).format(value)

function Contact() {
  const [form, setForm] = useState({
    enquiryType: 'Booking',
    adventure: adventures[0].id,
    date: '',
    time: '',
    guests: 2,
    extras: [] as string[],
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState<string | null>(null)
  const [previewStatus, setPreviewStatus] = useState<string | null>(null)

  const selectedAdventure = adventures.find((adventure) => adventure.id === form.adventure)
  const selectedExtras = extrasOptions.filter((extra) => form.extras.includes(extra.id))

  const baseTotal =
    selectedAdventure?.priceType === 'perPerson'
      ? (selectedAdventure?.priceValue ?? 0) * form.guests
      : selectedAdventure?.priceValue ?? 0
  const extrasTotal = selectedExtras.reduce((sum, extra) => sum + extra.price, 0)
  const totalPrice = baseTotal + extrasTotal
  const payflexInstallment = totalPrice > 0 ? formatCurrency(Math.round(totalPrice / 4)) : formatCurrency(0)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!form.name || !form.email || !form.phone || !form.adventure || !form.date || !form.time || !form.guests) {
      setStatus('Please choose an adventure, date, time, guests, and add your contact details.')
      return
    }
    const subject = encodeURIComponent(`Enquiry: ${form.enquiryType} - ${selectedAdventure?.title ?? 'Adventure'}`)
    const body = encodeURIComponent(
      `Enquiry type: ${form.enquiryType}\nAdventure: ${selectedAdventure?.title ?? form.adventure}\nDate: ${form.date}\nTime: ${form.time}\nGuests: ${form.guests}\nExtras: ${
        selectedExtras.length ? selectedExtras.map((extra) => extra.label).join(', ') : 'None'
      }\nTotal (est): ${formatCurrency(totalPrice)}\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nMessage: ${form.message || 'N/A'}`,
    )
    window.location.href = `mailto:hello@falsebayocean.com?subject=${subject}&body=${body}`
    setStatus("Thanks! We've logged your request and will confirm within 24 hours.")
  }

  return (
    <section id="contact" className="section contact">
      <div>
        <div className="eyebrow">Contact Us</div>
        <h1 className="contact-title">Plan your False Bay adventure</h1>
        <p className="muted">
          Use the steps to pick your adventure, date, and time. Call, message, or email if you need help lining up logistics.
        </p>
        <div className="contact-highlight">
          <a href="tel:+27662040213" className="highlight-link">+27 (0)66 204 0213</a>
          <a href="mailto:hello@falsebayocean.com" className="highlight-link">hello@falsebayocean.com</a>
          <a href="https://wa.me/27662040213" className="highlight-link whatsapp" target="_blank" rel="noreferrer">
            WhatsApp us
          </a>
        </div>
        <div className="contact-hero">
          <img src={contactHeroImg} alt="Boat at Gordon's Bay harbour ready to launch" />
          <div className="contact-hero-copy">
            <p className="label">Meeting point</p>
            <p className="muted">Gordon&apos;s Bay Harbour, near Bikini Beach. Look for our team at the launch site.</p>
          </div>
        </div>
        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-chip">
              <Phone size={18} />
              <p className="label">Call</p>
            </div>
            <a href="tel:+27662040213">+27 (0)66 204 0213</a>
            <p className="muted">
              Call or WhatsApp for bookings and quick questions.
            </p>
          </div>
          <div className="contact-card">
            <div className="contact-chip">
              <Mail size={18} />
              <p className="label">Email</p>
            </div>
            <a href="mailto:hello@falsebayocean.com">hello@falsebayocean.com</a>
            <p className="muted">Share your dates, group size, and preferred adventure.</p>
          </div>
          <div className="contact-card">
            <div className="contact-chip">
              <MapPin size={18} />
              <p className="label">Visit</p>
            </div>
            <p className="muted">Gordon&apos;s Bay Harbour, Cape Town</p>
            <a
              className="adventure-action"
              href="https://maps.google.com/?q=Gordon%27s%20Bay%20Harbour"
              target="_blank"
              rel="noreferrer"
            >
              View on map
            </a>
          </div>
          <div className="contact-card">
            <div className="contact-chip">
              <Clock3 size={18} />
              <p className="label">Hours</p>
            </div>
            <p className="muted">Mon - Sun: 08:00 - 18:00</p>
            <p className="muted">Weather permitting; peak season Nov - Apr.</p>
          </div>
          <div className="contact-card">
            <div className="contact-chip">
              <Instagram size={18} />
              <p className="label">Social</p>
            </div>
            <p className="muted">
              Follow for bay conditions, new routes, and offers.
            </p>
            <a href="https://instagram.com/falsebayoceanadventures" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://facebook.com/falsebayoceanadventures" target="_blank" rel="noreferrer">
              Facebook
            </a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="stepper">
            <div className="step-card">
              <div className="step-header">
                <p className="step-chip">Step 1</p>
                <div>
                  <h3>Select your adventure</h3>
                  <p className="muted">Choose the experience you want to book for your crew.</p>
                </div>
              </div>
              <div className="adventure-grid">
                {adventures.map((adventure) => {
                  const isSelected = form.adventure === adventure.id
                  return (
                    <div key={adventure.id} className={`adventure-card ${isSelected ? 'selected' : ''}`}>
                      <img src={adventure.image} alt={adventure.title} />
                      <div className="adventure-body">
                        <div className="adventure-head">
                          <h4>{adventure.title}</h4>
                          <span className="duration-chip">{adventure.duration}</span>
                        </div>
                        <p className="muted">{adventure.description}</p>
                        <div className="adventure-meta">
                          <span className="price-tag">{adventure.price}</span>
                          <button
                            type="button"
                            className={`button ghost select-button ${isSelected ? 'active' : ''}`}
                            onClick={() => setForm({ ...form, adventure: adventure.id })}
                          >
                            {isSelected ? 'Selected' : 'Select'}
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="step-card">
              <div className="step-header">
                <p className="step-chip">Step 2</p>
                <div>
                  <h3>Date &amp; time</h3>
                  <p className="muted">Lock in when you want to head out.</p>
                </div>
              </div>
              <div className="nested-card">
                <div className="nested-head">
                  <h4>Pick your date</h4>
                  <p className="muted">We sail daily when conditions allow.</p>
                </div>
                <input
                  required
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                />
              </div>
              <div className="nested-card">
                <div className="nested-head">
                  <h4>Pick a time</h4>
                  <p className="muted">30-60 minute launch slots; we confirm with the skipper.</p>
                </div>
                <div className="time-slot-grid">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      className={`time-slot ${form.time === slot ? 'active' : ''}`}
                      onClick={() => setForm({ ...form, time: slot })}
                      aria-pressed={form.time === slot}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="step-card">
              <div className="step-header">
                <p className="step-chip">Step 3</p>
                <div>
                  <h3>Guests &amp; details</h3>
                  <p className="muted">Share your contact info and extras for your outing.</p>
                </div>
              </div>
              <div className="input-grid">
                <label>
                  <span>What do you want to enquire about?</span>
                  <select
                    value={form.enquiryType}
                    onChange={(e) => setForm({ ...form, enquiryType: e.target.value })}
                  >
                    <option>Booking</option>
                    <option>Questions</option>
                    <option>Safety info</option>
                    <option>Custom event</option>
                  </select>
                </label>
                <label>
                  <span>Name</span>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your first name"
                  />
                </label>
                <label>
                  <span>Number of guests</span>
                  <input
                    required
                    type="number"
                    min={1}
                    max={12}
                    value={form.guests}
                    onChange={(e) => setForm({ ...form, guests: Number(e.target.value) || 1 })}
                    placeholder="2"
                  />
                </label>
                <label className="full-width">
                  <span>Extras</span>
                  <div className="extras-grid">
                    {extrasOptions.map((extra) => {
                      const active = form.extras.includes(extra.id)
                      return (
                        <button
                          key={extra.id}
                          type="button"
                          className={`extra-chip ${active ? 'active' : ''}`}
                          onClick={() => {
                            const nextExtras = active
                              ? form.extras.filter((id) => id !== extra.id)
                              : [...form.extras, extra.id]
                            setForm({ ...form, extras: nextExtras })
                          }}
                          aria-pressed={active}
                        >
                          <div>
                            <strong>{extra.label}</strong>
                            <p className="muted">{extra.description}</p>
                          </div>
                          <span className="extra-price">{formatCurrency(extra.price)}</span>
                        </button>
                      )
                    })}
                  </div>
                </label>
                <label className="full-width">
                  <span>Email</span>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                  />
                </label>
                <label>
                  <span>Phone / WhatsApp</span>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+27 82 123 4567"
                  />
                </label>
              </div>
              <label className="full-width">
                <span>Special requests (optional)</span>
                <textarea
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={4}
                  placeholder="Tell us your group size, ideal route, and anything we should prep."
                />
              </label>
            </div>
          </div>

          <div className="form-footer">
            <button type="submit" className="button primary submit-button">
              <Send size={18} />
              Submit enquiry
            </button>
            <div className="form-status-group">
              <p className="form-status">We reply within 24 hours.</p>
              {status ? <p className="form-status">{status}</p> : null}
            </div>
          </div>
        </form>
        <div className="location-block">
          <h3>Before you book</h3>
          <ul className="contact-bullets">
            <li>Life jackets included</li>
            <li>Arrive 20 minutes early for briefing</li>
            <li>Weather can shift your start time slightly</li>
          </ul>
          <div className="map-head">
            <h4>Where to meet us</h4>
            <p className="muted">Gordon&apos;s Bay Harbour near Bikini Beach.</p>
          </div>
          <div
            className="map-embed"
            role="region"
            aria-label="Map to False Bay Ocean Adventures launch point at Gordon's Bay Harbour"
          >
            <iframe
              title="Map: Gordon's Bay Harbour"
              src="https://maps.google.com/maps?q=Gordon%27s%20Bay%20Harbour&t=&z=15&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
      <div className="contact-aside">
        <div className="summary-card booking-summary">
          <div className="summary-head">
            <h3>Summary</h3>
            <p className="muted">Read-only preview of your enquiry.</p>
          </div>
          <div className="summary-line">
            <span className="muted">Adventure</span>
            <span className="summary-value">{selectedAdventure?.title ?? 'Select an adventure'}</span>
          </div>
          <div className="summary-line">
            <span className="muted">Date &amp; time</span>
            <span className="summary-value">
              {form.date || 'Choose a date'} {form.time ? `at ${form.time}` : ''}
            </span>
          </div>
          <div className="summary-line">
            <span className="muted">Guests</span>
            <span className="summary-value">{form.guests || 0}</span>
          </div>
          <div className="summary-line">
            <span className="muted">Extras</span>
            <span className="summary-value">
              {selectedExtras.length ? selectedExtras.map((extra) => extra.label).join(', ') : 'None added'}
            </span>
          </div>
          <div className="summary-total">
            <p>Total (est.)</p>
            <p className="total-amount">{formatCurrency(totalPrice)}</p>
          </div>
          <div className="summary-line">
            <span className="muted">Estimated Payflex instalments</span>
            <span className="summary-value">x4 of {payflexInstallment}</span>
          </div>
          <button
            type="button"
            className="button ghost full summary-button"
            onClick={() => setPreviewStatus('Details saved. Payment link coming soon.')}
          >
            Confirm booking details (payment coming soon)
          </button>
          {previewStatus ? <p className="summary-status">{previewStatus}</p> : null}
        </div>

        <div className="contact-note">
          <div className="contact-chip">
            <Waves size={18} />
            <p className="label">Local insight</p>
          </div>
          <h4 className="contact-note-title">What you can expect</h4>
          <ul className="contact-bullets">
            <li>Sheltered bay with Helderberg mountain views</li>
            <li>Dolphins, seals, and penguins often alongside</li>
            <li>Fin whales drop in during peak season</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Contact
