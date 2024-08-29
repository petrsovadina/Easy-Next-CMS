# Next.js CMS Boilerplate s Novel Editorem a shadcn/ui

Tento boilerplate poskytuje jednoduché, ale výkonné řešení pro implementaci Content Management System (CMS) do vašeho Next.js projektu. Využívá Novel editor pro vytváření obsahu, ukládá články jako MDX soubory přímo v repozitáři projektu a používá shadcn/ui pro moderní a konzistentní vzhled.

## Obsah

1. [Funkce](#funkce)
2. [Struktura projektu](#struktura-projektu)
3. [Prerekvizity](#prerekvizity)
4. [Instalace](#instalace)
5. [Použití](#použití)
6. [Popis klíčových souborů](#popis-klíčových-souborů)
7. [Customizace](#customizace)
8. [Roadmapa](#roadmapa)
9. [Řešení problémů](#řešení-problémů)
10. [Přispívání](#přispívání)
11. [Licence](#licence)

## Funkce

- Vytváření a editace článků pomocí Novel editoru
- Ukládání článků jako MDX soubory
- Zobrazování seznamu článků a jednotlivých článků na blogu
- Responsivní design díky Tailwind CSS
- Moderní UI komponenty díky shadcn/ui
- Typová bezpečnost s TypeScriptem
- Serverové renderování a statické generování stránek s Next.js

## Struktura projektu

```
nextjs-cms-boilerplate/
├── components/
│   ├── Layout.tsx
│   ├── NovelEditor.tsx
│   └── PostList.tsx
├── lib/
│   └── posts.ts
├── pages/
│   ├── _app.tsx
│   ├── index.tsx
│   ├── blog/
│   │   ├── index.tsx
│   │   └── [slug].tsx
│   ├── admin/
│   │   └── editor.tsx
│   └── api/
│       └── posts.ts
├── public/
│   └── assets/
├── styles/
│   └── globals.css
├── content/
│   └── blog/
│       └── example-post.mdx
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

## Prerekvizity

- Node.js (verze 14 nebo vyšší)
- npm nebo yarn
- Základní znalost React, Next.js a TypeScript

## Instalace

1. Naklonujte tento repozitář:
   ```
   git clone https://github.com/your-username/nextjs-cms-boilerplate.git
   ```

2. Přejděte do složky projektu:
   ```
   cd nextjs-cms-boilerplate
   ```

3. Nainstalujte závislosti:
   ```
   npm install
   ```
   nebo pokud používáte yarn:
   ```
   yarn install
   ```

4. Vytvořte složku pro obsah blogu:
   ```
   mkdir -p content/blog
   ```

5. Spusťte vývojový server:
   ```
   npm run dev
   ```
   nebo
   ```
   yarn dev
   ```

6. Otevřete prohlížeč a přejděte na `http://localhost:3000`

## Použití

### Vytvoření nového článku

1. Přejděte na `/admin/editor`
2. Zadejte název článku a URL slug
3. Napište obsah článku pomocí Novel editoru
4. Klikněte na tlačítko "Save Post"

### Zobrazení článků

- Seznam všech článků najdete na `/blog`
- Jednotlivé články jsou dostupné na `/blog/[slug]`

## Popis klíčových souborů

- `components/Layout.tsx`: Hlavní layout aplikace
- `components/NovelEditor.tsx`: Komponenta pro editaci článků
- `components/PostList.tsx`: Komponenta pro zobrazení seznamu článků
- `lib/posts.ts`: Funkce pro práci s MDX soubory
- `pages/_app.tsx`: Hlavní komponenta Next.js aplikace
- `pages/index.tsx`: Domovská stránka
- `pages/blog/index.tsx`: Stránka se seznamem článků
- `pages/blog/[slug].tsx`: Stránka pro zobrazení jednotlivých článků
- `pages/admin/editor.tsx`: Stránka s editorem pro vytváření článků
- `pages/api/posts.ts`: API endpoint pro ukládání článků
- `styles/globals.css`: Globální styly aplikace
- `next.config.js`: Konfigurace Next.js
- `tailwind.config.ts`: Konfigurace Tailwind CSS
- `tsconfig.json`: Konfigurace TypeScriptu

## Customizace

### Změna vzhledu

Upravte soubory v `components/` složce pro změnu vzhledu jednotlivých částí aplikace. Pro globální styly upravte `styles/globals.css`.

### Úprava logiky ukládání a načítání příspěvků

Upravte funkce v `lib/posts.ts` pro změnu způsobu, jakým se články ukládají a načítají.

### Přidání nových stránek

Vytvořte nové soubory v složce `pages/` pro přidání nových stránek do vaší aplikace.

## Roadmapa

1. Implementace autentizace pro admin rozhraní
2. Přidání podpory pro náhledové obrázky článků
3. Implementace systému tagů a kategorií
4. Vytvoření vyhledávání v článcích
5. Přidání podpory pro plánované publikování
6. Implementace verzování článků
7. Vytvoření rozhraní pro správu médií
8. Optimalizace výkonu při velkém množství článků
9. Přidání podpory pro více jazyků
10. Implementace komentářů k článkům

## Řešení problémů

### Novel editor se nenačítá

Ujistěte se, že máte nainstalovanou nejnovější verzi `novel` a že váš prohlížeč podporuje všechny potřebné funkce.

### Články se nezobrazují

Zkontrolujte, zda jsou MDX soubory správně uloženy ve složce `content/blog` a zda mají správnou strukturu frontmatter.

### Chyby při buildu

Ujistěte se, že máte správně nakonfigurovaný `next.config.js` a že všechny importy v souborech jsou správné.

## Přispívání

Příspěvky jsou vítány! Prosím, otevřete issue nebo pull request pro jakékoliv návrhy na vylepšení nebo opravy chyb.

## Licence

Tento projekt je licencován pod MIT licencí. Viz soubor `LICENSE` pro více informací.

---

Doufáme, že vám tento CMS boilerplate usnadní vytváření a správu vašeho blogu. Pokud máte jakékoliv otázky nebo návrhy na vylepšení, neváhejte otevřít issue v tomto repozitáři. Hodně štěstí s vaším projektem!
