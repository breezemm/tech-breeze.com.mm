interface AboutCardProps {
  title: string
  description: string
}

export default function AboutCard({ title, description }: AboutCardProps) {
  return (
    <div className="bg-seasalt flex flex-col items-center justify-center gap-y-2.5 px-11.25 py-12.5 transition-all sm:gap-8 md:px-10 lg:px-28">
      <p className="text-xss text-center transition-all sm:text-sm md:text-base lg:text-lg">{title}</p>
      <p className="w:83.75 text-center text-sm transition-all md:text-left md:text-xl lg:w-264.25 lg:text-left lg:text-3xl">{description}</p>
    </div>
  )
}
