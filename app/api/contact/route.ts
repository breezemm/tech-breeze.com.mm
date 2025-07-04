import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { email, phone } = await request.json()

    const response = await fetch('https://script.google.com/macros/s/AKfycbwSgna0le0bZKzEb8GxHJ-aP5igeLrSF9YSfSN4_-qHc3RHswpNVdP8RfNmUkdz_Kuh/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, phone }),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result = await response.json()
    return NextResponse.json({ success: true, result })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to submit form', Errordetail: error }, { status: 500 })
  }
}
