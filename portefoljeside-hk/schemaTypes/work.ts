import {defineField, defineType} from 'sanity'

{/* Definerer en Sanity-skjema for "work" eller enkeltarbeider (kunstverk) med ulike felt som tittel, 
  kategori, år, medium, dimensjoner, tilgjengelighet, bilde og beskrivelse. Skjemaet inkluderer også en forhåndsvisning
  av hvordan dokumentet skal vises i Sanity-studioet. */}

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
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt-tekst',
          description: "A description of the image for accessibility purposes.",
          type: 'string',
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      description: "A detailed description of the work.",
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      subtitle: 'medium',
    },
    prepare({title, media, subtitle}) {
      return {
        title: title || 'No title',
        media,
        subtitle: subtitle || 'Single work',
      }
    },
  },
})