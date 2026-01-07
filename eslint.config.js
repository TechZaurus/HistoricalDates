const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const reactPlugin = require("eslint-plugin-react");
const prettierConfig = require("eslint-config-prettier");
const prettierPlugin = require("eslint-plugin-prettier");
const globals = require("globals");

module.exports = tseslint.config(
  {
    ignores: ["dist/", "build/", "node_modules/", "webpack.config.ts", "eslint.config.js"],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: reactPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      "prettier/prettier": "error",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "@typescript-eslint/no-require-imports": "off", 
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  prettierConfig,
);
