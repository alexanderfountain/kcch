export default {
  name: "sectionblock",
  title: "Section Block",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "sectionid",
      title: "Section ID",
      type: "string"
    },
    {
      name: "backgroundimage",
      title: "Background Image",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      title: "Background Color",
      name: "backgroundcolor",
      type: "string"
    },
    {
      name: "sectionblock",
      title: "Section Block",
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
