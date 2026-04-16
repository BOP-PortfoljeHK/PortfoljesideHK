import { defineField, defineType } from 'sanity';

{/* Schema for "How It's Made"-siden, dette er siden oppdragsgiver ser i Sanity. Denne siden brukes for å vise videoer og bilder */ }

export const howItsMadeVideo = defineType({
  name: 'howItsMadeVideo',
  title: "How It's Made",
  type: 'document',
  fields: [

    defineField({
      name: 'title',
      title: 'Page title',
      type: 'string',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),

    defineField({
      name: 'videos',
      title: 'Media sections',
      type: 'array',
      of: [{ type: 'youtubeVideoItem' }],
    }),
  ],
});