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
      description: 'The title of the page, e.g. "How It’s Made".',
      type: 'string',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      description: 'A short description of the page, e.g. "Behind the scenes of the projects".',
      type: 'array',
      of: [{ type: 'block' }],
    }),

    defineField({
      name: 'videos',
      title: 'Media sections',
      description: 'This is where you can add individual media + descriptions for the "How It’s Made" page. You can add as many sections as you like, and they will be displayed in the order you add them.',
      type: 'array',
      of: [
        {
          type: 'youtubeVideoItem',
        
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