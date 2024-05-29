// import { sql } from '@vercel/postgres'
import { type NextRequest, NextResponse } from 'next/server'

export const runtime = 'edge'
export const dynamic = 'force-dynamic'

export async function POST (req: NextRequest) {
  try {
    const msg = await req.json()
    const { name, phone, content } = msg
    console.log({ name, phone, content })

    if (name === null || phone === null || content === null) {
      return NextResponse.json({ message: 'empty name, phone or content' })
    }

    return NextResponse.json(msg)

    // const message =
    //     await sql`INSERT INTO messages (name, phone, content, timestamp) VALUES (${msg.name}, ${msg.phone}, ${msg.content}, CURRENT_TIMESTAMP - INTERVAL '3  hours') RETURNING *`

    // console.log(message.rows)

    // return NextResponse.json(message.rows)
  } catch (error: any) {
    console.log(error)
    return NextResponse.json({ message: error.message })
  }
}
