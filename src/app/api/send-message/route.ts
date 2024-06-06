import { type NextRequest, NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'

export async function POST (req: NextRequest) {
  try {
    const msg = await req.json()
    const { name, phone, content } = msg
    console.log({ name, phone, content })

    if (name === null || phone === null || content === null) {
      return NextResponse.json({ message: 'empty name, phone or content' })
    }

    const messageToUpload =
  await sql`INSERT INTO messages (name, phone, content, timestamp) VALUES (${msg.name}, ${msg.phone}, ${msg.content}, CURRENT_TIMESTAMP - INTERVAL '3  hours') RETURNING *`

    console.log(messageToUpload.rows)

    const queryParams = new URLSearchParams({
      chat_id: '-1002149412259',
      text: `<strong>Enviado por ${name}.\nSu número de contacto es ${phone}.\nPetición o agradecimiento: ${content}.\nEnviado \n</strong>`,
      parse_mode: 'HTML'
    }).toString()

    const res = await fetch(`https://api.telegram.org/bot${process.env.TOKEN_BOT}/sendMessage?${queryParams}`)
    const message = await res.json()
    console.log(message)

    return NextResponse.json(message)

    // const message =
    //     await sql`INSERT INTO messages (name, phone, content, timestamp) VALUES (${msg.name}, ${msg.phone}, ${msg.content}, CURRENT_TIMESTAMP - INTERVAL '3  hours') RETURNING *`

    // console.log(message.rows)

    // return NextResponse.json(message.rows)
  } catch (error: any) {
    console.log(error)
    return NextResponse.json({ message: error.message })
  }
}
