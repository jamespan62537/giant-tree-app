const pluginSortImports = require("@trivago/prettier-plugin-sort-imports");
const pluginTailwindcss = require("prettier-plugin-tailwindcss");

/**
 * @refs  https://github.com/tailwindlabs/prettier-plugin-tailwindcss/issues/31#issuecomment-1195411734
 */
/** @type {import("prettier").Parser}  */
const bothParser = {
  ...pluginSortImports.parsers.babel,
  parse: pluginTailwindcss.parsers.babel.parse,
};

/** @type {import("prettier").Plugin}  */
const mixedPlugin = {
  parsers: {
    babel: bothParser,
  },
};

module.exports = {
  plugins: [mixedPlugin],
  semi: true,
  singleQuote: false,
  printWidth: 140,
  importOrder: [
    "(^react$|^react/(.*)$)",
    "<THIRD_PARTY_MODULES>",
    "(.*)/pages/(.*)$",
    "(.*)/route/(.*)$",
    "(.*)/apis/(.*)$",
    "(.*)/store/(.*)$",
    "(.*)/actions/(.*)$",
    "(.*)/components/(.*)$",
    "(.*)/providers/(.*)$",
    "(.*)/hooks/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
