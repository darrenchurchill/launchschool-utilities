/**
 * eslint.config.mjs
 * This file should have the `mjs` extension unless `package.json` specifies
 * `type = "module"`.
 */
import globals from "globals";
import babelParser from "@babel/eslint-parser";
import js from "@eslint/js";
import stylisticJs from "@stylistic/eslint-plugin-js";
import nodePlugin from "eslint-plugin-n";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest,
        ...globals.jquery,
        ...globals.node,
        alert: true,
        define: true,
        document: true,
        global: true,
        location: true,
        require: true,
        window: true,
        Handlebars: true,
        BigInt: true,
      },

      parser: babelParser,
      ecmaVersion: "latest", // the eslint v9 default

      parserOptions: {
        requireConfigFile: false,

        ecmaFeatures: {
          impliedStrict: true,
        },
      },
    },

    plugins: {
      "n": nodePlugin,
      "@stylistic/js": stylisticJs,
    },

    rules: {
      "accessor-pairs": "error",
      "array-callback-return": "error",
      "@stylistic/js/arrow-spacing": "error",
      "block-scoped-var": "error",

      "@stylistic/js/brace-style": [
        "error",
        "1tbs",
        {
          allowSingleLine: true,
        },
      ],

      "camelcase": "error",
      "complexity": "error",
      "consistent-return": "error",
      "constructor-super": "error",
      "eqeqeq": "error",

      "id-length": [
        "error",
        {
          exceptions: ["_", "a", "b", "x", "y", "z"],
          min: 2,
          properties: "never",
        },
      ],

      "@stylistic/js/indent": [
        "error",
        2,
        {
          SwitchCase: 1,
        },
      ],

      "@stylistic/js/keyword-spacing": "error",
      "@stylistic/js/linebreak-style": "error",
      "max-depth": "error",

      "@stylistic/js/max-len": [
        "error",
        {
          code: 80,
          tabWidth: 2,
          ignoreRegExpLiterals: false,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreTrailingComments: true,
          ignoreUrls: true,
        },
      ],

      "max-lines-per-function": [
        "error",
        {
          max: 20,
          skipBlankLines: true,
          skipComments: true,
        },
      ],

      "max-nested-callbacks": [
        "error",
        {
          max: 4,
        },
      ],

      "max-statements": [
        "error",
        {
          max: 15,
        },
        {
          ignoreTopLevelFunctions: true,
        },
      ],

      "@stylistic/js/max-statements-per-line": "error",
      "@stylistic/js/new-parens": "error",
      "no-array-constructor": "error",
      "no-async-promise-executor": "error",
      "no-bitwise": "error",
      "n/no-deprecated-api": "error",
      "no-caller": "error",
      "no-class-assign": "error",

      "@stylistic/js/no-confusing-arrow": [
        "error",
        {
          allowParens: true,
        },
      ],

      "no-console": "off",
      "no-const-assign": "error",

      "no-constant-condition": [
        "error",
        {
          checkLoops: false,
        },
      ],

      "no-debugger": "off",
      "no-dupe-class-members": "error",
      "no-duplicate-imports": "error",
      "no-eq-null": "error",
      "no-eval": "error",
      "no-extend-native": "error",
      "no-implicit-globals": "error",
      "no-implied-eval": "error",
      "no-inner-declarations": ["error", "both"],
      "no-iterator": "error",
      "no-label-var": "error",
      "no-lonely-if": "error",
      "no-loop-func": "error",
      "no-misleading-character-class": "error",
      "@stylistic/js/no-mixed-operators": "error",
      "no-multi-assign": "error",
      "no-multi-str": "error",
      "@stylistic/js/no-multiple-empty-lines": "error",
      "no-nested-ternary": "error",
      "no-new": "error",
      "no-new-func": "error",
      "n/no-new-require": "error",
      "no-object-constructor": "error",
      "no-new-native-nonconstructor": "error",
      "no-new-wrappers": "error",
      "no-octal-escape": "error",
      "n/no-process-env": "error",
      "n/no-process-exit": "error",
      "no-prototype-builtins": "off",

      "no-restricted-syntax": [
        "error",
        {
          message: "Do not use `with` statement.",
          selector: "WithStatement",
        },
      ],

      "no-return-assign": "error",
      "no-return-await": "error",
      "no-script-url": "error",

      "no-self-assign": [
        "error",
        {
          props: true,
        },
      ],

      "no-self-compare": "error",
      "no-sequences": "error",
      "no-shadow-restricted-names": "error",
      "@stylistic/js/no-tabs": "error",
      "no-template-curly-in-string": "error",
      "no-this-before-super": "error",
      "no-throw-literal": "error",
      "@stylistic/js/no-trailing-spaces": "error",
      "no-unmodified-loop-condition": "error",
      "no-unneeded-ternary": "error",
      "no-unused-expressions": "error",

      "no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          vars: "local",
        },
      ],

      "no-use-before-define": [
        "error",
        {
          functions: false,
        },
      ],

      "no-useless-call": "error",
      "no-useless-catch": "error",
      "no-useless-computed-key": "error",
      "no-useless-rename": "error",
      "no-useless-return": "error",
      "no-with": "error",
      "@stylistic/js/nonblock-statement-body-position": "error",
      "@stylistic/js/one-var-declaration-per-line": "error",
      "operator-assignment": "error",
      "prefer-promise-reject-errors": "error",
      "@stylistic/js/quote-props": ["error", "consistent-as-needed"],
      "radix": "error",
      "require-await": "error",
      "require-yield": "error",

      "@stylistic/js/semi": [
        "error",
        "always",
        {
          omitLastInOneLineBlock: true,
        },
      ],

      "@stylistic/js/semi-spacing": "error",
      "@stylistic/js/semi-style": "error",
      "@stylistic/js/space-before-blocks": "error",
      "@stylistic/js/space-infix-ops": "error",

      "@stylistic/js/space-unary-ops": [
        "error",
        {
          words: true,
          nonwords: false,
        },
      ],

      "vars-on-top": "error",
    },
  },
];
