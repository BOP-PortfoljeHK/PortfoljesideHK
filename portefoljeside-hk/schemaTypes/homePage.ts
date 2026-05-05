import { defineField, defineType } from "sanity";

{/* Eget schema for forsiden, med et felt for å kunne laste opp et bakgrunnsbilde. */ }

export default defineType({
  name: "homePage",
  title: "Home page",
  description: "This is the schema for the home page. It currently only has a field for a hero image, but more fields can be added in the future if needed.",
  type: "document",
  fields: [
    defineField({
      name: "heroImage",
      title: "Hero-bilde",
      description: "This image will be used as the hero image/background image on the home page. It should be a high-quality image that represents the overall theme of the website.",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
      fields: [
        defineField({
          name: "alt",
          title: "Alt-tekst",
          type: "string",
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: "heroImage.alt",
      media: "heroImage",
    },
    prepare() {
      return {
        title: "Forsidebilde",
      };
    },
  },
});