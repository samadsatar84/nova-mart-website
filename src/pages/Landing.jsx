import { useEffect, useMemo, useState } from "react";

/**
 * Premium E-commerce Landing (Dark)
 * - Fully MOBILE responsive
 * - Uses Unsplash images (direct)
 * - SafeImage fallback (no blank images)
 * - Single file: Landing.jsx
 */

export default function Landing() {
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const categories = useMemo(
    () => [
      {
        title: "New Arrivals",
        desc: "Fresh drops every week",
        tag: "Trending",
        href: "#new",
        icon: "✨",
        img: "https://images.unsplash.com/photo-1520975958225-2d0f0f5f2b0f?auto=format&fit=crop&w=1400&q=80",
      },
      {
        title: "Electronics",
        desc: "Smart picks for daily life",
        tag: "Hot",
        href: "#electronics",
        icon: "📱",
        img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
      },
      {
        title: "Fashion",
        desc: "Clean fits, premium feel",
        tag: "Style",
        href: "#fashion",
        icon: "🧥",
        img: "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1400&q=80",
      },
      {
        title: "Home & Living",
        desc: "Upgrade your space",
        tag: "Cozy",
        href: "#home",
        icon: "🏡",
        img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
      },
    ],
    []
  );

  const products = useMemo(
    () => [
      {
        title: "Aurora Wireless Headphones",
        price: 129.99,
        oldPrice: 159.99,
        badge: "Best Seller",
        rating: 4.8,
        reviews: 2140,
        pill: "Noise Cancel",
        img: "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?auto=format&fit=crop&w=1400&q=80",
      },
      {
        title: "Nimbus Smart Watch Pro",
        price: 99.0,
        oldPrice: 129.0,
        badge: "Limited",
        rating: 4.7,
        reviews: 980,
        pill: "AMOLED",
        img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1400&q=80",
      },
      {
        title: "Luxe Minimal Sneakers",
        price: 74.5,
        oldPrice: 92.0,
        badge: "New",
        rating: 4.6,
        reviews: 650,
        pill: "Everyday",
        img: "https://images.unsplash.com/photo-1528701800489-20be3cdd9b35?auto=format&fit=crop&w=1400&q=80",
      },
      {
        title: "NeoGlow Desk Lamp",
        price: 34.99,
        oldPrice: 45.99,
        badge: "Deal",
        rating: 4.5,
        reviews: 420,
        pill: "Warm Light",
        img: "https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?auto=format&fit=crop&w=1400&q=80",
      },
      {
        title: "Everyday Backpack",
        price: 39.0,
        oldPrice: 55.0,
        badge: "Popular",
        rating: 4.7,
        reviews: 1110,
        pill: "Waterproof",
        img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1400&q=80",
      },
      {
        title: "Kitchen Pro Blender",
        price: 59.99,
        oldPrice: 79.99,
        badge: "Save 25%",
        rating: 4.4,
        reviews: 300,
        pill: "1200W",
        img: "https://images.unsplash.com/photo-1571687949920-b3b38d1f22f5?auto=format&fit=crop&w=1400&q=80",
      },
    ],
    []
  );

  const testimonials = useMemo(
    () => [
      {
        name: "Ayesha K.",
        role: "Verified Buyer",
        text: "Premium feel + super smooth checkout. Delivery updates were accurate and quick.",
      },
      {
        name: "Hassan R.",
        role: "Repeat Customer",
        text: "Collections are perfectly curated. It feels like a real branded store — not a template.",
      },
      {
        name: "Mariam S.",
        role: "Verified Buyer",
        text: "Good deals without quality compromise. Support replied fast. Highly recommended.",
      },
    ],
    []
  );

  return (
    <div className="min-h-screen overflow-x-hidden bg-neutral-950 text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(16,185,129,0.16)_0%,rgba(0,0,0,0)_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_80%_10%,rgba(244,63,94,0.12)_0%,rgba(0,0,0,0)_60%)]" />
        <div className="absolute inset-0 opacity-[0.22] bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_42%_at_50%_18%,#000_55%,transparent_100%)]" />
      </div>

      <Header mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />

      <main>
        {/* HERO */}
        <section className="relative">
          <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 sm:pt-10 lg:px-8 lg:pt-14">
            <div
              className={[
                "grid gap-8 lg:grid-cols-2 lg:items-center",
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
                "transition-all duration-700 ease-out",
              ].join(" ")}
            >
              {/* Left */}
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs shadow-sm backdrop-blur">
                  <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="text-white/80">
                    Free delivery over <span className="font-semibold text-white">PKR 4,999</span>
                  </span>
                </div>

                <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
                  Premium shopping,{" "}
                  <span className="bg-gradient-to-r from-emerald-400 to-rose-400 bg-clip-text text-transparent">
                    made effortless
                  </span>
                  .
                </h1>

                <p className="mt-3 text-sm leading-relaxed text-white/70 sm:mt-4 sm:text-lg">
                  A modern storefront UI with real imagery, trust signals, and a conversion-first layout.
                </p>

                {/* Search */}
                <div className="mt-5">
                  <div className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-2 shadow-[0_12px_60px_rgba(0,0,0,0.35)] backdrop-blur sm:flex-row sm:items-center">
                    <div className="flex items-center gap-2 px-2 sm:px-1">
                      <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-white">
                        <SearchIcon />
                      </div>
                      <input
                        className="h-10 w-full bg-transparent text-sm text-white outline-none placeholder:text-white/40"
                        placeholder="Search products, brands, categories…"
                      />
                    </div>
                    <button className="h-11 rounded-xl bg-white px-4 text-sm font-semibold text-neutral-950 transition hover:-translate-y-0.5 sm:h-10">
                      Search
                    </button>
                  </div>
                </div>

                {/* CTA (mobile full width) */}
                <div className="mt-5 grid gap-3 sm:flex sm:items-center">
                  <a
                    href="#featured"
                    className="inline-flex w-full items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-neutral-950 shadow-lg transition hover:-translate-y-0.5 sm:w-auto"
                  >
                    Shop Featured <span className="ml-2">→</span>
                  </a>

                  <a
                    href="#categories"
                    className="inline-flex w-full items-center justify-center rounded-2xl border border-white/12 bg-white/5 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-white/10 sm:w-auto"
                  >
                    Explore Categories
                  </a>
                </div>

                {/* Stats */}
                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  <Stat label="Delivery" value="24–72h" />
                  <Stat label="Returns" value="7 days" />
                  <Stat label="Support" value="24/7" />
                  <Stat label="Payments" value="COD + Cards" />
                </div>
              </div>

              {/* Right */}
              <div className="relative">
                <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-emerald-500/15 via-transparent to-rose-500/15 blur-2xl" />

                <div className="overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/5 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur">
                  <div className="relative">
                    <SafeImage
                      src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1400&q=80"
                      alt="Hero"
                      className="aspect-[16/10] w-full object-cover sm:aspect-[16/9]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-black/15" />

                    <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                      <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                      New Season Deals
                    </div>
                  </div>

                  <div className="grid gap-4 p-4 sm:grid-cols-2">
                    <MiniProduct
                      title="Wireless Audio"
                      subtitle="Crystal sound"
                      price="PKR 12,999"
                      hint="Best Seller"
                      img={products[0].img}
                    />
                    <MiniProduct
                      title="Smart Wear"
                      subtitle="Track your day"
                      price="PKR 8,499"
                      hint="Limited"
                      img={products[1].img}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Trust bar */}
            <div className="mt-8 grid gap-3 rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur sm:grid-cols-3 lg:mt-10">
              <TrustItem title="Authentic Products" desc="Verified sellers & quality checks" icon="✅" />
              <TrustItem title="Fast Delivery" desc="Reliable shipping nationwide" icon="🚚" />
              <TrustItem title="Easy Returns" desc="Hassle-free 7-day returns" icon="🔁" />
            </div>
          </div>
        </section>

        {/* Categories */}
        <section id="categories" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Browse" title="Shop by Category" desc="Premium image cards with hover polish." />

          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c) => (
              <a
                key={c.title}
                href={c.href}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:bg-white/8"
              >
                <SafeImage
                  src={c.img}
                  alt={c.title}
                  className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/10" />
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  <span>{c.icon}</span> {c.tag}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-base font-semibold text-white">{c.title}</h3>
                  <p className="mt-1 text-sm text-white/70">{c.desc}</p>
                  <div className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-white">
                    Explore <span className="transition group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Featured */}
        <section id="featured" className="bg-black/25">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <SectionHeading
                eyebrow="Featured"
                title="Best Deals, Premium Picks"
                desc="Dark premium product cards with real images."
              />
              <div className="flex gap-2">
                <button className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10">
                  Filters
                </button>
                <button className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-neutral-950 transition">
                  View All
                </button>
              </div>
            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((p) => (
                <ProductCard key={p.title} p={p} />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Reviews"
            title="What customers say"
            desc="Social proof cards that match the dark premium aesthetic."
          />
          <div className="mt-7 grid gap-4 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:bg-white/8"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white text-neutral-950 font-bold">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{t.name}</p>
                      <p className="text-xs text-white/60">{t.role}</p>
                    </div>
                  </div>
                  <div className="text-sm text-white">{"★★★★★"}</div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-white/70">“{t.text}”</p>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-7">
            <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-white/50">Stay updated</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">
                  Get deals, drops & product updates.
                </h3>
                <p className="mt-2 text-sm text-white/70">
                  Clean subscription section that converts without looking spammy.
                </p>
              </div>

              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="h-12 w-full rounded-2xl border border-white/10 bg-black/30 px-4 text-sm text-white outline-none placeholder:text-white/40 focus:border-white/20"
                />
                <button className="h-12 rounded-2xl bg-white px-6 text-sm font-semibold text-neutral-950 transition hover:-translate-y-0.5">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

/* ------------------------- Safe Image ------------------------- */

function SafeImage({ src, alt, className }) {
  const [failed, setFailed] = useState(false);

  const placeholder =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(`
      <svg xmlns='http://www.w3.org/2000/svg' width='1200' height='700'>
        <defs>
          <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
            <stop offset='0' stop-color='#111827'/>
            <stop offset='1' stop-color='#0b0f19'/>
          </linearGradient>
        </defs>
        <rect width='100%' height='100%' fill='url(#g)'/>
        <circle cx='20%' cy='25%' r='120' fill='rgba(16,185,129,0.18)'/>
        <circle cx='85%' cy='15%' r='140' fill='rgba(244,63,94,0.16)'/>
        <text x='50%' y='54%' text-anchor='middle' fill='rgba(255,255,255,0.55)' font-size='28' font-family='Arial'>
          Image unavailable
        </text>
      </svg>
    `);

  if (!src || failed) return <img src={placeholder} alt="placeholder" className={className} />;

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
    />
  );
}

/* ------------------------- UI Components ------------------------- */

function Header({ mobileOpen, setMobileOpen }) {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-black/30 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-white text-neutral-950">🛒</span>
          <span className="text-sm font-semibold tracking-tight">NovaMart</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          <a className="text-sm font-semibold text-white/70 hover:text-white" href="#categories">
            Categories
          </a>
          <a className="text-sm font-semibold text-white/70 hover:text-white" href="#featured">
            Featured
          </a>
          <a className="text-sm font-semibold text-white/70 hover:text-white" href="#new">
            New
          </a>
          <a className="text-sm font-semibold text-white/70 hover:text-white" href="#home">
            Home
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex rounded-2xl border border-white/10 bg-white/5 p-2 text-white md:hidden"
            aria-label="Open menu"
          >
            <MenuIcon />
          </button>

          <button className="hidden rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 sm:inline-flex">
            Sign In
          </button>
          <button className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-neutral-950">
            Cart (2)
          </button>
        </div>
      </div>
    </header>
  );
}

function MobileDrawer({ open, onClose }) {
  return (
    <div className={["fixed inset-0 z-40 md:hidden", open ? "" : "pointer-events-none"].join(" ")}>
      <div className={["absolute inset-0 bg-black/55 transition-opacity", open ? "opacity-100" : "opacity-0"].join(" ")} onClick={onClose} />
      <div
        className={[
          "absolute right-0 top-0 h-full w-[86%] max-w-sm border-l border-white/10 bg-neutral-950 shadow-2xl transition-transform",
          open ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        <div className="flex items-center justify-between border-b border-white/10 p-4">
          <div className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-white text-neutral-950">🛒</span>
            <span className="text-sm font-semibold">NovaMart</span>
          </div>
          <button onClick={onClose} className="rounded-xl border border-white/10 bg-white/5 p-2 text-white" aria-label="Close menu">
            <CloseIcon />
          </button>
        </div>

        <div className="p-4">
          <div className="grid gap-2">
            {[
              { label: "Categories", href: "#categories" },
              { label: "Featured", href: "#featured" },
              { label: "New", href: "#new" },
              { label: "Home", href: "#home" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={onClose}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                {l.label}
              </a>
            ))}
          </div>

          <button className="mt-4 w-full rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-neutral-950">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

function SectionHeading({ eyebrow, title, desc }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide text-white/50">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">{title}</h2>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/70">{desc}</p>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
      <p className="text-xs font-semibold text-white/55">{label}</p>
      <p className="mt-1 text-sm font-semibold text-white">{value}</p>
    </div>
  );
}

function TrustItem({ icon, title, desc }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl bg-white/5 p-4">
      <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white text-neutral-950">{icon}</div>
      <div>
        <p className="text-sm font-semibold text-white">{title}</p>
        <p className="mt-1 text-sm text-white/70">{desc}</p>
      </div>
    </div>
  );
}

function MiniProduct({ title, subtitle, price, hint, img }) {
  return (
    <div className="group flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur transition hover:-translate-y-1 hover:bg-white/8">
      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl bg-white/5">
        <SafeImage src={img} alt={title} className="h-full w-full object-cover" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-white">{title}</p>
            <p className="mt-0.5 text-xs text-white/55">{subtitle}</p>
          </div>
          <span className="shrink-0 rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-200">
            {hint}
          </span>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <p className="text-sm font-semibold text-white">{price}</p>
          <span className="text-xs font-semibold text-white/70 transition group-hover:translate-x-1">View →</span>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ p }) {
  const off = Math.max(0, Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100));

  return (
    <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur transition hover:-translate-y-1 hover:bg-white/8">
      <div className="relative">
        <SafeImage src={p.img} alt={p.title} className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

        <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur">{p.badge}</span>
          <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-200 backdrop-blur">
            Save {off}%
          </span>
        </div>

        <button
          className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-2xl bg-white/10 text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15"
          aria-label="Add to wishlist"
        >
          <HeartIcon />
        </button>

        <div className="absolute bottom-4 left-4">
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur">{p.pill}</span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-base font-semibold text-white">{p.title}</h3>

        <div className="mt-2 flex items-center gap-2 text-sm">
          <span className="font-semibold text-white">${p.price.toFixed(2)}</span>
          <span className="text-white/40 line-through">${p.oldPrice.toFixed(2)}</span>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <div className="text-xs text-white/60">
            <span className="font-semibold text-white">{p.rating}</span> • {p.reviews.toLocaleString()} reviews
          </div>
          <div className="text-xs text-white" aria-label="rating">
            {"★★★★★"}
          </div>
        </div>

        <div className="mt-5 grid gap-2">
          <button className="h-11 w-full rounded-2xl bg-white text-sm font-semibold text-neutral-950 transition hover:-translate-y-0.5">
            Add to Cart
          </button>
          <button className="h-11 w-full rounded-2xl border border-white/10 bg-white/5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10">
            Quick View
          </button>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} NovaMart. All rights reserved.</p>
          <p className="text-sm text-white/40">Premium storefront UI built with Tailwind.</p>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------- Icons ------------------------- */

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M10.5 19a8.5 8.5 0 1 1 0-17 8.5 8.5 0 0 1 0 17Z" stroke="currentColor" strokeWidth="2" />
      <path d="M16.8 16.8 21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21s-7-4.6-9.3-8.6C.8 9 .9 6.6 2.7 4.9c1.8-1.8 4.6-1.7 6.4 0L12 7.8l2.9-2.9c1.8-1.8 4.6-1.8 6.4 0 1.8 1.7 1.9 4.1 0 7.5C19 16.4 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}