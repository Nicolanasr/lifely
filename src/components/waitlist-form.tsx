"use client"

import { useEffect, useState, type FormEvent } from "react"
import { track } from "@vercel/analytics/react"
import { Check, Loader2, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

type WaitlistFormProps = {
    className?: string
    variant?: "primary" | "secondary"
    plan?: string
}

type UtmPayload = {
    source?: string
    medium?: string
    campaign?: string
    term?: string
    content?: string
    referrer?: string
    page?: string
}

type Status = "idle" | "loading" | "success" | "error"

export function WaitlistForm({ className, variant = "primary", plan }: WaitlistFormProps) {
    const [email, setEmail] = useState("")
    const [status, setStatus] = useState<Status>("idle")
    const [message, setMessage] = useState<string | null>(null)
    const [referrer, setReferrer] = useState<string | undefined>(undefined)
    const [pagePath, setPagePath] = useState<string | undefined>(undefined)
    const [utmParams, setUtmParams] = useState<UtmPayload>({})

    useEffect(() => {
        if (typeof window !== "undefined") {
            const search = new URLSearchParams(window.location.search)
            setUtmParams({
                source: search.get("utm_source") || undefined,
                medium: search.get("utm_medium") || undefined,
                campaign: search.get("utm_campaign") || undefined,
                term: search.get("utm_term") || undefined,
                content: search.get("utm_content") || undefined,
            })
            setPagePath(`${window.location.pathname}${window.location.search}`)
            setReferrer(document.referrer || undefined)
        }
    }, [])

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        if (!email) {
            setMessage("Please add your email.")
            return
        }

        setStatus("loading")
        setMessage(null)

        try {
            const utmPayload: UtmPayload = {
                ...utmParams,
                referrer,
                page: pagePath,
            }

            const response = await fetch("/api/waitlist", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, plan, utm: utmPayload }),
            })

            if (!response.ok) {
                throw new Error("Failed to join waitlist")
            }

            setStatus("success")
            setMessage(
                `You’re on the list${plan ? ` for ${plan}` : ""}! We’ll email you soon.`
            )
            setEmail("")

            track("waitlist_submit", {
                plan: plan ?? "Unknown",
                source: utmPayload.source ?? "direct",
                medium: utmPayload.medium ?? "none",
                campaign: utmPayload.campaign ?? "none",
                page: utmPayload.page ?? "unknown",
            })
        } catch (error) {
            console.error(error)
            setStatus("error")
            setMessage("Something went wrong. Please try again.")
        }
    }

    const isLoading = status === "loading"
    const isSuccess = status === "success"

    return (
        <form
            onSubmit={handleSubmit}
            className={cn(
                "flex flex-col gap-3 rounded-2xl bg-white/90 p-3 shadow-sm ring-1 ring-black/5 sm:flex-row sm:items-center",
                variant === "secondary" && "bg-lifely-cream/70",
                className
            )}
        >
            <div className="flex-1">
                <Input
                    type="email"
                    placeholder="Enter your email for early access"
                    className="h-11 rounded-xl border-slate-200 bg-white"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                />
            </div>

            <Button
                type="submit"
                disabled={isLoading}
                className="h-11 rounded-xl bg-lifely-primary px-4 text-white hover:bg-lifely-primary/90"
            >
                {isLoading ? (
                    <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Joining...
                    </>
        ) : isSuccess ? (
          <>
            <Check className="h-4 w-4" />
            Added
          </>
        ) : (
          <>
            <Sparkles className="h-4 w-4" />
            Join early access
          </>
        )}
      </Button>

            {message && (
                <p
                    className={cn(
                        "text-xs text-left",
                        status === "error" ? "text-red-600" : "text-lifely-primary"
                    )}
                    aria-live="polite"
                >
                    {message}
                </p>
            )}
        </form>
    )
}
