import { defineField, defineType } from "sanity";

export default defineType({
  name: "homePage",
  title: "Home page",
  type: "document",
  fields: [
    defineField({
      name: "heroImage",
      title: "Hero-bilde",
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