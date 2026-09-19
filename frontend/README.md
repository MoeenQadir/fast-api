# MetroPulse — City & People Data Platform

A modern urban data dashboard for managing **cities** and **people**, built with **Next.js 14**, **TypeScript**, **Tailwind CSS** and a **FastAPI** backend.

Live demo: [https://metropulse.vercel.app](https://metropulse.vercel.app)

## Features

- Dark, brand-driven dashboard UI with a violet/fuchsia identity
- Live city & people data from a FastAPI API (`NEXT_PUBLIC_API_URL`)
- Graceful fallback to a bundled demo dataset when the API is unreachable — runs perfectly on Vercel
- Responsive navigation, hero with stats, feature highlights and a contact section with email/phone/location
- Custom theme, brand icon and metadata for SEO

## Contact

- Email: [myselfxdeveloper@gmail.com](mailto:myselfxdeveloper@gmail.com)
- Phone / WhatsApp: [+92 344 1586424](tel:+923441586424)
- Location: Multan, Punjab, Pakistan

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configure the API

Optional. Copy `.env.example` to `.env.local` and set:

```
NEXT_PUBLIC_API_URL=https://your-api.example.com
```

When unset, the app shows demo data so it always renders without errors.

## Deploy on Vercel

```bash
npm run build
```

Then import the repository on [Vercel](https://vercel.com/new). Set the **Root Directory** to `frontend`, and Vercel auto-detects the Next.js project. The suggested production domain is:

```
https://metropulse.vercel.app
```
