import typescriptEslint from "@typescript-eslint/eslint-plugin"
import globals from "globals"
import tsParser from "@typescript-eslint/parser"
import path from "node:path"
import { fileURLToPath } from "node:url"
import js from "@eslint/js"
import { FlatCompat } from "@eslint/eslintrc"
import { fixupConfigRules } from "@eslint/compat"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default fixupConfigRules([
  {
    ignores: [
      "public/sw.js",
      "public/workbox-*.js",
      "**/node_modules/*",
      "**/out/*",
      "**/.next/*",
      "coverage/*",
    ],
  },
  ...compat.extends(
    "next",
    "eslint:recommended",
    "plugin:jest/recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ),
  {
    plugins: {
      "@typescript-eslint": typescriptEslint,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest,
        ...globals.node,
      },

      parser: tsParser,
    },

    settings: {
      react: {
        version: "detect",
      },

      next: {
        rootDir: ".",
      },
    },

    rules: {
      "jest/expect-expect": [
        2,
        {
          assertFunctionNames: [
            "expect",
            "expectToBuyAndSellGear",
            "expectGearToDisplayMatrixDeviceTable",
          ],
        },
      ],

      "react/react-in-jsx-scope": 0,
      "react/display-name": 0,
      "react/prop-types": 0,
      "@typescript-eslint/explicit-function-return-type": 0,
      "@typescript-eslint/explicit-member-accessibility": 0,
      "@typescript-eslint/indent": 0,
      "@typescript-eslint/member-delimiter-style": 0,
      "@typescript-eslint/no-explicit-any": 0,
      "@typescript-eslint/no-var-requires": 0,
      "@typescript-eslint/no-use-before-define": 0,
      "@typescript-eslint/explicit-module-boundary-types": 0,

      "@typescript-eslint/no-unused-vars": [
        2,
        {
          argsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],

      "no-console": [
        2,
        {
          allow: ["warn", "error"],
        },
      ],
    },
  },
])
