const MainSection = ({ setReason, REASONS }: { setReason: React.Dispatch<React.SetStateAction<string | undefined>>, REASONS: { REQUEST: string, GRATITUDE: string } }) => {
  return (
    <main className="flex flex-col    lg:mb-[170px] mb-11  ">
        <div className="flex justify-center py-10 items-center w-full">
          <img className="lg:h-14 h-4 lg:mt-16" src="./arrow-down.webp" alt="Imagen de flecha para abajo" />
          </div>
          <div className="flex max-sm:flex-col items-center lg:items-end lg:min-h-[620px]">
            <div className="flex flex-col text-center lg:w-1/2  ">
            <h2 className="lg:h-60 lg:text-[5.5rem] text-[2.5rem] leading-none w-9/12 lg:mb-11 mb-5 m-auto mt-0">QUEREMOS ORAR POR VOS!</h2>
              <p className="lg:text-[1.7rem] text-[0.875rem] w-11/12 lg:w-7/12  m-auto mt-0 pb-4">Entendemos que dos o tres reunidos <br/> orando por una causa, es ahi donde el Señor habita.</p>
              <p className="lg:text-[1.7rem] text-[0.875rem] w-10/12 lg:w-7/12 m-auto lg:pb-0 pb-12">Por eso queremos conocer tu situacion para poder orar sobre eso</p>
              <button onClick={() => { setReason(REASONS.REQUEST) }} className="py-3   lg:py-7 bg-[#1C1D1E] w-[68%] lg:w-2/4 lg:mt-12 m-auto text-white rounded-[90px] lg:text-4xl text-2xl tracking-wide">PEDIDOS DE ORACIÓN</button>
              <h3 className="lg:pt-5 pt-2 max-sm:text-xs text-[#1C1D1E]/70">HACE CLICK PARA INGRESAR TU PEDIDO</h3>
            </div>
            <span className="lg:h-[480px] max-sm:w-72 justify-center lg:border-l-4 max-sm:border-t-[1px] max-sm:mt-16 max-sm:mb-9 lg:mt-28 border-black"></span>
            <div className="flex flex-col text-center lg:w-1/2">
              <h2 className="lg:h-60 lg:text-[5.5rem] text-[2.5rem] leading-[0.85] w-9/12 m-auto mt-0 lg:mb-11 pb-5"> <strong className="text-[1.875rem] lg:text-[4.5rem]">TENEMOS</strong> <br/> UN CORAZÓN AGRADECIDO</h2>
              <p className="lg:text-[1.7rem] text-[0.875rem] lg:w-7/12 w-10/12 m-auto mt-0 pb-4">De la misma manera que queremos<br/> estar en la necesidad, queremos estar<br/> en tu alegría!</p>
              <p className="lg:text-[1.7rem] text-[0.875rem] w-9/12 m-auto lg: pb-12">Contanos lo que Dios hizo en tu vida!</p>
              <button onClick={() => { setReason(REASONS.GRATITUDE) }} className="py-3 lg:py-7  bg-[#1C1D1E] w-[70%] lg:w-2/4 lg:mt-12 m-auto text-white rounded-[90px] lg:text-4xl tracking-wide text-2xl">AGRADECIMIENTOS</button>
              <h3 className="lg:pt-5 max-sm:text-xs pt-2 text-[#1C1D1E]/70">HACE CLICK PARA INGRESAR TU AGRADECIMIENTO</h3>
            </div>
          </div>
      </main>
  )
}

export default MainSection
