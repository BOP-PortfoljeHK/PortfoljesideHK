import { defineField, defineType } from "sanity";

export default defineType({
  name: "work",
  title: "Work",
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
      name: "series",
      title: "Serie",
      type: "reference",
      to: [{ type: "series" }],
      validation: (Rule) => Rule.required(),
      options: {
        filter: ({ document }) => {
          const categoryRef = (document as any)?.category?._ref;

          if (!categoryRef) {
            return { filter: "false" };
          }

          return {
            filter: "category._ref == $categoryRef",
            params: { categoryRef },
          };
        },
      },
      description: "Velg kategori først, så får du riktig serie-liste.",
    }),

    defineField({
      name: "year",
      title: "År",
      type: "number",
    }),

    defineField({
      name: "medium",
      title: "Medium",
      type: "string",
      description: 'F.eks. "Oil on canvas", "Bronze", "Acrylic on paper".',
    }),

    defineField({
      name: "dimensions",
      title: "Dimensjoner",
      type: "string",
      description: 'F.eks. "80×100 cm".',
    }),

    defineField({
      name: "images",
      title: "Bilder",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Alt-tekst",
              type: "string",
              description: "Kort beskrivelse av bildet (valgfritt).",
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.min(1).warning("Legg gjerne inn minst 1 bilde."),
    }),

    defineField({
      name: "description",
      title: "Beskrivelse",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "category.title",
      media: "images.0",
    },
  },
});