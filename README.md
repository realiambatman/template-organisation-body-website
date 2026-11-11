# Organisation Body Website Template

A reusable website template for an organisation, association, student union or community body, built with Vite, React and TypeScript. It ships with a complete multi-page layout and placeholder content for a fictional organisation called "Sensix". It is meant to be copied and rebranded: swap the name, text, images and colours for your own organisation and deploy the static build.

This repository is the generic starting point, not a finished site. Everything that mentions Sensix, its people, addresses, dates and figures is sample content to be replaced.

## Features

- Single-page app with client-side page switching (no router dependency): Home, About Us, History, Impact & Reach, Legal & Compliance, Brand Anthem, Publications, Blog, News & Events, Gallery and Contact.
- Home page built from sections: hero, core values, leadership cards, upcoming events and a "get involved" block.
- Responsive navigation bar with dropdown menus on desktop and a full-screen menu on mobile.
- Publications page with tabs (journals, magazines, bulletins) and a detail view.
- Blog with language and category filters and a post detail view.
- News and notices page with category tabs and a detail view.
- Contact page with an accessible form (client-side only, see limitations).
- Optional chat assistant widget backed by the Google Gemini API, restricted by a system prompt to answer only from an organisation knowledge base. Without an API key the widget replies that it is offline and the rest of the site is unaffected.
- Tailwind CSS theme with a small set of brand colour tokens, so recolouring the whole site is a few lines of config.

## Tech stack

- React 19 and TypeScript
- Vite 6
- Tailwind CSS 3 (PostCSS build)
- `@google/genai` for the optional chat assistant
- Google Fonts (Inter, Playfair Display), loaded from `index.html`

## Prerequisites

- Node.js 18 or newer and npm

## Getting started

```bash
npm install
npm run dev
```

The dev server runs on http://localhost:3000.

To create a production build and preview it locally:

```bash
npm run build
npm run preview
```

The build output is written to `dist/` and can be hosted on any static file host.

## Environment variables

Copy `.env.example` to `.env.local` and fill in the values you need.

| Variable | Required | Description |
| --- | --- | --- |
| `GEMINI_API_KEY` | No | Google Gemini API key for the chat assistant. If unset, the assistant answers with an offline message. |

The key is read at build time in `vite.config.ts` and embedded in the client bundle. See the limitations section before deploying with a key.

## Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the Vite dev server on port 3000 |
| `npm run build` | Build the production bundle into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run typecheck` | Run the TypeScript compiler without emitting files |

## Project structure

```
.
├── index.html              Page title, meta description, favicon, font links
├── index.tsx               React entry point
├── index.css               Tailwind directives and a few global styles
├── App.tsx                 Page switch: maps page ids to components
├── types.ts                Shared TypeScript types
├── tailwind.config.js      Brand colours, fonts, animations
├── vite.config.ts          Vite config and env variable injection
├── components/
│   ├── Navbar.tsx          Brand mark, menu items and dropdowns
│   ├── Home.tsx            Composes the home page sections
│   ├── Hero.tsx            Hero headline, intro text and hero image
│   ├── About.tsx           Core values section
│   ├── Leadership.tsx      Executive cards (names, roles, photos, quotes)
│   ├── Events.tsx          Upcoming events list
│   ├── Join.tsx            "Get involved" section
│   ├── Contact.tsx         Contact details and form
│   ├── Footer.tsx          Footer links, address, social icons
│   ├── ChatAssistant.tsx   Floating chat widget
│   ├── Pages.tsx           All inner pages (About, History, Impact, Legal,
│   │                       Anthem, Publications, Blog, News, Gallery)
│   └── Icons.tsx           Inline SVG icon components
├── services/
│   └── geminiService.ts    Gemini client, system prompt and knowledge base
└── public/
    ├── favicon.svg
    └── placeholders/       Neutral placeholder images (photo, cover)
