import { withKnobs, text, boolean, object } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

import MyButton from '../src/components/Button/MyButton.vue';

export default {
  title: "Buttons",
  decorators: [withKnobs, withA11y],
  component: MyButton,
  parameters: {
    notes: 'We have here a different type of buttons that they are ready to use',
  },
};

// Assign `props` to the story's component, calling
// knob methods within the `default` property of each prop,
// then pass the story's prop data to the component’s prop in
// the template with `v-bind:` or by placing the prop within
// the component’s slot.
export const Button = () => ({
  components: { MyButton },
  props: {
    isDisabled: {
      default: boolean('Disabled', true)
    },
    label: {
      default: text('Label', 'Hello Storybook')
    }
  },
  template: `<MyButton :isDisabled="isDisabled" :label="label"></MyButton>`
});

export const InaccessibleButton = () => ({
  components: { MyButton },
  props: {
    isDisabled: {
      default: boolean('Disabled', false)
    }
  },
  template: `<MyButton :isDisabled="isDisabled"></MyButton>`
});
