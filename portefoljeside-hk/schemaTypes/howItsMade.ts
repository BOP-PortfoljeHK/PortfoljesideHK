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
      of: [
        {
          type: 'object',
          name: 'youtubeVideoItem',
          title: 'Video section',
          fields: [

            defineField({
              name: 'title',
              title: 'Video title',
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
                      title: 'Alt-text',
                      type: 'string',
                    }),

                    defineField({
                      name: 'title',
                      title: 'Image title',
                      type: 'string',
                    }),

                    defineField({
                      name: 'description',
                      title: 'Description',
                      type: 'text',
                      rows: 3,
                    }),

                  ],
                },
              ],
            }),

          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'youtubeUrl',
            },
            prepare({ title, subtitle }) {
              return {
                title: title || 'No title',
                subtitle: subtitle || 'Video section',
              };
            },
          },
        },
      ],
    }),

  ],
});