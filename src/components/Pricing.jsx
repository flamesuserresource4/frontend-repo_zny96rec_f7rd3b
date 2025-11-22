export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-600">Start free and scale with premium perks when you need them.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {/* Free */}
          <div className="rounded-2xl border border-slate-200 bg-white/80 p-8 shadow-sm">
            <div className="text-sm font-medium text-slate-500">Starter</div>
            <div className="mt-2 text-4xl font-semibold text-slate-900">$0<span className="text-lg font-normal text-slate-500">/mo</span></div>
            <ul className="mt-6 space-y-3 text-sm text-slate-600">
              <li>• No annual fee</li>
              <li>• Real-time spend alerts</li>
              <li>• Virtual card</li>
              <li>• Apple Pay & Google Pay</li>
            </ul>
            <a href="#cta" className="mt-8 inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-slate-800 hover:bg-slate-50 transition-colors">Get started</a>
          </div>

          {/* Premium */}
          <div className="relative rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white shadow-xl overflow-hidden">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15),transparent_40%)]" />
            <div className="relative">
              <div className="text-sm font-medium text-sky-300">Premium</div>
              <div className="mt-2 text-4xl font-semibold">$12<span className="text-lg font-normal text-slate-300">/mo</span></div>
              <ul className="mt-6 space-y-3 text-sm text-slate-200">
                <li>• Everything in Starter</li>
                <li>• Priority support</li>
                <li>• Metal card</li>
                <li>• Advanced analytics</li>
                <li>• Unlimited virtual cards</li>
              </ul>
              <a href="#cta" className="mt-8 inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-slate-900 hover:bg-slate-100 transition-colors">Upgrade now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
