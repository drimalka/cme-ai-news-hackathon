# Design System

Tento projekt používá designový systém inspirovaný AI Predictions 2026.

## 🎨 Barvy

### Hlavní barvy (změň v `index.css`)

```css
--deep-blue: #0A1A3A;      /* Hlavní tmavá barva pozadí */
--electric-blue: #1E5FE8;   /* Primární akcentová barva */
--coral-pink: #F43F5E;      /* Sekundární akcentová barva (CTA) */
--cyan: #4FC3F7;            /* Terciární akcentová barva */
--amber: #FBBF24;           /* Doplňková barva */
```

### Neutrální barvy

```css
--off-white: #F8F9FC;
--dark-text: #0A1A3A;
```

## 🔤 Typografie

### Fonty
- **Display font:** Outfit (nadpisy)
- **Body font:** DM Sans (texty)

### Velikosti nadpisů
- Hero: `text-5xl md:text-7xl lg:text-8xl`
- Sekce: `text-4xl md:text-5xl lg:text-6xl`
- Karty: `text-2xl`

## 📦 Utility třídy

### Sekce

```html
<!-- Tmavá sekce -->
<section class="section-dark">...</section>

<!-- Světlá sekce -->
<section class="section-light">...</section>
```

### Karty

```html
<!-- Glass card (pro tmavé sekce) -->
<div class="glass-card rounded-2xl p-8">...</div>

<!-- Floating card (pro světlé sekce) -->
<div class="floating-card p-8">...</div>
```

### Tlačítka

```html
<!-- Primární CTA -->
<button class="btn-cta">Hlavní akce</button>

<!-- Sekundární -->
<button class="btn-secondary">Více informací</button>
```

### Text gradient

```html
<span class="text-gradient">Gradientový text</span>
```

### Glow efekty

```html
<div class="glow-coral">Červená záře</div>
<div class="glow-cyan">Modrá záře</div>
<div class="glow-blue">Tmavě modrá záře</div>
```

## 🎭 Animace

Používáme `framer-motion` pro animace:

```tsx
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  Animovaný obsah
</motion.div>
```

### Stagger animace pro seznamy

```tsx
{items.map((item, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
  >
    {item}
  </motion.div>
))}
```

## 📐 Spacing

- **Sekce:** `py-24` nebo `py-32`
- **Container:** `container` (max-w-7xl s padding)
- **Karty:** `p-8` nebo `p-10`
- **Gap:** `gap-6` nebo `gap-8`

## 🌟 Particles (plovoucí částice)

```tsx
<div className="absolute inset-0 overflow-hidden pointer-events-none">
  {[...Array(20)].map((_, i) => (
    <div
      key={i}
      className="particle"
      style={{
        width: Math.random() * 4 + 2 + "px",
        height: Math.random() * 4 + 2 + "px",
        left: Math.random() * 100 + "%",
        top: Math.random() * 100 + "%",
        animationDelay: Math.random() * 6 + "s",
      }}
    />
  ))}
</div>
```

## 📁 Struktura projektu

```
web/
├── client/
│   ├── index.html
│   ├── public/
│   │   └── favicon.svg
│   └── src/
│       ├── App.tsx
│       ├── main.tsx
│       ├── index.css          # Design system CSS
│       ├── components/
│       │   ├── ui/            # Základní UI komponenty
│       │   └── landing/       # Komponenty pro landing page
│       ├── pages/
│       │   ├── LandingPage.tsx
│       │   └── not-found.tsx
│       ├── hooks/
│       └── lib/
│           └── utils.ts
├── attached_assets/           # Obrázky a assety
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## 🚀 Spuštění

```bash
# Instalace
npm install

# Development
npm run dev

# Build
npm run build
```





