import { defineField, defineType } from "sanity";

{/* Schema for "about" eller "om meg"-seksjonen på porteføljesiden. Inkluderer felt for tittel, portrettbilde, biografi og CV. */}

export default defineType({
  name: "about",
  title: "About",
  type: "document",


  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "portrait",
      title: "Portrait",
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
      name: "CV",
      title: "CV",
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