module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  "rules": {
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["warn"],
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/prefer-interface": "off",
    "react/jsx-filename-extension": [
      "error",
      { "extensions": [".jsx", ".tsx"] }
    ],
    "react/prop-types": "off",
    "spaced-comment": ["error", "always", { "markers": ["/ <reference"] }],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ]
  }
};
