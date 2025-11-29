import { NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabase"

type UtmPayload = {
  source?: string
  medium?: string
  campaign?: string
  term?: string
  content?: string
}

export async function POST(request: Request) {
  try {
    const { page, referrer, userAgent, utm } = (await request.json()) as {
      page?: string
      referrer?: string
      userAgent?: string
      utm?: UtmPayload
    }
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      null
    const country =
      request.headers.get("x-vercel-ip-country") ||
      request.headers.get("x-geo-country") ||
      null

    if (process.env.NODE_ENV !== "production") {
      return NextResponse.json({ ok: true, skipped: "dev-mode" })
    }

    if (!supabaseAdmin) {
      console.warn("[visit] supabase not configured, log-only")
      console.log("[visit] event", { page, referrer, userAgent, utm, ip, country })
      return NextResponse.json({ ok: true, logged: true })
    }

    const { error } = await supabaseAdmin.from("visits").insert({
      page_path: page ?? null,
      referrer: referrer ?? null,
      user_agent: userAgent ?? null,
      utm_source: utm?.source ?? null,
      utm_medium: utm?.medium ?? null,
      utm_campaign: utm?.campaign ?? null,
      utm_term: utm?.term ?? null,
      utm_content: utm?.content ?? null,
      ip_address: ip,
      country,
    })

    if (error) {
      console.error("[visit] supabase insert error", error)
      return NextResponse.json({ ok: false, error: "unable to save visit" }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("[visit] error", error)
    return NextResponse.json({ ok: false, error: "bad request" }, { status: 400 })
  }
}
