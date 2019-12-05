export default {
  'lint-staged': {
    'src/**/*.{js,jsx,json,css,scss}': ['prettier --write', 'git add'],
  },
};
