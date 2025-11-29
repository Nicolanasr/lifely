-- Visits table to capture page views with UTM metadata
create table if not exists public.visits (
  id uuid primary key default uuid_generate_v4(),
  created_at timestamptz not null default now(),
  page_path text,
  referrer text,
  user_agent text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_term text,
  utm_content text
);

create index if not exists visits_created_at_idx on public.visits (created_at);
create index if not exists visits_page_path_idx on public.visits (page_path);
create index if not exists visits_utm_source_idx on public.visits (utm_source);
create index if not exists visits_utm_campaign_idx on public.visits (utm_campaign);

alter table public.visits enable row level security;

drop policy if exists "service role can insert visits" on public.visits;
create policy "service role can insert visits"
  on public.visits
  for insert
  to service_role
  with check (true);
