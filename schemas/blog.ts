import {defineType, defineField, defineArrayMember} from 'sanity'

export const blogSchema = defineType({
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      fields: [
        {type: 'text', name: 'alt', title: 'Alt', validation: (Rule: any) => Rule.required()},
      ],
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        defineArrayMember({type: 'block'}),
        defineArrayMember({
          type: 'image',
          fields: [{type: 'text', name: 'alt', title: 'Alt'}],
          options: {
            hotspot: true,
          },
        }),
        defineArrayMember({
          type: 'code',
          name: 'code',
          title: 'Code',
          options: {
            language: 'typescript',
            languageAlternatives: [
              {title: 'Javascript', value: 'javascript'},
              {title: 'Typescript', value: 'typescript'},
              {title: 'HTML', value: 'html'},
              {title: 'CSS', value: 'css'},
            ],
            withFilename: true,
          },
        }),
      ],
    }),
    defineField({name: 'published_at', title: 'Published At', type: 'date'}),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'author'}],
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      title: 'Categories',
      name: 'categories',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'category'}],
        }),
      ],
    }),
  ],
})
