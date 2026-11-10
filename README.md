# Tiyin — Локальный финансовый ИИ-ассистент для Узбекистана

Современный адаптивный лендинг для **Tiyin** — локального (on-device) финансового ИИ-ассистента на смартфоне.

## Стек технологий
- **React 19** + **TypeScript**
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- **Vite 8**
- **Lucide React** (иконки)

## Локальный запуск

```bash
npm install
npm run dev
```

## Проверка типов, тесты и продакшн-сборка

```bash
npm run lint
npm run test
npm run build
```

## Деплой на Vercel
Проект полностью настроен для деплоя на Vercel (`vercel.json`):
- **Framework Preset**: `Vite`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
