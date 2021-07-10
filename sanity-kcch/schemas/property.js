export default {
  name: "property",
  title: "Property",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "mainimage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "teaser",
      title: "Teaser",
      type: "blockContent",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare(selection) {
      const { title } = selection;
      return Object.assign({}, selection, {
        title: title,
      });
    },
  },
};
