-- Add IP and country to visits
alter table public.visits
  add column if not exists ip_address text,
  add column if not exists country text;

create index if not exists visits_country_idx on public.visits (country);
