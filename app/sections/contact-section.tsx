'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function ContactSection() {
  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbwSgna0le0bZKzEb8GxHJ-aP5igeLrSF9YSfSN4_-qHc3RHswpNVdP8RfNmUkdz_Kuh/exec',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: formData.get('email'),
            phone: formData.get('phone'),
          }),
          redirect: 'follow',
          mode: 'no-cors',
        },
      )

      if (!response.ok) throw new Error('Network response was not ok')

      const result = await response.json()
      console.log('Success:', result)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <section id="contact" className="bg-seasalt mb-5 justify-center px-19.5 py-7.5 sm:mb-10">
      <div className="mx-auto w-full max-w-sm">
        <h1 className="mb-4 text-center lg:mb-8 lg:text-xl">Contact us</h1>
        <div className="text-start lg:mx-auto">
          <h2 className="mb-4 text-sm font-medium md:text-xl lg:mx-8 lg:text-3xl">Let&apos;s craft together!</h2>

          <form onSubmit={submit} className="text-seasalt flex flex-col items-center space-y-1.25 md:space-y-2 lg:space-y-4">
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="text-xss text-eerie-black h-10 lg:h-10 lg:w-xs lg:text-sm"
              autoComplete="email"
              required
            />
            <Input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              className="text-xss text-eerie-black h-10 lg:h-10 lg:w-xs lg:text-sm"
              autoComplete="tel"
              required
            />

            <Button type="submit" className="bg-eerie-black text-xss mt-2 h-10 w-full lg:w-xs lg:text-sm">
              Sent
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
