import { addParameters } from '@storybook/vue';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import '@storybook/addon-console';

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  backgrounds: [
    { name: 'light', value: '#ffffff', default: true },
    { name: 'twitter', value: '#00aced'},
    { name: 'facebook', value: '#3b5998' },
    { name: 'grey', value: '#333333' },
    { name: 'dark', value: '#1a0306' },
  ],

});
