import { Anchor, BadgeCheck, Waves } from 'lucide-react'
import boatImg from '../assets/falsebayboatimage.jpg'

const highlights = [
  { title: 'Leisure boat rides', description: '1 hour, 2 hour, and half-day charters available.', Icon: Waves },
  { title: 'Jet ski hire', description: '30 min, 1 hour, 2 hours, or half-day sessions.', Icon: Anchor },
  { title: 'Ocean safaris', description: '2 hour, half- and full-day safaris with lunch and drinks included.', Icon: BadgeCheck },
  { title: 'Team building', description: 'Year-end packages with food, drinks, jet skis, and boat time.', Icon: BadgeCheck },
  { title: 'Sunset cruises', description: '1 hour sunset or champagne cruises on False Bay.', Icon: Anchor },
  { title: 'Learn to ski & tube rides', description: 'Extreme fun and adventure on the water for all ages.', Icon: Waves },
]

const sectionBase = 'w-full px-4 sm:px-6 lg:px-10'

function Highlights() {
  return (
    <section className="bg-white py-14">
      <div className={`${sectionBase} grid gap-8 lg:grid-cols-[1.1fr_1fr]`}>
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Activities</p>
          <h2 className="text-2xl font-bold text-slate-900">Adventure awaits in Gordon&apos;s Bay</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {highlights.map(({ title, description, Icon }) => (
              <article key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <span className="mb-2 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm font-semibold text-slate-800 shadow-sm">
                  <Icon size={18} />
                  {title}
                </span>
                <p className="text-sm text-slate-700">{description}</p>
              </article>
            ))}
          </div>
        </div>
        <figure className="rounded-2xl border border-slate-200 bg-white p-4 shadow-md">
          <img className="h-72 w-full rounded-xl object-cover" src={boatImg} alt="Charter boat moored in False Bay" />
          <figcaption className="mt-3 text-sm text-slate-600">Meet the crew and climb aboard at Gordon&apos;s Bay harbour.</figcaption>
        </figure>
      </div>
    </section>
  )
}

export default Highlights
