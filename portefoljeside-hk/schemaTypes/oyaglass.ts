import { defineField, defineType } from "sanity";

{/* Schema for "Øya glass studio"-seksjonen, med felt for tittel, bilder og biografi. */ }

export default defineType({
  name: "oyaglass",
  title: "Øya glass studio",
  description: "Content for the Øya glass studio section, including title, images, and bio.",
  type: "document",


  fields: [
    defineField({
      name: "title",
      title: "Title",
      description: "The title of the section, e.g. 'Øya glass studio'.",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "logo",
      title: "Logo",
      description: "The logo image for Øya glass studio.",
      type: "image",
      options: { hotspot: true },
    }),

    defineField({
      name: "images",
      title: "Images",
      description: "A collection of images related to Øya glass studio.",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),

    defineField({
      name: "bio",
      title: "Bio",
      description: "A brief biography of the Øya glass studio.",
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