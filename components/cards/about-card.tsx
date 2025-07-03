interface AboutCardProps {
  title: string
  description: string
}

export default function AboutCard({ title, description }: AboutCardProps) {
  return (
    <div className="bg-seasalt flex flex-col items-center justify-center gap-y-2.5 px-11.25 py-12.5 transition-all sm:gap-8 md:px-10 lg:px-28">
      <p className="text-xss text-center transition-all sm:text-sm md:text-base lg:text-lg">{title}</p>
      <p className="text-justify text-sm transition-all md:text-xl lg:text-3xl">{description}</p>
    </div>
  )
}
