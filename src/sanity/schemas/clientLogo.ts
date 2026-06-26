export default {
  name: 'clientLogo',
  title: 'Client Logo',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Company Name',
      type: 'string',
    },
    {
      name: 'logo',
      title: 'Logo Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'region',
      title: 'Region',
      type: 'string',
      options: {
        list: [
          { title: 'North America', value: 'na' },
          { title: 'Europe', value: 'eu' },
          { title: 'Middle East', value: 'me' },
          { title: 'Asia Pacific', value: 'asia' },
        ],
      },
    },
    {
      name: 'link',
      title: 'Link (Optional)',
      type: 'url',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
    }
  ],
}
