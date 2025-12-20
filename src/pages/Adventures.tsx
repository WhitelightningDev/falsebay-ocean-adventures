import { Anchor, Compass, ShipWheel, Waves } from 'lucide-react'
import { Link } from 'react-router-dom'
import adventuresHeroImg from '../assets/fboa-hero.jpg'
import adventureBoat from '../assets/fboa-boat.jpg'
import adventureJetSki from '../assets/fboa-activity.jpg'
import adventureSunset from '../assets/sunset-cruise.jpg'
import adventureHarbour from '../assets/falsebayboatimage.jpg'

const adventures = [
  {
    title: 'Jet Ski Adventure',
    summary: 'Solo or tandem jet ski rides with guides nearby and all safety gear included.',
    duration: '30-90 mins',
    price: 'From R950 per rider',
    tagline: 'Skim the bay and spot dolphins up close',
    image: adventureJetSki,
    icon: <Waves size={22} />,
    cta: { label: 'Book your jet ski ride', to: '/book' },
  },
  {
    title: 'Private Boat Charters',
    summary: 'Skippered cruises for couples, friends, or teams across sunrise, mid-day, or sunset.',
    duration: '1-4 hours',
    price: 'From R3,200 per charter',
    tagline: 'Choose your route: coves, coastline, or sundowners',
    image: adventureBoat,
    icon: <ShipWheel size={22} />,
    cta: { label: 'Reserve a boat charter', to: '/book' },
  },
  {
    title: 'Marine Life Trips',
    summary: 'False Bay wildlife routes with chances to see dolphins, seals, penguins, and whales.',
    duration: '1.5-3 hours',
    price: 'From R1,450 pp',
    tagline: 'Wildlife spotting with local skippers',
    image: adventureSunset,
    icon: <Compass size={22} />,
    cta: { label: 'Plan a marine life trip', to: '/contact' },
  },
  {
    title: 'Harbour & Coastline Cruises',
    summary: "Easy-going harbour laps and Helderberg coastline views with snacks on board.",
    duration: '1-2 hours',
    price: 'From R2,200 per cruise',
    tagline: "Relaxed views of Gordon's Bay skyline",
    image: adventureHarbour,
    icon: <Anchor size={22} />,
    cta: { label: 'View cruise availability', to: '/book' },
  },
]

function Adventures() {
  return (
    <>
      <section className="adventures-hero">
        <div className="adventures-hero__image">
          <img src={adventuresHeroImg} alt="Guests on a boat enjoying False Bay" />
        </div>
        <div className="adventures-hero__copy">
          <div className="eyebrow">Adventures</div>
          <h1>Choose your ocean adventure in False Bay</h1>
          <p className="lede">
            Jet skis, skippered boat tours, and wildlife safaris from Gordon&apos;s Bay. Pick your route,
            pick your time, and we will get you on the water.
          </p>
          <div className="section-cta">
            <Link className="button primary" to="/book">
              Book your adventure
            </Link>
            <Link className="button ghost" to="/contact">
              Talk to us
            </Link>
          </div>
        </div>
      </section>

      <section className="section adventures">
        <div className="eyebrow">Adventures</div>
        <h2>Choose your False Bay adventure</h2>
        <p className="lede muted">We&apos;re here to help you plan your adventure!</p>
        <p className="muted">
          Jet skis for adrenaline, skippered charters for groups, and scenic marine routes for wildlife
          lovers - all launching from Gordon&apos;s Bay.
        </p>
        <div className="adventure-grid">
          {adventures.map(({ title, summary, duration, price, tagline, image, cta }) => (
            <article className="adventure-card adventure-card--featured" key={title}>
              <div className="adventure-photo">
                <img src={image} alt={title} />
                <span className="adventure-tagline">{tagline}</span>
              </div>
              <div className="adventure-body">
                <h3>{title}</h3>
                <p className="muted">{summary}</p>
                <div className="adventure-meta">
                  <span>Duration: {duration}</span>
                  <span>{price}</span>
                </div>
                <Link className="adventure-cta" to={cta.to}>
                  {cta.label}
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="section-cta">
          <Link className="button primary" to="/book">
            Book your adventure
          </Link>
          <Link className="button ghost" to="/contact">
            Talk to us
          </Link>
        </div>
      </section>
    </>
  )
}

export default Adventures
