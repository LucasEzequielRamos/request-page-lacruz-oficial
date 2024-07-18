const MainSection = ({ setReason, REASONS }: { setReason: React.Dispatch<React.SetStateAction<string | undefined>>, REASONS: { REQUEST: string, GRATITUDE: string } }) => {
  return (
    <main className="flex flex-col lg:gap-24 gap-14  lg:my-[100px] my-11  ">
        <div className="flex justify-center items-center w-full">
          <img className="lg:h-auto h-3" src="./arrow-down.webp" alt="Imagen de flecha para abajo" />
          </div>
          <div className="flex max-sm:flex-col gap-16 justify-around items-center">
            <div className="flex flex-col text-center lg:gap-12 gap-10">
            <h2 className="lg:text-[5.5rem] text-4xl leading-none w-8/12 m-auto mt-0">QUEREMOS ORAR POR VOS!</h2>
              <p className="lg:text-3xl text-sm w-9/12 m-auto mt-0">Entendemos que dos o tres reunidos orando por una causa, es ahi donde el Señor habita.</p>
              <p className="lg:text-3xl text-sm w-9/12 m-auto -mt-10">Por eso queremos conocer tu situacion para poder orar sobre eso</p>
              <button onClick={() => { setReason(REASONS.REQUEST) }} className="py-3 bg-black w-[70%] m-auto text-white rounded-[90px] lg:text-4xl text-2xl">PEDIDO DE ORACION</button>
              <h3 className="-mt-4 max-sm:text-xs text-[#1C1D1E]/70">HACE CLICK PARA INGRESAR TU PEDIDO</h3>
            </div>
            <span className="lg:h-[580px] max-sm:w-72 justify-center lg:border-l-4 max-sm:border-t-[1px] border-black"></span>
            <div className="flex flex-col text-center gap-12">
              <h2 className="lg:text-[5.5rem] text-4xl leading-none w-8/12 m-auto mt-0">UN CORAZÓN AGRADECIDO</h2>
              <p className="lg:text-3xl text-sm w-9/12 m-auto mt-0">De la misma manera que queremos estar en la necesidad, queremos estar en tu alegría!</p>
              <p className="lg:text-3xl text-sm w-9/12 m-auto -mt-10">Contanos lo que Dios hizo en tu vida!</p>
              <button onClick={() => { setReason(REASONS.GRATITUDE) }} className="py-3 bg-black w-[70%] m-auto text-white rounded-[90px] lg:text-4xl text-2xl">AGRADECIMIENTO</button>
              <h3 className="-mt-4 max-sm:text-xs text-[#1C1D1E]/70">HACE CLICK PARA INGRESAR TU AGRADECIMIENTO</h3>
            </div>
          </div>
      </main>
  )
}

export default MainSection
