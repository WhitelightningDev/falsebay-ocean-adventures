function Footer() {
  return (
    <footer className="mt-10 bg-slate-900 text-slate-100">
      <div className="mx-auto grid w-full grid-cols-1 gap-6 px-4 py-10 sm:grid-cols-3 sm:px-6 lg:px-10">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-300">Contact</p>
          <p className="text-sm text-slate-200">
            Phone / WhatsApp:{' '}
            <a href="tel:+27821234567" aria-label="Call or WhatsApp +27 82 123 4567" className="font-semibold text-amber-300">
              +27 82 123 4567
            </a>
          </p>
          <p className="text-sm text-slate-200">
            Email:{' '}
            <a className="font-semibold text-amber-300" href="mailto:bookings@falsebayoceanadventures.com">
              bookings@falsebayoceanadventures.com
            </a>
          </p>
        </div>
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-300">Location</p>
          <p className="text-sm text-slate-200">Gordon&apos;s Bay, False Bay, South Africa</p>
          <p className="text-sm text-slate-200">Launches near Harbour Island &amp; Bikini Beach</p>
        </div>
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-300">Follow</p>
          <p className="text-sm text-slate-200">
            <a className="font-semibold text-amber-300" href="https://instagram.com/falsebayoceanadventures" target="_blank" rel="noreferrer">
              Instagram
            </a>{' '}
            /{' '}
            <a className="font-semibold text-amber-300" href="https://facebook.com/falsebayoceanadventures" target="_blank" rel="noreferrer">
              Facebook
            </a>
          </p>
          <p className="text-sm text-slate-200">Open daily 08:00 - 18:00, weather permitting (peak Nov - Apr)</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
