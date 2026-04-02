import { defineField, defineType } from "sanity";

{/* Schema for "Øya glass studio"-seksjonen, med felt for tittel, bilder og biografi. */ }

export default defineType({
  name: "oyaglass",
  title: "Øya glass studio",
  type: "document",


  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),

    defineField({
      name: "bio",
      title: "Bio",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    prepare() {
      return { title: "About" };
    },
  },
});