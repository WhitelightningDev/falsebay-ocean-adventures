import { Compass, ShipWheel, Waves } from 'lucide-react'
import { Link } from 'react-router-dom'
import heroImg from '../assets/boatimage.jpg'
import teamBuildingImg from '../assets/team-building.jpg'
import sunsetCruiseImg from '../assets/sunset-cruise.jpg'
import tubeRidesImg from '../assets/tube-rides.jpg'

function Home() {
  return (
    <>
      <section id="home" className="section hero">
        <div className="hero-layout">
          <div className="hero-copy">
            <div className="eyebrow">Boat charters &amp; jet ski hire • Gordon&apos;s Bay</div>
            <h1>
              Ride, Splash, Repeat
              <span className="accent-bar" aria-hidden="true" />
            </h1>
            <p className="lede">
              False Bay Ocean Adventures – fun for every kind of explorer. Bring
              the family for scenic cruises or sunset trips, where dolphins,
              penguins, seals and fin whales often join the show. Or throttle up
              with jet ski thrills as you skim the sparkling Gordon&apos;s Bay
              coastline.
            </p>
            <div className="hero-tags">
              <span className="pill">
                <Waves size={18} />
                Scenic family cruises
              </span>
              <span className="pill">
                <ShipWheel size={18} />
                Ocean safaris
              </span>
              <span className="pill">
                <Compass size={18} />
                Jet ski adventures
              </span>
            </div>
            <div className="cta-row">
              <Link className="button primary" to="/book">
                Book now
              </Link>
              <Link className="button ghost" to="/contact">
                Talk to us
              </Link>
            </div>
            <div className="hero-grid">
              <div className="hero-card">
                <Waves className="icon" aria-hidden="true" />
                <div>
                  <p className="label">Boat charters</p>
                  <p className="muted">1-hour, 2-hour, and half-day leisure rides.</p>
                </div>
              </div>
              <div className="hero-card">
                <ShipWheel className="icon" aria-hidden="true" />
                <div>
                  <p className="label">Ocean safaris</p>
                  <p className="muted">Half- or full-day wildlife spotting with lunch.</p>
                </div>
              </div>
              <div className="hero-card">
                <Compass className="icon" aria-hidden="true" />
                <div>
                  <p className="label">Jet ski hire</p>
                  <p className="muted">30-minute up to half-day thrills on the bay.</p>
                </div>
              </div>
            </div>
          </div>
          <figure className="hero-image">
            <img src={heroImg} alt="False Bay charter boat ready to launch in Gordon's Bay" />
            <figcaption id="figcaption">Calm False Bay waters at sunrise — ready for launch.</figcaption>
          </figure>
        </div>
      </section>

      <section className="section experiences">
        <div className="eyebrow">Signature experiences</div>
        <h2>Adventure awaits in Gordon&apos;s Bay</h2>
        <p className="muted">
          Pick the vibe for your crew: energising team days, golden-hour cruises, or
          adrenaline-packed tube rides and water skiing.
        </p>
        <div className="experience-grid">
          <article className="experience-card">
            <div className="experience-photo">
              <img src={teamBuildingImg} alt="Group celebrating on a boat during a team building outing" />
            </div>
            <div className="experience-copy">
              <p className="label">Team Building &amp; Year End</p>
              <p className="muted">Packages include food, drinks, jet skis, and a boat for your team.</p>
            </div>
          </article>
          <article className="experience-card">
            <div className="experience-photo">
              <img src={sunsetCruiseImg} alt="Guests enjoying a sunset cruise on False Bay" />
            </div>
            <div className="experience-copy">
              <p className="label">Sunset Cruises</p>
              <p className="muted">1-hour sunset or champagne cruises to toast the day on False Bay.</p>
            </div>
          </article>
          <article className="experience-card">
            <div className="experience-photo">
              <img src={tubeRidesImg} alt="Friends on a banana boat ride with waves in the background" />
            </div>
            <div className="experience-copy">
              <p className="label">Tube Rides &amp; Water Ski</p>
              <p className="muted">Learn to ski or hang on tight for tube rides — pure, splashy fun.</p>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}

export default Home
