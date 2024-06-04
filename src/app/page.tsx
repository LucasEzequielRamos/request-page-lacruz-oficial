'use client'
import { useEffect, useRef } from 'react'
import { useAppStatus } from './hooks/useStatusApp'

// const INITIAL_CONTENT_FORM = {
//   name: '',
//   phone: '',
//   content: ''
// }
const postEmail = async (formData: FormData) => {
  const contentForm = { name: formData.get('name'), phone: formData.get('phone'), content: formData.get('content') }
  console.log(contentForm)

  const res = await fetch('/api/send-message', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(contentForm)
  }
  )
  const newData = await res.json()
  console.log(newData)
}

export default function Home () {
  const { appStatus, setAppStatus, APP_STATUS } = useAppStatus()
  const formRef = useRef<HTMLFormElement>(null)

  // const handleSubmitMessage = async(event: React.FormEvent<HTMLFormElement>)=>{
  //   event.preventDefault()

  //   if(appStatus !== APP_STATUS.ALREADY_SEND) return
  //   setAppStatus(APP_STATUS.SENDING)
  //   const res = await fetch(`/api/post-email`,{
  //     method:'POST',
  //     headers:{
  //       "content-type": "application/json"
  //     },
  //     body: JSON.stringify(contentForm)
  //   }
  //   )
  //   const newData = await res.json()
  //   console.log(newData)
  //   setData(newData)
  //   if(newData){
  //     setAppStatus(APP_STATUS.SENDED)
  //     setContentForm(INITIAL_CONTENT_FORM)
  //   }
  // }

  // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
  //   const {name, value} = event.target
  //   setContentForm({
  //     ...contentForm,
  //     [name]: value
  //   })
  // }

  useEffect(() => {
    if (formRef.current !== null) {
      const formCurrent1 = formRef.current[0] as HTMLInputElement
      const formCurrent2 = formRef.current[1] as HTMLInputElement
      const formCurrent3 = formRef.current[2] as HTMLInputElement
      console.log(formCurrent2.value)
      if (formCurrent1.value !== '' && formCurrent2.value !== '' && formCurrent3.value !== '') {
        setAppStatus(APP_STATUS.ALREADY_SEND)
      } else {
        setAppStatus(APP_STATUS.IDLE)
      }
    }
  }, [appStatus])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <div className=' flex justify-center items-center flex-col w-screen'>
      <h1 className=''>Peticiones</h1>
      <form ref={formRef} action={async (formData) => {
        await postEmail(formData)
        setAppStatus(APP_STATUS.IDLE)
        formRef.current?.reset()
      }}className='flex flex-col gap-3 text-black'>
        <input name='name' placeholder='Escribe tu nombre' type="text" onChange={() => { setAppStatus(APP_STATUS.TYPING) }} required/>
        <input name='phone' placeholder='Escribe tu numero de contacto' type="number" onChange={() => { setAppStatus(APP_STATUS.TYPING) }} required />
        <input name='content' placeholder='Escribe tu peticion' type="text" onChange={() => { setAppStatus(APP_STATUS.TYPING) }} required/>
        <button className={`bg-white text-slate-500 ${appStatus === APP_STATUS.IDLE ? 'pointer-events-none' : ''} `}
        disabled={appStatus === APP_STATUS.SENDING || appStatus === APP_STATUS.IDLE}>
          {appStatus === APP_STATUS.SENDING ? 'Enviando...' : 'Enviar'}
        </button>
      </form>
    </div>
    </main>

  )
}
