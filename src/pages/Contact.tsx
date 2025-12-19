import { type FormEvent, useState } from 'react'
import { MapPin, Phone, Send, Waves } from 'lucide-react'

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
          Family fun, scenic cruises and ocean safaris, plus jet ski thrills for
          the brave at heart. Call or visit us in Gordon&apos;s Bay to plan your
          day on the water.
        </p>
        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-chip">
              <Phone size={18} />
              <p className="label">Call</p>
            </div>
            <a href="tel:+27662040213">+27 (0)66 204 0213</a>
          </div>
          <div className="contact-card">
            <div className="contact-chip">
              <MapPin size={18} />
              <p className="label">Visit</p>
            </div>
            <p className="muted">Harbour Island, Gordon&apos;s Bay, Cape Town</p>
          </div>
          <div className="contact-card">
            <div className="contact-chip">
              <Waves size={18} />
              <p className="label">What we do</p>
            </div>
            <p className="muted">Boat charters, jet ski hire, and ocean safaris on False Bay.</p>
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
