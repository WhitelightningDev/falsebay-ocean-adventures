function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <p className="footer-eyebrow">Contact</p>
          <p className="footer-item">
            Phone / WhatsApp:{' '}
            <a href="tel:+27821234567" aria-label="Call or WhatsApp +27 82 123 4567">
              +27 82 123 4567
            </a>
          </p>
          <p className="footer-item">
            Email: <a href="mailto:bookings@falsebayoceanadventures.com">bookings@falsebayoceanadventures.com</a>
          </p>
        </div>
        <div>
          <p className="footer-eyebrow">Location</p>
          <p className="footer-item">Gordon&apos;s Bay, False Bay, South Africa</p>
          <p className="footer-item">Launches near Harbour Island &amp; Bikini Beach</p>
        </div>
        <div>
          <p className="footer-eyebrow">Follow</p>
          <p className="footer-item">
            <a href="https://instagram.com/falsebayoceanadventures" target="_blank" rel="noreferrer">
              Instagram
            </a>{' '}
            /{' '}
            <a href="https://facebook.com/falsebayoceanadventures" target="_blank" rel="noreferrer">
              Facebook
            </a>
          </p>
          <p className="footer-item">Open daily 08:00 - 18:00, weather permitting (peak Nov - Apr)</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
