export default {
  name: 'work',
  title: 'Work',
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
      rows: 4,
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessibility.',
          options: {
            isHighlighted: true,
          },
        },
      ],
      validation: Rule => Rule.required()
    },
    {
      name: 'link',
      title: 'Project Link',
      type: 'url'
    },
    {
      name: 'github',
      title: 'GitHub Repository',
      type: 'url'
    },
    {
      name: 'technologies',
      title: 'Technologies Used',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'featured',
      title: 'Featured Work',
      type: 'boolean',
      description: 'Mark as featured to show on homepage'
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which to display this work (lower numbers appear first)'
    }
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [
        { field: 'order', direction: 'asc' }
      ]
    },
    {
      title: 'Title',
      name: 'titleAsc',
      by: [
        { field: 'title', direction: 'asc' }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      featured: 'featured'
    },
    prepare(selection) {
      const { title, featured } = selection
      return {
        title: title,
        subtitle: featured ? 'Featured' : ''
      }
    }
  }
}
