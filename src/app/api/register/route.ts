import { NextResponse } from 'next/server'
import { verifyAccessCookie } from '@/lib/pilot-access'

export async function POST(request: Request) {
  if (!(await verifyAccessCookie())) {
    return NextResponse.json(
      { success: false, error: 'Unauthorized' },
      { status: 401 }
    )
  }

  const registerUrl = process.env.PLATFORM_REGISTER_URL
  if (!registerUrl) {
    return NextResponse.json(
      { success: false, error: 'Server misconfigured' },
      { status: 500 }
    )
  }

  const body = await request.json()

  const res = await fetch(registerUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })

  const data = await res.json()
  return NextResponse.json(data, { status: res.status })
}
