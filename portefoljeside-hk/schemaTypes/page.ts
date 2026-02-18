import { defineType, defineField } from 'sanity'

export const page = defineType({
    name: 'page',
    title: 'Page',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title' },
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: 'parent',
            title: 'Overordnet side',
            type: 'reference',
            to: [{ type: 'page' }],
            description: 'Velg en side som skal være overordnet denne siden.'
        }),

                defineField({
                    name: 'content',
                    title: 'Content',
                    type: 'array',
                    of: [
                        { type: 'block' },
                        { type: 'image' },
                    ],
                }),
            ],
        })