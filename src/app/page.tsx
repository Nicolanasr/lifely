// app/page.tsx
import type { ReactNode } from "react"

import Link from "next/link"
import { SectionHeader } from "@/components/section-header"
import { FeatureCard } from "@/components/feature-card"
import { WaitlistForm } from "@/components/waitlist-form"
import { SiteHeader, type NavLink } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
    BellRing,
    CalendarCheck2,
    Check,
    CheckCircle2,
    LayoutDashboard,
    NotebookPen,
    Sparkles,
    Smartphone,
    ArrowRight,
    AlertTriangle,
    Leaf,
} from "lucide-react"

const features = [
    {
        title: "Daily dashboard",
        description:
            "See your focus, tasks, habits, and mood in one calm place that updates itself.",
        icon: LayoutDashboard,
    },
    {
        title: "Habits that stick",
        description:
            "Gentle reminders, streaks, and micro-celebrations to keep momentum without pressure.",
        icon: CheckCircle2,
    },
    {
        title: "Guided journaling",
        description:
            "Lightweight prompts for reflection, gratitude, and mood check-ins you’ll actually do.",
        icon: NotebookPen,
    },
    {
        title: "Weekly review",
        description:
            "Close the loop with a guided recap of wins, blockers, and a reset for next week.",
        icon: CalendarCheck2,
    },
    {
        title: "Calm notifications",
        description:
            "Well-timed nudges and focus timers that respect your attention instead of nagging it.",
        icon: BellRing,
    },
    {
        title: "Built for mobile",
        description:
            "Fast capture, offline-friendly notes, and a layout that feels at home on your phone.",
        icon: Smartphone,
    },
]

const steps = [
    {
        title: "Start with clarity",
        description: "Set your focus, top three tasks, and rituals before the day pulls you in.",
        detail: "A guided morning check-in keeps you centered.",
    },
    {
        title: "Flow through the day",
        description: "Tasks, habits, and mood tracking in one list that stays tidy as you go.",
        detail: "Micro interactions celebrate progress without noise.",
    },
    {
        title: "Reflect weekly",
        description: "Review moods, journal highlights, and plan next week with intention.",
        detail: "A gentle reset you’ll actually finish in ten minutes.",
    },
]

const navLinks: NavLink[] = [
    { href: "#features", label: "Features" },
    { href: "#how-it-works", label: "How it works" },
    { href: "#pricing", label: "Pricing" },
]

const launchPlans = [
    {
        name: "Launch · Monthly",
        price: "$4.99",
        period: "/month",
        badge: "After beta",
        href: "/checkout?plan=monthly",
    },
    {
        name: "Launch · Annual",
        price: "$39",
        period: "/year",
        badge: "Best value",
        href: "/checkout?plan=annual",
    },
    {
        name: "Launch · Lifetime",
        price: "$89",
        period: "one-time",
        badge: "Launch offer",
        href: "/checkout?plan=lifetime",
    },
]

const problemBullets = [
    "Tasks in Todoist, habits in a tracker, notes in another app, calendar somewhere else.",
    "Your day is spread across 5 tabs and nothing feels connected.",
    "Hard to see progress or feel calm because it’s all scattered.",
]

const solutionBullets = [
    "One calm dashboard with tasks, habits, journaling, and mood together.",
    "Gentle prompts for focus in the morning and reflection at night.",
    "Weekly review that closes the loop so you reset with intention.",
]

const faqs = [
    {
        q: "Is Lifely free?",
        a: "There will be a free tier plus paid plans. Early users get special launch pricing.",
    },
    {
        q: "When will it launch?",
        a: "MVP is in progress. Private beta invites will roll out over the next few weeks.",
    },
    {
        q: "Which platforms?",
        a: "Starting web and mobile-first; iOS and Android apps are on the roadmap.",
    },
    {
        q: "Will you spam me?",
        a: "No. Only important updates and your launch invite.",
    },
]

