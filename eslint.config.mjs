import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"], // include ts/tsx if used
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      js,
      react: pluginReact,
    },
    rules: {
      "react/no-unescaped-entities": "off", // ✅ disables the rule
    },
    extends: ["js/recommended"],
  },
  pluginReact.configs.flat.recommended,
]);
