import Button from '../components/button.jsx'

function Home() {
  return (
    <section className="relative min-h-[82vh] overflow-hidden shadow-soft">
        <div className="flex flex-col justify-center items-start px-4 md:px-10 py-20 md:py-40">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wide leading-snug">
            OWN YOUR STYLE
            <br />
            BECOME THE TREND
          </h1>
          <p className="text-base md:text-lg text-gray-300 mt-4 md:mt-6 tracking-tight">
            Discover the latest fashion trends and express your unique style with our curated collection of clothing and accessories.
          </p>
          <div className="mt-6 md:mt-8">
            <Button>Shop the Look</Button>
          </div>
        </div>
    </section>
  )
}

export default Home
