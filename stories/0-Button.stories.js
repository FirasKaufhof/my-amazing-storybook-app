import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';

import MyButton from '../src/components/Button/MyButton.vue';

export default {
  title: "Buttons",
  decorators: [withKnobs, withA11y],
  component: MyButton,
  parameters: {
    notes: 'We have here a different type of buttons that they are ready to use',
  },
};

export const defaultButton = () => ({
  components: { MyButton },
  methods: { action: action('clicked') },
  template: `<MyButton @click="action" :isDisabled="false" label="Default Button"/>`
});

export const roundedButton = () => ({
  components: { MyButton },
  template: `<MyButton :isRounded="true" :isDisabled="false" label="Default Button"/>`
});

export const buttonWithKnobs = () => ({
  components: { MyButton },
  props: {
    isDisabled: {
      default: boolean('Disabled', false)
    },
    label: {
      default: text('Label', 'Button With Knobs')
    },
    isRounded: {
      default: boolean('Rounded', false),
      desc: 'hallo'
    }
  },
  template: `<MyButton :isRounded="isRounded" :isDisabled="isDisabled" :label="label"/>`
});

export const InaccessibleButton = () => ({
  components: { MyButton },
  props: {
    isDisabled: {
      default: boolean('Disabled', false)
    }
  },
  template: `<MyButton :isDisabled="false"/>`
});
