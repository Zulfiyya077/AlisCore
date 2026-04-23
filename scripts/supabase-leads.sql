-- Optional Supabase table for contact lead sink (REST insert from /api/contact).
-- Run in Supabase SQL editor, then set SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, SUPABASE_LEADS_TABLE=leads

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  company text,
  message text not null,
  source_path text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  created_at timestamptz not null default now()
);

-- Inserts are performed server-side with the Supabase service role key (see /api/contact).
