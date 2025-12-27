import { Anchor, Compass, ShipWheel, Waves } from 'lucide-react'
import { Link } from 'react-router-dom'
import adventuresHeroImg from '../assets/fboa-hero.jpg'
import adventureBoat from '../assets/fboa-boat.jpg'
import adventureJetSki from '../assets/fboa-activity.jpg'
import adventureSunset from '../assets/sunset-cruise.jpg'
import adventureHarbour from '../assets/falsebayboatimage.jpg'

const sectionBase = 'w-full px-4 sm:px-6 lg:px-10'
const cardBase = 'overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md'

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
    price: 'From R10,200 per charter',
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
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img className="h-full w-full object-cover" src={adventuresHeroImg} alt="Guests on a boat enjoying False Bay" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/70 to-slate-900/30" />
        </div>
        <div className={`${sectionBase} relative py-16 text-white`}>
          <div className="max-w-2xl space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-200">Adventures</p>
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl">Choose your ocean adventure in False Bay</h1>
            <p className="text-lg text-slate-100/90">
              Jet skis, skippered boat tours, and wildlife safaris from Gordon&apos;s Bay. Pick your route,
              pick your time, and we will get you on the water.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link className="inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-md" to="/book">
                Book your adventure
              </Link>
              <Link className="inline-flex items-center rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10" to="/contact">
                Talk to us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className={sectionBase}>
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Adventures</p>
            <h2 className="text-2xl font-bold text-slate-900">Choose your False Bay adventure</h2>
            <p className="text-slate-600">
              Jet skis for adrenaline, skippered charters for groups, and scenic marine routes for wildlife lovers - all launching from Gordon&apos;s Bay.
            </p>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {adventures.map(({ title, summary, duration, price, tagline, image, cta, icon }) => (
              <article className={cardBase} key={title}>
                <div className="relative">
                  <img className="h-64 w-full object-cover" src={image} alt={title} />
                  <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-800 shadow">
                    {tagline}
                  </span>
                </div>
                <div className="space-y-3 p-5">
                  <div className="flex items-center gap-2 text-sky-700">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-50 text-sky-700">{icon}</div>
                    <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
                  </div>
                  <p className="text-slate-600">{summary}</p>
                  <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-800">
                    <span>Duration: {duration}</span>
                    <span className="text-sky-800">{price}</span>
                  </div>
                  <Link className="inline-flex items-center text-sm font-semibold text-sky-800 hover:underline" to={cta.to}>
                    {cta.label}
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="inline-flex items-center rounded-full bg-gradient-to-r from-sky-800 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-md" to="/book">
              Book your adventure
            </Link>
            <Link className="inline-flex items-center rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-100" to="/contact">
              Talk to us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Adventures
