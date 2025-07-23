import { defineField, defineType } from "sanity";

export const startup = defineType({
    name: "startup",
    title: "Startup",
    type: "document",
    fields: [
        defineField({
            name: "title",
            type: "string",
        }),
        defineField({
            name: "slug",
            type: "slug",
            options: {
                source: 'title'
            }
        }),
        defineField({
            name: "author",
            type: "reference",
            to: [{ type: 'author' }],
        }),
        defineField({
            name: "views",
            type: "number",
        }),
        defineField({
            name: "description",
            type: "text",
        }),
        defineField({
            name: "category",
            type: "string",
            validation: (Rule) => Rule.required().min(1).max(20).error('Please enter a category name.'),
        }),
        defineField({
            name: "image",
            type: "url",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "pitch",
            type: "markdown",
        }),
        defineField({
            name: "monthWinner",
            type: "boolean",
            title: "Startup of the Month",
        }),
        defineField({
            name: "weekWinner",
            type: "boolean",
            title: "Startup of the Week",
        }),
    ],
})