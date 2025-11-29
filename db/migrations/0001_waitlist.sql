-- Waitlist table and policies
-- Run in Supabase SQL editor or via migration tooling

-- Enable UUID generation if not already enabled
create extension if not exists "uuid-ossp";

-- Core table
create table if not exists public.waitlist (
  id uuid primary key default uuid_generate_v4(),
  email text not null,
  plan text null,
  created_at timestamptz not null default now()
);

-- Uniqueness by email (case-insensitive)
create unique index if not exists waitlist_email_key on public.waitlist (lower(email));

-- Optional: index by plan for reporting
create index if not exists waitlist_plan_idx on public.waitlist (plan);

-- RLS setup
alter table public.waitlist enable row level security;

-- Policies (service role only for now)
drop policy if exists "service role can insert waitlist" on public.waitlist;
create policy "service role can insert waitlist"
  on public.waitlist
  for insert
  to service_role
  with check (true);

drop policy if exists "service role can read waitlist" on public.waitlist;
create policy "service role can read waitlist"
  on public.waitlist
  for select
  to service_role
  using (true);
