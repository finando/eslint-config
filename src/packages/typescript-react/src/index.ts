import base from '@finando/eslint-config-typescript';

import { type Configuration } from '@project/types';

const configuration: Configuration = {
  ...base,
  extends: [...base.extends, 'airbnb', 'airbnb/hooks'],
  plugins: [...base.plugins, 'jsx-a11y', 'react', 'react-hooks'],
  rules: {
    ...base.rules,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'function-declaration',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
    'react/jsx-no-bind': 'off',
  },
};

export = configuration;
