import { defineType, defineField } from "sanity";

export const jewelrycollection = defineType({
    name: 'jewelrycollection',
    title: 'Jewelry Collection',
    type: 'document',   
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required(), // gjør at feltet er obligatorisk å fylle ut
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title', // genererer slug basert på title-feltet
            }
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true, // gjør det mulig å velge et fokuspunkt i bildet
            },
        }),
        defineField({
            name: 'gallery',
            title: 'Gallery',
            type: 'array',
            of: [{ type: 'image' }], // lar deg legge til flere bilder i galleriet
        }),
    ]
})
