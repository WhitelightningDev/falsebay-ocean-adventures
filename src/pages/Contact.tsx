import { type FormEvent, useState } from 'react'
import { Instagram, Mail, MapPin, Phone, Send, Waves } from 'lucide-react'

function Contact() {
  const [form, setForm] = useState({
    service: 'Jet ski hire',
    name: '',
    surname: '',
    email: '',
    notes: '',
  })
  const [status, setStatus] = useState<string | null>(null)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!form.name || !form.surname || !form.email) {
      setStatus('Please fill in your name, surname, and email.')
      return
    }
    const subject = encodeURIComponent(`Enquiry: ${form.service}`)
    const body = encodeURIComponent(
      `Service: ${form.service}\nName: ${form.name} ${form.surname}\nEmail: ${form.email}\nNotes: ${form.notes || 'N/A'}`,
    )
    window.location.href = `mailto:hello@falsebayocean.com?subject=${subject}&body=${body}`
    setStatus('Thanks! We opened your email app with the enquiry details.')
  }

  return (
    <section id="contact" className="section contact">
      <div>
        <div className="eyebrow">Contact</div>
        <h2>Beyond the shore, adventure awaits</h2>
        <p className="muted">
          Family fun, scenic cruises and ocean safaris, plus jet ski thrills for the brave at heart.
          Call, message, email, or visit us in Gordon&apos;s Bay to plan your day on the water.
        </p>
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
        <div className="location-block">
          <h3>Where to meet us in False Bay</h3>
          <p className="muted">
            We launch from Gordon&apos;s Bay Harbour, close to Bikini Beach. Arrive a few minutes early for
            briefing and gear.
          </p>
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
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-grid">
            <label>
              <span>What do you want to enquire about?</span>
              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
              >
                <option>Jet ski hire</option>
                <option>Boat rides</option>
                <option>Ocean safaris</option>
                <option>Team building</option>
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
              <span>Surname</span>
              <input
                required
                type="text"
                value={form.surname}
                onChange={(e) => setForm({ ...form, surname: e.target.value })}
                placeholder="Your surname"
              />
            </label>
            <label>
              <span>Email</span>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
              />
            </label>
          </div>
          <label>
            <span>Additional notes</span>
            <textarea
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              rows={4}
              placeholder="Tell us your dates, group size, and any extras."
            />
          </label>
          <button type="submit" className="button primary submit-button">
            <Send size={18} />
            Submit enquiry
          </button>
          {status ? <p className="form-status">{status}</p> : null}
        </form>
      </div>
      <div className="contact-note">
        <div className="contact-chip">
          <Waves size={18} />
          <p className="label">Local insight</p>
        </div>
        <p>
          Launch from the sheltered side of False Bay with sweeping views,
          dolphins, seals, penguins, and fin whales often in sight.
        </p>
      </div>
    </section>
  )
}

export default Contact
