import { CalendarClock, Phone, ShieldCheck, Users, Waves } from 'lucide-react'
import boatImg from '../assets/fboa-boat.jpg'

function BookNow() {
  return (
    <section id="book" className="section booking">
      <div>
        <div className="eyebrow">Ready to sail?</div>
        <h2>Adventure awaits in Gordon&apos;s Bay</h2>
        <p className="muted">
          Family fun, scenic cruises, jet ski thrills, and ocean safaris in one
          sheltered bay. Choose your ride and we&apos;ll lock in the perfect
          time.
        </p>
        <div className="steps">
          <div className="step">
            <span className="badge">1</span>
            <div>
              <p className="label">Pick your ride</p>
              <p className="muted">1 hour, 2 hours, or half-day leisure boat charters.</p>
            </div>
          </div>
          <div className="step">
            <span className="badge">2</span>
            <div>
              <p className="label">Add jet skis</p>
              <p className="muted">30 min to half-day jet ski hire for extra thrills.</p>
            </div>
          </div>
          <div className="step">
            <span className="badge">3</span>
            <div>
              <p className="label">Choose your vibe</p>
              <p className="muted">Ocean safaris, sunset or champagne cruises, or team builds.</p>
            </div>
          </div>
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
        </ul>
        <a className="button primary full" href="tel:+27662040213">
          <Phone size={18} /> Call to book: +27 (0)66 204 0213
        </a>
      </div>
    </section>
  )
}

export default BookNow
