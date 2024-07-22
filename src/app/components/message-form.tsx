'use client'
import React, { useEffect, useRef } from 'react'
import { postEmail } from '../lib/actions'
import { useAppStatus } from '../hooks/use-status-app'

const MessageForm = ({ reason, setReason }: { reason: string, setReason: React.Dispatch<React.SetStateAction<string | undefined>> }) => {
  const { appStatus, setAppStatus, APP_STATUS } = useAppStatus()
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    const isFormComplete = formRef.current && formRef.current.checkValidity()
    const newAppStatus = isFormComplete ? APP_STATUS.ALREADY_SEND : APP_STATUS.IDLE
    setAppStatus(newAppStatus)
  }, [formRef.current, appStatus])

  const isReasonPedido = reason === 'pedido' ? 1 : reason === 'testimonio' ? 2 : 3

  return (
    <section className='flex bg-white/40 items-center justify-center fixed top-0 left-0 h-screen w-screen flex-col'>
    <div className='flex  flex-col lg:min-h-[90%] lg:px-12 px-5 lg:w-7/12 w-10/12 bg-[#1C1D1E] rounded-[20px] lg:rounded-[90px] text-center text-white'>
    <button onClick={() => { setReason('') }} className='lg:pt-10 pt-3 lg:pr-4 w-full flex justify-end '><img src="x.webp" className='max-sm:size-3' alt="x icon" /></button>
    <h2 className='text-[#f5f5f5] font-extrabold lg:pb-12 lg:pt-10 pt-3 pb-5 w-full lg:text-7xl text-[1.375rem]'>{isReasonPedido === 1 ? 'QUEREMOS ORAR CON VOS!' : isReasonPedido === 2 ? 'CELEBREMOS JUNTOS!' : 'ACTUALIZACIÓN DE PEDIDO'}</h2>
    <form ref={formRef} action={async (formData) => {
      await postEmail(formData)
      setAppStatus(APP_STATUS.IDLE)
      formRef.current?.reset()
      setReason('')
    }}className='flex flex-col gap-5 w-full pb-5'>
      <div className='flex lg:[&>input]:py-9 [&>input]:px-3 [&>input]:rounded-[50px] [&>input]:border-[#f5f5f5] [&>input]:border-solid [&>input]:border-4 [&>input]:bg-[#f5f5f5] [&>input]:text-black lg:gap-7 gap-1  '>
        <input aria-label='name-input' className='w-3/5 focus-visible:outline-none ' name='name' maxLength={20} placeholder='Nombre y apellido' type='text' onChange={() => { setAppStatus(APP_STATUS.TYPING) }} required/>
        <input aria-label='phone-input' className='w-2/5 focus-visible:outline-none ' name='phone' placeholder='Telefono' type='number' onChange={() => { setAppStatus(APP_STATUS.TYPING) }} required />
      </div>
      <textarea aria-label='content-input' className='lg:h-[300px] h-52 lg:pt-14 px-3 pt-4 text-clip lg:rounded-[50px] rounded-[20px] text-black bg-[#f5f5f5] border-2 border-[#f5f5f5] border-solid focus-visible:outline-none' name='content' placeholder={`Escribe ${isReasonPedido === 1 ? `tu ${reason} de oracion` : isReasonPedido === 3 ? `la ${reason} de tu pedido` : `tu ${reason}`} aqui...`} onChange={() => { setAppStatus(APP_STATUS.TYPING) }} required/>
      <div className='w-full flex justify-center'>
      <button className={`text-[#f5f5f5] flex text-center justify-center w-full lg:text-4xl text-[1.375rem] lg:rounded-[50px] rounded-[30px] lg:py-5 py-2 bg-[#EF8100] lg:w-[30rem]  ${appStatus === APP_STATUS.IDLE ? 'pointer-events-none' : ''} `}
      disabled={appStatus === APP_STATUS.SENDING || appStatus === APP_STATUS.IDLE}>
        {appStatus === APP_STATUS.SENDING ? 'Enviando...' : `ENVIAR ${reason.toUpperCase()}`}
      </button>
      </div>
    </form>
  </div>
    </section>
  )
}

export default MessageForm
