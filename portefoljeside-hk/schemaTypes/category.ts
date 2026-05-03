
import { defineField, defineType } from "sanity";

{/* Schema for å opprette kategori via slug */ }

export default defineType({
  name: "category",
  title: "Category",
  description: "Categories are used to group works and series. Each category will have its own page on the website.",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Navn",
      description: "Name of the category.",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (URL)",
      description: "The slug is used in the URL for the category page. It should be unique and descriptive.",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "coverImage",
      title: "Cover-bilde",
      description: "This image will be used as the cover image for the category page.",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "alttext",
      title: "Alt-tekst",
      description: "A description of the cover image for accessibility purposes.",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "coverImage",
    },
  },
});