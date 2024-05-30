const Hero = () => {
  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('./fake-image.png" }}>
        <div className=" flex opacity-100 justify-center h-[50px] pt-40 items-center z-10">
        <span className="text-[180px]">b</span>
        <p className="text-[140px]">ienvenido</p>
        </div>
        <div className=" flex justify-center pt-5 items-center z-10">
        <p className="text-[130px] shadow-black ">famili</p>
        <span className="text-[160px] w-24">a</span>
        </div>

        <div className="flex justify-center text-center items-center pt-56">
          <p className="text-7xl max-w-[800px]">Queremos seguir conectados!</p>
        </div>
      </div>

  )
}

export default Hero
