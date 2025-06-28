const developers = [
  { name: 'Ko Pyae Phyo Hlaing(Full-stack Developer)', socialLink: '' },
  { name: 'Ma Aye Saint Thu(Full-stack Developer)', socialLink: '' },
  { name: 'Ma Paing Hus Wai Kyaw(Product Manager)', socialLink: '' },
  { name: 'Ko Khant Nyar Thwin (Full-stack Developer)', socialLink: '' },
  { name: 'Ko La Pae Hume Aung (Full-stack Developer)', socialLink: '' },
  { name: 'Ko Zawe Yan Naing (Full-stack Developer)', socialLink: '' },
  { name: 'Ko Zwe Mhan Shin (Product Designer)', socialLink: '' },
]

const breezeInfo = [
  { label: 'Mail', href: 'hello@tech-breeze.com.mm' },
  { label: 'Website', href: 'www.tech-breeze.com.mm' },
  { label: 'Phone number', href: '09 980 40 96 20' },
]
export default function Footer() {
  return (
    <footer className="bg-seasalt flex gap-42 py-12 pl-5 text-[10px] md:pl-6 md:text-xl">
      <div className="flex w-full flex-col items-center justify-center gap-6 lg:w-1/2">
        <h3 className="ml-[-7rem] font-semibold md:ml-[-15rem]">Address</h3>
        <div className="flex flex-col">
          <p>Tech Breeze</p>
          <p>Based in Myanmar (Remote-First)</p>
          {breezeInfo.map(({ label, href }) => (
            <p key={label}>
              <span>{label}: </span>
              <a href={href}>{href}</a>
            </p>
          ))}
        </div>
      </div>

      <div className="hidden w-3/4 flex-col gap-6 lg:flex">
        <h3>A big thank to our awesome Breezers for crafting website to life!</h3>
        <div className="flex flex-col">
          {developers.map(({ name, socialLink }) => (
            <a className="underline-off-set-8 leading-9 underline" href={socialLink} key={name}>
              {name}
              <br />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
