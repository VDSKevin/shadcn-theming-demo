# Steps to Recreate This Project

## 1. Create Next.js Project
```bash
npx create-next-app@latest shadcn-theming-demo --typescript --tailwind --eslint
cd shadcn-theming-demo
```

When prompted, choose:
- Would you like to use TypeScript? › Yes
- Would you like to use ESLint? › Yes
- Would you like to use Tailwind CSS? › Yes
- Would you like to use `src/` directory? › Yes
- Would you like to use App Router? › Yes
- Would you like to customize the default import alias (@/*)? › No

## 2. Install and Initialize Shadcn
```bash
# Install shadcn CLI
npm install -D @shadcn/ui

# Initialize shadcn
npx shadcn@latest init
```

When prompted during initialization:
- Would you like to use TypeScript (recommended)? › Yes
- Which style would you like to use? › Default
- Which color would you like to use as base color? › Slate
- Where is your global CSS file? › app/globals.css
- Do you want to use CSS variables for colors? › No

## 3. Install Required Components
```bash
npx shadcn@latest add
```

## 4. Create Theme Structure
```bash
# Create themes directory
mkdir -p styles/themes

# Create theme files
touch styles/themes/brand-a.css
touch styles/themes/brand-b.css
```

## 5. Create Theme Provider
Create file: `components/theme-provider.tsx`
- Add the theme provider code that manages theme state and context

## 6. Update Global CSS
Update `app/globals.css`:
- Add theme imports
- Set up base styles

## 7. Create Demo Page
Update `app/page.tsx`:
- Add theme toggle functionality
- Create demo components
- Set up layout structure

## 8. Test and Run
```bash
next dev --turbopack
```

## Project Structure
```
shadcn-theming-demo/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ui/            # shadcn components
│   │   └── theme-provider.tsx
│   ├── styles/
│   │   ├── brand-a.css
│   │   └── brand-b.css
│   └── lib/
│       └── utils.ts
├── README.md
├── RECREATE.md
├── LICENSE
└── .gitignore
```

## Additional Notes
- Make sure to use `npx shadcn@latest` instead of `npx shadcn-ui@latest` when adding components
- The theme system uses CSS variables with the `data-theme` attribute for switching
- Both light and dark mode variations are included in each brand theme