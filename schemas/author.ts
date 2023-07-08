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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule: any) => Rule.required(),
      options: {
        source: 'name',
        maxLength: 96,
      },
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
    defineField({
      name: 'about',
      title: 'About',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
  ],
})
