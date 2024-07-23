import { type NextRequest, NextResponse } from 'next/server'
// import { sql } from '@vercel/postgres'

export async function POST (req: NextRequest) {
  try {
    const msg = await req.json()
    const { name, phone, content, reason } = msg

    if (name === null || phone === null || content === null) {
      return NextResponse.json({ message: 'empty name, phone or content' })
    }
    const dateSended = new Date().toLocaleString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires' })

    // const messageToUpload =
    // await sql`INSERT INTO messages (name, phone, content, timestamp) VALUES (${msg.name}, ${msg.phone}, ${msg.content}, CURRENT_TIMESTAMP - INTERVAL '3  hours') RETURNING *`

    const queryParams = new URLSearchParams({
      chat_id: '-1002149412259',
      text: `<a>Enviado por: <strong> ${name}</strong>.\n\nSu número de contacto es: <strong>${phone}</strong>.\n\nMotivo: <strong>${reason}</strong>.\n\nMensaje enviado: <strong>${content}</strong>.\n\nEnviado: <strong>${dateSended}</strong> \n\n</a>`,
      parse_mode: 'HTML'
    }).toString()

    // const res = await fetch(`https://api.telegram.org/bot${process.env.TOKEN_BOT}/sendMessage?${queryParams}`)
    // const message = await res.json()

    // console.log(messageToUpload.rows)
    // console.log(message)
    return NextResponse.json(msg)
  } catch (error: any) {
    console.log(error)
    return NextResponse.json({ message: error.message })
  }
}
