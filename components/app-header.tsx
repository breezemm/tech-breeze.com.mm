'use client'

import { cn } from '@/lib/utils'
import { Facebook, Linkedin, Mail, Menu, X } from 'lucide-react'
import { useState } from 'react'
import LinkId from './links/link-id'
import LinkSocial from './links/link-social'
import { Button } from './ui/button'

const linkItems = [
  {
    label: 'Home',
    href: '#home',
  },
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Projects',
    href: '#projects',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
]

const socialItems = [
  {
    label: 'Facebook',
    href: '',
    icon: Facebook,
  },
  {
    label: 'LinkedIn',
    href: '',
    icon: Linkedin,
  },
  {
    label: 'Email',
    href: '',
    icon: Mail,
  },
]

export default function AppHeader() {
  const [navIsOpen, setNavIsOpen] = useState(0)

  return (
    <header className={cn('sticky top-0 flex w-full items-center justify-between bg-white px-5.5 md:px-8 lg:px-23.5', navIsOpen ? 'flex-col' : '')}>
      <div className="flex h-21.25 w-full items-center justify-between lg:w-auto">
        <h2 className={cn('text-sm font-medium transition-all md:text-xl lg:text-2xl', !navIsOpen ? 'block' : 'invisible')}>Tech Breeze</h2>

        <div className="block lg:hidden">
          {navIsOpen ? (
            <Button className="h-[auto!important] bg-transparent p-[0!important] shadow-none hover:bg-transparent" onClick={() => setNavIsOpen(0)}>
              <X className="text-eerie-black size-5 transition-all md:size-7" />
            </Button>
          ) : (
            <Button className="h-[auto!important] bg-transparent p-[0!important] shadow-none hover:bg-transparent" onClick={() => setNavIsOpen(1)}>
              <Menu className="text-eerie-black size-5 transition-all md:size-7" />
            </Button>
          )}
        </div>
      </div>

      <div className={cn('hidden space-x-8 text-xl font-medium lg:flex', navIsOpen ? 'flex w-full flex-col space-y-2.5 p-8 text-sm' : '')}>
        {linkItems.map((items) => (
          <LinkId key={items.label} label={items.label} href={items.href} />
        ))}
      </div>

      <div className={cn('hidden space-x-8 lg:flex', navIsOpen ? 'text-xss flex w-full space-x-7.5 pb-5 pl-8' : '')}>
        {socialItems.map((items) => (
          <LinkSocial key={items.label} label={items.label} href={items.href} icon={items.icon} className="stroke-1.5" />
        ))}
      </div>
    </header>
  )
}
