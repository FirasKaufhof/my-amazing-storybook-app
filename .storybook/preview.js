import { addParameters } from '@storybook/vue';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import '@storybook/addon-console';

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  backgrounds: [
    { name: 'white', value: '#ffffff', default: true },
    { name: 'twitter', value: '#00aced'},
    { name: 'facebook', value: '#3b5998' },
  ],
});
