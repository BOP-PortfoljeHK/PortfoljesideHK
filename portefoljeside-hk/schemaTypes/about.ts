import { defineField, defineType } from "sanity";

{/* Schema for "about" eller "om meg"-seksjonen på porteføljesiden. Inkluderer felt for tittel, portrettbilde og biografi */}

export default defineType({
  name: "about",
  title: "About",
  description: "This is the schema for the about page.",
  type: "document",


  fields: [
    defineField({
      name: "title",
      title: "Title",
      description: "The title of the about page. This will be displayed as the main heading on the page.",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "portrait",
      title: "Portrait",
      description: "The portrait image for the about page.",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt-tekst",
          type: "string",
        }
      ]
    }),

    defineField({
      name: "bio",
      title: "Bio",
      description: "The biography text for the about page. This can include information about the artist, their background, and their work.",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    prepare() {
      return { title: "Om" };
    },
  },
});