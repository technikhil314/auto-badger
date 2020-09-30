module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
  ],
  env: {
    es6: true,
    jest: true,
    node: true,
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js"],
      },
    },
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    "no-alert": "error",
    "import/order": "error",
    "no-multiple-empty-lines": [
      "error",
      {
        max: 1,
        maxEOF: 1,
        maxBOF: 0,
      },
    ],
    semi: ["error", "always"],
  },
  globals: {
    globalThis: true,
  },
  plugins: ["import"],
  ignorePatterns: ["node_modules/", "keycloak-scripts/"],
};
