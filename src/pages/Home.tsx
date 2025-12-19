import { Clock3, Compass, MapPin, ShieldCheck, ShipWheel, Star, Sunset, Waves } from 'lucide-react'
import { Link } from 'react-router-dom'
import aboutBayImg from '../assets/falsebayboatimage.jpg'

function Home() {
  const adventures = [
    {
      title: 'Jet Ski Rides',
      description: 'Thrilling solo or tandem jet ski sessions with safety brief and gear ready.',
      cta: 'Book a ride',
      to: '/book',
      icon: <Waves size={22} />,
    },
    {
      title: 'Boat Charters',
      description: 'Skippered cruises for couples, friends, or teams - sunrise, mid-day, or sunset.',
      cta: 'Book a charter',
      to: '/book',
      icon: <ShipWheel size={22} />,
    },
    {
      title: 'Marine Life Trips',
      description: "Explore False Bay's wildlife routes for dolphins, penguins, seals, and seasonal whales.",
      cta: 'Learn more',
      to: '/contact',
      icon: <Compass size={22} />,
    },
    {
      title: 'Team Days & Events',
      description: "Custom group packages with rides, charters, and on-board hosting from Gordon's Bay.",
      cta: 'Plan my day',
      to: '/contact',
      icon: <ShipWheel size={22} />,
    },
  ]

  const whyPoints = [
    {
      title: 'Local skippers',
      description: 'False Bay locals who know the tides, wind lines, and secret scenic spots.',
      icon: <MapPin size={22} />,
    },
    {
      title: 'Safety first',
      description: 'Briefings, certified gear, and attentive crew so you can focus on the fun.',
      icon: <ShieldCheck size={22} />,
    },
    {
      title: 'Unforgettable views',
      description: 'Mountains, marine life, and sunrise-to-sunset routes that change with the bay.',
      icon: <Sunset size={22} />,
    },
    {
      title: 'Flexible times',
      description: 'Early glassy sessions or late-gold cruises - pick the slot that suits your crew.',
      icon: <Clock3 size={22} />,
    },
  ]

  const steps = [
    {
      title: 'Choose your adventure',
      description: 'Pick a jet ski ride, boat charter, or marine life trip that suits your crew.',
      icon: <Compass size={22} />,
    },
    {
      title: 'Pick a date and time',
      description: 'Select your slot - glassy sunrise, golden hour, or a time that fits your day.',
      icon: <Clock3 size={22} />,
    },
    {
      title: 'Arrive, brief, and ride',
      description: 'We handle safety checks and gear; you hop on board and hit the water.',
      icon: <ShieldCheck size={22} />,
    },
  ]

  const testimonials = [
    {
      name: 'Nadia P.',
      text: 'The jet ski ride was incredible and the team made us feel safe from start to finish.',
      rating: 5,
    },
    {
      name: 'Grant L.',
      text: 'Booked a sunset charter for my family - stunning views and a super friendly skipper.',
      rating: 5,
    },
    {
      name: 'Iman K.',
      text: 'Flexible timing, clear briefing, and we even spotted dolphins on the way back.',
      rating: 4,
    },
  ]

  const faqs = [
    {
      question: 'Do I need previous experience?',
      answer: 'No, we brief you on safety, gear, and local rules before every ride or charter.',
    },
    {
      question: 'What should I bring?',
      answer: 'Comfortable clothes, sunscreen, and a towel. We supply life jackets and required gear.',
    },
    {
      question: 'Can we choose our time?',
      answer: 'Yes - pick sunrise glass, mid-day, or sunset slots when you book.',
    },
  ]

  return (
    <>
      <section id="home" className="section hero">
        <div className="hero-layout">
          <div className="hero-copy">
            <div className="eyebrow">False Bay Ocean Adventures</div>
            <h1>
              Ocean Adventures in False Bay - Jet Skis, Charters &amp; More
              <span className="accent-bar" aria-hidden="true" />
            </h1>
            <p className="lede">
              Jet ski rides, private boat charters, and guided ocean experiences launching
              from Gordon&apos;s Bay. Chase glassy sunrises, golden-hour cruises, or pure
              adrenaline on the bay.
            </p>
            <div className="hero-tags">
              <span className="pill">
                <Waves size={18} />
                Jet ski rides
              </span>
              <span className="pill">
                <ShipWheel size={18} />
                Skippered boat charters
              </span>
              <span className="pill">
                <Compass size={18} />
                Ocean wildlife routes
              </span>
            </div>
            <div className="cta-row">
              <Link className="button primary" to="/book">
                Book Now
              </Link>
              <Link className="button ghost" to="/adventures">
                View Adventures
              </Link>
            </div>
            <div className="hero-grid">
              <div className="hero-card">
                <Waves className="icon" aria-hidden="true" />
                <div>
                  <p className="label">Jet ski thrills</p>
                  <p className="muted">Solo or tandem rides with safety brief and gear ready.</p>
                </div>
              </div>
              <div className="hero-card">
                <ShipWheel className="icon" aria-hidden="true" />
                <div>
                  <p className="label">Private charters</p>
                  <p className="muted">1- to 4-hour cruises for families, friends, or teams.</p>
                </div>
              </div>
              <div className="hero-card">
                <Compass className="icon" aria-hidden="true" />
                <div>
                  <p className="label">Ocean experiences</p>
                  <p className="muted">Wildlife spotting, swimming stops, and False Bay stories.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="adventures" className="section adventures">
        <div className="eyebrow">Our Adventures</div>
        <h2>Pick your False Bay adventure</h2>
        <p className="muted">
          From jet ski sprints to laid-back charters and wildlife routes, we match the thrill to your crew.
        </p>
        <div className="adventure-grid">
          {adventures.map(({ title, description, cta, to, icon }) => (
            <article className="adventure-card" key={title}>
              <div className="adventure-icon" aria-hidden="true">
                {icon}
              </div>
              <h3>{title}</h3>
              <p className="muted">{description}</p>
              <Link className="adventure-action" to={to}>
                {cta}
              </Link>
            </article>
          ))}
        </div>
        <div className="section-cta">
          <Link className="button primary" to="/book">
            Book Now
          </Link>
          <a className="button ghost" href="#how">
            See how it works
          </a>
        </div>
      </section>

      <section id="why" className="section why">
        <div className="eyebrow">Why Choose Us</div>
        <h2>Why ride with False Bay Ocean Adventures?</h2>
        <p className="muted">
          Local skippers, dialed-in safety, and flexible times - so you can enjoy False Bay at its best.
        </p>
        <div className="why-grid">
          {whyPoints.map(({ title, description, icon }) => (
            <article className="why-card" key={title}>
              <div className="why-icon" aria-hidden="true">
                {icon}
              </div>
              <div>
                <h3>{title}</h3>
                <p className="muted">{description}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="section-cta">
          <Link className="button primary" to="/book">
            Book Now
          </Link>
          <Link className="button ghost" to="/adventures">
            View Adventures
          </Link>
        </div>
      </section>

      <section id="how" className="section how">
        <div className="eyebrow">How it works</div>
        <h2>Get on the water in three easy steps</h2>
        <div className="how-grid">
          {steps.map(({ title, description, icon }, index) => (
            <article className="how-card" key={title}>
              <div className="how-badge">
                <span className="how-number">{index + 1}</span>
              </div>
              <div className="how-icon" aria-hidden="true">
                {icon}
              </div>
              <div>
                <h3>{title}</h3>
                <p className="muted">{description}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="how-cta">
          <Link className="button primary" to="/book">
            Book Now
          </Link>
        </div>
      </section>

      <section id="faq" className="section faq">
        <div className="eyebrow">FAQs</div>
        <h2>Questions before you ride?</h2>
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

      <section id="reviews" className="section testimonials">
        <div className="eyebrow">What our guests say</div>
        <h2>Trusted by False Bay adventurers</h2>
        <div className="testimonial-grid">
          {testimonials.map(({ name, text, rating }) => (
            <article className="testimonial-card" key={name}>
              <div className="testimonial-stars" aria-label={`${rating} out of 5 stars`}>
                {Array.from({ length: rating }).map((_, i) => (
                  <Star size={16} key={i} aria-hidden="true" />
                ))}
              </div>
              <p className="muted">{text}</p>
              <p className="testimonial-name">{name}</p>
            </article>
          ))}
        </div>
        <div className="section-cta">
          <Link className="button primary" to="/book">
            Book Now
          </Link>
          <Link className="button ghost" to="/adventures">
            View Adventures
          </Link>
        </div>
      </section>

      <section id="about" className="section about">
        <div className="about-grid">
          <div className="about-copy">
            <div className="eyebrow">About False Bay &amp; Gordon&apos;s Bay</div>
            <h2>Launch into one of South Africa&apos;s most scenic bays</h2>
            <p className="muted">
              We operate from Gordon&apos;s Bay on the edge of False Bay, home to sweeping mountains,
              glassy sunrise water, and wide-open horizons. Out on the bay you can spot dolphins,
              seals, penguins, and seasonal whales while we trace the coastline and hidden coves.
            </p>
            <p className="muted">
              Whether you want adrenaline on jet skis or a calm cruise with the family, False Bay
              delivers unforgettable views in any light.
            </p>
            <div className="section-cta">
              <Link className="button primary" to="/book">
                Book Now
              </Link>
              <Link className="button ghost" to="/adventures">
                See Adventures
              </Link>
            </div>
          </div>
          <div className="about-photo">
            <img src={aboutBayImg} alt="Boat on the water in False Bay with mountain backdrop" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
