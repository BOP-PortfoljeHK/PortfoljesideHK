import { defineField, defineType } from "sanity";

export default defineType({
  name: "oyaglass",
  title: "Øya glass studio",
  type: "document",


  fields: [
    defineField({
      name: "title",
      title: "Tittel",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "portrait",
      title: "Portrett",
      type: "image",
      options: { hotspot: true },
    }),

    defineField({
      name: "bio",
      title: "Bio",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "highlights",
      title: "Høydepunkter",
      description: "Kort liste (utstillinger, priser, presse, osv.)",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],

  preview: {
    prepare() {
      return { title: "Om" };
    },
  },
});