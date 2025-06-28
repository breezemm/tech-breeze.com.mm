export default function AboutSection() {
  return (
    <section className="flex flex-col gap-5 sm:gap-10" id="about">
      <div className="font-neue-june bg-seasalt text-eerie-black flex h-[202px] flex-col items-center justify-center gap-2.5 sm:h-[329px] sm:gap-8">
        <h1 className="pt-12.5 text-center text-sm sm:pt-20 sm:text-xl">About breeze</h1>
        <p className="px-8.5 pb-12.5 text-center text-sm sm:px-28 sm:pb-20 sm:text-3xl">
          At Tech Breeze, we craft technology that elevates the human experience. Our tools make daily work and interactions smoother, smarter, and
          more meaningful.
        </p>
      </div>

      <div className="font-neue-june bg-seasalt text-eerie-black flex h-[202px] flex-col items-center justify-center gap-2.5 px-0 sm:h-[329px] sm:gap-8">
        <h1 className="pt-12.5 text-center text-sm sm:pt-20 sm:text-xl">Our team (breezer)</h1>
        <p className="px-8.5 pb-12.5 text-center text-sm sm:px-28 sm:pb-20 sm:text-3xl">
          We’re a remote-first team spread across Myanmar—from Myitkyina and Pyay to Pathein, Mandalay, Magway, and Yangon. This flexibility lets us
          stay agile and connect the right people to every project, wherever they are.
        </p>
      </div>
    </section>
  )
}
