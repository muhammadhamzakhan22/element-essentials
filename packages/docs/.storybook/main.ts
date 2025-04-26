import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@chromatic-com/storybook',
    '@storybook/experimental-addon-test',
    '@storybook/addon-a11y',
    '@storybook/addon-links',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  viteFinal: async (config) => {
    // Ensure Vite resolves the CSS and modules from workspace packages
    config.resolve = {
      ...config.resolve,
      alias: {
        '@element-essentials/tokens': '@element-essentials/tokens/dist/tokens',
        '@element-essentials-component-styles': require('path').resolve(
          __dirname,
          '../../../components/src/styles.css'
        ),
      },
    };
    config.optimizeDeps = config.optimizeDeps || {};
    config.optimizeDeps.include = [
      ...((config.optimizeDeps && config.optimizeDeps.include) || []),
      '@element-essentials/components',
      '@element-essentials/tokens',
    ];
    config.server = config.server || {};
    config.server.fs = config.server.fs || {};
    config.server.fs.allow = [
      ...((config.server.fs && config.server.fs.allow) || []),
      require('path').resolve(__dirname, '../../components'),
      require('path').resolve(__dirname, '../../tokens'),
      require('path').resolve(__dirname, '../src'),
    ];
    return config;
  },
};

export default config;
