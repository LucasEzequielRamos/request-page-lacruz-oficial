const MainSection = ({ setMotif }: { setMotif: React.Dispatch<React.SetStateAction<string>> }) => {
  return (
    <main className="flex flex-col gap-24 my-[100px]">
        <div className="flex justify-center items-center w-full">
          <img src="./arrow-down.webp" alt="" />
          </div>
          <div className="flex justify-around items-center">
            <div className="flex flex-col text-center gap-12">
            <h2 className="text-[88px] leading-none w-9/12 m-auto mt-0">QUEREMOS ORAR POR VOS!</h2>
              <p className="text-3xl w-7/12 m-auto mt-0">Entendemos que dos o tres reunidos orando por una causa, es ahi donde el Señor habita.</p>
              <p className="text-3xl w-7/12 m-auto -mt-10">Por eso queremos conocer tu situacion pra poder orar sobre eso</p>
              <button onClick={() => { setMotif('Peticion') }} className="py-7 px-8 bg-black  m-auto text-white rounded-[90px] text-4xl">PEDIDO DE ORACION</button>
              <p className="font-bold -mt-4">HACE CLICK PARA INGRESAR TU PEDIDO</p>
            </div>
            <span className="h-[580px] justify-center border-l-4 border-black"></span>
            <div className="flex flex-col text-center gap-12">
              <h2 className="text-[88px] leading-none w-9/12 m-auto mt-0">UN CORAZÓN AGRADECIDO</h2>
              <p className="text-3xl w-7/12 m-auto mt-0">De la misma manera que queremos estar en la necesidad, queremos estar en tu alegría!</p>
              <p className="text-3xl w-7/12 m-auto -mt-10">Contanos lo que Dios hizo en tu vida!</p>
              <button onClick={() => { setMotif('Agradecimiento') }} className="py-7 px-8 bg-black  m-auto text-white rounded-[90px] text-4xl">PEDIDO DE ORACION</button>
              <p className="font-bold -mt-4">HACE CLICK PARA INGRESAR TU PEDIDO</p>
            </div>
          </div>
      </main>
  )
}

export default MainSection
