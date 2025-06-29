export default function HomeSection() {
  return (
    <section className="flex flex-col items-center justify-center" id="home">
      <div className="bg-seasalt sm:[17.625rem] mb-[2.5rem] flex h-[41.25rem] flex-col items-center justify-center">
        <div className="max-sm:flex max-sm:flex-row max-sm:pl-80">
          {' '}
          {/*for Responsitive*/}
          <div className="mx-[10.188rem] mt-[13.5rem] mb-[13.438rem] grid h-[14.313rem] w-[59.625rem] grid-cols-2 justify-center">
            {/*left Section */}
            <div className="my-[5.438rem] mr-[27.625rem] ml-[0.5rem] flex h-[3.438rem] w-[32.5rem] flex-col items-center justify-center text-center">
              <h1 className="font-neue-june font-weight-400 text-eerie-black my-87px text-[2.813rem] max-md:pl-30 max-md:text-[2rem] max-sm:mx-2.5 max-sm:text-[2rem]">
                Crafting technology feel
              </h1>
            </div>
            {/*right Section*/}
            <div className="font-neue-june font-weight-500 text-eerie-black flex flex-col items-center justify-center text-center text-[2.813rem]">
              <p className="mr-[2.313rem] ml-[2rem] h-[3.438rem] w-[23.313rem] max-md:text-[2rem] max-sm:text-[2rem]">less Complicated</p>
              <p className="mt-[2rem] ml-[2rem] h-[3.438rem] w-[25.625rem] max-md:ml-2.5 max-md:text-[2rem] max-sm:text-[2rem]">human experience</p>
              <p className="mt-[2rem] mr-[7.563rem] mb-[13.438rem] ml-[2rem] h-[3.438rem] w-[18.063rem] max-md:text-[2rem] max-sm:text-[2rem]">
                helpful friend
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
