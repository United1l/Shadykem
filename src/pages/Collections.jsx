function Collections() {
  return (
    <section className="max-w-7xl mx-auto space-y-10">
      <div className="space-y-4">
        <h1 className="text-[2.5rem] font-bold text-[#eddab0]">Collections</h1>
        <p className="max-w-3xl text-white/85 leading-8">
          Explore curated looks that blend couture precision with bold color drama.
          Each collection is designed to feel both modern and timeless.
        </p>
      </div>

      <div className="grid gap-7 md:grid-cols-3">
        <article className="rounded-[28px] border border-[#d4b86f]/20 bg-white/5 p-8 backdrop-blur-sm">
          <h2 className="text-xl font-bold text-[#eddab0]">Emerald Essence</h2>
          <p className="mt-3 text-white/85 leading-7">
            Rich greens with satin finishes, sculpted shapes and luminous gold details.
          </p>
        </article>

        <article className="rounded-[28px] border border-[#d4b86f]/20 bg-white/5 p-8 backdrop-blur-sm">
          <h2 className="text-xl font-bold text-[#eddab0]">Midnight Glow</h2>
          <p className="mt-3 text-white/85 leading-7">
            Deep emerald silhouettes accented by metallic gold and soft ivory.
          </p>
        </article>

        <article className="rounded-[28px] border border-[#d4b86f]/20 bg-white/5 p-8 backdrop-blur-sm">
          <h2 className="text-xl font-bold text-[#eddab0]">Golden Hour</h2>
          <p className="mt-3 text-white/85 leading-7">
            Silk draping, tailored jackets and evening gowns with luminous accents.
          </p>
        </article>
      </div>
    </section>
  )
}

export default Collections
