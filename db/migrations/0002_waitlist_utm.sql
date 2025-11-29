-- Add UTM and page context to waitlist entries
alter table public.waitlist
  add column if not exists utm_source text,
  add column if not exists utm_medium text,
  add column if not exists utm_campaign text,
  add column if not exists utm_term text,
  add column if not exists utm_content text,
  add column if not exists referrer text,
  add column if not exists page_path text;

create index if not exists waitlist_utm_source_idx on public.waitlist (utm_source);
create index if not exists waitlist_utm_campaign_idx on public.waitlist (utm_campaign);
