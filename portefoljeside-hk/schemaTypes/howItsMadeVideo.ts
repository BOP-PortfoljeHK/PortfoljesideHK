import { defineField, defineType } from 'sanity';

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
      title: 'Videos',
      type: 'array',
      of: [{ type: 'youtubeVideoItem' }],
    }),
  ],
});