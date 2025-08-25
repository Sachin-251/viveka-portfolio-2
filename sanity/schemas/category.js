export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3
    },
    {
      name: 'color',
      title: 'Color',
      type: 'string',
      description: 'Hex color code for category styling'
    }
  ],
  preview: {
    select: {
      title: 'title',
      description: 'description'
    },
    prepare(selection) {
      const { title, description } = selection
      return {
        title: title,
        subtitle: description
      }
    }
  }
}
