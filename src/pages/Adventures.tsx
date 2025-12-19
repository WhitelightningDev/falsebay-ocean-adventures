import { Anchor, Compass, ShipWheel, Waves } from 'lucide-react'
import { Link } from 'react-router-dom'

const adventures = [
  {
    title: 'Jet Ski Rides',
    description: 'Solo or tandem rides with a full safety brief, gear included, and guides nearby.',
    duration: '30-90 mins',
    icon: <Waves size={22} />,
    cta: { label: 'Book a ride', to: '/book' },
  },
  {
    title: 'Boat Charters',
    description: 'Skippered cruises for couples, friends, or teams - sunrise, mid-day, or sunset.',
    duration: '1-4 hours',
    icon: <ShipWheel size={22} />,
    cta: { label: 'Book a charter', to: '/book' },
  },
  {
    title: 'Marine Life Trips',
    description: 'False Bay routes to spot dolphins, seals, penguins, and seasonal whales.',
    duration: '1.5-3 hours',
    icon: <Compass size={22} />,
    cta: { label: 'Plan my trip', to: '/contact' },
  },
  {
    title: 'Harbour & Coastline Cruises',
    description: "Relaxed harbour laps and coastal views around Gordon's Bay and the Helderberg peaks.",
    duration: '1-2 hours',
    icon: <Anchor size={22} />,
    cta: { label: 'View availability', to: '/book' },
  },
]

function Adventures() {
  return (
    <section className="section adventures">
      <div className="eyebrow">Adventures</div>
      <h2>Choose your False Bay adventure</h2>
      <p className="lede muted">We&apos;re here to help you plan your adventure!</p>
      <p className="muted">
        Jet skis for adrenaline, skippered charters for groups, and scenic marine routes for wildlife
        lovers - all launching from Gordon&apos;s Bay.
      </p>
      <div className="adventure-grid">
        {adventures.map(({ title, description, duration, icon, cta }) => (
          <article className="adventure-card" key={title}>
            <div className="adventure-icon" aria-hidden="true">
              {icon}
            </div>
            <h3>{title}</h3>
            <p className="muted">{description}</p>
            <p className="label">Typical duration: {duration}</p>
            <Link className="adventure-action" to={cta.to}>
              {cta.label}
            </Link>
          </article>
        ))}
      </div>
      <div className="section-cta">
        <Link className="button primary" to="/book">
          Book Now
        </Link>
        <Link className="button ghost" to="/contact">
          Talk to us
        </Link>
      </div>
    </section>
  )
}

export default Adventures
