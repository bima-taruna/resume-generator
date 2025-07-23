import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import eslintPluginCypress from "eslint-plugin-cypress";

/** @type {import("eslint").Linter.Config[]} */
export default [
  { ignores: ["dist"] },

  // 🧠 Base JS/React config for your app
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },

  // 🧪 Cypress config applied only to Cypress test files
  {
    files: ["cypress/**/*.cy.{js,ts,jsx,tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...eslintPluginCypress.environments.globals,
      },
    },
    plugins: {
      cypress: eslintPluginCypress,
    },
    rules: {
      ...eslintPluginCypress.configs.recommended.rules,
    },
  },
];
