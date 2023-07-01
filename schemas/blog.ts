export const blogSchema = {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
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
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {type: 'block'},
        {
          type: 'image',
          fields: [{type: 'text', name: 'alt', title: 'Alt'}],
          options: {
            hotspot: true,
          },
        },
        {
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
        },
      ],
    },
    {name: 'date', title: 'Date', type: 'datetime', validation: (Rule: any) => Rule.required()},
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'author'}],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule: any) => Rule.required(),
    },
  ],
}
