'use client'

import { cn } from '@/lib/utils'
import { NavItemType } from '@/types'
import { usePathname } from 'next/navigation'

export default function AppNavbar({ navItems = [], className }: { navItems: NavItemType[]; className?: string }) {
  const pathname = usePathname().split('/')[1]

  return (
    <nav>
      <ul className={cn('hidden space-x-8 md:flex', className)}>
        {navItems.map((navItem: NavItemType) => (
          <li className={cn('cursor-pointer', pathname === navItem.href && 'underline underline-offset-8')} key={navItem.title}>
            {navItem.title}
          </li>
        ))}
      </ul>
    </nav>
  )
}
