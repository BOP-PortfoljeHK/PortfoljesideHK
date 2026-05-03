import { defineField, defineType } from "sanity";

{/* Schema for oppretting av slug-side serier. Alle serier er knyttet opp mot en kategori og inneholder en liste med verk som tilhører serien. 
  Blant annet navn, år, medium, dimensjoner, og bilde. */ }

export default defineType({
  name: "series",
  title: "Series",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      description: "The title of the series.",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      description: "The slug is used in the URL for the series page. It should be unique and descriptive.",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      description: "The category this series belongs to.",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "year",
      title: "Year",
      description: "The year the series was created or first exhibited.",
      type: "number",
    }),
    defineField({
      name: "description",
      title: "Description",
      description: "A detailed description of the series.",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "coverImage",
      title: "Cover-bilde",
      description: "This image will be used as the cover image for the series.",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "works",
      title: "Works in the series",
      type: "array",
      validation: (Rule) =>
        Rule.min(1).error("The series must contain at least one work"),
      of: [
        {
          type: "object",
          name: "seriesWork",
          title: "Work",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              description: "The title of the work.",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "year",
              title: "Year",
              description: "The year the work was created or first exhibited.",
              type: "number",
            }),
            defineField({
              name: "medium",
              title: "Medium",
              description: "The medium used to create the work.",
              type: "string",
            }),
            defineField({
              name: "dimensions",
              title: "Dimensions",
              description: "The dimensions of the work, typically in the format 'Height x Width x Depth cm'.",
              type: "string",
            }),
            defineField({
              name: "photo",
              title: "Photo",
              description: "Credit for the photo of the work, if applicable.",
              type: "string",
            }),
            defineField({
              name: "image",
              title: "Image",
              description: "An image of the work in the series.",
              type: "image",
              options: { hotspot: true },
              fields: [
                defineField({
                  name: "alt",
                  title: "Alt-tekst",
                  description: "A description of the image for accessibility purposes.",
                  type: "string",
                }),
              ],
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: "title",
              media: "image",
              subtitle: "medium",
            },
            prepare({ title, media, subtitle }) {
              return {
                title: title || "No title",
                media,
                subtitle: subtitle || "Work in series",
              };
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "year",
      media: "works.0.image",
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || "No title",
        subtitle: subtitle ? `Series · ${subtitle}` : "Series",
        media,
      };
    },
  },
});