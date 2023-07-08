import {defineField, defineType} from 'sanity'

export const contactSchema = defineType({
  name: 'contact',
  type: 'document',
  title: 'Contact',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
  ],
})
