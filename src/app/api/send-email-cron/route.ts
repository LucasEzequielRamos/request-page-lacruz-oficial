import { NextResponse } from 'next/server'
import { db } from '@vercel/postgres'

export const runtime = 'edge'
export const dynamic = 'force-dynamic'

const RESEND_API_KEY = process.env.RESEND_API_KEY

interface email {
  name: string
  phone: string
  content: string
  timestamp: string
}
export async function GET () {
  const client = await db.connect()

  const { rows: messages } = await client.sql`
  SELECT *
  FROM messages
  WHERE timestamp >= CURRENT_TIMESTAMP - INTERVAL '24 hours';
  `

  console.log(messages)

  const mail = (email: email) => {
    return `Enviado por ${email.name}.<br>Su número de contacto es ${email.phone}.<br>Petición o agradecimiento: ${email.content}.<br>Enviado ${email.timestamp}.<br><br>`
  }

  const listOfMails = messages.map((message) => {
    return mail(message as email)
  })

  console.log(...listOfMails)

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${RESEND_API_KEY}`
    },
    body: JSON.stringify({
      from: 'Bot de peticiones <onboarding@resend.dev>',
      to: ['lucaseramos13@gmail.com'],
      subject: 'Test from next',
      html: `<strong>${listOfMails.join('')}</strong>`
    })
  })

  const data = await res.json()
  return NextResponse.json({ listOfMails, data })
}
