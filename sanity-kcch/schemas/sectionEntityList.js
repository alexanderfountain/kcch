export default {
  name: "sectionentitylist",
  title: "Section Entity List",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      title: "Hide Title",
      name: "hidetitle",
      type: "boolean",
    },
    {
      name: "sectionid",
      title: "Section ID",
      type: "string",
    },
    {
      name: "backgroundimage",
      title: "Background Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      title: "Background Color",
      name: "backgroundcolor",
      type: "string",
    },
    {
      title: "Entity Type",
      name: "entitytype",
      type: "string",
      options: {
        list: [
          { title: "News", value: "news" },
          { title: "Blog", value: "blog" },
          { title: "Testimonial", value: "testimonial" },
          { title: "Gallery", value: "gallery" },
          { title: "Landing", value: "landing" },
        ],
      },
    },
    {
      title: "Number to display",
      name: "displaynumber",
      type: "number",
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
