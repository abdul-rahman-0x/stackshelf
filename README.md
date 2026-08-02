<p align="center">
  <img src="./public/stackshelf.svg" alt="StackShelf Logo" width="120" height="120">
</p>

<h1 align="center">StackShelf</h1>

<p align="center">
  <strong>A fast, open-source collection of handpicked tools for web builders.</strong>
</p>

<p align="center">
Finding great tools shouldn't mean digging through dozens of browser bookmarks or messy Twitter threads. StackShelf gives you one fast, simple place to search, filter, and discover software that actually helps you build faster.
</p>

<p align="center">
  <a href="https://stackshelf-app.vercel.app"><strong>Explore Live Demo »</strong></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.2_App_Router-black?style=flat&logo=nextdotjs" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19-%2361DAFB?style=flat&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-Strict-%233178C6?style=flat&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/TailwindCSS-v4-%2306B6D4?style=flat&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Runtime-Bun-%23000000?style=flat&logo=bun&logoColor=white" alt="Bun" />
  <img src="https://img.shields.io/badge/Vercel-Deployed-black?style=flat&logo=vercel" alt="Vercel" />
  <img src="https://img.shields.io/badge/License-MIT-blue?style=flat" alt="License" />
</p>


## Core Features

- **Instant Resource Search:** Real-time client-side search across titles, descriptions, categories, and tags.
- **URL State Synchronization:** Search queries sync bidirectionally with URL parameters (`?query=`).
- **Dynamic Category Routing:** Categorized route views (`/categories/[category]`) with dynamic resource counters.
- **Theme Customization:** Automatic system theme detection with manual light and dark mode toggling.
- **Resource Submissions:** Integrated dialog workflow linking directly to GitHub Issues for resource verification.


## Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | Next.js 16 (App Router) |
| **UI Library** | React 19 |
| **Language** | TypeScript (Strict Mode) |
| **Styling** | Tailwind CSS v4 |
| **Theme Management** | `next-themes` |
| **Icons & Primitives** | Lucide React / Radix UI Dialog |
| **State Utilities** | `use-debounce` |
| **Runtime & Tooling** | Bun |
| **Deployment** | Vercel |

---


## Project Structure

```bash
stackshelf/
├── app/                               # Next.js App Router
│   ├── categories/
│   │   └── [category]/                # Dynamic category route page
│   │       └── page.tsx
│   ├── components/                    # Modular application components
│   │   ├── layout/                    # Shell layout (Sidebar, Footer)
│   │   │   ├── footer.tsx
│   │   │   └── sidebar.tsx
│   │   ├── resources/                 # Resource UI domain components
│   │   │   ├── not-found.tsx
│   │   │   ├── resource-card.tsx
│   │   │   ├── search-bar.tsx
│   │   │   └── submit-form.tsx
│   │   ├── theme-provider.tsx         # Theme provider wrapper
│   │   └── theme-toggle.tsx           
│   ├── favicon.ico
│   ├── globals.css                    # Tailwind CSS v4 core directives
│   ├── layout.tsx                     # Root app shell & header
│   ├── not-found.tsx                  # Global 404 fallback page
│   └── page.tsx                       # Homepage resource grid
│
├── data/
│   └── resources.ts                   # Typed dataset & GitHub issue constants
│
├── public/
│   ├── library/icons/                 # SVG brand logo assets
│   └── stackshelf.svg                 # StackShelf brand logo
│
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```


## Getting Started

### 1. Prerequisites

- Node.js 20+
- Bun:(`npm install -g bun`)

### 2. Installation

```bash
git clone https://github.com/abdul-rahman-0x/stackshelf.git
cd stackshelf
bun install
```

### 3. Development

```bash
bun dev
```

Open `http://localhost:3000` to view the application.

### 4. Production Build

```bash
bun run build
bun run start
```


## Author

Built by **[Abdul Rahman](https://github.com/abdul-rahman-0x)**
