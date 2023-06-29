export const blogSchema = {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
    },
    {name: 'date', title: 'Date', type: 'datetime'},
    {name: 'author', title: 'Author', type: 'reference', to: [{type: 'author'}]},
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
    },
  ],
}
