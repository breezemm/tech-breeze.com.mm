import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'
import Link from 'next/link'

type LinkSocialProps = {
  label: string
  href: string
  icon: LucideIcon
  className?: string
}

export default function LinkSocial({ label, href, icon: Icon, className }: LinkSocialProps) {
  return (
    <Link id={label} href={href} target="_blank" rel="noopener noreferrer">
      <span className="underline lg:hidden">{label}</span>

      <Icon className={cn('hidden lg:block', className)} />
    </Link>
  )
}
