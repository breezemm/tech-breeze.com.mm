interface AboutCardProps {
  title: string
  description: string
}

export default function AboutCard({ title, description }: AboutCardProps) {
  return (
    <div className="bg-seasalt flex flex-col items-center justify-center gap-y-2.5 px-8.5 py-12.5 sm:gap-8 md:px-10">
      <h1 className="text-xss text-center sm:text-sm md:text-base">{title}</h1>
      <p className="text-sm md:text-xl lg:text-3xl">{description}</p>
    </div>
  )
}
