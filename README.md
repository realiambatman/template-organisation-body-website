# Organisation Body Website Template

A reusable website template for an organisation, association, student union or community body, built with Vite, React and TypeScript. It ships with a complete multi-page layout and placeholder content for a fictional organisation called "Sensix". It is meant to be copied and rebranded: swap the name, text, images and colours for your own organisation and deploy the static build.

This repository is the generic starting point, not a finished site. Everything that mentions Sensix, its people, addresses, dates and figures is sample content to be replaced.

## Features

- Single-page app with client-side page switching (no router dependency): Home, About Us, History, Impact & Reach, Legal & Compliance, Brand Anthem, Publications, Blog, News & Events, Gallery and Contact.
- Home page built from sections: a typographic hero (no photo needed) with an upcoming-events panel, core values, leadership cards, upcoming events and a "get involved" block.
- Responsive navigation bar with dropdown menus on desktop and a full-screen menu on mobile.
- Publications page with tabs (journals, magazines, bulletins) and a detail view.
- Blog with language and category filters and a post detail view.
- News and notices page with category tabs and a detail view.
- Contact page with an accessible form (client-side only, see limitations).
- Optional chat assistant widget backed by the Google Gemini API, restricted by a system prompt to answer only from an organisation knowledge base. Without an API key the widget replies that it is offline and the rest of the site is unaffected.
- Neutral white and ink design with one brand colour. The brand colour is four CSS variables, so rebranding is a four-line change, and three preset palettes (Cobalt, Forest, Ember) are included.
- Themed placeholders for photos, portraits, avatars and publication covers, drawn in the brand colour, so the site looks finished before any real images exist and never depends on a remote image host.

## Tech stack

- React 19 and TypeScript
- Vite 6
- Tailwind CSS 3 (PostCSS build)
- `@google/genai` for the optional chat assistant
- Bricolage Grotesque (headings) and Instrument Sans (text), self-hosted through `@fontsource-variable` packages

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
├── index.html              Page title, meta description, favicon, palette choice
├── index.tsx               React entry point, font imports
├── index.css               Design tokens (colours, radius, fonts), preset
│                           palettes and shared component classes
├── App.tsx                 Page switch: maps page ids to components
├── types.ts                Shared TypeScript types
├── tailwind.config.js      Maps the tokens to Tailwind classes, animations
├── vite.config.ts          Vite config and env variable injection
├── components/
│   ├── Navbar.tsx          Brand mark, menu items and dropdowns
│   ├── ui.tsx              Shared pieces: page header, section heading,
│   │                       placeholder, portrait, avatar, cover
│   ├── Home.tsx            Composes the home page sections
│   ├── Hero.tsx            Hero motto, intro text and "coming up" panel
│   ├── About.tsx           Core values section
│   ├── Leadership.tsx      Executive cards (names, roles, photos, quotes)
│   ├── Events.tsx          Upcoming events list
│   ├── Join.tsx            "Get involved" section
│   ├── Contact.tsx         Contact details and form
│   ├── Footer.tsx          Call to action, footer links, address, palette
│   │                       preview switcher
│   ├── ChatAssistant.tsx   Floating chat widget
│   ├── Pages.tsx           All inner pages (About, History, Impact, Legal,
│   │                       Anthem, Publications, Blog, News, Gallery)
│   └── Icons.tsx           Inline SVG icon components
├── services/
│   └── geminiService.ts    Gemini client, system prompt and knowledge base
└── public/
    └── favicon.svg
```

## Customising the template

Content is written directly in the components rather than loaded from a CMS, so customising means editing these files. A project-wide search for `Sensix` finds every place the sample organisation name appears.

### Name, tagline and metadata

| What | Where |
| --- | --- |
| Browser title and meta description | `index.html` |
| Favicon (letter mark) | `public/favicon.svg` |
| Logo letter and organisation name (header, mobile menu and footer) | `BrandMark` in `components/Navbar.tsx` |
| Footer blurb, address, email, phone, copyright line | `components/Footer.tsx` |
| Package name and description | `package.json` |

### Navigation and pages

- Menu items and dropdowns are the `navItems` array at the top of `components/Navbar.tsx`. Each item `id` is a page id.
- Page ids are mapped to components in the `switch` in `App.tsx`. To add a page, create a component, add a `case` there and add a menu item with the same id.
- Footer links use the same page ids via `setCurrentPage`.

### Text content

| Content | Where |
| --- | --- |
| Hero motto (`motto` array), intro, quote, "Est." year | `components/Hero.tsx` |
| Core values | `components/About.tsx` |
| Leaders (name, role, photo, quote) | `executives` array in `components/Leadership.tsx` |
| Upcoming events (also shown in the hero panel) | `events` array in `components/Events.tsx` |
| Membership/engagement tracks | `components/Join.tsx` |
| Contact details and form subjects | `components/Contact.tsx` |
| About, history timeline, legal, impact figures, anthem, publications, blog posts, news items, gallery | the matching exported component in `components/Pages.tsx` (`AboutUsPage`, `HistoryPage`, `RegistrationPage`, `ImpactPage`, `AnthemPage`, `PublicationsPage`, `BlogPage`, `NewsPage`, `GalleryPage`) |

Publications, blog posts and news items are plain arrays defined inside their page components; edit, add or remove entries there.

### Images and placeholders

The template ships without photographs. Wherever an image belongs, a placeholder from `components/ui.tsx` is drawn in the brand colour instead:

| Component | Used for | To show a real image |
| --- | --- | --- |
| `Portrait` | Leadership cards (initials on a tint) | Add `image: '/images/name.jpg'` to the entry in `components/Leadership.tsx` |
| `Media` | Blog post images | Add `image: '/images/post.jpg'` to the post in `BlogPage` |
| `Cover` | Magazine and journal covers | Add `cover: '/images/cover.jpg'` to the publication in `PublicationsPage` |
| `Placeholder` | Gallery tiles | Replace `<Placeholder />` with an `<img>` in `GalleryPage` |
| `Avatar` | Blog authors, committee members | Initials only |

Put your files in `public/` (for example `public/images/hero.jpg`) and reference them with an absolute path such as `/images/hero.jpg`. Leave the field out to keep the placeholder.

### Rebranding: colours, shape and fonts

The look is driven by a short list of CSS variables at the top of `index.css`. Tailwind classes such as `bg-brand`, `text-ink-muted` or `rounded-card` read those variables (the mapping is in `tailwind.config.js`), so components never contain a hard-coded colour.

To rebrand, change the four brand values. Colours are written as space-separated RGB channels (`27 77 228`, not `#1b4de4`) so that opacity variants like `bg-brand/10` work.

