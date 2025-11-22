import { Shield, Sparkles, Globe, BarChart2 } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Advanced Security',
    desc: 'Dynamic CVV, biometric approvals, and 3D Secure keep your money safe.'
  },
  {
    icon: BarChart2,
    title: 'Smart Insights',
    desc: 'Automatic categorization and real-time analytics to understand spending.'
  },
  {
    icon: Globe,
    title: 'Global by Design',
    desc: 'Use your card anywhere with 0% foreign transaction fees.'
  },
  {
    icon: Sparkles,
    title: 'Premium Experience',
    desc: 'Glassmorphic design with virtual and physical card options.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-sky-100/60 to-transparent blur-3xl" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">A card that works as smart as it looks</h2>
          <p className="mt-3 text-slate-600">Built for the digital age with a focus on clarity, control, and security.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-11 w-11 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-1 text-slate-600 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
