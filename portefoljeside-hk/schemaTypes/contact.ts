import { defineField, defineType } from "sanity";

{/* Schema for kontaktsiden, inkludert introtekst, kontaktinfo (navn, e-post, telefon, sosiale lenker) og valgfritt kontaktskjema. */}

export default defineType({
  name: "contact",
  title: "Contact",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Tittel",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "intro",
      title: "Introtekst",
      type: "array",
      of: [{ type: "block" }],
    }),

    defineField({
      name: "contact",
      title: "Kontaktinfo",
      type: "object",
      fields: [
        defineField({
          name: "name",
          title: "Navn",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
    
      defineField({
          name: "email",
          title: "E-post",
          type: "string",
          validation: (Rule) =>
            Rule.required().custom((value) => {
              if (!value) return true;
              return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
                ? true
                : "Ugyldig e-postadresse";
            }),
        }),

      defineField({
        name: "phone",
        title: "Telefon",
        type: "string",
      }),  

        defineField({
          name: "socialLinks",
          title: "Sosiale lenker",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({
                  name: "label",
                  title: "Navn",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: "url",
                  title: "URL",
                  type: "url",
                  validation: (Rule) => Rule.required(),
                }),
              ],
              preview: {
                select: { title: "label", subtitle: "url" },
              },
            },
          ],
        }),
      ],
    }),

    defineField({
      name: "form",
      title: "Kontaktskjema (valgfritt)",
      description:
        "Hvis dere har skjema i frontend, kan dere styre tekst/labels her.",
      type: "object",
      fields: [
        defineField({ 
          name: "enabled", 
          title: "Aktivert", 
          type: "boolean" 
        }),
        defineField({ 
          name: "submitLabel", 
          title: "Knappetekst", 
          type: "string" 
        }),
        defineField({
          name: "successMessage",
          title: "Suksessmelding",
          type: "string",
        }),
      ],
    }),
  ],  

  preview: {
    prepare() {
      return { title: "Kontakt" };
    },
  },
});