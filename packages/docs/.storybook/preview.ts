import type { Preview } from '@storybook/react';
import '../../tokens/dist/tokens/variables.css';
import '../../components/dist/style.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
