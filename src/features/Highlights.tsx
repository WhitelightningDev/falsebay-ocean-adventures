import { Anchor, BadgeCheck, Waves } from 'lucide-react'
import boatImg from '../assets/falsebayboatimage.jpg'

const highlights = [
  {
    title: 'Leisure boat rides',
    description: '1 hour, 2 hour, and half-day charters available.',
    Icon: Waves,
  },
  {
    title: 'Jet ski hire',
    description: '30 min, 1 hour, 2 hours, or half-day sessions.',
    Icon: Anchor,
  },
  {
    title: 'Ocean safaris',
    description: '2 hour, half- and full-day safaris with lunch and drinks included.',
    Icon: BadgeCheck,
  },
  {
    title: 'Team building',
    description: 'Year-end packages with food, drinks, jet skis, and boat time.',
    Icon: BadgeCheck,
  },
  {
    title: 'Sunset cruises',
    description: '1 hour sunset or champagne cruises on False Bay.',
    Icon: Anchor,
  },
  {
    title: 'Learn to ski & tube rides',
    description: 'Extreme fun and adventure on the water for all ages.',
    Icon: Waves,
  },
]

function Highlights() {
  return (
    <section className="section highlights">
      <div className="eyebrow">Activities</div>
      <h2>Adventure awaits in Gordon&apos;s Bay</h2>
      <div className="highlight-layout">
        <div className="highlight-grid">
          {highlights.map(({ title, description, Icon }) => (
            <article key={title} className="highlight-card">
              <span className="pill muted">
                <Icon size={18} />
              </span>
              <div>
                <p className="label">{title}</p>
                <p className="muted">{description}</p>
              </div>
            </article>
          ))}
        </div>
        <figure className="highlight-photo">
          <img src={boatImg} alt="Charter boat moored in False Bay" />
          <figcaption>Meet the crew and climb aboard at Gordon&apos;s Bay harbour.</figcaption>
        </figure>
      </div>
    </section>
  )
}

export default Highlights
