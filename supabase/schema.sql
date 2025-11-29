-- Minimal Supabase schema: profiles + recipes
-- Run inside Supabase SQL editor or via `supabase db push`.
-- 
-- IMPORTANT: Run this entire file from top to bottom in one go.
-- The recipes table depends on profiles, so profiles must be created first.

create extension if not exists "pgcrypto";

create or replace function public.handle_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = timezone('utc', now());
  return new;
end;
$$;

-------------------------------------------------------------------------
-- profiles
-------------------------------------------------------------------------

create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  username text unique,
  full_name text,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

comment on table public.profiles is 'Public user info mirrored from auth.users.';

drop trigger if exists profiles_updated_at on public.profiles;
create trigger profiles_updated_at
before update on public.profiles
for each row
execute function public.handle_updated_at();

-------------------------------------------------------------------------
-- recipes
-------------------------------------------------------------------------

create table if not exists public.recipes (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default timezone('utc', now()),
  user_id uuid not null references public.profiles (id) on delete cascade,
  title text not null,
  ingredients text[] not null default array[]::text[],
  instructions text[] not null default array[]::text[],
  cooking_time_minutes int,
  difficulty text check (difficulty in ('Easy', 'Medium', 'Hard')),
  category text,
  updated_at timestamptz not null default timezone('utc', now())
);

comment on table public.recipes is 'User-submitted recipes linked to profile records.';

create index if not exists recipes_user_idx on public.recipes (user_id);
create index if not exists recipes_category_idx on public.recipes (category);

drop trigger if exists recipes_updated_at on public.recipes;
create trigger recipes_updated_at
before update on public.recipes
for each row
execute function public.handle_updated_at();

-------------------------------------------------------------------------
-- Row Level Security (RLS) Policies
-------------------------------------------------------------------------

-- Enable RLS on profiles
alter table public.profiles enable row level security;

-- Profiles: Anyone can read profiles
create policy "Profiles are viewable by everyone"
on public.profiles
for select
using (true);

-- Profiles: Users can insert their own profile
create policy "Users can insert their own profile"
on public.profiles
for insert
with check (auth.uid() = id);

-- Profiles: Users can update their own profile
create policy "Users can update their own profile"
on public.profiles
for update
using (auth.uid() = id)
with check (auth.uid() = id);

-- Enable RLS on recipes
alter table public.recipes enable row level security;

-- Recipes: Anyone can read recipes
create policy "Recipes are viewable by everyone"
on public.recipes
for select
using (true);

-- Recipes: Authenticated users can insert recipes (must be their own)
create policy "Users can insert their own recipes"
on public.recipes
for insert
with check (auth.uid() = user_id);

-- Recipes: Users can update their own recipes
create policy "Users can update their own recipes"
on public.recipes
for update
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

-- Recipes: Users can delete their own recipes
create policy "Users can delete their own recipes"
on public.recipes
for delete
using (auth.uid() = user_id);

