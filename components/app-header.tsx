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
  { icon: Facebook, href: 'https://www.facebook.com', label: 'Facebook' },
  { icon: Linkedin, href: 'https://www.linkedin.com', label: 'LinkedIn' },
  { icon: Mail, href: 'https://www.gmail.com', label: 'Email' },
]

export default function AppHeader() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <>
      <header className="relative flex items-center justify-between px-[22px] py-[11px] md:px-[15px] md:py-[30px] lg:px-24">
        {!isNavOpen && <h2 className="text-[25px]">Tech Breeze</h2>}
        <AppNavbar className="hidden md:flex" navItems={navItems} />
        <div className="hidden items-center space-x-8 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              <link.icon />
            </a>
          ))}
        </div>
        {!isNavOpen && <Menu onClick={() => setIsNavOpen(true)} className="block md:hidden" />}
        {isNavOpen && (
          <>
            <div className="bg-eerie-black/40 absolute top-0 right-0 bottom-0 left-0 h-screen w-[100vh] md:hidden" />
            <div className="absolute top-0 left-0 z-20 flex w-full flex-col bg-white md:hidden">
              <X onClick={() => setIsNavOpen(false)} className="absolute top-0 right-0 mx-4 my-4" />
              <AppNavbar className="flex flex-col gap-[10px] px-8 py-[4rem] md:hidden" navItems={navItems} />
              <div className="mb-10 flex items-center gap-4 px-8">
                {links.map((link) => (
                  <a className="underline underline-offset-4" key={link.href} href={link.href}>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </>
        )}
      </header>
    </>
  )
}