export default function HomePage() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-lifely-cream">
            <SiteHeader navLinks={navLinks} />

            <section className="mx-auto max-w-6xl px-4 pb-20 pt-8 sm:pt-10 lg:pb-28">
                <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
                    <div className="max-w-xl space-y-6">
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-lifely-primary shadow-sm ring-1 ring-black/5">
                                <span className="h-2 w-2 rounded-full bg-lifely-peach" />
                                Mobile Life OS · Early access
                            </span>
                            <span className="inline-flex items-center gap-2 rounded-full bg-lifely-primary/10 px-3 py-1 text-[11px] font-semibold text-lifely-primary ring-1 ring-lifely-primary/30">
                                Built for iOS & Android
                            </span>
                        </div>

                        <h1 className="text-balance text-4xl font-semibold tracking-tight text-lifely-dark sm:text-5xl">
                            One calm Life OS for people juggling{" "}
                            <span className="text-lifely-primary">too many apps.</span>
                        </h1>

                        <p className="text-balance text-sm text-slate-700 sm:text-base">
                            For makers, students, and busy humans stuck between todo apps, habit trackers, notes, and calendars.
                            Lifely gives you one gentle daily dashboard with tasks, habits, journaling, mood, and weekly review in one place.
                        </p>

                        <div className="flex items-center gap-3 text-xs text-slate-500">
                            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 shadow-sm ring-1 ring-black/5">
                                Early access for a small group of users.
                            </span>
                            <span className="inline-flex items-center gap-2 rounded-full bg-lifely-indigo/10 px-3 py-1 text-[11px] font-semibold text-lifely-indigo shadow-sm ring-1 ring-lifely-indigo/30">
                                Beta testers wanted · first 200
                            </span>
                            <span className="hidden sm:inline text-slate-500">No spam. One invite when ready.</span>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                            <HighlightPill icon={<Check className="h-4 w-4" />}>
                                Morning focus & top 3 ready in seconds.
                            </HighlightPill>
                            <HighlightPill icon={<Sparkles className="h-4 w-4" />}>
                                Gentle reminders, not noisy notifications.
                            </HighlightPill>
                        </div>

                        <div id="early-access" className="w-full max-w-xl">
                            <WaitlistForm />
                            <p className="mt-2 text-xs text-slate-500">
                                No spam. One invite when Lifely opens. 🎧
                            </p>
                        </div>
                    </div>

                    <div className="relative flex flex-1 justify-center lg:justify-end">
                        <div
                            className="relative mt-6 w-full max-w-xs overflow-hidden rounded-[30px] border border-white/60 bg-gradient-to-b from-white/70 via-lifely-cream to-lifely-peach/30 p-3 shadow-xl ring-1 ring-black/5 lg:absolute lg:-right-12 lg:top-1/2 lg:-translate-y-1/2"
                            aria-label="Mobile app preview"
                        >
                            <div
                                className="aspect-[9/16] w-full rounded-3xl bg-lifely-primary/5 shadow-inner ring-1 ring-black/5"
                                style={{
                                    backgroundImage: "url('/app-screenshot.png')",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            />
                        </div>

                        {/* <div className="absolute -left-4 -bottom-6 hidden rounded-2xl bg-white/90 p-4 shadow-lg ring-1 ring-black/5 sm:block lg:-left-12">
                            <div className="flex items-center gap-2 text-xs font-semibold text-lifely-primary">
                                <Flame className="h-4 w-4" />
                                Weekly reset ready
                            </div>
                            <p className="mt-1 text-[12px] text-slate-600">
                                Journal prompts and mood recap queued for Sunday evening.
                            </p>
                        </div> */}
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-6xl px-4 pb-16 sm:pb-20">
                <SectionHeader
                    eyebrow="Why Lifely exists"
                    title="Most of us use 4–6 different apps every day."
                    description="Here’s how Lifely keeps it simple."
                />
                <div className="mt-6 grid gap-6 rounded-3xl bg-white/80 p-6 shadow-sm ring-1 ring-black/5 md:grid-cols-2">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm font-semibold text-lifely-dark">
                            <AlertTriangle className="h-4 w-4 text-lifely-indigo" />
                            The chaos today
                        </div>
                        <ul className="space-y-2 text-sm text-slate-700">
                            {problemBullets.map((item) => (
                                <li key={item} className="flex items-start gap-2">
                                    <span className="mt-1 h-2 w-2 rounded-full bg-lifely-indigo/50" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="space-y-3 rounded-2xl bg-lifely-cream/80 p-5 ring-1 ring-black/5">
                        <div className="flex items-center gap-2 text-sm font-semibold text-lifely-dark">
                            <Leaf className="h-4 w-4 text-lifely-indigo" />
                            What Lifely does instead
                        </div>
                        <ul className="space-y-2 text-sm text-slate-700">
                            {solutionBullets.map((item) => (
                                <li key={item} className="flex items-start gap-2">
                                    <span className="mt-1 h-2 w-2 rounded-full bg-lifely-peach" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-xs font-semibold text-lifely-indigo">
                            Outcome: more clarity, less switching, calmer days.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-6xl space-y-8 px-4 pb-16 sm:pb-20">
                <SectionHeader
                    eyebrow="Why Lifely"
                    title="What makes Lifely different?"
                    description="A calm, offline-first Life OS that you can set up and use in seconds."
                />
                <div className="grid gap-4 md:grid-cols-2">
                    {[
                        "100% offline-first",
                        "Designed to be used in seconds, not minutes",
                        "Simple enough to use every day",
                        "One unified daily view — no jumping between screens",
                        "Minimal, calm aesthetic (no busy dashboards)",
                        "Unlike Notion templates, it’s ready out of the box",
                    ].map((point) => (
                        <div
                            key={point}
                            className="flex items-start gap-3 rounded-2xl bg-white/85 p-4 text-sm text-slate-700 shadow-sm ring-1 ring-black/5"
                        >
                            <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-lifely-indigo/10 text-lifely-indigo">
                                <Check className="h-3.5 w-3.5" />
                            </span>
                            <span>{point}</span>
                        </div>
                    ))}
                </div>
                <div className="rounded-2xl bg-lifely-cream/80 p-4 text-sm text-slate-700 shadow-sm ring-1 ring-black/5">
                    Lifely is not another complex productivity platform. It’s the simplest place to organize your day.
                </div>
            </section>

            <section id="figma" className="mx-auto max-w-6xl space-y-10 px-4 pb-20">
                <SectionHeader
                    eyebrow="Features"
                    title="Everything your life needs, in one flow."
                    description="Daily dashboard, habits that stick, soft journaling, and weekly reflection—so you stay calm and clear."
                />

                <div className="rounded-2xl bg-white/85 p-5 shadow-sm ring-1 ring-black/5">
                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                        <div>
                            <p className="text-sm font-semibold text-lifely-dark">Mobile + dashboard preview</p>
                            <p className="text-xs text-slate-600">Static mock slots—swap with real screenshots when ready.</p>
                        </div>
                        <a
                            href="https://www.figma.com/design/AlorRxz1f9DuR0xHJjlq3L/Lifely?t=o38nnNd1nnU17Aj5-1"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center rounded-full bg-lifely-indigo px-4 py-2 text-sm font-semibold text-primary shadow-sm transition hover:bg-lifely-indigo/90"
                        >
                            Open Figma preview
                        </a>
                    </div>
                    <div className="mt-4 grid gap-3 md:grid-cols-3">
                        {[{ task: "tasks", image: "/taskview.png" }, { task: "habits", image: "/habitview].png" }, { task: "journal", image: "/journalview.png" }].map((label) => (
                            <div
                                key={label.task}
                                className="h-92 rounded-xl bg-linear-to-br from-lifely-cream via-white to-lifely-peach/40 p-3 shadow-inner ring-1 ring-black/5"
                            >
                                <div className="flex h-full flex-col justify-between rounded-lg bg-white/80 p-3 text-xs text-slate-600 shadow-sm ring-1 ring-black/5 bg-center bg-contain bg-no-repeat" style={{ backgroundImage: `url('${label.image}')` }}>
                                    <div className="space-y-1">
                                        <div className="h-2 rounded-full bg-lifely-indigo/20" />
                                        <div className="h-2 rounded-full bg-lifely-indigo/30" />
                                        <div className="h-2 rounded-full bg-lifely-indigo/10" />
                                    </div>
                                    <div className="text-[10px] text-lifely-indigo">{label.task}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="features" className="mx-auto max-w-6xl space-y-10 px-4 pb-20">


                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature) => (
                        <FeatureCard key={feature.title} {...feature} />
                    ))}
                </div>

                <div className="rounded-2xl bg-white/80 p-5 shadow-sm ring-1 ring-black/5">
                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                        <div>
                            <p className="text-sm font-semibold text-lifely-dark">Who is Lifely for?</p>
                            <p className="text-xs text-slate-600">
                                A calm alternative to heavy productivity tools.
                            </p>
                        </div>
                        <div className="grid gap-2 text-sm text-slate-700 md:grid-cols-2">
                            <span className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-lifely-indigo" />
                                Students who want a clear daily routine
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-lifely-indigo" />
                                Creators juggling content + life
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-lifely-indigo" />
                                Busy professionals overwhelmed by too many apps
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-lifely-indigo" />
                                Anyone who wants a calm alternative to heavy tools
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="how-it-works"
                className="mx-auto max-w-6xl space-y-10 px-4 pb-20"
            >
                <SectionHeader
                    eyebrow="How Lifely works"
                    title="Designed to keep you steady every day."
                    description="A simple rhythm: set focus, flow through your day, reflect weekly."
                    align="left"
                />

                <div className="grid gap-6 md:grid-cols-3">
                    {steps.map((step, index) => (
                        <Card
                            key={step.title}
                            className="rounded-2xl border-none bg-white/80 shadow-sm ring-1 ring-black/5"
                        >
                            <CardContent className="space-y-3 p-5">
                                <div className="flex items-center gap-3">
                                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-lifely-primary/10 text-sm font-semibold text-lifely-primary">
                                        {index + 1}
                                    </span>
                                    <h3 className="text-base font-semibold text-lifely-dark">
                                        {step.title}
                                    </h3>
                                </div>
                                <p className="text-sm text-slate-700">{step.description}</p>
                                <p className="text-xs text-lifely-primary">{step.detail}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            <section
                id="pricing"
                className="mx-auto max-w-6xl space-y-8 px-4 pb-24"
            >
                <SectionHeader
                    eyebrow="Pricing preview"
                    title="Early access is free while we polish."
                    description="Join the waitlist to lock in early access perks and help shape the calmest Life OS."
                />

                <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                    <Card className="rounded-2xl border-none bg-white/90 shadow-lg ring-1 ring-black/5">
                        <CardContent className="space-y-6 p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wide text-lifely-primary">
                                        Beta · Lifely Pro
                                    </p>
                                    <p className="text-3xl font-semibold text-lifely-dark">
                                        $0 <span className="text-base font-medium text-slate-500">during beta</span>
                                    </p>
                                    <p className="text-xs text-slate-500">
                                        Lock in founding perks before launch pricing.
                                    </p>
                                </div>
                                <div className="rounded-full bg-lifely-peach/40 px-3 py-1 text-xs font-semibold text-lifely-dark">
                                    Limited spots
                                </div>
                            </div>

                            <div className="grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
                                {[
                                    "Daily dashboard with tasks + habits",
                                    "Guided journaling & mood tracking",
                                    "Weekly review templates",
                                    "Calm reminders & focus timers",
                                    "Mobile-first design",
                                    "Founding member badge",
                                ].map((item) => (
                                    <div key={item} className="flex items-center gap-2">
                                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-lifely-primary/10 text-lifely-primary">
                                            <Check className="h-3.5 w-3.5" />
                                        </span>
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>

                            <WaitlistForm variant="secondary" plan="Beta" />
                            <p className="text-xs text-slate-500">
                                No payment collected during beta. We&apos;ll invite you when we open.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="rounded-2xl border-none bg-gradient-to-br from-white/90 via-lifely-cream to-lifely-peach/20 shadow-lg ring-1 ring-black/5">
                        <CardContent className="space-y-6 p-6">
                            <div className="space-y-2">
                                <p className="text-sm font-semibold text-lifely-dark">
                                    Coming launch pricing
                                </p>
                                <p className="text-sm text-slate-700">
                                    We&apos;ll introduce paid plans after beta. Pick your preference and
                                    you&apos;ll be first to know—this checkout is a quick interest check,
                                    no payment collected.
                                </p>
                            </div>

                            <div className="space-y-3">
                                {launchPlans.map((plan) => (
                                    <div
                                        key={plan.name}
                                        className="flex flex-col gap-2 rounded-2xl bg-white/90 p-4 shadow-sm ring-1 ring-black/5 sm:flex-row sm:items-center sm:justify-between"
                                    >
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <p className="text-sm font-semibold text-lifely-dark">{plan.name}</p>
                                                <span className="rounded-full bg-lifely-primary/10 px-2 py-1 text-[11px] font-semibold text-lifely-primary">
                                                    {plan.badge}
                                                </span>
                                            </div>
                                            <p className="text-lg font-semibold text-lifely-primary">
                                                {plan.price}
                                                <span className="text-sm font-medium text-slate-500"> {plan.period}</span>
                                            </p>
                                        </div>
                                        <Button
                                            asChild
                                            className="w-full rounded-full bg-lifely-primary text-white hover:bg-lifely-primary/90 sm:w-auto"
                                        >
                                            <Link href={plan.href} className="flex items-center gap-2">
                                                Start checkout
                                                <ArrowRight className="h-4 w-4" />
                                            </Link>
                                        </Button>
                                    </div>
                                ))}
                            </div>

                            <div className="rounded-xl bg-white/80 p-4 text-sm shadow-sm ring-1 ring-black/5">
                                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                                    <Sparkles className="h-4 w-4 text-lifely-primary" />
                                    Sneak peek
                                </div>
                                <ul className="mt-3 space-y-2 text-slate-700">
                                    <li className="flex items-center gap-2">
                                        <span className="h-2 w-2 rounded-full bg-lifely-primary" />
                                        Focused capture on mobile with quick add.
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="h-2 w-2 rounded-full bg-lifely-primary" />
                                        Weekly audio notes that auto-transcribe into your journal.
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="h-2 w-2 rounded-full bg-lifely-primary" />
                                        Smart templates for reflection and planning.
                                    </li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <section className="mx-auto max-w-6xl space-y-6 px-4 pb-16 sm:pb-20">
                <SectionHeader
                    eyebrow="Early feedback"
                    title="What early readers say"
                    description="Lightweight notes from people who want a calmer daily flow."
                />
                <div className="grid gap-4 md:grid-cols-3">
                    {[
                        {
                            quote: "Finally, something simpler than my Notion setup.",
                            name: "Early subscriber",
                        },
                        {
                            quote: "I just want one place to check in. This feels it.",
                            name: "Beta waitlist",
                        },
                        {
                            quote: "Offline-first is huge. I can use it on the train.",
                            name: "Mobile-first user",
                        },
                    ].map((item) => (
                        <Card
                            key={item.quote}
                            className="rounded-2xl border-none bg-white/85 shadow-sm ring-1 ring-black/5"
                        >
                            <CardContent className="space-y-2 p-5">
                                <p className="text-sm text-lifely-dark">“{item.quote}”</p>
                                <p className="text-xs text-slate-600">{item.name}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            <section className="mx-auto max-w-6xl space-y-6 px-4 pb-16 sm:pb-20">
                <SectionHeader
                    eyebrow="Quick answers"
                    title="FAQ"
                    description="A few essentials while we build. More details coming with early access."
                    align="left"
                />
                <div className="grid gap-4 md:grid-cols-2">
                    {faqs.map((item) => (
                        <Card
                            key={item.q}
                            className="rounded-2xl border-none bg-white/85 shadow-sm ring-1 ring-black/5"
                        >
                            <CardContent className="space-y-2 p-5">
                                <p className="text-sm font-semibold text-lifely-dark">{item.q}</p>
                                <p className="text-sm text-slate-700">{item.a}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            <section className="mx-auto max-w-6xl space-y-6 px-4 pb-24">
                <SectionHeader
                    eyebrow="Early access"
                    title="Want to be one of the first to try Lifely?"
                    description="We’ll invite a small group to the private beta. One email when your invite is ready."
                />
                <div className="max-w-xl">
                    <WaitlistForm />
                </div>
            </section>

            <footer className="border-t border-slate-200 bg-white/70">
                <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-slate-500 sm:flex-row">
                    <div className="flex items-center gap-2 text-slate-700">
                        <span>© {new Date().getFullYear()} Lifely. All rights reserved.</span>
                    </div>
                    <span>Made with calm focus, not hustle.</span>
                </div>
            </footer>
        </main>
    )
}

type HighlightPillProps = {
    icon: ReactNode
    children: ReactNode
}

function HighlightPill({ icon, children }: HighlightPillProps) {
    return (
        <div className="flex items-start gap-3 items-center rounded-2xl bg-white/80 p-3 text-sm text-slate-700 shadow-sm ring-1 ring-black/5">
            <span className="mt-0.5 flex h-8 w-10 items-center justify-center rounded-xl bg-lifely-primary/10 text-lifely-primary">
                {icon}
            </span>
            <span>{children}</span>
        </div>
    )
}
