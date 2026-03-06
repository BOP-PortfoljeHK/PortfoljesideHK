import { defineField, defineType } from "sanity";

export default defineType({
  name: "series",
  title: "Series",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Tittel",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Beskrivelse",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "coverImage",
      title: "Cover-bilde",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "order",
      title: "Rekkefølge",
      type: "number",
      description: "Lavere tall = vises først (valgfritt).",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category.title",
      media: "coverImage",
    },
  },
});