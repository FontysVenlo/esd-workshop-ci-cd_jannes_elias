
/* eslint-env node */
import js from "@eslint/js";
import ts from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";

export default [
  js.configs.recommended,
  {
    files: ["**/*.ts"],
    languageOptions: { parser: ts },
    plugins: { "@typescript-eslint": tsPlugin },
    rules: {
      "no-unused-vars": "warn"
    }
  }
];
