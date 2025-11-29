import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl) {
  console.warn("[supabase] Missing NEXT_PUBLIC_SUPABASE_URL")
}

if (!serviceRoleKey) {
  console.warn("[supabase] Missing SUPABASE_SERVICE_ROLE_KEY")
}

export const supabaseAdmin = supabaseUrl && serviceRoleKey
  ? createClient(supabaseUrl, serviceRoleKey)
  : null
