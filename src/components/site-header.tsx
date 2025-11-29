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
            <Link href="/" className="relative h-14 w-40">
                <Image
                    src="/wide-logo-new.png"
                    alt="Lifely logo"
                    fill
                    className="object-contain"
                    priority
                />
            </Link>
            <div className="hidden items-center gap-4 text-sm text-slate-600 sm:flex">
                {navLinks.map((link) => (
                    <a key={link.href} href={link.href} className="hover:text-lifely-primary">
                        {link.label}
                    </a>
                ))}
                <Link href="/checkout">
                    <Button className="rounded-full cursor-pointer bg-lifely-primary px-4 py-2 text-white hover:bg-lifely-primary/90">
                        Get early access
                    </Button>
                </Link>
            </div>
        </header >
    )
}
