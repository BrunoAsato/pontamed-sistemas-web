module.exports = {
  extends: ['next/core-web-vitals', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': ['error'],
    'react/prop-types': 'off', // React não fique pedindo para criar os prop-types o tempo todo
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
};
