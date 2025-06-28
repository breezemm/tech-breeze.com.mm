import { NavItemType } from '@/types'
import { Facebook, Linkedin, Mail } from 'lucide-react'
import Navbar from './navbar'

const navItems: NavItemType[] = [
  { title: 'Home', href: '' },
  { title: 'About', href: '' },
  { title: 'Projects', href: '/project-section' },
  { title: 'Contact', href: '' },
]

export default function Header() {
  return (
    <header className="flex items-center justify-between px-24 py-[30px]">
      <h2 className="text-[25px]">Tech Breeze</h2>
      <Navbar navItems={navItems} />
      <div className="flex items-center space-x-8">
        <Facebook />
        <Linkedin />
        <Mail />
      </div>
    </header>
  )
}
