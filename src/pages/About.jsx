import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  CameraIcon,
  UserGroupIcon,
} from '@heroicons/react/24/solid'
import Button from '../components/button.jsx'

function About() {
  return (
    <section className="mx-auto max-w-6xl space-y-10 px-4 py-8 md:px-6 md:py-10">
      <div className="space-y-5">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#f2d070]">
          About the designer
        </p>
        <h1 className="text-[2.5rem] font-bold leading-none text-[#eddab0] md:text-[3.2rem]">
          Shady
        </h1>
        <p className="max-w-4xl text-base leading-8 text-white/85 md:text-lg">
          Shady, also known as Shaddykem, is a creative force rooted in Fumesua, Kumasi,
          where he lives with his family and draws strength from the culture, rhythm, and
          warmth of home. His work is shaped by the city he grew up in and the people who
          continue to inspire him every day.
        </p>
        <div>
          <Button>Book a Consultation</Button>
        </div>
      </div>

      <div className="grid gap-7 md:grid-cols-2">
        <div className="rounded-[28px] border border-[#d4b86f]/20 bg-white/5 p-8 backdrop-blur-sm">
          <h2 className="text-xl font-bold text-[#eddab0]">Vision</h2>
          <p className="mt-3 text-white/85 leading-7">
            Shady’s vision is to represent the city through culture, telling stories of identity,
            heritage, and modern expression through clothing. He is building a brand that blends
            traditional influence with a unique and contemporary point of view, creating pieces
            that feel rooted in culture and bold in presence.
          </p>
        </div>

        <div className="rounded-[28px] border border-[#d4b86f]/20 bg-white/5 p-8 backdrop-blur-sm">
          <h2 className="text-xl font-bold text-[#eddab0]">Brand Story</h2>
          <p className="mt-3 text-white/85 leading-7">
            The Shady brand is a celebration of tradition reimagined. Designed with a distinctive
            balance of cultural authenticity and modern elegance, each look reflects the richness of
            Ghanaian identity while pushing into fresh, unforgettable fashion territory.
          </p>
        </div>
      </div>

      <div className="rounded-[28px] border border-[#d4b86f]/20 bg-[#0d120f] p-8 md:p-10">
        <h2 className="text-xl font-bold text-[#eddab0]">Future ambition</h2>
        <p className="mt-4 max-w-4xl text-base leading-8 text-white/85 md:text-lg">
          Looking ahead, Shady plans to expand his vision beyond fashion by starting a modeling
          agency that celebrates culture, confidence, and standout talent. His long-term goal is to
          create a platform where African beauty, style, and identity are showcased with pride and
          global impact.
        </p>
      </div>

      <div className="rounded-[28px] border border-[#d4b86f]/20 bg-white/5 p-8 backdrop-blur-sm">
        <h2 className="text-xl font-bold text-[#eddab0]">Contact</h2>
        <div className="mt-5 space-y-4 text-base text-white/85">
          <div className="flex items-center gap-3">
            <EnvelopeIcon className="h-5 w-5 text-[#f2d070]" />
            <a href="mailto:hello@shaddykem.com" className="transition hover:text-[#f2d070]">
              hello@shaddykem.com
            </a>
          </div>

          <div className="flex items-center gap-3">
            <PhoneIcon className="h-5 w-5 text-[#f2d070]" />
            <a href="tel:+233200000000" className="transition hover:text-[#f2d070]">
              +233 20 000 0000
            </a>
          </div>

          <div className="flex items-center gap-3">
            <CameraIcon className="h-5 w-5 text-[#f2d070]" />
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="transition hover:text-[#f2d070]">
              @shaddykem
            </a>
          </div>

          <div className="flex items-center gap-3">
            <UserGroupIcon className="h-5 w-5 text-[#f2d070]" />
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="transition hover:text-[#f2d070]">
              Shaddykem Studio
            </a>
          </div>

          <div className="flex items-center gap-3">
            <MapPinIcon className="h-5 w-5 text-[#f2d070]" />
            <span>Fumesua, Kumasi, Ghana</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
