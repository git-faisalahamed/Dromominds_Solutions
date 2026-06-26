export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Site Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Site Description',
      type: 'text',
    },
    {
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
    },
    {
      name: 'indiaOfficeAddress',
      title: 'India Office Address',
      type: 'text',
    },
    {
      name: 'indiaOfficePhone',
      title: 'India Office Phone',
      type: 'string',
    },
    {
      name: 'netherlandsOfficeAddress',
      title: 'Netherlands Office Address',
      type: 'text',
    },
    {
      name: 'netherlandsOfficePhone',
      title: 'Netherlands Office Phone',
      type: 'string',
    },
    {
      name: 'linkedinUrl',
      title: 'LinkedIn URL',
      type: 'url',
    },
    {
      name: 'twitterUrl',
      title: 'Twitter URL',
      type: 'url',
    }
  ],
}
