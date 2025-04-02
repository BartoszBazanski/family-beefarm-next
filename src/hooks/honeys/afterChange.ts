import type { CollectionAfterChangeHook } from 'payload';

export const afterChangeHook: CollectionAfterChangeHook = async ({ collection }) => {
  if (collection.slug === 'honeys') {
    try {
      const path = '/';

      const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || `https://${process.env.VERCEL_URL}`}/api/revalidate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          secret: process.env.REVALIDATION_TOKEN,
          path,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error(`Revalidation failed for ${path}:`, errorData);
      } else {
        console.log(`Successfully revalidated path: ${path}`);
      }
    } catch (error) {
      console.error('Revalidation failed:', error);
    }
  }
};
