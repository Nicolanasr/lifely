'use client'

import { useState, useTransition } from "react"
import { useRouter } from "next/navigation"

import { SiteHeader, type NavLink } from "@/components/site-header"
import { WaitlistForm } from "@/components/waitlist-form"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"

const planOptions = {
    beta: {
        name: "Beta · Lifely Pro",
        price: "$0",
        period: "during beta",
        blurb: "Free while we polish. Founding member perks included.",
    },
    monthly: {
        name: "Launch · Monthly",
        price: "$4.99",
        period: "per month",
        blurb: "Cancel anytime. Includes all core features at launch.",
    },
    annual: {
        name: "Launch · Annual",
        price: "$39",
        period: "per year",
        blurb: "Best value with a founding-year discount.",
    },
    lifetime: {
        name: "Launch · Lifetime",
        price: "$89",
        period: "one-time launch offer",
        blurb: "Pay once, keep access to all core features.",
    },
} as const

const navLinks: NavLink[] = [
    { href: "/#features", label: "Features" },
    { href: "/#how-it-works", label: "How it works" },
    { href: "/#pricing", label: "Pricing" },
]

type PlanKey = keyof typeof planOptions

export default function CheckoutPage() {
    const router = useRouter()
    const [isPending, startTransition] = useTransition()
    const [selectedKey, setSelectedKey] = useState<PlanKey>(() => {
        if (typeof window === "undefined") return "beta"
        const params = new URLSearchParams(window.location.search)
        const keyParam = params.get("plan") as PlanKey | null
        return keyParam && planOptions[keyParam] ? keyParam : "beta"
    })

    const selectedPlan = planOptions[selectedKey]

    function selectPlan(key: PlanKey) {
        startTransition(() => {
            setSelectedKey(key)
            const params = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "")
            params.set("plan", key)
            router.replace(`${typeof window !== "undefined" ? window.location.pathname : "/checkout"}?${params.toString()}`, { scroll: false })
        })
    }

    return (
        <main className="relative min-h-screen bg-lifely-cream">

            <SiteHeader navLinks={navLinks} />

            <section className="mx-auto flex max-w-4xl flex-col gap-6 px-4 pb-16">
                <div className="space-y-2">
                    <p className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold text-lifely-primary shadow-sm ring-1 ring-black/5">
                        Interest checkout · No payment required
                    </p>
                    <h1 className="text-3xl font-semibold tracking-tight text-lifely-dark sm:text-4xl">
                        Reserve your spot for Lifely
                    </h1>
                    <p className="max-w-2xl text-sm text-slate-700 sm:text-base">
                        Pick the plan you&apos;re most likely to choose. We&apos;ll use this signal to
                        prioritize invites. You won&apos;t be charged—this is just to gauge interest and
                        get you early.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
                    <Card className="rounded-2xl border-none bg-white/90 shadow-lg ring-1 ring-black/5">
                        <CardContent className="space-y-6 p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wide text-lifely-primary">
                                        {selectedPlan.name}
                                    </p>
                                    <p className="text-3xl font-semibold text-lifely-dark">
                                        {selectedPlan.price}{" "}
                                        <span className="text-base font-medium text-slate-500">
                                            {selectedPlan.period}
                                        </span>
                                    </p>
                                    <p className="text-sm text-slate-700">{selectedPlan.blurb}</p>
                                </div>
                                <div className="rounded-full bg-lifely-primary/10 px-3 py-1 text-xs font-semibold text-lifely-primary">
                                    No card needed
                                </div>
                            </div>

                            <div className="space-y-2 text-sm text-slate-700">
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-lifely-primary" />
                                    Tasks, habits, journaling, mood, weekly review
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-lifely-primary" />
                                    Mobile-first design with calm notifications
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-lifely-primary" />
                                    Founding member perks and early templates
                                </div>
                            </div>

                            <div className="rounded-2xl bg-lifely-cream px-4 py-3 text-sm text-lifely-dark ring-1 ring-black/5">
                                This checkout captures intent only. Add your email to hold your spot and
                                we&apos;ll reach out when your plan opens.
                            </div>

                            <WaitlistForm variant="secondary" plan={selectedPlan.name} />
                        </CardContent>
                    </Card>

                    <Card className="rounded-2xl border-none bg-white/85 shadow-md ring-1 ring-black/5">
                        <CardContent className="space-y-4 p-6">
                            <p className="text-sm font-semibold text-lifely-dark">Switch plan</p>
                            <div className="space-y-3">
                                {Object.entries(planOptions).map(([planKey, plan]) => {
                                    const isActive = planKey === selectedKey
                                    return (
                                        <Button
                                            key={planKey}
                                            variant="outline"
                                            className={`w-full justify-between rounded-xl text-left transition ${isActive
                                                    ? "border-lifely-primary bg-lifely-primary/10 text-lifely-primary ring-2 ring-lifely-primary/50"
                                                    : "border-lifely-primary/20 bg-white text-slate-700 hover:bg-lifely-primary/5"
                                                }`}
                                            aria-pressed={isActive}
                                            onClick={() => selectPlan(planKey as PlanKey)}
                                            disabled={isPending}
                                        >
                                            <span className="flex items-center gap-3">
                                                <span className="flex flex-col">
                                                    <span className="text-sm font-semibold">{plan.name}</span>
                                                    <span className="text-xs text-slate-500">{plan.period}</span>
                                                </span>
                                            </span>
                                            <span className="flex items-center gap-2">
                                                {isActive && <Check className="h-4 w-4" />}
                                                <span className="text-sm font-semibold">{plan.price}</span>
                                            </span>
                                        </Button>
                                    )
                                })}
                            </div>

                            <div className="rounded-xl bg-lifely-primary/10 p-4 text-sm text-lifely-dark">
                                We&apos;ll email you a personal invite link for the plan you choose. No charges
                                happen here—this is a temperature check.
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </main>
    )
}
