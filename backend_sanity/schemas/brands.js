export default {
  name: 'brands',
  title: 'Brands',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'imageurl',
      title: 'ImgURL',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
