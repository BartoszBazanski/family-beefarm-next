import type { CollectionConfig } from 'payload'

export const Honeys: CollectionConfig = {
  slug: 'honeys',
  admin: {
    useAsTitle: 'name',
  },
  labels: {
    singular: 'Miód',
    plural: 'Miody',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      unique: true,
      label: 'Nazwa',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'promoted',
      type: 'checkbox',
      label: 'Wyróżniony',
      defaultValue: false,
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Opis',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Zdjęcie',
      admin: {
        description: 'Zdjęcie miodu',
      },
    },
    {
      name: 'additional_image',
      type: 'upload',
      relationTo: 'media',
      label: 'Dodatkowe zdjęcie',
      admin: {
        description: 'Zdjęcie pożytku',
      },
    },
  ],
};
