"use client"

import { useEffect, useRef } from "react"
import { usePathname, useSearchParams } from "next/navigation"

type UtmPayload = {
  source?: string
  medium?: string
  campaign?: string
  term?: string
  content?: string
}

export function VisitTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const lastPath = useRef<string | null>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const searchString = searchParams?.toString() ?? ""
    const pagePath = `${pathname}${searchString ? `?${searchString}` : ""}`

    if (lastPath.current === pagePath) return
    lastPath.current = pagePath

    if (process.env.NODE_ENV !== "production") {
      return
    }

    const search = new URLSearchParams(searchString)
    const utm: UtmPayload = {
      source: search.get("utm_source") || undefined,
      medium: search.get("utm_medium") || undefined,
      campaign: search.get("utm_campaign") || undefined,
      term: search.get("utm_term") || undefined,
      content: search.get("utm_content") || undefined,
    }

    const payload = {
      page: pagePath,
      referrer: document.referrer || undefined,
      userAgent: navigator.userAgent || undefined,
      utm,
    }

    void fetch("/api/visit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).catch((error) => {
      console.error("[visit] failed to send", error)
    })
  }, [pathname, searchParams])

  return null
}
