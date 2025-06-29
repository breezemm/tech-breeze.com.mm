'use client'

import { Form } from '@/components/form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function ContactSection() {
  const handleSubmit = async (e: React.FormEvent) => {
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
    <>
      <div id="contact" className="bg-seasalt flex min-h-[400px] flex-col items-center justify-center">
        <h1 className="font-neue-june mb-2 text-[1.25rem]">Contact Us</h1>
        <div className="text-start">
          <h2 className="font-neue-june mb-[1.5rem] text-[1.875rem] font-bold">Let&apos;s craft together!</h2>
          <Form className="w-full max-w-md space-y-2" onSubmit={handleSubmit} style={{ pointerEvents: 'auto' }}>
            <Input
              type="email"
              name="email"
              placeholder="Enter your Email"
              required
              style={{ pointerEvents: 'auto', zIndex: 100 }}
              className="relative z-10"
            />
            <Input
              type="tel"
              name="phone"
              placeholder="Enter your Phone Number"
              required
              style={{ pointerEvents: 'auto', zIndex: 100 }}
              className="relative z-10"
            />
            <Button
              type="submit"
              className="bg-eerie-black relative z-10 w-full text-white hover:opacity-90"
              size="lg"
              style={{ pointerEvents: 'auto', zIndex: 100 }}
            >
              Send Message
            </Button>
          </Form>
        </div>
      </div>
    </>
  )
}
