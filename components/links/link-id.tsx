import Link from 'next/link'

type LinkIdProps = {
  label: string
  href: string
}

export default function LinkId({ label, href }: LinkIdProps) {
  return (
    <Link href={href}>
      <span>{label}</span>
    </Link>
  )
}
