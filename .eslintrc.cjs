const rules = {
  // Warns if console.log is left in code. If you want to leave it permanently, use 'info'
  'no-console': ['warn', { allow: ['info', 'warn', 'error'] }],

  'react/jsx-filename-extension': 'off',
  'import/prefer-default-export': 'off',

  // Discourage reassigning parameters but allow for special cases
  'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['draft'] }],

  // Allow using ++/--. It has it's own place under the Sun.
  'no-plusplus': 'off',

  // Seems to be normal to have functions defined all over the place
  // Classes? Lets define those helper classes at the top of the file.
  'no-use-before-define': ['error', { functions: false, classes: true }],

  // While properly formatted string using templates
  // might be more readable over concatenation,
  // auto-fix is very intrusive, and renders not the best results.
  'prefer-template': 'off',

  // Restriction of using for x of xes is a bit heavy handed
  'no-restricted-syntax': 'off',

  // Underscores are not the enemy
  'no-underscore-dangle': 'off',

  // Allow importing dev dependencies
  'import/no-extraneous-dependencies': [
    'error',
    {
      devDependencies: ['**/*.test.ts', '**/*.test.tsx', 'test/helper.ts'],
    },
  ],

  // Highlight TODO comments in the code to make them more visible
  'no-warning-comments': ['warn', { terms: ['todo', 'fixme', 'fix'] }],

  // We don't need React in scope
  'react/react-in-jsx-scope': 0,

  // This one is nice to have but should not fail builds.
  'import/order': 'warn',

  // Some times we want to explicitly return undefined to ensure there are no
  // mistaken function return types
  'no-useless-return': 'off',

  // Make sure images have alternates applied
  'jsx-a11y/alt-text': [
    'error',
    {
      elements: ['img', 'object', 'area', 'input[type="image"]'],
      img: ['Image'],
      object: ['Object'],
      area: ['Area'],
      'input[type="image"]': ['InputImage'],
    },
  ],

  // Nameless functions are okay
  'func-names': 'off',
  'no-unused-vars': 'warn',
  'import/no-unresolved': ['off'],
  'import/extensions': 'off',
  'react/self-closing-comp': 'off',
  'react/no-unknown-property': 'off',
};

module.exports = {
  // ...
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  extends: ['plugin:astro/recommended', 'airbnb', 'plugin:astro/recommended'],

  // ...
  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: ['*.astro'],
      // Allows Astro components to be parsed.
      parser: 'astro-eslint-parser',
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {
        ...rules,
      },
    },
    // ...
  ],
};
