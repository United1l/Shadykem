import { useNavigate } from 'react-router-dom'
import { ArrowRightIcon, SparklesIcon } from '@heroicons/react/24/solid'
import Button from './button.jsx'

function HeroSection() {
    const navigate = useNavigate()

    return (
        <section className="w-full px-0 md:px-4">
            <div className="relative mx-auto max-w-7xl overflow-hidden shadow-soft md:rounded-[28px]">
                <img
                    src="/images/newer-hero.jpg"
                    alt=""
                    aria-hidden="true"
                    className="h-[540px] w-full object-contain bg-[#050a08] md:h-[640px]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#050a08]/80 via-[#050a08]/35 to-transparent" />

                <div className="absolute left-6 top-1/2 w-[75%] -translate-y-1/2 md:left-10 md:w-1/2">
                    <div className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#f2d070] md:text-xs">
                        <SparklesIcon className="h-4 w-4" />
                        Curated essentials
                    </div>
                    <h1 className="text-xl font-bold leading-snug tracking-[0.08em] text-emerald sm:text-2xl md:text-5xl md:leading-[1.08]">
                        OWN YOUR STYLE
                        <br />
                        BECOME THE TREND
                    </h1>
                    <p className="mt-3 max-w-xl text-[10px] tracking-tight text-emerald-500 md:mt-6 md:text-lg">
                        Discover the latest fashion trends and express your unique style with our curated collection of clothing and accessories.
                    </p>
                    <div className="mt-8 md:mt-12">
                        <Button onClick={() => navigate('/collections')}>
                            Explore Now
                            <ArrowRightIcon className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;