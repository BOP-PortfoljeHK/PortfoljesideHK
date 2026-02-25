import { defineType, defineField } from "sanity";

export const frontpage = defineType({
    name: "frontpage",
    title: "Frontpage",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "heroImage",
            title: "Hero image",
            type: "image",
            options: { hotspot: true },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "heroHeading",
            title: "Hero heading",
            type: "string",
        }),
        defineField({
            name: "heroSubheading",
            title: "Hero subheading",
            type: "text",
            rows: 3,
        }),
    ],
});