const developers = [
  { name: 'Ko Pyae Phyo Hlaing(Full-stack Developer)', socialLink: '' },
  { name: 'Ma Aye Saint Thu(Full-stack Developer)', socialLink: '' },
  { name: 'Ma Paing Hus Wai Kyaw(Product Manager)', socialLink: '' },
  { name: 'Ko Khant Nyar Thwin (Full-stack Developer)', socialLink: '' },
  { name: 'Ko La Pae Hume Aung (Full-stack Developer)', socialLink: '' },
  { name: 'Ko Zawe Yan Naing (Full-stack Developer)', socialLink: '' },
  { name: 'Ko Zwe Mhan Shin (Product Designer)', socialLink: '' },
]
export default function Footer() {
  return (
    <footer className="bg-seasalt flex gap-42 py-12 pl-34 text-xl">
      <div className="flex w-1/2 flex-col gap-6">
        <h3>Address</h3>
        <div className="flex flex-col">
          <p>Tech Breeze</p>
          <p>Based in Myanmar (Remote-First) Mail: hello@tech-breeze.com.mm Website: www.tech-breeze.com.mm Phone number: 09 980 40 96 20</p>
        </div>
      </div>

      <div className="flex w-3/4 flex-col gap-6">
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
