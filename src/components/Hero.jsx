import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[86vh] overflow-hidden bg-[radial-gradient(circle_at_20%_10%,#dbeafe_0%,transparent_35%),radial-gradient(circle_at_80%_20%,#e0e7ff_0%,transparent_30%),linear-gradient(to_bottom_right,#ffffff,#f8fafc)]">
      {/* Glass gradient overlays */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-cyan-300/50 to-purple-300/50 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] h-96 w-96 rounded-full bg-gradient-to-tr from-indigo-300/40 to-sky-200/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10 grid lg:grid-cols-2 gap-10 items-center relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs text-slate-600 shadow-sm">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Trusted by 50k+ cardholders
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900">
            The glassmorphic card built for the modern era
          </h1>
          <p className="mt-4 text-slate-600 text-lg leading-relaxed">
            Zero-fee purchases, real-time insights, and bank-grade security in a minimalist, 3D-designed experience.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#cta" className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-white shadow hover:bg-slate-800 transition-colors">
              Get started — it’s free
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white/70 px-5 py-3 text-slate-800 hover:bg-white transition-colors">
              Explore features
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-slate-500">
            <div>
              <div className="font-semibold text-slate-800">0% Foreign fees</div>
              <div>No hidden charges abroad</div>
            </div>
            <div>
              <div className="font-semibold text-slate-800">Real-time alerts</div>
              <div>Instant spend notifications</div>
            </div>
            <div>
              <div className="font-semibold text-slate-800">Bank-level security</div>
              <div>3D Secure + biometrics</div>
            </div>
          </div>
        </div>

        {/* 3D Spline Scene */}
        <div className="relative h-[520px] sm:h-[560px] lg:h-[640px] rounded-2xl border border-white/40 bg-white/20 backdrop-blur-xl shadow-[0_10px_60px_rgba(30,58,138,0.15)]">
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />

          {/* Gloss overlay */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/30">
            <div className="absolute inset-x-10 top-0 h-20 bg-gradient-to-b from-white/50 to-transparent rounded-t-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
