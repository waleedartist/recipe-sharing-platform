import Link from "next/link";

const heroStats = [
  { label: "Recipes live", value: "2,340+" },
  { label: "Community saves", value: "410K" },
  { label: "Avg. rating", value: "4.9 / 5" },
];

const sampleRecipes = [
  {
    title: "Wholesome Veggie Ramen",
    description: "Ginger-miso broth, roasted mushrooms, and soft eggs.",
    time: "40 mins",
    difficulty: "Medium",
    tags: ["Vegetarian", "Comfort"],
  },
  {
    title: "Sheet-Pan Citrus Salmon",
    description: "Zesty orange glaze with charred broccolini sides.",
    time: "30 mins",
    difficulty: "Easy",
    tags: ["Low effort", "Protein-rich"],
  },
  {
    title: "Cardamom Pistachio Cake",
    description: "Fragrant, moist crumb with yogurt frosting.",
    time: "65 mins",
    difficulty: "Hard",
    tags: ["Dessert", "Showstopper"],
  },
];

const featurePillars = [
  {
    title: "Creators",
    bullet: "Upload recipes with drag-and-drop images, steps, and tags.",
  },
  {
    title: "Explorers",
    bullet: "Search by title, filter by ingredients, and sort by time.",
  },
  {
    title: "Community",
    bullet: "Likes, comments, and saves to surface trusted dishes.",
  },
  {
    title: "Platform",
    bullet: "Supabase auth, storage, and RLS-secured tables.",
  },
];

