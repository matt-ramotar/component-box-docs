/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docsSidebar: ["index", "installation"],
  apiSidebar: [
    {
      type: "category",
      label: "Foundation",
      link: {
        type: "doc",
        id: "foundation/foundation",
      },
      items: [
        "foundation/alignment",
        "foundation/arrangement",
        "foundation/borderstroke",
        "foundation/color",
        "foundation/contentscale",
        "foundation/margin",
        "foundation/modifier",
        "foundation/padding",
        "foundation/shape",
      ],
    },

    {
      type: "category",
      label: "ComponentBox",
      link: {
        type: "doc",
        id: "componentbox/componentbox",
      },
      items: [
        "componentbox/banner",
        "componentbox/modal",
        "componentbox/screen",
      ],
    },

    {
      type: "category",
      label: "Component",
      link: {
        type: "doc",
        id: "component/component",
      },
      items: [
        "component/box",
        "component/button",
        "component/column",
        "component/drawable",
        "component/row",
        "component/surface",
        "component/switch",
        "component/text",
        "component/vector",
      ],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = sidebars;
