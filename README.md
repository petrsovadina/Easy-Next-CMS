# Next.js CMS Boilerplate s Novel Editorem a shadcn/ui 🚀

> Jednoduchý, ale výkonný CMS systém postavený na Next.js, s Novel editorem pro vytváření obsahu a shadcn/ui pro moderní vzhled.

![version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![license](https://img.shields.io/badge/license-MIT-green.svg)

## 📋 Obsah

1. [✨ Funkce](#-funkce)
2. [🏗️ Struktura projektu](#️-struktura-projektu)
3. [🛠️ Prerekvizity](#️-prerekvizity)
4. [🚀 Instalace](#-instalace)
5. [🖥️ Použití](#️-použití)
6. [📁 Popis klíčových souborů](#-popis-klíčových-souborů)
7. [🎨 Customizace](#-customizace)
8. [🛣️ Roadmapa](#️-roadmapa)
9. [🐛 Řešení problémů](#-řešení-problémů)
10. [🤝 Přispívání](#-přispívání)
11. [📄 Licence](#-licence)

## ✨ Funkce

- 📝 Vytváření a editace článků pomocí **Novel editoru**
- 💾 Ukládání článků jako **MDX soubory**
- 📊 Zobrazování seznamu článků a jednotlivých článků na blogu
- 📱 **Responsivní design** díky Tailwind CSS
- 🎨 Moderní UI komponenty díky **shadcn/ui**
- 🔒 Typová bezpečnost s **TypeScriptem**
- ⚡ Serverové renderování a statické generování stránek s **Next.js**

## 🏗️ Struktura projektu

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

## 🛠️ Prerekvizity

- Node.js (verze 14 nebo vyšší)
- npm nebo yarn
- Základní znalost React, Next.js a TypeScript

## 🚀 Instalace

1. Naklonujte tento repozitář:
   ```bash
   git clone https://github.com/your-username/nextjs-cms-boilerplate.git
   ```

2. Přejděte do složky projektu:
   ```bash
   cd nextjs-cms-boilerplate
   ```

3. Nainstalujte závislosti:
   ```bash
   npm install
   # nebo
   yarn install
   ```

4. Vytvořte složku pro obsah blogu:
   ```bash
   mkdir -p content/blog
   ```

5. Spusťte vývojový server:
   ```bash
   npm run dev
   # nebo
   yarn dev
   ```

6. Otevřete prohlížeč a přejděte na `http://localhost:3000`

## 🖥️ Použití

### Vytvoření nového článku

1. Přejděte na `/admin/editor`
2. Zadejte název článku a URL slug
3. Napište obsah článku pomocí Novel editoru
4. Klikněte na tlačítko "Save Post"

### Zobrazení článků

- Seznam všech článků najdete na `/blog`
- Jednotlivé články jsou dostupné na `/blog/[slug]`

## 📁 Popis klíčových souborů

| Soubor | Popis |
|--------|-------|
| `components/Layout.tsx` | Hlavní layout aplikace |
| `components/NovelEditor.tsx` | Komponenta pro editaci článků |
| `components/PostList.tsx` | Komponenta pro zobrazení seznamu článků |
| `lib/posts.ts` | Funkce pro práci s MDX soubory |
| `pages/_app.tsx` | Hlavní komponenta Next.js aplikace |
| `pages/index.tsx` | Domovská stránka |
| `pages/blog/index.tsx` | Stránka se seznamem článků |
| `pages/blog/[slug].tsx` | Stránka pro zobrazení jednotlivých článků |
| `pages/admin/editor.tsx` | Stránka s editorem pro vytváření článků |
| `pages/api/posts.ts` | API endpoint pro ukládání článků |
| `styles/globals.css` | Globální styly aplikace |
| `next.config.js` | Konfigurace Next.js |
| `tailwind.config.ts` | Konfigurace Tailwind CSS |
| `tsconfig.json` | Konfigurace TypeScriptu |

## 🎨 Customizace

### Změna vzhledu

Upravte soubory v `components/` složce pro změnu vzhledu jednotlivých částí aplikace. Pro globální styly upravte `styles/globals.css`.

### Úprava logiky ukládání a načítání příspěvků

Upravte funkce v `lib/posts.ts` pro změnu způsobu, jakým se články ukládají a načítají.

### Přidání nových stránek

Vytvořte nové soubory v složce `pages/` pro přidání nových stránek do vaší aplikace.

## 🛣️ Roadmapa

- [ ] Implementace autentizace pro admin rozhraní
- [ ] Přidání podpory pro náhledové obrázky článků
- [ ] Implementace systému tagů a kategorií
- [ ] Vytvoření vyhledávání v článcích
- [ ] Přidání podpory pro plánované publikování
- [ ] Implementace verzování článků
- [ ] Vytvoření rozhraní pro správu médií
- [ ] Optimalizace výkonu při velkém množství článků
- [ ] Přidání podpory pro více jazyků
- [ ] Implementace komentářů k článkům

> **Tip:** Odškrtněte položky v roadmapě po jejich implementaci!

## 🐛 Řešení problémů

<details>
<summary><strong>Novel editor se nenačítá</strong></summary>

Ujistěte se, že máte nainstalovanou nejnovější verzi `novel` a že váš prohlížeč podporuje všechny potřebné funkce.

</details>

<details>
<summary><strong>Články se nezobrazují</strong></summary>

Zkontrolujte, zda jsou MDX soubory správně uloženy ve složce `content/blog` a zda mají správnou strukturu frontmatter.

</details>

<details>
<summary><strong>Chyby při buildu</strong></summary>

Ujistěte se, že máte správně nakonfigurovaný `next.config.js` a že všechny importy v souborech jsou správné.

</details>

## 🤝 Přispívání

Příspěvky jsou vítány! Prosím, otevřete issue nebo pull request pro jakékoliv návrhy na vylepšení nebo opravy chyb.

1. Fork tohoto repozitáře
2. Vytvořte svou feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit vaše změny (`git commit -m 'Add some AmazingFeature'`)
4. Push do branch (`git push origin feature/AmazingFeature`)
5. Otevřete Pull Request

## 📄 Licence

Tento projekt je licencován pod MIT licencí. Viz soubor `LICENSE` pro více informací.

---

📣 **Doufáme, že vám tento CMS boilerplate usnadní vytváření a správu vašeho blogu. Pokud máte jakékoliv otázky nebo návrhy na vylepšení, neváhejte otevřít issue v tomto repozitáři. Hodně štěstí s vaším projektem!**