```css
:root,
[data-theme='cobalt'] {
  --brand: 27 77 228;            /* buttons, links, highlights, panels   */
  --brand-strong: 18 56 178;     /* hover and pressed state of the above */
  --brand-soft: 233 239 255;     /* tinted backgrounds and placeholders  */
  --brand-contrast: 255 255 255; /* text and icons placed on --brand     */
}
```

| Token | What it controls |
| --- | --- |
| `--brand`, `--brand-strong`, `--brand-soft`, `--brand-contrast` | The single brand colour, its hover shade, its tint and the text colour used on top of it |
| `--ink`, `--ink-muted`, `--ink-subtle` | Headings and body text, secondary text, captions |
| `--paper`, `--surface`, `--line` | Page background, alternate section background, borders |
| `--radius-control`, `--radius-card` | Corner radius of buttons and inputs, and of cards and panels |
| `--font-display`, `--font-text` | Heading and body typefaces |

Keep `--brand` dark enough for white text (a contrast ratio of at least 4.5:1 against `--brand-contrast`), because it is used for buttons and for text on white. For a light brand colour, set `--brand-contrast` to a dark value instead.

#### Preset palettes

Three palettes are defined in `index.css`:

| Name | `--brand` | Hex |
| --- | --- | --- |
| Cobalt (default) | `27 77 228` | `#1b4de4` |
| Forest | `15 107 79` | `#0f6b4f` |
| Ember | `190 62 14` | `#be3e0e` |

To use a preset, set it on the root element in `index.html`:

```html
<html lang="en" data-theme="forest">
```

To add your own, copy one of the `[data-theme='...']` blocks in `index.css`, rename it and change the four values.

The footer contains a small palette switcher so the presets can be previewed in the running site. It only changes the page until the next reload. Once you have chosen a palette, delete `<PaletteSwitcher />` (and the component above it) from `components/Footer.tsx`.

One colour lives outside the tokens: the favicon background in `public/favicon.svg`.

#### Fonts

Fonts are self-hosted npm packages, imported at the top of `index.tsx`. To change them, install another `@fontsource` package, swap the imports, and update `--font-display` and `--font-text` in `index.css`.

#### Shared classes

`index.css` also defines the reusable patterns the pages are built from: `container-page`, `section`, `title-page`, `title-section`, `lead`, `btn` (with `btn-primary`, `btn-ink`, `btn-outline`), `card`, `chip`, `field`, `tab`, `pill`, `empty` and `article`. Adjust them there to change every instance at once.

### Chat assistant

- The assistant's instructions and knowledge base are the `SYSTEM_INSTRUCTION` string in `services/geminiService.ts`. Rewrite it with your organisation's facts; the assistant is told to answer only from that text.
- The model name is set in the same file.
- The widget title, greeting and the suggested questions (`suggestions` array) are in `components/ChatAssistant.tsx`.
- To remove the assistant entirely, delete `<ChatAssistant />` from `App.tsx`, remove `components/ChatAssistant.tsx` and `services/geminiService.ts`, and uninstall `@google/genai`.

## Known limitations

- All content is hard-coded sample data; there is no CMS or data layer.
- Navigation is held in React state, not the URL. Pages have no individual addresses, the browser back button does not move between pages, and deep links are not possible without adding a router.
- The contact form only shows a confirmation message. It does not send or store anything until you connect it to a backend or form service (`handleSubmit` in `components/Contact.tsx`).
- Several buttons are visual placeholders with no action yet, including event "Register" buttons, the calendar and publication download buttons, blog share buttons, the anthem "Play" button, and the footer Privacy, Terms and Sitemap links (which return to the home page). Footer social links point to `#`.
- The Photo Gallery and Video Gallery pages show placeholder tiles only; the video tiles do not play anything.
- The Gemini API key is bundled into the client-side JavaScript, so anyone can read it from a deployed site. Restrict the key in the provider console or move the call behind your own server endpoint before going public. The chat reply path with a real key was not exercised as part of preparing this template.
- There are no photographs; every image slot shows a generated placeholder until you add your own.
- There are no automated tests and no lint configuration.
