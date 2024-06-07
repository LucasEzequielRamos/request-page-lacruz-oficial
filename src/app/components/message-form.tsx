'use client'
import React, { useEffect, useRef } from 'react'
import { postEmail } from '../lib/actions'
import { useAppStatus } from '../hooks/use-status-app'


const MessageForm = ({ motif, setMotif }: { motif: string, setMotif: React.Dispatch<React.SetStateAction<string>> }) => {
  const { appStatus, setAppStatus, APP_STATUS } = useAppStatus()
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    const isFormComplete = formRef.current && formRef.current.checkValidity()
    const newAppStatus = isFormComplete ? APP_STATUS.ALREADY_SEND : APP_STATUS.IDLE
    setAppStatus(newAppStatus)
  }, [formRef.current, appStatus])

  return (
    <section className='flex bg-black/90 items-center justify-center fixed top-0 left-0 h-screen w-screen flex-col'>
    <div className='flex items-center flex-col px-12 w-7/12 bg-[#d9d9d9] rounded-[90px] text-center text-white'>
    <button onClick={() => { setMotif('') }} className='text-black text-6xl font-bold pt-4 w-full flex justify-end mr-24'>x</button>
    <h2 className='text-black font-extrabold pb-12 pt-10 w-full text-7xl'>QUEREMOS ORAR POR VOS!</h2>
    <form ref={formRef} action={async (formData) => {
      await postEmail(formData)
      setAppStatus(APP_STATUS.IDLE)
      formRef.current?.reset()
      setMotif('')
    }}className='flex flex-col gap-5 w-full pb-6'>
      <div className='flex [&>input]:py-9 [&>input]:px-4 [&>input]:rounded-full [&>input]:border-[#f5f5f5] [&>input]:border-solid [&>input]:border-4 [&>input]:bg-black gap-7  '>
        <input aria-label='name-input' className='w-3/5 focus-visible:outline-none autofill:bg-black' name='name' maxLength={20} placeholder='Escribe tu nombre' type='text' onChange={() => { setAppStatus(APP_STATUS.TYPING) }} required/>
        <input aria-label='phone-input' className='w-2/5 focus-visible:outline-none ' name='phone' placeholder='Escribe tu numero de contacto' type='number' onChange={() => { setAppStatus(APP_STATUS.TYPING) }} required />
      </div>
      <textarea aria-label='content-input' className='h-[300px] pt-14 px-12 text-clip rounded-[90px] bg-black border-2 border-[#f5f5f5] border-solid focus-visible:outline-none' name='content' placeholder={`Escribe tu ${motif}`} onChange={() => { setAppStatus(APP_STATUS.TYPING) }} required/>
      <div className='w-full flex justify-center'>
      <button className={`text-[#f5f5f5] flex text-center justify-center w-1/3 text-5xl rounded-[40px] py-6 bg-black   ${appStatus === APP_STATUS.IDLE ? 'pointer-events-none' : ''} `}
      disabled={appStatus === APP_STATUS.SENDING || appStatus === APP_STATUS.IDLE}>
        {appStatus === APP_STATUS.SENDING ? 'Enviando...' : 'Enviar'}
      </button>
      </div>
      <small className='text-black font- text-lg'>Completa todos los campos para enviar el pedido</small>
    </form>
  </div>
    </section>
  )
}

export default MessageForm
