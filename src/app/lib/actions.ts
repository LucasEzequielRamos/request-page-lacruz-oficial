import { toast } from 'react-hot-toast'

export const postEmail = async (formData: FormData) => {
  const contentForm = { name: formData.get('name'), phone: formData.get('phone'), content: formData.get('content') }
  console.log(contentForm)
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
