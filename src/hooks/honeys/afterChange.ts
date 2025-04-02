import type { CollectionAfterChangeHook } from 'payload';

export const afterChangeHook: CollectionAfterChangeHook = async ({ collection }) => {
  if (collection.slug === 'honeys') {
    try {
      const path = '/';

      await fetch(
        `${process.env.NEXT_PUBLIC_SITE_URL}/api/revalidate?secret=${process.env.REVALIDATION_TOKEN}&path=${path}`,
      );

      console.log(`Revalidated path: ${path}`);
    } catch (error) {
      console.error('Revalidation failed:', error);
    }
  }
};
