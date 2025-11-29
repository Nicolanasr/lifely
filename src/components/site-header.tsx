import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"

export type NavLink = {
  href: string
  label: string
}

type SiteHeaderProps = {
  navLinks: NavLink[]
}

export function SiteHeader({ navLinks }: SiteHeaderProps) {
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:py-6">
      <Link href="/" className="relative h-10 w-36">
        <Image
          src="/wide-logo.png"
          alt="Lifely logo"
          fill
          className="object-contain"
          priority
        />
      </Link>
      <div className="hidden items-center gap-4 text-sm text-slate-600 sm:flex">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className="hover:text-lifely-indigo">
            {link.label}
          </a>
        ))}
        <Button className="rounded-full bg-lifely-indigo px-4 py-2 text-white hover:bg-lifely-indigo/90">
          Get early access
        </Button>
      </div>
    </header>
  )
}
