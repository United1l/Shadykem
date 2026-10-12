import { Link } from 'react-router-dom'
import { ArrowUpRightIcon, EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'

const Footer = () => {
  const links = [
    { name: 'Home', href: '/' },
    { name: 'Collections', href: '/collections' },
    { name: 'About', href: '/about' },
  ]

  const supportLinks = [
    { name: 'Shipping & Returns', href: '/collections' },
    { name: 'Care Guide', href: '/about' },
    { name: 'Contact Us', href: '/about' },
  ]

  const socials = [
    { name: 'Instagram', href: 'https://instagram.com' },
    { name: 'Facebook', href: 'https://facebook.com' },
  ]

  return (
    <footer className="border-t border-[#d4b86f]/20 bg-[#0c100d] text-[#f5efe2]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.3fr_0.8fr_0.8fr_1.1fr]">
          <div className="space-y-6">
            <div className="text-[1.55rem] font-bold tracking-[0.14em] text-[#f2d070] uppercase">
              Shaddykem
            </div>
            <p className="max-w-sm text-sm leading-7 text-[#d7d0c3]">
              Curated essentials for a confident everyday wardrobe. Thoughtful silhouettes, elevated textures, and the confidence to move through every moment in style.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              {socials.map(({ name, href }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[#d4b86f]/30 bg-[#f2d070]/5 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#f2d070] transition hover:border-[#f2d070] hover:bg-[#f2d070]/10"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#f2d070]">
              Navigate
            </p>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-[#f5efe2] transition hover:text-[#f2d070]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#f2d070]">
              Support
            </p>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-[#f5efe2] transition hover:text-[#f2d070]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <div className="flex items-center justify-between gap-3 rounded-full border border-[#d4b86f]/25 bg-[#f2d070]/5 px-4 py-3 text-sm text-[#f5efe2]">
              <span className="tracking-[0.18em] uppercase text-[#f2d070]">
                Join the list
              </span>
              <ArrowUpRightIcon className="h-4 w-4 text-[#f2d070]" />
            </div>

            <div className="space-y-4 text-sm text-[#d7d0c3]">
              <div className="flex items-start gap-3">
                <EnvelopeIcon className="mt-1 h-4 w-4 text-[#f2d070]" />
                <a href="mailto:hello@shaddykem.com" className="transition hover:text-[#f2d070]">
                  hello@shaddykem.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <PhoneIcon className="mt-1 h-4 w-4 text-[#f2d070]" />
                <a href="tel:+1234567890" className="transition hover:text-[#f2d070]">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPinIcon className="mt-1 h-4 w-4 text-[#f2d070]" />
                <span>Fumesua, Kumasi, KSI</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-[#d4b86f]/20 pt-6 text-xs uppercase tracking-[0.18em] text-[#d7d0c3] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Shaddykem</p>
          <p>Crafted for everyday confidence</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
