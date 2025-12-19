import { Link } from 'react-router-dom'

const faqs = [
  {
    question: 'Do I need prior experience for jet ski rides?',
    answer: 'No. We brief you on controls, safety, and local rules before every session.',
  },
  {
    question: 'What should I bring?',
    answer: 'Comfortable clothing, sunscreen, a towel, and a hat. We provide life jackets and required safety gear.',
  },
  {
    question: 'Can beginners join boat charters?',
    answer: 'Absolutely. Charters are skippered, so you can relax while we handle the boat.',
  },
  {
    question: 'What are your operating hours?',
    answer: 'Daily, weather permitting. Popular slots are sunrise, mid-morning, and sunset.',
  },
  {
    question: 'Where do we launch from?',
    answer: "Gordon's Bay on the False Bay coastline, near Harbour Island and Bikini Beach.",
  },
  {
    question: 'Do you cancel for bad weather?',
    answer: 'Yes. Safety first. We will reschedule if the bay conditions are unsafe.',
  },
  {
    question: 'Do you get a refund for bad weather?',
    answer: 'If we cancel due to weather, you can reschedule, we do not refunfd due to bad weather on your booked day.',
  },
  {
    question: 'What wildlife might we see?',
    answer: 'Dolphins, seals, penguins, sunfish, and seasonal whales depending on the route and time of year.',
  },
  {
    question: 'How long are the rides?',
    answer: 'Jet ski sessions start at 30 minutes. Charters range from 1 hour to half-day.',
  },
  {
    question: 'Is there an age limit?',
    answer: 'Riders under 18 need guardian consent. Very young kids should be on calmer charter routes.',
  },
  {
    question: 'Do you provide photos or videos?',
    answer: 'We can help capture moments on your device. Ask the crew at check-in.',
  },
  {
    question: 'Can we customise a route?',
    answer: 'Yes. Tell us your vibe - wildlife spotting, secluded coves, or skyline views - and we will tailor it.',
  },
  {
    question: 'How do I book or change a booking?',
    answer: 'Use the Book Now page or contact us. Changes depend on availability and weather.',
  },
]

function FAQ() {
  return (
    <section className="section faq">
      <div className="eyebrow">FAQs</div>
      <h2>Everything you need to know before we launch</h2>
      <p className="muted">
        Quick answers for riders and charter guests. If you do not see your question here, contact us and we will help.
      </p>
      <div className="faq-grid">
        {faqs.map(({ question, answer }) => (
          <article className="faq-card" key={question}>
            <h3>{question}</h3>
            <p className="muted">{answer}</p>
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

export default FAQ
