// Egen side for intro til Øya glass Studio. Slik at Hanna kan fylle ut informasjon om verkstedet.

import {defineType, defineField } from 'sanity'

export const oyaglass = defineType({
    name: 'oyaglass',
    title: 'Øya glass Studio',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: Rule => Rule.required(), // gjør at feltet er obligatorisk å fylle ut
        }),
        defineField({
            name: 'bio',
            title: 'Bio',
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

