import ProjectCard from '@/components/cards/project-card'

const cardItems = [
  {
    title: 'Payment Gateway System',
    description:
      'We enable businesses to accept secure digital payments—bank transfers, mobile wallets, and QR codes—with real-time dashboards for fast, scalable transactions.',
    leftImage: '/assets/payment-photo-1.png',
    rightImage: '/assets/payment-photo-2.png',
  },
  {
    title: 'Consumer Market—Event & Ticketing (Breeze)',
    description:
      'We offer a modern way to browse, book, and attend events—with secure online payments, digital tickets for easy access, and full control for organizers over sales, promos, and attendees.',
    leftImage: '/assets/payment-photo-3.png',
    rightImage: '/assets/payment-photo-4.png',
  },
  {
    title: 'Centralized KYC (Know Your Customer) Systems',
    description:
      'We centralize KYC (Know Your Customer) Systems streamline customer verification for service providers by offering a secure, shared platform that ensures data safety and facilitates faster onboarding.',
    leftImage: '/assets/payment-photo-5.png',
    rightImage: '/assets/payment-photo-6.png',
  },
  {
    title: 'Palm Oil Production (Farm to Factory)',
    description:
      'We provide a complete system to manage palm oil production, tracking harvests, tasks, fuel, and deliveries—making daily data entry easy for managers and giving executives a clear view with simple dashboards.',
    leftImage: '/assets/payment-photo-7.png',
    rightImage: '/assets/payment-photo-8.png',
  },
  {
    title: 'SMS Gateway Solutions',
    description:
      'We design a reliable mass messaging for campaigns and alerts, allowing bulk message sending with delivery tracking and SMS campaign scheduling.',
    leftImage: '/assets/payment-photo-9.png',
    rightImage: '/assets/payment-photo-10.png',
  },
]

export default function ProjectSection() {
  return (
    <div id="projects" className="flex w-full flex-col space-y-5 lg:space-y-10">
      {cardItems.map((cards) => (
        <ProjectCard
          key={cards.title}
          title={cards.title}
          description={cards.description}
          leftImage={cards.leftImage}
          rightImage={cards.rightImage}
        />
      ))}
    </div>
  )
}