const roadmapPhases = [
  {
    label: "Phase 1 · Setup",
    detail: "Next.js + Tailwind bootstrapped, Supabase project + env wiring.",
  },
  {
    label: "Phase 2 · Auth",
    detail:
      "Sign up, login, logout, and password reset powered by Supabase helpers.",
  },
  {
    label: "Phase 3 · Database",
    detail:
      "Recipes table, storage bucket, and RLS policies to guard user content.",
  },
  {
    label: "Phase 4 · Creation Flow",
    detail: "Dynamic ingredient + step builders with optional image uploads.",
  },
  {
    label: "Phase 5 · Discovery",
    detail: "All-recipes grid, detail pages, and title search with filters.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff7ec] via-[#fffdf9] to-white text-[#1b1b1b]">
      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-10 md:px-10 lg:px-12">
        <header className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-amber-100 bg-white/80 px-5 py-4 shadow-sm">
          <Link href="/" className="text-xl font-semibold tracking-tight text-[#120c04]">
            RecipeShare
          </Link>
          <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-wide">
            <Link
              href="/login"
              className="rounded-full border border-[#ff813f40] px-4 py-2 text-[#ff813f] hover:bg-[#fff4ec]"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="rounded-full bg-[#ff813f] px-5 py-2 text-white hover:bg-[#f66f26]"
            >
              Sign up
            </Link>
          </div>
        </header>

        {/* Hero */}
        <section className="relative overflow-hidden rounded-4xl border border-amber-100 bg-white px-8 py-12 shadow-[0_30px_80px_rgba(244,200,149,0.35)] md:px-12">
          <div className="absolute inset-0 opacity-60">
            <div className="absolute left-1/2 top-8 h-64 w-64 -translate-x-1/2 rounded-full bg-[#ffe0c6] blur-3xl" />
            <div className="absolute bottom-4 right-6 h-40 w-40 rounded-full bg-[#ffeecf] blur-3xl" />
          </div>
          <div className="relative z-10 max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
              Recipe Sharing Platform · v1.0
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-[#120c04] md:text-5xl">
              Publish gorgeous recipes, browse effortlessly, and stay secure
              with Supabase.
            </h1>
            <p className="mt-5 text-lg text-[#5f4d3a]">
              This MVP pairs a polished UI with battle-tested Next.js app router
              patterns. Authenticated cooks submit rich stories, while public
              visitors enjoy fast, searchable discovery.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/recipes/new"
                className="rounded-full bg-[#ff813f] px-7 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[#f66f26]"
              >
                Share a recipe
              </Link>
              <Link
                href="/docs/setup"
                className="rounded-full border border-[#ff813f40] px-7 py-3 text-sm font-semibold uppercase tracking-wide text-[#ff813f] hover:bg-[#fff4ec]"
              >
                Read setup guide
              </Link>
            </div>
          </div>
          <dl className="relative z-10 mt-12 grid gap-6 text-sm text-[#5f4d3a] sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-semibold text-[#120c04]">{stat.label}</dt>
                <dd className="text-3xl font-semibold text-[#ff813f]">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Search & Filters demo */}
        <section className="grid gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b38b65]">
              Search & filter
            </p>
            <h2 className="text-3xl font-semibold text-[#120c04]">
              Find dishes by title, ingredient, or vibe.
            </h2>
            <p className="text-base text-[#5f4d3a]">
              The homepage wires in real-time Supabase queries so explorers can
              search by title keywords, filter by pantry ingredients, or sort by
              prep time and difficulty.
            </p>
            <ul className="space-y-3 text-sm text-[#3a2a1a]">
              <li className="flex items-center gap-3 rounded-2xl border border-dashed border-[#f5d7b4] bg-white/80 px-4 py-3">
                <span className="h-2 w-2 rounded-full bg-[#ff813f]" />
                Title search debounced client-side with SWR.
              </li>
              <li className="flex items-center gap-3 rounded-2xl border border-dashed border-[#f5d7b4] bg-white/80 px-4 py-3">
                <span className="h-2 w-2 rounded-full bg-[#ff813f]" />
                Ingredient multi-select stores values in Supabase JSON.
              </li>
              <li className="flex items-center gap-3 rounded-2xl border border-dashed border-[#f5d7b4] bg-white/80 px-4 py-3">
                <span className="h-2 w-2 rounded-full bg-[#ff813f]" />
                Filters persist via URL params for easy sharing.
              </li>
            </ul>
          </div>
          <div className="rounded-3xl border border-amber-100 bg-white/90 p-6 shadow-lg">
            <div className="rounded-2xl border border-amber-50 bg-[#fff6ee] p-4">
              <div className="flex flex-wrap gap-3">
                <input
                  placeholder="Search ramen, cake, tacos..."
                  className="flex-1 rounded-xl border border-[#ffede0] bg-white px-4 py-3 text-sm outline-none focus:border-[#ff813f]"
                  disabled
                />
                <button className="rounded-xl bg-[#ff813f] px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white">
                  Search
                </button>
              </div>
              <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wide text-[#b38b65]">
                {["Vegetarian", "30 mins", "Easy", "No oven"].map((filter) => (
                  <span
                    key={filter}
                    className="rounded-full border border-[#ffdfc6] bg-white px-3 py-1 text-[#c26e34]"
                  >
                    {filter}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-6 grid gap-4">
              {sampleRecipes.map((recipe) => (
                <article
                  key={recipe.title}
                  className="rounded-2xl border border-amber-100 bg-white/90 p-5 shadow-sm"
                >
                  <div className="flex flex-wrap items-center justify-between text-xs font-semibold uppercase tracking-[0.3em] text-[#b38b65]">
                    <span>{recipe.difficulty}</span>
                    <span>{recipe.time}</span>
                  </div>
                  <h3 className="mt-3 text-xl font-semibold text-[#120c04]">
                    {recipe.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#5f4d3a]">
                    {recipe.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs text-[#c26e34]">
                    {recipe.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[#fff4ec] px-3 py-1 font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Feature pillars */}
        <section className="rounded-4xl border border-amber-100 bg-white/80 p-8">
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b38b65]">
              Core capabilities
            </p>
            <h2 className="text-3xl font-semibold text-[#120c04]">
              Every persona gets what they need on day one.
            </h2>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {featurePillars.map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl border border-dashed border-[#f5d7b4] bg-white p-6"
              >
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c26e34]">
                  {feature.title}
                </span>
                <p className="mt-3 text-base text-[#3a2a1a]">{feature.bullet}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Architecture snapshot */}
        <section className="rounded-4xl border border-transparent bg-gradient-to-r from-[#fef3e2] to-[#fff7ec] p-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c26e34]">
                Tech stack
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-[#120c04]">
                Built with Next.js App Router, Supabase, and Tailwind.
              </h2>
              <p className="mt-4 text-base text-[#5f4d3a]">
                Server components handle SSR + streaming, while Supabase
                provides auth, Postgres, and storage. Optional React Query or
                SWR keeps client-side lists in sync.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-[#3a2a1a]">
                <li>• Protect write routes with Supabase Auth Helpers.</li>
                <li>• Store recipe shots in Supabase Storage with signed URLs.</li>
                <li>• RLS ensures only owners edit/delete their dishes.</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-amber-100 bg-white/80 p-6">
              <h3 className="text-lg font-semibold text-[#120c04]">
                Endpoint highlights
              </h3>
              <dl className="mt-4 space-y-4 text-sm text-[#3a2a1a]">
                <div className="rounded-2xl border border-[#ffede0] p-4">
                  <dt className="font-semibold text-[#c26e34]">/recipes</dt>
                  <dd>Server component fetching public recipe list.</dd>
                </div>
                <div className="rounded-2xl border border-[#ffede0] p-4">
                  <dt className="font-semibold text-[#c26e34]">
                    /recipes/[id]
                  </dt>
                  <dd>Dynamic route with optional SSG for SEO-friendly detail.</dd>
                </div>
                <div className="rounded-2xl border border-[#ffede0] p-4">
                  <dt className="font-semibold text-[#c26e34]">
                    Server actions
                  </dt>
                  <dd>
                    Secure recipe creation + image upload orchestrated with
                    Supabase client.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section className="space-y-6">
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b38b65]">
              Implementation guide
            </p>
            <h2 className="text-3xl font-semibold text-[#120c04]">
              Seven-step path to MVP.
            </h2>
            <p className="text-base text-[#5f4d3a]">
              Mirror the PRD phases to deliver value quickly while keeping the
              codebase modular and production-ready.
            </p>
          </div>
          <ol className="space-y-4">
            {roadmapPhases.map((phase) => (
              <li
                key={phase.label}
                className="rounded-3xl border border-amber-100 bg-white/80 p-5"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c26e34]">
                  {phase.label}
                </span>
                <p className="mt-2 text-sm text-[#3a2a1a]">{phase.detail}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* CTA */}
        <section className="rounded-4xl border border-transparent bg-gradient-to-r from-[#ffb347] to-[#ffcc33] p-8 text-[#120c04]">
          <h2 className="text-3xl font-semibold">
            Ready to wire up Supabase next?
          </h2>
          <p className="mt-3 text-base text-[#3a2a1a]">
            The homepage UI mirrors the PRD priorities—auth-ready, search-first,
            and fully responsive. Plug in Supabase auth, database tables, and
            storage to deliver the complete experience.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold uppercase tracking-wide">
            <Link
              href="/roadmap"
              className="rounded-full bg-[#120c04] px-6 py-3 text-white hover:bg-black"
            >
              Review roadmap
            </Link>
            <Link
              href="/recipes/new"
              className="rounded-full border border-[#120c04] px-6 py-3 text-[#120c04] hover:bg-white/50"
            >
              Start building
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
