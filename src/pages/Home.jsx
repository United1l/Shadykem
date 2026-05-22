import { useNavigate } from 'react-router-dom'
import Button from '../components/button.jsx'
import { ArrowUpRight } from 'lucide-react'

function Home() {
  const navigate = useNavigate()

  return (
    <section className="min-h-[82vh] w-screen max-w-none -mx-8 md:-mx-10 overflow-hidden shadow-soft relative">
        <img
          src="/images/bg2.jpg"
          alt=""
          aria-hidden="true"
          className="h-[70%] w-full"
        />

      <div className="w-1/3 absolute left-[35%] top-[20%] flex flex-col justify-center items-start">
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wide leading-snug">
          OWN YOUR STYLE
          <br />
          BECOME THE TREND
        </h1>
        <p className="text-base md:text-lg text-emerald-500 mt-4 md:mt-6 tracking-tight">
          Discover the latest fashion trends and express your unique style with our curated collection of clothing and accessories.
        </p>
        <div className="mt-10 md:mt-14">
          <Button onClick={() => navigate('/collections')}>
            Explore Now
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="h-full w-full">
        <img
          src="/images/bg3.jpg"
          alt=""
          aria-hidden="true"
          className="h-full w-1/2 object-cover object-top"
        />
      </div>
    </section>
  )
}

export default Home
