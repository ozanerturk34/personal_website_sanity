import {defineType, defineField} from 'sanity'

export const categorySchema = defineType({
  name: 'category',
  type: 'document',
  title: 'Category',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'color',
      title: 'Color',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
  ],
})
