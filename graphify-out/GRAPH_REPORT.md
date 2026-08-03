# Graph Report - .  (2026-08-03)

## Corpus Check
- 30 files · ~21,547 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 154 nodes · 164 edges · 17 communities (14 shown, 3 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Community 0
- Community 1
- Community 2
- Community 3
- Community 4
- Community 5
- Community 6
- Community 7
- Community 8
- Community 9
- Community 10
- Community 13
- Community 14
- Community 15

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `AnimatedSection()` - 7 edges
3. `include` - 7 edges
4. `scripts` - 5 edges
5. `lib` - 4 edges
6. `LichessRatings` - 3 edges
7. `getLichessRatings()` - 3 edges
8. `AboutPage()` - 2 edges
9. `BookPage()` - 2 edges
10. `HomePage()` - 2 edges

## Surprising Connections (you probably didn't know these)
- `HomePage()` --calls--> `getLichessRatings()`  [EXTRACTED]
  app/page.tsx → lib/lichess.ts
- `Props` --references--> `LichessRatings`  [EXTRACTED]
  components/HomeClient.tsx → lib/lichess.ts

## Import Cycles
- None detected.

## Communities (17 total, 3 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.11
Nodes (19): dom, dom.iterable, esnext, compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules (+11 more)

### Community 1 - "Community 1"
Cohesion: 0.11
Nodes (17): framer-motion, next, dependencies, framer-motion, next, react, react-dom, name (+9 more)

### Community 2 - "Community 2"
Cohesion: 0.12
Nodes (17): eslint, eslint-config-next, devDependencies, eslint, eslint-config-next, tailwindcss, @tailwindcss/postcss, @types/node (+9 more)

### Community 3 - "Community 3"
Cohesion: 0.21
Nodes (7): HomePage(), HomeClient(), Props, FALLBACK, getLichessRatings(), LICHESS_PROFILE_URL, LichessRatings

### Community 4 - "Community 4"
Cohesion: 0.18
Nodes (7): AboutPage(), breadcrumbJsonLd, metadata, AnimatedSection(), AnimatedSectionProps, Variant, variantMap

### Community 5 - "Community 5"
Cohesion: 0.21
Nodes (7): jsonLd, metadata, Footer(), footerLinks, Nav(), navLinks, PageTransition()

### Community 6 - "Community 6"
Cohesion: 0.20
Nodes (7): breadcrumbJsonLd, metadata, reviewsJsonLd, progressCards, stats, SuccessStoriesPage(), testimonials

### Community 7 - "Community 7"
Cohesion: 0.22
Nodes (5): BookPage(), steps, breadcrumbJsonLd, howToJsonLd, metadata

### Community 8 - "Community 8"
Cohesion: 0.22
Nodes (7): breadcrumbJsonLd, metadata, pricingJsonLd, faqs, groupPackages, PricingPageClient(), privatePackages

### Community 9 - "Community 9"
Cohesion: 0.20
Nodes (9): **/*.mts, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts, **/*.tsx, exclude (+1 more)

### Community 10 - "Community 10"
Cohesion: 0.25
Nodes (5): breadcrumbJsonLd, faqJsonLd, metadata, programs, ProgramsPage()

## Knowledge Gaps
- **77 isolated node(s):** `metadata`, `breadcrumbJsonLd`, `steps`, `metadata`, `howToJsonLd` (+72 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `AnimatedSection()` connect `Community 4` to `Community 3`, `Community 6`, `Community 7`, `Community 8`, `Community 10`?**
  _High betweenness centrality (0.068) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `Community 2` to `Community 1`?**
  _High betweenness centrality (0.034) - this node is a cross-community bridge._
- **Why does `compilerOptions` connect `Community 0` to `Community 9`?**
  _High betweenness centrality (0.028) - this node is a cross-community bridge._
- **What connects `metadata`, `breadcrumbJsonLd`, `steps` to the rest of the system?**
  _77 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.1111111111111111 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._