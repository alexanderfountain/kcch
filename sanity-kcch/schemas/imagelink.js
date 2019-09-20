export default {
  name: "imagelink",
  title: "Image Link",
  type: "object",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "url",
      title: "URL",
      type: "url",
      validation: false
    }
  ]
};
