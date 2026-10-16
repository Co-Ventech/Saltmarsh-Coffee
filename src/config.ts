export const SITE = {
  name: 'Saltmarsh Coffee',

  // Sobrescribible por entorno para vistas previas y forks (ver .env.example).
  origin: process.env.NEXT_PUBLIC_SITE_ORIGIN ?? 'https://saltmarshcoffee.example',
  basePathname: '/',
  trailingSlash: false,

  title: 'Saltmarsh Coffee — Small-batch coffee roasted in Bristol',
  description: 'Small-batch, single-origin coffee roasted every Tuesday and Friday in Bristol, delivered to your door or your café.',
} as const;
