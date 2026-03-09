import { NextResponse } from 'next/server'
import { setAccessCookie } from '@/lib/pilot-access'

export async function POST(request: Request) {
  const { password } = await request.json()

  const pilotPassword = process.env.PILOT_ACCESS_PASSWORD
  if (!pilotPassword) {
    return NextResponse.json(
      { success: false, error: 'Server misconfigured' },
      { status: 500 }
    )
  }

  if (password !== pilotPassword) {
    return NextResponse.json(
      { success: false, error: 'Invalid password' },
      { status: 401 }
    )
  }

  await setAccessCookie()

  return NextResponse.json({ success: true })
}
