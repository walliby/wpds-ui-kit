// add process.env
require("dotenv").config();

module.exports = {
  stories: ["../ui/**/src/*.stories.@(ts|tsx|js|jsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  previewBody: (body) => `${body}`,
  features: {
    storyStoreV7: true,
    interactionsDebugger: true,
  },
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
  typescript: {
    check: true,
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent
          ? /@radix-ui/.test(prop.parent.fileName) ||
            !/node_modules/.test(prop.parent.fileName)
          : true,
      compilerOptions: {
        allowSyntheticDefaultImports: false,
      },
    },
  },
};
