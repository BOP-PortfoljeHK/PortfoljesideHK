import { defineType, defineField } from "sanity";

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