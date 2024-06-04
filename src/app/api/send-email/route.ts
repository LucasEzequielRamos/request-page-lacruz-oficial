import { type NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST (req: NextRequest) {
  try {
    const msg = await req.json()
    const { name, phone, content } = msg
    console.log({ name, phone, content })

    if (name === null || phone === null || content === null) {
      return NextResponse.json({ message: 'empty name, phone or content' })
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS
      },
      tls: {
        rejectUnauthorized: false
      }
    })

    const mailOptions = await transporter.sendMail({
      from: '"Pedidos de oracion" <no-reply@example.com> ',
      to: 'intercesores@lacruz.com',
      bcc: [
        'lucaseramos13@gmail.com',
        'lucasel.mejor.capo98.1@gmail.com'
      ],
      subject: 'Pedidos de oracion o agradecimientos',
      html: `<strong>Enviado por ${name}.<br>Su número de contacto es ${phone}.<br>Petición o agradecimiento: ${content}.<br>Enviado<br><br></strong>`
    })

    console.log(mailOptions)
    return NextResponse.json(mailOptions)

    // const message =
    //     await sql`INSERT INTO messages (name, phone, content, timestamp) VALUES (${msg.name}, ${msg.phone}, ${msg.content}, CURRENT_TIMESTAMP - INTERVAL '3  hours') RETURNING *`

    // console.log(message.rows)

    // return NextResponse.json(message.rows)
  } catch (error: any) {
    console.log(error)
    return NextResponse.json({ message: error.message })
  }
}
