export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
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
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'text',
      rows: 4
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string'
    },
    {
      name: 'website',
      title: 'Website',
      type: 'url'
    },
    {
      name: 'social',
      title: 'Social Media',
      type: 'object',
      fields: [
        {
          name: 'twitter',
          title: 'Twitter',
          type: 'url'
        },
        {
          name: 'linkedin',
          title: 'LinkedIn',
          type: 'url'
        },
        {
          name: 'github',
          title: 'GitHub',
          type: 'url'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}
