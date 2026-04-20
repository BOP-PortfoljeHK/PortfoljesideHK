import { defineField, defineType } from 'sanity';

{/* Schema for privacy policy page, this is the page the client sees in Sanity. This page is used to display information about privacy policy*/ }

export default defineType({
    name: 'privacyPolicy',
    title: "Privacy Policy",
    type: 'document',
    
    fields: [
        defineField({
            name: 'title',
            title: 'Page title',
            type: 'string',
        }), 
        
        defineField({
            name: 'content',
            title: 'Content',
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


