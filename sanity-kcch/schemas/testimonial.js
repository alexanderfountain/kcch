export default {
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Name",
      type: "string"
    },
    {
      name: "url",
      title: "URL",
      type: "url"
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
