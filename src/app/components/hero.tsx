const Hero = () => {
  return (
    <div id="hero-bg" className="relative bg-cover  bg-center rounded-b-[1.5rem] lg:h-[800px] bg-no-repeat h-[16.25rem] ">
        <div className=" flex opacity-100 justify-center pt-20 lg:h-[50px] lg:pt-56 items-center z-10 text-[#f5f5f5] ">
        <span className="lg:text-[180px] text-7xl ">b</span>
        <p className="lg:text-[120px] text-3xl tracking-wide ">ienvenida</p>
        </div>
        <div className=" flex justify-end w-fit lg:pt-5 relative max-sm:-inset-y-11 inset-x-2/4 text-[#f5f5f5] items-center ">
        <p className="lg:text-[120px] text-3xl tracking-wide ">famili</p>
        <span className="lg:text-[180px] text-7xl  relative lg:-inset-x-6 -inset-x-2">a</span>
        </div>

      </div>

  )
}

export default Hero
