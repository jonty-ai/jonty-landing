import { createHmac, timingSafeEqual } from 'crypto'
import { cookies } from 'next/headers'

const COOKIE_NAME = 'pilot_access'
const MAX_AGE = 60 * 60 // 1 hour

function getAccessToken(password: string): string {
  // Rotates every hour — tied to the password so it can't be forged
  const hour = Math.floor(Date.now() / (1000 * 60 * 60))
  return createHmac('sha256', password).update(String(hour)).digest('hex')
}

export async function setAccessCookie(): Promise<void> {
  const password = process.env.PILOT_ACCESS_PASSWORD
  if (!password) return

  const token = getAccessToken(password)
  const jar = await cookies()
  jar.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: MAX_AGE,
    path: '/',
  })
}

export async function verifyAccessCookie(): Promise<boolean> {
  const password = process.env.PILOT_ACCESS_PASSWORD
  if (!password) return false

  const jar = await cookies()
  const token = jar.get(COOKIE_NAME)?.value
  if (!token) return false

  const expected = getAccessToken(password)

  // Timing-safe comparison to prevent timing attacks
  try {
    return timingSafeEqual(Buffer.from(token), Buffer.from(expected))
  } catch {
    return false
  }
}
