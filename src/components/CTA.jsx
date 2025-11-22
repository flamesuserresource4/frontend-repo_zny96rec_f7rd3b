export default function CTA() {
  return (
    <section id="cta" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-slate-200 bg-white/80 p-10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">Ready to experience the future of credit?</h3>
            <p className="mt-2 text-slate-600">Join thousands who manage money with clarity, control, and style.</p>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-slate-800 hover:bg-slate-50 transition-colors">Learn more</a>
            <a href="#" className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-white hover:bg-slate-800 transition-colors">Apply now</a>
          </div>
        </div>
      </div>
    </section>
  )
}
