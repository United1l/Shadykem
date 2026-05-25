import { useNavigate } from 'react-router-dom'
import Button from './button.jsx'
import { ArrowUpRight } from 'lucide-react'

function HeroSection() {
    const navigate = useNavigate()

    return (
        <section className="min-h-[82vh] w-screen shadow-soft">
            <div className="h-full w-full relative">
                <img
                    src="/images/bg2.jpg"
                    alt=""
                    aria-hidden="true"
                    className="h-full md:h-[1000px] xl-h-[1200px] w-full"
                />

                <div className="w-1/2 h-1/3 md:h-[200px] absolute left-[50%] top-[55%] -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-start">
                    <h1 className="text-xl sm:text-2xl md:text-6xl text-emerald font-bold tracking-wide leading-snug">
                        OWN YOUR STYLE
                        <br />
                        BECOME THE TREND
                    </h1>
                    <p className="text-[10px] md:text-lg text-emerald-500 mt-2 md:mt-6 tracking-tight">
                        Discover the latest fashion trends and express your unique style with our curated collection of clothing and accessories.
                    </p>
                    <div className="mt-10 md:mt-14">
                        <Button onClick={() => navigate('/collections')}>
                            Explore Now
                            <ArrowUpRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;