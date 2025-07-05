import { cn } from '@/lib/utils'
import Link from 'next/link'

type LinkIdProps = {
  label: string
  href: string
  isActive: boolean
  onClick?: () => void
}

export default function LinkId({ label, href, isActive = false, onClick }: LinkIdProps) {
  return (
    <Link href={href} onClick={onClick}>
      <span className={cn(isActive && 'underline')}>{label}</span>
    </Link>
  )
}
