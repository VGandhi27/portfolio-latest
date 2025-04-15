import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js, react: pluginReact }, // ✅ alias pluginReact as 'react'
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      "react/no-unescaped-entities": "off", // ✅ Turn off the apostrophe warning
    },
    extends: ["js/recommended"],
  },
  pluginReact.configs.flat.recommended,
]);
