"use client"

import { useEffect, useRef } from "react"

type UtmPayload = {
  source?: string
  medium?: string
  campaign?: string
  term?: string
  content?: string
}

export function VisitTracker() {
  const hasSent = useRef(false)

  useEffect(() => {
    if (hasSent.current) return
    if (typeof window === "undefined") return
    hasSent.current = true

    const search = new URLSearchParams(window.location.search)
    const utm: UtmPayload = {
      source: search.get("utm_source") || undefined,
      medium: search.get("utm_medium") || undefined,
      campaign: search.get("utm_campaign") || undefined,
      term: search.get("utm_term") || undefined,
      content: search.get("utm_content") || undefined,
    }

    const payload = {
      page: `${window.location.pathname}${window.location.search}`,
      referrer: document.referrer || undefined,
      userAgent: navigator.userAgent || undefined,
      utm,
    }

    if (process.env.NODE_ENV !== "production") {
      return
    }

    void fetch("/api/visit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).catch((error) => {
      console.error("[visit] failed to send", error)
    })
  }, [])

  return null
}
