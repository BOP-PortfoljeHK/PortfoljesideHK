import { defineField, defineType } from 'sanity';

{/* Schema for privacy policy page, this is the page the client sees in Sanity. This page is used to display information about privacy policy*/ }

export default defineType({
    name: 'privacyPolicy',
    title: "Privacy Policy",
    description: "Content for the privacy policy page, including title and content sections.",
    type: 'document',
    
    fields: [
        defineField({
            name: 'title',
            title: 'Page title',
            description: 'The title of the page, e.g. "Privacy Policy".',
            type: 'string',
        }), 
        
        defineField({
            name: 'content',
            title: 'Content',
            description: 'The main content of the privacy policy page.',
            type: 'array', 
            of: [{type: 'block'}],
        }),
    ],
    preview: {
        select: {
            title: 'title',
        },
        prepare({title}) {
            return {
                title: title || 'No title',
            };
        },
    },
});


