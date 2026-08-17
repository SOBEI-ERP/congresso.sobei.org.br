# congresso.sobei.org.br

Landing page do Congresso SOBEI — Sociedade Beneficente Equilíbrio de Interlagos.

## Stack

- **Next.js 16** (App Router)
- **React 19**
- **Vanilla CSS** (design tokens via CSS custom properties)

## Início Rápido

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev

# Build de produção
npm run build
npm start
```

## Estrutura

```
src/
├── app/
│   ├── globals.css       # Estilos globais + imports
│   ├── layout.js         # Layout raiz (Header + Footer)
│   ├── page.js           # Landing page principal
│   ├── favicon.ico
│   └── icon.png
├── components/
│   ├── Header.jsx
│   └── Footer.jsx
└── styles/
    ├── variables.css     # Design tokens
    ├── header.css
    ├── footer.css
    └── home.css
```
