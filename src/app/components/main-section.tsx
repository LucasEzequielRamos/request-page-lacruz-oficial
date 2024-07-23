const MainSection = ({ setReason, REASONS }: { setReason: React.Dispatch<React.SetStateAction<string | undefined>>, REASONS: { REQUEST: string, GRATITUDE: string, UPDATE: string } }) => {
  return (
    <main className="flex flex-col  lg:mb-40 mb-20  ">
        <div className="flex justify-center py-10 items-center w-full">
          <img className="lg:h-14 h-4 lg:mt-16" src="./arrow-down.webp" alt="Imagen de flecha para abajo" />
          </div>
          <div className="flex flex-col lg:flex-row items-center lg:items-end ">
            <div className="flex flex-col text-center lg:w-1/2  ">
            <h2 className=" lg:text-[5.5rem] text-[2.5rem] leading-[0.85] w-10/12 lg:mb-11 mb-5 m-auto mt-0">QUEREMOS <br/> ORAR CON VOS</h2>
              <p className="lg:text-[1.7rem] text-[0.875rem] w-10/12 lg:w-7/12  m-auto mt-0 pb-12 lg:pb-24">Si nos ponemos de acuerdo en oración pidiéndole a
              Dios lo que necesitamos, El lo hará. <br/> (Mateo 18:19)</p>
              <button onClick={() => { setReason(REASONS.REQUEST) }} className="py-3   lg:py-7 bg-[#1C1D1E] w-3/4 lg:w-2/4  m-auto text-white rounded-[90px] lg:text-4xl text-2xl tracking-wide">PEDIDOS DE ORACIÓN</button>
              <h3 className=" pt-2 max-sm:text-xs text-[#1C1D1E]/70">HACE CLICK PARA INGRESAR TU PEDIDO</h3>
            </div>
            <div className="lg:hidden flex flex-col items-center mt-20">
          <h3 className="font-bold underline text-black text-sm pb-2 w-full">¿En qué estado se encuentra tu pedido de oración?</h3>
          <p className="pb-9 text-center text-sm">Seguimos orando juntos. <br /> Contanos en qué estado se encuentra tu pedido.</p>
          <button onClick={() => { setReason(REASONS.UPDATE) }} className="py-3  bg-[#ef8100] px-5 m-auto text-white rounded-[90px] text-[1rem] tracking-wide ">ACTUALIZACIÓN DE PEDIDO</button>
          <h3 className=" pt-2 text-[0.7rem] text-[#1C1D1E]/70 text-xs">HACE CLICK PARA INGRESAR TU ACTUALIZACIÓN</h3>

            </div>
            <span className="lg:h-[520px] w-72 lg:w-0 lg:border-l-4 border-t-[1px] lg:border-t-0 mt-16  mb-9 lg:mb-0 lg:mt-28 border-black"></span>
            <div className="flex flex-col text-center lg:w-1/2">
              <h2 className=" lg:text-[5.5rem] text-[2.5rem] leading-[0.85]  m-auto mt-0 lg:pb-24 pb-5">TESTIMONIOS</h2>
              <p className="lg:text-[1.7rem] text-[0.875rem] lg:w-7/12 w-10/12 m-auto mt-0 pb-12">Dios es GRANDE, AMOROSO y FIEL. <br />Demos gracias por sus bondades en todo tiempo y recordemos lo que ya hizo en nuestras vidas. <br />(Salmos 100:4-5)</p>
              <button onClick={() => { setReason(REASONS.GRATITUDE) }} className="py-3 lg:py-7  bg-[#1C1D1E] w-3/4 lg:w-2/4  m-auto text-white rounded-[90px] lg:text-4xl tracking-wide text-2xl">TESTIMONIOS</button>
              <h3 className="max-sm:text-xs pt-2 text-[#1C1D1E]/70">HACE CLICK PARA INGRESAR TU AGRADECIMIENTO</h3>
            </div>
          </div>
          <div className="lg:flex hidden flex-col items-center mt-20">
          <h3 className="font-bold underline text-black text-5xl pb-10">¿En qué estado se encuentra tu pedido de oración?</h3>
          <p className="pb-10 text-center text-[2.5rem]">Seguimos orando juntos. <br /> Contanos en qué estado se encuentra tu pedido.</p>
          <button onClick={() => { setReason(REASONS.UPDATE) }} className="py-6  bg-[#ef8100]  w-2/6  m-auto text-white rounded-[90px] text-[2.5rem] tracking-wide ">ACTUALIZACIÓN DE PEDIDO</button>
          <h3 className=" pt-3 text-[#1C1D1E]/70">HACE CLICK PARA INGRESAR TU ACTUALIZACIÓN</h3>
          </div>
      </main>
  )
}

export default MainSection
