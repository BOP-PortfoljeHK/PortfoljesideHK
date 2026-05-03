import { defineField, defineType } from 'sanity';

{/* Schema for YouTube video items, brukt i howItsMadeVideo dokumentet
  Måtte opprette et eget schema slik at vi kunne håndtere både videoer og bilder på en konsistent måte */}

export const youtubeVideoItem = defineType({
  name: 'youtubeVideoItem',
  title: 'Media section',
  description: 'A section for either a YouTube video or images, used in the "How It’s Made" page.',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'The title of the video or image section.',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      description: 'A short description of the video or image section.',
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
  description: 'Optional field for images, if you want to include images',
  type: 'array',
  of: [
    {
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt text',
          description: 'Alternative text for the image, used for accessibility.',
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