import { type FormEvent, useState } from 'react'
import { Clock3, Instagram, Mail, MapPin, Phone, Send, Waves } from 'lucide-react'
import contactHeroImg from '../assets/fboa-boat.jpg'

type ContactForm = {
  enquiryType: string
  name: string
  email: string
  phone: string
  message: string
}

const inputBase =
  'w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200'

function Contact() {
  const [form, setForm] = useState<ContactForm>({
    enquiryType: 'General',
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState<string | null>(null)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!form.name || !form.email || !form.phone) {
      setStatus('Please add your name, email, and phone/WhatsApp.')
      return
    }
    const subject = encodeURIComponent(`Contact: ${form.enquiryType}`)
    const body = encodeURIComponent(
      `Topic: ${form.enquiryType}\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nMessage: ${form.message || 'N/A'}`,
    )
    window.location.href = `mailto:hello@falsebayocean.com?subject=${subject}&body=${body}`
    setStatus("Thanks! We've logged your message and will reply within 24 hours.")
  }

  return (
    <section id="contact" className="grid gap-8 lg:grid-cols-[2fr_1fr]">
      <div className="space-y-6">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Contact Us</p>
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Plan your False Bay adventure</h1>
          <p className="text-slate-600">
            Reach the crew for quick answers or custom plans. For full bookings, head to the Book Now page.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="tel:+27662040213" className="inline-flex items-center gap-2 rounded-xl border border-sky-200 bg-sky-50 px-3 py-2 text-sm font-semibold text-sky-800">
              +27 (0)66 204 0213
            </a>
            <a href="mailto:hello@falsebayocean.com" className="inline-flex items-center gap-2 rounded-xl border border-sky-200 bg-sky-50 px-3 py-2 text-sm font-semibold text-sky-800">
              hello@falsebayocean.com
            </a>
            <a
              href="https://wa.me/27662040213"
              className="inline-flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-800"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp us
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
          <img className="h-60 w-full object-cover" src={contactHeroImg} alt="Boat at Gordon's Bay harbour ready to launch" />
          <div className="bg-slate-900/80 p-4 text-slate-100">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-200">Meeting point</p>
            <p className="text-sm">Gordon&apos;s Bay Harbour, near Bikini Beach. Look for our team at the launch site.</p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-2 flex items-center gap-2 text-slate-800">
              <Phone size={18} />
              <p className="text-xs font-semibold uppercase tracking-wide">Call</p>
            </div>
            <a className="font-semibold text-slate-900" href="tel:+27662040213">
              +27 (0)66 204 0213
            </a>
            <p className="text-sm text-slate-600">Call or WhatsApp for bookings and quick questions.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-2 flex items-center gap-2 text-slate-800">
              <Mail size={18} />
              <p className="text-xs font-semibold uppercase tracking-wide">Email</p>
            </div>
            <a className="font-semibold text-slate-900" href="mailto:hello@falsebayocean.com">
              hello@falsebayocean.com
            </a>
            <p className="text-sm text-slate-600">Share your dates, group size, and preferred adventure.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-2 flex items-center gap-2 text-slate-800">
              <MapPin size={18} />
              <p className="text-xs font-semibold uppercase tracking-wide">Visit</p>
            </div>
            <p className="text-sm text-slate-600">Gordon&apos;s Bay Harbour, Cape Town</p>
            <a
              className="text-sm font-semibold text-sky-800"
              href="https://maps.google.com/?q=Gordon%27s%20Bay%20Harbour"
              target="_blank"
              rel="noreferrer"
            >
              View on map
            </a>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-2 flex items-center gap-2 text-slate-800">
              <Clock3 size={18} />
              <p className="text-xs font-semibold uppercase tracking-wide">Hours</p>
            </div>
            <p className="text-sm text-slate-600">Mon - Sun: 08:00 - 18:00</p>
            <p className="text-sm text-slate-600">Weather permitting; peak season Nov - Apr.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-2 flex items-center gap-2 text-slate-800">
              <Instagram size={18} />
              <p className="text-xs font-semibold uppercase tracking-wide">Social</p>
            </div>
            <p className="text-sm text-slate-600">Follow for bay conditions, new routes, and offers.</p>
            <div className="flex gap-3">
              <a className="text-sm font-semibold text-sky-800" href="https://instagram.com/falsebayoceanadventures" target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a className="text-sm font-semibold text-sky-800" href="https://facebook.com/falsebayoceanadventures" target="_blank" rel="noreferrer">
                Facebook
              </a>
            </div>
          </div>
        </div>

        <form className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-lg" onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-semibold text-slate-800">
              <span>What do you want to enquire about?</span>
              <select
                className={inputBase}
                value={form.enquiryType}
                onChange={(e) => setForm({ ...form, enquiryType: e.target.value })}
              >
                <option>General</option>
                <option>Booking</option>
                <option>Custom event</option>
                <option>Safety info</option>
              </select>
            </label>
            <label className="flex flex-col gap-2 text-sm font-semibold text-slate-800">
              <span>Name</span>
              <input
                required
                type="text"
                className={inputBase}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your first name"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-semibold text-slate-800">
              <span>Email</span>
              <input
                required
                type="email"
                className={inputBase}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-semibold text-slate-800">
              <span>Phone / WhatsApp</span>
              <input
                required
                type="tel"
                className={inputBase}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="+27 82 123 4567"
              />
            </label>
          </div>
          <label className="flex flex-col gap-2 text-sm font-semibold text-slate-800">
            <span>Message</span>
            <textarea
              required
              className={`${inputBase} min-h-[120px]`}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={4}
              placeholder="Tell us your dates, group size, and any extras."
            />
          </label>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-800 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:shadow-lg"
            >
              <Send size={18} />
              Submit enquiry
            </button>
            <div className="text-sm text-slate-500">
              <p>We reply within 24 hours.</p>
              {status ? <p className="text-sky-700">{status}</p> : null}
            </div>
          </div>
        </form>

        <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-lg">
          <h3 className="text-xl font-semibold text-slate-900">Before you book</h3>
          <ul className="grid gap-1 text-sm text-slate-700">
            <li>Life jackets included</li>
            <li>Arrive 20 minutes early for briefing</li>
            <li>Weather can shift your start time slightly</li>
          </ul>
          <div>
            <h4 className="text-base font-semibold text-slate-900">Where to meet us</h4>
            <p className="text-sm text-slate-600">Gordon&apos;s Bay Harbour near Bikini Beach.</p>
          </div>
          <div
            className="overflow-hidden rounded-xl border border-slate-200 shadow-sm"
            role="region"
            aria-label="Map to False Bay Ocean Adventures launch point at Gordon's Bay Harbour"
          >
            <iframe
              title="Map: Gordon's Bay Harbour"
              src="https://maps.google.com/maps?q=Gordon%27s%20Bay%20Harbour&t=&z=15&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="h-64 w-full border-0"
            />
          </div>
        </div>
      </div>

      <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-lg lg:sticky lg:top-28">
        <div className="flex items-center gap-2 text-slate-800">
          <Waves size={18} />
          <p className="text-xs font-semibold uppercase tracking-wide">Local insight</p>
        </div>
        <h4 className="text-lg font-semibold text-slate-900">What you can expect</h4>
        <ul className="grid gap-1 text-sm text-slate-700">
          <li>Sheltered bay with Helderberg mountain views</li>
          <li>Dolphins, seals, and penguins often alongside</li>
          <li>Fin whales drop in during peak season</li>
        </ul>
        <a
          className="inline-flex w-full items-center justify-center rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:bg-slate-200"
          href="/book"
        >
          Go to Book Now
        </a>
      </div>
    </section>
  )
}

export default Contact
