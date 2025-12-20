import { type FormEvent, useState } from 'react'
import { Clock3, Instagram, Mail, MapPin, Phone, Send, Waves } from 'lucide-react'
import contactHeroImg from '../assets/fboa-boat.jpg'

function Contact() {
  const [form, setForm] = useState({
    enquiryType: 'Booking',
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState<string | null>(null)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!form.name || !form.email || !form.phone) {
      setStatus('Please fill in your name, email, and phone.')
      return
    }
    const subject = encodeURIComponent(`Enquiry: ${form.enquiryType}`)
    const body = encodeURIComponent(
      `Enquiry type: ${form.enquiryType}\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nMessage: ${form.message || 'N/A'}`,
    )
    window.location.href = `mailto:hello@falsebayocean.com?subject=${subject}&body=${body}`
    setStatus("Thanks! We'll get back to you within 24 hours.")
  }

  return (
    <section id="contact" className="section contact">
      <div>
        <div className="eyebrow">Contact Us</div>
        <h1 className="contact-title">Get in touch</h1>
        <p className="muted">
          Bold phone and email up top so you can reach us fast. Call, message, email, or visit us in Gordon&apos;s Bay to plan your day on the water.
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
          <label>
            <span>Message</span>
            <textarea
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={4}
              placeholder="Tell us your dates, group size, and any extras."
            />
          </label>
          <button type="submit" className="button primary submit-button">
            <Send size={18} />
            Submit enquiry
          </button>
          <p className="form-status">We reply within 24 hours.</p>
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
