import { defineType, defineField } from "sanity";

export const page = defineType({
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Tittel", type: "string", validation: (R) => R.required() }),

    defineField({
  name: "info",
  title: "Hva er dette?",
  type: "text",
  readOnly: true,
  initialValue:
    "Page er en side i menyen. Velg hvilken kategori (Page) det tilhører. Dette brukes for å vise sider automatisk på kategorisidene. Denne delen vises kun i redigeringsgrensesnitttet.",
}),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (R) => R.required(),
    }),

    defineField({
      name: "parent",
      title: "Foreldreside (parent)",
      type: "reference",
      to: [{ type: "page" }],
      description: "Velg en parent for å lage underside. Tom = toppnivå.",
    }),

    defineField({
      name: "showInMenu",
      title: "Vis i meny",
      type: "boolean",
      initialValue: true,
      description: "Skjul siden fra menyen, men siden kan fortsatt ha URL.",
    }),

    // Skjelett-innhold (kan utvides senere til portable text / sections)
    defineField({
      name: "intro",
      title: "Kort tekst (valgfritt)",
      type: "text",
      rows: 3,
    }),
        defineField({
         name: "content",
          title: "Innhold",
          type: "array",
          of: [
            { type: "block" },
            {
              type: "image",
              options: { hotspot: true },
              fields: [
                {
                  name: "alt",
                  title: "Alt-tekst",
                  type: "string",
                  validation: (R) => R.required().warning("Alt-tekst er bra for universell utforming"),
                },
              ],
            },
          ],
        }),
      ],
    });