export const authorSchema = {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'avatar',
      title: 'Avatar',
      type: 'image',
      fields: [
        {type: 'text', name: 'alt', title: 'Alt', validation: (Rule: any) => Rule.required()},
      ],
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
  ],
}
