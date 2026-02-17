import {defineType, defineField } from 'sanity'

export const about = defineType({
    name: 'about',
    title: 'About',
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
            name: 'profileImage',
            title: 'Profile Image',
            type: 'image',
            options: {
                hotspot: true, // gjør det mulig å velge et fokuspunkt i bildet
            },
        }),
    ]
})