```

## Customising the template

Content is written directly in the components rather than loaded from a CMS, so customising means editing these files. A project-wide search for `Sensix` finds every place the sample organisation name appears.

### Name, tagline and metadata

| What | Where |
| --- | --- |
| Browser title and meta description | `index.html` |
| Favicon (letter mark) | `public/favicon.svg` |
| Logo letter, organisation name and tagline in the header | `components/Navbar.tsx` (brand block) |
| Footer name, blurb, address, email, phone, copyright line | `components/Footer.tsx` |
| Package name and description | `package.json` |

### Navigation and pages

- Menu items and dropdowns are the `navItems` array at the top of `components/Navbar.tsx`. Each item `id` is a page id.
- Page ids are mapped to components in the `switch` in `App.tsx`. To add a page, create a component, add a `case` there and add a menu item with the same id.
- Footer links use the same page ids via `setCurrentPage`.

### Text content

| Content | Where |
| --- | --- |
| Hero headline, intro, quote, "Est." year | `components/Hero.tsx` |
| Core values | `components/About.tsx` |
| Leaders (name, role, photo, quote) | `executives` array in `components/Leadership.tsx` |
| Upcoming events | `components/Events.tsx` |
| Membership/engagement tracks | `components/Join.tsx` |
| Contact details and form subjects | `components/Contact.tsx` |
| About, history timeline, legal, impact figures, anthem, publications, blog posts, news items, gallery | the matching exported component in `components/Pages.tsx` (`AboutUsPage`, `HistoryPage`, `RegistrationPage`, `ImpactPage`, `AnthemPage`, `PublicationsPage`, `BlogPage`, `NewsPage`, `GalleryPage`) |

Publications, blog posts and news items are plain arrays defined inside their page components; edit, add or remove entries there.

### Images

- The hero image, leadership portraits and some blog and journal covers are remote stock photos referenced by URL (Unsplash). Replace the `src`/`image`/`cover` values in `Hero.tsx`, `Leadership.tsx` and `Pages.tsx`.
- Blog author avatars are generated from the author name by ui-avatars.com.
- The gallery and magazine covers use the local placeholders in `public/placeholders/`.
- To use your own images, put them in `public/` (for example `public/images/hero.jpg`) and reference them with an absolute path such as `/images/hero.jpg`. Update the `alt` text to describe the new image.

### Colours and fonts

Brand colours are defined once in `tailwind.config.js` under `theme.extend.colors.brand` and used throughout as `brand-pink`, `brand-green`, `brand-blue`, `brand-navy`, `brand-slate` and `brand-light` (for example `bg-brand-navy`, `text-brand-blue`). Change the hex values there to recolour the site.

Two places hold colours outside that config: the scrollbar colours in `index.css` and the avatar background colour in the ui-avatars URL in `components/Pages.tsx`.

Fonts are set in `tailwind.config.js` (`fontFamily.sans` and `fontFamily.serif`). If you change them, also update the Google Fonts link in `index.html`.

### Chat assistant

- The assistant's instructions and knowledge base are the `SYSTEM_INSTRUCTION` string in `services/geminiService.ts`. Rewrite it with your organisation's facts; the assistant is told to answer only from that text.
- The model name is set in the same file.
- The widget title and greeting are in `components/ChatAssistant.tsx`.
- To remove the assistant entirely, delete `<ChatAssistant />` from `App.tsx`, remove `components/ChatAssistant.tsx` and `services/geminiService.ts`, and uninstall `@google/genai`.

## Known limitations

- All content is hard-coded sample data; there is no CMS or data layer.
- Navigation is held in React state, not the URL. Pages have no individual addresses, the browser back button does not move between pages, and deep links are not possible without adding a router.
- The contact form only shows a confirmation message. It does not send or store anything until you connect it to a backend or form service (`handleSubmit` in `components/Contact.tsx`).
- Several buttons are visual placeholders with no action yet, including event "Register" buttons, the calendar and publication download buttons, blog share buttons, and the footer Privacy, Terms and Sitemap links (which return to the home page). Footer social links point to `#` and all use the same icon.
- The Photo Gallery and Video Gallery menu items open the same placeholder gallery page.
- The Gemini API key is bundled into the client-side JavaScript, so anyone can read it from a deployed site. Restrict the key in the provider console or move the call behind your own server endpoint before going public. The chat reply path with a real key was not exercised as part of preparing this template.
- Remote images depend on third-party hosts staying available.
- There are no automated tests and no lint configuration.
