import {defineField, defineType} from 'sanity'

export const resourceSchema = defineType({
  name: 'resource',
  title: 'Resource',
  type: 'document',
  fields: [
    defineField({
      name: 'link',
      title: 'Link',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'source',
      title: 'Source',
      type: 'reference',
      to: {type: 'source'},
      validation: (Rule: any) => Rule.required(),
    }),
  ],
})
