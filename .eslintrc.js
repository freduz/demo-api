module.exports = {
  extends: ['airbnb-base'],
  plugins: ['prettier'],
  rules: {
    'no-console': 'off',
    'no-param-reassign': ['error', { props: false }],
    'no-unused-vars': 'off',
  },
};
