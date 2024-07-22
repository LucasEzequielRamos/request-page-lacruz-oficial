import { toast } from 'react-hot-toast'
import { forbiddenWords } from './consts'

export const sendMessage = async (formData: FormData, reason: string) => {
  const contentForm = { name: formData.get('name'), phone: formData.get('phone'), content: formData.get('content'), reason }

  const containsForbiddenWords = (text: string) => {
    const normalizedText = text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
    return forbiddenWords.some(word => normalizedText.includes(word))
  }

  if (containsForbiddenWords(contentForm.name as string) || containsForbiddenWords(contentForm.content as string)) {
    toast.error('Su texto contiene palabras no permitidas, como insultos. Revise nuevamente su mensaje', {
      duration: 5000,
      style: {
        padding: '16px',
        width: '250%',
        background: '#333',
        borderRadius: '99px',
        fontSize: '20px',
        color: 'white'

      },
      iconTheme: {
        primary: '#713200',
        secondary: '#FFFAEE'
      }
    })
    return
  }
  try {
    const res = await fetch('/api/send-message', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(contentForm)
    }
    )
    await res.json()
    toast.success('Peticion enviada, estamos orando por vos!',
      {
        duration: 5000,
        style: {
          padding: '16px',
          background: '#333',
          borderRadius: '99px',
          fontSize: '20px',
          color: 'white'
        },
        iconTheme: {
          primary: '#713200',
          secondary: '#FFFAEE'
        }

      }
    )
  } catch (error) {
    console.log(error)
    toast.error('Hubo un error en el envio, intentalo devuelta',
      {
        duration: 5000,
        style: {
          padding: '16px',
          background: '#333',
          borderRadius: '99px',
          fontSize: '20px',
          color: 'white'

        },
        iconTheme: {
          primary: '#713200',
          secondary: '#FFFAEE'
        }
      }
    )
  }
}
