import Image from 'next/image'

interface ProjectCardPorps {
  title: string
  description: string
  leftImage: string
  rightImage: string
}

export default function ProjectCard({ title, description, leftImage, rightImage }: ProjectCardPorps) {
  return (
    <div className="bg-seasalt flex w-full flex-col px-11.25 py-3.75 md:px-10 md:py-12.5 lg:px-28 lg:py-8">
      <h2 className="text-xss text-center font-normal md:text-base lg:text-xl">Our projects</h2>
      <h1 className="mt-2.5 text-sm font-medium md:mt-4 md:text-xl lg:mt-8 lg:text-3xl">{title}</h1>
      <p className="mt-1.25 text-sm font-normal md:mt-2 md:max-w-250 md:text-xl lg:mt-6 lg:max-w-264.25 lg:text-3xl">{description}</p>

      <div className="flex gap-x-1.5 md:gap-x-3 lg:gap-x-6">
        <Image
          src={leftImage}
          width="4096"
          height="4096"
          alt="left-cover"
          className="mt-1.25 w-1/2 rounded-xs object-cover object-center md:mt-6 md:max-h-50 md:max-w-115 md:rounded-md lg:max-h-62.5 lg:max-w-121"
        />
        <Image
          src={rightImage}
          width="4096"
          height="4096"
          alt="right-cover"
          className="mt-1.25 w-1/2 rounded-xs object-cover object-center md:mt-6 md:max-h-50 md:max-w-115 md:rounded-md lg:max-h-62.5 lg:max-w-121"
        />
      </div>
    </div>
  )
}
