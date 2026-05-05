import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'work',
  title: 'Work',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: "The title of the work.",
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      description: "The slug is used in the URL for the work's page. It should be unique and descriptive.",
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      description: "The category this work belongs to.",
      type: 'reference',
      to: [{type: 'category'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      description: "A detailed description of the work.",
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: "coverImage",
      title: "Cover-bilde",
      description: "This image will be used as the cover image for the work.",
      type: "image",
      options: { hotspot: true },
        fields: [
          {
            name: "alt",
            title: "Alt-tekst",
            description: "A description of the cover image for accessibility purposes.",
            type: "string",
        }
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'year',
      title: 'Year',
      description: "The year the work was created or first exhibited.",
      type: 'number',
    }),
    defineField({
      name: 'medium',
      title: 'Medium',
      description: "The medium used to create the work.",
      type: 'string',
    }),
    defineField({
      name: 'dimensions',
      title: 'Dimensions',
      description: "The dimensions of the work, typically in the format 'Height x Width x Depth cm'.",
      type: 'string',
    }),
    defineField({
      name: "photo",
      title: "Photo taken by",
      description: "Credit for the photo of the work, if applicable.",
      type: "string",
    }),
    defineField({
      name: 'images',
      title: 'Images',
      description: 'Images of the work in the series.',
      type: 'array',
      of: [{
        type: 'image',
        options: { hotspot: true },
        fields: [
          defineField({
            name: 'alt',
            title: 'Alt-tekst',
            description: 'A description of the image for accessibility purposes.',
            type: 'string',
          }),
        ],
      }],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'year',
      media: 'image',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || 'No title',
        subtitle: subtitle ? `Series · ${subtitle}` : 'Series',
        media,
      };
    },
  },
});