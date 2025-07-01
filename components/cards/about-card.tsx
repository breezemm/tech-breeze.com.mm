interface AboutCardProps {
  title: string
  description: string
}

export default function AboutCard({ title, description }: AboutCardProps) {
  return (
    <div className="bg-seasalt flex flex-col items-center justify-center gap-y-2.5 px-8.5 py-12.5 sm:gap-8 md:px-10 lg:px-12 xl:px-14 2xl:px-14 transition-all   ">
      <p className="text-sm text-center sm:text-sm md:text-base lg:text-lg  transition-all">{title}</p>
      <p className="text-sm md:text-xl lg:text-3xl text-justify transition-all">{description}</p>
    </div>
  )
}
