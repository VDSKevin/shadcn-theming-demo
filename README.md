# Shadcn UI Theming Demo

A demonstration of multi-brand theming using Shadcn UI and Tailwind CSS.

## Features

- Multiple brand themes (Brand A and Brand B)
- Theme switching capability
- Component demonstrations
- Mixed theme usage
- Full shadcn/ui component integration

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [your-repo-url]
cd [your-repo-name]
```

2. Install dependencies:
```bash
npm install
# or
yarn
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/            # shadcn/ui components
│   └── theme-provider.tsx
├── styles/
│   └── themes/
│       ├── brand-a.css
│       └── brand-b.css
└── lib/
    └── utils.ts
```

## Theming System

The project uses a CSS variables-based theming system with Tailwind CSS. Themes are defined in separate CSS files and can be switched dynamically using the `data-theme` attribute.

### Available Themes

- Brand A: Purple-based theme with rounded corners
- Brand B: Blue-based theme with sharp corners

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details