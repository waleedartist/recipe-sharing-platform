# Supabase Setup Guide

## Step 1: Get Your Supabase Credentials

1. Go to your [Supabase Dashboard](https://app.supabase.com)
2. Select your project
3. Navigate to **Project Settings** > **API**
4. Copy the following values:
   - **Project URL** (under "Project URL")
   - **anon/public key** (under "Project API keys" > "anon public")

## Step 2: Create Environment Variables

Create a `.env.local` file in the root of your project:

```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url-here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

Replace `your-project-url-here` and `your-anon-key-here` with the values from Step 1.

**Important:** Never commit `.env.local` to git. It's already in `.gitignore`.

## Step 3: Verify Database Tables

Make sure you've run the SQL schema in Supabase:

1. Go to **SQL Editor** in your Supabase dashboard
2. Copy and paste the entire contents of `supabase/schema.sql`
3. Run the query
4. Verify tables exist: Go to **Table Editor** and confirm you see `profiles` and `recipes` tables

## Step 4: Test the Connection

The Supabase client is now set up! You can use it in your components:

**In Server Components:**
```typescript
import { createClient } from '@/lib/supabase/server'

const supabase = await createClient()
const { data } = await supabase.from('recipes').select('*')
```

**In Client Components:**
```typescript
import { createClient } from '@/lib/supabase/client'

const supabase = createClient()
const { data } = await supabase.from('recipes').select('*')
```

## What's Been Set Up

✅ Supabase packages installed (`@supabase/supabase-js`, `@supabase/ssr`)
✅ Client utilities for browser and server components
✅ Middleware for automatic session management
✅ TypeScript types for your database tables
✅ Protected route handling (redirects to login if not authenticated)

## Next Steps

1. Create login/signup pages (`/app/login/page.tsx`, `/app/signup/page.tsx`)
2. Create recipe pages (`/app/recipes/page.tsx`, `/app/recipes/[id]/page.tsx`)
3. Implement authentication flows
4. Build recipe creation form




