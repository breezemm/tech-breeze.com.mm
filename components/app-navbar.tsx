'use client'
import { cn } from '@/lib/utils'
import { NavItemType } from '@/types'
import Link from 'next/link'
import { useState } from 'react'

export default function AppNavbar({ navItems = [], className }: { navItems: NavItemType[]; className?: string }) {
  const [hash, setHash] = useState('/#home')

  return (
    <nav>
      <ul className={cn('hidden space-x-8 lg:flex', className)}>
        {navItems.map((navItem: NavItemType) => {
          return (
            <li key={navItem.title}>
              <Link
                href={navItem.href}
                onClick={() => setHash(navItem.href)}
                scroll
                className={cn('cursor-pointer text-xl', hash === navItem.href && 'border-eerie-black border-b-2')}
              >
                {navItem.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
