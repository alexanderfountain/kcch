export default {
  name: "landing",
  title: "Landing",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      title: "Hide Title",
      name: "hidetitle",
      type: "boolean"
    },
    {
      name: "pageid",
      title: "Page ID",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      }
    },
    {
      title: "Sections",
      name: "sections",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "sectionblock" }, { type: "sectionentitylist" }]
        }
      ]
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
