// components/hero.tsx
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-zinc-800/60 border border-zinc-700/50 rounded-full px-4 py-1.5 text-sm text-zinc-400 mb-8">
          <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
          Available for new projects
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-none mb-6">
          We craft{' '}
          <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            digital
          </span>
          <br />
          experiences
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
          FORMA is a creative studio specializing in brand identity, web design, and digital strategy for forward-thinking companies.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-amber-400 text-zinc-950 font-semibold px-8 py-3.5 rounded-full hover:bg-amber-300 transition-colors text-sm w-full sm:w-auto">
            View our work
          </button>
          <button className="border border-zinc-700 text-white font-semibold px-8 py-3.5 rounded-full hover:border-zinc-500 transition-colors text-sm w-full sm:w-auto">
            Start a project →
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600 text-xs">
        <span>Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-zinc-600 to-transparent" />
      </div>
    </section>
  )
}