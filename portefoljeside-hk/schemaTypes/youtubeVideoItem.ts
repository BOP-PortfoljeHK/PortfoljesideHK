import { defineField, defineType } from 'sanity';

{/* Schema for YouTube video items, brukt i howItsMadeVideo dokumentet
  Måtte opprette et eget schema slik at vi kunne håndtere både videoer og bilder på en konsistent måte */}

export const youtubeVideoItem = defineType({
  name: 'youtubeVideoItem',
  title: 'Media section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'youtubeUrl',
      title: 'YouTube URL',
      type: 'url',
      description: 'Valgfritt felt for video',
      validation: (Rule) =>
        Rule.uri({
          allowRelative: false,
          scheme: ['http', 'https'],
        }),
    }),
   defineField({
  name: 'images',
  title: 'Images',
  type: 'array',
  of: [
    {
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt text',
          type: 'string',
        }),
      ],
    },
  ],
}),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'images.0',
      subtitle: 'youtubeUrl',
    },
  },
});