import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { email, phone } = await request.json()

    const webhookUrl = process.env.DISCORD_WEBHOOK_URL
    if (!webhookUrl) {
      return NextResponse.json({ success: false, error: 'Discord webhook URL not configured' }, { status: 500 })
    }

    const embed = {
      title: '📬 New Contact Form Submission',
      color: 0x5865f2,
      thumbnail: {
        url: 'https://cdn3.emoji.gg/emojis/4231-message.gif',
      },
      fields: [
        { name: '📧 Email', value: `\`\`\`${email || 'Not provided'}\`\`\``, inline: true },
        { name: '📱 Phone', value: `\`\`\`${phone || 'Not provided'}\`\`\``, inline: true },
      ],
      footer: {
        icon_url: 'https://cdn3.emoji.gg/emojis/4231-message.gif',
      },
      timestamp: new Date().toISOString(),
    }

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        avatar_url: 'https://cdn3.emoji.gg/emojis/4231-message.gif',
        embeds: [embed],
      }),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to submit form',
      },
      { status: 500 },
    )
  }
}
