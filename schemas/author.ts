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
    {name: 'avatar', title: 'Avatar', type: 'image', validation: (Rule: any) => Rule.required()},
  ],
}
