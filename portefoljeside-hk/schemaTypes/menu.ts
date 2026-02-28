import { defineType, defineField } from "sanity";

// denne filen brukes for å vise hovedstrukturen i menyen, og for å kunne redigere den i Sanity Studio. 
// Den refererer til "page" dokumenter, som er de individuelle sidene på nettstedet. Ved å dra og slippe sidene i "items" arrayet

export const menu = defineType({
  name: "menu",
  title: "Meny",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Navn",
      type: "string",
      initialValue: "Hovedmeny",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "items",
      title: "Toppnivå-sider (dra for rekkefølge)",
      type: "array",
      of: [{ type: "reference", to: [{ type: "page" }] }],
      validation: (R) => R.required().min(1),
    }),
  ],
});