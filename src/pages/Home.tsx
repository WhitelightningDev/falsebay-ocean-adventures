import { Clock3, Compass, MapPin, ShieldCheck, ShipWheel, Star, Sunset, Waves } from 'lucide-react'
import { Link } from 'react-router-dom'
import aboutBayImg from '../assets/falsebayboatimage.jpg'

const sectionBase = 'w-full px-4 sm:px-6 lg:px-10'
const cardBase = 'rounded-2xl border border-slate-200 bg-white p-5 shadow-md'
const pill = 'inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-sm font-semibold'

function Home() {
  const adventures = [
    { title: 'Jet Ski Rides', description: 'Solo or tandem sessions with gear and safety brief ready.', cta: 'Book a ride', to: '/book', icon: <Waves size={22} /> },
    { title: 'Boat Charters', description: 'Skippered cruises for couples, friends, or teams.', cta: 'Book a charter', to: '/book', icon: <ShipWheel size={22} /> },
    { title: 'Marine Life Trips', description: "Routes for dolphins, penguins, seals, and seasonal whales.", cta: 'Learn more', to: '/contact', icon: <Compass size={22} /> },
    { title: 'Team Days & Events', description: "Custom group packages with rides, charters, and hosting.", cta: 'Plan my day', to: '/contact', icon: <ShipWheel size={22} /> },
  ]

  const whyPoints = [
    { title: 'Local skippers', description: 'False Bay locals who know tides, wind lines, and hidden spots.', icon: <MapPin size={22} /> },
    { title: 'Safety first', description: 'Briefings, certified gear, and attentive crew.', icon: <ShieldCheck size={22} /> },
    { title: 'Unforgettable views', description: 'Mountains, marine life, and sunrise-to-sunset routes.', icon: <Sunset size={22} /> },
    { title: 'Flexible times', description: 'Glassy sunrise or golden-hour cruises that suit your crew.', icon: <Clock3 size={22} /> },
  ]

  const steps = [
    { title: 'Choose your adventure', description: 'Pick a jet ski ride, boat charter, or marine life trip.', icon: <Compass size={22} /> },
    { title: 'Pick a date and time', description: 'Select sunrise glass, mid-day, or sunset slots.', icon: <Clock3 size={22} /> },
    { title: 'Arrive, brief, and ride', description: 'We handle safety; you hop on and hit the water.', icon: <ShieldCheck size={22} /> },
  ]

  const faqs = [
    { question: 'Do I need previous experience?', answer: 'No, we brief you on safety, gear, and local rules before every ride or charter.' },
    { question: 'What should I bring?', answer: 'Comfortable clothes, sunscreen, and a towel. We supply life jackets and required gear.' },
    { question: 'Can we choose our time?', answer: 'Yes - pick sunrise glass, mid-day, or sunset slots when you book.' },
  ]

  return (
    <>
      <section id="home" className="relative overflow-hidden bg-gradient-to-br from-sky-900 via-slate-900 to-slate-800 text-white">
        <div className={`${sectionBase} py-16 lg:py-20`}>
          <div className="max-w-2xl space-y-6">
            <p className="text-xs uppercase tracking-[0.3em] text-sky-100">False Bay Ocean Adventures</p>
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
              Ocean Adventures in False Bay - Jet Skis, Charters &amp; More
            </h1>
            <p className="text-lg text-sky-100/90">
              Jet ski rides, private boat charters, and guided ocean experiences from Gordon&apos;s Bay. Chase glassy
              sunrises, golden-hour cruises, or pure adrenaline on the bay.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className={pill}>
                <Waves size={18} />
                Jet ski rides
              </span>
              <span className={pill}>
                <ShipWheel size={18} />
                Skippered boat charters
              </span>
              <span className={pill}>
                <Compass size={18} />
                Ocean wildlife routes
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-md transition hover:shadow-lg" to="/book">
                Book Now
              </Link>
              <Link className="inline-flex items-center justify-center rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10" to="/adventures">
                View Adventures
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/20 bg-white/10 p-4 shadow-lg">
                <div className="flex items-center gap-2 text-white/90">
                  <Waves size={18} />
                  <p className="text-xs font-semibold uppercase tracking-wide">Jet ski thrills</p>
                </div>
                <p className="text-sm text-white/80">Solo or tandem rides with safety brief and gear ready.</p>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/10 p-4 shadow-lg">
                <div className="flex items-center gap-2 text-white/90">
                  <ShipWheel size={18} />
                  <p className="text-xs font-semibold uppercase tracking-wide">Private charters</p>
                </div>
                <p className="text-sm text-white/80">1- to 4-hour cruises for families, friends, or teams.</p>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/10 p-4 shadow-lg">
                <div className="flex items-center gap-2 text-white/90">
                  <Compass size={18} />
                  <p className="text-xs font-semibold uppercase tracking-wide">Ocean experiences</p>
                </div>
                <p className="text-sm text-white/80">Wildlife spotting, swim stops, and False Bay stories.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="adventures" className="py-14">
        <div className={sectionBase}>
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Our Adventures</p>
            <h2 className="text-2xl font-bold text-slate-900">Pick your False Bay adventure</h2>
            <p className="text-slate-600">
              From jet ski sprints to laid-back charters and wildlife routes, we match the thrill to your crew.
            </p>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {adventures.map(({ title, description, cta, to, icon }) => (
              <article className={cardBase} key={title}>
                <div className="mb-2 flex items-center gap-2 text-sky-700">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-50 text-sky-700">{icon}</div>
                  <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                </div>
                <p className="text-sm text-slate-600">{description}</p>
                <Link className="mt-4 inline-flex items-center text-sm font-semibold text-sky-800 hover:underline" to={to}>
                  {cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="bg-white py-14">
        <div className={sectionBase}>
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Why Choose Us</p>
            <h2 className="text-2xl font-bold text-slate-900">Why ride with False Bay Ocean Adventures?</h2>
            <p className="text-slate-600">
              Local skippers, dialed-in safety, and flexible times - so you can enjoy False Bay at its best.
            </p>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {whyPoints.map(({ title, description, icon }) => (
              <article key={title} className={cardBase}>
                <div className="mb-2 flex items-center gap-2 text-sky-700">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-50 text-sky-700">{icon}</div>
                  <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                </div>
                <p className="text-sm text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how" className="py-14">
        <div className={sectionBase}>
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">How it works</p>
            <h2 className="text-2xl font-bold text-slate-900">Get on the water in three easy steps</h2>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {steps.map(({ title, description, icon }, index) => (
              <article className={cardBase} key={title}>
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-50 text-sky-700">{icon}</div>
                  <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">Step {index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                <p className="text-sm text-slate-600">{description}</p>
              </article>
            ))}
          </div>
          <div className="mt-6">
            <Link className="inline-flex items-center rounded-full bg-gradient-to-r from-sky-800 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-md" to="/book">
              Book Now
            </Link>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-white py-14">
        <div className={sectionBase}>
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">FAQs</p>
            <h2 className="text-2xl font-bold text-slate-900">Common questions</h2>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {faqs.map(({ question, answer }) => (
              <article key={question} className={cardBase}>
                <div className="mb-2 flex items-center gap-2 text-sky-700">
                  <Star size={18} />
                  <h3 className="text-lg font-semibold text-slate-900">{question}</h3>
                </div>
                <p className="text-sm text-slate-600">{answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-14">
        <div className={`${sectionBase} grid gap-6 md:grid-cols-[1.1fr_1fr]`}>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-md">
            <img className="h-72 w-full rounded-xl object-cover" src={aboutBayImg} alt="Boat preparing to launch in False Bay" />
          </div>
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">About False Bay</p>
            <h2 className="text-2xl font-bold text-slate-900">Launch with locals who know the bay</h2>
            <p className="text-slate-700">
              We launch from Gordon&apos;s Bay Harbour, False Bay - a sheltered spot with quick access to the best
              rides. Expect glassy sunrises, golden sunsets, and wildlife-rich routes guided by skippers who know every
              corner of the bay.
            </p>
            <p className="text-slate-600">
              Weather and sea conditions shift daily - we advise on the best time slots for the safest, most scenic
              experience.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
