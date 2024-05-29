export const postEmail = async (formData: FormData) => {
  const contentForm = { name: formData.get('name'), phone: formData.get('phone'), content: formData.get('content') }
  console.log(contentForm)

  const res = await fetch('/api/post-email', {
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
