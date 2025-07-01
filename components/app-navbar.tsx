'use client'
import { cn } from '@/lib/utils'
import { NavItemType } from '@/types'
import Link from 'next/link'

type AppNavbarType = {
  hash: string
  navItems: NavItemType[]
  setHash: (hash: string) => void
  className: string
  onClick?: () => void
}

export default function AppNavbar({ hash, setHash, navItems, className, onClick }: AppNavbarType) {
  return (
    <nav>
      <ul className={cn('hidden space-x-8 lg:flex', className)}>
        {navItems.map((navItem: NavItemType) => {
          return (
            <li key={navItem.title} onClick={onClick}>
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
