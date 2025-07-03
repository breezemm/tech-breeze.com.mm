import AboutCard from '@/components/cards/about-card'

const cardItmes = [
  {
    title: 'About breeze',
    description:
      'At Tech Breeze, we craft technology that elevates the human experience. Our tools make daily work and interactions smoother, smarter, and more meaningful.',
  },
  {
    title: 'Our team (breezer)',
    description:
      'We’re a remote-first team spread across Myanmar—from Myitkyina and Pyay to Pathein, Mandalay, Magway, and Yangon. This flexibility lets us stay agile and connect the right people to every project, wherever they are.',
  },
]

export default function AboutSection() {
  return (
    <section className="flex flex-col gap-5 sm:gap-10" id="about">
      {cardItmes.map((items) => (
        <AboutCard key={items.title} title={items.title} description={items.description} />
      ))}
    </section>
  )
}
