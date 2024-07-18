const Hero = () => {
  return (
    <div className="relative bg-cover bg-center lg:h-screen h-64 " style={{ backgroundImage: "url('./igle-background.webp" }}>
        <div className=" flex opacity-100 justify-center pt-20 lg:h-[50px] items-center z-10 text-[#f5f5f5] ">
        <span className="lg:text-[180px] text-7xl ">b</span>
        <p className="lg:text-[140px] text-3xl ">ienvenida</p>
        </div>
        <div className=" flex justify-end w-fit lg:pt-5 relative max-sm:-inset-y-10 max-sm:inset-x-2/4 text-[#f5f5f5] items-center ">
        <p className="lg:text-[130px] text-3xl shadow-black ">famili</p>
        <span className="lg:text-[160px] text-7xl  relative lg:-inset-x-6 -inset-x-2">a</span>
        </div>
        <div className="flex justify-center text-center text-[#f5f5f5] items-start -mt-6 lg:pt-56">
          <p className="lg:text-7xl lg:max-w-[800px] max-w-[220px] leading-none">Queremos seguir conectados!</p>
        </div>
      </div>

  )
}

export default Hero
