'use client'
import AppNavbar from '@/components/app-navbar'
import { Facebook, Linkedin, Mail, Menu, X } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { title: 'Home', href: '/#home' },
  { title: 'About', href: '/#about' },
  { title: 'Projects', href: '/#projects' },
  { title: 'Contact', href: '/#contact' },
]

const links = [
  { icon: Facebook, href: 'https://www.facebook.com/techbreezemm', label: 'Facebook' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/breezemm/posts/?feedView=all', label: 'LinkedIn' },
  { icon: Mail, href: 'https://mail.google.com/mail/?view=cm&fs=1&to=hello@tech-breeze.com.mm', label: 'Email' },
]

export default function AppHeader() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <header className="sticky flex h-21.25 w-full items-center justify-between bg-white px-5.5 md:px-5 lg:px-23.5">
      <h2 className="text-sm font-medium transition-all sm:text-2xl">Tech Breeze</h2>
      <AppNavbar className="hidden md:flex" navItems={navItems} />
      <div className="hidden items-center space-x-8 md:flex">
        {links.map((link) => (
          <a target="_blank" rel="noopener noreferrer" className="hover:bg-seasalt text-eerie-black p-2" key={link.href} href={link.href}>
            <link.icon className="stroke-1.5" />
          </a>
        ))}
      </div>
      {!isNavOpen && <Menu onClick={() => setIsNavOpen(true)} className="block size-5 md:hidden" />}
      {isNavOpen && (
        <>
          <div
            onClick={() => setIsNavOpen(false)}
            className="bg-eerie-black/40 fixed top-0 right-0 bottom-0 left-0 z-50 h-screen w-[100vh] md:hidden"
          />
          <div onClick={() => setIsNavOpen(false)} className="fixed top-0 left-0 z-50 flex w-full flex-col bg-white md:hidden">
            <X onClick={() => setIsNavOpen(false)} className="absolute top-0 right-0 mx-4 my-4" />
            <AppNavbar className="flex flex-col gap-2.5 px-8 py-17 md:hidden" navItems={navItems} />
            <div className="mb-10 flex items-center gap-4 px-8">
              {links.map((link) => (
                <a target="_blank" rel="noopener noreferrer" className="underline underline-offset-4" key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </>
      )}
    </header>
  )
}
