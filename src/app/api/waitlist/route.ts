import { NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabase"

type UtmPayload = {
  source?: string | null
  medium?: string | null
  campaign?: string | null
  term?: string | null
  content?: string | null
  referrer?: string | null
  page?: string | null
}

export async function POST(request: Request) {
  try {
    const { email, plan, utm } = (await request.json()) as {
      email?: string
      plan?: string
      utm?: UtmPayload
    }

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    if (!supabaseAdmin) {
      console.warn("[waitlist] supabase not configured, falling back to log only")
      console.log("[waitlist] new signup", { email, plan, utm })
      return NextResponse.json({
        success: true,
        message: "Added to waitlist (log-only; Supabase not configured).",
        plan,
      })
    }

    const { error } = await supabaseAdmin
      .from("waitlist")
      .insert({
        email: email.toLowerCase(),
        plan: plan ?? "Unknown",
        utm_source: utm?.source ?? null,
        utm_medium: utm?.medium ?? null,
        utm_campaign: utm?.campaign ?? null,
        utm_term: utm?.term ?? null,
        utm_content: utm?.content ?? null,
        referrer: utm?.referrer ?? null,
        page_path: utm?.page ?? null,
      })

    if (error) {
      console.error("[waitlist] supabase insert error", error)
      return NextResponse.json({ error: "Unable to save right now." }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      message: "Added to waitlist",
      plan,
    })
  } catch (error) {
    console.error("[waitlist] error", error)
    return NextResponse.json({ error: "Unable to save right now." }, { status: 500 })
  }
}

export function GET() {
  return NextResponse.json({ ok: true })
}
