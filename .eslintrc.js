module.exports = {
  extends: ['wispamulet'],
  rules: {
    // your rules
    'no-console': 1,
    "import/no-extraneous-dependencies": [
      "error",
      { "devDependencies":
        [ "**/*.test.js",
          "**/*.spec.js",
          "**/*.test.ts",
          "**/*.spec.ts",
          "**/*.test.tsx",
          "**/*.spec.tsx",
        ],
      },
    ],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // '@typescript-eslint/no-unused-vars': 0,
      },
    },
    {
      files: ['*.js', '*.jsx'],
      rules: {},
    },
  ],
};
