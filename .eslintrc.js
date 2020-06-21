module.exports = {
  extends: ['wispamulet'],
  rules: {
    // your rules
    'no-console': 1,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/no-unused-vars': 1,
        'react/prop-types': 0,
        'no-unused-vars': 0
      },
    },
    {
      files: ['*.js', '*.jsx'],
      rules: {
        'react/jsx-props-no-spreading': 0,
      },
    },
  ],
};
