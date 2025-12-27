import { Link } from 'react-router-dom'

const faqs = [
  { question: 'Do I need prior experience for jet ski rides?', answer: 'No. We brief you on controls, safety, and local rules before every session.' },
  { question: 'What should I bring?', answer: 'Comfortable clothing, sunscreen, a towel, and a hat. We provide life jackets and required safety gear.' },
  { question: 'Can beginners join boat charters?', answer: 'Absolutely. Charters are skippered, so you can relax while we handle the boat.' },
  { question: 'What are your operating hours?', answer: 'Daily, weather permitting. Popular slots are sunrise, mid-morning, and sunset.' },
  { question: 'Where do we launch from?', answer: "Gordon's Bay on the False Bay coastline, near Harbour Island and Bikini Beach." },
  { question: 'Do you cancel for bad weather?', answer: 'Yes. Safety first. We will reschedule if the bay conditions are unsafe.' },
  { question: 'Do you get a refund for bad weather?', answer: 'If we cancel due to weather, you can reschedule; we do not refund for weather on the day.' },
  { question: 'What wildlife might we see?', answer: 'Dolphins, seals, penguins, sunfish, and seasonal whales depending on the route and time of year.' },
  { question: 'How long are the rides?', answer: 'Jet ski sessions start at 30 minutes. Charters range from 1 hour to half-day.' },
  { question: 'Is there an age limit?', answer: 'Riders under 18 need guardian consent. Very young kids should be on calmer charter routes.' },
  { question: 'Do you provide photos or videos?', answer: 'We can help capture moments on your device. Ask the crew at check-in.' },
  { question: 'Can we customise a route?', answer: 'Yes. Tell us your vibe and we will tailor it.' },
  { question: 'How do I book or change a booking?', answer: 'Use the Book Now page or contact us. Changes depend on availability and weather.' },
]

const sectionBase = 'w-full px-4 sm:px-6 lg:px-10'

function FAQ() {
  return (
    <section className="py-14">
      <div className={sectionBase}>
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">FAQs</p>
          <h2 className="text-2xl font-bold text-slate-900">Everything you need to know before we launch</h2>
          <p className="text-slate-600">
            Quick answers for riders and charter guests. If you don&apos;t see your question here, contact us and we will help.
          </p>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {faqs.map(({ question, answer }) => (
            <article key={question} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{question}</h3>
              <p className="text-sm text-slate-600">{answer}</p>
            </article>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link className="inline-flex items-center rounded-full bg-gradient-to-r from-sky-800 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-md" to="/book">
            Book Now
          </Link>
          <Link className="inline-flex items-center rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-100" to="/contact">
            Talk to us
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FAQ
