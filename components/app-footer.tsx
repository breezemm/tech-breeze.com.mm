import Link from 'next/link'

const developers = [
  { name: 'Ma Aye Seint Thu (Full-stack Developer)', socialLink: 'https://www.linkedin.com/in/aye-seint-thu-seint-6b7579370/' },
  { name: 'Ko Khant Nyar Thwin (Full-stack Developer)', socialLink: 'https://www.linkedin.com/in/khant-nyar-thwin-3451a1372/' },
  { name: 'Ko La Pyae Hume Aung (Frontend Developer)', socialLink: 'https://www.linkedin.com/in/lapyaehmueaung/' },
  { name: 'Ma Paing Hus Wai Kyaw (Product Manager)', socialLink: 'https://www.linkedin.com/in/paing-hsu-wai-kyaw-08041b372/' },
  { name: 'Ko Pyae Phyo Hlaing (Full-stack Developer)', socialLink: 'https://github.com/pyaephyo11979' },
  { name: 'Ko Zawe Yan Naing (Full-stack Developer)', socialLink: 'https://www.linkedin.com/in/zawe-yan-naing-a4b1a0285/' },
  { name: 'Ko Zwe Mhan Shin (Product Designer)', socialLink: 'https://www.linkedin.com/in/zwe-thet-maung-ko-ko-199b0b29a/' },
]

const breezeInfo = [
  { label: 'Mail', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=hello@tech-breeze.com.mm', text: 'hello@tech-breeze.com.mm' },
  { label: 'Website', href: 'https://www.tech-breeze.com.mm', text: 'www.tech-breeze.com.mm' },
  { label: 'Phone number', href: 'tel:+959980409620', text: '09 980 40 96 20' },
]

export default function AppFooter() {
  return (
    <footer className="bg-seasalt text-xss text-eerie-black flex flex-col justify-between space-y-5 px-11.25 pt-6 pb-13.5 transition-all sm:py-12 sm:text-sm md:px-10 lg:flex-row lg:px-28 lg:text-base xl:text-xl">
      <div>
        <h3 className="mb-2.5 font-semibold sm:mb-6">Address</h3>
        <div>
          <p>Tech Breeze</p>
          <p>Based in Myanmar (Remote-First)</p>
          {breezeInfo.map(({ label, href, text }) => (
            <p key={label}>
              <span>{label}: </span>
              <Link target="_blank" rel="noopener noreferrer" href={href}>
                {text}
              </Link>
            </p>
          ))}
        </div>
      </div>

      <div className="text-xss flex flex-col space-y-2.5 sm:text-sm lg:space-y-6 lg:text-base xl:text-xl">
        <h3 className="md:text-nowrap">A big thank to our awesome Breezers for crafting website to life!</h3>
        <div className="flex flex-col space-y-1.5 lg:space-y-4">
          {developers.map(({ name, socialLink }) => (
            <Link target="_blank" rel="noopener noreferrer" key={name} href={socialLink} className="underline-off-set-8 font-medium underline">
              {name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
