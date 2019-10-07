// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import landing from "./landing";
import blockContent from "./blockContent";
import sectionBlock from "./sectionBlock";
import sectionEntityList from "./sectionEntityList";
import news from "./news";
import group from "./group";
import testimonial from "./testimonial";
import imagelink from "./imagelink";
import gallery from "./gallery";
import faq from "./faq";
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    landing,
    blockContent,
    sectionBlock,
    news,
    sectionEntityList,
    group,
    testimonial,
    imagelink,
    gallery,
    faq
  ])
});
