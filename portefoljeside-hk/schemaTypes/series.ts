import { defineField, defineType } from "sanity";

export default defineType({
  name: "series",
  title: "Series",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
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
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "number",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
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
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "year",
              title: "Year",
              type: "number",
            }),
            defineField({
              name: "medium",
              title: "Medium",
              type: "string",
            }),
            defineField({
              name: "dimensions",
              title: "Dimensions",
              type: "string",
            }),
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
              fields: [
                defineField({
                  name: "alt",
                  title: "Alt-tekst",
                  type: "string",
                }),
              ],
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "array",
              of: [{ type: "block" }],
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