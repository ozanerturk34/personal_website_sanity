import {defineType, defineField} from 'sanity'

export const authorSchema = defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'avatar',
      title: 'Avatar',
      type: 'image',
      fields: [
        defineField({
          type: 'text',
          name: 'alt',
          title: 'Alt',
          validation: (Rule: any) => Rule.required(),
        }),
      ],
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    }),
  ],
})
