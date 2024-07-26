const Hero = () => {
  return (
    <div id="hero-bg" className="relative bg-cover bg-center rounded-b-[1.5rem] 2xl:h-[680px] lg:h-[400px] bg-no-repeat h-[16.25rem] ">
        <div className=" flex opacity-100 justify-center pt-20 2xl:h-[50px] 2xl:pt-60 items-center z-10 text-[#f5f5f5] ">
        <span className="2xl:text-[180px] lg:text-[140px] text-7xl ">b</span>
        <p className="2xl:text-[120px] lg:text-[80px] text-3xl tracking-wide ">ienvenida</p>
        </div>
        <div className=" flex justify-end w-fit 2xl:pt-5 relative -inset-y-11 lg:-inset-y-16 2xl:inset-y-0 inset-x-2/4 text-[#f5f5f5] items-center ">
        <p className="2xl:text-[120px] lg:text-[80px] text-3xl tracking-wide ">famili</p>
        <span className="2xl:text-[180px] lg:text-[140px] text-7xl  relative 2xl:-inset-x-6 -inset-x-2">a</span>
        </div>

      </div>

  )
}

export default Hero
