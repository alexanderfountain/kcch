export default {
  name: "news",
  title: "News",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "mainimage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent"
    }
  ],
  preview: {
    select: {
      title: "title"
    },
    prepare(selection) {
      const { title } = selection;
      return Object.assign({}, selection, {
        title: title
      });
    }
  }
};
