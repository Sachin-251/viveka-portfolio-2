/* eslint-disable import/no-anonymous-default-export */
export default {
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    {
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: Rule => Rule.required()
        },
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string'
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text'
        },
        {
          name: 'image',
          title: 'Hero Image',
          type: 'image',
          options: {
            hotspot: true
          }
        },
        {
          name: 'ctaText',
          title: 'CTA Button Text',
          type: 'string'
        },
        {
          name: 'ctaLink',
          title: 'CTA Button Link',
          type: 'string'
        }
      ]
    },
    {
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Service Title',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'description',
              title: 'Service Description',
              type: 'text'
            },
            {
              name: 'icon',
              title: 'Icon',
              type: 'string'
            }
          ]
        }
      ]
    },
    {
      name: 'education',
      title: 'Education',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'degree',
              title: 'Degree',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'institution',
              title: 'Institution',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'year',
              title: 'Year',
              type: 'string'
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text'
            }
          ]
        }
      ]
    },
    {
      name: 'experience',
      title: 'Experience',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Job Title',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'company',
              title: 'Company',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'period',
              title: 'Period',
              type: 'string'
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text'
            }
          ]
        }
      ]
    },
    {
      name: 'sampleWorks',
      title: 'Sample Works',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'work' }]
        }
      ]
    }
  ]
}
