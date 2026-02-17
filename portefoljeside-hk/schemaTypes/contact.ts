// Kontaktside/-skjema for siden, her kan andre legge inn en beskjed til oppdragsgiver, 
// som skal bli videresent direkte til hennes e-post.

import {defineType, defineField } from 'sanity'

export const contact = defineType({
    name: 'contact',
    title: 'Contact',
    type: 'document',
    fields: [
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
            validation: Rule => Rule.required(), // gjør at feltet er obligatorisk å fylle ut
        }),
        defineField({
            name: "name",
            title: "Name",
            type: "string",
            validation: Rule => Rule.required(), // gjør at feltet er obligatorisk å fylle ut
        }),
        defineField({
            name: "message",
            title: "Message",
            type: "text",
            validation: Rule => Rule.required(), // gjør at feltet er obligatorisk å fylle ut
        }),
    ]
})
