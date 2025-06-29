const developers = [
  { name: 'Ma Aye Saint Thu (Full-stack Developer)', socialLink: 'https://www.linkedin.com/in/aye-seint-thu-seint-6b7579370/' },
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
    <footer className="bg-seasalt mt-10 py-12">
      <div className="flex justify-center lg:space-x-30">
        {/* address */}
        <div>
          <h3 className="mb-6 font-semibold">Address</h3>
          <div>
            <p>Tech Breeze</p>
            <p>Based in Myanmar (Remote-First)</p>
            {breezeInfo.map(({ label, href, text }) => (
              <p key={label}>
                <span>{label}: </span>
                <a target="_blank" rel="noopener noreferrer" href={href}>
                  {text}
                </a>
              </p>
            ))}
          </div>
        </div>

        {/* developers */}
        <div>
          <div className="hidden flex-col gap-6 lg:flex">
            <h3>A big thank to our awesome Breezers for crafting website to life!</h3>
            <div className="flex flex-col">
              {developers.map(({ name, socialLink }) => (
                <a target="_blank" rel="noopener noreferrer" className="underline-off-set-8 leading-9 underline" href={socialLink} key={name}>
                  {name}
                  <br />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
