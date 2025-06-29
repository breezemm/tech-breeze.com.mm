export default function HomeSection() {
  return (
    <section className="bg-seasalt lg:130 flex h-70.5 flex-col items-center justify-center transition-all sm:h-100 xl:h-165" id="home">
      <div className=" text-eerie-black flex items-center space-x-2.5 text-nowrap transition-all sm:space-x-5 md:space-x-6 md:text-2xl lg:space-x-8 lg:text-[2.813rem] xl:text-5xl">
        <div>
          <h1>Crafting technology feel</h1>
        </div>

        <div className="flex flex-col space-y-2.5 font-medium sm:space-y-3 lg:space-y-8">
          <p>less complicated</p>
          <p>human experience</p>
          <p>useful friend</p>
        </div>
      </div>
    </section>
  )
}
