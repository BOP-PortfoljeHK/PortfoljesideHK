import { defineType, defineField } from "sanity";

// Denne filen definerer "work" dokumenttypen i Sanity. Hver "work" representerer et enkelt verk/prosjekt,
// og kan ha en tittel, slug, kategori (referanse til "page"), hovedbilde, galleri og beskrivelse. 
// "Work" dokumentene brukes for å vise verk automatisk på kategorisidene basert på hvilken kategori (Page) de tilhører. 
// Denne delen vises kun i redigeringsgrensesnittet.

export const work = defineType({
  name: "work",
  title: "Work",
  type: "document",
  fields: [
    defineField({
  name: "info",
  title: "Hva er dette?",
  type: "text",
  readOnly: true,
  initialValue:
    "Work er et enkelt verk/prosjekt. Velg hvilken kategori (Page) det tilhører. Dette brukes for å vise verk automatisk på kategorisidene. Denne delen vises kun i redigeringsgrensesnitttet.",
}),
    defineField({
      name: "title",
      title: "Tittel",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (R) => R.required(),
    }),
    defineField({
      name: "categoryPage",
      title: "Kategori (Page)",
      type: "reference",
      to: [{ type: "page" }],
      validation: (R) => R.required(),
      description: "Pek til f.eks. en spesifikk kategori/kolleksjon (Page) for å gruppere arbeider. Valgfritt.",
    }),

     defineField({
      name: "mainImage",
      title: "Hovedbilde",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt-tekst", type: "string" }],
    }),

    defineField({
      name: "gallery",
      title: "Galleri",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),

    defineField({
      name: "description",
      title: "Beskrivelse",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
});