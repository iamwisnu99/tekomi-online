# Tekomi Online Profile

Aplikasi web modern dan elegan yang dibangun dengan React, TypeScript, dan Vite. Project ini menampilkan landing page yang cantik dengan desain responsif, komponen interaktif, dan animasi yang smooth.

## ✨ Fitur

- **Tech Stack Modern**: Dibangun dengan React 18, TypeScript, dan Vite untuk development yang super cepat
- **Desain Responsif**: Layout yang beradaptasi sempurna di semua perangkat
- **Komponen UI Siap Pakai**: Komponen-komponen cantik menggunakan shadcn/ui dan Radix UI
- **Tailwind CSS**: Framework CSS yang praktis untuk styling super cepat
- **Validasi Form**: Validasi form yang powerful dengan React Hook Form
- **Routing**: Navigasi client-side dengan React Router
- **Animasi Halus**: Animasi smooth dengan Framer Motion
- **State Management**: React Query untuk fetch data dan caching yang efisien
- **Dark Mode Ready**: Siap untuk mendukung dark mode

## 🚀 Mulai Cepat

### Prasyarat
- Node.js 16+ atau Bun
- npm, yarn, atau bun sebagai package manager

### Instalasi

```bash
# Clone repository
git clone <repository-url>

# Masuk ke folder project
cd tekomi-online

# Install dependencies
npm install
# atau
bun install

# Jalankan development server
npm run dev
# atau
bun dev
```

Aplikasi akan bisa diakses di `http://localhost:5173`

## 📝 Script yang Tersedia

```bash
# Jalankan server development dengan hot reload
npm run dev

# Build untuk production
npm run build

# Build untuk environment development
npm run build:dev

# Preview production build
npm run preview

# Cek dengan ESLint
npm run lint
```

## 📁 Struktur Project

```
src/
├── components/           # Komponen React yang bisa dipakai ulang
│   ├── layout/          # Komponen layout (Navbar, Footer)
│   ├── sections/        # Bagian halaman (Hero, About, Gallery, dll)
│   ├── ui/              # Komponen shadcn/ui
│   └── NavLink.tsx
├── hooks/               # Custom React hooks
├── lib/                 # Fungsi utility
├── pages/               # Komponen halaman
├── assets/              # File static
├── App.tsx              # Root component
├── main.tsx             # Entry point
├── App.css              # Style global
├── index.css            # Style dasar
└── vite-env.d.ts        # Tipe environment Vite
```

## 🎨 Halaman

- **Home** (`/`) - Landing page dengan hero section, about, menu, gallery, dan contact
- **Terms** (`/terms`) - Halaman terms of service
- **Privacy** (`/privacy`) - Halaman privacy policy
- **404** - Halaman not found

## 🛠️ Stack Teknologi

| Kategori | Teknologi |
|----------|-----------|
| Frontend Framework | React 18 |
| Bahasa | TypeScript |
| Build Tool | Vite |
| CSS Framework | Tailwind CSS |
| Komponen UI | shadcn/ui, Radix UI |
| Form Handling | React Hook Form |
| Routing | React Router |
| State Management | React Query |
| Animasi | Framer Motion |
| Linting | ESLint |

## 🎯 Dependencies Penting

- `react` & `react-dom` - Library UI
- `react-router-dom` - Untuk routing
- `@tanstack/react-query` - Fetch dan manage data
- `framer-motion` - Animasi
- `tailwindcss` - Styling
- `@hookform/resolvers` - Validasi form
- `class-variance-authority` - Utility untuk styling komponen
- `clsx` - Conditional CSS classes
- `cmdk` - Komponen command menu
- `sonner` - Toast notifications
- `zod` - Schema validation

## 🔧 File Konfigurasi

- **`vite.config.ts`** - Konfigurasi Vite
- **`tailwind.config.ts`** - Konfigurasi Tailwind CSS
- **`tsconfig.json`** - Konfigurasi TypeScript
- **`eslint.config.js`** - Konfigurasi ESLint
- **`postcss.config.js`** - Konfigurasi PostCSS

## 📦 Build untuk Production

```bash
npm run build
```

Ini akan membuat optimized production build di folder `dist` yang siap di-deploy.

Untuk preview production build secara lokal:

```bash
npm run preview
```

## 🌐 Deploy

Project ini bisa di-deploy ke berbagai platform:

- **Vercel** - Pilihan terbaik untuk pengalaman yang smooth
- **Netlify** - Support yang bagus untuk aplikasi SPA
- **GitHub Pages** - Hosting gratis untuk static sites
- **Hosting Static lainnya** - Karena ini adalah built SPA

File `public/_redirects` sudah dikonfigurasi untuk Netlify routing.

## 📄 Lisensi

Project ini menggunakan lisensi MIT - lihat file [LICENSE](LICENSE) untuk detail lebih lanjut.

## 👤 Pembuat

**PRIMA WISNU ABROR AZMI**

## 💬 Bantuan

Ada pertanyaan atau feedback? Buka issue di repository ini!

## 📚 Referensi Berguna

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [React Router](https://reactrouter.com)

---

Dibuat dengan oleh PRIMA WISNU ABROR AZMI