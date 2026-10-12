const collectionHighlights = [
  {
    title: 'Emerald Essence',
    subtitle: 'Rich greens · satin textures · sculpted silhouettes',
    image: '/images/27b.jpeg',
  },
  {
    title: 'Midnight Glow',
    subtitle: 'Deep tones · polished tailoring · gold detailing',
    image: '/images/8.jpeg',
  },
  {
    title: 'Golden Hour',
    subtitle: 'Soft ivory · fluid drape · luminous eveningwear',
    image: '/images/26.jpeg',
  },
  {
    title: 'Collection 3',
    subtitle: 'Soft structure · elevated essentials · refined movement',
    image: '/images/3.jpeg',
  },
  {
    title: 'Collection 4',
    subtitle: 'Statement silhouettes · warm metals · tailored drama',
    image: '/images/4.jpeg',
  },
  {
    title: 'Collection 2',
    subtitle: 'Crisp contrast · layered styling · everyday elegance',
    image: '/images/2.jpeg',
  },
]

const collectionGrid = [
  { title: 'Noir Atelier', image: '/images/1.jpeg', tag: 'Signature', accent: 'Monochrome' },
  { title: 'Velvet Motion', image: '/images/3.jpeg', tag: 'Limited', accent: 'Bold texture' },
  { title: 'Soft Structure', image: '/images/12.jpeg', tag: 'Essential', accent: 'Minimal refinement' },
  { title: 'City Silk', image: '/images/15.jpeg', tag: 'Modern', accent: 'Urban drape' },
  { title: 'Earth & Gold', image: '/images/22.jpeg', tag: 'Statement', accent: 'Warm richness' },
  { title: 'After Dark', image: '/images/29.jpeg', tag: 'Evening', accent: 'Glow in motion' },
]

function Collections() {
  return (
    <section className="mx-auto max-w-7xl space-y-10 px-4 py-8 md:px-6 md:py-10">
      <div className="space-y-5">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#f2d070]">
          The edited edit
        </p>
        <h1 className="text-[2.4rem] font-bold leading-none text-[#eddab0] md:text-[3.2rem]">
          Collections
        </h1>
        <p className="max-w-3xl text-base leading-8 text-white/85 md:text-lg">
          Explore curated looks that blend couture precision with bold color drama.
          Each collection is designed to feel both modern and timeless.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {collectionHighlights.map((item) => (
          <article
            key={item.title}
            className="group overflow-hidden rounded-[28px] border border-[#d4b86f]/20 bg-white/5 shadow-soft"
          >
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="h-[360px] w-full object-contain bg-[#0d120f] transition duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <div className="space-y-3 p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#f2d070]">
                {item.subtitle}
              </p>
              <h2 className="text-2xl font-bold text-[#eddab0]">{item.title}</h2>
            </div>
          </article>
        ))}
      </div>

      <div className="pt-4">
        <div className="mb-6 flex items-center justify-between gap-3">
          <h2 className="text-xl font-semibold uppercase tracking-[0.2em] text-[#f2d070] md:text-2xl">
            Lookbook archive
          </h2>
          <span className="text-sm text-white/60">Seasonal curated pieces</span>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {collectionGrid.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-[28px] border border-[#d4b86f]/20 bg-[#0d120f] shadow-soft"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[430px] w-full object-contain transition duration-500 hover:scale-[1.02]"
                />
              </div>
              <div className="space-y-3 p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#f2d070]">
                    {item.tag}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-white/60">
                    {item.accent}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#eddab0]">{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Collections
