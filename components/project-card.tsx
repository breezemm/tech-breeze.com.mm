interface ProjectCardPorps {
  title: string
  description: string
  leftImage: string
  rightImage: string
}

export default function ProjectCard({ title, description, leftImage, rightImage }: ProjectCardPorps) {
  return (
    <div className="bg-seasalt my-5 flex w-full flex-col px-11.25 py-3.75 md:my-10 md:px-28 md:py-8">
      <h2 className="text-xxs text-center font-normal md:text-xl">Our Project</h2>
      <h1 className="mt-2.5 text-sm font-medium md:mt-8 md:text-3xl">{title}</h1>
      <p className="mt-1.25 text-sm font-normal md:mt-6 md:text-3xl">{description}</p>

      <div className="flex gap-x-1.25">
        <img src={leftImage} alt="Payment" className="mt-1.25 w-1/2 md:mt-6" />
        <img src={rightImage} alt="Payment" className="mt-1.25 w-1/2 md:mt-6" />
      </div>
    </div>
  )
}
