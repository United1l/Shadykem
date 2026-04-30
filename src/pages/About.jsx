function About() {
  return (
    <section className="max-w-6xl mx-auto space-y-10">
      <div className="space-y-4">
        <h1 className="text-[2.5rem] font-bold text-[#eddab0]">About ShadyKem</h1>
        <p className="max-w-3xl text-white/85 leading-8">
          ShadyKem is a fashion designer dedicated to luxurious, modern pieces
          with a strong point of view. Each creation combines polished tailoring
          with dramatic color and artisan craftsmanship.
        </p>
      </div>

      <div className="grid gap-7 md:grid-cols-2">
        <div className="rounded-[28px] border border-[#d4b86f]/20 bg-white/5 p-8 backdrop-blur-sm">
          <h2 className="text-xl font-bold text-[#eddab0]">Design Philosophy</h2>
          <p className="mt-3 text-white/85 leading-7">
            A devotion to refined silhouettes, bold textures and polished elegance.
            Our designs are made for confident women who love subtle luxury.
          </p>
        </div>

        <div className="rounded-[28px] border border-[#d4b86f]/20 bg-white/5 p-8 backdrop-blur-sm">
          <h2 className="text-xl font-bold text-[#eddab0]">Signature Colors</h2>
          <p className="mt-3 text-white/85 leading-7">
            Emerald green, rich dark emerald, glowing gold and crisp white create a
            powerful yet graceful palette throughout every collection.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
