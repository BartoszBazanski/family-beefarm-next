import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pasiekaszczygielkowa.pl';

  const staticRoutes = [
    '',
    '/kontakt',
    '/miody',
    '/miody/nawlociowy',
    '/miody/spadziowy',
    '/miody/wrzosowy',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  })) as MetadataRoute.Sitemap;

  return [...staticRoutes];
}
