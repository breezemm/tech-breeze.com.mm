'use client'

import { cn } from '@/lib/utils'
import { NavItemType } from '@/types'
import { usePathname } from 'next/navigation'

export default function Navbar({ navItems = [] }: { navItems: NavItemType[] }) {
  const pathname = usePathname()

  return (
    <nav>
      <ul className="flex space-x-8">
        {navItems.map((navItem: NavItemType) => (
          <li className={cn('cursor-pointer')} key={navItem.title}>
            {navItem.title}
          </li>
        ))}
      </ul>
    </nav>
  )
}
