import { Menu, CreditCard, Shield } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/30 border-b border-white/20">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 via-cyan-400 to-indigo-500 p-[2px] shadow-[0_0_30px_rgba(56,189,248,0.35)]">
            <div className="h-full w-full rounded-[10px] bg-white/80 flex items-center justify-center">
              <CreditCard className="h-5 w-5 text-slate-800" />
            </div>
          </div>
          <span className="font-semibold text-slate-900 tracking-tight">Aquila Card</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
          <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
          <a href="#pricing" className="hover:text-slate-900 transition-colors">Pricing</a>
          <a href="#security" className="hover:text-slate-900 transition-colors flex items-center gap-1"><Shield className="h-4 w-4"/>Security</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="px-4 py-2 text-slate-800 hover:text-slate-900">Sign in</a>
          <a href="#cta" className="px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-sm">Get the card</a>
        </div>

        <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700"><Menu className="h-5 w-5"/></button>
      </div>
    </header>
  )
}
