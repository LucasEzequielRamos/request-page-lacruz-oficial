import { sql } from '@vercel/postgres'
import { type NextRequest, NextResponse } from 'next/server'

export const runtime = 'edge'
export const dynamic = 'force-dynamic'

export async function POST (req: NextRequest) {
  const msg = await req.json()
  const { name, phone, content } = msg
  console.log({ name, phone, content })

  if (name === null || phone === null || content === null) {
    return NextResponse.json({ message: 'empty name, phone or content' })
  }

  //   const message =
  //     await sql`INSERT INTO messages (name, phone, content, timestamp) VALUES (${msg.name}, ${msg.phone}, ${msg.content}, CURRENT_TIMESTAMP - INTERVAL '3  hours') RETURNING *`;
  //   console.log({ message });
  return NextResponse.json({ msg })
//   return NextResponse.json(message.rows);
}
