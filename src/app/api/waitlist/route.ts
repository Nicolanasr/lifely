import { NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabase"

export async function POST(request: Request) {
  try {
    const { email, plan } = (await request.json()) as { email?: string; plan?: string }

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    if (!supabaseAdmin) {
      console.warn("[waitlist] supabase not configured, falling back to log only")
      console.log("[waitlist] new signup", { email, plan })
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
