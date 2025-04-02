import { Honey } from "@/payload-types";

export const getImageSrc = (image: Honey['image']) => (typeof image === 'object' && image?.url ? image.url : '');
